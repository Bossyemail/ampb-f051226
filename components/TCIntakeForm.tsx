'use client'

import { useState } from 'react'
import styles from './TCIntakeForm.module.css'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  q1: string
  q2: string
  q3_contracts: string[]
  q3_crm: string[]
  q3_ops: string[]
  q3_storage: string[]
  q3_other: string
  q4: string
  q4_other: string
  q5: string
  q6: string
  q7: string
  q8: string[]
  q9: string
  q10: string
  q11: string
  q12: string
  consent: boolean
}

const RATES = [
  { tier: 'Under $500K',  price: '$595'        },
  { tier: '$500K–$1M',    price: '$795'        },
  { tier: '$1M–$3M',      price: '$995'        },
  { tier: '$3M–$5M',      price: '$1,295'      },
  { tier: '$5M–$10M',     price: '$1,495'      },
  { tier: '$10M–$15M',    price: '$1,795'      },
  { tier: '$15M–$20M',    price: '$2,195'      },
  { tier: '$20M+',        price: 'Custom quote' },
]

const initial: FormData = {
  firstName: '', lastName: '', email: '', phone: '',
  q1: '', q2: '',
  q3_contracts: [], q3_crm: [], q3_ops: [], q3_storage: [], q3_other: '',
  q4: '', q4_other: '',
  q5: '', q6: '', q7: '',
  q8: [],
  q9: '', q10: '', q11: '', q12: '',
  consent: false,
}

type CheckField = 'q3_contracts' | 'q3_crm' | 'q3_ops' | 'q3_storage' | 'q8'

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

  function toggleCheck(field: CheckField, value: string) {
    setData(d => {
      const arr = d[field] as string[]
      return { ...d, [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] }
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/tc-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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
        <div className={styles.successTitle}>You&rsquo;re in the queue.</div>
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

      <p className={styles.noteLine}>
        I only accept files from onboarded clients, and new contracts must be submitted on the day they are fully executed and delivered.
      </p>

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

      {/* ── Q1: Fit & Investment ──────────────────────────────────────── */}
      <div className={styles.formSection}>
        <div className={styles.formSectionLabel}>Fit &amp; Investment</div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>01</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>How does the pricing above align with what you expect to invest in transaction coordination?</div>
            <RadioOption name="q1" value="aligned"   label="It's in line with what I expect to pay"                                      checked={data.q1 === 'aligned'}   onChange={() => setRadio('q1', 'aligned')}   />
            <RadioOption name="q1" value="more-info" label="I'd like to understand the service in more detail before deciding"           checked={data.q1 === 'more-info'} onChange={() => setRadio('q1', 'more-info')} />
            <RadioOption name="q1" value="lower"     label="I'm looking for a lower-cost option"                                         checked={data.q1 === 'lower'}     onChange={() => setRadio('q1', 'lower')}     />
          </div>
        </div>
      </div>

      {/* ── Q2–Q3: Your Business ─────────────────────────────────────── */}
      <div className={styles.formSection}>
        <div className={styles.formSectionLabel}>Your Business</div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>02</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>How many transactions do you expect to close in the next 12 months?</div>
            {[['1-5','1–5'],['6-10','6–10'],['11-20','11–20'],['21-40','21–40'],['40+','40+']].map(([v,l]) => (
              <RadioOption key={v} name="q2" value={v} label={l} checked={data.q2 === v} onChange={() => setRadio('q2', v)} />
            ))}
          </div>
        </div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>03</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>Which systems are currently part of your business?</div>
            <div className={styles.qSelectNote}>Select all that apply.</div>
            <div className={styles.subgroup}>
              <div className={styles.subgroupTitle}>Contracts &amp; e-signatures</div>
              {['Dotloop','DocuSign','Other'].map(v => (
                <CheckOption key={v} name="q3c" value={v} label={v} checked={data.q3_contracts.includes(v)} onChange={() => toggleCheck('q3_contracts', v)} />
              ))}
            </div>
            <div className={styles.subgroup}>
              <div className={styles.subgroupTitle}>CRM</div>
              {['Follow Up Boss','Command','kvCORE','Other CRM',"I don't currently use a CRM"].map(v => (
                <CheckOption key={v} name="q3r" value={v} label={v} checked={data.q3_crm.includes(v)} onChange={() => toggleCheck('q3_crm', v)} />
              ))}
            </div>
            <div className={styles.subgroup}>
              <div className={styles.subgroupTitle}>Operations &amp; task management</div>
              {['Monday.com','Asana','Trello','Other',"I don't currently use a task management system"].map(v => (
                <CheckOption key={v} name="q3o" value={v} label={v} checked={data.q3_ops.includes(v)} onChange={() => toggleCheck('q3_ops', v)} />
              ))}
            </div>
            <div className={styles.subgroup}>
              <div className={styles.subgroupTitle}>File storage</div>
              {['Google Drive','Dropbox','OneDrive','Other'].map(v => (
                <CheckOption key={v} name="q3s" value={v} label={v} checked={data.q3_storage.includes(v)} onChange={() => toggleCheck('q3_storage', v)} />
              ))}
            </div>
            <div className={styles.otherField}>
              <span className={styles.subLabel}>Other</span>
              <input
                type="text"
                className={styles.textInput}
                style={{ fontSize: '13px' }}
                placeholder="Anything not listed above"
                value={data.q3_other}
                onChange={e => setData(d => ({ ...d, q3_other: e.target.value }))}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Q4–Q7: How You Work ──────────────────────────────────────── */}
      <div className={styles.formSection}>
        <div className={styles.formSectionLabel}>How You Work</div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>04</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>What&rsquo;s prompting you to look for a TC right now?</div>
            <RadioOption name="q4" value="volume"    label="I'm closing more than I can manage alone"                            checked={data.q4 === 'volume'}    onChange={() => setRadio('q4', 'volume')}    />
            <RadioOption name="q4" value="tc"        label="My current TC isn't working out"                                     checked={data.q4 === 'tc'}        onChange={() => setRadio('q4', 'tc')}        />
            <RadioOption name="q4" value="first"     label="First time delegating this — want to see how it feels"               checked={data.q4 === 'first'}     onChange={() => setRadio('q4', 'first')}     />
            <RadioOption name="q4" value="referral"  label="A colleague or broker referred me"                                   checked={data.q4 === 'referral'}  onChange={() => setRadio('q4', 'referral')}  />
            <RadioOption name="q4" value="structure" label="I want a more structured and consistent transaction process"         checked={data.q4 === 'structure'} onChange={() => setRadio('q4', 'structure')} />
            <RadioOption name="q4" value="other"     label="Something else"                                                      checked={data.q4 === 'other'}     onChange={() => setRadio('q4', 'other')}     />
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
          </div>
        </div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>05</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>When a contract is fully executed, how quickly do you typically organize and submit it to your TC?</div>
            <RadioOption name="q5" value="same-day"       label="The same day"                                                        checked={data.q5 === 'same-day'}       onChange={() => setRadio('q5', 'same-day')}       />
            <RadioOption name="q5" value="usually-same"   label="Usually the same day, but occasionally the next business day"        checked={data.q5 === 'usually-same'}   onChange={() => setRadio('q5', 'usually-same')}   />
            <RadioOption name="q5" value="1-2-days"       label="Within 1–2 business days"                                            checked={data.q5 === '1-2-days'}       onChange={() => setRadio('q5', '1-2-days')}       />
            <RadioOption name="q5" value="depends"        label="It depends on how busy I am"                                         checked={data.q5 === 'depends'}        onChange={() => setRadio('q5', 'depends')}        />
            <RadioOption name="q5" value="no-process"     label="I don't currently have a consistent submission process"               checked={data.q5 === 'no-process'}     onChange={() => setRadio('q5', 'no-process')}     />
          </div>
        </div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>06</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>When you submit a new transaction, what is usually included?</div>
            <RadioOption name="q6" value="full"           label="The fully executed contract and all applicable addenda"               checked={data.q6 === 'full'}           onChange={() => setRadio('q6', 'full')}           />
            <RadioOption name="q6" value="most"           label="Most documents are included, with a few items occasionally pending"   checked={data.q6 === 'most'}           onChange={() => setRadio('q6', 'most')}           />
            <RadioOption name="q6" value="contract-first" label="I usually send the contract first and provide the remaining documents later" checked={data.q6 === 'contract-first'} onChange={() => setRadio('q6', 'contract-first')} />
            <RadioOption name="q6" value="varies"         label="It varies from transaction to transaction"                            checked={data.q6 === 'varies'}         onChange={() => setRadio('q6', 'varies')}         />
            <RadioOption name="q6" value="help-needed"    label="I would need help creating a more consistent submission process"      checked={data.q6 === 'help-needed'}    onChange={() => setRadio('q6', 'help-needed')}    />
          </div>
        </div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>07</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>When something becomes urgent or a problem comes up, which sounds most like you?</div>
            <RadioOption name="q7" value="delegate"       label="I send the relevant information to the person handling it and trust them to take the next step." checked={data.q7 === 'delegate'}       onChange={() => setRadio('q7', 'delegate')}       />
            <RadioOption name="q7" value="follow-up"      label="I follow up when necessary but generally allow the process to work."                              checked={data.q7 === 'follow-up'}      onChange={() => setRadio('q7', 'follow-up')}      />
            <RadioOption name="q7" value="frequent"       label="I prefer frequent updates until the issue is completely resolved."                                 checked={data.q7 === 'frequent'}       onChange={() => setRadio('q7', 'frequent')}       />
            <RadioOption name="q7" value="all-channels"   label="I tend to call, text, and email the people involved to make sure everyone is aware."              checked={data.q7 === 'all-channels'}   onChange={() => setRadio('q7', 'all-channels')}   />
          </div>
        </div>
      </div>

      {/* ── Q8–Q9: What You're Looking For ───────────────────────────── */}
      <div className={styles.formSection}>
        <div className={styles.formSectionLabel}>What You&rsquo;re Looking For</div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>08</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>What are you primarily hoping to gain by working with a TC?</div>
            <div className={styles.qSelectNote}>Select all that apply.</div>
            {[
              ['time',       'Get more of my time back'],
              ['tracking',   'Stop personally tracking every moving piece'],
              ['process',    'Create a more consistent transaction process'],
              ['followup',   'Improve follow-up and organization'],
              ['client-exp', 'Provide a better client experience'],
              ['volume',     'Increase the number of transactions I can handle'],
              ['ownership',  'Have someone take ownership of the administrative side of my transactions'],
              ['misc',       'Have additional help available whenever miscellaneous tasks come up'],
            ].map(([v, l]) => (
              <CheckOption key={v} name="q8" value={v} label={l} checked={data.q8.includes(v)} onChange={() => toggleCheck('q8', v)} />
            ))}
          </div>
        </div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>09</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>How open are you to adjusting your current process when a better system is recommended?</div>
            <RadioOption name="q9" value="very-open"   label="Very open — I want to improve how my business operates"         checked={data.q9 === 'very-open'}   onChange={() => setRadio('q9', 'very-open')}   />
            <RadioOption name="q9" value="open-reason" label="Open, as long as I understand the reason behind the change"     checked={data.q9 === 'open-reason'} onChange={() => setRadio('q9', 'open-reason')} />
            <RadioOption name="q9" value="depends"     label="It depends on what is being changed"                            checked={data.q9 === 'depends'}     onChange={() => setRadio('q9', 'depends')}     />
            <RadioOption name="q9" value="prefer-existing" label="I prefer to keep my existing process"                       checked={data.q9 === 'prefer-existing'} onChange={() => setRadio('q9', 'prefer-existing')} />
          </div>
        </div>
      </div>

      {/* ── Q10–Q12: Experience & Judgment ───────────────────────────── */}
      <div className={styles.formSection}>
        <div className={styles.formSectionLabel}>Experience &amp; Judgment</div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>10</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>How would you describe your experience managing residential real estate transactions?</div>
            <RadioOption name="q10" value="highly"      label="Highly experienced — I understand the contract, contingencies, deadlines, and the responsibilities of all parties"    checked={data.q10 === 'highly'}      onChange={() => setRadio('q10', 'highly')}      />
            <RadioOption name="q10" value="experienced" label="Experienced — I am comfortable managing most transactions but occasionally need guidance on more complex situations"  checked={data.q10 === 'experienced'} onChange={() => setRadio('q10', 'experienced')} />
            <RadioOption name="q10" value="developing"  label="Developing — I understand the basics but rely on others to help me interpret deadlines and next steps"                checked={data.q10 === 'developing'}  onChange={() => setRadio('q10', 'developing')}  />
            <RadioOption name="q10" value="newer"       label="Newer to the process — I would benefit from additional guidance throughout the transaction"                           checked={data.q10 === 'newer'}       onChange={() => setRadio('q10', 'newer')}       />
          </div>
        </div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>11</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>How do you typically manage time-sensitive contractual matters such as escrow deposits, inspection periods, financing milestones, and loan approval deadlines?</div>
            <RadioOption name="q11" value="proactive" label="I understand the deadlines, stay aware of their status, and address any issues before they become critical" checked={data.q11 === 'proactive'} onChange={() => setRadio('q11', 'proactive')} />
            <RadioOption name="q11" value="involved"  label="I stay involved in the major deadlines but rely on my TC to help monitor the transaction"                   checked={data.q11 === 'involved'}  onChange={() => setRadio('q11', 'involved')}  />
            <RadioOption name="q11" value="rely"      label="I generally rely on my TC, lender, or other parties to tell me when action is needed"                       checked={data.q11 === 'rely'}      onChange={() => setRadio('q11', 'rely')}      />
            <RadioOption name="q11" value="reactive"  label="I tend to address deadlines and contingency issues as they come up"                                         checked={data.q11 === 'reactive'}  onChange={() => setRadio('q11', 'reactive')}  />
          </div>
        </div>
        <div className={styles.qBlock}>
          <span className={styles.qNum}>12</span>
          <div className={styles.qContent}>
            <div className={styles.qTitle}>Is there anything else you&rsquo;d like me to know about your business, your current process, or what you&rsquo;re looking for in a TC that we didn&rsquo;t cover above?</div>
            <div className={styles.optionalTag}>Optional</div>
            <textarea
              className={styles.textarea}
              placeholder="Share anything else that feels relevant."
              value={data.q12}
              onChange={e => setData(d => ({ ...d, q12: e.target.value }))}
            />
          </div>
        </div>
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
