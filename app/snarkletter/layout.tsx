import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "The Snarkletter | Real Estate Operations and Compliance" },
  description:
    "Sharp, practical commentary on real estate transactions, compliance, operations, and the systems behind clean closings.",
  openGraph: {
    title: "The Snarkletter | Real Estate Operations and Compliance",
    description:
      "Sharp, practical commentary on real estate transactions, compliance, operations, and the systems behind clean closings.",
    type: "website",
    url: "https://aylenmontenegro.com/snarkletter",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Real Estate Snarkletter — South Florida Real Estate, Unfiltered",
      },
    ],
  },
  alternates: {
    canonical: "https://aylenmontenegro.com/snarkletter",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Snarkletter | Real Estate Operations and Compliance",
    description:
      "Sharp, practical commentary on real estate transactions, compliance, operations, and the systems behind clean closings.",
    images: ["/images/og-image.jpg"],
    creator: "@aylenbuilds",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SnarkletterLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWorkSeries",
              "@id": "https://aylenmontenegro.com/snarkletter#series",
              "name": "The Real Estate Snarkletter",
              "url": "https://aylenmontenegro.com/snarkletter",
              "description": "Sharp, no-fluff takes on South Florida real estate and the systems behind a serious production business. Anonymized breakdowns of real transaction failures — what happened, what was missed, and how to prevent it.",
              "creator": { "@id": "https://aylenmontenegro.com/#person" },
              "publisher": { "@id": "https://aylenmontenegro.com/#organization" },
              "audience": {
                "@type": "Audience",
                "audienceType": "Real estate agents and transaction coordinators"
              },
              "inLanguage": "en-US"
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aylenmontenegro.com" },
                { "@type": "ListItem", "position": 2, "name": "Snarkletter", "item": "https://aylenmontenegro.com/snarkletter" }
              ]
            }
          ]
        }) }}
      />
      {children}
    </>
  );
}
