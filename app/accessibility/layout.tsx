import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "Accessibility Statement | Aylen Montenegro" },
  description:
    "Accessibility statement for aylenmontenegro.com — our commitments, ongoing work, and how to report issues.",
  alternates: {
    canonical: "https://aylenmontenegro.com/accessibility",
  },
  robots: { index: true, follow: true },
};

export default function AccessibilityLayout({ children }: { children: ReactNode }) {
  return children;
}
