'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef   = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const mouse       = useRef({ x: 0, y: 0 })
  const pos         = useRef({ x: 0, y: 0 })
  const raf         = useRef<number>(0)

  useEffect(() => {
    const cursor   = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
    }

    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12
      follower.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`
      raf.current = requestAnimationFrame(loop)
    }

    const expand   = () => { follower.style.width = '70px'; follower.style.height = '70px' }
    const contract = () => { follower.style.width = '40px'; follower.style.height = '40px' }

    const attach = () => {
      document.querySelectorAll('a, button, [data-cursor-expand]').forEach(el => {
        el.addEventListener('mouseenter', expand)
        el.addEventListener('mouseleave', contract)
      })
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(loop)
    attach()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} style={{
        position:       'fixed',
        top:            0,
        left:           0,
        width:          '10px',
        height:         '10px',
        borderRadius:   '50%',
        background:     'var(--cream)',
        mixBlendMode:   'difference',
        pointerEvents:  'none',
        zIndex:         9999,
        willChange:     'transform',
      }} />
      <div ref={followerRef} style={{
        position:       'fixed',
        top:            0,
        left:           0,
        width:          '40px',
        height:         '40px',
        borderRadius:   '50%',
        border:         '1px solid var(--cream)',
        mixBlendMode:   'difference',
        pointerEvents:  'none',
        zIndex:         9998,
        willChange:     'transform',
        transition:     'width 0.25s ease, height 0.25s ease',
      }} />
    </>
  )
}
