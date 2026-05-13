'use client'
import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const PRODUCTS = [
  {
    pill:     'White-Glove Service',
    name:     ['TC', 'Services'],
    desc:     "You sell. I run the file. White-glove transaction coordination for agents who don't have margin for error — and don't want any.",
    cta:      'Check availability →',
    href:     '/tc-services',
    image:    '/images/af-miamibeach11.jpg',
    overlay:  'linear-gradient(to top, rgba(17,75,77,0.96) 0%, rgba(17,75,77,0.7) 45%, rgba(17,75,77,0.3) 100%)',
  },
  {
    pill:     'SaaS Platform',
    name:     ['Close', 'Admin'],
    desc:     'The back office for serious agents. BossyEmail, ClauseVault, and DealDesk — all in one place.',
    cta:      'Explore CloseAdmin →',
    href:     '/closeadmin',
    image:    '/images/clausevault-bg-18.jpg',
    overlay:  'linear-gradient(to top, rgba(30,27,26,0.98) 0%, rgba(139,94,60,0.85) 50%, rgba(139,94,60,0.5) 100%)',
  },
  {
    pill:     'Content System',
    name:     ['Content', 'OS'],
    desc:     'Your entire content operation systemized. Built for real estate pros who want to show up consistently without the chaos.',
    cta:      'See how it works →',
    href:     '/content-os',
    image:    '/images/clausevault-bg-33.jpg',
    overlay:  'linear-gradient(to top, rgba(30,27,26,0.98) 0%, rgba(54,50,49,0.88) 50%, rgba(211,204,214,0.4) 100%)',
  },
  {
    pill:     'Newsletter',
    name:     ['Snark', 'letter'],
    desc:     "The Real Estate Snarkletter — sharp takes, no fluff, straight to your inbox. Written by someone who's actually in the trenches.",
    cta:      'Subscribe free →',
    href:     '/snarkletter',
    image:    '/images/clausevault-bg-71.jpg',
    overlay:  'linear-gradient(to top, rgba(30,27,26,0.98) 0%, rgba(54,50,49,0.88) 50%, rgba(188,175,175,0.3) 100%)',
  },
]

export default function P5Products() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)
  const activeRef  = useRef(0)

  useGSAP(() => {
    if (!wrapperRef.current || !trackRef.current) return

    const tl = gsap.timeline().to(trackRef.current, {
      x:                  () => -(PRODUCTS.length - 1) * window.innerWidth,
      ease:               'none',
      invalidateOnRefresh: true,
    })

    ScrollTrigger.create({
      animation:          tl,
      trigger:            wrapperRef.current,
      pin:                true,
      pinType:            'transform',
      start:              'top top',
      end:                () => `+=${(PRODUCTS.length - 1) * window.innerWidth}`,
      scrub:              1,
      invalidateOnRefresh: true,
      snap: {
        snapTo:   1 / (PRODUCTS.length - 1),
        duration: { min: 0.35, max: 0.65 },
        ease:     'power3.inOut',
        inertia:  false,
      },
      onUpdate: (self) => {
        const card = Math.round(self.progress * (PRODUCTS.length - 1))
        if (card !== activeRef.current) {
          activeRef.current = card
          setActiveCard(card)
        }
      },
    })
  }, { scope: wrapperRef })

  return (
    <div ref={wrapperRef} data-panel="3" style={{ height: '85vh', overflow: 'hidden', position: 'relative' }}>
      {/* Track */}
      <div ref={trackRef} style={{
        display: 'flex',
        width:   `${PRODUCTS.length * 100}vw`,
        height:  '85vh',
      }}>
        {PRODUCTS.map((p, i) => (
          <div key={i} style={{
            width:      '100vw',
            height:     '85vh',
            display:    'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:   'center',
            textAlign:    'center',
            padding:      '0 10vw',
            flexShrink:   0,
            position:     'relative',
            overflow:     'hidden',
          }}>
            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt=""
              style={{
                position:   'absolute',
                inset:       0,
                width:       '100%',
                height:      '100%',
                objectFit:  'cover',
                zIndex:      0,
              }}
            />

            {/* Colour overlay */}
            <div style={{
              position:   'absolute',
              inset:       0,
              background:  p.overlay,
              zIndex:      1,
            }} />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{
                display:        'inline-block',
                fontFamily:     'var(--font-dm-mono)',
                fontSize:       '10px',
                letterSpacing:  '0.25em',
                color:          '#EFEBE2',
                textTransform:  'uppercase',
                background:     'rgba(239,235,226,0.1)',
                border:         '1px solid rgba(239,235,226,0.35)',
                backdropFilter: 'blur(4px)',
                padding:        '7px 16px',
                marginBottom:   '40px',
              }}>
                {p.pill}
              </span>

              <h2 style={{ margin: '0 0 32px 0', lineHeight: 0.88 }}>
                <span style={{
                  display:       'block',
                  fontFamily:    'var(--font-cormorant)',
                  fontSize:      'clamp(64px, 9vw, 120px)',
                  fontWeight:    700,
                  color:         '#EFEBE2',
                  letterSpacing: '-0.02em',
                }}>
                  {p.name[0]}
                </span>
                <span style={{
                  display:       'block',
                  fontFamily:    'var(--font-cormorant)',
                  fontSize:      'clamp(64px, 9vw, 120px)',
                  fontWeight:    300,
                  fontStyle:     'italic',
                  color:         '#EFEBE2',
                  letterSpacing: '-0.02em',
                }}>
                  {p.name[1]}
                </span>
              </h2>

              <p style={{
                fontFamily: 'var(--font-dm-mono)',
                fontSize:   '13px',
                lineHeight: 1.85,
                color:      'rgba(239,235,226,0.9)',
                maxWidth:   '480px',
                margin:     '0 0 40px 0',
              }}>
                {p.desc}
              </p>

              <a href={p.href} style={{
                fontFamily:           'var(--font-dm-mono)',
                fontSize:             '11px',
                letterSpacing:        '0.18em',
                textTransform:        'uppercase',
                color:                '#EFEBE2',
                textDecoration:       'underline',
                textDecorationColor:  'rgba(95,158,160,0.7)',
                textUnderlineOffset:  '5px',
                display:              'inline-block',
              }}>
                {p.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dot nav */}
      <div style={{
        position:  'absolute',
        bottom:    '48px',
        left:      '50%',
        transform: 'translateX(-50%)',
        display:   'flex',
        gap:       '10px',
        zIndex:    10,
      }}>
        {PRODUCTS.map((_, i) => (
          <div key={i} style={{
            width:        '6px',
            height:       '6px',
            borderRadius: '50%',
            background:   'var(--cream)',
            opacity:      activeCard === i ? 1 : 0.3,
            transform:    activeCard === i ? 'scale(1.5)' : 'scale(1)',
            transition:   'all 0.3s ease',
          }} />
        ))}
      </div>
    </div>
  )
}
