import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "South Florida Transaction Coordinator | Aylen Montenegro" },
  description:
    "Contract-to-close real estate transaction coordination for agents, teams, and brokerages throughout Miami-Dade, Broward, and Palm Beach County.",
  openGraph: {
    title: "South Florida Transaction Coordinator | Aylen Montenegro",
    description:
      "Contract-to-close real estate transaction coordination for agents, teams, and brokerages throughout Miami-Dade, Broward, and Palm Beach County.",
    type: "website",
    url: "https://aylenmontenegro.com/tc-services",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "South Florida Transaction Coordinator | Aylen Montenegro",
      },
    ],
  },
  alternates: {
    canonical: "https://aylenmontenegro.com/tc-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "South Florida Transaction Coordinator | Aylen Montenegro",
    description:
      "Contract-to-close real estate transaction coordination for agents, teams, and brokerages throughout Miami-Dade, Broward, and Palm Beach County.",
    images: ["/images/og-image.jpg"],
    creator: "@aylenbuilds",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TCServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://aylenmontenegro.com/tc-services#service",
              "name": "South Florida Real Estate Transaction Coordination",
              "url": "https://aylenmontenegro.com/tc-services",
              "description": "Contract-to-close real estate transaction coordination for agents, teams, and brokerages throughout Miami-Dade, Broward, and Palm Beach County.",
              "provider": { "@id": "https://aylenmontenegro.com/#person" },
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Miami-Dade County" },
                { "@type": "AdministrativeArea", "name": "Broward County" },
                { "@type": "AdministrativeArea", "name": "Palm Beach County" }
              ],
              "serviceType": "Real Estate Transaction Coordination",
              "audience": {
                "@type": "Audience",
                "audienceType": "Real estate agents, teams, and brokerages"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aylenmontenegro.com" },
                { "@type": "ListItem", "position": 2, "name": "TC Services", "item": "https://aylenmontenegro.com/tc-services" }
              ]
            }
          ]
        }) }}
      />
      {children}
    </>
  );
}
