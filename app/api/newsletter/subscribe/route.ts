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

  // Kit v4 API key authentication uses the X-Kit-Api-Key header.
  // Authorization: Bearer is for OAuth tokens only — do not conflate the two.
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    console.error('KIT_API_KEY is not configured');
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  try {
    const kitRes = await fetch(
      `https://api.kit.com/v4/forms/${formId}/subscribers`,
      {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Kit-Api-Key': apiKey,
        },
        body: JSON.stringify({ email_address: email }),
      }
    );

    // 200 = subscriber was already on this form — treat as active.
    // 201 = newly added — parse subscriber state.
    // All other non-2xx = a real error; never report success.
    if (kitRes.status === 200) {
      return NextResponse.json({ success: true, status: 'active' });
    }

    if (kitRes.status === 201) {
      const data = await kitRes.json();
      const subscriberState: string = data?.subscriber?.state ?? '';
      const status = subscriberState === 'active' ? 'active' : 'pending';
      return NextResponse.json({ success: true, status });
    }

    // Any other status (401, 404, 422, 5xx) is a failure.
    const text = await kitRes.text().catch(() => '');
    console.error(`Kit API error ${kitRes.status}:`, text);
    return NextResponse.json({ error: 'Subscription failed' }, { status: 502 });
  } catch (err) {
    console.error('Kit API request failed:', err);
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
}
