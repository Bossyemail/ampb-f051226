'use client'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function P8About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef     = useRef<HTMLImageElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const line1Ref   = useRef<HTMLSpanElement>(null)
  const line2Ref   = useRef<HTMLSpanElement>(null)
  const paraRefs   = useRef<(HTMLParagraphElement | null)[]>([])

  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    const mm = gsap.matchMedia()

    mm.add('(max-width: 768px)', () => {
      // Mobile: reveal everything immediately, no scroll trigger
      gsap.set(eyebrowRef.current, { opacity: 1, y: 0 })
      gsap.set([line1Ref.current, line2Ref.current], { y: 0 })
      const paras = paraRefs.current.filter(Boolean) as HTMLParagraphElement[]
      gsap.set(paras, { opacity: 1, y: 0 })
    })

    mm.add('(min-width: 769px)', () => {
      // Image scale scrub
      gsap.fromTo(imgRef.current,
        { scale: 1.08 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start:   'top bottom',
            end:     'bottom top',
            scrub:   2,
          },
        }
      )

      // Eyebrow fade + slide
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 70%' },
        }
      )

      // Heading lines masked reveal
      gsap.fromTo([line1Ref.current, line2Ref.current],
        { y: '105%' },
        {
          y: 0, duration: 0.9, ease: 'cubic-bezier(0.16,1,0.3,1)',
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: 'top 70%' },
        }
      )

      // Body paragraphs sequential fade
      const paras = paraRefs.current.filter(Boolean) as HTMLParagraphElement[]
      gsap.fromTo(paras,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: { trigger: section, start: 'top 65%' },
        }
      )
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      data-panel="6"
      className="about-split-section"
      style={{
        height:              '100vh',
        display:             'grid',
        gridTemplateColumns: '1fr 1fr',
        background:          '#363231',
        overflow:            'hidden',
        marginTop:           '-2px',
      }}
    >
      {/* LEFT — image */}
      <div className="about-img-col" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src="/images/22.png"
          alt=""
          style={{
            width:          '100%',
            height:         '100%',
            objectFit:      'cover',
            objectPosition: 'top center',
          }}
        />

        {/* Photo protection overlay */}
        <div className="img-protect-overlay" style={{ zIndex: 2 }} />

        {/* Top fade — image emerges from shared background */}
        <div style={{
          position:   'absolute',
          top:        0,
          left:       0,
          right:      0,
          height:     '250px',
          background: 'linear-gradient(to bottom, #363231 0%, transparent 100%)',
          zIndex:     3,
          pointerEvents: 'none',
        }} />

        {/* Left edge blend */}
        <div style={{
          position:   'absolute',
          top:        0,
          left:       0,
          bottom:     0,
          width:      '120px',
          background: 'linear-gradient(to right, #363231 0%, transparent 100%)',
          zIndex:     3,
          pointerEvents: 'none',
        }} />

        {/* Right edge blend into content side */}
        <div style={{
          position:   'absolute',
          top:        0,
          right:      0,
          bottom:     0,
          width:      '40%',
          background: 'linear-gradient(to right, transparent 0%, #363231 100%)',
        }} />


        {/* Corner accent top-right */}
        <div style={{
          position:    'absolute',
          top:         '-1px',
          right:       '-1px',
          width:       '60px',
          height:      '60px',
          borderTop:   '0.5px solid var(--teal)',
          borderRight: '0.5px solid var(--teal)',
          opacity:     0.4,
        }} />
      </div>

      {/* RIGHT — content */}
      <div style={{
        padding:        '0 6% 0 6%',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        paddingTop:     0,
      }}>
        {/* Eyebrow */}
        <div ref={eyebrowRef} style={{
          display:      'flex',
          alignItems:   'center',
          gap:          '12px',
          marginBottom: '28px',
          opacity:      0,
        }}>
          <div style={{ width: '24px', height: '0.5px', background: 'var(--cognac)', flexShrink: 0 }} />
          <span style={{
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      '10px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color:         'var(--cognac)',
          }}>
            The person behind it
          </span>
        </div>

        {/* Heading */}
        <h2 style={{ margin: 0, lineHeight: 1.1 }}>
          <span style={{ overflow: 'hidden', display: 'block' }}>
            <span ref={line1Ref} style={{
              display:       'block',
              fontFamily:    'var(--font-cormorant)',
              fontSize:      'clamp(36px, 4vw, 52px)',
              fontWeight:    400,
              color:         'var(--cream)',
              transform:     'translateY(105%)',
            }}>
              I&apos;m not a consultant.
            </span>
          </span>
          <span style={{ overflow: 'hidden', display: 'block' }}>
            <span ref={line2Ref} style={{
              display:       'block',
              fontFamily:    'var(--font-cormorant)',
              fontSize:      'clamp(36px, 4vw, 52px)',
              fontWeight:    400,
              color:         'var(--cream)',
              transform:     'translateY(105%)',
            }}>
              I&apos;m a builder{' '}
              <em style={{ color: 'var(--teal-mid)' }}>in the trenches.</em>
            </span>
          </span>
        </h2>

        {/* Body copy */}
        <div style={{ marginTop: '28px' }}>
          {[
            "20+ years managing real transactions — not hypotheticals. When the same problems showed up over and over, I stopped firefighting and started building systems that prevent the fires.",
            "Now I do both: running TC services for South Florida's top agents and building the SaaS tools I always wished existed.",
            "Based in Miami. Built different.",
          ].map((text, i) => (
            <p
              key={i}
              ref={el => { paraRefs.current[i] = el }}
              style={{
                fontFamily: 'var(--font-dm-mono)',
                fontSize:   '15px',
                fontWeight: 300,
                lineHeight: 1.85,
                color:      'var(--greige)',
                margin:     i < 2 ? '0 0 1.4em 0' : '0',
                opacity:    0,
              }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* CTAs */}
        <div className="about-cta-row" style={{ display: 'flex', gap: '16px', marginTop: '44px' }}>
          <a href="/about" className="btn-teal" style={{
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      '10px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding:       '16px 36px',
            display:       'inline-block',
            flexShrink:    0,
          }}>
            Read my story
          </a>
          <a href="https://instagram.com/aylenbuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{
              fontFamily:    'var(--font-dm-mono)',
              fontSize:      '10px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding:       '16px 36px',
              display:       'inline-block',
              flexShrink:    0,
            }}
          >
            Follow @aylenbuilds
          </a>
        </div>
      </div>
    </section>
  )
}
