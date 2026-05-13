'use client'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function P4About() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    gsap.to(headingRef.current, {
      yPercent: -12,
      ease:     'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start:   'top bottom',
        end:     'bottom top',
        scrub:   2,
      },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      data-panel="3"
      style={{
        background:     'var(--black)',
        height:         '100vh',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        overflow:       'hidden',
      }}
    >
      {/* Left */}
      <div style={{
        flex:        1,
        padding:     '0 8vw',
        borderRight: '1px solid rgba(239,235,226,0.07)',
        display:     'flex',
        alignItems:  'center',
        alignSelf:   'stretch',
      }}>
        <h2 ref={headingRef} style={{
          fontFamily:    'var(--font-cormorant)',
          fontSize:      'clamp(44px, 5.5vw, 72px)',
          fontWeight:    300,
          color:         'var(--cream)',
          lineHeight:    1.12,
          margin:        0,
          letterSpacing: '-0.01em',
        }}>
          I&apos;m not a consultant.<br />
          I&apos;m a builder<br />
          <em>in the trenches.</em>
        </h2>
      </div>

      {/* Right */}
      <div style={{
        flex:       1,
        padding:    '0 8vw',
        display:    'flex',
        alignItems: 'center',
        alignSelf:  'stretch',
      }}>
        <div style={{
          fontFamily:  'var(--font-dm-mono)',
          fontSize:    '13px',
          lineHeight:  1.85,
          color:       'var(--greige)',
          maxWidth:    '480px',
        }}>
          <p style={{ margin: '0 0 1.5em 0' }}>
            20+ years managing real transactions — not hypotheticals. When the same problems
            showed up over and over, I stopped firefighting and started building systems that
            prevent the fires.
          </p>
          <p style={{ margin: '0 0 1.5em 0' }}>
            Now I do both: running TC services for South Florida&apos;s top agents and building
            the SaaS tools I always wished existed.
          </p>
          <p style={{ margin: 0 }}>
            Based in Miami. Built different.
          </p>
        </div>
      </div>
    </section>
  )
}
