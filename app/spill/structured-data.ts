export const structuredData = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  "name": "SPILL Newsletter",
  "description": "The Real Estate Snarkletter - Your virtual BFF in the trenches of real estate, dishing out unfiltered truths, battle-tested tips, and inbox gold you'll actually look forward to reading.",
  "url": "https://aylenmontenegro.com/spill",
  "logo": "https://aylenmontenegro.com/logo.png",
  "sameAs": [
    "https://linkedin.com/company/spill-newsletter",
    "https://facebook.com/spillnewsletter"
  ],
  "foundingDate": "2024",
  "publisher": {
    "@type": "Organization",
    "name": "Aylen Montenegro",
    "url": "https://aylenmontenegro.com"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "SPILL Newsletter Subscription",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Weekly Newsletter",
          "description": "Unfiltered real estate industry insights and tips"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Problem of the Week",
          "description": "Solutions to common real estate agent challenges"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quick Wins",
          "description": "2-minute tweaks that make you look like you have a 10-person team"
        }
      }
    ]
  },
  "image": "https://aylenmontenegro.com/spill-hero.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://aylenmontenegro.com/spill"
  }
};

export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SPILL Newsletter",
  "url": "https://aylenmontenegro.com",
  "logo": "https://aylenmontenegro.com/logo.png",
  "description": "The Real Estate Snarkletter - Unfiltered industry insights for real estate agents",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://linkedin.com/company/spill-newsletter",
    "https://facebook.com/spillnewsletter"
  ]
};

export const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://aylenmontenegro.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "SPILL",
      "item": "https://aylenmontenegro.com/spill"
    }
  ]
};
