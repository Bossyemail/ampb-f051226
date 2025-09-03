export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aylen Montenegro",
  "description": "Real estate consultant and industry expert with over 20 years of experience in South Florida real estate.",
  "url": "https://yourdomain.com/about",
  "image": "https://yourdomain.com/aylen-montenegro.jpg",
  "sameAs": [
    "https://linkedin.com/in/aylenmontenegro",
    "https://facebook.com/aylenmontenegro",
    "https://instagram.com/aylenmontenegro"
  ],
  "jobTitle": "Real Estate Consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "Aylen Montenegro Consulting"
  },
  "knowsAbout": [
    "Real Estate",
    "Real Estate Consulting",
    "South Florida Real Estate",
    "Real Estate Transactions",
    "Real Estate Contracts",
    "Real Estate Industry"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "alumniOf": {
    "@type": "Organization",
    "name": "Real Estate Industry"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Real Estate Consulting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real Estate Consulting",
          "description": "Professional real estate consulting services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industry Expertise",
          "description": "Real estate industry expertise and guidance"
        }
      }
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yourdomain.com/about"
  }
};

export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aylen Montenegro Consulting",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "description": "Real estate consulting services by Aylen Montenegro, industry expert with over 20 years of experience",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Aylen Montenegro"
  },
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
    "https://linkedin.com/company/aylen-montenegro-consulting",
    "https://facebook.com/aylenmontenegroconsulting"
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
      "item": "https://yourdomain.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://yourdomain.com/about"
    }
  ]
};
