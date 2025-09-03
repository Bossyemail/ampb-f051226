export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Elevate Transaction Coordination",
  "description": "Premium transaction coordination service for South Florida real estate agents. Licensed, experienced, and local with over two decades of combined expertise in lending, operations, title, and sales.",
  "provider": {
    "@type": "Organization",
    "name": "Elevate TC Services",
    "url": "https://yourdomain.com/elevate",
    "logo": "https://yourdomain.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/elevate-tc-services",
      "https://facebook.com/elevatetcservices"
    ]
  },
  "serviceType": "Transaction Coordination",
  "areaServed": {
    "@type": "Place",
    "name": "South Florida",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "FL",
      "addressCountry": "US"
    }
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/LimitedAvailability",
    "description": "Premium transaction coordination service with limited availability for qualified agents"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Transaction Coordination Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deal Management",
          "description": "Complete deal management from contract to closing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Compliance Management",
          "description": "Ensure all transactions meet regulatory requirements"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Document Coordination",
          "description": "Handle all paperwork and documentation with precision"
        }
      }
    ]
  },
  "url": "https://yourdomain.com/elevate",
  "image": "https://yourdomain.com/elevate-hero.jpg",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yourdomain.com/elevate"
  }
};

export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elevate TC Services",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "description": "Premium transaction coordination service for South Florida real estate agents",
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
    "https://linkedin.com/company/elevate-tc-services",
    "https://facebook.com/elevatetcservices"
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
      "name": "Elevate",
      "item": "https://yourdomain.com/elevate"
    }
  ]
};
