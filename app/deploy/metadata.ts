import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClauseVault - Real Estate Clause Library for Agents | Get Started Today',
  description: 'Stop losing deals in your contracts. ClauseVault is the smart clause library built for real estate pros who actually want to close deals — without reinventing the wheel. Get started today.',
  keywords: [
    'real estate clauses',
    'contract templates',
    'real estate agent tools',
    'deal closing clauses',
    'real estate contracts',
    'clause library',
    'real estate legal',
    'property contract clauses',
    'real estate negotiation',
    'contract management clauses'
  ],
  openGraph: {
    title: 'ClauseVault - Real Estate Clause Library for Agents',
    description: 'Stop losing deals in your contracts. ClauseVault gives you the exact clauses to protect your clients, close deals faster, and avoid costly mistakes.',
    type: 'website',
    url: 'https://yourdomain.com/deploy',
    siteName: 'ClauseVault',
    images: [
      {
        url: '/images/clausevault-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ClauseVault - Real Estate Clause Library for Agents'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClauseVault - Real Estate Clause Library for Agents',
    description: 'Stop losing deals in your contracts. Get the exact clauses to close deals and protect clients.',
    images: ['/images/clausevault-twitter.jpg'],
    creator: '@clausevault',
    site: '@clausevault'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://yourdomain.com/deploy',
  },
  authors: [{ name: 'Aylen Montenegro' }],
  creator: 'Aylen Montenegro',
  publisher: 'ClauseVault',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  category: 'Real Estate Tools',
};
