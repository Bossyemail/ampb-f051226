import type { Article } from "@/lib/field-notes";
import PullQuote from "./PullQuote";
import ArticleAuthorBox from "./ArticleAuthorBox";

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ── CTA configurations ────────────────────────────────────────────────────────

const CTA_CONFIG = {
  "snarkletter": {
    eyebrow: "Newsletter",
    heading: "The Snarkletter",
    body: "Real estate operations, contracts, and the occasional observation about how the industry actually works. Delivered when there is something worth saying.",
    label: "Subscribe",
    href: "/snarkletter",
  },
  "tc-services": {
    eyebrow: "Transaction Coordination",
    heading: "TC Services — Fit and Availability",
    body: "Contract-to-close transaction coordination for South Florida agents and teams. Capacity is limited. Start with the fit and availability form.",
    label: "View TC Services",
    href: "/tc-services",
  },
  "closeadmin": {
    eyebrow: "Software",
    heading: "CloseAdmin",
    body: "Transaction management software built for real estate professionals who need more than a checklist. Currently in development.",
    label: "Learn More",
    href: "/closeadmin",
  },
} as const;

function ArticleCTABlock({ article }: { article: Article }) {
  if (!article.cta) return null;

  const { type } = article.cta;

  if (type === "article") {
    return (
      <aside className="fn-cta">
        <div className="fn-cta-eyebrow">Related</div>
        <div className="fn-cta-heading">{article.cta.title}</div>
        <a href={`/field-notes/${article.cta.slug}`} className="fn-cta-link">
          Read article
        </a>
      </aside>
    );
  }

  const config = CTA_CONFIG[type as keyof typeof CTA_CONFIG];
  if (!config) return null;

  return (
    <aside className="fn-cta">
      <div className="fn-cta-eyebrow">{config.eyebrow}</div>
      <div className="fn-cta-heading">{config.heading}</div>
      <p className="fn-cta-body">{config.body}</p>
      <a href={config.href} className="fn-cta-link">
        {config.label}
      </a>
    </aside>
  );
}

// ── Pull quote interleaving ───────────────────────────────────────────────────
// Pull quotes are placed between paragraphs near the midpoint of the article body.
// Only the first pull quote is used; additional ones are ignored.
// Each pull quote must be an exact passage from the approved article text.

function BodyWithPullQuotes({
  bodyHtml,
  pullQuotes,
  isFeature,
}: {
  bodyHtml: string
  pullQuotes: string[]
  isFeature: boolean
}) {
  // Split on block-level boundaries to find insertion points.
  const segments = bodyHtml.split(/(?<=<\/(?:p|h[2-6]|ul|ol|blockquote)>)/i)

  if (pullQuotes.length === 0 || segments.length < 3) {
    return (
      <div
        className={`fn-body${isFeature ? ' fn-body--feature' : ''}`}
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    )
  }

  // Insert the first pull quote at roughly the midpoint of the body,
  // but never after the first or last segment.
  const midpoint = Math.floor(segments.length / 2)
  const insertAfter = Math.max(1, Math.min(midpoint, segments.length - 2))

  const result: React.ReactNode[] = []
  segments.forEach((segment, i) => {
    result.push(
      <div
        key={`seg-${i}`}
        className={i === 0 && isFeature ? 'fn-body--feature-first' : undefined}
        dangerouslySetInnerHTML={{ __html: segment }}
      />
    )
    if (i === insertAfter) {
      result.push(<PullQuote key="pq-0" text={pullQuotes[0]} />)
    }
  })

  return (
    <div className={`fn-body${isFeature ? ' fn-body--feature' : ''}`}>
      {result}
    </div>
  )
}

// ── Article body ──────────────────────────────────────────────────────────────

export default function ArticleBody({ article }: { article: Article }) {
  const isFeature  = article.layout === 'feature'
  const pullQuotes = article.pullQuotes ?? []

  return (
    <>
      {pullQuotes.length > 0 ? (
        <BodyWithPullQuotes
          bodyHtml={article.bodyHtml}
          pullQuotes={pullQuotes}
          isFeature={isFeature}
        />
      ) : (
        <div
          className={`fn-body${isFeature ? ' fn-body--feature' : ''}`}
          dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
        />
      )}

      <ArticleAuthorBox />

      {article.cta && <ArticleCTABlock article={article} />}

      {article.updatedAt && (
        <p className="fn-article-updated">
          Last updated {formatDate(article.updatedAt)}
        </p>
      )}
    </>
  );
}
