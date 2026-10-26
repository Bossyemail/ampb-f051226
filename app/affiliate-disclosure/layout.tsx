import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "Affiliate Disclosure | Aylen Montenegro" },
  description:
    "Affiliate disclosure for aylenmontenegro.com — how affiliate relationships are handled and what it means for you.",
  alternates: {
    canonical: "https://aylenmontenegro.com/affiliate-disclosure",
  },
  robots: { index: true, follow: true },
};

export default function AffiliateDisclosureLayout({ children }: { children: ReactNode }) {
  return children;
}
