import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://aylenmontenegro.com/',
  },
}

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
