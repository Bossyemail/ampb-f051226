import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aylen Montenegro - Real Estate Tools & Resources',
  description: 'Helping South Florida real estate agents close more deals with contract management, email templates, and proven frameworks. No fluff, just results.',
  keywords: [
    'real estate tools',
    'transaction coordination',
    'contract management',
    'email templates',
    'South Florida real estate',
    'Miami real estate',
    'real estate systems',
    'clausevault',
    'bossyemail',
    'real estate automation'
  ],
  openGraph: {
    title: 'Aylen Montenegro - Real Estate Tools & Resources',
    description: 'Helping South Florida real estate agents close more deals with contract management, email templates, and proven frameworks. No fluff, just results.',
    url: 'https://aylenmontenegro.com',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Aylen Montenegro - Real Estate Tools & Resources',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aylen Montenegro - Real Estate Tools & Resources',
    description: 'Helping South Florida real estate agents close more deals with contract management, email templates, and proven frameworks. No fluff, just results.',
    images: ['/images/og-home.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}
