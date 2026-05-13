'use client'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function P2Statement() {
  const sectionRef = useRef<HTMLElement>(null)
  const linesRef   = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    const lines = linesRef.current.filter(Boolean) as HTMLDivElement[]
    gsap.set(lines, { y: '105%' })

    gsap.to(lines, {
      y:        '0%',
      duration: 0.85,
      ease:     'power3.out',
      stagger:  0.08,
      scrollTrigger: {
        trigger:       sectionRef.current,
        start:         'top 60%',
        end:           'top 15%',
        toggleActions: 'play reverse play reverse',
      },
    })
  }, { scope: sectionRef })

  const lineContent = [
    <span key={0}>Real estate doesn&apos;t</span>,
    <em key={1}>break from effort —</em>,
    <span key={2}>it breaks from <strong style={{ color: 'var(--teal2)' }}>gaps.</strong></span>,
    <span key={3}>I close the gaps.</span>,
  ]

  return (
    <section
      ref={sectionRef}
      data-panel="1"
      style={{
        background:     'var(--black2)',
        height:         '100vh',
        display:        'flex',
        justifyContent: 'center',
        alignItems:     'center',
        padding:        '0 10vw',
        position:       'relative',
        overflow:       'hidden',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {lineContent.map((line, i) => (
          <div key={i} style={{ overflow: 'hidden', lineHeight: 1 }}>
            <div
              ref={el => { linesRef.current[i] = el }}
              style={{
                fontFamily:    'var(--font-cormorant)',
                fontSize:      'clamp(48px, 6.5vw, 88px)',
                fontWeight:    400,
                color:         'var(--cream)',
                lineHeight:    1.12,
                paddingBottom: '0.06em',
              }}
            >
              {line}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        position:      'absolute',
        bottom:        '48px',
        right:         '8vw',
        fontFamily:    'var(--font-dm-mono)',
        fontSize:      '10px',
        letterSpacing: '0.2em',
        color:         'var(--greige)',
        opacity:       0.4,
      }}>
        02 / 07
      </div>
    </section>
  )
}
