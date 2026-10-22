import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import CinemaNav from "@/components/CinemaNav";
import Footer from "@/components/Footer";
import ArticleBody from "@/components/field-notes/ArticleBody";
import { getAllArticles, getArticleBySlug } from "@/lib/field-notes";

// Revalidate every 5 minutes so a newly-published article becomes visible
// without redeployment once its scheduledAt timestamp has passed.
export const revalidate = 300;

export async function generateStaticParams() {
  // Only pre-build currently-published articles. Future-scheduled articles are
  // served dynamically (dynamicParams defaults to true), so they never get
  // stored as static 404 files that ISR has to overwrite.
  return getAllArticles().map(a => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const url = `https://aylenmontenegro.com/field-notes/${article.slug}`;
  const ogImage = article.heroImage?.src ?? "/images/og-image.jpg";

  return {
    title: { absolute: `${article.title} | Aylen Montenegro` },
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title:         article.title,
      description:   article.description,
      type:          "article",
      url,
      publishedTime: article.publishedAt,
      modifiedTime:  article.updatedAt ?? article.publishedAt,
      authors:       ["Aylen Montenegro"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card:        "summary_large_image",
      title:       article.title,
      description: article.description,
      images:      [ogImage],
      creator:     "@aylenbuilds",
    },
    robots: article.draft
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug }  = await params;
  const article   = await getArticleBySlug(slug);
  if (!article) notFound();

  // Related: same section, exclude current article, take up to 3
  const related = getAllArticles()
    .filter(a => !a.draft && a.slug !== article.slug && a.section === article.section)
    .slice(0, 3);

  // If same-section related is thin, pad with other articles
  const relatedPadded = related.length >= 2
    ? related
    : [
        ...related,
        ...getAllArticles()
          .filter(a => !a.draft && a.slug !== article.slug && !related.find(r => r.slug === a.slug))
          .slice(0, 2 - related.length),
      ];

  const url = `https://aylenmontenegro.com/field-notes/${article.slug}`;

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type":       "BlogPosting",
        "@id":         url,
        "headline":    article.title,
        "description": article.description,
        "url":         url,
        "datePublished": article.publishedAt,
        "dateModified":  article.updatedAt ?? article.publishedAt,
        "author":    { "@id": "https://aylenmontenegro.com/#person" },
        "publisher": { "@id": "https://aylenmontenegro.com/#organization" },
        "isPartOf":  { "@id": "https://aylenmontenegro.com/field-notes#blog" },
        "image": article.heroImage?.src
          ? `https://aylenmontenegro.com${article.heroImage.src}`
          : "https://aylenmontenegro.com/images/og-image.jpg",
        "inLanguage": "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home",        "item": "https://aylenmontenegro.com" },
          { "@type": "ListItem", "position": 2, "name": "Field Notes", "item": "https://aylenmontenegro.com/field-notes" },
          { "@type": "ListItem", "position": 3, "name": article.title, "item": url },
        ],
      },
    ],
  };

  const hasTOC     = (article.headings?.length ?? 0) > 0;
  const hasHero    = !!article.heroImage?.src;
  const hasSidebar = hasTOC || relatedPadded.length > 0;

  return (
    <div className="fn-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <CinemaNav />

      <main id="main-content" tabIndex={-1}>
        {/* ── Back link — above hero ───────────────────────────── */}
        <div className="fn-article-back-row">
          <Link href="/field-notes" className="fn-article-back">
            ← Field Notes
          </Link>
        </div>

        {/* ── 16:9 hero image — above headline ────────────────── */}
        {hasHero && (
          <figure className="fn-article-hero-above">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.heroImage!.src}
              alt={article.heroImage!.alt}
              loading="eager"
              decoding="async"
            />
            {article.heroImage!.caption && (
              <figcaption>{article.heroImage!.caption}</figcaption>
            )}
          </figure>
        )}

        {/* ── Centered article header ─────────────────────────── */}
        <div className="fn-article-head">
          <div className="fn-article-eyebrow">
            {article.section && <span>{article.section}</span>}
            {article.section && <span className="fn-article-meta-dot" aria-hidden="true">·</span>}
            <span>{formatDate(article.publishedAt)}</span>
            {article.draft && (
              <span className="fn-article-draft-badge">Draft — not published</span>
            )}
          </div>

          <h1 className="fn-article-title">{article.title}</h1>

          {article.deck && (
            <p className="fn-article-deck">{article.deck}</p>
          )}

          <div className="fn-article-meta">
            <span>Aylen Montenegro</span>
            {article.readingTime && (
              <>
                <span className="fn-article-meta-dot" aria-hidden="true">·</span>
                <span>{article.readingTime} min read</span>
              </>
            )}
          </div>
        </div>

        {/* ── Prose + sidebar grid ─────────────────────────────── */}
        {hasSidebar ? (
          <div className="fn-article-grid">
            <div className="fn-article-prose">
              <ArticleBody article={article} />
            </div>

            <aside className="fn-article-rail" aria-label="Article navigation">
              {/* TOC */}
              {hasTOC && (
                <div>
                  <h2 className="fn-rail-heading">In this article</h2>
                  <ul className="fn-toc-list">
                    {article.headings!.map(h => (
                      <li
                        key={h.id}
                        className={`fn-toc-item${h.level === 3 ? ' fn-toc-item--h3' : ''}`}
                      >
                        <a href={`#${h.id}`}>{h.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related articles */}
              {relatedPadded.length > 0 && (
                <div>
                  <h2 className="fn-rail-heading">Related</h2>
                  <ul className="fn-related-list">
                    {relatedPadded.map(r => (
                      <li key={r.slug} className="fn-related-item">
                        <a href={`/field-notes/${r.slug}`}>
                          {r.section && <p className="fn-related-kicker">{r.section}</p>}
                          <p className="fn-related-title">{r.title}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        ) : (
          /* No sidebar — single column with max-width container */
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 var(--fn-gutter) 96px' }}>
            <ArticleBody article={article} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
