import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "CloseAdmin | Real Estate Transaction Operations Software" },
  description:
    "CloseAdmin is a real estate transaction operations platform currently in private beta. Email, clauses, deadlines, contacts, calendars, and reporting — built for agents, TCs, and teams.",
  openGraph: {
    title: "CloseAdmin | Real Estate Transaction Operations Software",
    description:
      "CloseAdmin is a real estate transaction operations platform currently in private beta. Email, clauses, deadlines, contacts, calendars, and reporting — built for agents, TCs, and teams.",
    type: "website",
    url: "https://aylenmontenegro.com/closeadmin",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CloseAdmin | Real Estate Transaction Operations Software",
      },
    ],
  },
  alternates: {
    canonical: "https://aylenmontenegro.com/closeadmin",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloseAdmin | Real Estate Transaction Operations Software",
    description:
      "CloseAdmin is a real estate transaction operations platform currently in private beta. Email, clauses, deadlines, contacts, calendars, and reporting — built for agents, TCs, and teams.",
    images: ["/images/og-image.jpg"],
    creator: "@aylenbuilds",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CloseAdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              "@id": "https://aylenmontenegro.com/closeadmin#app",
              "name": "CloseAdmin",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "url": "https://aylenmontenegro.com/closeadmin",
              "description": "The complete operating system for agents, TCs, and teams running real volume — templates, AI messaging, deadline tracking, and contract-to-close operations. Built from 3,000+ real transactions.",
              "creator": { "@id": "https://aylenmontenegro.com/#person" },
              "offers": { "@type": "Offer", "availability": "https://schema.org/PreOrder" },
              "audience": {
                "@type": "Audience",
                "audienceType": "Real estate agents, transaction coordinators, and brokers"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aylenmontenegro.com" },
                { "@type": "ListItem", "position": 2, "name": "CloseAdmin", "item": "https://aylenmontenegro.com/closeadmin" }
              ]
            }
          ]
        }) }}
      />
      {children}
    </>
  );
}
