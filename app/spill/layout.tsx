import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: { absolute: 'The Snarkletter — Real Estate Newsletter | Aylen Montenegro' },
  description: 'Unfiltered real estate industry insights and battle-tested tips. No spam. No fluff. No boring.',
  alternates: { canonical: 'https://aylenmontenegro.com/spill' },
}

export default function SpillLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
