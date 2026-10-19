'use client'
import CinemaNav from '@/components/CinemaNav'
import SocialBar from '@/components/SocialBar'
import Footer    from '@/components/Footer'

// ─── LegalSection ─────────────────────────────────────────────────────────────
// Use this inside each page's children to render a titled prose block.
export function LegalSection({ heading, children }: { heading?: string; children: React.ReactNode }) {
  return (
    <div style={{
      maxWidth:     '680px',
      paddingTop:   '52px',
      paddingBottom:'52px',
      borderBottom: '0.5px solid rgba(239,235,226,0.06)',
    }}>
      {heading && (
        <p style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase' as const,
          color:         '#5f9ea0',
          margin:        '0 0 20px 0',
        }}>
          {heading}
        </p>
      )}
      <div className="legal-body" style={{
        fontFamily: 'var(--font-dm-mono)',
        fontSize:   '13px',
        color:      'rgba(239,235,226,0.65)',
        lineHeight: 1.85,
      }}>
        {children}
      </div>
    </div>
  )
}

// ─── LegalPage ────────────────────────────────────────────────────────────────
interface Props {
  eyebrow:     string
  headline:    string
  subhead:     string
  lastUpdated: string
  children:    React.ReactNode
}

export default function LegalPage({ eyebrow, headline, subhead, lastUpdated, children }: Props) {
  return (
    <div style={{ background: '#363231', minHeight: '100vh' }}>
      <CinemaNav />
      <SocialBar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="legal-pad" style={{ position: 'relative', paddingTop: '136px', paddingBottom: '60px' }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '10px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase' as const,
          color:         'var(--cognac)',
          margin:        '0 0 20px 0',
        }}>
          {eyebrow}
        </p>

        {/* Headline */}
        <h1 style={{
          fontFamily:    'var(--font-cormorant)',
          fontSize:      'clamp(40px, 5.5vw, 72px)',
          fontWeight:    300,
          color:         'var(--cream)',
          letterSpacing: '-0.02em',
          lineHeight:    1,
          margin:        '0 0 28px 0',
        }}>
          {headline}
        </h1>

        {/* Subhead */}
        <p style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize:   '13px',
          fontStyle:  'italic',
          color:      'rgba(239,235,226,0.5)',
          lineHeight: 1.75,
          margin:     '0 0 36px 0',
          maxWidth:   '520px',
        }}>
          {subhead}
        </p>

        {/* Last updated */}
        <p style={{
          fontFamily:    'var(--font-dm-mono)',
          fontSize:      '10px',
          letterSpacing: '0.12em',
          color:         'rgba(239,235,226,0.28)',
          margin:        0,
        }}>
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* Divider */}
      <div style={{
        height:     '0.5px',
        background: 'rgba(239,235,226,0.1)',
        margin:     '0 80px 0 80px',
      }} />

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <main className="legal-pad" style={{ paddingTop: '0', paddingBottom: '96px' }}>
        {children}
      </main>

      <Footer />
    </div>
  )
}
