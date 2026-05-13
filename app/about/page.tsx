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

// 3 panels: Hero · HorizontalSection · CTA
const BG = ['#363231', '#2a2827', '#114B4D']

const CARD_BG = ['#2a2827', '#114B4D', '#363231', '#2a2827', '#363231']

const SOCIAL_LINKS = [
  { label: 'Email',     href: 'mailto:hello@aylenmontenegro.com' },
  { label: 'Instagram', href: 'https://instagram.com/aylenbuilds' },
  { label: 'YouTube',   href: 'https://youtube.com/@aylenmontenegropa' },
  { label: 'Threads',   href: 'https://threads.net/@aylenbuilds' },
]

// ─── Sticky section nav ──────────────────────────────────────────────────────
const TABS = ['Story', 'Closings', 'Who', 'Process', 'Rules']

function StickyNav({ active }: { active: number }) {
  return (
    <div className="mobile-hide" style={{
      position:       'sticky',
      top:            '68px',
      zIndex:         400,
      background:     'rgba(54,50,49,0.95)',
      borderBottom:   '0.5px solid rgba(239,235,226,0.08)',
      backdropFilter: 'blur(12px)',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      padding:        '20px 52px',
      width:          '100%',
    }}>
      {TABS.map((label, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize:   '28px',
              fontWeight: 300,
              color:      active === i ? 'rgba(239,235,226,0.4)' : 'rgba(239,235,226,0.15)',
              lineHeight: 1,
              transition: 'color 0.3s',
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{
              fontFamily:    'var(--font-dm-mono)',
              fontSize:      '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color:         active === i ? 'var(--cream)' : 'rgba(239,235,226,0.4)',
              transition:    'color 0.3s',
            }}>
              {label}
            </span>
          </div>
          {i < TABS.length - 1 && (
            <span style={{
              fontFamily: 'var(--font-dm-mono)',
              color:      'rgba(239,235,226,0.15)',
              margin:     '0 24px',
            }}>
              \
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Hero panel ──────────────────────────────────────────────────────────────
function HeroPanel() {
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const name1Ref   = useRef<HTMLSpanElement>(null)
  const name2Ref   = useRef<HTMLSpanElement>(null)
  const ruleRef    = useRef<HTMLDivElement>(null)
  const bodyRef    = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const names = [name1Ref.current, name2Ref.current]
    const fades = [eyebrowRef.current, ruleRef.current, bodyRef.current]
    if (names.some(e => !e) || fades.some(e => !e)) return
    gsap.set(names, { y: '110%' })
    gsap.set(fades, { opacity: 0 })
    gsap.to(names,              { y: '0%', duration: 0.9, ease: 'cubic-bezier(0.16,1,0.3,1)', stagger: 0.06, delay: 0.2 })
    gsap.to(eyebrowRef.current, { opacity: 1, duration: 0.7, delay: 0.5 })
    gsap.to(ruleRef.current,    { opacity: 1, duration: 0.7, delay: 0.8 })
    gsap.to(bodyRef.current,    { opacity: 1, duration: 0.7, delay: 0.9 })
  }, [])

  return (
    <section data-panel="0" style={{ background: '#363231', height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', isolation: 'isolate' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/22.png" alt="" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '55%', height: '100%', objectFit: 'cover', objectPosition: 'top center', zIndex: 1 }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '55%', zIndex: 2, background: 'linear-gradient(to right, #363231 0%, transparent 35%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', zIndex: 2, background: 'linear-gradient(to top, #363231 0%, transparent 100%)' }} />

      {/* Photo protection overlay */}
      <div className="img-protect-overlay" />

      <div className="hero-text-col-mobile" style={{ position: 'relative', zIndex: 10, width: '45%', padding: '0 0 0 6%', display: 'flex', flexDirection: 'column' }}>
        <p ref={eyebrowRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.22em', color: 'var(--cognac)', textTransform: 'uppercase', margin: '0 0 2rem 0', opacity: 0 }}>
          Deal Flow Architect · Systems Builder · Real Estate Operator
        </p>
        <h1 style={{ margin: 0, lineHeight: 0.92 }}>
          <div style={{ overflow: 'hidden' }}>
            <span ref={name1Ref} style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 300, color: 'var(--cream)', letterSpacing: '-0.02em', lineHeight: 1, paddingBottom: '0.04em' }}>
              Hi, I&apos;m Aylen
            </span>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <span ref={name2Ref} style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--cream)', letterSpacing: '-0.02em', lineHeight: 1, paddingBottom: '0.04em' }}>
              Montenegro.
            </span>
          </div>
        </h1>
        <div ref={ruleRef} style={{ width: '48px', height: '0.5px', background: 'rgba(239,235,226,0.15)', margin: '32px 0', opacity: 0 }} />
        <p ref={bodyRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '14px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(239,235,226,0.65)', margin: 0, maxWidth: '420px', opacity: 0 }}>
          I don&apos;t chase chaos. I contain it — calmly, cleanly, and on time.
        </p>
      </div>

      <div style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', zIndex: 3 }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', letterSpacing: '0.3em', color: 'var(--greige)', textTransform: 'uppercase', opacity: 0.45 }}>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

// ─── Stats strip ─────────────────────────────────────────────────────────────
const ABOUT_STATS = [
  { num: '20+', label: 'Experience'    },
  { num: '3K+', label: 'Closed Deals'  },
  { num: '4+',  label: 'SaaS Products' },
]

function StatsStrip() {
  return (
    <div style={{
      background:  '#2a2827',
      padding:     '28px 0',
      borderTop:   '0.5px solid rgba(239,235,226,0.1)',
      display:     'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      width:       '100%',
      isolation:   'isolate',
    }}>
      {ABOUT_STATS.map((stat, i) => (
        <div key={i} style={{
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'center',
          alignItems:     'center',
          textAlign:      'center',
          padding:        '40px 0',
          borderRight:    i < ABOUT_STATS.length - 1 ? '0.5px solid rgba(239,235,226,0.1)' : 'none',
        }}>
          <div style={{
            fontFamily:    'var(--font-cormorant)',
            fontSize:      'clamp(32px, 3.5vw, 44px)',
            fontWeight:    300,
            color:         'var(--cream)',
            lineHeight:    1,
            letterSpacing: '-0.02em',
          }}>
            {stat.num}
          </div>
          <div style={{
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      '9px',
            letterSpacing: '0.2em',
            color:         'rgba(239,235,226,0.35)',
            marginTop:     '10px',
            textTransform: 'uppercase',
          }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Horizontal content section ──────────────────────────────────────────────
const N = 5

const CARD_IMAGES: (string | null)[] = [
  null,
  '/images/clausevault-bg-11.jpg',
  '/images/clausevault-bg-39.jpg',
  '/images/clausevault-bg-53.jpg',
  '/images/clausevault-bg-18.jpg',
]

const CARD_OVERLAYS: (string | null)[] = [
  null,
  'linear-gradient(to right, rgba(17,75,77,0.97) 0%, rgba(17,75,77,0.85) 45%, rgba(17,75,77,0.4) 100%)',
  'linear-gradient(to right, rgba(54,50,49,0.97) 0%, rgba(54,50,49,0.85) 45%, rgba(211,204,214,0.35) 100%)',
  'linear-gradient(to right, rgba(42,40,39,0.97) 0%, rgba(42,40,39,0.85) 45%, rgba(139,94,60,0.4) 100%)',
  'linear-gradient(to right, rgba(54,50,49,0.97) 0%, rgba(54,50,49,0.85) 45%, rgba(188,175,175,0.3) 100%)',
]

const CARD_CONTENT = [
  // Story
  {
    num: '01', label: 'Story',
    headline1: "This isn't a résumé.",
    headline2: "It's pattern recognition.",
    body: (
      <div>
        {[
          "I started where most people don't talk about starting: answering phones, managing files, cleaning up messes, and becoming the person agents relied on when things were already on fire.",
          "Back then, contracts were faxed. Files lived in folders. 'Transaction management' meant a highlighter and a stack of sticky notes.",
          "Fast-forward through multiple market cycles, two recessions, and thousands of transactions later, and one thing hasn't changed: Deals don't close on technology. They close on precision, discipline, and judgment. Tools evolve. Principles don't.",
        ].map((t, i) => <p key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.90)', margin: i === 0 ? '24px 0 0 0' : '16px 0 0 0' }}>{t}</p>)}
        <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontWeight: 600, color: '#EFEBE2', margin: '32px 0 0 0' }}>The 20+ year bird&apos;s-eye view</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0 0' }}>
          {["· Lending — how financing pressure really shows up","· Operations — where deals actually break","· Title — what compliance catches before attorneys do","· Sales — what agents overlook until it's too late"].map((t, i) => (
            <li key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', lineHeight: 2, color: 'rgba(255,255,255,0.90)' }}>{t}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.90)', margin: '20px 0 0 0' }}>
          That vantage point gives me something most people don&apos;t have: a 360° understanding of how deals move — or stall — in South Florida. It&apos;s also why I don&apos;t panic when things get loud.<br /><br />I&apos;ve seen this movie before.
        </p>
      </div>
    ),
  },
  // Closings
  {
    num: '02', label: 'Closings',
    headline1: "Today, I focus on building systems",
    headline2: "that make closings boring — the good kind.",
    body: (
      <div>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.90)', margin: '24px 0 0 0' }}>That includes:</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0 0' }}>
          {["· backend transaction coordination for a select group of producing agents","· operational frameworks that prevent fire drills","· software and tools that turn hard-earned experience into leverage"].map((t, i) => (
            <li key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', lineHeight: 2, color: 'rgba(255,255,255,0.90)' }}>{t}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.90)', margin: '20px 0 0 0' }}>
          Everything I build comes from real client work. If it hasn&apos;t survived a live transaction,<br />it doesn&apos;t ship.
        </p>
      </div>
    ),
  },
  // Who
  {
    num: '03', label: 'Who',
    headline1: "I work with professionals who treat",
    headline2: "real estate like a business, not a side hustle.",
    body: (
      <div>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cognac)', margin: '28px 0 0 0' }}>People who:</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0 0' }}>
          {["· value precision and systems","· understand that compliance is non-negotiable","· care about reputation more than shortcuts","· want fewer fires, not more apps"].map((t, i) => (
            <li key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', lineHeight: 2, color: 'rgba(255,255,255,0.90)' }}>{t}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.90)', margin: '20px 0 0 0' }}>
          If you&apos;re looking for the cheapest option, I&apos;m not it. If you&apos;re looking for a partner who sees the whole board and protects your downside, you&apos;re in the right place.
        </p>
      </div>
    ),
  },
  // Process
  {
    num: '04', label: 'Process',
    headline1: "Every deal runs on process,",
    headline2: "not adrenaline.",
    body: (
      <div>
        {[
          "I follow a protocol for every step and every contingency — reviewing documents, tracking deadlines, coordinating communication, and flagging risk before it becomes expensive.",
          "If there's a problem, you'll hear it from me first. If there's a shortcut that compromises your position, I'll steer you away from it.",
          "Speed matters. But safeguards matter more.",
        ].map((t, i) => <p key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.90)', margin: i === 0 ? '24px 0 0 0' : '16px 0 0 0' }}>{t}</p>)}
      </div>
    ),
  },
  // Rules
  {
    num: '05', label: 'Rules',
    headline1: "This work only functions",
    headline2: "when expectations are clear. So here are mine.",
    body: (
      <div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0 0' }}>
          {["We don't guess. We verify.","We don't chase files. We run them.","We don't cut corners to move faster.","We don't manage chaos — We prevent it.","Communication is direct.","Deadlines are non-negotiable.","Compliance comes before convenience.","If something puts your position at risk, I'll flag it — even if it's uncomfortable.","If a shortcut compromises the deal, we won't recommend it — even if it's faster."].map((t, i) => (
            <li key={i} style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.90)', lineHeight: 1.6 }}>{t}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', textAlign: 'center', maxWidth: '800px', margin: '32px auto 0' }}>
          We work best with professionals who value precision, respect process, and understand that clean systems beat heroics. If you&apos;re looking for flexibility without accountability,<br />this won&apos;t be a fit.<br /><br />If you&apos;re looking for someone who protects the downside,<br />and keeps deals moving quietly — it will be.
        </p>
      </div>
    ),
  },
]

function HorizontalSection({ onCardChange }: { onCardChange: (i: number) => void }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)
  const activeRef  = useRef(0)

  useGSAP(() => {
    if (!wrapperRef.current || !trackRef.current) return

    const tl = gsap.timeline().to(trackRef.current, {
      x:                  () => -(N - 1) * window.innerWidth,
      ease:               'none',
      invalidateOnRefresh: true,
    })

    ScrollTrigger.create({
      animation:          tl,
      trigger:            wrapperRef.current,
      pin:                true,
      pinType:            'transform',
      start:              'top 116px',
      end:                () => `+=${(N - 1) * window.innerWidth}`,
      scrub:              1,
      invalidateOnRefresh: true,
      snap: {
        snapTo:   1 / (N - 1),
        duration: { min: 0.7, max: 0.9 },
        ease:     'power3.inOut',
        inertia:  false,
      },
      onUpdate: (self) => {
        const card = Math.round(self.progress * (N - 1))
        if (card !== activeRef.current) {
          activeRef.current = card
          setActiveCard(card)
          onCardChange(card)
          gsap.to('html', { backgroundColor: CARD_BG[card], duration: 0.4, ease: 'power2.out' })
        }
      },
    })
  }, { scope: wrapperRef })

  return (
    <div ref={wrapperRef} data-panel="1" style={{ height: '85vh', overflow: 'hidden', position: 'relative', isolation: 'isolate' }}>
      {/* Track */}
      <div ref={trackRef} style={{ display: 'flex', width: `${N * 100}vw`, height: '100%' }}>
        {CARD_CONTENT.map((card, i) => (
          <div key={i} style={{
            width:          '100vw',
            height:         '85vh',
            flexShrink:     0,
            position:       'relative',
            overflow:       'hidden',
            background:     CARD_BG[i],
            display:        'flex',
            flexDirection:  'column',
            justifyContent: 'center',
          }}>
            {/* Background image + overlay */}
            {CARD_IMAGES[i] && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={CARD_IMAGES[i]!} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
                <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: CARD_OVERLAYS[i]! }} />
              </>
            )}

            {/* Dark legibility overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,18,17,0.50)', zIndex: 2, pointerEvents: 'none' }} />

            {/* Counter top-right */}
            <div style={{
              position:   'absolute',
              top:        '32px',
              right:      '52px',
              fontFamily: 'var(--font-dm-mono)',
              fontSize:   '10px',
              color:      'rgba(239,235,226,0.25)',
              zIndex:     10,
            }}>
              {card.num} / {String(N).padStart(2, '0')}
            </div>

            {/* Ghost number */}
            <div style={{
              position:      'absolute',
              bottom:        '24px',
              left:          '24px',
              fontFamily:    'var(--font-cormorant)',
              fontSize:      '6rem',
              fontWeight:    300,
              color:         'rgba(255,255,255,0.06)',
              lineHeight:    1,
              userSelect:    'none',
              pointerEvents: 'none',
              zIndex:        3,
            }}>
              {card.num}
            </div>

            {/* Section label — absolute top-left */}
            <div style={{
              position:   'absolute',
              left:       '6%',
              top:        '48px',
              zIndex:     10,
              display:    'flex',
              alignItems: 'center',
            }}>
              <span style={{
                display:     'inline-block',
                width:       '24px',
                height:      '0.5px',
                background:  'rgba(239,235,226,0.4)',
                marginRight: '12px',
                flexShrink:  0,
              }} />
              <span style={{
                fontFamily:    'var(--font-dm-mono)',
                fontSize:      '11px',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color:         'rgba(239,235,226,0.55)',
              }}>
                {card.label}
              </span>
            </div>

            {/* Centered content */}
            <div style={{
              position:       'relative',
              zIndex:         4,
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'center',
              justifyContent: 'center',
              width:          '100%',
              height:         '100%',
              padding:        '0 20%',
              textAlign:      'center',
              overflowY:      i === 4 ? 'auto' : 'visible',
            }}>
              <div style={{ maxWidth: '800px', width: '100%' }}>
                <h2 style={{ margin: '0 0 16px 0' }}>
                  <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 2.8vw, 38px)', fontStyle: 'italic', fontWeight: 400, color: '#EFEBE2', lineHeight: 1.2, textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}>
                    {card.headline1}
                  </span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(26px, 2.8vw, 38px)', fontStyle: 'italic', fontWeight: 400, color: '#EFEBE2', lineHeight: 1.2, textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}>
                    {card.headline2}
                  </span>
                </h2>
                {card.body}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot nav */}
      <div style={{ position: 'absolute', bottom: '48px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 10 }}>
        {Array.from({ length: N }, (_, i) => (
          <div key={i} style={{
            width:        '6px',
            height:       '6px',
            borderRadius: '50%',
            background:   'var(--cream)',
            opacity:      activeCard === i ? 1 : 0.3,
            transform:    activeCard === i ? 'scale(1.8)' : 'scale(1)',
            transition:   'all 0.3s ease',
          }} />
        ))}
      </div>
    </div>
  )
}

// ─── CTA close ───────────────────────────────────────────────────────────────
function CTAClose() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      data-panel="2"
      style={{ height: '85vh', background: '#114B4D', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 6%', position: 'relative', overflow: 'hidden', isolation: 'isolate' }}
    >
      <div ref={contentRef}>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--cognac)', margin: '0 0 24px 0' }}>
          If this resonates
        </p>
        <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '24px', fontStyle: 'italic', color: 'rgba(239,235,226,0.6)', margin: 0 }}>
          We don&apos;t need to convince each other.
        </p>
        <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 300, color: 'var(--cream)', maxWidth: '700px', textAlign: 'center', lineHeight: 1.5, margin: '32px auto 0' }}>
          If you read this and thought, &ldquo;Finally — someone who actually gets it,&rdquo; then it&apos;s worth a conversation. If not, that&apos;s fine too. Fit matters. Let&apos;s see if it is.
        </p>
        <a href="mailto:hello@aylenmontenegro.com" style={{ display: 'inline-block', marginTop: '48px', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', background: 'var(--cream)', color: 'var(--teal)', padding: '16px 44px', textDecoration: 'none' }}>
          Contact Aylen →
        </a>
      </div>
    </section>
  )
}


// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const [activePanel, setActivePanel]     = useState(0)
  const activePanelRef                    = useRef(0)
  const panelEls                          = useRef<(HTMLElement | null)[]>([])
  const [activeSection, setActiveSection] = useState(0)

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
        const next = Math.min(activePanelRef.current + 1, 2)
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
      <PanelIndex activePanel={activePanel} panelEls={panelEls.current} total={3} />

      <main>
        <HeroPanel />
        <StatsStrip />
        <StickyNav active={activeSection} />
        <HorizontalSection onCardChange={setActiveSection} />
        <CTAClose />
      </main>
      <Footer />
    </>
  )
}
