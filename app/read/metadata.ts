import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Books - Real Estate Wisdom Without the BS',
  description: 'Discover field-tested frameworks and clause hacks for real estate agents. Skip the 5 a.m. "hustle harder" mantras and get real strategies that actually work.',
  keywords: [
    'real estate books',
    'contract management',
    'real estate frameworks',
    'transaction coordination',
    'real estate strategies',
    'clause hacks',
    'real estate wisdom',
    'agent training',
    'real estate education'
  ],
  openGraph: {
    title: 'Books - Real Estate Wisdom Without the BS | Aylen Montenegro',
    description: 'Discover field-tested frameworks and clause hacks for real estate agents. Skip the 5 a.m. "hustle harder" mantras and get real strategies that actually work.',
    url: 'https://aylenmontenegro.com/read',
    images: [
      {
        url: '/images/books/og-books.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Estate Books by Aylen Montenegro',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Books - Real Estate Wisdom Without the BS',
    description: 'Discover field-tested frameworks and clause hacks for real estate agents. Skip the 5 a.m. "hustle harder" mantras and get real strategies that actually work.',
    images: ['/images/books/og-books.jpg'],
  },
  alternates: {
    canonical: '/read',
  },
}
