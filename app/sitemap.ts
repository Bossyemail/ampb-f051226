import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/field-notes'

// Revalidate hourly so newly published articles appear in the sitemap
// without redeployment.
export const revalidate = 3600

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aylenmontenegro.com'

  // ── Published articles ─────────────────────────────────────────────────────
  // getAllArticles() already excludes drafts in production.
  // Use the actual publication/update date from frontmatter.
  const articleEntries: MetadataRoute.Sitemap = getAllArticles().map(article => ({
    url:             `${baseUrl}/field-notes/${article.slug}`,
    lastModified:    new Date(article.updatedAt ?? article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority:        0.6,
  }))

  return [
    // ── Core ──────────────────────────────────────────────────────────────────
    { url: baseUrl,                              changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/tc-services`,             changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/closeadmin`,              changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/snarkletter`,             changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`,                   changeFrequency: 'monthly', priority: 0.7 },
    // ── Field Notes ───────────────────────────────────────────────────────────
    { url: `${baseUrl}/field-notes`,             changeFrequency: 'weekly',  priority: 0.7 },
    ...articleEntries,
    // ── Legal ─────────────────────────────────────────────────────────────────
    { url: `${baseUrl}/privacy`,                 changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${baseUrl}/terms`,                   changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${baseUrl}/affiliate-disclosure`,    changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${baseUrl}/accessibility`,           changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${baseUrl}/data-security`,           changeFrequency: 'yearly',  priority: 0.2 },
  ]
}
