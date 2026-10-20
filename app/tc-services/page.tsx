'use client'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import Cursor      from '@/components/Cursor'
import ProgressBar from '@/components/ProgressBar'
import CinemaNav   from '@/components/CinemaNav'
import SocialBar   from '@/components/SocialBar'
import PanelIndex  from '@/components/PanelIndex'
import Footer      from '@/components/Footer'
import TCIntakeForm from '@/components/TCIntakeForm'
import modalStyles  from '@/components/TCIntakeModal.module.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const BG = ['var(--black)', '#114B4D', '#2a2827', '#363231', '#2a2827', '#114B4D', '#2a2827', '#363231']

const PILLARS = [
  { title: 'INDUSTRY SPECIFIC',     sub: 'Florida RE only'       },
  { title: 'BUILT FROM EXPERIENCE', sub: '3,000+ transactions'   },
  { title: 'DESIGNED FOR VOLUME',   sub: 'Fit-based only'        },
]

const CRED_STATS = [
  { num: '20',    suffix: '+', label: 'Years in South Florida' },
  { num: '3,000', suffix: '+', label: 'Closings Supported'     },
  { num: '100',   suffix: '%', label: 'Fit-Based Only'         },
]

const WHAT_CARDS = [
  { num: '01', title: 'Coordination by a licensed Florida real estate professional', body: 'Deep contract fluency. Clean execution.' },
  { num: '02', title: 'Deadline + document control',  body: 'Tracking, packaging, and risk flagged early.' },
  { num: '03', title: 'Backend protection',           body: 'Built for agents closing real volume.' },
  { num: '04', title: 'Not a marketplace service',    body: 'Not a low-cost add-on. Fit matters.' },
]

const SCOPE_ITEMS = [
  { num: '01', label: 'DEADLINE CONTROL',    body: "Tracking with proactive reminders." },
  { num: '02', label: 'DOCUMENT DISCIPLINE', body: "Collection, compliance packaging, audit-ready files." },
  { num: '03', label: 'AGENT COMMUNICATION', body: "Clear status updates so you're never chasing your own file." },
  { num: '04', label: 'CONTRACT TO CLOSE',   body: "Both buyer-side and seller-side transactions, from fully executed contract through closing." },
]

// ─── Panel 1 — Hero ───────────────────────────────────────────────────────────
function P1Hero({ onOpen }: { onOpen: () => void }) {
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const line1Ref   = useRef<HTMLSpanElement>(null)
  const ruleRef    = useRef<HTMLDivElement>(null)
  const body1Ref   = useRef<HTMLParagraphElement>(null)
  const body2Ref   = useRef<HTMLParagraphElement>(null)
  const ctaRef     = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const line1 = line1Ref.current
    const fades = [eyebrowRef.current, ruleRef.current, body1Ref.current, body2Ref.current, ctaRef.current, pillarsRef.current]
    if (!line1 || fades.some(e => !e)) return

    gsap.set(line1, { y: '110%' })
    gsap.set(fades, { opacity: 0, y: 16 })

    gsap.to(line1,              { y: '0%', duration: 0.9, ease: 'cubic-bezier(0.16,1,0.3,1)', delay: 0.2 })
    gsap.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7, delay: 0.5  })
    gsap.to(ruleRef.current,    { opacity: 1, y: 0, duration: 0.6, delay: 0.85 })
    gsap.to(body1Ref.current,   { opacity: 1, y: 0, duration: 0.7, delay: 0.95 })
    gsap.to(body2Ref.current,   { opacity: 1, y: 0, duration: 0.7, delay: 1.05 })
    gsap.to(ctaRef.current,     { opacity: 1, y: 0, duration: 0.7, delay: 1.15 })
    gsap.to(pillarsRef.current, { opacity: 1, y: 0, duration: 0.7, delay: 1.25 })
  }, [])

  return (
    <section data-panel="0" style={{ background: 'var(--black)', height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>

      {/* (1) Background — night Miami skyline, full-bleed */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/tc-services-final-hero-bg.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0, pointerEvents: 'none' }} />

      {/* (2) Overlay — left-heavy gradient, lighter than homepage since bg is already dark.
              Must stay at z-index 1, BELOW the portrait at z-index 2. */}
      <div className="tc-hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to right, rgba(30,27,26,0.92) 0%, rgba(30,27,26,0.78) 32%, rgba(30,27,26,0.38) 56%, rgba(30,27,26,0.1) 74%, transparent 90%)', pointerEvents: 'none' }} />

      {/* (3) Portrait cutout — transparent PNG, fully opaque, above the overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero-1.png" alt="" className="hero-portrait-right" style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '55%', objectFit: 'contain', objectPosition: 'bottom right', zIndex: 2 }} />

      {/* Bottom fade — blends section into next panel */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', zIndex: 3, background: 'linear-gradient(to top, #1e1b1a 0%, transparent 100%)', pointerEvents: 'none' }} />

      {/* Right edge fade — portrait side, hide on mobile */}
      <div className="hero-portrait-fade" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '120px', zIndex: 3, background: 'linear-gradient(to right, transparent 0%, #1e1b1a 100%)', pointerEvents: 'none' }} />

      {/* Photo protection overlay */}
      <div className="img-protect-overlay" style={{ zIndex: 4 }} />

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 10 }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', letterSpacing: '0.3em', color: 'var(--greige)', textTransform: 'uppercase', opacity: 0.45 }}>Scroll</span>
        <div className="scroll-line" />
      </div>

      {/* Text content */}
      <div className="hero-text-col-mobile" style={{ position: 'relative', zIndex: 10, width: '44%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '80px', paddingBottom: '40px', paddingLeft: '6%' }}>

        {/* Eyebrow */}
        <div ref={eyebrowRef} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '32px', height: '0.5px', background: 'rgba(239,235,226,0.45)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(239,235,226,0.65)', textTransform: 'uppercase' }}>TC Services</span>
        </div>

        {/* Headline */}
        <h1 style={{ margin: '20px 0 0 0', lineHeight: 1 }}>
          <div style={{ overflow: 'hidden' }}>
            <span ref={line1Ref} style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,5vw,72px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1, letterSpacing: '-0.02em', paddingBottom: '0.04em' }}>
              South Florida Real Estate Transaction Coordination
            </span>
          </div>
        </h1>

        {/* Rule */}
        <div ref={ruleRef} className="tc-hero-rule" style={{ width: '48px', height: '0.5px', background: 'rgba(239,235,226,0.15)', margin: '28px 0' }} />

        {/* Body */}
        <p ref={body1Ref} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 'clamp(13px,1.1vw,15px)', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.82)', maxWidth: '420px', margin: 0 }}>
          Contract-to-close management for South Florida agents and teams.
        </p>
        <p ref={body2Ref} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 'clamp(13px,1.1vw,14px)', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.65)', maxWidth: '420px', margin: '12px 0 0 0' }}>
          Licensed, high-precision contract-to-close coordination designed to protect your reputation, timelines, and peace of mind under real volume.
        </p>

        {/* CTA row */}
        <div ref={ctaRef} style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '40px', flexWrap: 'wrap' }}>
          <button
            onClick={onOpen}
            className="btn-teal"
            style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '15px 36px', border: 'none', flexShrink: 0 }}
          >
            Request availability
          </button>
        </div>

        {/* Pillars */}
        <div ref={pillarsRef} className="tc-hero-pillars" style={{ display: 'flex', gap: 0, marginTop: '40px' }}>
          {PILLARS.map((p, i) => (
            <div key={p.title} style={{ paddingRight: '24px', borderRight: i < PILLARS.length - 1 ? '0.5px solid rgba(239,235,226,0.1)' : 'none', marginRight: i < PILLARS.length - 1 ? '24px' : 0, whiteSpace: 'nowrap' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '8px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cognac)', marginBottom: '4px' }}>{p.title}</span>
              <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '8px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(239,235,226,0.55)' }}>{p.sub}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

// ─── Panel 1b — Credibility Strip ────────────────────────────────────────────
function P1bCredibility() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef   = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    const stats = statsRef.current.filter(Boolean) as HTMLDivElement[]
    gsap.fromTo(stats,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="1" className="stats-3-col" style={{ background: '#114B4D', height: 'auto', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, margin: 0 }}>

      {CRED_STATS.map((stat, i) => (
        <div
          key={i}
          ref={el => { statsRef.current[i] = el }}
          style={{ textAlign: 'center', padding: '16px 0', borderRight: i < CRED_STATS.length - 1 ? '0.5px solid rgba(239,235,226,0.1)' : 'none', background: 'transparent' }}
        >
          <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(24px,2.8vw,36px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1, fontStyle: 'normal' }}>
            {stat.num}<span style={{ color: 'rgba(239,235,226,0.55)', fontStyle: 'italic' }}>{stat.suffix}</span>
          </span>
          <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(239,235,226,0.5)', marginTop: '8px' }}>{stat.label}</span>
        </div>
      ))}

    </section>
  )
}

// ─── Panel 2 — What This Is ───────────────────────────────────────────────────
function P2WhatThisIs() {
  const sectionRef  = useRef<HTMLElement>(null)
  const eyebrowRef  = useRef<HTMLDivElement>(null)
  const headRef     = useRef<HTMLHeadingElement>(null)
  const bodyRef     = useRef<HTMLParagraphElement>(null)
  const cardsRef    = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.fromTo(
      [eyebrowRef.current, headRef.current, bodyRef.current],
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]
    gsap.fromTo(cards,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="2" style={{ background: '#2a2827', position: 'relative', zIndex: 5, minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 0 }}>

      <div className="section-pad-inner" style={{ width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>
      <div className="two-col-flex" style={{ display: 'flex', gap: '64px', alignItems: 'flex-start', maxWidth: '1200px' }}>

        {/* Left — 40% */}
        <div style={{ flex: '0 0 38%' }}>
          <div ref={eyebrowRef} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
            <div style={{ width: '32px', height: '0.5px', background: 'var(--cognac)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', color: 'var(--cognac)', textTransform: 'uppercase' }}>What This Is</span>
          </div>
          <h2 ref={headRef} style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 32px 0', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            High-precision<br />
            execution —<br />
            <span style={{ fontStyle: 'italic', color: 'var(--teal-mid)' }}>not &ldquo;help.&rdquo;</span>
          </h2>
          <p ref={bodyRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'var(--greige)', lineHeight: 1.85, margin: 0, maxWidth: '300px' }}>
            Deep contract fluency, proactive communication, and clean documentation — from executed contract through closing. Agent negotiations, lender underwriting, and title or attorney work remain with their respective professionals.
          </p>
        </div>

        {/* Right — 60%, editorial numbered list */}
        <div style={{ flex: 1 }}>
          {WHAT_CARDS.map((card, i) => (
            <div
              key={i}
              ref={el => { cardsRef.current[i] = el }}
              style={{
                borderTop: '0.5px solid rgba(239,235,226,0.1)',
                borderBottom: i === WHAT_CARDS.length - 1 ? '0.5px solid rgba(239,235,226,0.1)' : 'none',
                display: 'flex',
                gap: '32px',
                padding: '24px 0 32px 0',
              }}
            >
              <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--teal-mid)', flexShrink: 0, minWidth: '40px', paddingTop: '4px' }}>{card.num}</span>
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

const FOR_ITEMS = [
  "You close consistent volume and want an operator — not 'help.'",
  "Deadlines, documentation, and your name matter.",
  "You want fewer fires, fewer surprises, fewer emergencies.",
  "You respect process — systems beat heroics.",
]

const NOT_ITEMS = [
  "You're shopping for the cheapest TC.",
  "You want last-minute saves without a process.",
  "Deadlines are 'flexible suggestions.'",
  "You want chaos absorbed instead of eliminated.",
]

const HOW_ITEMS = [
  "I run the file proactively.",
  "Communication stays documented and professional.",
  "Risks are escalated early.",
  "Everything is verified and logged.",
]

const DONT_ITEMS = [
  "Follow up indefinitely without clear ownership or escalation.",
  "Cut corners for speed.",
  "Absorb chaos from ignored deadlines.",
  "Operate in gray areas.",
]

// ─── Panel 3 — Scope ──────────────────────────────────────────────────────────
function P3Scope({ onOpen }: { onOpen: () => void }) {
  const sectionRef  = useRef<HTMLElement>(null)
  const leftRef     = useRef<HTMLDivElement>(null)
  const itemsRef    = useRef<(HTMLDivElement | null)[]>([])
  const noteRef     = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(leftRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )

    const items = itemsRef.current.filter(Boolean) as HTMLDivElement[]
    gsap.fromTo(items,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )

    gsap.fromTo(noteRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.4,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="3" style={{ background: '#363231', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 0, position: 'relative' }}>
      {/* Background image — covers the top header block area only, not the card grid */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/scope-tc-services.jpg"
        alt=""
        style={{
          position:       'absolute',
          top:            0,
          left:           0,
          right:          0,
          height:         'clamp(360px, 44vh, 500px)',
          width:          '100%',
          objectFit:      'cover',
          objectPosition: 'top center',
          zIndex:         0,
          pointerEvents:  'none',
        }}
      />
      {/* Dark overlay for legibility */}
      <div style={{
        position:      'absolute',
        top:           0,
        left:          0,
        right:         0,
        height:        'clamp(360px, 44vh, 500px)',
        background:    'rgba(15,13,12,0.65)',
        zIndex:        1,
        pointerEvents: 'none',
      }} />
      {/* Bottom fade — image into solid section bg */}
      <div style={{
        position:      'absolute',
        top:           'calc(clamp(360px, 44vh, 500px) - 140px)',
        left:          0,
        right:         0,
        height:        '140px',
        background:    'linear-gradient(to bottom, transparent, #363231)',
        zIndex:        2,
        pointerEvents: 'none',
      }} />

      <div className="seam-tab" style={{
        position:   'absolute',
        top:        0,
        left:       '64px',
        transform:  'translateY(-100%)',
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
          Scope
        </div>
        <div style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'rgba(239,235,226,0.65)',
          marginTop:     '5px',
        }}>
          of work
        </div>
      </div>
      <div className="section-pad-inner" style={{ width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%', position: 'relative', zIndex: 5 }}>

      {/* Top — header block */}
      <div ref={leftRef} style={{ maxWidth: '720px', paddingBottom: '32px', borderBottom: '0.5px solid rgba(239,235,226,0.1)', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '0.5px', background: 'rgba(239,235,226,0.45)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(239,235,226,0.65)', textTransform: 'uppercase' }}>Scope</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4.5vw,56px)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 24px 0', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
          The outcome is{' '}
          <span style={{ fontStyle: 'italic' }}>a quiet closing.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'var(--greige)', lineHeight: 1.85, margin: '0 0 32px 0', maxWidth: '480px' }}>
          You&apos;re hiring control: deadlines, documentation, and clear communication — handled like it matters.
        </p>
        <button
          onClick={onOpen}
          className="btn-teal"
          style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '16px 40px', border: 'none' }}
        >
          Request availability
        </button>
      </div>

      {/* Bottom — 2×2 grid */}
      <div className="grid-2x2-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {SCOPE_ITEMS.map((item, i) => (
          <div
            key={i}
            ref={el => { itemsRef.current[i] = el }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: '32px',
              background: 'rgba(239,235,226,0.03)',
              border: '0.5px solid rgba(239,235,226,0.07)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--teal-mid)', marginBottom: '12px' }}>
              {item.label}
            </span>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(20px,2vw,26px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.35, margin: 0 }}>
              {item.body}
            </p>
            {/* Watermark — absolute, out of flow */}
            <span style={{
              position: 'absolute', bottom: '16px', right: '16px',
              fontFamily: 'var(--font-cormorant)', fontSize: '3rem', fontWeight: 300,
              color: 'rgba(239,235,226,0.04)', lineHeight: 1,
              pointerEvents: 'none', userSelect: 'none',
            }}>{item.num}</span>
          </div>
        ))}
      </div>

      {/* Pullquote */}
      <div ref={noteRef} style={{ marginTop: '64px', borderLeft: '2px solid #5f9ea0', paddingLeft: '24px', maxWidth: '640px' }}>
        <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px', fontStyle: 'italic', color: 'rgba(239,235,226,0.6)', lineHeight: 1.65, margin: 0 }}>
          &ldquo;This is designed to reduce fires — not absorb them. Prevention is the product.&rdquo;
        </p>
      </div>

      </div>{/* end paddingLeft wrapper */}
    </section>
  )
}

// ─── Panel 4 — Service Area ───────────────────────────────────────────────────
const SERVICE_CITIES = ['Miami', 'Fort Lauderdale', 'Boca Raton', 'Coral Gables', 'Doral', 'Aventura']

function P3bServiceArea() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="4" style={{ background: '#2a2827', padding: 0, position: 'relative' }}>
      <div ref={contentRef} className="section-pad-inner" style={{ width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>
        <div style={{ maxWidth: '720px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
            <div style={{ width: '32px', height: '0.5px', background: 'rgba(239,235,226,0.45)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(239,235,226,0.65)', textTransform: 'uppercase' }}>Where</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 28px 0', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            Built for South Florida&apos;s{' '}
            <span style={{ fontStyle: 'italic' }}>closing tables.</span>
          </h2>

          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'var(--greige)', lineHeight: 1.85, margin: '0 0 40px 0', maxWidth: '540px' }}>
            Miami-Dade. Broward. Palm Beach County. If your file closes here, I know the players, the title companies, and the way local underwriting actually moves — not just what the contract says on paper.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {SERVICE_CITIES.map(city => (
              <span key={city} style={{
                fontFamily:    'var(--font-dm-mono)',
                fontSize:      '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color:         'rgba(239,235,226,0.55)',
                padding:       '8px 16px',
                border:        '0.5px solid rgba(239,235,226,0.12)',
                background:    'rgba(239,235,226,0.03)',
              }}>
                {city}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Panel 5 — Fit Matters ────────────────────────────────────────────────────
function P4FitMatters() {
  const sectionRef  = useRef<HTMLElement>(null)
  const leftRef     = useRef<HTMLDivElement>(null)
  const forItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const notItemsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.fromTo(leftRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )

    const allItems = [...forItemsRef.current, ...notItemsRef.current].filter(Boolean) as HTMLDivElement[]
    gsap.fromTo(allItems,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="5" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
      <div className="seam-tab" style={{
        position:   'absolute',
        top:        0,
        right:      0,
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
          Fit
        </div>
        <div style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'rgba(239,235,226,0.65)',
          marginTop:     '5px',
        }}>
          matters
        </div>
      </div>

      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/clausevault-bg-71.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0, filter: 'brightness(0.25) saturate(0.6)' }} />

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(17,75,77,0.85)' }} />

      {/* Content — stacked layout */}
      <div className="section-pad-inner" style={{ position: 'relative', zIndex: 2, width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>

        {/* Top — full-width header block */}
        <div ref={leftRef} style={{ maxWidth: '720px', marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <div style={{ width: '32px', height: '0.5px', background: 'var(--cognac)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', color: 'var(--cognac)', textTransform: 'uppercase' }}>Fit Matters</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px,5vw,64px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.05, margin: 0, letterSpacing: '-0.01em' }}>
            This isn&apos;t for everyone —{' '}
            <span style={{ fontStyle: 'italic' }}>on purpose.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '15px', color: 'rgba(239,235,226,0.7)', lineHeight: 1.85, margin: '24px 0 0 0' }}>
            This works best when expectations, communication, and responsibility are clear.
          </p>
          <div style={{ marginTop: '32px', borderLeft: '2px solid #5f9ea0', paddingLeft: '20px' }}>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontStyle: 'italic', color: 'rgba(239,235,226,0.7)', lineHeight: 1.6, margin: 0 }}>
              &ldquo;If the first list felt like relief — and the second made you uncomfortable — we&apos;re probably a fit.&rdquo;
            </p>
          </div>
        </div>

        {/* Bottom — 2-column grid */}
        <div className="fit-grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'stretch' }}>

          {/* For you — left column */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '32px', borderRight: '1px solid rgba(239,235,226,0.1)' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'rgba(239,235,226,0.9)', paddingBottom: '20px', borderBottom: '1px solid rgba(239,235,226,0.2)', marginBottom: '0' }}>
              This is for you if
            </span>
            {FOR_ITEMS.map((text, i) => (
              <div
                key={i}
                ref={el => { forItemsRef.current[i] = el }}
                style={{ display: 'flex', gap: '16px', padding: '20px 0', borderBottom: i < FOR_ITEMS.length - 1 ? '0.5px solid rgba(239,235,226,0.2)' : 'none' }}
              >
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', color: 'var(--teal-mid)', flexShrink: 0, paddingTop: '4px' }}>0{i + 1}</span>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontWeight: 400, color: '#e2dfd8', lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

          {/* Not for you — right column */}
          <div style={{ background: 'rgba(255,255,255,0.015)', padding: '32px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.22em', color: '#a8c5c5', paddingBottom: '20px', borderBottom: '0.5px solid rgba(239,235,226,0.2)', marginBottom: '0' }}>
              This is not for you if
            </span>
            {NOT_ITEMS.map((text, i) => (
              <div
                key={i}
                ref={el => { notItemsRef.current[i] = el }}
                style={{ display: 'flex', gap: '16px', padding: '20px 0', borderBottom: i < NOT_ITEMS.length - 1 ? '0.5px solid rgba(239,235,226,0.2)' : 'none' }}
              >
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', color: 'rgba(239,235,226,0.4)', flexShrink: 0, paddingTop: '4px' }}>0{i + 1}</span>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontWeight: 400, color: 'rgba(239,235,226,0.8)', lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Panel 6 — Rules ─────────────────────────────────────────────────────────
function P5Rules() {
  const rulesRef        = useRef<HTMLElement>(null)
  const rulesContentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(rulesContentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: rulesRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: rulesRef })

  return (
    <section ref={rulesRef} data-panel="6" style={{ background: '#2a2827', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 0, position: 'relative' }}>
      <div className="seam-tab" style={{ position: 'absolute', top: '-72px', left: '64px', background: '#2a2827', padding: '16px 24px', zIndex: 10 }}>
        <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', fontWeight: 600, color: 'var(--cream)', lineHeight: 1 }}>Rules</div>
        <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(239,235,226,0.65)', marginTop: '5px' }}>& capacity</div>
      </div>
      <div ref={rulesContentRef} className="section-pad-inner" style={{ width: '100%', paddingTop: '192px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '0' }}>
          <div style={{ width: '32px', height: '0.5px', background: 'rgba(239,235,226,0.45)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(239,235,226,0.65)', textTransform: 'uppercase' }}>Rules + Capacity</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, color: 'var(--cream)', margin: '20px 0 0 0', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
          Structure is the{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--teal2)' }}>advantage.</span>
        </h2>

        <div className="fit-grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '56px', alignItems: 'start' }}>
          <div>
            <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--cognac)', marginBottom: '18px' }}>How I Work</span>
            {HOW_ITEMS.map((item, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', color: 'rgba(239,235,226,0.88)', lineHeight: 1.8, margin: '0 0 4px 0' }}>· {item}</p>
            ))}
          </div>
          <div>
            <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'rgba(239,235,226,0.35)', marginBottom: '18px' }}>What I Don&apos;t Do</span>
            {DONT_ITEMS.map((item, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', color: 'rgba(239,235,226,0.52)', lineHeight: 1.8, margin: '0 0 4px 0' }}>· {item}</p>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '0.5px solid rgba(239,235,226,0.1)', margin: '48px 0' }} />

        <div>
          <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'var(--cognac)', marginBottom: '14px' }}>Capacity</span>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'rgba(239,235,226,0.68)', lineHeight: 1.8, margin: 0, maxWidth: '640px' }}>
            I cap active files to protect quality, speed, and accuracy. New clients are accepted by timing + fit. When capacity is full, inquiries are waitlisted — not rushed.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', color: 'rgba(239,235,226,0.4)', lineHeight: 1.8, margin: '20px 0 0 0', maxWidth: '640px' }}>
            Operating hours: Monday through Friday, 9:00 a.m. to 5:00 p.m. Eastern. Weekends and federal holidays are observed.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Panel 7 — FAQ ───────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: 'What does a real estate transaction coordinator actually do?',
    a: [
      'A real estate transaction coordinator manages the administrative and deadline-driven work required to move a transaction from executed contract through closing.',
      'This typically includes reviewing the contract and addenda for completeness, organizing the transaction file, tracking critical dates, confirming deposits, coordinating documents and signatures, and following up with the lender, title company, attorneys, inspectors, condominium associations, homeowners associations, and other parties involved.',
      'The goal is to identify missing items and potential delays early, keep communication documented, and give the agent clear visibility into the file\u2019s progress.',
      'Transaction coordination does not replace the real estate agent, the lender, or the title company or closing attorney. The agent remains responsible for negotiations, client advice, strategy, and all decisions requiring their license or judgment. Lender underwriting and loan approval are the lender\u2019s domain. Title examination, closing preparation, and disbursements remain with the title company or closing attorney. The coordinator manages the administrative and deadline-driven process around each of those roles so every party has what they need, when they need it.',
    ],
  },
  {
    q: 'How is this different from a lower-cost or marketplace TC service?',
    a: [
      'Lower-cost and marketplace transaction coordinator services are often designed around volume, standardized checklists, and files being assigned to whichever coordinator is available.',
      'My service is built around direct accountability, Florida contract knowledge, documented communication, and limited capacity. You work with me rather than being passed between coordinators or placed into a general processing queue.',
      'I review each transaction in context, flag risks early, and actively follow the file from contract to closing. The service is designed for established agents who value accuracy, responsiveness, and consistency \u2014 not simply the lowest transaction coordination fee available.',
      'This is not a data-entry service or an emergency cleanup service. It is structured, contract-to-close transaction management for agents who want fewer missed details, fewer surprises, and better control over their files.',
    ],
  },
  {
    q: 'What areas do you cover?',
    a: [
      'I provide real estate transaction coordination throughout the state of Florida, with a primary focus on Miami-Dade County, Broward County, and Palm Beach County.',
      'My work is designed around Florida real estate contracts, brokerage compliance requirements, and the transaction practices common throughout the South Florida market.',
      'This includes experience with residential purchases and sales, financed and cash transactions, condominium and homeowners association requirements, title and closing coordination, and the additional documentation frequently involved in South Florida real estate.',
      'For transactions outside these primary service areas, availability is considered based on the property location, contract type, brokerage requirements, and overall fit.',
    ],
  },
  {
    q: 'How much does transaction coordination cost?',
    a: [
      'Transaction coordination fees are based primarily on the property\u2019s purchase price range. Current pricing begins at $595. A complete breakdown of rates is listed on our Availability and Fit Check intake form.',
      'Pricing reflects direct, licensed, contract-to-close coordination rather than checklist processing or marketplace-style support. We don\u2019t charge any setup or cancellation fees.',
    ],
  },
  {
    q: 'How do I get started?',
    a: [
      'Start by completing the fit and availability form.',
      'You will be asked about your market, transaction volume, typical transaction types, brokerage, current platforms, and preferred start date. This gives me enough context to evaluate whether the service is a strong match for your business and whether capacity is currently available.',
      'Each inquiry is personally reviewed. If the fit looks right, you may receive a brief follow-up or a short discovery call to confirm details before moving forward.',
      'Confirmed clients receive the service agreement, onboarding requirements, and file-submission instructions.',
      'Work begins once onboarding is complete. New-file submissions are accepted only from onboarded clients, starting with a fully executed contract delivered on the day the contract is signed by all parties.',
    ],
  },
  {
    q: 'Do you take on new clients anytime, or is there a waitlist?',
    a: [
      'New clients are accepted based on capacity and fit rather than on an unlimited, first-come basis.',
      'I limit the number of active files I manage so existing transactions receive the communication, tracking, and attention required. When capacity is available and the agent\u2019s workflow aligns with the service, onboarding can usually begin promptly.',
      'When capacity is full, qualified inquiries may be placed on a waitlist or offered a later start date. Submitting the fit and availability form is the best way to confirm current availability.',
      'This approach is intentional. The service is designed to prevent overload, not create another high-volume transaction coordination queue.',
    ],
  },
]

function P6FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="7" style={{ background: '#363231', padding: 0, position: 'relative' }}>
      <div ref={contentRef} className="section-pad-inner" style={{ width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
          <div style={{ width: '32px', height: '0.5px', background: 'rgba(239,235,226,0.45)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(239,235,226,0.65)', textTransform: 'uppercase' }}>Questions</span>
        </div>

        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 56px 0', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
          Frequently{' '}
          <span style={{ fontStyle: 'italic' }}>asked.</span>
        </h2>

        <div style={{ maxWidth: '800px' }}>
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                borderTop:    '0.5px solid rgba(239,235,226,0.1)',
                borderBottom: i === FAQ_ITEMS.length - 1 ? '0.5px solid rgba(239,235,226,0.1)' : 'none',
                padding:      '36px 0',
              }}
            >
              <h3 style={{
                fontFamily:    'var(--font-cormorant)',
                fontSize:      'clamp(20px,1.8vw,26px)',
                fontWeight:    600,
                fontStyle:     'italic',
                color:         'var(--cream)',
                margin:        '0 0 20px 0',
                lineHeight:    1.2,
                letterSpacing: '-0.01em',
              }}>
                {item.q}
              </h3>
              {item.a.map((para, j) => (
                <p key={j} style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize:   '13px',
                  color:      'rgba(188,175,175,0.85)',
                  lineHeight: 1.85,
                  margin:     j === 0 ? 0 : '12px 0 0 0',
                }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Field Notes Reading ──────────────────────────────────────────────────────
const FIELD_NOTES_READS = [
  {
    section: 'Communication',
    title:   '"We\'re Looking Good" Is Not a Status Update',
    slug:    'were-looking-good-is-not-a-status-update',
  },
  {
    section: 'Operations',
    title:   'Hiring an Assistant Doesn\'t Automatically Give You Your Time Back',
    slug:    'hiring-an-assistant',
  },
  {
    section: 'Clients',
    title:   'The Most Expensive Client Is Sometimes the One You\'re Afraid to Lose',
    slug:    'the-most-expensive-client',
  },
]

function PFieldNotesReading() {
  return (
    <section style={{ background: '#2a2827', padding: 0 }}>
      <div className="section-pad-inner" style={{ width: '100%', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '80px', paddingRight: '6%' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px' }}>
          <div style={{ width: '32px', height: '0.5px', background: 'rgba(239,235,226,0.45)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(239,235,226,0.65)', textTransform: 'uppercase' }}>From Field Notes</span>
          <a
            href="/field-notes"
            style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(239,235,226,0.38)', textDecoration: 'none', marginLeft: 'auto', transition: 'color 0.18s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(239,235,226,0.72)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,235,226,0.38)')}
          >
            All articles →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(239,235,226,0.07)' }}>
          {FIELD_NOTES_READS.map(article => (
            <a
              key={article.slug}
              href={`/field-notes/${article.slug}`}
              style={{
                display:        'block',
                background:     '#2a2827',
                padding:        '32px 28px',
                textDecoration: 'none',
                transition:     'background 0.18s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(239,235,226,0.04)')}
              onMouseLeave={e => (e.currentTarget.style.background = '#2a2827')}
            >
              <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--teal-mid)', marginBottom: '12px' }}>
                {article.section}
              </span>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(18px,1.6vw,22px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.35, margin: 0 }}>
                {article.title}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function P6CTA({ onOpen }: { onOpen: () => void }) {
  const ctaSectionRef = useRef<HTMLElement>(null)
  const ctaRef        = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: ctaSectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: ctaSectionRef })

  return (
    <section ref={ctaSectionRef} style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/clausevault-bg-71.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.35) saturate(0.7)', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(42,40,39,0.4) 0%, rgba(42,40,39,0.75) 100%)' }} />
      <div ref={ctaRef} className="section-pad-inner" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '6%', paddingRight: '6%', maxWidth: '640px' }}>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--cognac)', margin: 0 }}>
          Next Step
        </p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4.5vw,64px)', fontWeight: 300, color: 'var(--cream)', margin: '20px 0 0 0', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
          If you read this and nodded —{' '}
          <span style={{ fontStyle: 'italic' }}>let&apos;s find out if we&apos;re a fit.</span>
        </h2>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '15px', color: 'rgba(239,235,226,0.82)', lineHeight: 1.85, margin: '28px auto 0', maxWidth: '420px' }}>
          Include your monthly volume, market, transaction types, and ideal start timeframe. We&apos;ll confirm fit quickly — and respect everyone&apos;s time.
        </p>
        <div style={{ marginTop: '52px', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={onOpen}
            className="btn-teal"
            style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '18px 44px', border: 'none' }}
          >
            Request availability →
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TCServicesPage() {
  const [activePanel, setActivePanel] = useState(0)
  const activePanelRef                = useRef(0)
  const panelEls                      = useRef<(HTMLElement | null)[]>([])
  const [modalOpen, setModalOpen]     = useState(false)
  const [mounted, setMounted]         = useState(false)
  const lastFocusRef                  = useRef<HTMLElement | null>(null)
  const modalCloseRef                 = useRef<HTMLButtonElement>(null)

  function openModal() {
    lastFocusRef.current = document.activeElement as HTMLElement
    setModalOpen(true)
  }

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])
  useEffect(() => {
    if (!modalOpen) return
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false) }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [modalOpen])

  // Focus close button on open; restore focus to trigger element on close.
  useEffect(() => {
    if (modalOpen) {
      modalCloseRef.current?.focus()
    } else {
      lastFocusRef.current?.focus()
      lastFocusRef.current = null
    }
  }, [modalOpen])

  // Tab / Shift+Tab focus trap while modal is open.
  useEffect(() => {
    if (!modalOpen) return
    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const panel = document.querySelector<HTMLElement>('[role="dialog"]')
      if (!panel) return
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), ' +
          'select:not([disabled]), textarea:not([disabled]), ' +
          '[tabindex]:not([tabindex="-1"])'
        )
      ).filter(el => el.offsetParent !== null)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last  = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', trapFocus)
    return () => window.removeEventListener('keydown', trapFocus)
  }, [modalOpen])

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
        const next = Math.min(activePanelRef.current + 1, 7)
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
      <PanelIndex activePanel={activePanel} panelEls={panelEls.current} total={8} />

      <main style={{ margin: 0, padding: 0, display: 'block', gap: 0 }}>
        <P1Hero onOpen={openModal} />
        <P1bCredibility />
        <div className="border-t border-white/[0.06] mx-16" />
        <P2WhatThisIs />
        <div className="border-t border-white/[0.06] mx-16" />
        <P3Scope onOpen={openModal} />
        <P3bServiceArea />
        <P4FitMatters />
        <P5Rules />
        <P6FAQ />
        <PFieldNotesReading />
        <P6CTA onOpen={openModal} />
      </main>
      <Footer />

      {mounted && modalOpen && createPortal(
        <div
          className={modalStyles.overlay}
          onClick={e => { if (e.target === e.currentTarget) setModalOpen(false) }}
        >
          <div className={modalStyles.panel} role="dialog" aria-modal="true" aria-label="TC Intake Form">
            <button
              ref={modalCloseRef}
              type="button"
              onClick={() => setModalOpen(false)}
              className={modalStyles.closeBtn}
              aria-label="Close"
            >
              ×
            </button>
            <div className={modalStyles.panelInner}>
              <TCIntakeForm />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
