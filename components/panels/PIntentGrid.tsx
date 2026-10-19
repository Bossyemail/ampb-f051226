'use client'

const ITEMS = [
  {
    num:  '01',
    head: "I\u2019m an agent, and files keep slipping.",
    body: "You close volume and need someone running the file \u2014 not another app to check.",
    cta:  'See TC Services \u2192',
    href: '/tc-services',
  },
  {
    num:  '02',
    head: "I\u2019m a TC, and I\u2019m tired of being the last line of defense.",
    body: "Tools built by someone who\u2019s done your job, not a product team guessing at it.",
    cta:  'See CloseAdmin \u2192',
    href: '/closeadmin',
  },
  {
    num:  '03',
    head: "I just want the unfiltered version of what\u2019s actually happening.",
    body: "No pitch, no funnel \u2014 just what\u2019s breaking in real files this week.",
    cta:  'Get the Snarkletter \u2192',
    href: '/snarkletter',
  },
]

export default function PIntentGrid() {
  return (
    <section style={{
      background: '#363231',
      borderTop:  '0.5px solid rgba(239,235,226,0.06)',
    }}>
      {/* Inner wrapper — cinema CSS zeroes padding on section elements, so padding lives here */}
      <div style={{ width: '100%', padding: '96px 6%' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--teal)', flexShrink: 0 }} />
          <span style={{
            fontFamily:    'var(--font-dm-mono)',
            fontSize:      '9px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color:         'rgba(239,235,226,0.5)',
          }}>
            Choose Your Lane
          </span>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily:    'var(--font-cormorant)',
          fontWeight:    300,
          fontSize:      'clamp(28px, 3vw, 42px)',
          color:         'var(--cream)',
          lineHeight:    1.15,
          letterSpacing: '-0.01em',
          margin:        '0 0 48px 0',
        }}>
          Tell me what&apos;s actually broken.
        </h2>

        {/* List */}
        <div>
          {ITEMS.map(({ num, head, body, cta, href }) => (
            <a
              key={num}
              href={href}
              style={{
                display:        'flex',
                alignItems:     'flex-start',
                gap:            '32px',
                padding:        '32px 0',
                borderTop:      '0.5px solid rgba(188,175,175,0.3)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.querySelector<HTMLElement>('[data-head]')!.style.color = 'var(--cream)'
                el.querySelector<HTMLElement>('[data-cta]')!.style.color  = 'var(--teal)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.querySelector<HTMLElement>('[data-head]')!.style.color = 'rgba(239,235,226,0.85)'
                el.querySelector<HTMLElement>('[data-cta]')!.style.color  = 'var(--teal-mid)'
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize:   '32px',
                fontStyle:  'italic',
                color:      'var(--teal-mid)',
                flexShrink: 0,
                paddingTop: '3px',
                width:      '52px',
              }}>
                {num}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  data-head
                  style={{
                    fontFamily:   'var(--font-cormorant)',
                    fontSize:     'clamp(18px, 1.8vw, 24px)',
                    fontWeight:   400,
                    color:        'rgba(239,235,226,0.85)',
                    lineHeight:   1.2,
                    marginBottom: '10px',
                    transition:   'color 0.2s',
                  }}
                >
                  {head}
                </div>
                <p style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize:   '12px',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color:      'rgba(239,235,226,0.5)',
                  margin:     '0 0 16px 0',
                }}>
                  {body}
                </p>
                <span
                  data-cta
                  style={{
                    fontFamily:    'var(--font-dm-mono)',
                    fontSize:      '10px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color:         'var(--teal-mid)',
                    transition:    'color 0.2s',
                  }}
                >
                  {cta}
                </span>
              </div>
            </a>
          ))}

          {/* Bottom rule */}
          <div style={{ borderTop: '0.5px solid rgba(188,175,175,0.3)' }} />
        </div>

      </div>
      </div>
    </section>
  )
}
