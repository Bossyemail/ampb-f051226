import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const Q_LABELS: Record<string, string> = {
  // Q1
  'aligned':           "It's in line with what I expect to pay",
  'more-info':         "I'd like to understand the service in more detail before deciding",
  'lower':             "I'm looking for a lower-cost option",
  // Q2
  '1-5': '1–5', '6-10': '6–10', '11-20': '11–20', '21-40': '21–40', '40+': '40+',
  // Q4
  'volume':            "I'm closing more than I can manage alone",
  'tc':                "My current TC isn't working out",
  'first':             "First time delegating this — want to see how it feels",
  'referral':          "A colleague or broker referred me",
  'structure':         "I want a more structured and consistent transaction process",
  'other':             'Something else',
  // Q5
  'same-day':          'The same day',
  'usually-same':      'Usually the same day, but occasionally the next business day',
  '1-2-days':          'Within 1–2 business days',
  'depends':           'It depends on how busy I am',
  'no-process':        "I don't currently have a consistent submission process",
  // Q6
  'full':              'The fully executed contract and all applicable addenda',
  'most':              'Most documents are included, with a few items occasionally pending',
  'contract-first':    'I usually send the contract first and provide the remaining documents later',
  'varies':            'It varies from transaction to transaction',
  'help-needed':       'I would need help creating a more consistent submission process',
  // Q7
  'delegate':          'I send the relevant information to the person handling it and trust them to take the next step.',
  'follow-up':         'I follow up when necessary but generally allow the process to work.',
  'frequent':          'I prefer frequent updates until the issue is completely resolved.',
  'all-channels':      'I tend to call, text, and email the people involved to make sure everyone is aware.',
  // Q8
  'time':              'Get more of my time back',
  'tracking':          'Stop personally tracking every moving piece',
  'process':           'Create a more consistent transaction process',
  'followup':          'Improve follow-up and organization',
  'client-exp':        'Provide a better client experience',
  'ownership':         'Have someone take ownership of the administrative side of my transactions',
  'misc':              'Have additional help available whenever miscellaneous tasks come up',
  // Q9
  'very-open':         'Very open — I want to improve how my business operates',
  'open-reason':       'Open, as long as I understand the reason behind the change',
  'prefer-existing':   'I prefer to keep my existing process',
  // Q10
  'highly':            'Highly experienced',
  'experienced':       'Experienced',
  'developing':        'Developing',
  'newer':             'Newer to the process',
  // Q11
  'proactive':         'I understand the deadlines, stay aware of their status, and address any issues before they become critical',
  'involved':          'I stay involved in the major deadlines but rely on my TC to help monitor the transaction',
  'rely':              'I generally rely on my TC, lender, or other parties to tell me when action is needed',
  'reactive':          'I tend to address deadlines and contingency issues as they come up',
}

function label(val: string | string[] | undefined): string {
  if (!val) return '—'
  if (Array.isArray(val)) return val.length ? val.map(v => Q_LABELS[v] ?? v).join(', ') : '—'
  return Q_LABELS[val] ?? val
}

function row(question: string, answer: string): string {
  return `
    <tr>
      <td style="padding:10px 16px;font-size:12px;color:#8c8888;letter-spacing:0.04em;text-transform:uppercase;font-family:monospace;vertical-align:top;white-space:nowrap;border-bottom:1px solid #e8e4db;">${question}</td>
      <td style="padding:10px 16px;font-size:14px;color:#363231;font-family:monospace;vertical-align:top;border-bottom:1px solid #e8e4db;">${answer || '—'}</td>
    </tr>`
}

function buildEmail(d: Record<string, unknown>): string {
  const q3 = [
    ...(d.q3_contracts as string[] ?? []),
    ...(d.q3_crm as string[] ?? []),
    ...(d.q3_ops as string[] ?? []),
    ...(d.q3_storage as string[] ?? []),
    ...(d.q3_other ? [d.q3_other as string] : []),
  ].join(', ') || '—'

  const q8 = label(d.q8 as string[])
  const q4Other = d.q4_other ? ` <em>(${d.q4_other})</em>` : ''
  const q12 = d.q12 ? `<em>${d.q12}</em>` : '—'

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
    ${row('Pricing alignment',      label(d.q1 as string))}
    ${row('Transactions / 12 mo',   label(d.q2 as string))}
    ${row('Current systems',        q3)}
    ${row('Why looking now',        label(d.q4 as string) + q4Other)}
    ${row('Submission speed',       label(d.q5 as string))}
    ${row("What's submitted",       label(d.q6 as string))}
    ${row('Urgency style',          label(d.q7 as string))}
    ${row('Goals with TC',          q8)}
    ${row('Open to process change', label(d.q9 as string))}
    ${row('RE experience',          label(d.q10 as string))}
    ${row('Deadline management',    label(d.q11 as string))}
    ${row('Anything else',          q12)}
  </table>
  <div style="padding:20px 32px;background:#f5f1e8;font-size:11px;color:#BCAFAF;letter-spacing:0.04em;">
    Submitted via aylenmontenegro.com/tc-services · ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })} ET
  </div>
</div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  let data: Record<string, unknown>
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { firstName, lastName, email, consent } = data
  if (!firstName || !lastName || !email || !consent) {
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
