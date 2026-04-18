import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Aylen Montenegro - Real Estate Consultant & Industry Expert',
  description: 'Learn about Aylen Montenegro, a licensed real estate consultant and industry expert with over 20 years of experience in South Florida real estate.',
  keywords: [
    'Aylen Montenegro',
    'real estate consultant',
    'real estate expert',
    'South Florida real estate',
    'real estate industry expert',
    'real estate professional',
    'licensed real estate consultant',
    'real estate advisor',
    'real estate services',
    'real estate expertise',
    'real estate experience',
    'real estate professional services',
    'real estate consulting',
    'real estate industry',
    'real estate professional development'
  ],
  openGraph: {
    title: 'About Aylen Montenegro - Real Estate Consultant & Industry Expert',
    description: 'Learn about Aylen Montenegro, a licensed real estate consultant and industry expert with over 20 years of experience in South Florida real estate.',
    url: 'https://yourdomain.com/about',
    siteName: 'Aylen Montenegro',
    images: [
      {
        url: 'https://yourdomain.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Aylen Montenegro - Real Estate Consultant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Aylen Montenegro - Real Estate Consultant & Industry Expert',
    description: 'Learn about Aylen Montenegro, a licensed real estate consultant and industry expert with over 20 years of experience in South Florida real estate.',
    images: ['https://yourdomain.com/twitter-about.jpg'],
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
    canonical: 'https://yourdomain.com/about',
  },
  authors: [{ name: 'Aylen Montenegro' }],
  creator: 'Aylen Montenegro',
  publisher: 'Aylen Montenegro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  category: 'Real Estate Professional',
};
