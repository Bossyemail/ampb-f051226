'use client'

export default function Footer({ hideSocial, easterEgg }: { hideSocial?: boolean; easterEgg?: boolean } = {}) {
  const linkBase: React.CSSProperties = {
    display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '12px',
    color: 'rgba(239,235,226,0.5)', textDecoration: 'none', marginBottom: '12px', transition: 'color 0.2s',
  }
  const colHead: React.CSSProperties = {
    display: 'block', fontFamily: 'var(--font-dm-mono)', fontSize: '9px',
    letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cognac)', marginBottom: '20px',
  }
  const hIn  = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'var(--cream)' }
  const hOut = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = 'rgba(239,235,226,0.5)' }

  return (
    <footer style={{ background: '#2a2827', position: 'relative' }}>

      {/* Seam tab — easter egg, shown only on homepage and Snarkletter */}
      {easterEgg && <div className="seam-tab" style={{
        position:   'absolute',
        top:        0,
        right:      0,
        transform:  'translateY(-100%)',
        background: '#2a2827',
        padding:    '16px 24px',
        zIndex:     10,
      }}>
        <div style={{
          fontFamily:  'var(--font-cormorant)',
          fontSize:    '28px',
          fontWeight:  600,
          color:       'var(--cream)',
          lineHeight:  1,
        }}>
          Nobody
        </div>
        <div style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color:         'rgba(239,235,226,0.65)',
          marginTop:     '5px',
        }}>
          reads this
        </div>
      </div>}
      <div className="footer-cols" style={{ padding: '64px 64px 64px 80px', display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '8%' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cream)', marginBottom: '16px' }}>Aylen Montenegro</div>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '12px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(239,235,226,0.60)', maxWidth: '280px', margin: '0 0 16px 0' }}>
            Aylen Montenegro — transaction coordination and operational software for South Florida real estate.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(239,235,226,0.55)', maxWidth: '280px', margin: '0 0 28px 0' }}>
            Miami, Florida. Serving Miami-Dade, Broward, and Palm Beach.
          </p>
          <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '11px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(239,235,226,0.55)', maxWidth: '280px', margin: '0 0 28px 0' }}>
            The operational spine for real estate professionals closing real volume.
          </p>
        </div>
        <div>
          <span style={colHead}>Explore</span>
          {[
            { label: 'TC Services',  href: '/tc-services'  },
            { label: 'CloseAdmin',   href: '/closeadmin'   },
            { label: 'Snarkletter',  href: '/snarkletter'  },
            { label: 'About',        href: '/about'        },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={linkBase} onMouseEnter={hIn} onMouseLeave={hOut}>{label}</a>
          ))}
        </div>
        <div>
          <span style={colHead}>Legal</span>
          {[
            { label: 'Privacy Policy',       href: '/privacy'               },
            { label: 'Terms & Conditions',   href: '/terms'                 },
            { label: 'Affiliate Disclosure', href: '/affiliate-disclosure'  },
            { label: 'Accessibility',        href: '/accessibility'         },
            { label: 'Data & Security',      href: '/data-security'         },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={linkBase} onMouseEnter={hIn} onMouseLeave={hOut}>{label}</a>
          ))}
        </div>
      </div>
      <div className="footer-bottom-row" style={{ borderTop: '0.5px solid rgba(239,235,226,0.08)', padding: '24px 64px 24px 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', color: 'rgba(239,235,226,0.2)' }}>© {new Date().getFullYear()} Aylen Montenegro. All rights reserved.</span>
        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '9px', color: 'rgba(239,235,226,0.2)' }}>Built in Miami. Engineered for every closing table in Florida.</span>
      </div>
      <div className="footer-disclaimer" style={{ padding: '0 64px 72px 80px' }}>
        <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '10px', lineHeight: 1.7, color: 'rgba(239,235,226,0.25)', maxWidth: '800px', margin: '24px 0 0 0' }}>
          Information on this website is provided for general educational and operational purposes and does not constitute legal, tax, financial, brokerage, or professional advice. Users should confirm transaction-specific requirements with their broker, attorney, title professional, lender, or other appropriate adviser.
        </p>
      </div>
    </footer>
  )
}
