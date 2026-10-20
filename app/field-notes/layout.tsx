import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./field-notes.css";

export const metadata: Metadata = {
  title: { absolute: "Field Notes | Aylen Montenegro" },
  description:
    "Practical writing on real estate transaction coordination, contract management, and the operational side of South Florida real estate.",
  openGraph: {
    title: "Field Notes | Aylen Montenegro",
    description:
      "Practical writing on real estate transaction coordination, contract management, and the operational side of South Florida real estate.",
    type: "website",
    url: "https://aylenmontenegro.com/field-notes",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Field Notes | Aylen Montenegro",
      },
    ],
  },
  alternates: {
    canonical: "https://aylenmontenegro.com/field-notes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Notes | Aylen Montenegro",
    description:
      "Practical writing on real estate transaction coordination, contract management, and the operational side of South Florida real estate.",
    images: ["/images/og-image.jpg"],
    creator: "@aylenbuilds",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FieldNotesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Blog",
                "@id": "https://aylenmontenegro.com/field-notes#blog",
                "name": "Field Notes",
                "url": "https://aylenmontenegro.com/field-notes",
                "description":
                  "Practical writing on real estate transaction coordination, contract management, and the operational side of South Florida real estate.",
                "author": { "@id": "https://aylenmontenegro.com/#person" },
                "publisher": { "@id": "https://aylenmontenegro.com/#organization" },
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://aylenmontenegro.com",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Field Notes",
                    "item": "https://aylenmontenegro.com/field-notes",
                  },
                ],
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
