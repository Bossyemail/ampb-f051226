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

gsap.registerPlugin(ScrollTrigger, useGSAP)

const BG = ['#1e1b1a', '#114B4D', '#2a2827', '#363231', '#114B4D', '#2a2827', '#363231', '#114B4D']

const STATS = [
  { num: '8',   suffix: 's', label: 'Zero to Script'  },
  { num: '365', suffix: '',  label: 'Days of Content'  },
  { num: '7',   suffix: '',  label: 'Agent Voices'     },
]

const STEPS = [
  {
    num:   '01',
    title: 'Log in',
    body:  'Open Content OS. Your content is already built.',
  },
  {
    num:   '02',
    title: 'Pick your post',
    body:  'Choose a topic → get the hook, talking points, and full script. No thinking required.',
  },
  {
    num:   '03',
    title: 'Record + post',
    body:  "Drop the script into your teleprompter (Captions/Edits), hit record, post. That's it. Go close a deal.",
  },
]

const MODULES = [
  {
    num:   '01',
    label: 'ENGINE',
    title: 'Full post scripts',
    body:  'Hook, talking points, full script. Drop it in your teleprompter (Captions/Edits) and hit record.',
  },
  {
    num:   '02',
    label: 'HOOKS',
    title: 'Scroll-stopping openers',
    body:  "The first line is the hardest part. It's already written — by topic, by audience.",
  },
  {
    num:   '03',
    label: 'YAP',
    title: 'Talking outlines',
    body:  "Don't want a script? Pick a topic, hit record, talk. No memorization required.",
  },
  {
    num:   '04',
    label: 'PLAYBOOK',
    title: '7 voice frameworks',
    body:  'Always sounds like you — not like a template. Built for buyers, listings, and local content.',
  },
]

const FOR_ITEMS = [
  'You want to post daily without thinking about it',
  "You're tired of blending in with every other agent online",
  "You'd rather record 30 seconds than pay $500 for one edited video",
  'You understand that imperfect and consistent beats perfect and quarterly',
]

const NOT_ITEMS = [
  "You need everything to be polished before you'll post it",
  "You're still waiting on the right lighting setup",
  "You're comfortable being invisible while other agents fill the feed",
]

const COMPARE = [
  { label: 'Content agency',         price: '$2,000 / mo',     featured: false, strike: true  },
  { label: 'Social media VA',        price: '$1,500 / mo',     featured: false, strike: true  },
  { label: 'Ghostwriter (per post)', price: '$300–500 / post', featured: false, strike: false },
  { label: 'The Content OS',         price: '$49 / mo',        featured: true,  strike: false },
]

const OBJECTIONS = [
  {
    num: '01',
    q:   '"I don\'t like how I look on camera."',
    a:   "Neither does anyone else when they start. The agents getting traction aren't better looking — they just stopped waiting to feel ready.",
  },
  {
    num: '02',
    q:   '"I can come up with my own content ideas."',
    a:   'You can. And you will — once every two weeks, after 20 minutes of staring at a blank screen.',
  },
  {
    num: '03',
    q:   '"What if I fumble the video?"',
    a:   'Post it anyway. People trust the agent who shows up imperfectly over the one who never shows up at all.',
  },
  {
    num: '04',
    q:   '"I need to think about it."',
    a:   "That's the same thinking that got you six months of inconsistent content.",
  },
]

// ─── Panel 1 — Hero ───────────────────────────────────────────────────────────
function P1Hero() {
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const badgeRef   = useRef<HTMLSpanElement>(null)
  const line1Ref   = useRef<HTMLSpanElement>(null)
  const line2Ref   = useRef<HTMLSpanElement>(null)
  const ruleRef    = useRef<HTMLDivElement>(null)
  const subRef     = useRef<HTMLParagraphElement>(null)
  const bodyRef    = useRef<HTMLParagraphElement>(null)
  const ctaRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lines = [line1Ref.current, line2Ref.current]
    const fades = [eyebrowRef.current, badgeRef.current, ruleRef.current, subRef.current, bodyRef.current, ctaRef.current]
    if (lines.some(e => !e) || fades.some(e => !e)) return

    gsap.set(lines, { y: '110%' })
    gsap.set(fades, { opacity: 0, y: 16 })

    gsap.to(lines,              { y: '0%', duration: 0.9, ease: 'cubic-bezier(0.16,1,0.3,1)', stagger: 0.07, delay: 0.2 })
    gsap.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7, delay: 0.5  })
    gsap.to(badgeRef.current,   { opacity: 1, y: 0, duration: 0.6, delay: 0.62 })
    gsap.to(ruleRef.current,    { opacity: 1, y: 0, duration: 0.6, delay: 0.85 })
    gsap.to(subRef.current,     { opacity: 1, y: 0, duration: 0.7, delay: 0.92 })
    gsap.to(bodyRef.current,    { opacity: 1, y: 0, duration: 0.7, delay: 1.02 })
    gsap.to(ctaRef.current,     { opacity: 1, y: 0, duration: 0.7, delay: 1.12 })
  }, [])

  return (
    <section data-panel="0" style={{ background: '#1e1b1a', height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>


      {/* Background image — right side */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/clausevault-bg-33.jpg" alt="" style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '58%', objectFit: 'cover', objectPosition: 'center', zIndex: 1 }} />

      {/* Main overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to right, #1e1b1a 0%, #1e1b1a 38%, rgba(30,27,26,0.92) 45%, rgba(30,27,26,0.5) 60%, transparent 80%)' }} />

      {/* Photo left-edge fade — softens hard split */}
      <div style={{ position: 'absolute', top: 0, left: '42%', width: '18%', height: '100%', zIndex: 2, background: 'linear-gradient(to right, #1e1b1a 0%, transparent 100%)', pointerEvents: 'none' }} />

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', zIndex: 3, background: 'linear-gradient(to top, #1e1b1a 0%, transparent 100%)' }} />

      {/* Right edge fade */}
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '120px', zIndex: 3, background: 'linear-gradient(to right, transparent 0%, #1e1b1a 100%)' }} />

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 4 }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', letterSpacing: '0.3em', color: 'var(--greige)', textTransform: 'uppercase', opacity: 0.45 }}>Scroll</span>
        <div className="scroll-line" />
      </div>

      {/* Text content */}
      <div className="hero-text-col-mobile" style={{ position: 'relative', zIndex: 4, width: '44%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '128px 0 40px 6%' }}>

        {/* Eyebrow */}
        <div ref={eyebrowRef} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '0.5px', background: '#5f9ea0', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', color: '#5f9ea0', textTransform: 'uppercase' }}>Content OS</span>
        </div>

        {/* Badge */}
        <span ref={badgeRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(239,235,226,0.7)', border: '0.5px solid rgba(239,235,226,0.3)', padding: '5px 14px', display: 'inline-block', alignSelf: 'flex-start', marginBottom: '28px' }}>
          For Real Estate Agents
        </span>

        {/* Headline */}
        <h1 style={{ margin: 0, lineHeight: 0.92 }}>
          <div style={{ overflow: 'hidden' }}>
            <span ref={line1Ref} style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px,5vw,68px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 0.92, letterSpacing: '-0.02em', paddingBottom: '0.06em' }}>
              38 seconds.
            </span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span ref={line2Ref} style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px,5vw,68px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--cream)', lineHeight: 0.92, letterSpacing: '-0.02em', paddingBottom: '0.06em' }}>
              That&apos;s the whole workflow.
            </span>
          </div>
        </h1>

        {/* Rule */}
        <div ref={ruleRef} style={{ width: '48px', height: '0.5px', background: 'rgba(239,235,226,0.15)', margin: '32px 0 24px 0' }} />

        {/* Subheading */}
        <p ref={subRef} style={{ fontFamily: 'var(--font-cormorant)', fontSize: '24px', fontStyle: 'italic', color: 'rgba(239,235,226,0.7)', lineHeight: 1.5, margin: '0 0 20px 0', maxWidth: '420px' }}>
          8 to grab the idea. 30 to record it. Post. Repeat tomorrow.
        </p>

        {/* Body */}
        <p ref={bodyRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(224,220,214,0.85)', maxWidth: '420px', margin: '0 0 40px 0' }}>
          No production crew. No shared templates. No overthinking. Content OS gives real estate agents a daily posting habit built around one thing the algorithm rewards right now — authentic, frequent video. Grab a topic and go.
        </p>

        {/* CTA */}
        <div ref={ctaRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
          <button
            onClick={() => window.open('https://agentcontentengine.netlify.app', '_blank', 'noopener,noreferrer')}
            style={{ background: 'var(--teal)', color: 'var(--cream)', fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '18px 0', width: '280px', border: 'none', cursor: 'pointer', transition: 'background 0.2s', flexShrink: 0 }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal2)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--teal)' }}
          >
            Build Your Content Reflex →
          </button>
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'rgba(224,220,214,0.4)' }}>$49 / month · Cancel anytime</span>
        </div>

      </div>
    </section>
  )
}

// ─── Panel 1b — Stats Strip ───────────────────────────────────────────────────
function P1bStats() {
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
    <section ref={sectionRef} data-panel="1" style={{ background: '#114B4D', height: 'auto', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, margin: 0 }}>
      {STATS.map((stat, i) => (
        <div
          key={i}
          ref={el => { statsRef.current[i] = el }}
          style={{ textAlign: 'center', padding: '20px 0', borderRight: i < STATS.length - 1 ? '0.5px solid rgba(239,235,226,0.1)' : 'none' }}
        >
          <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(24px,2.8vw,36px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1 }}>
            {stat.num}<span style={{ color: 'rgba(239,235,226,0.55)', fontStyle: 'italic' }}>{stat.suffix}</span>
          </span>
          <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(239,235,226,0.5)', marginTop: '8px' }}>{stat.label}</span>
        </div>
      ))}
    </section>
  )
}

// ─── Panel 2 — How It Works ───────────────────────────────────────────────────
function P2HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headRef    = useRef<HTMLHeadingElement>(null)
  const bodyRef    = useRef<HTMLParagraphElement>(null)
  const stepsRef   = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.fromTo(
      [eyebrowRef.current, headRef.current, bodyRef.current],
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )

    const steps = stepsRef.current.filter(Boolean) as HTMLDivElement[]
    gsap.fromTo(steps,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="2" style={{ background: '#2a2827', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 0 }}>
      <div className="section-pad-inner" style={{ width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>
        <div className="two-col-flex" style={{ display: 'flex', gap: '64px', alignItems: 'flex-start', maxWidth: '1200px' }}>

          {/* Left col */}
          <div style={{ flex: '0 0 38%' }}>
            <p ref={eyebrowRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5f9ea0', margin: '0 0 24px 0' }}>
              How It Works
            </p>
            <h2 ref={headRef} style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 32px 0', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              38 seconds.<br />
              <em>That&apos;s the whole workflow.</em>
            </h2>
            <p ref={bodyRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: 'rgba(224,220,214,0.82)', lineHeight: 1.85, margin: 0, maxWidth: '300px' }}>
              8 to grab the idea. 30 to record it. No editing burden. No overthinking. No Canva rabbit hole. Just grab a topic and go.
            </p>
          </div>

          {/* Right col — steps */}
          <div style={{ flex: 1 }}>
            {STEPS.map((step, i) => (
              <div
                key={i}
                ref={el => { stepsRef.current[i] = el }}
                style={{
                  borderTop:    '0.5px solid rgba(239,235,226,0.1)',
                  borderBottom: i === STEPS.length - 1 ? '0.5px solid rgba(239,235,226,0.1)' : 'none',
                  display:      'flex',
                  gap:          '32px',
                  padding:      '24px 0 32px 0',
                }}
              >
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#5f9ea0', flexShrink: 0, minWidth: '40px', paddingTop: '4px' }}>{step.num}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(22px,2vw,28px)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 8px 0', lineHeight: 1.15 }}>{step.title}</h3>
                  <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: '#a8a49c', lineHeight: 1.75, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Panel 3 — Inside The OS ──────────────────────────────────────────────────
function P3InsideTheOS() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const itemsRef   = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.fromTo(headerRef.current,
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
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="3" style={{ background: '#363231', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 0, position: 'relative' }}>
      <div className="seam-tab" style={{
        position:   'absolute',
        top:        '-72px',
        left:       '64px',
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
          Inside
        </div>
        <div style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'rgba(239,235,226,0.65)',
          marginTop:     '5px',
        }}>
          the os
        </div>
      </div>
      <div className="section-pad-inner" style={{ width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>

        {/* Header block */}
        <div ref={headerRef} style={{ maxWidth: '720px', paddingBottom: '32px', borderBottom: '0.5px solid rgba(239,235,226,0.1)', marginBottom: '32px' }}>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5f9ea0', margin: '0 0 16px 0' }}>
            Inside The OS
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4.5vw,56px)', fontWeight: 400, color: 'var(--cream)', margin: '0 0 24px 0', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            Everything you need to show up daily.{' '}
            <span style={{ fontStyle: 'italic' }}>Nothing you don&apos;t.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: '#d4d0c8', lineHeight: 1.85, margin: 0, maxWidth: '600px' }}>
            No production crew. No editor. No content calendar you&apos;ll abandon. Just walk in, grab a topic, record 30 seconds, and post. Yours — not a template 10,000 other agents are running this week.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid-2x2-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {MODULES.map((mod, i) => (
            <div
              key={i}
              ref={el => { itemsRef.current[i] = el }}
              style={{
                position:       'relative',
                overflow:       'hidden',
                padding:        '32px',
                background:     'rgba(239,235,226,0.03)',
                border:         '0.5px solid rgba(239,235,226,0.07)',
                display:        'flex',
                flexDirection:  'column',
              }}
            >
              <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5f9ea0', marginBottom: '12px' }}>
                {mod.num} — {mod.label}
              </span>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(20px,2vw,26px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.2, margin: '0 0 12px 0' }}>
                {mod.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: '#a8a49c', lineHeight: 1.75, margin: 0 }}>
                {mod.body}
              </p>
              {/* Watermark */}
              <span style={{
                position:      'absolute',
                top:           '12px',
                right:         '16px',
                fontFamily:    'var(--font-cormorant)',
                fontSize:      '1.5rem',
                fontWeight:    300,
                color:         'rgba(255,255,255,0.08)',
                lineHeight:    1,
                pointerEvents: 'none',
                userSelect:    'none',
              }}>{mod.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Panel 4 — Who This Is For ────────────────────────────────────────────────
function P4WhoThisIsFor() {
  const sectionRef  = useRef<HTMLElement>(null)
  const headerRef   = useRef<HTMLDivElement>(null)
  const forItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const notItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const quoteRef    = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
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

    gsap.fromTo(quoteRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.4,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 55%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="4" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
      <div className="seam-tab" style={{
        position:   'absolute',
        top:        '-72px',
        right:      '64px',
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
          Who
        </div>
        <div style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'rgba(239,235,226,0.65)',
          marginTop:     '5px',
        }}>
          this is for
        </div>
      </div>

      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/clausevault-bg-71.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0, filter: 'brightness(0.25) saturate(0.6)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(17,75,77,0.85)' }} />

      <div className="section-pad-inner" style={{ position: 'relative', zIndex: 2, width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>

        {/* Header */}
        <div ref={headerRef} style={{ maxWidth: '720px', marginBottom: '64px' }}>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#a8c5c5', margin: '0 0 20px 0' }}>
            Who This Is For
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(40px,5vw,64px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.05, margin: 0, letterSpacing: '-0.01em' }}>
            Be honest with yourself.
          </h2>
        </div>

        {/* 2-col grid */}
        <div className="fit-grid-responsive" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>

          {/* For you */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '32px', borderRight: '1px solid rgba(239,235,226,0.1)' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.22em', color: 'rgba(239,235,226,0.9)', paddingBottom: '20px', borderBottom: '1px solid rgba(239,235,226,0.2)' }}>
              This is for you if...
            </span>
            {FOR_ITEMS.map((text, i) => (
              <div
                key={i}
                ref={el => { forItemsRef.current[i] = el }}
                style={{ display: 'flex', gap: '16px', padding: '20px 0', borderBottom: i < FOR_ITEMS.length - 1 ? '0.5px solid rgba(239,235,226,0.2)' : 'none' }}
              >
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', color: '#5f9ea0', flexShrink: 0, paddingTop: '4px' }}>0{i + 1}</span>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontWeight: 400, color: '#e2dfd8', lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

          {/* Not for you */}
          <div style={{ background: 'rgba(255,255,255,0.015)', padding: '32px' }}>
            <span style={{ display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.22em', color: '#a8c5c5', paddingBottom: '20px', borderBottom: '0.5px solid rgba(239,235,226,0.2)' }}>
              Not for you if...
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

        {/* Pullquote */}
        <div ref={quoteRef} style={{ marginTop: '56px', borderLeft: '2px solid #5f9ea0', paddingLeft: '24px', maxWidth: '640px' }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontStyle: 'italic', color: 'rgba(239,235,226,0.7)', lineHeight: 1.6, margin: 0 }}>
            &ldquo;The algorithm doesn&apos;t reward polish. It rewards volume and realness.&rdquo;
          </p>
        </div>

      </div>
    </section>
  )
}

// ─── Panel 5 — What This Replaces ────────────────────────────────────────────
function P5WhatThisReplaces() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef    = useRef<HTMLDivElement>(null)
  const rowsRef    = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.fromTo(headRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )

    const rows = rowsRef.current.filter(Boolean) as HTMLDivElement[]
    gsap.fromTo(rows,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="5" style={{ background: '#2a2827', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 0, position: 'relative' }}>
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
          math
        </div>
      </div>
      <div className="section-pad-inner" style={{ width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>

        <div ref={headRef}>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#5f9ea0', margin: 0 }}>
            What This Replaces
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, color: 'var(--cream)', margin: '20px 0 56px 0', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
            The math is simple.
          </h2>
        </div>

        {/* Comparison table */}
        <div style={{ maxWidth: '720px' }}>
          {COMPARE.map((row, i) => (
            <div
              key={i}
              ref={el => { rowsRef.current[i] = el }}
              style={{
                display:        'flex',
                justifyContent: 'space-between',
                alignItems:     'center',
                padding:        row.featured ? '24px 0 24px 20px' : '24px 0',
                borderBottom:   '0.5px solid rgba(239,235,226,0.1)',
                borderLeft:     row.featured ? '2px solid #5f9ea0' : '2px solid transparent',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize:   '22px',
                fontWeight: row.featured ? 400 : 300,
                color:      row.featured ? 'var(--cream)' : 'rgba(239,235,226,0.45)',
                lineHeight: 1,
              }}>
                {row.label}
              </span>
              <span style={{
                fontFamily:          'var(--font-dm-mono)',
                fontSize:            row.featured ? '14px' : '12px',
                color:               row.featured ? '#5f9ea0' : 'rgba(239,235,226,0.3)',
                letterSpacing:       '0.04em',
                textDecoration:      row.strike ? 'line-through' : 'none',
                textDecorationColor: 'rgba(239,235,226,0.2)',
              }}>
                {row.price}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Panel 6 — Objections ─────────────────────────────────────────────────────
function P6Objections() {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headRef    = useRef<HTMLHeadingElement>(null)
  const itemsRef   = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    gsap.fromTo(
      [eyebrowRef.current, headRef.current],
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )

    const items = itemsRef.current.filter(Boolean) as HTMLDivElement[]
    gsap.fromTo(items,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="6" style={{ background: '#363231', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 0, position: 'relative' }}>
      <div className="seam-tab" style={{
        position:   'absolute',
        top:        '-72px',
        right:      '64px',
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
          Your
        </div>
        <div style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'rgba(239,235,226,0.65)',
          marginTop:     '5px',
        }}>
          objections
        </div>
      </div>
      <div className="section-pad-inner" style={{ width: '100%', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '80px', paddingRight: '6%' }}>
        <div className="two-col-flex" style={{ display: 'flex', gap: '64px', alignItems: 'flex-start', maxWidth: '1200px' }}>

          {/* Left col */}
          <div style={{ flex: '0 0 38%' }}>
            <p ref={eyebrowRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5f9ea0', margin: '0 0 24px 0' }}>
              We Can Read Your Mind
            </p>
            <h2 ref={headRef} style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px,4vw,52px)', fontWeight: 400, color: 'var(--cream)', margin: 0, lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              Yes, we&apos;ve heard it before.
            </h2>
          </div>

          {/* Right col — objections */}
          <div style={{ flex: 1 }}>
            {OBJECTIONS.map((obj, i) => (
              <div
                key={i}
                ref={el => { itemsRef.current[i] = el }}
                style={{
                  borderTop:    '0.5px solid rgba(239,235,226,0.1)',
                  borderBottom: i === OBJECTIONS.length - 1 ? '0.5px solid rgba(239,235,226,0.1)' : 'none',
                  display:      'flex',
                  gap:          '32px',
                  padding:      '24px 0 32px 0',
                }}
              >
                <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.25em', color: '#5f9ea0', flexShrink: 0, minWidth: '40px', paddingTop: '4px' }}>{obj.num}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(20px,2vw,26px)', fontWeight: 400, fontStyle: 'italic', color: 'var(--cream)', margin: '0 0 10px 0', lineHeight: 1.2 }}>{obj.q}</h3>
                  <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: '#a8a49c', lineHeight: 1.75, margin: 0 }}>{obj.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Panel 7 — Pricing CTA ────────────────────────────────────────────────────
function P7PricingCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const ctaRef     = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
      }
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} data-panel="7" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/clausevault-bg-53.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.35) saturate(0.7)', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(17,75,77,0.6) 0%, rgba(17,75,77,0.85) 100%)' }} />

      <div ref={ctaRef} style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '96px', paddingBottom: '96px', paddingLeft: '6%', paddingRight: '6%', maxWidth: '700px' }}>

        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#a8c5c5', margin: '0 0 20px 0' }}>
          Get Started Today
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(64px,8vw,100px)', fontWeight: 300, color: 'var(--cream)', margin: '0 0 12px 0', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
          $49 / month
        </h2>

        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', color: 'rgba(224,220,214,0.5)', margin: '0 0 24px 0', letterSpacing: '0.1em' }}>
          Cancel anytime. No contracts.
        </p>

        <button
          onClick={() => window.open('https://agentcontentengine.netlify.app', '_blank', 'noopener,noreferrer')}
          style={{ background: '#ffffff', color: '#1a1f1e', fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '20px 0', width: '300px', border: 'none', cursor: 'pointer', transition: 'background 0.2s', fontWeight: 500 }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.9)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#ffffff' }}
        >
          Start Posting Like This →
        </button>

        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', color: 'rgba(224,220,214,0.4)', margin: '14px 0 0 0' }}>
          Month-to-month · Cancel anytime · No contracts
        </p>

      </div>
    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ContentOSPage() {
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
        <P1Hero />
        <P1bStats />
        <div className="border-t border-white/[0.06] mx-16" />
        <P2HowItWorks />
        <div className="border-t border-white/[0.06] mx-16" />
        <P3InsideTheOS />
        <P4WhoThisIsFor />
        <div className="border-t border-white/[0.06] mx-16" />
        <P5WhatThisReplaces />
        <div className="border-t border-white/[0.06] mx-16" />
        <P6Objections />
        <P7PricingCTA />
      </main>
      <Footer />
    </>
  )
}
