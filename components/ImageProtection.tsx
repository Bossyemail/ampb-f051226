'use client'
import { useEffect } from 'react'

export default function ImageProtection() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Element
      if (
        target instanceof HTMLImageElement ||
        target.closest?.('.img-protect-overlay')
      ) {
        e.preventDefault()
      }
    }
    document.addEventListener('contextmenu', handler)
    return () => document.removeEventListener('contextmenu', handler)
  }, [])
  return null
}
