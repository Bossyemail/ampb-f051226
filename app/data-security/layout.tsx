import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: { absolute: 'Data Security | Aylen Montenegro' },
  description: 'Data security practices and policies for aylenmontenegro.com.',
  alternates: { canonical: 'https://aylenmontenegro.com/data-security' },
  robots: { index: true, follow: true },
}

export default function DataSecurityLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
