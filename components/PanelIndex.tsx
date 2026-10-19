'use client'

interface Props {
  activePanel: number
  panelEls:    (HTMLElement | null)[]
  total?:      number
}

export default function PanelIndex({ activePanel, panelEls, total = 6 }: Props) {
  const go = (i: number) => panelEls[i]?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="mobile-hide" style={{
      position:  'fixed',
      right:     '10px',
      top:       '50%',
      transform: 'translateY(-50%)',
      display:   'flex',
      flexDirection: 'column',
      gap:       '12px',
      zIndex:    200,
    }}>
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => go(i)}
          aria-label={`Go to panel ${i + 1}`}
          style={{
            width:        '6px',
            height:       '6px',
            borderRadius: '50%',
            border:       'none',
            padding:      0,
            background:   activePanel === i ? 'var(--cream)' : 'rgba(239,235,226,0.35)',
            opacity:      1,
            transform:    activePanel === i ? 'scale(1.8)' : 'scale(1)',
            transition:   'all 0.3s ease',
            cursor:       'pointer',
          }}
        />
      ))}
    </div>
  )
}
