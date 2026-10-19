import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Aylen Montenegro" },
  description:
    "What Aylen Montenegro collects, why, and how it's used across TC Services, CloseAdmin, and the Snarkletter. No fine print games.",
  openGraph: {
    title: "Privacy Policy | Aylen Montenegro",
    description:
      "What Aylen Montenegro collects, why, and how it's used across TC Services, CloseAdmin, and the Snarkletter.",
    type: "website",
    url: "https://aylenmontenegro.com/privacy",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | Aylen Montenegro",
      },
    ],
  },
  alternates: {
    canonical: "https://aylenmontenegro.com/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Aylen Montenegro",
    description:
      "What Aylen Montenegro collects, why, and how it's used across TC Services, CloseAdmin, and the Snarkletter.",
    images: ["/images/og-image.jpg"],
    creator: "@aylenbuilds",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
