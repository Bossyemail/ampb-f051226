/**
 * Mocked test suite for /api/tc-intake route logic.
 * Runs in pure Node.js — no TypeScript, no real email sends.
 * Mirrors the logic in app/api/tc-intake/route.ts exactly.
 */

// ── Replicated route logic ────────────────────────────────────────────────────

const Q_LABELS = {
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

function label(val) {
  if (!val) return '—'
  return Q_LABELS[val] ?? val
}

function row(question, answer) {
  return `<tr><td>${question}</td><td>${answer || '—'}</td></tr>`
}

const CONSENT_TEXT = 'I understand that new files are accepted only from onboarded clients and must be submitted on the day the contract is fully executed and delivered.'

function buildEmail(d) {
  const software3 = Array.isArray(d.q3_software) ? d.q3_software : []
  const softwareParts = [
    ...software3.filter(s => s !== 'Other'),
    ...(software3.includes('Other')
      ? [d.q3_other ? `Other: ${d.q3_other}` : 'Other']
      : []),
  ]
  const software  = softwareParts.length ? softwareParts.join(', ') : '—'
  const q4Other   = d.q4 === 'other' && d.q4_other ? ` — ${d.q4_other}` : ''
  const comments  = d.comments ? `<em>${d.comments}</em>` : '—'
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' })
  const ackValue  = `"${CONSENT_TEXT}" — Accepted · ${timestamp} ET`

  return [
    row('Brokerage',               d.brokerage || '—'),
    row('Transaction sides',       label(d.transactionSides)),
    row('Start date',              label(d.startDate)),
    row('Pricing alignment',       label(d.q1)),
    row('Closings — past 12 mo',   label(d.q2_past)),
    row('Expected — next 12 mo',   label(d.q2_expected)),
    row('Platforms / systems',     software),
    row('Why looking now',         label(d.q4) + q4Other),
    row('Document delivery',       label(d.q5)),
    row('Urgency response',        label(d.q6)),
    row('Deadline management',     label(d.q7)),
    row('Additional comments',     comments),
    row('Submission acknowledged', ackValue),
  ].join('\n')
}

function validateRequired(data) {
  const { firstName, lastName, email, brokerage, consent } = data
  if (!firstName || !lastName || !email || !brokerage || !consent) {
    return { error: 'Missing required fields', status: 400 }
  }
  return null
}

// ── Test helpers ─────────────────────────────────────────────────────────────

let passed = 0
let failed = 0

function assert(description, condition, detail = '') {
  if (condition) {
    console.log(`  PASS  ${description}`)
    passed++
  } else {
    console.error(`  FAIL  ${description}${detail ? ` — ${detail}` : ''}`)
    failed++
  }
}

// ── Full valid payload ────────────────────────────────────────────────────────

const FULL_PAYLOAD = {
  firstName:        'Jane',
  lastName:         'Broker',
  email:            'jane@example.com',
  phone:            '305-555-1234',
  brokerage:        'Compass',
  transactionSides: 'both',
  startDate:        'within-30',
  q1:               'aligned',
  q2_past:          '6-10',
  q2_expected:      '11-20',
  q3_software:      ['Dotloop', 'DocuSign'],
  q3_other:         '',
  q4:               'volume',
  q4_other:         '',
  q5:               'same-day-copy',
  q6:               'step-updates',
  q7:               'proactive',
  comments:         'Looking to start as soon as possible.',
  consent:          true,
}

// ── Test 1: Required field validation — all fields present ───────────────────
console.log('\nTest 1: Required fields — valid payload')
assert('No validation error', validateRequired(FULL_PAYLOAD) === null)

// ── Test 2: Required field validation — missing firstName ────────────────────
console.log('\nTest 2: Required fields — missing firstName')
const noFirst = { ...FULL_PAYLOAD, firstName: '' }
assert('Returns 400 error', validateRequired(noFirst)?.status === 400)

// ── Test 3: Required field validation — missing email ────────────────────────
console.log('\nTest 3: Required fields — missing email')
const noEmail = { ...FULL_PAYLOAD, email: '' }
assert('Returns 400 error', validateRequired(noEmail)?.status === 400)

// ── Test 4: Required field validation — missing brokerage (new) ──────────────
console.log('\nTest 4: Required fields — missing brokerage')
const noBrokerage = { ...FULL_PAYLOAD, brokerage: '' }
assert('Returns 400 error', validateRequired(noBrokerage)?.status === 400)

// ── Test 5: Required field validation — missing consent ──────────────────────
console.log('\nTest 5: Required fields — missing consent')
const noConsent = { ...FULL_PAYLOAD, consent: false }
assert('Returns 400 error', validateRequired(noConsent)?.status === 400)

// ── Test 6: q4_other only shown when q4 === 'other' ──────────────────────────
console.log('\nTest 6: q4_other conditional (previously failing)')
const withQ4Other = { ...FULL_PAYLOAD, q4: 'other', q4_other: 'Expanding into new market' }
const emailQ4Other = buildEmail(withQ4Other)
assert('q4_other appended when q4 === other', emailQ4Other.includes('Expanding into new market'))

const withQ4OtherWrongSelection = { ...FULL_PAYLOAD, q4: 'volume', q4_other: 'Should not appear' }
const emailQ4OtherWrong = buildEmail(withQ4OtherWrongSelection)
assert('q4_other NOT shown when q4 !== other', !emailQ4OtherWrong.includes('Should not appear'))

// ── Test 7: q3_other only shown when 'Other' is in q3_software ───────────────
console.log('\nTest 7: q3_other conditional (previously failing)')
const withQ3Other = { ...FULL_PAYLOAD, q3_software: ['Dotloop', 'Other'], q3_other: 'Skyslope' }
const emailQ3Other = buildEmail(withQ3Other)
assert('q3_other shown when Other is in array', emailQ3Other.includes('Other: Skyslope'))

const withQ3OtherNoFlag = { ...FULL_PAYLOAD, q3_software: ['Dotloop'], q3_other: 'Skyslope' }
const emailQ3OtherNoFlag = buildEmail(withQ3OtherNoFlag)
assert('q3_other NOT shown when Other not in array', !emailQ3OtherNoFlag.includes('Skyslope'))

// ── Test 8: Consent acknowledgment row in email (previously failing) ──────────
console.log('\nTest 8: Consent acknowledgment row (previously failing)')
const emailFull = buildEmail(FULL_PAYLOAD)
assert('Email contains CONSENT_TEXT', emailFull.includes('new files are accepted only from onboarded clients'))
assert('Email contains Accepted', emailFull.includes('Accepted'))
assert('Email contains ET timestamp', emailFull.includes(' ET'))
assert('Row label "Submission acknowledged" present', emailFull.includes('Submission acknowledged'))

// ── Test 9: All 13 email rows present ────────────────────────────────────────
console.log('\nTest 9: All 13 email rows present')
const expectedRows = [
  'Brokerage',
  'Transaction sides',
  'Start date',
  'Pricing alignment',
  'Closings — past 12 mo',
  'Expected — next 12 mo',
  'Platforms / systems',
  'Why looking now',
  'Document delivery',
  'Urgency response',
  'Deadline management',
  'Additional comments',
  'Submission acknowledged',
]
expectedRows.forEach(r => assert(`Row: ${r}`, emailFull.includes(r)))

// ── Test 10: Q_LABELS resolve correctly ──────────────────────────────────────
console.log('\nTest 10: Q_LABELS resolve')
assert('transactionSides both', label('both') === 'Both buyer and seller sides')
assert('startDate within-30', label('within-30') === 'Within 30 days')
assert('q5 same-day-copy', label('same-day-copy').startsWith('I send the complete'))
assert('q6 step-updates', label('step-updates').startsWith('I stay in contact'))
assert('q7 proactive', label('proactive').startsWith('I understand the deadlines'))
assert('unknown value falls through', label('some-unknown') === 'some-unknown')

// ── Test 11: Software list formatting ────────────────────────────────────────
console.log('\nTest 11: Software list formatting')
const multi = { ...FULL_PAYLOAD, q3_software: ['Dotloop', 'DocuSign', 'Other'], q3_other: 'Skyslope' }
const emailMulti = buildEmail(multi)
assert('Multi-select — Other deduped, annotation appended', emailMulti.includes('Dotloop, DocuSign, Other: Skyslope'))
assert('No bare "Other" when annotation present',          !emailMulti.includes('Other, Other: Skyslope'))

const emptyArr = { ...FULL_PAYLOAD, q3_software: [] }
const emailEmpty = buildEmail(emptyArr)
assert('Empty software array shows dash', emailEmpty.includes('<td>—</td>'))

const otherNoAnnotation = { ...FULL_PAYLOAD, q3_software: ['Dotloop', 'Other'], q3_other: '' }
const emailOtherBare = buildEmail(otherNoAnnotation)
assert('Other with no annotation shows bare Other', emailOtherBare.includes('Dotloop, Other'))

// ── Test 12: Optional fields remain optional ──────────────────────────────────
console.log('\nTest 12: Optional fields remain optional')
const minimalValid = {
  firstName: 'Tom',
  lastName:  'Agent',
  email:     'tom@example.com',
  brokerage: 'EXP Realty',
  consent:   true,
}
assert('Minimal payload passes validation', validateRequired(minimalValid) === null)
const emailMinimal = buildEmail(minimalValid)
assert('Missing optional fields show dash', emailMinimal.includes('<td>—</td>'))

// ── Summary ───────────────────────────────────────────────────────────────────
console.log(`\n${'─'.repeat(50)}`)
console.log(`Tests: ${passed + failed} total — ${passed} passed, ${failed} failed`)
if (failed > 0) {
  console.error(`\n${failed} test(s) failed.`)
  process.exit(1)
} else {
  console.log('\nAll tests passed.')
}
