'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Cursor         from '@/components/Cursor'
import ProgressBar    from '@/components/ProgressBar'
import CinemaNav      from '@/components/CinemaNav'
import SocialBar      from '@/components/SocialBar'
import WatermarkPatch from '@/components/WatermarkPatch'
import PanelIndex  from '@/components/PanelIndex'
import Footer      from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const BG = ['#363231', '#2a2827', '#2a2827', '#114B4D']

const KIT_ACTION = 'https://app.kit.com/forms/b3faf3ce2a/subscriptions'

const CARDS = [
  { title: 'Compliance breakdowns', body: "Anonymized breakdowns of real transaction failures — what happened, what was missed, and how to prevent it." },
  { title: 'Operator playbooks',    body: "How top TCs and brokerages run 40+ files without losing their minds. Templates, systems, and why they work." },
  { title: 'Industry commentary',   body: "What's actually happening in South Florida, not what NAR's press release says. Opinions with teeth." },
]

const PILLARS = [
  { title: 'Weekly',       sub: 'In Your Inbox' },
  { title: 'Field-tested', sub: 'Not Theory'    },
  { title: 'Zero Fluff',   sub: 'Just Ops'      },
]

// ─── Subscribe Form ───────────────────────────────────────────────────────────
function SubscribeForm({ variant = 'dark' }: { variant?: 'dark' | 'teal' }) {
  const isDark = variant === 'dark'
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    fetch(KIT_ACTION, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email_address: email }).toString(),
      mode: 'no-cors',
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'var(--teal-mid)', margin: 0 }}>
        You&apos;re on the list. First issue incoming.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <div className={`ca-form-row${!isDark ? ' ca-form-on-teal' : ''}`} style={{ display: 'flex', gap: 0, maxWidth: isDark ? '480px' : undefined }}>
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
            background:  isDark ? 'transparent' : 'rgba(239,235,226,0.1)',
            border:      isDark ? '1px solid rgba(239,235,226,0.2)' : '0.5px solid rgba(239,235,226,0.3)',
            borderRight: 'none',
            color:       'var(--cream)',
            fontFamily:  'var(--font-dm-mono)',
            fontSize:    '13px',
            padding:     '0 16px',
            outline:     'none',
            boxSizing:   'border-box' as const,
          }}
          onFocus={e  => { e.currentTarget.style.borderColor = 'rgba(239,235,226,0.5)' }}
          onBlur={e   => { e.currentTarget.style.borderColor = isDark ? 'rgba(239,235,226,0.2)' : 'rgba(239,235,226,0.3)' }}
        />
        <button
          type="submit"
          style={{
            height:        '48px',
            background:    isDark ? 'var(--teal)' : 'var(--cream)',
            color:         isDark ? 'var(--cream)' : 'var(--teal)',
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      '11px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding:       isDark ? '0 32px' : '0 40px',
            border:        'none',
            boxSizing:     'border-box' as const,
            cursor:        'pointer',
            whiteSpace:    'nowrap',
            transition:    'background 0.2s, color 0.2s',
            flexShrink:    0,
          }}
          onMouseEnter={e => {
            const b = e.currentTarget
            b.style.background = isDark ? 'var(--teal2)' : '#2a2827'
            if (!isDark) b.style.color = 'var(--cream)'
          }}
          onMouseLeave={e => {
            const b = e.currentTarget
            b.style.background = isDark ? 'var(--teal)' : 'var(--cream)'
            if (!isDark) b.style.color = 'var(--teal)'
          }}
        >
          Subscribe
        </button>
      </div>
    </form>
  )
}

// ─── Panel 1 — Hero ───────────────────────────────────────────────────────────
function P1Hero() {
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const line1Ref   = useRef<HTMLSpanElement>(null)
  const line2Ref   = useRef<HTMLSpanElement>(null)
  const ruleRef    = useRef<HTMLDivElement>(null)
  const bodyRef    = useRef<HTMLParagraphElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)
  const formRef    = useRef<HTMLDivElement>(null)
  const [heroEmail, setHeroEmail]         = useState('')
  const [heroSubmitted, setHeroSubmitted] = useState(false)

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!heroEmail) return
    fetch(KIT_ACTION, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email_address: heroEmail }).toString(),
      mode: 'no-cors',
    })
    setHeroSubmitted(true)
  }

  useEffect(() => {
    const lines = [line1Ref.current, line2Ref.current]
    const fades = [eyebrowRef.current, ruleRef.current, bodyRef.current, pillarsRef.current, formRef.current]
    if (lines.some(e => !e) || fades.some(e => !e)) return

    gsap.set(lines, { y: '110%' })
    gsap.set(fades, { opacity: 0, y: 20 })

    gsap.to(lines,              { y: '0%', duration: 0.9, ease: 'cubic-bezier(0.16,1,0.3,1)', stagger: 0.06, delay: 0.2 })
    gsap.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7, delay: 0.5 })
    gsap.to(ruleRef.current,    { opacity: 1, y: 0, duration: 0.7, delay: 0.7 })
    gsap.to(bodyRef.current,    { opacity: 1, y: 0, duration: 0.7, delay: 0.85 })
    gsap.to(pillarsRef.current, { opacity: 1, y: 0, duration: 0.7, delay: 1.0 })
    gsap.to(formRef.current,    { opacity: 1, y: 0, duration: 0.7, delay: 1.1 })
  }, [])

  return (
    <section
      data-panel="0"
      className="snarkletter-hero"
      style={{
        background:          '#2a2827',
        display:             'grid',
        gridTemplateColumns: '44% 56%',
        minHeight:           '100vh',
        position:            'relative',
        overflow:            'hidden',
      }}
    >
      {/* Left text column */}
      <div className="snarkletter-text-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 6% 40px 80px', position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <div ref={eyebrowRef} style={{ display: 'flex', alignItems: 'center', gap: '14px', opacity: 0 }}>
          <div style={{ width: '32px', height: '0.5px', background: 'rgba(239,235,226,0.45)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(239,235,226,0.65)', textTransform: 'uppercase' }}>
            The Newsletter
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ margin: '28px 0 0 0', lineHeight: 0.92 }}>
          <div style={{ overflow: 'hidden' }}>
            <span ref={line1Ref} style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,5vw,72px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1, letterSpacing: '-0.02em', paddingBottom: '0.04em' }}>
              The Real Estate
            </span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span ref={line2Ref} style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px,5vw,68px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--cream)', lineHeight: 1, paddingBottom: '0.04em' }}>
              Snarkletter.
            </span>
          </div>
        </h1>

        {/* Rule */}
        <div ref={ruleRef} style={{ width: '48px', height: '0.5px', background: 'rgba(239,235,226,0.15)', margin: '32px 0', opacity: 0 }} />

        {/* Body */}
        <p ref={bodyRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(239,235,226,0.6)', maxWidth: '400px', margin: '0 0 40px 0', opacity: 0 }}>
          Weekly operations intelligence for real estate professionals who are done working for cents on the dollar.
        </p>

        {/* Pillars */}
        <div ref={pillarsRef} style={{ display: 'flex', gap: 0, marginBottom: '48px', opacity: 0 }}>
          {PILLARS.map((p, i) => (
            <div key={p.title} style={{
              paddingRight:  '24px',
              paddingTop:    '24px',
              paddingBottom: '24px',
              borderRight:   i < PILLARS.length - 1 ? '0.5px solid rgba(239,235,226,0.2)' : 'none',
              marginRight:   i < PILLARS.length - 1 ? '24px' : 0,
            }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(20px,2.4vw,26px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1, marginBottom: '6px' }}>{p.title}</span>
              <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(239,235,226,0.5)' }}>{p.sub}</span>
            </div>
          ))}
        </div>

        {/* Subscribe form */}
        <div ref={formRef} style={{ opacity: 0 }}>
          {/* Card */}
          <div style={{
            maxWidth:       '480px',
            border:         '1px solid rgba(239,235,226,0.15)',
            background:     'rgba(239,235,226,0.04)',
            backdropFilter: 'blur(8px)',
            padding:        '32px 40px',
          }}>
            <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal-mid)', margin: '0 0 16px 0' }}>
              Get on the List
            </p>
            {heroSubmitted ? (
              <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'var(--teal-mid)', margin: 0 }}>
                You&apos;re on the list. First issue incoming.
              </p>
            ) : (
              <form onSubmit={handleHeroSubmit} style={{ width: '100%' }}>
                <div className="ca-form-row" style={{ display: 'flex', width: '100%' }}>
                  <input
                    type="email"
                    name="email_address"
                    value={heroEmail}
                    onChange={e => setHeroEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    style={{
                      flex:        1,
                      height:      '48px',
                      background:  'transparent',
                      border:      '1px solid rgba(239,235,226,0.2)',
                      borderRight: 'none',
                      color:       'var(--cream)',
                      fontFamily:  'var(--font-dm-mono)',
                      fontSize:    '13px',
                      paddingLeft: '16px',
                      outline:     'none',
                      boxSizing:   'border-box' as const,
                    }}
                    onFocus={e  => { e.currentTarget.style.borderColor = 'rgba(239,235,226,0.4)' }}
                    onBlur={e   => { e.currentTarget.style.borderColor = 'rgba(239,235,226,0.2)' }}
                  />
                  <button
                    type="submit"
                    style={{
                      height:        '48px',
                      background:    'var(--teal-mid)',
                      color:         'var(--cream)',
                      fontFamily:    'var(--font-dm-mono)',
                      fontSize:      '11px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      padding:       '0 32px',
                      border:        'none',
                      cursor:        'pointer',
                      whiteSpace:    'nowrap',
                      flexShrink:    0,
                      transition:    'background 0.2s',
                      boxSizing:     'border-box' as const,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal2)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--teal-mid)' }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>
          {/* Social proof — outside card */}
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'rgba(239,235,226,0.4)', margin: '16px 0 0 0' }}>
            <span style={{ marginRight: '6px' }}>·</span>Read by the people closest to the closing table.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', color: 'rgba(239,235,226,0.25)', margin: '10px 0 0 0', lineHeight: 1.6 }}>
            Your email is sent to Kit (our email provider). Unsubscribe any time.{' '}
            <a href="/privacy" style={{ color: 'rgba(95,158,160,0.6)', textDecoration: 'none' }}>Privacy Policy</a>.
          </p>
        </div>
      </div>

      {/* Right photo column */}
      <div className="snarkletter-right-col" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/28.png"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
        />
        {/* Gradient overlay — dark on left (behind text), light on right (face) */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(20,18,17,0.75) 0%, rgba(20,18,17,0.40) 40%, rgba(20,18,17,0.10) 70%, rgba(20,18,17,0.05) 100%)' }} />
        {/* Left-edge fade */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '40%', background: 'linear-gradient(to right, #2a2827 0%, transparent 100%)', pointerEvents: 'none' }} />
        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to bottom, transparent 60%, #2a2827 100%)', pointerEvents: 'none' }} />
        {/* Watermark patch — bottom-right sparkle icon */}
        <WatermarkPatch corner="bottom-right" width={100} height={100} color="rgba(42,40,39,0.98)" />
        {/* Photo protection overlay */}
        <div className="img-protect-overlay" />
      </div>
    </section>
  )
}

// ─── Panel 1b — Why This Exists ───────────────────────────────────────────────
function P1bWhyThisExists() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef    = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(leftRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      data-panel="1"
      style={{
        position:  'relative',
        minHeight: '100vh',
        overflow:  'hidden',
      }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/testimonial-pic.jpg"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
      />

      {/* Dark overlay for legibility */}
      <div className="snarkletter-why-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(54,50,49,0.55)', zIndex: 1 }} />
      {/* Centered radial scrim — extra density behind the text column */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(20,18,17,0.55) 0%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }} />

      {/* Bottom fade into next section */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '500px', background: 'linear-gradient(to bottom, transparent 0%, rgba(42,40,39,0.6) 50%, #2a2827 100%)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Text overlay */}
      <div ref={leftRef} className="why-exists-content" style={{ position: 'relative', zIndex: 3, paddingTop: '8vh', maxWidth: '800px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', textAlign: 'center' }}>
        <div style={{ marginBottom: '24px' }}>
          <span style={{ display: 'inline-block', background: 'var(--teal)', color: 'var(--cream)', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 0 }}>
            Why This Exists
          </span>
        </div>
        <h2 className="why-exists-headline" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px,5vw,64px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.05, margin: '0 0 32px 0' }}>
          What 3K+ closings taught&nbsp;me.<br />
          <span style={{ fontStyle: 'italic', display: 'block', textAlign: 'center' }}>Your inbox gets it weekly.</span>
        </h2>
        <p className="why-exists-body" style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(239,235,226,0.85)', maxWidth: '512px', margin: '0 auto 16px' }}>
          Most real estate content is recycled LinkedIn advice. This is different. Every issue pulls from real transactions — what worked, what failed, what saved the deal, and what the textbooks never covered.<br /><br />Insider access, no paywall, just show up.
        </p>
        <p className="why-exists-quote" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontStyle: 'italic', color: 'rgba(239,235,226,0.75)', lineHeight: 1.5, margin: 0 }}>
          &ldquo;The closing table has secrets. This is where they live.&rdquo;
        </p>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 3 }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(239,235,226,0.4)' }}>Scroll</span>
        <div style={{ width: '0.5px', height: '32px', background: 'rgba(255,255,255,0.2)' }} />
      </div>
    </section>
  )
}

// ─── Panel 2 — What You Get ───────────────────────────────────────────────────
function P2WhatYouGet() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef    = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.fromTo(leftRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]
    gsap.fromTo(cards,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      data-panel="2"
      style={{
        background:  '#2a2827',
        minHeight:   '100vh',
        display:     'flex',
        alignItems:  'center',
        padding:     0,
        borderTop:   '0.5px solid rgba(239,235,226,0.08)',
      }}
    >
      <div className="section-pad-inner" style={{ width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>
        <div className="two-col-flex" style={{ display: 'flex', gap: '64px', alignItems: 'flex-start', maxWidth: '1200px' }}>

          {/* Left col — 38% */}
          <div ref={leftRef} style={{ flex: '0 0 38%' }}>
            <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--teal-mid)', margin: '0 0 24px 0' }}>
              What You&apos;ll Actually Get
            </p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 32px 0', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              Six months of systems.<br />
              Not six months of{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--teal2)' }}>SEO filler.</span>
            </h2>
            {[
              "One letter a week. No fluff, no vendor pitches, no motivational reheats.",
              "Just what actually broke in real files this week, what brokers routinely miss before it becomes a problem, and the systems I've pulled out of 3,000+ transactions to keep volume from turning into chaos.",
              "Built for agents, brokers, and TCs who are done being surprised on Friday at 4pm.",
            ].map((t, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'rgba(224,220,214,0.82)', lineHeight: 1.85, margin: i === 0 ? 0 : '16px 0 0 0' }}>{t}</p>
            ))}
          </div>

          {/* Right col — numbered list */}
          <div style={{ flex: 1 }}>
            {CARDS.map((card, i) => (
              <div
                key={i}
                ref={el => { cardsRef.current[i] = el }}
                style={{
                  borderTop:    '0.5px solid rgba(239,235,226,0.1)',
                  borderBottom: i === CARDS.length - 1 ? '0.5px solid rgba(239,235,226,0.1)' : 'none',
                  display:      'flex',
                  gap:          '32px',
                  padding:      '24px 0 32px 0',
                }}
              >
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.25em', color: 'var(--teal-mid)', flexShrink: 0, minWidth: '40px', paddingTop: '4px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(22px,2vw,28px)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 8px 0', lineHeight: 1.15 }}>{card.title}</h3>
                  <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'rgba(188,175,175,0.75)', lineHeight: 1.75, margin: 0 }}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Panel 3 — Subscribe CTA ─────────────────────────────────────────────────
function P3Subscribe() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      data-panel="3"
      className="snark-subscribe-section"
      style={{
        background:     '#114B4D',
        minHeight:      '100vh',
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        paddingTop:     '96px',
        paddingBottom:  '96px',
        paddingLeft:    '6%',
        paddingRight:   '6%',
        position:       'relative',
      }}
    >
      <div className="seam-tab" style={{
        position:   'absolute',
        top:        0,
        left:       '64px',
        transform:  'translateY(-100%)',
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
          Get
        </div>
        <div style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'rgba(239,235,226,0.65)',
          marginTop:     '5px',
        }}>
          on the list
        </div>
      </div>

      <div ref={contentRef} className="snark-subscribe-content" style={{ maxWidth: '672px', width: '100%', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(239,235,226,0.5)', margin: '0 0 32px 0' }}>
          Get on the List
        </p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(32px,6vw,72px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 0.95, margin: 0 }}>
          Join before the<br />next issue drops.
        </h2>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'rgba(239,235,226,0.65)', margin: '24px 0 0 0', lineHeight: 1.8 }}>
          Free forever.<br />Unsubscribe with one click.
        </p>
        <div style={{ marginTop: '48px', width: '100%', maxWidth: '500px', margin: '48px auto 0' }}>
          <SubscribeForm variant="teal" />
        </div>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'rgba(239,235,226,0.5)', margin: '16px 0 0 0' }}>
          <span style={{ color: 'var(--teal-mid)', marginRight: '6px' }}>·</span>Read by the people closest to the closing table.
        </p>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', color: 'rgba(239,235,226,0.3)', margin: '10px 0 0 0', lineHeight: 1.6 }}>
          Your email is sent to Kit (our email provider). Unsubscribe any time.{' '}
          <a href="/privacy" style={{ color: 'rgba(95,158,160,0.5)', textDecoration: 'none' }}>Privacy Policy</a>.
        </p>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SnarkletterPage() {
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
        <P1bWhyThisExists />
        <P2WhatYouGet />
        <P3Subscribe />
      </main>
      <Footer easterEgg />
    </>
  )
}
