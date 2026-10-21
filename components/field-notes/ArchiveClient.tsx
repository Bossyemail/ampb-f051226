'use client'

import { useState, useMemo, useId } from 'react'
import type { ArticleMeta } from '@/lib/field-notes'
import DarkBandForm from './DarkBandForm'

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const DARK_BAND_QUOTE =
  "Sometimes the most expensive transaction isn't the one that falls apart. It's the one that closes, while quietly costing you relationships that took years to build."

// Editor's picks: hardcoded slugs; falls back to first two articles if not found
const EDITOR_PICK_SLUGS = [
  'the-most-expensive-client',
  'twenty-years-of-experience',
]

// ── Sub-components ────────────────────────────────────────────────────────────

function LeadStory({ article }: { article: ArticleMeta }) {
  const desc = article.archiveDescription ?? article.description
  return (
    <section className="fn-lead" aria-label="Lead story">
      <div className="fn-lead-content">
        {article.section && <p className="fn-lead-kicker">{article.section}</p>}
        <a href={`/field-notes/${article.slug}`} className="fn-lead-title">
          {article.title}
        </a>
        {(article.deck ?? desc) && (
          <p className="fn-lead-deck">{article.deck ?? desc}</p>
        )}
        <div className="fn-lead-meta">
          <span>Aylen Montenegro</span>
          <span className="fn-lead-meta-dot" aria-hidden="true">·</span>
          <span>{formatDate(article.publishedAt)}</span>
          {article.readingTime && (
            <>
              <span className="fn-lead-meta-dot" aria-hidden="true">·</span>
              <span>{article.readingTime} min read</span>
            </>
          )}
        </div>
      </div>
      <div className="fn-lead-image-col">
        {article.archiveImage?.src ? (
          <a
            href={`/field-notes/${article.slug}`}
            aria-hidden="true"
            tabIndex={-1}
            style={{ display: 'block', width: '100%' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.archiveImage.src}
              alt={article.archiveImage.alt}
              loading="eager"
              decoding="async"
            />
          </a>
        ) : (
          <div className="fn-lead-image-placeholder" aria-hidden="true" />
        )}
      </div>
    </section>
  )
}

function ThreeColumnRow({ articles }: { articles: ArticleMeta[] }) {
  return (
    <section className="fn-row" aria-label="Recent articles">
      {articles.map(article => {
        const desc = article.archiveDescription ?? article.description
        return (
          <div key={article.slug} className="fn-row-item">
            <a href={`/field-notes/${article.slug}`} className="fn-row-link">
              {/* Image on top */}
              {article.archiveImage?.src ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={article.archiveImage.src}
                  alt={article.archiveImage.alt}
                  className="fn-row-image"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="fn-row-image-placeholder" aria-hidden="true" />
              )}
              {article.section && <p className="fn-row-kicker">{article.section}</p>}
              <h3 className="fn-row-title">{article.title}</h3>
              {desc && <p className="fn-row-deck">{desc}</p>}
              <div className="fn-row-meta">
                <span>{formatDate(article.publishedAt)}</span>
                {article.readingTime && (
                  <span>{article.readingTime} min read</span>
                )}
              </div>
            </a>
          </div>
        )
      })}
    </section>
  )
}

function DarkBand() {
  return (
    <section className="fn-band" aria-label="Newsletter">
      <div className="fn-band-inner">
        <blockquote className="fn-band-quote">
          {DARK_BAND_QUOTE}
        </blockquote>
        <DarkBandForm />
      </div>
    </section>
  )
}

function ArchiveBand({
  articles,
  editorPicks,
  sections,
  onSectionClick,
}: {
  articles:       ArticleMeta[]
  editorPicks:    ArticleMeta[]
  sections:       string[]
  onSectionClick: (section: string) => void
}) {
  return (
    <section className="fn-archive" aria-label="Archive">
      <div className="fn-archive-inner">
        {/* River */}
        <div className="fn-archive-river">
          <h2 className="fn-archive-heading">All Articles</h2>
          {articles.map(article => {
            const desc = article.archiveDescription ?? article.description
            return (
              <a
                key={article.slug}
                href={`/field-notes/${article.slug}`}
                className="fn-list-item"
              >
                <div className="fn-list-image">
                  {article.archiveImage?.src ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={article.archiveImage.src}
                      alt={article.archiveImage.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="fn-list-image-placeholder" aria-hidden="true" />
                  )}
                </div>
                <div className="fn-list-text">
                  {article.section && <p className="fn-list-kicker">{article.section}</p>}
                  <h3 className="fn-list-title">{article.title}</h3>
                  {desc && <p className="fn-list-deck">{desc}</p>}
                  <div className="fn-list-meta">
                    <span>{formatDate(article.publishedAt)}</span>
                    {article.readingTime && (
                      <span>{article.readingTime} min read</span>
                    )}
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Sidebar */}
        <aside className="fn-archive-sidebar">
          {/* Editor's Picks */}
          {editorPicks.length > 0 && (
            <div className="fn-sidebar-section">
              <h3 className="fn-sidebar-heading">Editor&rsquo;s Picks</h3>
              <ul className="fn-picks-list">
                {editorPicks.map(pick => (
                  <li key={pick.slug} className="fn-pick-item">
                    <a href={`/field-notes/${pick.slug}`}>
                      {pick.section && <p className="fn-pick-kicker">{pick.section}</p>}
                      <p className="fn-pick-title">{pick.title}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section topics */}
          {sections.length > 0 && (
            <div className="fn-sidebar-section">
              <h3 className="fn-sidebar-heading">Browse by Section</h3>
              <ul className="fn-topics-list">
                {sections.map(section => (
                  <li key={section}>
                    <button
                      className="fn-topic-btn"
                      onClick={() => onSectionClick(section)}
                      type="button"
                    >
                      {section}
                      <span aria-hidden="true">→</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}

function FilteredResults({
  articles,
  query,
  activeSection,
  totalCount,
  searchResultsId,
}: {
  articles:       ArticleMeta[]
  query:          string
  activeSection:  string | null
  totalCount:     number
  searchResultsId: string
}) {
  const label = activeSection
    ? `${activeSection} — ${articles.length} of ${totalCount}`
    : `${articles.length}\u200A/\u200A${totalCount} article${totalCount === 1 ? '' : 's'}`

  return (
    <div className="fn-filter-results">
      <p
        id={searchResultsId}
        className="fn-filter-count"
        aria-live="polite"
        aria-atomic="true"
      >
        {label}
      </p>

      {articles.length === 0 ? (
        <p className="fn-filter-empty">
          No articles match{query ? ` \u201C${query}\u201D` : ' this filter'}.
        </p>
      ) : (
        <ol className="fn-filter-grid" aria-label="Filtered articles">
          {articles.map(article => {
            const desc = article.archiveDescription ?? article.description
            return (
              <li key={article.slug} className="fn-filter-entry">
                <a href={`/field-notes/${article.slug}`} className="fn-filter-link">
                  {article.section && <p className="fn-filter-kicker">{article.section}</p>}
                  <h2 className="fn-filter-title">{article.title}</h2>
                  {desc && <p className="fn-filter-desc">{desc}</p>}
                  <p className="fn-filter-date">{formatDate(article.publishedAt)}</p>
                </a>
              </li>
            )
          })}
        </ol>
      )}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function ArchiveClient({ articles }: { articles: ArticleMeta[] }) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [query, setQuery]                 = useState('')
  const searchResultsId                   = useId()

  const sections = useMemo(() => {
    const seen = new Set<string>()
    articles.forEach(a => { if (a.section) seen.add(a.section) })
    return Array.from(seen)
  }, [articles])

  const filtered = useMemo(() => {
    let result = articles
    if (activeSection) result = result.filter(a => a.section === activeSection)
    const q = query.trim().toLowerCase()
    if (q) result = result.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.bodyText.toLowerCase().includes(q)
    )
    return result
  }, [articles, activeSection, query])

  const isFiltering   = activeSection !== null || query.trim().length > 0
  const lead          = articles[0]
  const rowArticles   = articles.slice(1, 4)
  const latestDate    = articles[0]?.publishedAt

  const editorPicks = useMemo(() => {
    return EDITOR_PICK_SLUGS
      .map(slug => articles.find(a => a.slug === slug))
      .filter((a): a is ArticleMeta => a !== undefined)
  }, [articles])

  function handleSectionClick(section: string) {
    setActiveSection(prev => (prev === section ? null : section))
    setQuery('')
  }

  function formatMastheadDate(iso: string): string {
    const [year, month, day] = iso.split('-').map(Number)
    return new Date(year, month - 1, day).toLocaleDateString('en-US', {
      weekday: 'long',
      year:    'numeric',
      month:   'long',
      day:     'numeric',
    })
  }

  return (
    <>
      {/* ── Masthead ──────────────────────────────────────────────── */}
      <header className="fn-masthead" role="banner">
        {latestDate && (
          <p className="fn-masthead-date">{formatMastheadDate(latestDate)}</p>
        )}

        <h1 className="fn-pub-title">
          Field Notes<span className="fn-period" aria-hidden="true">.</span>
        </h1>

        <p className="fn-masthead-tag">
          Observations on real estate, work, judgment, and the people who make all three more complicated than necessary.
        </p>

        {/* Section nav — centered items */}
        <nav className="fn-section-nav" aria-label="Browse by section">
          <ul className="fn-section-links">
            <li>
              <button
                type="button"
                className={`fn-section-btn${activeSection === null && !query ? ' fn-active' : ''}`}
                onClick={() => { setActiveSection(null); setQuery('') }}
              >
                All
              </button>
            </li>
            {sections.map(section => (
              <li key={section}>
                <button
                  type="button"
                  className={`fn-section-btn${activeSection === section ? ' fn-active' : ''}`}
                  onClick={() => handleSectionClick(section)}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search — slim row beneath nav, right-aligned to content container */}
        <div className="fn-section-search" role="search" aria-label="Search Field Notes">
          <form className="fn-search-form" onSubmit={e => e.preventDefault()}>
            <input
              type="search"
              className="fn-search-input"
              placeholder="Search"
              value={query}
              onChange={e => { setQuery(e.target.value); setActiveSection(null) }}
              aria-label="Search Field Notes articles"
              aria-controls={searchResultsId}
              autoComplete="off"
              spellCheck={false}
            />
            <span className="fn-search-icon" aria-hidden="true">⌕</span>
          </form>
        </div>
      </header>

      {/* ── Content ───────────────────────────────────────────────── */}
      <main id="main-content" tabIndex={-1}>
        {isFiltering ? (
          <FilteredResults
            articles={filtered}
            query={query}
            activeSection={activeSection}
            totalCount={articles.length}
            searchResultsId={searchResultsId}
          />
        ) : (
          <>
            {lead && <LeadStory article={lead} />}
            {rowArticles.length > 0 && <ThreeColumnRow articles={rowArticles} />}
            <DarkBand />
            <ArchiveBand
              articles={articles}
              editorPicks={editorPicks}
              sections={sections}
              onSectionClick={handleSectionClick}
            />
          </>
        )}
      </main>
    </>
  )
}
