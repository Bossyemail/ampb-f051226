import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'field-notes')

// ── Types ─────────────────────────────────────────────────────────────────────

export type ArticleLayout = 'standard' | 'feature'

export interface ArticleImage {
  src: string
  alt: string
  caption?: string
}

export interface ArchiveImage extends ArticleImage {
  placement?: 'left' | 'right' | 'full'
}

export type ArticleCTA =
  | { type: 'snarkletter' }
  | { type: 'tc-services' }
  | { type: 'closeadmin' }
  | { type: 'article'; slug: string; title: string }

export interface ArticleHeading {
  id:   string
  text: string
  level: 2 | 3
}

export interface ArticleMeta {
  slug:           string
  title:          string
  description:    string
  publishedAt:    string          // YYYY-MM-DD
  scheduledAt?:   string          // ISO 8601 UTC — gate time; article inaccessible until this moment
  updatedAt?:     string          // YYYY-MM-DD, optional
  draft:          boolean
  layout:         ArticleLayout   // defaults to 'standard'
  section?:       string          // editorial section: Clients, Operations, Judgment, Communication
  deck?:          string          // optional subtitle shown in article header
  archiveDescription?: string    // editorial one-liner shown in archive index (does not affect SEO description)
  editorialOrder?: number         // stable ordering for same-date articles (lower = first)
  heroImage?:     ArticleImage    // feature layout: hero image above article title
  archiveImage?:  ArchiveImage    // archive list: thumbnail image
  pullQuotes?:    string[]        // exact passages from the article for pull-quote treatment
  cta?:           ArticleCTA
  bodyText:       string          // raw markdown content — used for client-side search
  readingTime?:   number          // estimated minutes to read
  headings?:      ArticleHeading[] // h2/h3 headings for TOC
}

export interface Article extends ArticleMeta {
  bodyHtml: string
}

// ── Heading utilities ─────────────────────────────────────────────────────────

function headingToId(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

function extractHeadings(markdown: string): ArticleHeading[] {
  const result: ArticleHeading[] = []
  for (const m of markdown.matchAll(/^(#{2,3}) (.+)$/gm)) {
    const level = (m[1].length === 2 ? 2 : 3) as 2 | 3
    const text  = m[2].trim()
    result.push({ id: headingToId(text), text, level })
  }
  return result
}

function addHeadingIds(html: string): string {
  return html.replace(
    /<(h[23])>([^<]+)<\/\1>/g,
    (_, tag, text) => `<${tag} id="${headingToId(text)}">${text}</${tag}>`
  )
}

// ── Draft / schedule visibility ───────────────────────────────────────────────
// Drafts and future-scheduled articles are visible in dev + Vercel preview.
// In production: draft articles are excluded; scheduled articles are gated by
// their scheduledAt timestamp and become live via ISR revalidation.

function isDraftVisible(): boolean {
  return process.env.VERCEL_ENV !== 'production'
}

/**
 * Returns true if the article should appear in the public archive/sitemap.
 * In dev/preview all non-draft articles are shown regardless of scheduledAt.
 */
function isArticlePublished(a: { draft: boolean; scheduledAt?: string }): boolean {
  if (a.draft) return false
  if (a.scheduledAt) return new Date(a.scheduledAt) <= new Date()
  return true
}

// ── Validation ────────────────────────────────────────────────────────────────

function validateFrontmatter(raw: Record<string, unknown>, file: string): void {
  if (!raw.title)       throw new Error(`[field-notes] Missing required field "title" in ${file}`)
  if (!raw.slug)        throw new Error(`[field-notes] Missing required field "slug" in ${file}`)
  if (!raw.publishedAt) throw new Error(`[field-notes] Missing required field "publishedAt" in ${file}`)
  if (!raw.description) throw new Error(`[field-notes] Missing required field "description" in ${file}`)

  const dateRe = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRe.test(String(raw.publishedAt))) {
    throw new Error(`[field-notes] "publishedAt" must be YYYY-MM-DD in ${file}`)
  }
  if (raw.updatedAt && !dateRe.test(String(raw.updatedAt))) {
    throw new Error(`[field-notes] "updatedAt" must be YYYY-MM-DD in ${file}`)
  }
  if (raw.layout && !['standard', 'feature'].includes(String(raw.layout))) {
    throw new Error(`[field-notes] "layout" must be "standard" or "feature" in ${file}`)
  }
  if (raw.scheduledAt) {
    const isoRe = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/
    if (!isoRe.test(String(raw.scheduledAt))) {
      throw new Error(`[field-notes] "scheduledAt" must be ISO 8601 UTC (e.g. 2026-10-21T13:00:00.000Z) in ${file}`)
    }
  }
}

// ── Data layer ────────────────────────────────────────────────────────────────

/**
 * Returns all articles sorted newest-first, then by editorialOrder (ascending)
 * for articles sharing the same publication date.
 * In production, draft articles and future-scheduled articles are excluded.
 * Synchronous — returns metadata plus raw body text (for client-side search).
 */
export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'))

  const articles = files.map((file): ArticleMeta => {
    const filePath = path.join(CONTENT_DIR, file)
    const raw = matter(fs.readFileSync(filePath, 'utf8'))
    validateFrontmatter(raw.data, file)

    const content = String(raw.content)
    const words   = content.split(/\s+/).filter(w => w.length > 0).length

    return {
      slug:           String(raw.data.slug),
      title:          String(raw.data.title),
      description:    String(raw.data.description),
      publishedAt:    String(raw.data.publishedAt),
      scheduledAt:    raw.data.scheduledAt ? String(raw.data.scheduledAt) : undefined,
      updatedAt:      raw.data.updatedAt ? String(raw.data.updatedAt) : undefined,
      // Publishing requires explicit `draft: false`. Omitting the field defaults to unpublished.
      draft:          raw.data.draft !== false,
      layout:         (raw.data.layout as ArticleLayout) ?? 'standard',
      section:            raw.data.section ? String(raw.data.section) : undefined,
      deck:               raw.data.deck ? String(raw.data.deck) : undefined,
      archiveDescription: raw.data.archiveDescription ? String(raw.data.archiveDescription) : undefined,
      editorialOrder:     typeof raw.data.editorialOrder === 'number' ? raw.data.editorialOrder : undefined,
      heroImage:          raw.data.heroImage as ArticleImage | undefined,
      archiveImage:       raw.data.archiveImage as ArchiveImage | undefined,
      pullQuotes:         Array.isArray(raw.data.pullQuotes) ? raw.data.pullQuotes as string[] : undefined,
      cta:                raw.data.cta as ArticleCTA | undefined,
      bodyText:           content,
      readingTime:        Math.max(1, Math.round(words / 225)),
      headings:           extractHeadings(content),
    }
  })

  // Enforce slug uniqueness at build time
  const slugCounts = new Map<string, number>()
  for (const a of articles) {
    slugCounts.set(a.slug, (slugCounts.get(a.slug) ?? 0) + 1)
  }
  for (const [slug, count] of slugCounts) {
    if (count > 1) throw new Error(`[field-notes] Duplicate slug "${slug}" found in ${count} files`)
  }

  const visible = isDraftVisible()
    ? articles
    : articles.filter(isArticlePublished)

  return visible.sort((a, b) => {
    // Primary: newest publication date first
    const dateDiff = b.publishedAt.localeCompare(a.publishedAt)
    if (dateDiff !== 0) return dateDiff
    // Secondary: editorialOrder ascending (undefined = last)
    const ao = a.editorialOrder ?? 9999
    const bo = b.editorialOrder ?? 9999
    return ao - bo
  })
}

/**
 * Returns slugs for ALL non-draft articles — both currently published and
 * future-scheduled. Pass this to generateStaticParams so Next.js pre-builds
 * scheduled article pages as 404 at build time; ISR then revalidates them
 * to 200 once their scheduledAt timestamp has passed — no redeployment needed.
 */
export function getSchedulableArticleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.md'))
    .flatMap(file => {
      const raw = matter(fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8'))
      if (raw.data.draft !== false) return []
      return [String(raw.data.slug)]
    })
}

/**
 * Returns a single article with rendered HTML body.
 * Returns null if the article does not exist, is a draft in production,
 * or has a scheduledAt timestamp still in the future in production.
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!fs.existsSync(CONTENT_DIR)) return null

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'))

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file)
    const raw = matter(fs.readFileSync(filePath, 'utf8'))

    if (raw.data.slug !== slug) continue

    validateFrontmatter(raw.data, file)

    const isDraft    = raw.data.draft !== false
    const scheduledAt = raw.data.scheduledAt ? String(raw.data.scheduledAt) : undefined

    if (isDraft && !isDraftVisible()) return null

    // Gate scheduled articles in production until their publish time
    if (!isDraftVisible() && scheduledAt && new Date(scheduledAt) > new Date()) return null

    const processed = await remark().use(remarkHtml, { sanitize: false }).process(raw.content)
    const content   = String(raw.content)
    const words     = content.split(/\s+/).filter(w => w.length > 0).length

    return {
      slug:           String(raw.data.slug),
      title:          String(raw.data.title),
      description:    String(raw.data.description),
      publishedAt:    String(raw.data.publishedAt),
      scheduledAt,
      updatedAt:      raw.data.updatedAt ? String(raw.data.updatedAt) : undefined,
      draft:          isDraft,
      layout:         (raw.data.layout as ArticleLayout) ?? 'standard',
      section:            raw.data.section ? String(raw.data.section) : undefined,
      deck:               raw.data.deck ? String(raw.data.deck) : undefined,
      archiveDescription: raw.data.archiveDescription ? String(raw.data.archiveDescription) : undefined,
      editorialOrder:     typeof raw.data.editorialOrder === 'number' ? raw.data.editorialOrder : undefined,
      heroImage:          raw.data.heroImage as ArticleImage | undefined,
      archiveImage:       raw.data.archiveImage as ArchiveImage | undefined,
      pullQuotes:         Array.isArray(raw.data.pullQuotes) ? raw.data.pullQuotes as string[] : undefined,
      cta:                raw.data.cta as ArticleCTA | undefined,
      bodyText:           content,
      readingTime:        Math.max(1, Math.round(words / 225)),
      headings:           extractHeadings(content),
      bodyHtml:           addHeadingIds(String(processed)),
    }
  }

  return null
}
