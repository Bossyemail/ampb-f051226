'use client'

export default function PSearchSection() {
  return (
    <section className="search-section-pad" style={{
      background:  '#363231',
      minHeight:   '100vh',
      padding:     '0 16%',
      borderTop:   '0.5px solid rgba(239,235,226,0.06)',
      display:     'flex',
      alignItems:  'center',
      justifyContent: 'center',
    }}>
      <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>

        {/* Eyebrow */}
        <div style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '9px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color:         'var(--cognac)',
          marginBottom:  '20px',
          opacity:       0.8,
        }}>
          Plainly
        </div>

        <h2 style={{
          fontFamily:    'var(--font-cormorant)',
          fontSize:      'clamp(22px, 2.8vw, 32px)',
          fontWeight:    300,
          color:         'rgba(239,235,226,0.7)',
          lineHeight:    1.3,
          margin:        '0 0 32px 0',
          letterSpacing: '-0.01em',
        }}>
          South Florida transaction coordination, plainly.
        </h2>

        {[
          'I provide contract-to-close real estate transaction coordination for agents and brokerages throughout Miami-Dade, Broward, and Palm Beach County.',
          'Since 2004, I have supported more than 3,000 closings by managing critical deadlines, transaction documents and signatures, lender and title follow-up, condominium and HOA requirements, closing preparation, and brokerage compliance files.',
          'I also build real estate operations software — including CloseAdmin — based on the systems I needed after years of managing transactions firsthand.',
        ].map((text, i) => (
          <p key={i} style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize:   '13px',
            fontWeight: 300,
            lineHeight: 1.85,
            color:      'rgba(239,235,226,0.60)',
            margin:     i < 2 ? '0 0 1.4em 0' : '0',
            textWrap:   'pretty',
          }}>
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}
