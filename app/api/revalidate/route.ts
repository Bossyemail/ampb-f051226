import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

/**
 * Cron-triggered revalidation endpoint.
 * Called by Vercel Cron at 13:00 UTC (9 AM EDT) and 14:00 UTC (9 AM EST).
 * Forces ISR regeneration on all Field Notes surfaces so scheduled articles
 * go live within seconds of their publish time rather than waiting for the
 * next organic visitor to trigger the revalidate window.
 *
 * Authentication: Vercel auto-provisions CRON_SECRET and injects it as
 * "Authorization: Bearer <secret>" on every cron invocation.
 */
export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization')

  if (!process.env.CRON_SECRET || auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  revalidatePath('/field-notes', 'page')
  revalidatePath('/field-notes/[slug]', 'page')
  revalidatePath('/sitemap.xml')

  return NextResponse.json({
    revalidated: true,
    at: new Date().toISOString(),
    paths: ['/field-notes', '/field-notes/[slug]', '/sitemap.xml'],
  })
}
