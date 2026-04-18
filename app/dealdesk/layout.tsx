import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "DealDesk — Contract clarity for Florida real estate",
  description:
    "Find the language, set expectations, and document the ask — clause support built for real files.",
  openGraph: {
    title: "DealDesk",
    description: "Contract clarity without playing attorney.",
    type: "website",
    url: "https://aylenmontenegro.com/dealdesk",
  },
  alternates: {
    canonical: "https://aylenmontenegro.com/dealdesk",
  },
};

export default function DealDeskLayout({ children }: { children: ReactNode }) {
  return children;
}
