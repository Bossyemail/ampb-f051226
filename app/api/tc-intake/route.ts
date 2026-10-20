import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimiters, withRateLimit, getClientIdentifier } from '@/lib/rate-limiter'

const Q_LABELS: Record<string, string> = {
  // Q1 — pricing alignment
  'aligned':           "It's in line with what I expect to pay",
  'more-info':         "I'd like to understand the service in more detail before deciding",
  'lower':             "I'm looking for a lower-cost option",

  // Q2 — volume (shared for past and expected)
  '1-5': '1–5', '6-10': '6–10', '11-20': '11–20', '21-40': '21–40', '40+': '40+',

  // Q4 — why seeking TC
  'volume':    "I'm closing more than I can manage alone",
  'tc':        "My current TC isn't working out",
  'first':     "First time delegating this — want to see how it feels",
  'referral':  "A colleague or broker referred me",
  'structure': "I want a more structured and consistent transaction process",
  'other':     'Something else',

  // Q5 — contract delivery method
  'same-day-copy':   "I send the complete executed contract and addenda to all parties, copying my transaction manager, the same day.",
  'same-day-approx': "I generally send everything the same day, but sometimes the following business day.",
  'tc-first':        "I send the documents to my transaction manager first and have them distribute everything.",
  'varies':          "My process varies depending on the transaction.",
  'needs-info':      "I'm not familiar with these submission requirements and would like more information.",

  // Q6 — urgency response (neutral phrasing)
  'inform-direct':    "I share the relevant details with the responsible party and leave the next step with them.",
  'periodic-checkin': "I check in periodically while the issue is being resolved.",
  'step-updates':     "I stay in contact at each step until the issue is fully resolved.",
  'multi-channel':    "I reach out across multiple channels to make sure everyone involved has the information.",

  // Q7 — deadline management
  'proactive': "I understand the deadlines, stay aware of their status, and address any issues before they become critical",
  'involved':  "I stay involved in the major deadlines but rely on my TC to help monitor the transaction",
  'rely':      "I generally rely on my TC, lender, or other parties to tell me when action is needed",
  'reactive':  "I tend to address deadlines and contingency issues as they come up",

  // transactionSides
  'buyer':  "Buyer-side primarily",
  'seller': "Seller-side primarily",
  'both':   "Both buyer and seller sides",

  // startDate
  'within-30':  "Within 30 days",
  '1-3-months': "Within 1–3 months",
  'exploring':  "Exploring options — no specific timeline",
}

function label(val: string | undefined): string {
  if (!val) return '—'
  return Q_LABELS[val] ?? val
}

function row(question: string, answer: string): string {
  return `
    <tr>
      <td style="padding:10px 16px;font-size:12px;color:#8c8888;letter-spacing:0.04em;text-transform:uppercase;font-family:monospace;vertical-align:top;white-space:nowrap;border-bottom:1px solid #e8e4db;">${question}</td>
      <td style="padding:10px 16px;font-size:14px;color:#363231;font-family:monospace;vertical-align:top;border-bottom:1px solid #e8e4db;">${answer || '—'}</td>
    </tr>`
}

const CONSENT_TEXT = 'I understand that new files are accepted only from onboarded clients and must be submitted on the day the contract is fully executed and delivered.'

function buildEmail(d: Record<string, unknown>): string {
  const software3: string[] = Array.isArray(d.q3_software) ? d.q3_software as string[] : []
  const softwareParts = [
    ...software3.filter(s => s !== 'Other'),
    ...(software3.includes('Other')
      ? [d.q3_other ? `Other: ${d.q3_other as string}` : 'Other']
      : []),
  ]
  const software  = softwareParts.length ? softwareParts.join(', ') : '—'
  const q4Other   = d.q4 === 'other' && d.q4_other ? ` — ${d.q4_other as string}` : ''
  const comments  = d.comments ? `<em>${d.comments as string}</em>` : '—'
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })
  const ackValue  = `&ldquo;${CONSENT_TEXT}&rdquo; &mdash; <strong>Accepted</strong> &middot; ${timestamp} ET`

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#EFEBE2;font-family:monospace;">
<div style="max-width:640px;margin:40px auto;background:#fff;border:1px solid #BCAFAF;">
  <div style="background:#114B4D;padding:28px 32px;">
    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(239,235,226,0.65);margin-bottom:6px;">New TC Intake</div>
    <div style="font-family:Georgia,serif;font-style:italic;font-size:26px;color:#EFEBE2;font-weight:600;">${d.firstName} ${d.lastName}</div>
    <div style="font-size:13px;color:rgba(239,235,226,0.8);margin-top:6px;">${d.email}${d.phone ? ` · ${d.phone}` : ''}</div>
  </div>
  <table style="width:100%;border-collapse:collapse;background:#fff;">
    ${row('Brokerage',             String(d.brokerage || '—'))}
    ${row('Transaction sides',     label(d.transactionSides as string))}
    ${row('Start date',            label(d.startDate as string))}
    ${row('Pricing alignment',     label(d.q1 as string))}
    ${row('Closings — past 12 mo', label(d.q2_past as string))}
    ${row('Expected — next 12 mo', label(d.q2_expected as string))}
    ${row('Platforms / systems',   software)}
    ${row('Why looking now',       label(d.q4 as string) + q4Other)}
    ${row('Document delivery',     label(d.q5 as string))}
    ${row('Urgency response',      label(d.q6 as string))}
    ${row('Deadline management',   label(d.q7 as string))}
    ${row('Additional comments',   comments)}
    ${row('Submission acknowledged', ackValue)}
  </table>
  <div style="padding:20px 32px;background:#f5f1e8;font-size:11px;color:#BCAFAF;letter-spacing:0.04em;">
    Submitted via aylenmontenegro.com/tc-services
  </div>
</div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  // Rate limit: 5 intake form submissions per hour per IP
  const rateLimitResponse = withRateLimit(rateLimiters.contact, getClientIdentifier)(req)
  if (rateLimitResponse) return rateLimitResponse

  let data: Record<string, unknown>
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { firstName, lastName, email, brokerage, consent } = data
  if (!firstName || !lastName || !email || !brokerage || !consent) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const to = process.env.INTAKE_EMAIL
  if (!to || !process.env.RESEND_API_KEY) {
    console.error('[tc-intake] Missing INTAKE_EMAIL or RESEND_API_KEY env var')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from:    'TC Intake <noreply@aylenmontenegro.com>',
      to,
      replyTo: email as string,
      subject: `New TC Intake: ${firstName} ${lastName}`,
      html:    buildEmail(data),
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[tc-intake] Resend error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
