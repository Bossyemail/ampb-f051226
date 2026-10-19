'use client'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function P7CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(max-width: 768px)', () => {
      gsap.set(contentRef.current, { opacity: 1, y: 0 })
    })

    mm.add('(min-width: 769px)', () => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity:  1,
          y:        0,
          duration: 1,
          ease:     'power3.out',
          scrollTrigger: {
            trigger:       sectionRef.current,
            start:         'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      data-panel="6"
      style={{
        background:     'var(--teal)',
        height:         '100vh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        alignItems:     'center',
        textAlign:      'center',
        padding:        '0 6%',
        position:       'relative',
        overflow:       'hidden',
      }}
    >
      <div ref={contentRef}>
        <h2 style={{
          fontFamily:    'var(--font-cormorant)',
          fontSize:      'clamp(56px, 8vw, 110px)',
          fontWeight:    300,
          color:         'var(--cream)',
          lineHeight:    1.0,
          margin:        '0 0 64px 0',
          letterSpacing: '-0.02em',
        }}>
          Pick the tool.<br />
          Or hand me<br />
          <em>the </em><strong>file.</strong>
        </h2>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Primary CTA — solid fill on hover */}
          <a href="/tc-services" style={{
            fontFamily:     'var(--font-dm-mono)',
            fontSize:       '11px',
            letterSpacing:  '0.22em',
            textTransform:  'uppercase',
            background:     'var(--cream)',
            color:          'var(--teal)',
            padding:        '18px 44px',
            border:         '1px solid var(--cream)',
            textDecoration: 'none',
            display:        'inline-block',
            fontWeight:     400,
            transition:     'background 0.2s, border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background  = 'transparent'
            e.currentTarget.style.borderColor = 'var(--cream)'
            e.currentTarget.style.color       = 'var(--cream)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background  = 'var(--cream)'
            e.currentTarget.style.borderColor = 'var(--cream)'
            e.currentTarget.style.color       = 'var(--teal)'
          }}
          >
            Work With Me
          </a>

          {/* Secondary CTA — outline */}
          <a href="/closeadmin" style={{
            fontFamily:     'var(--font-dm-mono)',
            fontSize:       '11px',
            letterSpacing:  '0.22em',
            textTransform:  'uppercase',
            background:     'transparent',
            color:          'var(--cream)',
            padding:        '18px 44px',
            border:         '1px solid rgba(239,235,226,0.4)',
            textDecoration: 'none',
            display:        'inline-block',
            fontWeight:     400,
            transition:     'background 0.2s, border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background   = 'var(--cream)'
            e.currentTarget.style.borderColor  = 'var(--cream)'
            e.currentTarget.style.color        = 'var(--teal)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background   = 'transparent'
            e.currentTarget.style.borderColor  = 'rgba(239,235,226,0.4)'
            e.currentTarget.style.color        = 'var(--cream)'
          }}
          >
            Explore CloseAdmin
          </a>
        </div>

        {/* Hairline + social row */}
        <div style={{ width: '40px', height: '0.5px', background: 'rgba(239,235,226,0.2)', margin: '40px auto' }} />
        <div style={{ display: 'flex', gap: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Email',     href: 'mailto:hello@aylenmontenegro.com' },
            { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/aylen-montenegro-pa-02083939/' },
            { label: 'Instagram', href: 'https://instagram.com/aylenbuilds' },
            { label: 'YouTube',   href: 'https://youtube.com/@aylenmontenegropa' },
            { label: 'Threads',   href: 'https://threads.net/@aylenbuilds' },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
              fontFamily:     'var(--font-dm-mono)',
              fontSize:       '9px',
              letterSpacing:  '0.16em',
              textTransform:  'uppercase',
              color:          'rgba(239,235,226,0.4)',
              textDecoration: 'none',
              transition:     'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,235,226,0.4)')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

    </section>
  )
}
