import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: { absolute: 'Accessibility | Aylen Montenegro' },
  description: 'Accessibility statement for aylenmontenegro.com.',
  alternates: { canonical: 'https://aylenmontenegro.com/accessibility' },
  robots: { index: true, follow: true },
}

export default function AccessibilityLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
