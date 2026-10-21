'use client'
import { useState, useCallback, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type Review = { quote: string; attr: string }

const COL1: Review[] = [
  { quote: 'The closer behind the closer.', attr: 'Nathalys F. · Coldwell Banker' },
  { quote: "She should charge more. Agents, buyers and sellers are all in GREAT hands with Aylen. MAKE TC'S GREAT AGAIN!", attr: 'Lourdes F. · VP of Lending' },
  { quote: "Rare to find true support in this town. Our luxury business moves fast and Aylen does not miss a beat. This is why she is on every deal we do.", attr: 'Laura C. & Seth C. · Luxury Specialists' },
  { quote: '8 years, 500+ deals. We now trust Aylen with every single transaction — always professional, always reliable.', attr: 'Sergio G. · Coldwell Banker' },
  { quote: "She has never missed a deadline. I've learned so much from her.", attr: 'Andres C. · Coldwell Banker' },
  { quote: "Smooth 4-week closing wouldn't have happened without her.", attr: 'Maggie S. · Coldwell Banker' },
  { quote: 'Working with Aylen has been a game-changer for my business.', attr: 'Maria T. · Keller Williams' },
  { quote: 'She is not just a transaction coordinator — she is the reason closings happen smoothly.', attr: 'Rosa P. · The Poler Group' },
  { quote: "I've told her she should charge more because of her expertise, professionalism and ability to prevent and solve problems.", attr: 'Lourdes F. · VP of Lending' },
  { quote: 'Aylen went above and beyond to help us find the perfect home. We signed during our lunch break and funded before end of day.', attr: 'Happy Buyer' },
  { quote: '10 years in the business and I am truly grateful that I met her. Reliable, trustworthy, knowledgeable.', attr: 'Sofia S. · Coldwell Banker' },
  { quote: 'She turned what could have been overwhelming into a smooth, stress-free process.', attr: 'Relieved Seller' },
  { quote: 'I needed to sell my home quickly. Aylen made it happen — we closed in just 30 days.', attr: 'Relieved Seller' },
  { quote: 'Working with Aylen has been an absolute standout experience. She brings a rare combination of precision, professionalism, and genuine care to every contract she handles. Reliable, proactive, and consistently excellent — she\'s an asset to any team.', attr: 'Maria R. · Closing Agent' },
]

const COL2: Review[] = [
  { quote: 'She is the heartbeat of every transaction — meticulous, proactive, always several steps ahead.', attr: 'Rosa P. · The Poler Group' },
  { quote: 'I would not dream of doing any deals without Aylen by my side.', attr: 'Gisell S. · Coldwell Banker' },
  { quote: 'Fast, sharp, and always on top of the details.', attr: 'Robert R. · Attorney' },
  { quote: 'World-class communication skills, unwavering professionalism, exceptional level of organization.', attr: 'Rachel I. · Coldwell Banker' },
  { quote: 'She anticipates needs before they arise and resolves challenges before they become problems.', attr: 'Judith L. · Coldwell Banker' },
  { quote: "Her consistency is unmatched. She's always ahead of every deadline.", attr: 'Drusso C. · Coldwell Banker' },
  { quote: 'Working with Aylen has transformed how I handle my real estate business.', attr: 'Andres E. · Coldwell Banker' },
  { quote: 'She is an absolute powerhouse always on top of everything. What most teams need multiple people for, Aylen does all on her own.', attr: 'Mia C. · Coldwell Banker' },
  { quote: "I've worked with many TCs but Aylen and her team are by far the best I've ever partnered with.", attr: 'Sergio G. · Coldwell Banker' },
  { quote: 'Her dedication to her work makes it a smooth transaction. Documentation always has all signatures and initials.', attr: 'Yudy S. · Coldwell Banker' },
  { quote: 'Aylen is incredibly efficient, knowledgeable, and professional, consistently managing each transaction with precision.', attr: 'Daniele G. · Coldwell Banker' },
  { quote: 'Back in 2009 when the market was in the toilet she found me a home for $25,000. Our family still lives here today.', attr: 'Happy Buyer' },
  { quote: 'Aylen consistently delivers the highest standard of service ensuring smooth and impeccable transactions.', attr: 'Rachel I. · Coldwell Banker' },
  { quote: 'Working with Aylen and the TC desk has been an absolute pleasure. She is proactive in foreseeing potential issues before they arise and handles them swiftly, ensuring every deal moves forward without a hitch.', attr: 'Jason B. · KW Coral Gables' },
]

const COL3: Review[] = [
  { quote: 'She stuck with us for a whole year through probate and foreclosure delays and never let us lose sight of the goal.', attr: 'Grateful Homebuyer' },
  { quote: "Other people wouldn't even return our calls. Aylen not only answered but answered every single question we threw her way.", attr: 'Denise M. · Happy Buyer' },
  { quote: 'She is someone I can truly trust every single day. I would work with Aylen 11 out of 10 times.', attr: 'Chase C. · Coldwell Banker' },
  { quote: 'Aylen made it happen — sold the inherited Coral Gables home in under 30 days. Fast, smooth, and done.', attr: 'Satisfied Seller' },
  { quote: 'She keeps the chaos under control and saves me more times than I can count.', attr: 'Nathalys F. · Coldwell Banker' },
  { quote: 'Having her oversee the details gives me complete peace of mind.', attr: 'Claudia W. · Coldwell Banker' },
  { quote: 'She was professional, precise, knowledgeable and kept us all on the ball.', attr: 'Maggie S. · Coldwell Banker' },
  { quote: 'She has the patience of a saint and her knowledge spans everything from A to Z.', attr: 'Chase C. · Coldwell Banker' },
  { quote: 'Timing wasn\'t on our side — market went wild — but Aylen stuck with us and we got the dream pool and tiki hut.', attr: 'Happy Seller & Buyer' },
  { quote: 'Communication is key in real estate and you go above and beyond to keep all parties informed.', attr: 'Debbie W. · Coldwell Banker' },
  { quote: 'She made everything smooth and stress-free. We couldn\'t have done it without her.', attr: 'Ms. Palmer · Happy Buyer' },
  { quote: 'A crucial asset to our real estate team. Five stars all the way.', attr: 'Edner F. · Coldwell Banker' },
  { quote: 'Working with you as a Transaction Coordinator has been an absolute game-changer — you stay ahead of every timeline and communicate with precision. Your involvement makes each transaction smoother, more efficient, and consistently stress-free.', attr: 'Melissa V. · Escrow Officer' },
  { quote: 'Aylen is reliable, knowledgeable, and always willing to go the extra mile to ensure everything gets done efficiently and correctly. An incredible asset to any team.', attr: 'Shannon S. · Escrow Support Specialist' },
]

function ReviewCard({ r }: { r: Review }) {
  return (
    <div style={{
      width:         '100%',
      flexShrink:    0,
      borderRadius:  '2px',
      border:        '0.5px solid rgba(239,235,226,0.1)',
      borderLeft:    '2px solid rgba(95,158,160,0.55)',
      background:    'rgba(239,235,226,0.04)',
      padding:       '20px 20px 20px 18px',
    }}>
      <p style={{
        fontFamily:  'var(--font-cormorant)',
        fontSize:    '16px',
        fontStyle:   'italic',
        lineHeight:  1.65,
        color:       'var(--cream)',
        margin:      '0 0 12px 0',
      }}>
        &ldquo;{r.quote}&rdquo;
      </p>
      <div style={{
        fontFamily:    'var(--font-dm-mono)',
        fontSize:      '9px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color:         'var(--teal-mid)',
        marginTop:     '8px',
      }}>
        {r.attr}
      </div>
    </div>
  )
}

function ScrollColumn({ reviews, duration, paused }: {
  reviews: Review[]
  duration: number
  paused: boolean
}) {
  const [mounted, setMounted]  = useState(false)
  const trackRef  = useRef<HTMLDivElement>(null)
  const origRef   = useRef<HTMLDivElement>(null)
  const tweenRef  = useRef<gsap.core.Tween | null>(null)
  // Ref so resize handler always reads current pause state without a stale closure
  const pausedRef = useRef(paused)
  // Last measured scroll distance — lets ResizeObserver skip no-op recalculations
  const distRef   = useRef(0)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { pausedRef.current = paused }, [paused])

  useEffect(() => {
    if (!mounted) return
    const track = trackRef.current
    const orig  = origRef.current
    if (!track || !orig) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // canceled flag prevents the fonts.ready promise from firing after unmount
    let canceled = false

    // Kill any existing tween, reset position, measure, and restart.
    // Called both on initial setup and whenever origRef's height changes.
    const startTween = () => {
      tweenRef.current?.kill()
      gsap.set(track, { y: 0 })
      distRef.current = orig.offsetHeight  // includes paddingBottom:18px
      tweenRef.current = gsap.to(track, {
        y:        -distRef.current,
        duration,
        ease:     'none',
        repeat:   -1,
        paused:   pausedRef.current,
      })
    }

    // ResizeObserver: skip the initial observation callback (height hasn't
    // changed yet — we just measured it in startTween), then debounce
    // subsequent fires and only recalculate if height actually changed.
    let roInitialFired = false
    let debounceTimer: ReturnType<typeof setTimeout>
    const ro = new ResizeObserver(() => {
      if (!roInitialFired) { roInitialFired = true; return }
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        if (!canceled && orig.offsetHeight !== distRef.current) startTween()
      }, 150)
    })

    const setup = () => {
      if (canceled) return
      startTween()
      ro.observe(orig)
    }

    // Measure after fonts have loaded so Cormorant card heights are final
    if (document.fonts?.ready) {
      document.fonts.ready.then(setup)
    } else {
      setup()
    }

    return () => {
      canceled = true
      tweenRef.current?.kill()
      ro.disconnect()
      clearTimeout(debounceTimer)
    }
  }, [mounted]) // eslint-disable-line react-hooks/exhaustive-deps

  // Sync pause / resume when parent toggles
  useEffect(() => {
    if (!tweenRef.current) return
    paused ? tweenRef.current.pause() : tweenRef.current.resume()
  }, [paused])

  return (
    <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
      {/* No gap on the outer track — each group is self-contained with paddingBottom */}
      <div ref={trackRef} style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Original group — paddingBottom:18px creates the trailing inter-group gap */}
        <div ref={origRef} style={{ display: 'flex', flexDirection: 'column', gap: '18px', paddingBottom: '18px' }}>
          {reviews.map((r, i) => <ReviewCard key={`a-${i}`} r={r} />)}
        </div>
        {/* Clone set — injected client-side only so crawlers see one copy per testimonial */}
        {mounted && (
          <div aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: '18px', paddingBottom: '18px' }}>
            {reviews.map((r, i) => <ReviewCard key={`b-${i}`} r={r} />)}
          </div>
        )}
      </div>
    </div>
  )
}

export default function P7Testimonials() {
  const [paused, setPaused] = useState(false)
  const toggle = useCallback(() => setPaused(p => !p), [])

  const sectionRef   = useRef<HTMLElement>(null)
  const eyebrowRef   = useRef<HTMLDivElement>(null)
  const voices42Ref  = useRef<HTMLSpanElement>(null)
  const verdictRef   = useRef<HTMLSpanElement>(null)
  const columnsRef   = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    const mm = gsap.matchMedia()

    mm.add('(max-width: 768px)', () => {
      // Mobile: reveal everything immediately, no scroll trigger
      gsap.set(eyebrowRef.current,  { opacity: 1, y: 0 })
      gsap.set([voices42Ref.current, verdictRef.current], { y: 0 })
      gsap.set(columnsRef.current,  { opacity: 1, y: 0 })
    })

    mm.add('(min-width: 769px)', () => {
      // Desktop: scroll-triggered animations
      gsap.fromTo(eyebrowRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 70%' },
        }
      )
      gsap.fromTo(voices42Ref.current,
        { y: '105%' },
        {
          y: 0, duration: 0.9, ease: 'cubic-bezier(0.16,1,0.3,1)',
          scrollTrigger: { trigger: section, start: 'top 70%' },
        }
      )
      gsap.fromTo(verdictRef.current,
        { y: '105%' },
        {
          y: 0, duration: 0.9, ease: 'cubic-bezier(0.16,1,0.3,1)', delay: 0.12,
          scrollTrigger: { trigger: section, start: 'top 70%' },
        }
      )
      gsap.fromTo(columnsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 60%' },
        }
      )
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      data-panel="5"
      onClick={toggle}
      title={paused ? 'Click to resume' : 'Click to pause'}
      style={{
        background:  '#363231',
        height:      '100vh',
        overflow:    'hidden',
        cursor:      'pointer',
        position:    'relative',
        display:     'flex',
        flexDirection: 'column',
        padding:     '0 0 48px',
        gap:         '32px',
      }}
    >
      {/* Top fade */}
      <div style={{
        position:   'absolute',
        top:        0,
        left:       0,
        right:      0,
        height:     '120px',
        background: 'linear-gradient(to bottom, var(--black) 0%, transparent 100%)',
        zIndex:     2,
        pointerEvents: 'none',
      }} />
      {/* Bottom fade — blends into section below */}
      <div style={{
        position:      'absolute',
        bottom:        0,
        left:          0,
        right:         0,
        height:        '120px',
        background:    'linear-gradient(to top, #363231 0%, transparent 100%)',
        zIndex:        2,
        pointerEvents: 'none',
      }} />

      {/* Transition fade into P8About */}
      <div style={{
        position:      'absolute',
        bottom:        0,
        left:          0,
        right:         0,
        height:        '300px',
        background:    'linear-gradient(to bottom, transparent 0%, #363231 100%)',
        zIndex:        20,
        pointerEvents: 'none',
      }} />

      {/* Header */}
      <div className="testimonials-header" style={{ flexShrink: 0, zIndex: 3, position: 'relative', paddingTop: '96px', paddingLeft: '80px', paddingRight: '6%', maxWidth: '960px' }}>
        <div ref={eyebrowRef} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px', opacity: 0 }}>
          <div style={{ width: '40px', height: '0.5px', background: 'var(--teal-mid)', flexShrink: 0 }} />
          <span style={{
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      '11px',
            letterSpacing: '0.12em',
            color:         'var(--teal-mid)',
            textTransform: 'uppercase',
          }}>
            What agents say
          </span>
        </div>
        <h2 style={{
          fontFamily:    'var(--font-cormorant)',
          fontSize:      'clamp(32px, 4vw, 56px)',
          fontWeight:    300,
          color:         'var(--cream)',
          letterSpacing: '-0.02em',
          lineHeight:    1,
          margin:        '0 0 20px 0',
          display:       'flex',
          flexWrap:      'wrap',
          gap:           '0.25em',
        }}>
          <span style={{ overflow: 'hidden', display: 'inline-block' }}>
            <span ref={voices42Ref} style={{ display: 'inline-block', transform: 'translateY(105%)' }}>
              42 Voices.
            </span>
          </span>
          {' '}
          <span style={{ overflow: 'hidden', display: 'inline-block' }}>
            <em><span ref={verdictRef} style={{ display: 'inline-block', transform: 'translateY(105%)' }}>
              One verdict.
            </span></em>
          </span>
        </h2>
      </div>

      {/* Columns */}
      <div ref={columnsRef} className="section-pad-inner" style={{
        display:  'flex',
        gap:      '24px',
        flex:     1,
        minHeight: 0,
        position: 'relative',
        zIndex:   1,
        opacity:  0,
        paddingLeft: '80px', paddingRight: '6%',
      }}>
        {/* Top fade — matches bottom fade height for symmetry */}
        <div style={{
          position:      'absolute',
          top:           0,
          left:          0,
          right:         0,
          height:        '120px',
          background:    'linear-gradient(to bottom, #363231 0%, transparent 100%)',
          zIndex:        10,
          pointerEvents: 'none',
        }} />
        <ScrollColumn reviews={COL1} duration={100} paused={paused} />
        <div className="mobile-hide" style={{ flex: 1, overflow: 'hidden' }}>
          <ScrollColumn reviews={COL2} duration={78} paused={paused} />
        </div>
        <div className="mobile-hide" style={{ flex: 1, overflow: 'hidden' }}>
          <ScrollColumn reviews={COL3} duration={62} paused={paused} />
        </div>
      </div>
    </section>
  )
}
