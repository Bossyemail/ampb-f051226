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
              "@type": "ProfessionalService",
              "@id": "https://aylenmontenegro.com/tc-services#service",
              "name": "South Florida Real Estate Transaction Coordination",
              "url": "https://aylenmontenegro.com/tc-services",
              "image": "https://aylenmontenegro.com/images/og-image.jpg",
              "description": "Contract-to-close real estate transaction coordination for agents, teams, and brokerages throughout Miami-Dade, Broward, and Palm Beach County. Licensed, fit-based, 20+ years experience.",
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
              },
              "priceRange": "$$"
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aylenmontenegro.com" },
                { "@type": "ListItem", "position": 2, "name": "TC Services", "item": "https://aylenmontenegro.com/tc-services" }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does a real estate transaction coordinator actually do?",
                  "acceptedAnswer": { "@type": "Answer", "text": "A real estate transaction coordinator manages the administrative and deadline-driven work required to move a transaction from executed contract through closing. This typically includes reviewing the contract and addenda for completeness, organizing the transaction file, tracking critical dates, confirming deposits, coordinating documents and signatures, and following up with the lender, title company, attorneys, inspectors, condominium associations, homeowners associations, and other parties involved. Transaction coordination does not replace the real estate agent, the lender, or the title company or closing attorney. The agent remains responsible for negotiations, client advice, strategy, and all decisions requiring their license or judgment. Lender underwriting and loan approval are the lender's domain. Title examination, closing preparation, and disbursements remain with the title company or closing attorney." }
                },
                {
                  "@type": "Question",
                  "name": "How is this different from a lower-cost or marketplace TC service?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Lower-cost and marketplace transaction coordinator services are often designed around volume, standardized checklists, and files being assigned to whichever coordinator is available. This service is built around direct accountability, Florida contract knowledge, documented communication, and limited capacity. You work with me rather than being passed between coordinators or placed into a general processing queue." }
                },
                {
                  "@type": "Question",
                  "name": "What areas do you cover?",
                  "acceptedAnswer": { "@type": "Answer", "text": "I provide real estate transaction coordination throughout the state of Florida, with a primary focus on Miami-Dade County, Broward County, and Palm Beach County." }
                },
                {
                  "@type": "Question",
                  "name": "How much does transaction coordination cost?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Transaction coordination fees are based primarily on the property's purchase price range. Current pricing begins at $595. A complete breakdown of rates is listed on the Availability and Fit Check intake form." }
                },
                {
                  "@type": "Question",
                  "name": "How do I get started?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Start by completing the fit and availability form. Each inquiry is personally reviewed. If the fit looks right, you may receive a brief follow-up or a short discovery call to confirm details before moving forward. Confirmed clients receive the service agreement, onboarding requirements, and file-submission instructions. Work begins once onboarding is complete." }
                },
                {
                  "@type": "Question",
                  "name": "Do you take on new clients anytime, or is there a waitlist?",
                  "acceptedAnswer": { "@type": "Answer", "text": "New clients are accepted based on capacity and fit rather than on an unlimited, first-come basis. I limit the number of active files I manage so existing transactions receive the communication, tracking, and attention required. Submitting the fit and availability form is the best way to confirm current availability." }
                }
              ]
            }
          ]
        }) }}
      />
      {children}
    </>
  );
}
