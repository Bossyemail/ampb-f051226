'use client'
import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const VIDEOS = [
  '/videos/hero-bg-06.mp4',
  '/videos/hero-bg-07.mp4',
  '/videos/hero-bg-08.mp4',
  '/videos/hero-bg-09.mp4',
  '/videos/hero-bg-10.mp4',
]

const CYCLE_MS  = 7000
const FADE_SECS = 0.8

export default function P1Intro() {
  const sectionRef    = useRef<HTMLElement>(null)
  const aylenRef      = useRef<HTMLDivElement>(null)
  const montenegroRef = useRef<HTMLDivElement>(null)
  const eyebrowRef    = useRef<HTMLDivElement>(null)
  const subRef        = useRef<HTMLParagraphElement>(null)

  // Two video elements for seamless crossfade
  const videoRefA  = useRef<HTMLVideoElement>(null)
  const videoRefB  = useRef<HTMLVideoElement>(null)
  const activeSlot = useRef<0 | 1>(0)  // which slot is currently visible
  const vidIdx     = useRef(0)          // index into VIDEOS[]

  const [reducedMotion, setReducedMotion] = useState(false)
  const reducedMotionRef = useRef(false)

  // Respect prefers-reduced-motion
  useEffect(() => {
    const mq     = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = (e: MediaQueryList | MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches
      setReducedMotion(e.matches)
    }
    update(mq)
    mq.addEventListener('change', update as (e: MediaQueryListEvent) => void)
    return () => mq.removeEventListener('change', update as (e: MediaQueryListEvent) => void)
  }, [])

  // Pause/resume the active slot when reducedMotion toggles
  useEffect(() => {
    const active = activeSlot.current === 0 ? videoRefA.current : videoRefB.current
    if (!active) return
    if (reducedMotion) active.pause()
    else active.play().catch(() => {})
  }, [reducedMotion])

  // Text entrance animation
  useEffect(() => {
    const aylen      = aylenRef.current
    const montenegro = montenegroRef.current
    const eyebrow    = eyebrowRef.current
    const sub        = subRef.current
    if (!aylen || !montenegro || !eyebrow || !sub) return

    gsap.set([aylen, montenegro], { y: '110%' })
    gsap.set([eyebrow, sub],      { opacity: 0 })

    gsap.to([aylen, montenegro], {
      y:        '0%',
      duration: 0.9,
      ease:     'cubic-bezier(0.16, 1, 0.3, 1)',
      stagger:  0.06,
      delay:    0.2,
    })
    gsap.to(eyebrow, { opacity: 1, duration: 0.7, delay: 0.6 })
    gsap.to(sub,     { opacity: 1, duration: 0.7, delay: 0.9 })
  }, [])

  // Video cycling — crossfade every CYCLE_MS
  useEffect(() => {
    const elA = videoRefA.current
    const elB = videoRefB.current
    if (!elA || !elB) return

    // Init: slot A visible, slot B hidden
    gsap.set(elA, { opacity: 1 })
    gsap.set(elB, { opacity: 0 })
    activeSlot.current = 0
    vidIdx.current     = 0

    elA.src = VIDEOS[0]
    elA.load()
    if (!reducedMotionRef.current) elA.play().catch(() => {})

    const advance = () => {
      if (reducedMotionRef.current) return

      const nextIdx  = (vidIdx.current + 1) % VIDEOS.length
      const nextSlot = activeSlot.current === 0 ? 1 : 0
      const showEl   = nextSlot === 0 ? elA : elB
      const hideEl   = activeSlot.current === 0 ? elA : elB

      // Load the next clip into the invisible slot while crossfade starts
      showEl.src = VIDEOS[nextIdx]
      showEl.load()
      showEl.play().catch(() => {})

      gsap.to(hideEl, { opacity: 0, duration: FADE_SECS, ease: 'power2.inOut' })
      gsap.to(showEl, { opacity: 1, duration: FADE_SECS, ease: 'power2.inOut' })

      vidIdx.current     = nextIdx
      activeSlot.current = nextSlot as 0 | 1
    }

    const timer = setInterval(advance, CYCLE_MS)
    return () => {
      clearInterval(timer)
      elA.pause()
      elB.pause()
    }
  }, []) // runs once on mount — refs are stable

  const videoStyle = {
    position:       'absolute' as const,
    inset:          0,
    width:          '100%',
    height:         '100%',
    objectFit:      'cover'   as const,
    objectPosition: 'center',
    zIndex:         0,
    pointerEvents:  'none'    as const,
    filter:         'brightness(0.42) saturate(0.72)',
  }

  return (
    <section
      ref={sectionRef}
      data-panel="0"
      style={{
        background: '#363231',
        height:     '100vh',
        display:    'flex',
        alignItems: 'flex-end',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      {/* Slot A — starts visible with first video */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRefA}
        muted
        playsInline
        loop
        poster="/videos/hero-bg-poster.jpg"
        style={videoStyle}
      />

      {/* Slot B — starts hidden; receives the next clip before each crossfade */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRefB}
        muted
        playsInline
        loop
        style={{ ...videoStyle, opacity: 0 }}
      />

      {/* Primary overlay — left-heavy, protects text legibility */}
      <div style={{
        position:      'absolute',
        inset:         0,
        zIndex:        1,
        background:    'linear-gradient(to right, rgba(15,13,12,0.72) 0%, rgba(15,13,12,0.55) 32%, rgba(15,13,12,0.28) 56%, rgba(15,13,12,0.08) 74%, transparent 90%)',
        pointerEvents: 'none',
      }} />

      {/* Right-side portrait */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-1.png"
        alt=""
        className="hero-portrait-right"
        style={{
          position:       'absolute',
          right:          '60px',
          top:            0,
          height:         '100%',
          width:          '55%',
          objectFit:      'contain',
          objectPosition: 'bottom right',
          zIndex:         2,
        }}
      />

      {/* Photo protection overlay */}
      <div className="img-protect-overlay" />

      {/* Text column */}
      <div className="hero-text-col-mobile" style={{
        position:       'relative',
        zIndex:         10,
        width:          '100%',
        height:         '100%',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        padding:        '0 0 15vh 6%',
      }}>
        <div ref={eyebrowRef} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '2rem', opacity: 0 }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--teal)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(239,235,226,0.65)', textTransform: 'uppercase' }}>
            Transaction Coordinator · SaaS Founder
          </span>
        </div>

        <h1 style={{ margin: 0, lineHeight: 0.88 }}>
          <div style={{ overflow: 'hidden' }}>
            <div ref={aylenRef} style={{
              fontFamily:    'var(--font-cormorant)',
              fontSize:      'clamp(40px, 5vw, 72px)',
              fontWeight:    300,
              color:         'var(--cream)',
              letterSpacing: '-0.02em',
              lineHeight:    1,
              paddingBottom: '0.04em',
            }}>
              Aylen
            </div>
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div ref={montenegroRef} style={{
              fontFamily:    'var(--font-cormorant)',
              fontSize:      'clamp(40px, 5vw, 72px)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         'var(--cream)',
              letterSpacing: '-0.02em',
              lineHeight:    1,
              paddingBottom: '0.04em',
            }}>
              Montenegro
            </div>
          </div>
        </h1>

        <p ref={subRef} style={{ marginTop: '2.5rem', opacity: 0 }}>
          <span style={{
            display:       'block',
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      'clamp(14px, 1.3vw, 17px)',
            fontWeight:    400,
            color:         'var(--cream)',
            letterSpacing: '0.06em',
            marginBottom:  '10px',
          }}>
            Turning chaos into closings since 2004.
          </span>
          <span style={{
            display:       'block',
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      'clamp(13px, 1.1vw, 15px)',
            fontWeight:    400,
            color:         'var(--greige)',
            letterSpacing: '0.06em',
            maxWidth:      '480px',
            lineHeight:    1.75,
          }}>
            I run transactions for South Florida&apos;s top agents and build the software that runs them at scale.
          </span>
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
          <a href="/tc-services" className="btn-teal" style={{
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      '10px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding:       '14px 36px',
            display:       'inline-block',
            flexShrink:    0,
          }}>
            Work With Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:      'absolute',
        bottom:        '48px',
        left:          '50%',
        transform:     'translateX(-50%)',
        display:       'flex',
        flexDirection: 'column',
        alignItems:    'center',
        gap:           '10px',
        zIndex:        10,
      }}>
        <span style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.3em',
          color:         'var(--greige)',
          textTransform: 'uppercase',
          opacity:       0.45,
        }}>
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
