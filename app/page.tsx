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
import P7Testimonials   from '@/components/panels/P7Testimonials'
import P8About          from '@/components/panels/P8About'
import PSearchSection   from '@/components/panels/PSearchSection'
import PLanePanels     from '@/components/panels/PLanePanels'
import P8CTA            from '@/components/panels/P7CTA'

gsap.registerPlugin(ScrollTrigger)

const BG = [
  '#363231', // 0  P1 Intro
  '#000000', // 1  P3 Stats
  '#114B4D', // 2  Lane: Agents
  '#363231', // 3  Lane: Brokerages
  '#8B5E3C', // 4  Lane: TCs
  '#363231', // 5  Lane: Everyone Else
  '#363231', // 6  P7 Testimonials
  '#363231', // 7  P8 About
  '#114B4D', // 8  P8 CTA
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
        const next = Math.min(activePanelRef.current + 1, 8)
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
      <PanelIndex activePanel={activePanel} panelEls={panelEls.current} total={9} />

      <main>
        <P1Intro />
        <P3Stats />
        <PLanePanels />
        <P7Testimonials />
        <P8About />
        <PSearchSection />
        <P8CTA />
      </main>
      <Footer easterEgg />
    </>
  )
}
