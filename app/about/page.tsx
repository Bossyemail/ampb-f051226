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
import Footer      from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// 3 panels: Hero · CardCarousel · CTA
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
  const ruleRef    = useRef<HTMLDivElement>(null)
  const bodyRef    = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const fades = [eyebrowRef.current, ruleRef.current, bodyRef.current]
    if (!name1Ref.current || fades.some(e => !e)) return
    gsap.set(name1Ref.current, { y: '110%' })
    gsap.set(fades, { opacity: 0 })
    gsap.to(name1Ref.current,   { y: '0%', duration: 0.9, ease: 'cubic-bezier(0.16,1,0.3,1)', delay: 0.2 })
    gsap.to(eyebrowRef.current, { opacity: 1, duration: 0.7, delay: 0.5 })
    gsap.to(ruleRef.current,    { opacity: 1, duration: 0.7, delay: 0.8 })
    gsap.to(bodyRef.current,    { opacity: 1, duration: 0.7, delay: 0.9 })
  }, [])

  return (
    <section data-panel="0" className="about-hero-section" style={{ background: '#363231', height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', isolation: 'isolate' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/22.png" alt="" className="hero-portrait-right" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '55%', height: '100%', objectFit: 'cover', objectPosition: 'top center', zIndex: 1 }} />
      <div className="hero-portrait-fade" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '55%', zIndex: 2, background: 'linear-gradient(to right, #363231 0%, transparent 35%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', zIndex: 2, background: 'linear-gradient(to top, #363231 0%, transparent 100%)' }} />
      {/* Watermark patch — bottom-right sparkle icon */}
      <WatermarkPatch corner="bottom-right" width={110} height={110} color="rgba(54,50,49,0.98)" style={{ zIndex: 3 }} />

      {/* Photo protection overlay */}
      <div className="img-protect-overlay" />

      {/* Mobile-only portrait — full-width image at top of hero, hidden on desktop */}
      <div className="about-hero-mobile-portrait">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/22.png" alt="" />
        <div className="about-hero-mobile-fade" />
      </div>

      <div className="hero-text-col-mobile" style={{ position: 'relative', zIndex: 10, width: '45%', padding: '0 0 0 6%', display: 'flex', flexDirection: 'column' }}>
        <p ref={eyebrowRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.22em', color: 'var(--cognac)', textTransform: 'uppercase', margin: '0 0 2rem 0', opacity: 0 }}>
          Transaction Coordinator · Systems Builder · Real Estate Operator
        </p>
        <h1 style={{ margin: 0, lineHeight: 1 }}>
          <div style={{ overflow: 'hidden' }}>
            <span ref={name1Ref} style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 300, color: 'var(--cream)', letterSpacing: '-0.02em', lineHeight: 1, paddingBottom: '0.04em' }}>
              Hi, I&apos;m Aylen
            </span>
          </div>
        </h1>
        <div ref={ruleRef} className="about-hero-rule" style={{ width: '48px', height: '0.5px', background: 'rgba(239,235,226,0.15)', margin: '32px 0', opacity: 0 }} />
        <p ref={bodyRef} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.75)', margin: 0, maxWidth: '420px', opacity: 0 }}>
          I don&apos;t chase chaos. I contain it — calmly, cleanly, and on time.
        </p>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.75)', margin: '20px 0 0 0', maxWidth: '420px' }}>
          I&apos;m a licensed real estate professional, South Florida transaction coordinator, and real estate systems builder.
        </p>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.75)', margin: '12px 0 0 0', maxWidth: '420px' }}>
          Since 2004, I&apos;ve worked across lending, title, sales, brokerage operations, compliance, and transaction coordination — supporting more than 3,000 real estate closings.
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
  { num: '20+',    label: 'Years in South Florida' },
  { num: '3,000+', label: 'Closings Supported'    },
  { num: '4',      label: 'Systems Built'          },
]

function StatsStrip() {
  return (
    <div style={{
      background:          '#2a2827',
      borderTop:           '0.5px solid rgba(239,235,226,0.1)',
      borderBottom:        '0.5px solid rgba(239,235,226,0.06)',
      display:             'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      width:               '100%',
      isolation:           'isolate',
    }}>
      {ABOUT_STATS.map((stat, i) => (
        <div key={i} style={{
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'center',
          alignItems:     'center',
          textAlign:      'center',
          padding:        '20px 0',
          borderRight:    i < ABOUT_STATS.length - 1 ? '0.5px solid rgba(239,235,226,0.08)' : 'none',
        }}>
          <div style={{
            fontFamily:    'var(--font-cormorant)',
            fontSize:      'clamp(24px, 2.8vw, 36px)',
            fontWeight:    300,
            color:         'var(--teal-mid)',
            lineHeight:    1,
            letterSpacing: '-0.02em',
          }}>
            {stat.num}
          </div>
          <div style={{
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      '9px',
            letterSpacing: '0.2em',
            color:         'rgba(239,235,226,0.3)',
            marginTop:     '8px',
            textTransform: 'uppercase',
          }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Experience Timeline ──────────────────────────────────────────────────────
const TIMELINE = [
  {
    num:   '01',
    title: 'Mortgage Lending',
    body:  'I learned how financing conditions, underwriting timelines, and documentation requirements affect a deal long before the closing table.',
  },
  {
    num:   '02',
    title: 'Title & Closing Operations',
    body:  'I worked with title requirements, liens, closing documents, and compliance issues — and saw what surfaces late when a file has not been managed from the start.',
  },
  {
    num:   '03',
    title: 'Real Estate Sales & Brokerage Operations',
    body:  'Working alongside agents and brokerages showed me client expectations, compliance files, communication gaps, and the pressure of managing multiple active deals at once.',
  },
  {
    num:   '04',
    title: 'Transaction Coordination & Systems',
    body:  'Today I provide contract-to-close coordination for South Florida agents, teams, and brokerages, and build the software I wished existed when I was the one running the file.',
  },
]

function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef    = useRef<HTMLDivElement>(null)
  const rightRef   = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(max-width: 768px)', () => {
      gsap.set([leftRef.current, rightRef.current], { opacity: 1, y: 0 })
    })

    mm.add('(min-width: 769px)', () => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
      gsap.fromTo(rightRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} style={{ background: '#4a4644', borderTop: '0.5px solid rgba(239,235,226,0.06)' }}>
      <div className="about-experience-inner" style={{ display: 'flex', gap: '80px', padding: '96px 6%', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Left column — editorial context */}
        <div ref={leftRef} className="about-experience-left" style={{ flex: '0 0 40%', maxWidth: '440px' }}>

          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--teal)', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(239,235,226,0.5)' }}>
              Experience
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: 'clamp(28px, 3vw, 44px)', color: 'var(--cream)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 32px 0' }}>
            Twenty years across the closing table.
          </h2>

          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.88)', margin: '0 0 16px 0' }}>
            I did not learn real estate from one side of the transaction.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.82)', margin: '0 0 48px 0' }}>
            Since 2004, I have worked across mortgage lending, title, real estate sales, brokerage operations, compliance, and transaction coordination. Each role showed me where deals slow down, communication breaks, and small details become expensive problems.
          </p>

          {/* Closing statement */}
          <div style={{ borderTop: '0.5px solid rgba(239,235,226,0.1)', paddingTop: '28px' }}>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(17px, 1.6vw, 22px)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.65, color: 'rgba(239,235,226,0.88)', margin: '0 0 16px 0' }}>
              This is why I do not see a transaction as a checklist of disconnected tasks.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.78)', margin: '0 0 20px 0' }}>
              I see how the contract, financing, title work, association requirements, compliance, communication, and closing conditions affect one another.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.82)', margin: 0 }}>
              The value is not that I have seen thousands of files. It is that I recognize what is happening earlier, know what questions to ask, and understand how one unresolved item can affect the rest of the transaction.
            </p>
          </div>
        </div>

        {/* Right column — numbered timeline */}
        <div ref={rightRef} style={{ flex: 1, paddingTop: '8px' }}>
          {TIMELINE.map((item, i) => (
            <div key={item.num} style={{ display: 'flex', gap: '24px', paddingBottom: i < TIMELINE.length - 1 ? '44px' : 0 }}>

              {/* Thread: dot + vertical line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '16px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--teal-mid)', flexShrink: 0, marginTop: '4px' }} />
                {i < TIMELINE.length - 1 && (
                  <div style={{ flex: 1, width: '0.5px', background: 'rgba(239,235,226,0.1)', marginTop: '10px' }} />
                )}
              </div>

              {/* Entry content */}
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '14px', fontStyle: 'italic', color: 'var(--teal-mid)', marginBottom: '8px', lineHeight: 1 }}>
                  {item.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cream)', margin: '0 0 12px 0', fontWeight: 400 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.75)', margin: 0 }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Horizontal content section ──────────────────────────────────────────────
const N = 5

const CARD_IMAGES: (string | null)[] = [
  '/images/about-01.jpg',
  '/images/clausevault-bg-11.jpg',
  '/images/clausevault-bg-39.jpg',
  '/images/clausevault-bg-53.jpg',
  '/images/clausevault-bg-18.jpg',
]

const CARD_OVERLAYS: (string | null)[] = [
  'linear-gradient(to right, rgba(42,40,39,0.97) 0%, rgba(42,40,39,0.85) 45%, rgba(42,40,39,0.4) 100%)',
  'linear-gradient(to right, rgba(17,75,77,0.97) 0%, rgba(17,75,77,0.85) 45%, rgba(17,75,77,0.4) 100%)',
  'linear-gradient(to right, rgba(54,50,49,0.97) 0%, rgba(54,50,49,0.85) 45%, rgba(211,204,214,0.35) 100%)',
  'linear-gradient(to right, rgba(42,40,39,0.97) 0%, rgba(42,40,39,0.85) 45%, rgba(139,94,60,0.4) 100%)',
  'linear-gradient(to right, rgba(54,50,49,0.97) 0%, rgba(54,50,49,0.85) 45%, rgba(188,175,175,0.3) 100%)',
]

// Mobile body paragraphs — concise 2-para versions for the swipe card format.
// Desktop `body` field is unchanged; MobileCarousel renders `mobileBody` instead.
const MB_P = (texts: string[]) => (
  <div>
    {texts.map((t, i) => (
      <p key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.90)', margin: i === 0 ? '20px 0 0 0' : '14px 0 0 0' }}>{t}</p>
    ))}
  </div>
)

const CARD_CONTENT = [
  // Story
  {
    num: '01', label: 'Story',
    headline1: "The titles matter less",
    headline2: "than what they taught me.",
    mobileBody: MB_P([
      "I started answering phones and cleaning up messes when contracts were still faxed. Two recessions and thousands of transactions later, one thing hasn't changed: deals close on precision and discipline — not technology.",
      "20+ years across lending, operations, title, and sales. I don't panic when things get loud. I've seen this movie before.",
    ]),
    body: (
      <div>
        {[
          "I started where most people don't talk about starting: answering phones, managing files, cleaning up messes, and becoming the person agents relied on when things were already on fire.",
          "Back then, contracts were faxed. Files lived in folders. 'Transaction management' meant a highlighter and a stack of sticky notes.",
          "Fast-forward through multiple market cycles, two recessions, and thousands of transactions later, and one thing hasn't changed: Deals don't close on technology. They close on precision, discipline, and judgment.",
          "Tools evolve. Principles don't.",
        ].map((t, i) => <p key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.90)', margin: i === 0 ? '24px 0 0 0' : '16px 0 0 0' }}>{t}</p>)}
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.90)', margin: '20px 0 0 0' }}>
          I have seen this movie before. That is why I do not panic when things get loud.
        </p>
      </div>
    ),
  },
  // Closings
  {
    num: '02', label: 'Closings',
    headline1: "Today, I focus on building systems",
    headline2: "that make closings boring — the good kind.",
    mobileBody: MB_P([
      "Contract-to-close transaction coordination for select South Florida agents. Operational frameworks that prevent fire drills. Software built from real files.",
      "Everything I build comes from real client work. If it has not survived a live transaction, it does not ship.",
    ]),
    body: (
      <div>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.90)', margin: '24px 0 0 0' }}>That includes:</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0 0' }}>
          {["· contract-to-close transaction coordination for select South Florida agents","· operational frameworks that prevent fire drills","· software built from real files, not hypotheticals"].map((t, i) => (
            <li key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', lineHeight: 2, color: 'rgba(239,235,226,0.90)' }}>{t}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.90)', margin: '20px 0 0 0' }}>
          Everything I build comes from real client work. If it has not survived a live transaction, it does not ship.
        </p>
      </div>
    ),
  },
  // Who
  {
    num: '03', label: 'Who',
    headline1: "I work with professionals",
    headline2: "whose reputation depends on how their business operates.",
    mobileBody: MB_P([
      "Agents, teams, and brokerages managing real volume cannot afford scattered follow-up, preventable surprises, or a TC who only completes assigned tasks. They need someone who sees the whole file and understands what needs attention before it becomes urgent.",
      "This is not the right fit if you are looking for the lowest cost, expect work outside business hours as a standard, or want flexibility without accountability.",
    ]),
    body: (
      <div>
        {[
          "Agents, teams, and brokerages managing real volume cannot afford scattered follow-up, preventable surprises, or a transaction coordinator who only completes assigned tasks.",
          "They need someone who sees the whole file, communicates directly, and understands what needs attention before it becomes urgent.",
        ].map((t, i) => <p key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.90)', margin: i === 0 ? '24px 0 0 0' : '16px 0 0 0' }}>{t}</p>)}
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cognac)', margin: '28px 0 10px 0' }}>
          This may not be the right fit if
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {[
            "· You are looking for the lowest-cost transaction coordinator available.",
            "· You want to submit incomplete files after deadlines have already begun running.",
            "· You expect work outside established business hours as a normal service standard.",
            "· You want flexibility without accountability, undocumented verbal instructions, or shortcuts around brokerage and compliance requirements.",
            "· You need someone to make licensed decisions, negotiate terms, or replace the role of the agent, broker, attorney, lender, or title company.",
          ].map((t, i) => (
            <li key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', fontWeight: 300, lineHeight: 1.9, color: 'rgba(239,235,226,0.65)' }}>{t}</li>
          ))}
        </ul>
      </div>
    ),
  },
  // Process
  {
    num: '04', label: 'Process',
    headline1: "Every deal runs on process,",
    headline2: "not adrenaline.",
    mobileBody: MB_P([
      "I track every deadline, flag every risk before it gets expensive, and tell you first if there's a problem — even when a shortcut would be faster.",
      "Speed matters. Safeguards matter more.",
    ]),
    body: (
      <div>
        {[
          "Every file begins with a fully executed contract and applicable addenda delivered to all parties, with me copied from the start.",
          "I follow a protocol for every step and every contingency — reviewing documents, tracking deadlines, coordinating communication, and flagging risk before it becomes expensive.",
          "If there's a problem, you'll hear it from me first. If there's a shortcut that compromises your position, I'll steer you away from it.",
          "Speed matters. But safeguards matter more.",
        ].map((t, i) => <p key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.90)', margin: i === 0 ? '24px 0 0 0' : '16px 0 0 0' }}>{t}</p>)}
      </div>
    ),
  },
  // Rules
  {
    num: '05', label: 'Rules',
    headline1: "This work only functions",
    headline2: "when expectations are clear. So here are mine.",
    mobileBody: MB_P([
      "We don't guess — we verify. We track every open item and escalate what remains unresolved. We don't manage chaos, we prevent it. Communication is direct. Deadlines are non-negotiable.",
      "If you are looking for flexibility without accountability, this is not a fit. If you want clean systems and someone who keeps deals moving quietly — it is.",
    ]),
    body: (
      <div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0 0' }}>
          {["We don't guess. We verify.","We track every open item and escalate what remains unresolved.","We don't cut corners to move faster.","We don't manage chaos — we prevent it.","Communication is direct.","Deadlines are non-negotiable."].map((t, i) => (
            <li key={i} style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, color: 'rgba(239,235,226,0.75)', lineHeight: 1.8 }}>{t}</li>
          ))}
        </ul>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(239,235,226,0.75)', textAlign: 'center', maxWidth: '800px', margin: '32px auto 0' }}>
          We work best with professionals who value precision, respect process, and understand that clean systems beat heroics. If you are looking for flexibility without accountability, this will not be a fit.
        </p>
      </div>
    ),
  },
]

function __MobileCarousel_DELETED({ onCardChange }: { onCardChange: (i: number) => void }) {
  const [current,   setCurrent]  = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const currentRef   = useRef(0)           // always-fresh ref for event handlers
  const onChangeRef  = useRef(onCardChange) // avoid stale closure on prop

  useEffect(() => { onChangeRef.current = onCardChange }, [onCardChange])

  // Dot-tap navigation (also used internally)
  const goTo = (idx: number) => {
    const next = Math.max(0, Math.min(N - 1, idx))
    currentRef.current = next
    setCurrent(next)
    onChangeRef.current(next)
    gsap.to('html', { backgroundColor: CARD_BG[next], duration: 0.4, ease: 'power2.out' })
  }

  // Non-passive touch listener so we can call preventDefault() on vertical gestures
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let startY = 0
    let startX = 0
    let axis: 'v' | 'h' | null = null  // locked once gesture direction is clear

    const onStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
      startX = e.touches[0].clientX
      axis   = null
    }

    const onMove = (e: TouchEvent) => {
      const dy = e.touches[0].clientY - startY
      const dx = e.touches[0].clientX - startX

      // Lock axis after 8px of movement to distinguish scroll from swipe
      if (axis === null && (Math.abs(dy) > 8 || Math.abs(dx) > 8)) {
        axis = Math.abs(dy) >= Math.abs(dx) ? 'v' : 'h'
      }

      if (axis === 'v') {
        // At first card + swipe down, or last card + swipe up → let page scroll through
        const atEdge = (currentRef.current === 0 && dy > 0) ||
                       (currentRef.current === N - 1 && dy < 0)
        if (!atEdge) e.preventDefault()
      }
    }

    const onEnd = (e: TouchEvent) => {
      if (axis !== 'v') return
      const dy = e.changedTouches[0].clientY - startY
      if      (dy < -60) { const n = Math.min(N - 1, currentRef.current + 1); currentRef.current = n; setCurrent(n); onChangeRef.current(n); gsap.to('html', { backgroundColor: CARD_BG[n], duration: 0.4, ease: 'power2.out' }) }
      else if (dy >  60) { const n = Math.max(0,     currentRef.current - 1); currentRef.current = n; setCurrent(n); onChangeRef.current(n); gsap.to('html', { backgroundColor: CARD_BG[n], duration: 0.4, ease: 'power2.out' }) }
    }

    el.addEventListener('touchstart', onStart, { passive: true  })
    el.addEventListener('touchmove',  onMove,  { passive: false })
    el.addEventListener('touchend',   onEnd,   { passive: true  })
    return () => {
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchmove',  onMove)
      el.removeEventListener('touchend',   onEnd)
    }
  }, [])  // runs once; reads state via currentRef / onChangeRef

  return (
    <div ref={containerRef} data-panel="1" style={{ overflow: 'hidden', position: 'relative', width: '100%' }}>
      {/* Track — no live drag offset; gesture fires a clean snap transition */}
      <div
        style={{
          display:     'flex',
          transform:   `translateX(${-current * 100}vw)`,
          transition:  'transform 0.38s cubic-bezier(0.25,1,0.5,1)',
          willChange:  'transform',
          touchAction: 'none',  // we manage all gestures manually
        }}
      >
        {CARD_CONTENT.map((card, i) => (
          <div key={i} style={{
            width:      '100vw',
            minWidth:   '100vw',
            flexShrink: 0,
            position:   'relative',
            background: CARD_BG[i],
          }}>
            {/* Background image + overlay.
                CARD_OVERLAYS uses directional `to right` gradients for the desktop
                side-by-side layout (text left, photo right). On mobile the text is
                centered, so the light right-end of each gradient lets photos bleed
                through inconsistently (especially card 02's teal overlay over a
                warm sunset photo). Replace with a single uniform dark overlay here;
                CARD_OVERLAYS remains untouched for the desktop CardCarousel. */}
            {CARD_IMAGES[i] && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={CARD_IMAGES[i]!} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
                <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(22,19,18,0.72)' }} />
              </>
            )}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(22,19,18,0.40)', zIndex: 2, pointerEvents: 'none' }} />

            {/* Section label — top-left */}
            <div style={{ position: 'absolute', left: '20px', top: '18px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ display: 'inline-block', width: '18px', height: '0.5px', background: 'rgba(239,235,226,0.4)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(239,235,226,0.55)' }}>
                {card.label}
              </span>
            </div>

            {/* Live counter — top-right (updates per current slide) */}
            <div style={{ position: 'absolute', top: '18px', right: '20px', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(239,235,226,0.45)', zIndex: 10 }}>
              {card.num} / {String(N).padStart(2, '0')}
            </div>

            {/* Ghost number */}
            <div style={{ position: 'absolute', bottom: '20px', left: '16px', fontFamily: 'var(--font-cormorant)', fontSize: '5rem', fontWeight: 300, color: 'rgba(255,255,255,0.05)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', zIndex: 3 }}>
              {card.num}
            </div>

            {/* Card content */}
            <div className="mobile-carousel-inner" style={{ position: 'relative', zIndex: 4, padding: '72px 22px 72px', textAlign: 'center' }}>
              <h2 style={{ margin: '0 0 12px 0' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.25 }}>
                  {card.headline1}
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.25 }}>
                  {card.headline2}
                </span>
              </h2>
              {card.mobileBody}
            </div>
          </div>
        ))}
      </div>

      {/* Nav bar: prev arrow · dots · next arrow.
          Fixed dark background — CARD_BG[current] was used here before, which
          turned the entire bar solid teal on card 02 (CARD_BG[1] = #114B4D),
          making it look like a thick teal block. Neutral dark tone works for
          all 5 card color schemes without creating a distinct visible bar. */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 4px 14px', background: '#181514' }}>

        {/* ← prev */}
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Previous card"
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            minWidth:       '44px',
            height:         '44px',
            background:     'none',
            border:         'none',
            padding:        0,
            cursor:         current === 0 ? 'default' : 'pointer',
            opacity:        current === 0 ? 0.12 : 0.45,
            transition:     'opacity 0.2s',
            fontFamily:     'var(--font-dm-mono)',
            fontSize:       '15px',
            color:          'var(--cream)',
            letterSpacing:  '0.05em',
          }}
        >
          ←
        </button>

        {/* dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {CARD_CONTENT.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1} of ${N}`}
              onClick={() => goTo(i)}
              style={{
                width:        i === current ? '20px' : '5px',
                height:       '5px',
                background:   i === current ? 'rgba(239,235,226,0.75)' : 'rgba(239,235,226,0.2)',
                border:       'none',
                borderRadius: '3px',
                cursor:       'pointer',
                transition:   'width 0.3s ease, background 0.3s ease',
                padding:      0,
                flexShrink:   0,
              }}
            />
          ))}
        </div>

        {/* → next */}
        <button
          onClick={() => goTo(current + 1)}
          disabled={current === N - 1}
          aria-label="Next card"
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            minWidth:       '44px',
            height:         '44px',
            background:     'none',
            border:         'none',
            padding:        0,
            cursor:         current === N - 1 ? 'default' : 'pointer',
            opacity:        current === N - 1 ? 0.12 : 0.45,
            transition:     'opacity 0.2s',
            fontFamily:     'var(--font-dm-mono)',
            fontSize:       '15px',
            color:          'var(--cream)',
            letterSpacing:  '0.05em',
          }}
        >
          →
        </button>

      </div>
    </div>
  )
}

// ─── Card carousel (desktop + mobile) ─────────────────────────────────────────
function CardCarousel({ onCardChange }: { onCardChange: (i: number) => void }) {
  const [current,   setCurrent]  = useState(0)
  const [isMobile,  setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const currentRef   = useRef(0)
  const onChangeRef  = useRef(onCardChange)

  useEffect(() => { onChangeRef.current = onCardChange }, [onCardChange])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const goTo = (idx: number) => {
    const next = Math.max(0, Math.min(N - 1, idx))
    currentRef.current = next
    setCurrent(next)
    onChangeRef.current(next)
    gsap.to('html', { backgroundColor: CARD_BG[next], duration: 0.4, ease: 'power2.out' })
  }

  // Horizontal swipe for mobile
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let startX = 0, startY = 0, axis: 'h' | 'v' | null = null

    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; axis = null }
    const onMove  = (e: TouchEvent) => {
      const dx = e.touches[0].clientX - startX
      const dy = e.touches[0].clientY - startY
      if (axis === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) axis = Math.abs(dx) >= Math.abs(dy) ? 'h' : 'v'
      if (axis === 'h') e.preventDefault()
    }
    const onEnd   = (e: TouchEvent) => {
      if (axis !== 'h') return
      const dx = e.changedTouches[0].clientX - startX
      if      (dx < -60) goTo(currentRef.current + 1)
      else if (dx >  60) goTo(currentRef.current - 1)
    }

    el.addEventListener('touchstart', onStart, { passive: true  })
    el.addEventListener('touchmove',  onMove,  { passive: false })
    el.addEventListener('touchend',   onEnd,   { passive: true  })
    return () => {
      el.removeEventListener('touchstart', onStart)
      el.removeEventListener('touchmove',  onMove)
      el.removeEventListener('touchend',   onEnd)
    }
  }, [])

  return (
    <div data-panel="1" style={{ position: 'relative', overflow: 'hidden', background: '#2a2827' }}>
      {/* Track */}
      <div ref={containerRef} style={{ display: 'flex', transform: `translateX(${-current * 100}vw)`, transition: 'transform 0.4s cubic-bezier(0.25,1,0.5,1)', willChange: 'transform', touchAction: 'pan-y' }}>
        {CARD_CONTENT.map((card, i) => (
          <div key={i} style={{
            width:          '100vw',
            minWidth:       '100vw',
            height:         isMobile ? 'auto' : '85vh',
            minHeight:      isMobile ? '520px' : undefined,
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
                <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: isMobile ? 'rgba(22,19,18,0.72)' : CARD_OVERLAYS[i]! }} />
              </>
            )}

            {/* Dark legibility overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(54,50,49,0.50)', zIndex: 2, pointerEvents: 'none' }} />

            {/* Counter top-right */}
            <div className="about-card-counter" style={{
              position:   'absolute',
              top:        isMobile ? '18px' : '32px',
              right:      isMobile ? '20px' : '72px',
              fontFamily: 'var(--font-dm-mono)',
              fontSize:   '10px',
              color:      'rgba(239,235,226,0.25)',
              zIndex:     10,
            }}>
              {card.num} / {String(N).padStart(2, '0')}
            </div>

            {/* Ghost number */}
            <div className="about-ghost-num" style={{
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
            <div className="about-section-label" style={{
              position:   'absolute',
              left:       isMobile ? '20px' : '6%',
              top:        isMobile ? '18px' : '48px',
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

            {/* Content */}
            <div className="about-card-content" style={{
              position:       'relative',
              zIndex:         4,
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'center',
              justifyContent: 'center',
              width:          '100%',
              height:         isMobile ? 'auto' : '100%',
              padding:        isMobile ? '72px 22px 88px' : '0 20%',
              textAlign:      'center',
              overflowY:      i === 4 && !isMobile ? 'auto' : 'visible',
            }}>
              <div style={{ maxWidth: '800px', width: '100%' }}>
                <h2 style={{ margin: '0 0 16px 0' }}>
                  <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: isMobile ? 'clamp(24px,6vw,34px)' : 'clamp(26px, 2.8vw, 38px)', fontStyle: 'italic', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.2 }}>
                    {card.headline1}
                  </span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: isMobile ? 'clamp(24px,6vw,34px)' : 'clamp(26px, 2.8vw, 38px)', fontStyle: 'italic', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.25 }}>
                    {card.headline2}
                  </span>
                </h2>
                {isMobile ? card.mobileBody : card.body}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ← Left arrow */}
      <button
        onClick={() => goTo(current - 1)}
        disabled={current === 0}
        aria-label="Previous card"
        style={{
          position:        'absolute',
          left:            '20px',
          top:             '50%',
          transform:       'translateY(-50%)',
          zIndex:          20,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          width:           '44px',
          height:          '44px',
          borderRadius:    '50%',
          background:      'rgba(22,19,18,0.55)',
          border:          '0.5px solid rgba(239,235,226,0.15)',
          backdropFilter:  'blur(6px)',
          cursor:          current === 0 ? 'default' : 'pointer',
          opacity:         current === 0 ? 0.2 : 0.75,
          transition:      'opacity 0.2s, background 0.2s',
          fontFamily:      'var(--font-dm-mono)',
          fontSize:        '16px',
          color:           'var(--cream)',
          padding:         0,
        }}
      >
        ←
      </button>

      {/* → Right arrow */}
      <button
        onClick={() => goTo(current + 1)}
        disabled={current === N - 1}
        aria-label="Next card"
        style={{
          position:        'absolute',
          right:           '20px',
          top:             '50%',
          transform:       'translateY(-50%)',
          zIndex:          20,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          width:           '44px',
          height:          '44px',
          borderRadius:    '50%',
          background:      'rgba(22,19,18,0.55)',
          border:          '0.5px solid rgba(239,235,226,0.15)',
          backdropFilter:  'blur(6px)',
          cursor:          current === N - 1 ? 'default' : 'pointer',
          opacity:         current === N - 1 ? 0.2 : 0.75,
          transition:      'opacity 0.2s, background 0.2s',
          fontFamily:      'var(--font-dm-mono)',
          fontSize:        '16px',
          color:           'var(--cream)',
          padding:         0,
        }}
      >
        →
      </button>

      {/* Dots */}
      <div style={{
        position:  'absolute',
        bottom:    '20px',
        left:      '50%',
        transform: 'translateX(-50%)',
        display:   'flex',
        gap:       '8px',
        zIndex:    20,
      }}>
        {CARD_CONTENT.map((_, i) => (
          <button
            key={i}
            aria-label={`Card ${i + 1} of ${N}`}
            onClick={() => goTo(i)}
            style={{
              width:        i === current ? '20px' : '5px',
              height:       '5px',
              background:   i === current ? 'rgba(239,235,226,0.75)' : 'rgba(239,235,226,0.2)',
              border:       'none',
              borderRadius: '3px',
              cursor:       'pointer',
              transition:   'width 0.3s ease, background 0.3s ease',
              padding:      0,
              flexShrink:   0,
            }}
          />
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
      className="about-cta-section"
      style={{ height: '85vh', background: '#114B4D', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 6%', position: 'relative', overflow: 'hidden' }}
    >
      <div ref={contentRef} className="about-cta-content">
        <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.2, letterSpacing: '-0.01em', margin: 0 }}>
          You do not need more help.
        </p>
        <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 300, color: 'rgba(239,235,226,0.55)', lineHeight: 1.2, letterSpacing: '-0.01em', margin: '4px 0 0 0' }}>
          You need the right operating partner.
        </p>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: 'rgba(239,235,226,0.78)', maxWidth: '560px', textAlign: 'center', margin: '36px auto 0' }}>
          If you are managing consistent volume and want a transaction process built around accountability, visibility, and clean execution, request availability.
        </p>
        <a href="mailto:hello@aylenmontenegro.com" className="btn-inverted" style={{ display: 'inline-block', marginTop: '44px', fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '16px 44px' }}>
          Request availability →
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': 'Aylen Montenegro',
          'jobTitle': 'Real Estate Contract Manager',
          'url': 'https://aylenmontenegro.com',
          'description': 'Real Estate Contract Manager and licensed Florida real estate professional serving South Florida agents. 20+ years experience, 3,000+ closings supported.',
          'knowsAbout': [
            'Real estate transaction coordination',
            'Real estate contracts',
            'South Florida real estate',
            'SaaS development',
          ],
          'areaServed': [
            { '@type': 'AdministrativeArea', 'name': 'Miami-Dade County' },
            { '@type': 'AdministrativeArea', 'name': 'Broward County' },
            { '@type': 'AdministrativeArea', 'name': 'Palm Beach County' },
          ],
          'sameAs': [
            'https://instagram.com/aylenbuilds',
            'https://youtube.com/@aylenmontenegropa',
            'https://threads.net/@aylenbuilds',
          ],
        }) }}
      />
      <Cursor />
      <ProgressBar />
      <CinemaNav />
      <SocialBar />

      <main>
        <HeroPanel />
        <StatsStrip />
        <ExperienceTimeline />
        <StickyNav active={activeSection} />
        <CardCarousel onCardChange={setActiveSection} />
        <CTAClose />
      </main>
      <Footer />
    </>
  )
}
