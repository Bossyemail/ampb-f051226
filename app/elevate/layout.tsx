import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: { absolute: 'Elevate — Premium Transaction Coordination | Aylen Montenegro' },
  description: 'Premium transaction coordination for South Florida real estate agents. Licensed, experienced, and local. Schedule your fit call today.',
  alternates: { canonical: 'https://aylenmontenegro.com/elevate' },
}

export default function ElevateLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
