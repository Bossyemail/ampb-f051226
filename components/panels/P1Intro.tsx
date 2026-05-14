'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function P1Intro() {
  const sectionRef    = useRef<HTMLElement>(null)
  const aylenRef      = useRef<HTMLDivElement>(null)
  const montenegroRef = useRef<HTMLDivElement>(null)
  const eyebrowRef    = useRef<HTMLParagraphElement>(null)
  const subRef        = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const aylen      = aylenRef.current
    const montenegro = montenegroRef.current
    const eyebrow    = eyebrowRef.current
    const sub        = subRef.current
    if (!aylen || !montenegro || !eyebrow || !sub) return

    gsap.set([aylen, montenegro], { y: '110%' })
    gsap.set([eyebrow, sub], { opacity: 0 })

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
      {/* Right-side photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/aylen.png"
        alt=""
        style={{
          position:       'absolute',
          right:          0,
          top:            0,
          bottom:         0,
          width:          '55%',
          height:         '100%',
          objectFit:      'cover',
          objectPosition: 'top center',
          zIndex:         1,
        }}
      />

      {/* Blend overlay — covers left edge of photo into background */}
      <div style={{
        position:   'absolute',
        right:      0,
        top:        0,
        bottom:     0,
        width:      '55%',
        zIndex:     2,
        background: 'linear-gradient(to right, #363231 0%, rgba(54,50,49,0.0) 35%, transparent 100%)',
      }} />

      {/* Photo protection overlay — intercepts right-click and drag */}
      <div className="img-protect-overlay" />

      {/* Right edge fade — blends photo into background on far right */}
      <div style={{
        position:   'absolute',
        top:        0,
        right:      0,
        bottom:     0,
        width:      '200px',
        zIndex:     3,
        background: 'linear-gradient(to right, transparent 0%, #363231 100%)',
      }} />

      {/* Bottom-right corner gradient — hides decorative element in photo */}
      <div style={{
        position:      'absolute',
        bottom:        0,
        right:         0,
        width:         '420px',
        height:        '320px',
        zIndex:        4,
        background:    'radial-gradient(ellipse at bottom right, #363231 0%, #363231 35%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Left text column */}
      <div className="hero-text-col-mobile" style={{
        position:       'relative',
        zIndex:         10,
        width:          '45%',
        height:         '100%',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        padding:        '0 0 15vh 6%',
      }}>
        <p ref={eyebrowRef} style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '11px',
          letterSpacing: '0.25em',
          color:         'var(--cognac)',
          textTransform: 'uppercase',
          margin:        '0 0 2rem 0',
          opacity:       0,
        }}>
          Contract Manager · SaaS Founder
        </p>

        <h1 style={{ margin: 0, lineHeight: 0.88 }}>
          <div style={{ overflow: 'hidden' }}>
            <div ref={aylenRef} style={{
              fontFamily:    'var(--font-cormorant)',
              fontSize:      'clamp(64px, 8vw, 110px)',
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
              fontSize:      'clamp(64px, 8vw, 110px)',
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

        <p ref={subRef} style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      'clamp(11px, 1.1vw, 15px)',
          color:         'var(--greige)',
          marginTop:     '2.5rem',
          opacity:       0,
          letterSpacing: '0.06em',
        }}>
          Turning chaos into closings since 2004
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
          <a href="/tc-services" style={{
            fontFamily:     'var(--font-dm-mono)',
            fontSize:       '10px',
            letterSpacing:  '0.16em',
            textTransform:  'uppercase',
            background:     'transparent',
            color:          'var(--cream)',
            padding:        '14px 36px',
            border:         '0.5px solid rgba(239,235,226,0.5)',
            textDecoration: 'none',
            display:        'inline-block',
            flexShrink:     0,
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
