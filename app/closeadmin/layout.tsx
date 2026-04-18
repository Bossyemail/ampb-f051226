import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CloseAdmin — Email & ops for real estate professionals",
  description:
    "Ready-to-send templates and an AI generator trained on real transaction messages — inspections, delays, escalations, and save-the-deal moments.",
  openGraph: {
    title: "CloseAdmin",
    description:
      "Less typing. Fewer mistakes. Cleaner communication for real estate volume.",
    type: "website",
    url: "https://aylenmontenegro.com/closeadmin",
  },
  alternates: {
    canonical: "https://aylenmontenegro.com/closeadmin",
  },
};

export default function CloseAdminLayout({ children }: { children: ReactNode }) {
  return children;
}
