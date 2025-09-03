import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SPILL — The Real Estate Snarkletter | Sign Up for Unfiltered Industry Truths',
  description: 'Your virtual BFF in the trenches of real estate. Get unfiltered truths, battle-tested tips, and inbox gold you\'ll actually look forward to reading. No spam. No fluff. No boring.',
  keywords: [
    'real estate newsletter',
    'real estate tips',
    'real estate industry insights',
    'real estate agent resources',
    'real estate snarkletter',
    'real estate deal strategies',
    'real estate contract tips',
    'real estate client management',
    'real estate industry news',
    'real estate agent training',
    'real estate deal closing',
    'real estate scripts',
    'real estate templates',
    'real estate tools',
    'real estate trends'
  ],
  openGraph: {
    title: 'SPILL — The Real Estate Snarkletter',
    description: 'Your virtual BFF in the trenches of real estate. Get unfiltered truths, battle-tested tips, and inbox gold you\'ll actually look forward to reading.',
    url: 'https://yourdomain.com/spill',
    siteName: 'SPILL Newsletter',
    images: [
      {
        url: 'https://yourdomain.com/og-spill.jpg',
        width: 1200,
        height: 630,
        alt: 'SPILL Real Estate Snarkletter',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPILL — The Real Estate Snarkletter',
    description: 'Your virtual BFF in the trenches of real estate. Get unfiltered truths, battle-tested tips, and inbox gold you\'ll actually look forward to reading.',
    images: ['https://yourdomain.com/twitter-spill.jpg'],
    creator: '@aylenmontenegro',
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
    canonical: 'https://yourdomain.com/spill',
  },
  authors: [{ name: 'Aylen Montenegro' }],
  creator: 'Aylen Montenegro',
  publisher: 'SPILL Newsletter',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  category: 'Real Estate Newsletter',
};
