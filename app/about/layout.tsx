import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "About Aylen Montenegro | South Florida Transaction Coordinator" },
  description:
    "Meet Aylen Montenegro, a licensed Florida real estate professional and South Florida transaction coordinator with more than 20 years of experience and 3,000 real estate closings supported.",
  openGraph: {
    title: "About Aylen Montenegro | South Florida Transaction Coordinator",
    description:
      "Meet Aylen Montenegro, a licensed Florida real estate professional and South Florida transaction coordinator with more than 20 years of experience and 3,000 real estate closings supported.",
    type: "profile",
    url: "https://aylenmontenegro.com/about",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Aylen Montenegro | South Florida Transaction Coordinator",
      },
    ],
  },
  alternates: {
    canonical: "https://aylenmontenegro.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aylen Montenegro | South Florida Transaction Coordinator",
    description:
      "Meet Aylen Montenegro, a licensed Florida real estate professional and South Florida transaction coordinator with more than 20 years of experience and 3,000 real estate closings supported.",
    images: ["/images/og-image.jpg"],
    creator: "@aylenbuilds",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": "https://aylenmontenegro.com/about#webpage",
              "url": "https://aylenmontenegro.com/about",
              "name": "About Aylen Montenegro | South Florida Transaction Coordinator",
              "isPartOf": { "@id": "https://aylenmontenegro.com/#website" },
              "about": { "@id": "https://aylenmontenegro.com/#person" },
              "mainEntity": { "@id": "https://aylenmontenegro.com/#person" }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aylenmontenegro.com" },
                { "@type": "ListItem", "position": 2, "name": "About", "item": "https://aylenmontenegro.com/about" }
              ]
            }
          ]
        }) }}
      />
      {children}
    </>
  );
}
