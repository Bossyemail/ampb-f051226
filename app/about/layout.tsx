import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: { absolute: 'About Aylen Montenegro — Real Estate Contract Manager & Author' },
  description: 'Licensed real estate consultant and industry expert with over 20 years of experience in South Florida real estate.',
  alternates: { canonical: 'https://aylenmontenegro.com/about' },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
