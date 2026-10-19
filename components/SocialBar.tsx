'use client'

const LINKS = [
  { label: 'Email',     href: 'mailto:hello@aylenmontenegro.com' },
  { label: 'Instagram', href: 'https://instagram.com/aylenbuilds' },
  { label: 'YouTube',   href: 'https://youtube.com/@aylenmontenegropa' },
  { label: 'Threads',   href: 'https://threads.net/@aylenbuilds' },
]

const linkStyle: React.CSSProperties = {
  fontFamily:    'var(--font-dm-mono)',
  fontSize:      '9px',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color:         'rgba(239,235,226,0.7)',
  textDecoration: 'none',
  writingMode:   'vertical-rl',
  transition:    'color 0.2s',
}

const lineStyle: React.CSSProperties = {
  width:      '0.5px',
  height:     '48px',
  background: 'rgba(239,235,226,0.4)',
}

export default function SocialBar() {
  return (
    <div className="mobile-hide" style={{
      position:      'fixed',
      left:          '28px',
      top:           '62%',
      zIndex:        400,
      display:       'flex',
      flexDirection: 'column',
      alignItems:    'center',
      gap:           '20px',
    }}>
      <div style={{ ...lineStyle, marginBottom: '8px' }} />

      {LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--cream)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,235,226,0.7)')}
        >
          {label}
        </a>
      ))}

      <div style={{ ...lineStyle, marginTop: '8px' }} />
    </div>
  )
}
