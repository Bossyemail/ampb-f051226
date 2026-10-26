import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: { absolute: 'Terms & Conditions | Aylen Montenegro' },
  description: 'Terms and conditions governing use of aylenmontenegro.com and its products.',
  alternates: { canonical: 'https://aylenmontenegro.com/terms' },
  robots: { index: true, follow: true },
}

export default function TermsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
