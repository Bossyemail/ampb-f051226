'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Cursor      from '@/components/Cursor'
import ProgressBar from '@/components/ProgressBar'
import CinemaNav   from '@/components/CinemaNav'
import PanelIndex  from '@/components/PanelIndex'
import SocialBar   from '@/components/SocialBar'
import Footer      from '@/components/Footer'

import P1Intro      from '@/components/panels/P1Intro'
import P3Stats      from '@/components/panels/P3Stats'
import P4Newsletter from '@/components/panels/P4Newsletter'
import P5Products   from '@/components/panels/P5Products'
import P7Testimonials   from '@/components/panels/P7Testimonials'
import P8About          from '@/components/panels/P8About'
import P8CTA            from '@/components/panels/P7CTA'

gsap.registerPlugin(ScrollTrigger)

const BG = [
  '#363231', // P1
  '#363231', // P3 Stats
  '#363231', // P4 Newsletter
  '#2a2827', // P5
  '#363231', // P7 Testimonials
  '#363231', // P8 About
  '#114B4D', // P8 CTA
]

export default function CinemaPage() {
  const [activePanel, setActivePanel] = useState(0)
  const activePanelRef                = useRef(0)
  const panelEls                      = useRef<(HTMLElement | null)[]>([])

  // cursor: none on the html element
  useEffect(() => {
    document.documentElement.classList.add('cinema')
    return () => document.documentElement.classList.remove('cinema')
  }, [])

  // Panel tracking + bg colour transitions
  // Small delay lets child ScrollTrigger pins register first
  useEffect(() => {
    const timer = setTimeout(() => {
      const nodes = document.querySelectorAll('[data-panel]')
      const kills: ScrollTrigger[] = []

      nodes.forEach((node, i) => {
        panelEls.current[i] = node as HTMLElement

        const st = ScrollTrigger.create({
          trigger: node,
          start:   'top 50%',
          end:     'bottom 50%',
          onEnter: () => {
            activePanelRef.current = i
            setActivePanel(i)
            gsap.to('html', { backgroundColor: BG[i], duration: 0.6, ease: 'power2.out' })
          },
          onEnterBack: () => {
            activePanelRef.current = i
            setActivePanel(i)
            gsap.to('html', { backgroundColor: BG[i], duration: 0.6, ease: 'power2.out' })
          },
        })
        kills.push(st)
      })

      ScrollTrigger.refresh()
      return () => kills.forEach(k => k.kill())
    }, 150)

    return () => clearTimeout(timer)
  }, [])

  // Arrow key navigation
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        const next = Math.min(activePanelRef.current + 1, 6)
        panelEls.current[next]?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        const prev = Math.max(activePanelRef.current - 1, 0)
        panelEls.current[prev]?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [])

  return (
    <>
      <Cursor />
      <ProgressBar />
      <CinemaNav />
      <SocialBar />
      <PanelIndex activePanel={activePanel} panelEls={panelEls.current} />

      <main>
        <P1Intro />
        <P3Stats />
        <P4Newsletter />
        <P5Products />
        <P7Testimonials />
        <P8About />
        <P8CTA />
      </main>
      <Footer />
    </>
  )
}
