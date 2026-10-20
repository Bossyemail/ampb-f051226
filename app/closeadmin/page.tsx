'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Cursor      from '@/components/Cursor'
import ProgressBar from '@/components/ProgressBar'
import CinemaNav   from '@/components/CinemaNav'
import SocialBar   from '@/components/SocialBar'
import PanelIndex  from '@/components/PanelIndex'
import Footer      from '@/components/Footer'
import { trackEvent } from '@/lib/analytics'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const BG = ['#363231', '#2a2827', '#363231', '#114B4D']

const MODULES = [
  { num: '01', name: 'Email',     status: 'Included at launch', desc: 'Custom AI email generation so your team communicates faster and consistently. Reduces mistakes, back-and-forth, and time spent writing routine messages.' },
  { num: '02', name: 'Clauses',   status: 'Included at launch', desc: 'Standardized clause language for common real estate scenarios. Helps teams handle edge cases quickly without rewriting or guessing.' },
  { num: '03', name: 'Templates', status: 'Included at launch',   desc: 'Repeatable checklists and workflows for every stage of a transaction. Keeps files moving the same way every time, regardless of who is working them.' },
  { num: '04', name: 'Calendar',  status: 'Included at launch',   desc: 'Tracks key dates, appointments, and transaction milestones automatically. Keeps everyone aligned on what\'s happening and when.' },
  { num: '05', name: 'Deadlines', status: 'Included at launch',   desc: 'Tracks responsibility and enforces critical dates across the file. Prevents missed deadlines and last-minute fire drills.' },
  { num: '06', name: 'Reports',   status: 'Included at launch',   desc: 'Shows pipeline status, activity, and performance in one view. Gives team leaders and brokers visibility and control without chasing updates.' },
]

const PROOF_POINTS = [
  { title: 'Built from 3,000+ files',  body: "Every module solves a problem I've hit in real transactions. Not a problem a roadmap predicted." },
  { title: 'No vendor bloat',           body: 'No features nobody uses. No integrations that break. One dashboard. One operator.' },
  { title: "One person's standards",   body: "I use this every day. If it's not good enough for my own clients, it's not good enough to ship." },
]

const PILLARS = [
  { title: 'INDUSTRY SPECIFIC',      sub: 'Built for Florida RE'      },
  { title: 'BUILT FROM EXPERIENCE',  sub: '3,000+ real transactions'  },
  { title: 'DESIGNED FOR VOLUME',    sub: 'Not a side project'        },
]

// ─── Panel 1 — Hero ───────────────────────────────────────────────────────────
function P1Hero() {
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const badgeRef   = useRef<HTMLSpanElement>(null)
  const line1Ref   = useRef<HTMLSpanElement>(null)
  const line2Ref   = useRef<HTMLSpanElement>(null)
  const ruleRef    = useRef<HTMLDivElement>(null)
  const bodyRef    = useRef<HTMLParagraphElement>(null)
  const formRef    = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'active' | 'pending' | 'error'>('idle')
  const submittingRef       = useRef(false)

  const handleNotifySubmit = async () => {
    if (!email || submittingRef.current) return
    submittingRef.current = true
    setStatus('submitting')
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email, source: 'closeadmin' }),
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      const newStatus = data.status === 'active' ? 'active' : 'pending'
      setStatus(newStatus)
      if (newStatus === 'active') trackEvent('waitlist_joined', { source: 'closeadmin' })
    } catch {
      setStatus('error')
      submittingRef.current = false
    }
  }

  useEffect(() => {
    const line1 = line1Ref.current
    const line2 = line2Ref.current
    const eyebrow = eyebrowRef.current
    const badge   = badgeRef.current
    const rule    = ruleRef.current
    const body    = bodyRef.current
    const form    = formRef.current
    const pillars = pillarsRef.current

    if (!line1 || !line2 || !eyebrow || !badge || !rule || !body || !form || !pillars) return

    gsap.set([line1, line2], { y: '110%' })
    gsap.set([eyebrow, badge, rule, body, form, pillars], { opacity: 0, y: 16 })

    gsap.to([line1, line2], { y: '0%', duration: 0.9, ease: 'cubic-bezier(0.16,1,0.3,1)', stagger: 0.06, delay: 0.2 })
    gsap.to(eyebrow, { opacity: 1, y: 0, duration: 0.7, delay: 0.45 })
    gsap.to(badge,   { opacity: 1, y: 0, duration: 0.6, delay: 0.55 })
    gsap.to(rule,    { opacity: 1, y: 0, duration: 0.6, delay: 0.8 })
    gsap.to(body,    { opacity: 1, y: 0, duration: 0.7, delay: 0.9 })
    gsap.to(form,    { opacity: 1, y: 0, duration: 0.7, delay: 1.0 })
    gsap.to(pillars, { opacity: 1, y: 0, duration: 0.7, delay: 1.1 })
  }, [])

  return (
    <section data-panel="0" style={{ background: '#363231', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/clausevault-bg-11.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0, filter: 'brightness(0.4) saturate(0.7)' }} />

      {/* Main overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to right, rgba(15,13,12,0.92) 0%, rgba(15,13,12,0.75) 35%, rgba(15,13,12,0.3) 60%, transparent 80%)' }} />

      {/* Portrait */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/25-nobg.png" alt="" className="hero-portrait-right" style={{ position: 'absolute', right: 0, bottom: 0, height: '90%', width: '50%', objectFit: 'contain', objectPosition: 'bottom right', zIndex: 2 }} />

      {/* Photo protection overlay */}
      <div className="img-protect-overlay" style={{ zIndex: 3 }} />

      {/* Text content */}
      <div className="hero-text-col-mobile" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '55%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 6%', zIndex: 5 }}>

        {/* Eyebrow */}
        <div ref={eyebrowRef} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '0.5px', background: 'rgba(239,235,226,0.45)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(239,235,226,0.65)', textTransform: 'uppercase' }}>CloseAdmin</span>
        </div>

        {/* Badge */}
        <span ref={badgeRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(239,235,226,0.7)', border: '0.5px solid rgba(239,235,226,0.3)', padding: '5px 14px', display: 'inline-block', alignSelf: 'flex-start', marginBottom: '28px' }}>
          Private Beta
        </span>

        {/* Headline */}
        <h1 style={{ margin: 0, lineHeight: 0.9 }}>
          <div style={{ overflow: 'hidden' }}>
            <span ref={line1Ref} style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,8vw,110px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1, letterSpacing: '-0.02em', paddingBottom: '0.04em' }}>
              Operational
            </span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span ref={line2Ref} style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,8vw,110px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--teal-mid)', lineHeight: 1, letterSpacing: '-0.02em', paddingBottom: '0.04em' }}>
              Purity.
            </span>
          </div>
        </h1>

        {/* Rule */}
        <div ref={ruleRef} className="ca-hero-rule" style={{ display: 'block', width: '48px', height: '0.5px', background: 'rgba(239,235,226,0.15)', margin: '32px 0' }} />

        {/* Body */}
        <p ref={bodyRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(239,235,226,0.82)', maxWidth: '400px', margin: '0 0 40px 0' }}>
          The complete operating system for agents, TCs, and teams running real volume. Six modules. One dashboard. Built from 3,000+ real transactions — not a SaaS brainstorm.
        </p>

        {/* Waitlist form */}
        <div ref={formRef} id="waitlist">
          <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal-mid)', marginBottom: '14px' }}>
            Join the Waitlist
          </span>
          {(status === 'active' || status === 'pending') ? (
            <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'var(--teal-mid)', margin: '8px 0 0 0' }}>
              {status === 'active'
                ? "You're on the list. We'll be in touch."
                : "Almost there — check your inbox to confirm."}
            </p>
          ) : (
            <>
              <div className="ca-form-row" style={{ display: 'flex', gap: 0, maxWidth: '460px' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{ flex: 1, background: 'rgba(239,235,226,0.06)', border: '0.5px solid rgba(239,235,226,0.2)', borderRight: 'none', color: 'var(--cream)', fontFamily: 'var(--font-dm-mono)', fontSize: '13px', padding: '15px 20px', outline: 'none' }}
                  onFocus={e  => { e.currentTarget.style.borderColor = 'rgba(239,235,226,0.5)' }}
                  onBlur={e   => { e.currentTarget.style.borderColor = 'rgba(239,235,226,0.2)' }}
                />
                <button
                  onClick={handleNotifySubmit}
                  disabled={status === 'submitting'}
                  className="btn-teal"
                  style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '18px 32px', border: '0.5px solid rgba(239,235,226,0.2)', flexShrink: 0, opacity: status === 'submitting' ? 0.6 : 1, cursor: status === 'submitting' ? 'default' : 'pointer' }}
                >
                  {status === 'submitting' ? '…' : 'Notify Me'}
                </button>
              </div>
              {status === 'error' && (
                <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(239,100,100,0.8)', margin: '8px 0 0 0' }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </>
          )}
        </div>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', color: 'rgba(239,235,226,0.3)', margin: '12px 0 0 0', lineHeight: 1.6 }}>
          Your email is sent to Kit (our email provider). Unsubscribe any time.{' '}
          <a href="/privacy" style={{ color: 'rgba(95,158,160,0.5)', textDecoration: 'none' }}>Privacy Policy</a>.
        </p>

        {/* Pillars */}
        <div ref={pillarsRef} className="ca-hero-pillars" style={{ display: 'flex', gap: 0, marginTop: '36px' }}>
          {PILLARS.map((p, i) => (
            <div key={p.title} style={{ paddingRight: '24px', borderRight: i < PILLARS.length - 1 ? '0.5px solid rgba(239,235,226,0.1)' : 'none', marginRight: i < PILLARS.length - 1 ? '24px' : 0, whiteSpace: 'nowrap' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '8px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cognac)', marginBottom: '4px' }}>{p.title}</span>
              <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '8px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(239,235,226,0.35)' }}>{p.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 4 }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', letterSpacing: '0.3em', color: 'var(--greige)', textTransform: 'uppercase', opacity: 0.45 }}>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

// ─── Panel 2 — The Suite ─────────────────────────────────────────────────────
function P2Suite() {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headRef    = useRef<HTMLHeadingElement>(null)
  const bodyRef    = useRef<HTMLParagraphElement>(null)
  const cardsRef   = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.fromTo(
      [eyebrowRef.current, headRef.current, bodyRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]
    gsap.fromTo(cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="1" style={{ background: '#2a2827', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 0, position: 'relative' }}>
      <div className="seam-tab" style={{
        position:   'absolute',
        top:        '-72px',
        left:       '64px',
        background: '#2a2827',
        padding:    '16px 24px',
        zIndex:     10,
      }}>
        <div style={{
          fontFamily:  'var(--font-cormorant)',
          fontSize:    '28px',
          fontWeight:  600,
          color:       'var(--cream)',
          lineHeight:  1,
        }}>
          The
        </div>
        <div style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'rgba(239,235,226,0.65)',
          marginTop:     '5px',
        }}>
          suite
        </div>
      </div>
      <div className="section-pad-inner" style={{ width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>
        <div className="two-col-flex" style={{ display: 'flex', gap: '64px', alignItems: 'flex-start', maxWidth: '1200px' }}>

          {/* Left col */}
          <div style={{ flex: '0 0 38%' }}>
            <p ref={eyebrowRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal-mid)', margin: '0 0 20px 0' }}>
              The Suite
            </p>
            <h2 ref={headRef} style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 300, color: 'var(--cream)', margin: '0 0 24px 0', lineHeight: 1.05 }}>
              Six modules.<br />
              One operating<br />
              <em>system.</em>
            </h2>
            <p ref={bodyRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'rgba(239,235,226,0.82)', lineHeight: 1.8, margin: '0 0 40px 0' }}>
              Every module was built because I needed it in a real transaction. Then refined because my clients needed it better.
            </p>
            <a href="#waitlist" style={{ display: 'inline-block', fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--teal-mid)', border: '0.5px solid rgba(95,158,160,0.5)', padding: '14px 36px', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal-mid)'; e.currentTarget.style.color = 'var(--cream)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(95,158,160,0.5)'; e.currentTarget.style.color = 'var(--teal-mid)' }}
            >
              Join the Waitlist →
            </a>
          </div>

          {/* Right col — modules */}
          <div style={{ flex: 1 }}>
            {MODULES.map((mod, i) => (
              <div
                key={i}
                ref={el => { cardsRef.current[i] = el }}
                style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', padding: '28px 0', borderBottom: '0.5px solid rgba(239,235,226,0.08)', transition: 'padding-left 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = '8px' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = '0px' }}
              >
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'rgba(239,235,226,0.2)', letterSpacing: '0.2em', flexShrink: 0, paddingTop: '4px', minWidth: '28px' }}>{mod.num}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.0, margin: '0 0 8px 0' }}>{mod.name}</h3>
                  <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'rgba(239,235,226,0.7)', lineHeight: 1.75, margin: 0 }}>{mod.desc}</p>
                </div>
                <span style={{
                  fontFamily:    'var(--font-dm-mono)',
                  fontSize:      '9px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding:       '4px 12px',
                  flexShrink:    0,
                  color:         mod.status === 'Included at launch' ? 'var(--teal-mid)' : 'rgba(239,235,226,0.3)',
                  border:        mod.status === 'Included at launch' ? '0.5px solid rgba(95,158,160,0.4)' : '0.5px solid rgba(239,235,226,0.1)',
                }}>
                  {mod.status}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Panel 3 — Proof ─────────────────────────────────────────────────────────
function P3Proof() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef    = useRef<HTMLDivElement>(null)
  const proofsRef  = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.fromTo(leftRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )

    const cards = proofsRef.current.filter(Boolean) as HTMLDivElement[]
    gsap.fromTo(cards,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="2" style={{ background: '#363231', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 0, position: 'relative' }}>
      <div className="seam-tab" style={{
        position:   'absolute',
        top:        '-72px',
        right:      '80px',
        background: '#363231',
        padding:    '16px 24px',
        zIndex:     10,
      }}>
        <div style={{
          fontFamily:  'var(--font-cormorant)',
          fontSize:    '28px',
          fontWeight:  600,
          color:       'var(--cream)',
          lineHeight:  1,
        }}>
          Why
        </div>
        <div style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'rgba(239,235,226,0.65)',
          marginTop:     '5px',
        }}>
          it exists
        </div>
      </div>
      <div className="section-pad-inner" style={{ width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>
        <div className="two-col-flex" style={{ display: 'flex', gap: '64px', alignItems: 'flex-start', maxWidth: '1200px' }}>

          {/* Left col */}
          <div ref={leftRef} style={{ flex: '0 0 38%' }}>
            <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal-mid)', margin: '0 0 20px 0' }}>
              Why It Exists
            </p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 300, color: 'var(--cream)', margin: '0 0 24px 0', lineHeight: 1.05 }}>
              Built by a TC.<br />
              <em>Not a product team.</em>
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'rgba(239,235,226,0.82)', lineHeight: 1.8, margin: '0 0 40px 0' }}>
              This wasn&apos;t designed to sound good. It was designed to hold up under pressure — inside real transactions, with real deadlines, and real consequences.
            </p>
            <blockquote style={{ margin: 0, borderLeft: '2px solid #5f9ea0', paddingLeft: '24px', fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontStyle: 'italic', color: 'rgba(239,235,226,0.6)', lineHeight: 1.55 }}>
              &ldquo;If your business runs on volume, you don&apos;t need more software. You need software built by someone who&apos;s actually closed the files.&rdquo;
            </blockquote>
          </div>

          {/* Right col — proof points */}
          <div style={{ flex: 1 }}>
            {PROOF_POINTS.map((pt, i) => (
              <div
                key={i}
                ref={el => { proofsRef.current[i] = el }}
                style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', padding: '36px 0', borderBottom: '0.5px solid rgba(239,235,226,0.08)', transition: 'padding-left 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = '8px' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.paddingLeft = '0px' }}
              >
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'rgba(239,235,226,0.2)', letterSpacing: '0.2em', flexShrink: 0, paddingTop: '6px', minWidth: '28px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px,2.8vw,36px)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 12px 0' }}>{pt.title}</h3>
                  <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'rgba(239,235,226,0.82)', lineHeight: 1.75, margin: 0 }}>{pt.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Panel 4 — CTA ───────────────────────────────────────────────────────────
function P4CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [email, setEmail]     = useState('')
  const [ctaStatus, setCtaStatus] = useState<'idle' | 'submitting' | 'active' | 'pending' | 'error'>('idle')
  const ctaSubmittingRef          = useRef(false)

  const handleWaitlistSubmit = async () => {
    if (!email || ctaSubmittingRef.current) return
    ctaSubmittingRef.current = true
    setCtaStatus('submitting')
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email, source: 'closeadmin' }),
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      const newStatus = data.status === 'active' ? 'active' : 'pending'
      setCtaStatus(newStatus)
      if (newStatus === 'active') trackEvent('waitlist_joined', { source: 'closeadmin' })
    } catch {
      setCtaStatus('error')
      ctaSubmittingRef.current = false
    }
  }

  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="3" className="ca-cta-section" style={{ background: '#114B4D', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 6%', textAlign: 'center', position: 'relative' }}>
      <div className="seam-tab" style={{
        position:   'absolute',
        top:        '-72px',
        left:       '64px',
        background: '#114B4D',
        padding:    '16px 24px',
        zIndex:     10,
      }}>
        <div style={{
          fontFamily:  'var(--font-cormorant)',
          fontSize:    '28px',
          fontWeight:  600,
          color:       'var(--cream)',
          lineHeight:  1,
        }}>
          Early
        </div>
        <div style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'rgba(239,235,226,0.65)',
          marginTop:     '5px',
        }}>
          access
        </div>
      </div>
      <div ref={contentRef} className="ca-cta-content">
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(239,235,226,0.5)', margin: '0 0 32px 0' }}>
          Get Early Access
        </p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px,6.5vw,88px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 0.92, maxWidth: '700px', margin: '0 auto' }}>
          Ready to run your<br />
          operation like a<br />
          real business?
        </h2>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 'clamp(14px,1.2vw,15px)', color: 'rgba(239,235,226,0.65)', maxWidth: '480px', margin: '20px auto 0', textAlign: 'center', lineHeight: 1.8 }}>
          Start free. No credit card. Full access to every module. If it saves you time, you&apos;ll know in a week. If it doesn&apos;t, close the tab and forget you met me.
        </p>
        {(ctaStatus === 'active' || ctaStatus === 'pending') ? (
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'var(--teal-mid)', marginTop: '48px', textAlign: 'center' }}>
            {ctaStatus === 'active'
              ? "You're on the list. We'll be in touch."
              : "Almost there — check your inbox to confirm."}
          </p>
        ) : (
          <>
            <div className="ca-form-row ca-form-on-teal" style={{ marginTop: '48px', width: '100%', maxWidth: '500px', margin: '48px auto 0', display: 'flex', gap: 0 }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{ flex: 1, background: 'rgba(239,235,226,0.1)', border: '0.5px solid rgba(239,235,226,0.3)', borderRight: 'none', color: 'var(--cream)', fontFamily: 'var(--font-dm-mono)', fontSize: '13px', padding: '16px 20px', outline: 'none' }}
                onFocus={e  => { e.currentTarget.style.borderColor = 'rgba(239,235,226,0.5)' }}
                onBlur={e   => { e.currentTarget.style.borderColor = 'rgba(239,235,226,0.3)' }}
              />
              <button
                onClick={handleWaitlistSubmit}
                disabled={ctaStatus === 'submitting'}
                className="btn-inverted"
                style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '16px 36px', border: '0.5px solid var(--cream)', flexShrink: 0, opacity: ctaStatus === 'submitting' ? 0.6 : 1, cursor: ctaStatus === 'submitting' ? 'default' : 'pointer' }}
              >
                {ctaStatus === 'submitting' ? '…' : 'Join Waitlist'}
              </button>
            </div>
            {ctaStatus === 'error' && (
              <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(239,100,100,0.8)', margin: '12px auto 0', textAlign: 'center' }}>
                Something went wrong. Please try again.
              </p>
            )}
          </>
        )}
      </div>

    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CloseAdminPage() {
  const [activePanel, setActivePanel] = useState(0)
  const activePanelRef                = useRef(0)
  const panelEls                      = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.add('cinema')
    return () => document.documentElement.classList.remove('cinema')
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const nodes = document.querySelectorAll('[data-panel]')
      const kills: ScrollTrigger[] = []

      nodes.forEach((node, i) => {
        panelEls.current[i] = node as HTMLElement
        const st = ScrollTrigger.create({
          trigger: node,
          start:   'top 50%',
          end:     'bottom 50%',
          onEnter: () => {
            activePanelRef.current = i
            setActivePanel(i)
            gsap.to('html', { backgroundColor: BG[i], duration: 0.6, ease: 'power2.out' })
          },
          onEnterBack: () => {
            activePanelRef.current = i
            setActivePanel(i)
            gsap.to('html', { backgroundColor: BG[i], duration: 0.6, ease: 'power2.out' })
          },
        })
        kills.push(st)
      })

      ScrollTrigger.refresh()
      return () => kills.forEach(k => k.kill())
    }, 150)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        const next = Math.min(activePanelRef.current + 1, 3)
        panelEls.current[next]?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        const prev = Math.max(activePanelRef.current - 1, 0)
        panelEls.current[prev]?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [])

  return (
    <>
      <Cursor />
      <ProgressBar />
      <CinemaNav />
      <SocialBar />
      <PanelIndex activePanel={activePanel} panelEls={panelEls.current} total={4} />

      <main>
        <P1Hero />
        <P2Suite />
        <P3Proof />
        <P4CTA />
      </main>
      <Footer hideSocial />
    </>
  )
}
