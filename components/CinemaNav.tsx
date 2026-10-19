'use client'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import TCIntakeForm from './TCIntakeForm'
import modalStyles from './TCIntakeModal.module.css'

const LINKS = [
  { label: 'TC Services',  href: '/tc-services' },
  { label: 'CloseAdmin',   href: '/closeadmin'  },
  { label: 'Snarkletter',  href: '/snarkletter'  },
  { label: 'About',        href: '/about'        },
]

export default function CinemaNav() {
  const [isMobile, setIsMobile]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [mounted, setMounted]     = useState(false)

  // Focus management: track the triggering element; ref to the close button
  const lastFocusRef  = useRef<HTMLElement | null>(null)
  const modalCloseRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setMounted(true), [])

  // Allow external components (hero CTA, final CTA) to open this modal via custom event.
  // Store the active element so focus can be restored when the modal closes.
  useEffect(() => {
    const handleOpen = () => {
      lastFocusRef.current = document.activeElement as HTMLElement
      setModalOpen(true)
    }
    window.addEventListener('open-tc-intake', handleOpen)
    return () => window.removeEventListener('open-tc-intake', handleOpen)
  }, [])

  // Focus close button when modal opens; restore focus to trigger when it closes.
  useEffect(() => {
    if (modalOpen) {
      modalCloseRef.current?.focus()
    } else {
      lastFocusRef.current?.focus()
      lastFocusRef.current = null
    }
  }, [modalOpen])

  // Escape key closes the modal (mirrors TCIntakeModal.tsx standalone behaviour)
  useEffect(() => {
    if (!modalOpen) return
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalOpen(false) }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [modalOpen])

  // Focus trap: cycle Tab/Shift+Tab within the dialog while the modal is open.
  // Escape (above) and the close button remain the deliberate exit paths.
  useEffect(() => {
    if (!modalOpen) return

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const panel = document.querySelector<HTMLElement>('[role="dialog"]')
      if (!panel) return

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), ' +
          'select:not([disabled]), textarea:not([disabled]), ' +
          '[tabindex]:not([tabindex="-1"])'
        )
      ).filter(el => el.offsetParent !== null)   // exclude hidden elements

      if (focusable.length === 0) return

      const first = focusable[0]
      const last  = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus() }
      }
    }

    window.addEventListener('keydown', trapFocus)
    return () => window.removeEventListener('keydown', trapFocus)
  }, [modalOpen])

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

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
          fontFamily:     'var(--font-dm-mono)',
          fontSize:       '12px',
          fontWeight:     400,
          color:          'var(--cream)',
          letterSpacing:  '0.2em',
          textTransform:  'uppercase',
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
              background:      'none',
              border:          'none',
              color:           'var(--cream)',
              fontSize:        '27px',
              cursor:          'pointer',
              padding:         0,
              lineHeight:      1,
              minWidth:        '44px',
              height:          '44px',
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
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

            <button
              type="button"
              onClick={e => {
                lastFocusRef.current = e.currentTarget
                setModalOpen(true)
              }}
              className="btn-teal"
              style={{
                fontFamily:    'var(--font-dm-mono)',
                fontSize:      '10px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding:       '9px 22px',
              }}
            >
              Work With Me
            </button>
          </div>
        )}
      </nav>

      {/* TC Intake Modal */}
      {mounted && modalOpen && createPortal(
        <div
          className={modalStyles.overlay}
          onClick={e => { if (e.target === e.currentTarget) setModalOpen(false) }}
        >
          <div className={modalStyles.panel} role="dialog" aria-modal="true" aria-label="TC Intake Form">
            <button
              ref={modalCloseRef}
              type="button"
              onClick={() => setModalOpen(false)}
              className={modalStyles.closeBtn}
              aria-label="Close"
            >
              ×
            </button>
            <div className={modalStyles.panelInner}>
              <TCIntakeForm />
            </div>
          </div>
        </div>,
        document.body
      )}

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
          gap:            '12px',
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

          <button
            type="button"
            onClick={e => {
              lastFocusRef.current = e.currentTarget
              setMenuOpen(false)
              setModalOpen(true)
            }}
            className="btn-teal"
            style={{
              fontFamily:    'var(--font-dm-mono)',
              fontSize:      '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding:       '14px 32px',
              marginTop:     '8px',
            }}
          >
            Work With Me
          </button>
        </div>
      )}
    </>
  )
}
