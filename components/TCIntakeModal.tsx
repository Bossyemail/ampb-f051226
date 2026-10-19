'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import TCIntakeForm from './TCIntakeForm'
import styles from './TCIntakeModal.module.css'

type Props = {
  label?: string
  className?: string
}

export default function RequestAvailabilityButton({ label = 'Request availability', className }: Props) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {mounted && open && createPortal(
        <div
          className={styles.overlay}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
        >
          <div className={styles.panel} role="dialog" aria-modal="true" aria-label="TC Intake Form">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className={styles.closeBtn}
              aria-label="Close"
            >
              ×
            </button>
            <div className={styles.panelInner}>
              <TCIntakeForm />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
