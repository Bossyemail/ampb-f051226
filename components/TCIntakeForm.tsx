'use client'

import { useState } from 'react'
import styles from './TCIntakeForm.module.css'

type FormData = {
  firstName:        string
  lastName:         string
  email:            string
  phone:            string
  brokerage:        string
  transactionSides: string
  startDate:        string
  q1:               string
  q2_past:          string
  q2_expected:      string
  q3_software:      string[]
  q3_other:         string
  q4:               string
  q4_other:         string
  q5:               string
  q6:               string
  q7:               string
  comments:         string
  consent:          boolean
}

const RATES = [
  { tier: 'Under $500K',  price: '$595'         },
  { tier: '$500K–$1M',    price: '$795'         },
  { tier: '$1M–$3M',      price: '$995'         },
  { tier: '$3M–$5M',      price: '$1,295'       },
  { tier: '$5M–$10M',     price: '$1,495'       },
  { tier: '$10M–$15M',    price: '$1,795'       },
  { tier: '$15M–$20M',    price: '$2,195'       },
  { tier: '$20M+',        price: 'Custom quote' },
]

const VOLUME_OPTIONS: [string, string][] = [
  ['1-5',  '1–5'],
  ['6-10', '6–10'],
  ['11-20','11–20'],
  ['21-40','21–40'],
  ['40+',  '40+'],
]

const initial: FormData = {
  firstName: '', lastName: '', email: '', phone: '',
  brokerage: '', transactionSides: '', startDate: '',
  q1: '',
  q2_past: '', q2_expected: '',
  q3_software: [], q3_other: '',
  q4: '', q4_other: '',
  q5: '',
  q6: '',
  q7: '',
  comments: '',
  consent: false,
}

function RadioOption({ name, value, label, checked, onChange }: {
  name: string; value: string; label: string; checked: boolean; onChange: () => void
}) {
  const id = `${name}-${value}`
  return (
    <div className={styles.option}>
      <input type="radio" id={id} name={name} className={styles.optionInput} checked={checked} onChange={onChange} />
      <label htmlFor={id} className={styles.optionLabel}>{label}</label>
    </div>
  )
}

function CheckOption({ name, value, label, checked, onChange }: {
  name: string; value: string; label: string; checked: boolean; onChange: () => void
}) {
  const id = `${name}-${value}`
  return (
    <div className={styles.option}>
      <input type="checkbox" id={id} name={name} className={styles.optionInput} checked={checked} onChange={onChange} />
      <label htmlFor={id} className={styles.optionLabel}>{label}</label>
    </div>
  )
}

export default function TCIntakeForm() {
  const [data, setData] = useState<FormData>(initial)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function setRadio(field: keyof FormData, value: string) {
    setData(d => ({ ...d, [field]: value }))
  }

  function toggleSoftware(value: string) {
    setData(d => {
      const arr = d.q3_software
      return { ...d, q3_software: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] }
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/tc-intake', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <div className={styles.successTitle}>Received.</div>
        <p className={styles.successBody}>
          Thank you for submitting your intake. I review every inquiry personally.<br /><br />
          If it looks like we may be a good fit, I&rsquo;ll reach out to schedule a discovery call.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowText}>TC Services — New Client Intake</span>
      </div>
      <h2 className={styles.heading}>Let&rsquo;s make sure we&rsquo;re a fit.</h2>

      <div className={styles.introCopy}>
        <p>I cap active files to protect quality, speed, and accuracy. New clients are accepted by timing and fit. When capacity is full, inquiries are waitlisted, not rushed.</p>
        <p>This form helps me understand how your business currently operates and whether my service model is a good match.</p>
        <p>After you submit it, I&rsquo;ll review your responses. If it looks like there may be a fit, I&rsquo;ll reach out to schedule a discovery call so we can talk through your business, your process, and how we would work together.</p>
        <p>If we both decide to move forward, you&rsquo;ll complete onboarding before submitting your first transaction.</p>
        <p>Once you&rsquo;re onboarded, I plan for your deal flow and make space for your files. You won&rsquo;t need to check my availability every time you go under contract.</p>
      </div>

      <div className={styles.expectBox}>
        <div className={styles.expectTitle}>How it works</div>
        <div className={styles.expectFlow}>
          <span>Intake</span><span className={styles.expectArrow}>→</span>
          <span>Review</span><span className={styles.expectArrow}>→</span>
          <span>Discovery Call</span><span className={styles.expectArrow}>→</span>
          <span>Onboarding</span><span className={styles.expectArrow}>→</span>
          <span className={styles.stepFinal}>Ready to Submit</span>
        </div>
      </div>

      <div className={styles.rateBox}>
        <div className={styles.rateTitle}>Current Transaction Coordination Rates</div>
        <div className={styles.rateTable}>
          {RATES.map(r => (
            <div key={r.tier} className={styles.rateRow}>
              <span className={styles.rateTier}>{r.tier}</span>
              <span className={styles.ratePrice}>{r.price}</span>
            </div>
          ))}
        </div>
        <div className={styles.rateFoot}>
          <strong style={{ color: 'var(--black)', opacity: 0.8 }}>Add-On:</strong> Dual side — +$200<br />
          No setup fees. No cancellation fees.
        </div>
      </div>

      {/* ── Contact ───────────────────────────────────────────────────── */}
      <div className={styles.fieldGroup}>
        <div className={styles.nameRow}>
          <div>
            <label htmlFor="intake-first-name" className={styles.subLabel}>First Name</label>
            <input
              id="intake-first-name"
              type="text"
              className={styles.textInput}
              placeholder="First name"
              value={data.firstName}
              onChange={e => setData(d => ({ ...d, firstName: e.target.value }))}
              required
            />
          </div>
          <div>
            <label htmlFor="intake-last-name" className={styles.subLabel}>Last Name</label>
            <input
              id="intake-last-name"
              type="text"
              className={styles.textInput}
              placeholder="Last name"
              value={data.lastName}
              onChange={e => setData(d => ({ ...d, lastName: e.target.value }))}
              required
            />
          </div>
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.contactRow}>
          <div>
            <label htmlFor="intake-email" className={styles.subLabel}>Email</label>
            <input
              id="intake-email"
              type="email"
              className={styles.textInput}
              placeholder="you@example.com"
              value={data.email}
              onChange={e => setData(d => ({ ...d, email: e.target.value }))}
              required
            />
          </div>
          <div>
            <label htmlFor="intake-phone" className={styles.subLabel}>Phone</label>
            <input
              id="intake-phone"
              type="tel"
              className={styles.textInput}
              placeholder="(305) 000-0000"
              value={data.phone}
              onChange={e => setData(d => ({ ...d, phone: e.target.value }))}
            />
          </div>
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="intake-brokerage" className={styles.subLabel}>Brokerage</label>
        <input
          id="intake-brokerage"
          type="text"
          className={styles.textInput}
          placeholder="Your brokerage name"
          value={data.brokerage}
          onChange={e => setData(d => ({ ...d, brokerage: e.target.value }))}
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.subLabel} style={{ marginBottom: '10px' }}>Transactions you handle</div>
        <RadioOption name="transactionSides" value="buyer"  label="Buyer-side primarily"        checked={data.transactionSides === 'buyer'}  onChange={() => setRadio('transactionSides', 'buyer')}  />
        <RadioOption name="transactionSides" value="seller" label="Seller-side primarily"       checked={data.transactionSides === 'seller'} onChange={() => setRadio('transactionSides', 'seller')} />
        <RadioOption name="transactionSides" value="both"   label="Both buyer and seller sides" checked={data.transactionSides === 'both'}   onChange={() => setRadio('transactionSides', 'both')}   />
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.subLabel} style={{ marginBottom: '10px' }}>Anticipated start date</div>
        <RadioOption name="startDate" value="within-30"  label="Within 30 days"                           checked={data.startDate === 'within-30'}  onChange={() => setRadio('startDate', 'within-30')}  />
        <RadioOption name="startDate" value="1-3-months" label="Within 1–3 months"                        checked={data.startDate === '1-3-months'} onChange={() => setRadio('startDate', '1-3-months')} />
        <RadioOption name="startDate" value="exploring"  label="Exploring options — no specific timeline" checked={data.startDate === 'exploring'}  onChange={() => setRadio('startDate', 'exploring')}  />
      </div>

      {/* ── Q1: Fit & Investment ──────────────────────────────────────── */}
      <div className={styles.formSection}>
        <div className={styles.formSectionLabel}>Fit &amp; Investment</div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>01</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>How does the pricing above align with what you expect to invest in transaction coordination?</div>
            <RadioOption name="q1" value="aligned"   label="It's in line with what I expect to pay"                            checked={data.q1 === 'aligned'}   onChange={() => setRadio('q1', 'aligned')}   />
            <RadioOption name="q1" value="more-info" label="I'd like to understand the service in more detail before deciding" checked={data.q1 === 'more-info'} onChange={() => setRadio('q1', 'more-info')} />
            <RadioOption name="q1" value="lower"     label="I'm looking for a lower-cost option"                               checked={data.q1 === 'lower'}     onChange={() => setRadio('q1', 'lower')}     />
          </div>
        </div>
      </div>

      {/* ── Q2–Q3: Your Business ─────────────────────────────────────── */}
      <div className={styles.formSection}>
        <div className={styles.formSectionLabel}>Your Business</div>

        <div className={styles.qBlock}>
          <span className={styles.qNum}>02</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>How many transactions did you close in the past 12 months, and how many do you expect to close in the next 12?</div>

            <div style={{ marginBottom: '24px' }}>
              <div className={styles.subgroupTitle} style={{ marginBottom: '6px' }}>Past 12 months</div>
              {VOLUME_OPTIONS.map(([v, l]) => (
                <RadioOption key={`past-${v}`} name="q2_past" value={v} label={l} checked={data.q2_past === v} onChange={() => setRadio('q2_past', v)} />
              ))}
            </div>

            <div>
              <div className={styles.subgroupTitle} style={{ marginBottom: '6px' }}>Expected next 12 months</div>
              {VOLUME_OPTIONS.map(([v, l]) => (
                <RadioOption key={`exp-${v}`} name="q2_expected" value={v} label={l} checked={data.q2_expected === v} onChange={() => setRadio('q2_expected', v)} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.qBlock}>
          <span className={styles.qNum}>03</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>Which platforms do you currently use for contracts and file management?</div>
            <div className={styles.qSelectNote}>Select all that apply.</div>
            {(['Dotloop', 'DocuSign', 'Dropbox'] as const).map(v => (
              <CheckOption key={v} name="q3s" value={v} label={v} checked={data.q3_software.includes(v)} onChange={() => toggleSoftware(v)} />
            ))}
            <CheckOption name="q3s" value="Other" label="Other" checked={data.q3_software.includes('Other')} onChange={() => toggleSoftware('Other')} />
            {data.q3_software.includes('Other') && (
              <div className={styles.otherField}>
                <input
                  type="text"
                  className={styles.textInput}
                  style={{ fontSize: '13px' }}
                  placeholder="Please specify"
                  value={data.q3_other}
                  onChange={e => setData(d => ({ ...d, q3_other: e.target.value }))}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Q4–Q6: How You Work ──────────────────────────────────────── */}
      <div className={styles.formSection}>
        <div className={styles.formSectionLabel}>How You Work</div>

        <div className={styles.qBlock}>
          <span className={styles.qNum}>04</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>What&rsquo;s prompting you to look for transaction management support right now?</div>
            <RadioOption name="q4" value="volume"    label="I'm closing more than I can manage alone"                    checked={data.q4 === 'volume'}    onChange={() => setRadio('q4', 'volume')}    />
            <RadioOption name="q4" value="tc"        label="My current TC isn't working out"                             checked={data.q4 === 'tc'}        onChange={() => setRadio('q4', 'tc')}        />
            <RadioOption name="q4" value="first"     label="First time delegating this — want to see how it feels"       checked={data.q4 === 'first'}     onChange={() => setRadio('q4', 'first')}     />
            <RadioOption name="q4" value="referral"  label="A colleague or broker referred me"                           checked={data.q4 === 'referral'}  onChange={() => setRadio('q4', 'referral')}  />
            <RadioOption name="q4" value="structure" label="I want a more structured and consistent transaction process" checked={data.q4 === 'structure'} onChange={() => setRadio('q4', 'structure')} />
            <RadioOption name="q4" value="other"     label="Something else"                                              checked={data.q4 === 'other'}     onChange={() => setRadio('q4', 'other')}     />
            {data.q4 === 'other' && (
              <div className={styles.otherField}>
                <input
                  type="text"
                  className={styles.textInput}
                  style={{ fontSize: '13px' }}
                  placeholder="Tell me a bit more"
                  value={data.q4_other}
                  onChange={e => setData(d => ({ ...d, q4_other: e.target.value }))}
                />
              </div>
            )}
          </div>
        </div>

        <div className={styles.qBlock}>
          <span className={styles.qNum}>05</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>When you go under contract, how do you typically deliver the fully executed documents to your transaction manager?</div>
            <RadioOption name="q5" value="same-day-copy"   label="I send the complete executed contract and addenda to all parties, copying my transaction manager, the same day."  checked={data.q5 === 'same-day-copy'}   onChange={() => setRadio('q5', 'same-day-copy')}   />
            <RadioOption name="q5" value="same-day-approx" label="I generally send everything the same day, but sometimes the following business day."                               checked={data.q5 === 'same-day-approx'} onChange={() => setRadio('q5', 'same-day-approx')} />
            <RadioOption name="q5" value="tc-first"        label="I send the documents to my transaction manager first and have them distribute everything."                         checked={data.q5 === 'tc-first'}        onChange={() => setRadio('q5', 'tc-first')}        />
            <RadioOption name="q5" value="varies"          label="My process varies depending on the transaction."                                                                  checked={data.q5 === 'varies'}          onChange={() => setRadio('q5', 'varies')}          />
            <RadioOption name="q5" value="needs-info"      label="I'm not familiar with these submission requirements and would like more information."                              checked={data.q5 === 'needs-info'}      onChange={() => setRadio('q5', 'needs-info')}      />
            <p style={{
              fontFamily:  'var(--font-dm-mono), monospace',
              fontSize:    '11.5px',
              color:       'var(--greige)',
              lineHeight:  1.65,
              margin:      '16px 0 0 0',
              paddingTop:  '14px',
              borderTop:   '1px solid var(--lavender)',
            }}>
              New files are accepted only from onboarded clients after the fully executed contract and all applicable addenda have been distributed to all parties — with the contract manager copied — on the execution date.
            </p>
          </div>
        </div>

        <div className={styles.qBlock}>
          <span className={styles.qNum}>06</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>When something urgent or unexpected comes up in a transaction, which best describes how you typically respond?</div>
            <RadioOption name="q6" value="inform-direct"    label="I share the relevant details with the responsible party and leave the next step with them."              checked={data.q6 === 'inform-direct'}    onChange={() => setRadio('q6', 'inform-direct')}    />
            <RadioOption name="q6" value="periodic-checkin" label="I check in periodically while the issue is being resolved."                                             checked={data.q6 === 'periodic-checkin'} onChange={() => setRadio('q6', 'periodic-checkin')} />
            <RadioOption name="q6" value="step-updates"     label="I stay in contact at each step until the issue is fully resolved."                                      checked={data.q6 === 'step-updates'}     onChange={() => setRadio('q6', 'step-updates')}     />
            <RadioOption name="q6" value="multi-channel"    label="I reach out across multiple channels to make sure everyone involved has the information."               checked={data.q6 === 'multi-channel'}    onChange={() => setRadio('q6', 'multi-channel')}    />
          </div>
        </div>
      </div>

      {/* ── Q7: Transaction Management ───────────────────────────────── */}
      <div className={styles.formSection}>
        <div className={styles.formSectionLabel}>Transaction Management</div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>07</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>How do you typically manage time-sensitive contractual matters such as escrow deposits, inspection periods, financing milestones, and loan approval deadlines?</div>
            <RadioOption name="q7" value="proactive" label="I understand the deadlines, stay aware of their status, and address any issues before they become critical" checked={data.q7 === 'proactive'} onChange={() => setRadio('q7', 'proactive')} />
            <RadioOption name="q7" value="involved"  label="I stay involved in the major deadlines but rely on my TC to help monitor the transaction"                   checked={data.q7 === 'involved'}  onChange={() => setRadio('q7', 'involved')}  />
            <RadioOption name="q7" value="rely"      label="I generally rely on my TC, lender, or other parties to tell me when action is needed"                       checked={data.q7 === 'rely'}      onChange={() => setRadio('q7', 'rely')}      />
            <RadioOption name="q7" value="reactive"  label="I tend to address deadlines and contingency issues as they come up"                                         checked={data.q7 === 'reactive'}  onChange={() => setRadio('q7', 'reactive')}  />
          </div>
        </div>
      </div>

      {/* ── Additional comments (unnumbered) ─────────────────────────── */}
      <div className={styles.formSection}>
        <label htmlFor="intake-comments" className={styles.qTitle}>Is there anything else you&rsquo;d like me to know about your business, your current process, or what you&rsquo;re looking for?</label>
        <div className={styles.optionalTag}>Optional</div>
        <textarea
          id="intake-comments"
          className={styles.textarea}
          placeholder="Share anything else that feels relevant."
          value={data.comments}
          onChange={e => setData(d => ({ ...d, comments: e.target.value }))}
        />
      </div>

      {/* ── Pre-submit ────────────────────────────────────────────────── */}
      <div className={styles.preSubmit}>
        <div className={styles.preSubmitTitle}>Before you submit</div>
        <p>Thank you for taking the time to tell me a little about your business.</p>
        <p>I review every inquiry personally to make sure the way you work and the way I manage transactions are a good fit.</p>
        <p>Submitting this form does not automatically create a client relationship or reserve availability. If it looks like we may work well together, I&rsquo;ll reach out to schedule a discovery call.</p>
        <p>If we decide to move forward, we&rsquo;ll complete onboarding before your first file is submitted. Once onboarding is complete, I&rsquo;ll plan for your expected deal flow and make room for your transactions.</p>
      </div>

      <div className={styles.consentOption}>
        <input
          type="checkbox"
          id="intake-consent"
          className={styles.consentInput}
          checked={data.consent}
          onChange={e => setData(d => ({ ...d, consent: e.target.checked }))}
          required
        />
        <label htmlFor="intake-consent" className={styles.consentLabel}>
          I understand that new files are accepted only from onboarded clients and must be submitted on the day the contract is fully executed and delivered.
        </label>
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={status === 'submitting' || !data.consent}
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit for Review'}
      </button>

      {status === 'error' && (
        <p className={styles.errorMsg}>
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <p className={styles.footnote}>If it looks like we may be a good fit, I&rsquo;ll reach out with the next step.</p>
      <p className={styles.footnote} style={{ marginTop: '8px', opacity: 0.6 }}>
        Your information is used only to evaluate fit and respond to your inquiry. We do not sell or share your data.{' '}
        <a href="/privacy" style={{ color: '#5f9ea0', textDecoration: 'none' }}>Privacy Policy</a>.
      </p>
    </form>
  )
}
