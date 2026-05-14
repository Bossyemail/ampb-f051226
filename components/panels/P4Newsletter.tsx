'use client'
import { useRef, useState } from 'react'

// Endpoint already in use on /snarkletter page
const KIT_ACTION = 'https://app.kit.com/forms/b3faf3ce2a/subscriptions'

export default function P4Newsletter() {
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    fetch(KIT_ACTION, {
      method:  'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:    new URLSearchParams({ email_address: email }).toString(),
      mode:    'no-cors',
    })
    setSubmitted(true)
  }

  return (
    <section
      data-panel="2"
      style={{
        background: '#114B4D',
        display:    'flex',
        alignItems: 'center',
      }}
    >
      {/* Inner wrapper — cinema CSS strips padding from section[data-panel], so padding goes here */}
      <div className="newsletter-inner" style={{ width: '100%', padding: '96px 6%', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>

          {/* Label */}
          <p style={{
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color:         'rgba(239,235,226,0.55)',
            margin:        '0 0 24px 0',
          }}>
            Weekly from the Trenches
          </p>

          {/* Headline */}
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize:   'clamp(24px, 2.8vw, 38px)',
            fontWeight: 300,
            color:      '#EFEBE2',
            lineHeight: 1.1,
            margin:     '0 0 20px 0',
          }}>
            The only real estate newsletter written by someone still closing deals.
          </h2>

          {/* Subline */}
          <p style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize:   '12px',
            color:      'rgba(239,235,226,0.5)',
            lineHeight: 1.75,
            margin:     '0 0 48px 0',
          }}>
            Scripts. Systems. Ops intel. No fluff. Every Tuesday. Free.
          </p>

          {/* Form */}
          {submitted ? (
            <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: '#5f9ea0', margin: 0 }}>
              You&apos;re on the list. First issue incoming.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <div className="newsletter-form-row" style={{ display: 'flex', maxWidth: '520px', margin: '0 auto' }}>
                <input
                  type="email"
                  name="email_address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    flex:        1,
                    height:      '48px',
                    background:  'rgba(0,0,0,0.15)',
                    border:      '1px solid rgba(239,235,226,0.5)',
                    borderRight: 'none',
                    color:       '#EFEBE2',
                    fontFamily:  'var(--font-dm-mono)',
                    fontSize:    '13px',
                    padding:     '0 16px',
                    outline:     'none',
                    boxSizing:   'border-box' as const,
                  }}
                  onFocus={e => { e.currentTarget.style.borderColor = 'rgba(239,235,226,0.9)' }}
                  onBlur={e  => { e.currentTarget.style.borderColor = 'rgba(239,235,226,0.5)' }}
                />
                <button
                  type="submit"
                  style={{
                    height:        '48px',
                    background:    '#EFEBE2',
                    color:         '#363231',
                    fontFamily:    'var(--font-dm-mono)',
                    fontSize:      '11px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    padding:       '0 28px',
                    border:        'none',
                    cursor:        'pointer',
                    whiteSpace:    'nowrap',
                    flexShrink:    0,
                    transition:    'background 0.2s, color 0.2s',
                    boxSizing:     'border-box' as const,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#ffffff' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#EFEBE2' }}
                >
                  Get the Snarkletter
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  )
}
