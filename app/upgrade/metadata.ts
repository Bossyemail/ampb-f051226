import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BossyEmail - Smart Email Generator for Real Estate Agents | Get Started Today',
  description: 'Stop losing deals in your inbox. BossyEmail is the smart email generator built for real estate pros who actually want replies — without the "just checking in" desperation. Get started today.',
  keywords: [
    'real estate email templates',
    'email generator',
    'real estate agent tools',
    'deal closing emails',
    'real estate communication',
    'email automation',
    'real estate CRM',
    'property management emails',
    'real estate follow up',
    'contract management emails'
  ],
  openGraph: {
    title: 'BossyEmail - Smart Email Generator for Real Estate Agents',
    description: 'Stop losing deals in your inbox. BossyEmail gives you the exact words to chase docs, follow up without sounding desperate, and put out fires like a pro.',
    type: 'website',
    url: 'https://yourdomain.com/upgrade',
    siteName: 'BossyEmail',
    images: [
      {
        url: '/images/bossyemail-og.jpg',
        width: 1200,
        height: 630,
        alt: 'BossyEmail - Smart Email Generator for Real Estate Agents'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BossyEmail - Smart Email Generator for Real Estate Agents',
    description: 'Stop losing deals in your inbox. Get the exact words to close deals and get replies.',
    images: ['/images/bossyemail-twitter.jpg'],
    creator: '@bossyemail',
    site: '@bossyemail'
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
    canonical: 'https://yourdomain.com/upgrade',
  },
  authors: [{ name: 'Aylen Montenegro' }],
  creator: 'Aylen Montenegro',
  publisher: 'BossyEmail',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  category: 'Real Estate Tools',
};
