'use client'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const STATS = [
  { num: '20+',    suffix: '',    label: 'Years Experience' },
  { num: '3K+',    suffix: '',    label: 'Closed Transactions' },
  { num: '4+',     suffix: '',    label: 'SaaS Products'       },
  { num: 'Top 1%', suffix: '',    label: 'TC South Florida'    },
]

export default function P3Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef   = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    const items = statsRef.current.filter(Boolean) as HTMLDivElement[]
    gsap.set(items, { opacity: 0, y: 20 })

    gsap.to(items, {
      opacity:  1,
      y:        0,
      duration: 0.7,
      ease:     'power3.out',
      stagger:  0.08,
      scrollTrigger: {
        trigger:       sectionRef.current,
        start:         'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      data-panel="1"
      style={{
        background: '#2a2827',
        height:     'auto',
        padding:    '28px 0',
      }}
    >
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        width:               '100%',
      }}>
        {STATS.map((stat, i) => (
          <div
            key={i}
            ref={el => { statsRef.current[i] = el }}
            style={{
              display:        'flex',
              flexDirection:  'column',
              justifyContent: 'center',
              alignItems:     'center',
              textAlign:      'center',
              padding:        '40px 0',
              borderRight:    i < STATS.length - 1
                ? '0.5px solid rgba(239,235,226,0.1)'
                : 'none',
            }}
          >
            <div style={{
              fontFamily:    'var(--font-cormorant)',
              fontSize:      'clamp(32px, 3.5vw, 44px)',
              fontWeight:    300,
              color:         'var(--cream)',
              lineHeight:    1,
              letterSpacing: '-0.02em',
              whiteSpace:    'nowrap',
            }}>
              {stat.num}
              {stat.suffix && (
                <span style={{ opacity: 0.4, fontStyle: 'italic', fontSize: 'clamp(32px, 3.5vw, 44px)' }}>{stat.suffix}</span>
              )}
            </div>
            <div style={{
              fontFamily:    'var(--font-dm-mono)',
              fontSize:      '10px',
              letterSpacing: '0.22em',
              color:         '#5f9ea0',
              marginTop:     '12px',
              textTransform: 'uppercase',
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
