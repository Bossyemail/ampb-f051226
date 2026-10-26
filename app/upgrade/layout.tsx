import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: { absolute: 'BossyEmail — Smart Email Generator for Real Estate | Aylen Montenegro' },
  description: 'Stop losing deals in your inbox. Smart email generator built for real estate pros who want replies — without the "just checking in" desperation.',
  alternates: { canonical: 'https://aylenmontenegro.com/upgrade' },
}

export default function UpgradeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
