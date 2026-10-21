import { NextRequest, NextResponse } from 'next/server';
import { rateLimiters, withRateLimit, getClientIdentifier } from '@/lib/rate-limiter';

// Kit v4 requires the numeric integer form ID, not the public embed UID.
// Verified against GET /v4/forms: snarkletter uid=d6f8f840c5, closeadmin uid=f77b69ba04.
const FORM_IDS: Record<string, string> = {
  snarkletter: '9340634',
  closeadmin:  '8934860',
};

export async function POST(request: NextRequest) {
  // Rate limit: 10 email captures per hour per IP
  const rateLimitResponse = withRateLimit(rateLimiters.emailCapture, getClientIdentifier)(request);
  if (rateLimitResponse) return rateLimitResponse;

  let email: string;
  let source: string;

  try {
    const body = await request.json();
    email  = (body.email  ?? '').trim().toLowerCase();
    source = (body.source ?? '').trim();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 });
  }

  const formId = FORM_IDS[source];
  if (!formId) {
    return NextResponse.json({ error: 'Unknown source' }, { status: 400 });
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    console.error('KIT_API_KEY is not configured');
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  try {
    // Step 1 — Create or find the subscriber.
    // Kit's POST /v4/subscribers is an upsert: creates a new subscriber if the email
    // is unknown, or returns the existing subscriber. We intentionally omit `state`
    // so Kit applies its own account-level double-opt-in settings rather than forcing
    // a state we choose here.
    // 200 = subscriber already existed, 201 = newly created.
    const createRes = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'X-Kit-Api-Key': apiKey,
      },
      body: JSON.stringify({ email_address: email }),
    });

    if (!createRes.ok) {
      const text = await createRes.text().catch(() => '');
      console.error(`Kit create-subscriber error ${createRes.status}:`, text);
      return NextResponse.json({ error: 'Subscription failed' }, { status: 502 });
    }

    // Step 2 — Add the now-existing subscriber to the form.
    // Kit's documentation states the subscriber must already exist before calling
    // this endpoint — Step 1 satisfies that precondition.
    // 200 = already on this form (active), 201 = newly associated (parse state).
    const formRes = await fetch(
      `https://api.kit.com/v4/forms/${formId}/subscribers`,
      {
        method:  'POST',
        headers: {
          'Content-Type':  'application/json',
          'X-Kit-Api-Key': apiKey,
        },
        body: JSON.stringify({ email_address: email }),
      }
    );

    if (formRes.status === 200) {
      return NextResponse.json({ success: true, status: 'active' });
    }

    if (formRes.status === 201) {
      const data = await formRes.json();
      const subscriberState: string = data?.subscriber?.state ?? '';
      const status = subscriberState === 'active' ? 'active' : 'pending';
      return NextResponse.json({ success: true, status });
    }

    // Step 2 failed — subscriber exists in Kit but was not added to the form.
    // Log the form ID and status for diagnostics; never report this as a success.
    const text = await formRes.text().catch(() => '');
    console.error(`Kit add-to-form error ${formRes.status} (form ${formId}):`, text);
    return NextResponse.json({ error: 'Subscription failed' }, { status: 502 });

  } catch (err) {
    console.error('Kit API request failed:', err);
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
}
