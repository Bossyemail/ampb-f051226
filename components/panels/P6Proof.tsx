'use client'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function P6Proof() {
  const sectionRef = useRef<HTMLElement>(null)
  const quoteRef   = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, y: 50 },
      {
        opacity:  1,
        y:        0,
        duration: 1.2,
        ease:     'power3.out',
        scrollTrigger: {
          trigger:       sectionRef.current,
          start:         'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      data-panel="5"
      style={{
        background: 'var(--black)',
        height:     '100vh',
        display:    'flex',
        alignItems: 'center',
        padding:    '0 8vw',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      {/* Giant quote mark */}
      <div style={{
        position:      'absolute',
        top:           '-30px',
        left:          '6vw',
        fontFamily:    'var(--font-cormorant)',
        fontSize:      '200px',
        color:         'var(--cream)',
        opacity:       0.03,
        lineHeight:    1,
        userSelect:    'none',
        pointerEvents: 'none',
      }}>
        &ldquo;
      </div>

      <div ref={quoteRef} style={{ maxWidth: '760px', position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize:   'clamp(24px, 3.5vw, 46px)',
          fontWeight: 300,
          lineHeight: 1.55,
          color:      'var(--cream)',
          margin:     '0 0 48px 0',
        }}>
          &ldquo;Aylen is my secret weapon. I don&apos;t touch a transaction without her.
          She keeps the chaos under control, knows exactly how to guide a deal to closing.
          Simply put — she&apos;s{' '}
          <span style={{ color: 'var(--teal2)' }}>
            the closer behind the closer.
          </span>&rdquo;
        </p>

        <p style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '11px',
          letterSpacing: '0.2em',
          color:         'var(--greige)',
          opacity:       0.55,
          textTransform: 'uppercase',
          margin:        0,
        }}>
          Nathalys F. &nbsp;·&nbsp; Coldwell Banker
        </p>
      </div>
    </section>
  )
}
