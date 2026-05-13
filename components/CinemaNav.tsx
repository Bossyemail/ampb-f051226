'use client'
import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'TC Services',  href: '/tc-services' },
  { label: 'CloseAdmin',   href: '/closeadmin'  },
  { label: 'Content OS',   href: '/content-os'  },
  { label: 'Snarkletter',  href: '/snarkletter'  },
  { label: 'About',        href: '/about'        },
]

export default function CinemaNav() {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [menuOpen])

  return (
    <>
      {/* Gradient scrim */}
      <div style={{
        position:      'fixed',
        top:           0,
        left:          0,
        right:         0,
        height:        '120px',
        background:    'linear-gradient(to bottom, rgba(54,50,49,0.7) 0%, transparent 100%)',
        zIndex:        499,
        pointerEvents: 'none',
      }} />

      <nav className="cinema-nav" style={{
        position:       'fixed',
        top:            0,
        left:           0,
        right:          0,
        height:         '68px',
        padding:        '0 52px',
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        zIndex:         500,
        background:     'transparent',
      }}>
        {/* Logo */}
        <a href="/" style={{
          fontFamily:     'var(--font-cormorant)',
          fontSize:       '18px',
          fontWeight:     600,
          color:          'var(--cream)',
          letterSpacing:  '0.01em',
          flexShrink:     0,
          textDecoration: 'none',
        }}>
          Aylen Montenegro
        </a>

        {isMobile ? (
          /* Hamburger */
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              background: 'none',
              border:     'none',
              color:      'var(--cream)',
              fontSize:   '22px',
              cursor:     'pointer',
              padding:    '8px',
              lineHeight: 1,
            }}
          >
            ☰
          </button>
        ) : (
          /* Desktop nav links */
          <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            {LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily:     'var(--font-dm-mono)',
                  fontSize:       '10px',
                  letterSpacing:  '0.16em',
                  textTransform:  'uppercase',
                  color:          'rgba(239,235,226,0.6)',
                  textDecoration: 'none',
                  transition:     'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,235,226,0.6)')}
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://form.jotform.com/252496909826069"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily:     'var(--font-dm-mono)',
                fontSize:       '10px',
                letterSpacing:  '0.16em',
                textTransform:  'uppercase',
                color:          'var(--cream)',
                textDecoration: 'none',
                border:         '0.5px solid rgba(239,235,226,0.4)',
                padding:        '9px 22px',
                transition:     'background 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background  = 'var(--teal)'
                e.currentTarget.style.borderColor = 'var(--teal)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background  = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(239,235,226,0.4)'
              }}
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div style={{
          position:       'fixed',
          inset:          0,
          background:     'rgba(42,40,39,0.97)',
          zIndex:         600,
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          gap:            '28px',
        }}>
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position:   'absolute',
              top:        '24px',
              right:      '28px',
              background: 'none',
              border:     'none',
              color:      'var(--cream)',
              fontSize:   '22px',
              cursor:     'pointer',
              padding:    '8px',
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          {LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily:     'var(--font-cormorant)',
                fontSize:       '40px',
                fontWeight:     300,
                color:          'var(--cream)',
                textDecoration: 'none',
                letterSpacing:  '-0.01em',
                opacity:        0.85,
                transition:     'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://form.jotform.com/252496909826069"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily:     'var(--font-dm-mono)',
              fontSize:       '11px',
              letterSpacing:  '0.18em',
              textTransform:  'uppercase',
              color:          'var(--cream)',
              textDecoration: 'none',
              border:         '0.5px solid rgba(239,235,226,0.4)',
              padding:        '14px 32px',
              marginTop:      '8px',
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  )
}
