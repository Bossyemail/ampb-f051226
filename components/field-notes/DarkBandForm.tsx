'use client'

import { useState, useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

type Status = 'idle' | 'submitting' | 'active' | 'pending' | 'error'

export default function DarkBandForm() {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const submittingRef = useRef(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (submittingRef.current) return
    submittingRef.current = true
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res  = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'snarkletter' }),
      })
      const data = await res.json()

      if (!res.ok || !data.success) {
        setStatus('error')
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        submittingRef.current = false
        return
      }

      const newStatus: Status = data.status === 'active' ? 'active' : 'pending'
      setStatus(newStatus)
      if (newStatus === 'active') {
        trackEvent('newsletter_subscribed', { source: 'snarkletter' })
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
      submittingRef.current = false
    }
  }

  return (
    <div className="fn-band-form-wrap">
      <p className="fn-band-form-eyebrow">Newsletter</p>
      <p className="fn-band-form-heading">The Snarkletter</p>

      {status === 'active' && (
        <p className="fn-band-msg">You&rsquo;re on the list. First issue incoming.</p>
      )}

      {status === 'pending' && (
        <p className="fn-band-msg">Almost there — check your inbox to confirm.</p>
      )}

      {status !== 'active' && status !== 'pending' && (
        <form className="fn-band-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="fn-band-email" className="fn-sr-only">
            Email address
          </label>
          <input
            id="fn-band-email"
            type="email"
            className="fn-band-input"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
            disabled={status === 'submitting'}
          />
          <button
            type="submit"
            className="fn-band-submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? '…' : 'Subscribe'}
          </button>
          {status === 'error' && (
            <p className="fn-band-msg fn-band-msg--error" role="alert">
              {errorMsg}
            </p>
          )}
        </form>
      )}
    </div>
  )
}
