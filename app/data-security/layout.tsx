import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "Data & Security | Aylen Montenegro" },
  description:
    "How Aylen Montenegro protects your data — security practices, infrastructure, and commitments for TC Services and CloseAdmin.",
  alternates: {
    canonical: "https://aylenmontenegro.com/data-security",
  },
  robots: { index: true, follow: true },
};

export default function DataSecurityLayout({ children }: { children: ReactNode }) {
  return children;
}
