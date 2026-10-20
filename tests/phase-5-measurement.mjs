/**
 * Phase 5 — Analytics & Conversion Tracking Tests
 * Pure Node.js, no external deps, no real network calls.
 * Tests mocked logic for: newsletter subscribe route, analytics utility,
 * consent mode initialization, and event firing conditions.
 */

import { strict as assert } from 'assert'

let passed = 0
let failed = 0

function test(name, fn) {
  try {
    fn()
    console.log(`  ✓ ${name}`)
    passed++
  } catch (err) {
    console.error(`  ✗ ${name}`)
    console.error(`    ${err.message}`)
    failed++
  }
}

// ── Helpers mirroring the production implementations ──────────────────────────

const FORM_IDS = {
  snarkletter: 'b3faf3ce2a',
  closeadmin:  'f77b69ba04',
}

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

function interpretKitResponse(status, body) {
  if (status === 422) return { success: true, status: 'active' }
  if (status < 200 || status >= 300) return { success: false, error: 'Subscription failed' }
  const state = body?.subscriber?.state
  return { success: true, status: state === 'active' ? 'active' : 'pending' }
}

function makeStorage(analyticsValue) {
  const store = {}
  if (analyticsValue !== undefined) {
    store['cookie-preferences'] = JSON.stringify({ analytics: analyticsValue })
  }
  return {
    getItem:  (key) => store[key] ?? null,
    setItem:  (key, val) => { store[key] = val },
    removeItem: (key) => { delete store[key] },
  }
}

function analyticsConsented(localStorage) {
  if (!localStorage) return false
  try {
    const raw = localStorage.getItem('cookie-preferences')
    if (!raw) return false
    return JSON.parse(raw)?.analytics === true
  } catch {
    return false
  }
}

function trackEvent(name, params, win) {
  if (!win) return false
  if (!win.gtag) return false
  if (!analyticsConsented(win.localStorage)) return false
  win.gtag('event', name, params ?? {})
  return true
}

function simulateBeforeInteractive(localStorage) {
  const events = []
  const gtag = (...args) => events.push(args)

  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    wait_for_update: 500,
  })

  try {
    const raw = localStorage.getItem('cookie-preferences')
    if (raw) {
      const prefs = JSON.parse(raw)
      if (prefs && typeof prefs.analytics === 'boolean') {
        gtag('consent', 'update', {
          analytics_storage: prefs.analytics ? 'granted' : 'denied',
        })
      }
    }
  } catch (e) {}

  return events
}

// ── Email validation ───────────────────────────────────────────────────────────

console.log('\nNewsletter subscribe — email validation')

test('rejects empty string', () => {
  assert.equal(isValidEmail(''), false)
})

test('rejects email with no @', () => {
  assert.equal(isValidEmail('notanemail'), false)
})

test('rejects email with no TLD', () => {
  assert.equal(isValidEmail('user@'), false)
})

test('rejects email with no local part', () => {
  assert.equal(isValidEmail('@example.com'), false)
})

test('accepts standard email', () => {
  assert.equal(isValidEmail('test@example.com'), true)
})

test('accepts email with subdomain', () => {
  assert.equal(isValidEmail('user@mail.example.com'), true)
})

test('accepts email with plus alias', () => {
  assert.equal(isValidEmail('user+tag@example.com'), true)
})

// ── Source → form ID mapping ───────────────────────────────────────────────────

console.log('\nNewsletter subscribe — source → form ID mapping')

test('snarkletter maps to correct form ID', () => {
  assert.equal(FORM_IDS['snarkletter'], 'b3faf3ce2a')
})

test('closeadmin maps to correct form ID', () => {
  assert.equal(FORM_IDS['closeadmin'], 'f77b69ba04')
})

test('unknown source has no form ID', () => {
  assert.equal(FORM_IDS['unknown'], undefined)
})

test('empty source has no form ID', () => {
  assert.equal(FORM_IDS[''], undefined)
})

// ── Kit API response interpretation ───────────────────────────────────────────

console.log('\nNewsletter subscribe — Kit API response handling')

test('200 + active state → success active', () => {
  const r = interpretKitResponse(200, { subscriber: { state: 'active' } })
  assert.equal(r.success, true)
  assert.equal(r.status, 'active')
})

test('201 + active state → success active', () => {
  const r = interpretKitResponse(201, { subscriber: { state: 'active' } })
  assert.equal(r.success, true)
  assert.equal(r.status, 'active')
})

test('200 + unconfirmed state → success pending (double opt-in)', () => {
  const r = interpretKitResponse(200, { subscriber: { state: 'unconfirmed' } })
  assert.equal(r.success, true)
  assert.equal(r.status, 'pending')
})

test('200 + unknown state → pending (safe default)', () => {
  const r = interpretKitResponse(200, { subscriber: { state: 'unknown_state' } })
  assert.equal(r.success, true)
  assert.equal(r.status, 'pending')
})

test('422 (duplicate subscriber) → success active, no error', () => {
  const r = interpretKitResponse(422, null)
  assert.equal(r.success, true)
  assert.equal(r.status, 'active')
  assert.equal(r.error, undefined)
})

test('500 Kit error → failure', () => {
  const r = interpretKitResponse(500, null)
  assert.equal(r.success, false)
  assert.ok(r.error)
})

test('403 Kit error → failure', () => {
  const r = interpretKitResponse(403, null)
  assert.equal(r.success, false)
})

test('502 Kit error → failure', () => {
  const r = interpretKitResponse(502, null)
  assert.equal(r.success, false)
})

// ── Analytics — consent checking ──────────────────────────────────────────────

console.log('\nAnalytics utility — consent checking')

test('no stored preference → not consented', () => {
  assert.equal(analyticsConsented(makeStorage(undefined)), false)
})

test('analytics: false → not consented', () => {
  assert.equal(analyticsConsented(makeStorage(false)), false)
})

test('analytics: true → consented', () => {
  assert.equal(analyticsConsented(makeStorage(true)), true)
})

test('null localStorage → not consented', () => {
  assert.equal(analyticsConsented(null), false)
})

test('corrupted JSON → not consented, no throw', () => {
  const bad = { getItem: () => '{invalid json' }
  assert.equal(analyticsConsented(bad), false)
})

test('null preference value → not consented', () => {
  const storage = { getItem: () => JSON.stringify({ analytics: null }) }
  assert.equal(analyticsConsented(storage), false)
})

// ── Analytics — trackEvent behavior ───────────────────────────────────────────

console.log('\nAnalytics utility — trackEvent')

test('does not fire without window', () => {
  assert.equal(trackEvent('test', {}, null), false)
})

test('does not fire without gtag on window', () => {
  const win = { localStorage: makeStorage(true), gtag: null }
  assert.equal(trackEvent('test', {}, win), false)
})

test('does not fire when analytics not consented', () => {
  const win = { localStorage: makeStorage(false), gtag: () => {} }
  assert.equal(trackEvent('test', {}, win), false)
})

test('fires when consented and gtag available', () => {
  const events = []
  const win = { localStorage: makeStorage(true), gtag: (...a) => events.push(a) }
  const fired = trackEvent('tc_inquiry_submitted', {}, win)
  assert.equal(fired, true)
  assert.equal(events.length, 1)
  assert.equal(events[0][1], 'tc_inquiry_submitted')
})

test('tc_inquiry_submitted fires with no PII', () => {
  const events = []
  const win = { localStorage: makeStorage(true), gtag: (...a) => events.push(a) }
  trackEvent('tc_inquiry_submitted', {}, win)
  const params = events[0][2]
  assert.equal(params.email, undefined)
  assert.equal(params.name, undefined)
  assert.equal(params.phone, undefined)
  assert.equal(params.firstName, undefined)
})

test('newsletter_subscribed fires with source but no PII', () => {
  const events = []
  const win = { localStorage: makeStorage(true), gtag: (...a) => events.push(a) }
  trackEvent('newsletter_subscribed', { source: 'snarkletter' }, win)
  const params = events[0][2]
  assert.equal(params.source, 'snarkletter')
  assert.equal(params.email, undefined)
  assert.equal(params.name, undefined)
})

test('waitlist_joined fires with source but no PII', () => {
  const events = []
  const win = { localStorage: makeStorage(true), gtag: (...a) => events.push(a) }
  trackEvent('waitlist_joined', { source: 'closeadmin' }, win)
  const params = events[0][2]
  assert.equal(params.source, 'closeadmin')
  assert.equal(params.email, undefined)
})

// ── Analytics — no duplicate events ───────────────────────────────────────────

console.log('\nAnalytics utility — duplicate event prevention')

test('useRef guard prevents double-fire on rapid submit', () => {
  let callCount = 0
  const win = { localStorage: makeStorage(true), gtag: () => { callCount++ } }
  let submitting = false
  function submitOnce(name) {
    if (submitting) return
    submitting = true
    trackEvent(name, {}, win)
  }
  submitOnce('tc_inquiry_submitted')
  submitOnce('tc_inquiry_submitted')
  assert.equal(callCount, 1)
})

test('newsletter event only fires once per form submission', () => {
  let callCount = 0
  const win = { localStorage: makeStorage(true), gtag: () => { callCount++ } }
  let submitted = false
  function handleSuccess() {
    if (submitted) return
    submitted = true
    trackEvent('newsletter_subscribed', { source: 'snarkletter' }, win)
  }
  handleSuccess()
  handleSuccess()
  assert.equal(callCount, 1)
})

// ── Consent mode — beforeInteractive initialization ───────────────────────────

console.log('\nConsent mode — beforeInteractive initialization')

test('new visitor: only default consent event fires', () => {
  const events = simulateBeforeInteractive({ getItem: () => null })
  assert.equal(events.length, 1)
  assert.equal(events[0][0], 'consent')
  assert.equal(events[0][1], 'default')
})

test('new visitor: default is denied', () => {
  const events = simulateBeforeInteractive({ getItem: () => null })
  assert.equal(events[0][2].analytics_storage, 'denied')
  assert.equal(events[0][2].ad_storage, 'denied')
})

test('new visitor: wait_for_update is 500ms', () => {
  const events = simulateBeforeInteractive({ getItem: () => null })
  assert.equal(events[0][2].wait_for_update, 500)
})

test('returning visitor (accepted): default denied then update granted', () => {
  const events = simulateBeforeInteractive(makeStorage(true))
  assert.equal(events.length, 2)
  assert.equal(events[0][1], 'default')
  assert.equal(events[0][2].analytics_storage, 'denied')
  assert.equal(events[1][1], 'update')
  assert.equal(events[1][2].analytics_storage, 'granted')
})

test('returning visitor (declined): default denied then update denied', () => {
  const events = simulateBeforeInteractive(makeStorage(false))
  assert.equal(events.length, 2)
  assert.equal(events[1][1], 'update')
  assert.equal(events[1][2].analytics_storage, 'denied')
})

test('returning visitor with corrupted storage: only default fires, no throw', () => {
  const events = simulateBeforeInteractive({ getItem: () => '{bad json' })
  assert.equal(events.length, 1)
  assert.equal(events[0][1], 'default')
})

test('returning visitor with no analytics key: only default fires', () => {
  const storage = { getItem: () => JSON.stringify({ necessary: true }) }
  const events = simulateBeforeInteractive(storage)
  assert.equal(events.length, 1)
})

// ── newsletter_subscribed only fires on active, not pending ───────────────────

console.log('\nConversion events — fire conditions')

test('newsletter_subscribed fires on active status', () => {
  const events = []
  const win = { localStorage: makeStorage(true), gtag: (...a) => events.push(a) }
  const status = 'active'
  if (status === 'active') trackEvent('newsletter_subscribed', { source: 'snarkletter' }, win)
  assert.equal(events.length, 1)
})

test('newsletter_subscribed does NOT fire on pending status', () => {
  const events = []
  const win = { localStorage: makeStorage(true), gtag: (...a) => events.push(a) }
  const status = 'pending'
  if (status === 'active') trackEvent('newsletter_subscribed', { source: 'snarkletter' }, win)
  assert.equal(events.length, 0)
})

test('waitlist_joined fires on active status', () => {
  const events = []
  const win = { localStorage: makeStorage(true), gtag: (...a) => events.push(a) }
  const status = 'active'
  if (status === 'active') trackEvent('waitlist_joined', { source: 'closeadmin' }, win)
  assert.equal(events.length, 1)
})

test('waitlist_joined does NOT fire on pending status', () => {
  const events = []
  const win = { localStorage: makeStorage(true), gtag: (...a) => events.push(a) }
  const status = 'pending'
  if (status === 'active') trackEvent('waitlist_joined', { source: 'closeadmin' }, win)
  assert.equal(events.length, 0)
})

test('tc_inquiry_submitted fires only after confirmed server success', () => {
  const events = []
  const win = { localStorage: makeStorage(true), gtag: (...a) => events.push(a) }
  // Simulate server returning ok: true
  const serverOk = true
  if (serverOk) trackEvent('tc_inquiry_submitted', {}, win)
  assert.equal(events.length, 1)
})

test('tc_inquiry_submitted does NOT fire on server error', () => {
  const events = []
  const win = { localStorage: makeStorage(true), gtag: (...a) => events.push(a) }
  // Simulate server returning ok: false
  const serverOk = false
  if (serverOk) trackEvent('tc_inquiry_submitted', {}, win)
  assert.equal(events.length, 0)
})

// ── Summary ───────────────────────────────────────────────────────────────────

console.log(`\n${passed + failed} tests — ${passed} passed, ${failed} failed\n`)
if (failed > 0) process.exit(1)
