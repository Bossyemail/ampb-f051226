import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, DM_Mono, Lora, Newsreader } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import SkipToContent from "@/components/SkipToContent";
import BackToTop from "@/components/BackToTop";
import OfflineIndicator from "@/components/OfflineIndicator";
import ImageProtection from "@/components/ImageProtection";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aylen Montenegro | Real Estate Operations & Transaction Management",
    template: "%s | Aylen Montenegro"
  },
  description: "Aylen Montenegro manages real estate transactions for South Florida agents and develops software for better real estate operations. 3,000+ closings since 2004.",
  authors: [{ name: "Aylen Montenegro" }],
  creator: "Aylen Montenegro",
  publisher: "Aylen Montenegro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aylenmontenegro.com'),
  openGraph: {
    title: "Aylen Montenegro | Real Estate Operations & Transaction Management",
    description: "Aylen Montenegro manages real estate transactions for South Florida agents and develops software for better real estate operations. 3,000+ closings since 2004.",
    url: 'https://aylenmontenegro.com',
    siteName: 'Aylen Montenegro',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aylen Montenegro | Real Estate Operations & Transaction Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aylen Montenegro | Real Estate Operations & Transaction Management",
    description: "Aylen Montenegro manages real estate transactions for South Florida agents and develops software for better real estate operations. 3,000+ closings since 2004.",
    images: ['/images/og-image.jpg'],
    creator: '@aylenbuilds',
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
  // NOTE: Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel env vars (Dashboard → Settings → Environment Variables).
  // The value comes from Google Search Console → Settings → Ownership verification → HTML tag method.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${dmMono.variable} ${lora.variable} ${newsreader.variable}`}>
        <head>
          {/* Image copyright */}
          <meta name="copyright" content={`© ${new Date().getFullYear()} Aylen Montenegro. All rights reserved.`} />
          <meta name="author" content="Aylen Montenegro" />

          {/* Fonts are loaded via Next.js font loader - removed duplicate Google Fonts link */}
          
          {/* Google Analytics — Consent Mode v2 */}
          {/* Runs before any script: sets consent defaults, then restores returning-visitor preference */}
          <Script id="gtag-consent-init" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                wait_for_update: 500
              });
              try {
                var _cp = localStorage.getItem('cookie-preferences');
                if (_cp) {
                  var _prefs = JSON.parse(_cp);
                  if (_prefs && typeof _prefs.analytics === 'boolean') {
                    gtag('consent', 'update', {
                      analytics_storage: _prefs.analytics ? 'granted' : 'denied'
                    });
                  }
                }
              } catch(e) {}
            `}
          </Script>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-TVDC1JQ6MK"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              gtag('js', new Date());
              gtag('config', 'G-TVDC1JQ6MK');
            `}
          </Script>
          
          {/* Metricool Tracking */}
          <Script id="metricool-tracking" strategy="afterInteractive">
            {`
              function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"fe97d1360003a5e99e6d50683bcd79d3"})});
            `}
          </Script>

          {/* Site-wide entity graph — Person · Organization · WebSite */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://aylenmontenegro.com/#person",
                  "name": "Aylen Montenegro",
                  "jobTitle": "Real Estate Contract Manager",
                  "description": "Licensed Florida real estate professional and Real Estate Contract Manager with 20+ years of experience and 3,000+ closings supported across Miami-Dade, Broward, and Palm Beach counties.",
                  "url": "https://aylenmontenegro.com",
                  "image": "https://aylenmontenegro.com/images/og-image.jpg",
                  "email": "hello@aylenmontenegro.com",
                  "sameAs": [
                    "https://instagram.com/aylenbuilds",
                    "https://youtube.com/@aylenmontenegropa",
                    "https://threads.net/@aylenbuilds"
                  ],
                  "knowsAbout": [
                    "Real Estate Transaction Coordination",
                    "Florida Real Estate Law",
                    "Contract-to-Close Operations",
                    "South Florida Real Estate",
                    "Real Estate Compliance",
                    "Real Estate Contracts"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "FL",
                    "addressCountry": "US"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://aylenmontenegro.com/#organization",
                  "name": "Aylen Montenegro",
                  "url": "https://aylenmontenegro.com",
                  "founder": { "@id": "https://aylenmontenegro.com/#person" },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "hello@aylenmontenegro.com",
                    "contactType": "customer service",
                    "availableLanguage": "English"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "FL",
                    "addressCountry": "US"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://aylenmontenegro.com/#website",
                  "url": "https://aylenmontenegro.com",
                  "name": "Aylen Montenegro",
                  "publisher": { "@id": "https://aylenmontenegro.com/#organization" }
                }
              ]
            }) }}
          />
        </head>
        <body className="bg-black text-white antialiased">
          <SkipToContent />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <BackToTop />
          <OfflineIndicator />
          <ImageProtection />
          <CookieConsentBanner />
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
  );
}
