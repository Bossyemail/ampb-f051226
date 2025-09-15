import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
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
    default: "Aylen Montenegro - Real Estate Tools & Resources",
    template: "%s | Aylen Montenegro"
  },
  description: "Helping South Florida real estate agents close more deals with contract management, email templates, and proven frameworks. No fluff, just results.",
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Aylen Montenegro - Real Estate Tools & Resources",
    description: "Helping South Florida real estate agents close more deals with contract management, email templates, and proven frameworks. No fluff, just results.",
    url: 'https://aylenmontenegro.com',
    siteName: 'Aylen Montenegro',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aylen Montenegro - Real Estate Tools & Resources',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aylen Montenegro - Real Estate Tools & Resources",
    description: "Helping South Florida real estate agents close more deals with contract management, email templates, and proven frameworks. No fluff, just results.",
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
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SkipToContent />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <BackToTop />
          <OfflineIndicator />
          <CookieConsentBanner />
        </body>
      </html>
    </ClerkProvider>
  );
}
