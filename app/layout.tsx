import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import SkipToContent from "@/components/SkipToContent";
import BackToTop from "@/components/BackToTop";
import OfflineIndicator from "@/components/OfflineIndicator";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aylen Montenegro — Turn Real Estate Chaos Into Systems & Profit",
    template: "%s | Aylen Montenegro"
  },
  description: "20+ years of real estate expertise. I turn chaos into closings with proven systems, smart tools, and battle-tested frameworks. From contract to closing, I manage the details so you can sell more.",
  keywords: ["real estate", "contract management", "transaction coordination", "email templates", "real estate tools", "South Florida", "Miami real estate", "clausevault", "bossyemail"],
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
    title: "Aylen Montenegro, Contract Manager • SaaS Builder • Author",
    description: "Learn to manage contracts, build real estate systems, and create tools that turn chaos into closings. 20+ years of expertise in transaction management, SaaS development, and deal coordination.",
    url: 'https://aylenmontenegro.com',
    siteName: 'Aylen Montenegro',
    images: [
      {
        url: '/images/14.png',
        width: 1200,
        height: 630,
        alt: 'Aylen Montenegro, Contract Manager • SaaS Builder • Author',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aylen Montenegro, Contract Manager • SaaS Builder • Author",
    description: "Learn to manage contracts, build real estate systems, and create tools that turn chaos into closings. 20+ years of expertise in transaction management, SaaS development, and deal coordination.",
    images: ['/images/14.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/admin/dashboard"
      signUpFallbackRedirectUrl="/admin/dashboard"
      appearance={{
        elements: {
          formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
        }
      }}
    >
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <head>
          {/* Fonts are loaded via Next.js font loader - removed duplicate Google Fonts link */}
          
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-TVDC1JQ6MK"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
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
        </head>
        <body className="bg-black text-white antialiased">
          <SkipToContent />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <BackToTop />
          <OfflineIndicator />
          <CookieConsentBanner />
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
