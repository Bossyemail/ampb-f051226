import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "DealDesk | Florida Real Estate Compliance Engine" },
  description:
    "DealDesk evaluates Florida real estate transaction details and identifies required forms, recommended forms, missing inputs, and the rationale behind each determination.",
  openGraph: {
    title: "DealDesk | Florida Real Estate Compliance Engine",
    description:
      "DealDesk evaluates Florida real estate transaction details and identifies required forms, recommended forms, missing inputs, and the rationale behind each determination.",
    type: "website",
    url: "https://aylenmontenegro.com/dealdesk",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DealDesk | Florida Real Estate Compliance Engine",
      },
    ],
  },
  alternates: {
    canonical: "https://aylenmontenegro.com/dealdesk",
  },
  twitter: {
    card: "summary_large_image",
    title: "DealDesk | Florida Real Estate Compliance Engine",
    description:
      "DealDesk evaluates Florida real estate transaction details and identifies required forms, recommended forms, missing inputs, and the rationale behind each determination.",
    images: ["/images/og-image.jpg"],
    creator: "@aylenbuilds",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DealDeskLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              "@id": "https://aylenmontenegro.com/dealdesk#app",
              "name": "DealDesk",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "url": "https://aylenmontenegro.com/dealdesk",
              "description": "Florida real estate compliance engine — evaluates transaction details and returns documented disclosure determinations with applicable statutes and required forms.",
              "creator": { "@id": "https://aylenmontenegro.com/#person" },
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
              "audience": {
                "@type": "Audience",
                "audienceType": "Real estate agents, transaction coordinators, and brokers in Florida"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aylenmontenegro.com" },
                { "@type": "ListItem", "position": 2, "name": "DealDesk", "item": "https://aylenmontenegro.com/dealdesk" }
              ]
            }
          ]
        }) }}
      />
      {children}
    </>
  );
}
