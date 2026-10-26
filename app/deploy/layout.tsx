// ClauseVault marketing page — source preserved for standalone extraction.
// Route retired: returns 404 until ClauseVault launches on its own domain.

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function DeployLayout(_props: { children: ReactNode }) {
  notFound()
}
