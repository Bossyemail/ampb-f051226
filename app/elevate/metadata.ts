import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elevate - Premium Transaction Coordination for South Florida Agents | Schedule Your Fit Call',
  description: 'Stop drowning in admin work. Elevate is the premium transaction coordination service built for seasoned South Florida agents who demand white-glove support. Licensed, experienced, and local. Schedule your fit call today.',
  keywords: [
    'transaction coordination',
    'South Florida real estate',
    'real estate agent support',
    'deal management',
    'closing coordination',
    'real estate admin',
    'licensed transaction coordinator',
    'white glove service',
    'real estate operations',
    'deal closing support',
    'real estate paperwork',
    'transaction management',
    'real estate compliance',
    'deal coordination',
    'real estate professional services'
  ],
  openGraph: {
    title: 'Elevate - Premium Transaction Coordination for South Florida Agents',
    description: 'Stop drowning in admin work. Elevate is the premium transaction coordination service built for seasoned South Florida agents who demand white-glove support. Licensed, experienced, and local.',
    url: 'https://yourdomain.com/elevate',
    siteName: 'Elevate TC Services',
    images: [
      {
        url: 'https://yourdomain.com/og-elevate.jpg',
        width: 1200,
        height: 630,
        alt: 'Elevate Transaction Coordination Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevate - Premium Transaction Coordination for South Florida Agents',
    description: 'Stop drowning in admin work. Elevate is the premium transaction coordination service built for seasoned South Florida agents who demand white-glove support.',
    images: ['https://yourdomain.com/twitter-elevate.jpg'],
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
    canonical: 'https://yourdomain.com/elevate',
  },
  authors: [{ name: 'Aylen Montenegro' }],
  creator: 'Aylen Montenegro',
  publisher: 'Elevate TC Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  category: 'Real Estate Services',
};
