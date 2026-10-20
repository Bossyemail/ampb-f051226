import type { ArticleMeta } from "@/lib/field-notes";

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <li>
      <a href={`/field-notes/${article.slug}`} className="fn-card">
        <div className="fn-card-meta">
          <span>{formatDate(article.publishedAt)}</span>
          {article.draft && (
            <span className="fn-card-draft-badge">Draft</span>
          )}
        </div>
        <h2 className="fn-card-title">{article.title}</h2>
        <p className="fn-card-description">{article.description}</p>
      </a>
    </li>
  );
}
