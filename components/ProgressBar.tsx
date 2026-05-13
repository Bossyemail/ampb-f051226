'use client'
import { useEffect, useRef } from 'react'

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const update = () => {
      const total = document.body.scrollHeight - window.innerHeight
      const pct   = total > 0 ? (window.scrollY / total) * 100 : 0
      bar.style.width = `${pct}%`
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div ref={barRef} style={{
      position:      'fixed',
      top:           0,
      left:          0,
      height:        '1.5px',
      width:         '0%',
      background:    'var(--teal2)',
      zIndex:        9997,
      pointerEvents: 'none',
      transition:    'width 0.05s linear',
    }} />
  )
}
