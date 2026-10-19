import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aylenmontenegro.com'

  return [
    // ── Core ──────────────────────────────────────────────────────────────────
    { url: baseUrl,                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/tc-services`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/closeadmin`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/snarkletter`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // ── Legal ─────────────────────────────────────────────────────────────────
    { url: `${baseUrl}/privacy`,                 lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${baseUrl}/terms`,                   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${baseUrl}/affiliate-disclosure`,    lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${baseUrl}/accessibility`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${baseUrl}/data-security`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.2 },
  ]
}
