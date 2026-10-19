'use client'

const LANES = [
  {
    eyebrow:  'For Agents',
    heading:  "I\u2019m an agent,\nand files keep slipping.",
    sub:      'You close volume and need someone running the file\n\u2014 not another app to check.',
    cta:      'See TC Services \u2192',
    href:     '/tc-services',
    image:    '/images/tc-services-home.jpg',
    overlay:  'linear-gradient(to top, rgba(17,75,77,0.65) 0%, rgba(17,75,77,0.35) 45%, rgba(17,75,77,0.1) 100%)',
    imgPos:   'center 20%',
    bg:       '#114B4D',
  },
  {
    eyebrow:  'For Transaction Coordinators',
    heading:  "I\u2019m a TC, and I\u2019m tired of being\nthe last line of defense.",
    sub:      "CloseAdmin. Built by someone who\u2019s actually done the job.",
    badge:    'Private Beta',
    cta:      'See CloseAdmin \u2192',
    href:     '/closeadmin',
    image:    '/images/tc-services-final-hero-bg.jpg',
    overlay:  'linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)',
    imgPos:   'center top',
    bg:       '#8B5E3C',
  },
  {
    eyebrow:  'For the People Who Actually Do the Work',
    heading:  "I just want the unfiltered version\nof what\u2019s actually happening.",
    sub:      'No pitch, no funnel \u2014 just what\u2019s breaking in real files this week.',
    cta:      'Get the Snarkletter \u2192',
    href:     '/snarkletter',
    image:    '/images/panel-4-image.jpg',
    overlay:  'linear-gradient(to top, rgba(17,75,77,0.65) 0%, rgba(17,75,77,0.35) 45%, rgba(17,75,77,0.1) 100%)',
    imgPos:   'center top',
    bg:       '#363231',
  },
]

export default function PLanePanels() {
  return (
    <>
      {LANES.map((lane, i) => (
        <section
          key={lane.href}
          data-panel={`lane-${i + 1}`}
          style={{
            background:     lane.bg,
            height:         '70vh',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            position:       'relative',
            overflow:       'hidden',
          }}
        >
          {/* Background image (if provided) */}
          {lane.image && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={lane.image}
              alt=""
              style={{
                position:       'absolute',
                inset:          0,
                width:          '100%',
                height:         '100%',
                objectFit:      'cover',
                objectPosition: lane.imgPos ?? 'center',
                zIndex:         0,
              }}
            />
          )}

          {/* Colour overlay (if image present) */}
          {lane.overlay && (
            <div style={{
              position:   'absolute',
              inset:      0,
              background: lane.overlay,
              zIndex:     1,
              pointerEvents: 'none',
            }} />
          )}

          {/* Central radial scrim — text legibility over photo */}
          <div style={{
            position:      'absolute',
            inset:         0,
            background:    'radial-gradient(ellipse 70% 65% at 50% 40%, rgba(20,18,17,0.55) 0%, transparent 100%)',
            zIndex:        2,
            pointerEvents: 'none',
          }} />

          {/* Bottom fade — blends last panel into the section below (charcoal #363231) */}
          {i === LANES.length - 1 && (
            <div style={{
              position:      'absolute',
              bottom:        0,
              left:          0,
              right:         0,
              height:        '180px',
              background:    'linear-gradient(to bottom, transparent 0%, #363231 100%)',
              zIndex:        3,
              pointerEvents: 'none',
            }} />
          )}

          {/* Hairline top rule */}
          <div style={{
            position:      'absolute',
            top:           0,
            left:          0,
            right:         0,
            height:        '0.5px',
            background:    'rgba(239,235,226,0.08)',
            zIndex:        2,
            pointerEvents: 'none',
          }} />

          {/* Content */}
          <div className="plane-content" style={{
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
            textAlign:     'center',
            padding:       '0 10vw',
            position:      'relative',
            zIndex:        4,
            marginTop:     '-160px',
          }}>
            {/* Eyebrow badge */}
            <span className="plane-eyebrow" style={{
              display:       'inline-block',
              fontFamily:    'var(--font-dm-mono)',
              fontSize:      '10px',
              letterSpacing: '0.25em',
              color:         'var(--cream)',
              textTransform: 'uppercase',
              background:    'rgba(54,50,49,0.45)',
              border:        '0.5px solid rgba(239,235,226,0.25)',
              padding:       '7px 16px',
              marginBottom:  '40px',
            }}>
              {lane.eyebrow}
            </span>

            {/* Heading */}
            <h2 style={{
              fontFamily:    'var(--font-cormorant)',
              fontWeight:    300,
              fontSize:      'clamp(32px, 4vw, 56px)',
              color:         'var(--cream)',
              letterSpacing: '-0.02em',
              lineHeight:    1.05,
              whiteSpace:    'pre-line',
              margin:        '0 0 32px 0',
            }}>
              {lane.heading}
            </h2>

            {/* Subhead */}
            <p style={{
              fontFamily:  'var(--font-dm-mono)',
              fontSize:    '13px',
              lineHeight:  1.85,
              color:       'rgba(239,235,226,0.65)',
              maxWidth:    '480px',
              margin:      '0 0 40px 0',
              whiteSpace:  'pre-line',
            }}>
              {lane.sub}
            </p>

            {/* Private Beta label — subtle, no badge chrome */}
            {'badge' in lane && lane.badge && (
              <p style={{
                fontFamily:    'var(--font-dm-mono)',
                fontSize:      '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color:         'rgba(239,235,226,0.35)',
                margin:        '-24px 0 32px 0',
                fontStyle:     'italic',
              }}>
                {lane.badge}
              </p>
            )}

            {/* CTA */}
            <a href={lane.href} className="btn-teal" style={{
              display:       'inline-block',
              fontFamily:    'var(--font-dm-mono)',
              fontSize:      '10px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding:       '14px 36px',
            }}>
              {lane.cta}
            </a>
          </div>
        </section>
      ))}
    </>
  )
}
