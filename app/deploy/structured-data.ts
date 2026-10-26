export const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ClauseVault",
  "description": "Smart clause library built for real estate professionals who want to close deals and protect clients without reinventing the wheel.",
  "url": "https://yourdomain.com/deploy",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "author": {
    "@type": "Person",
    "name": "Aylen Montenegro",
    "jobTitle": "Real Estate Contract Manager",
    "description": "Two decades of contract management, agent wrangling, and deal-saving experience."
  },
  "featureList": [
    "500+ real estate clauses",
    "Instant search functionality",
    "Proven legal language",
    "Fire drill mode for urgent situations"
  ],
  "screenshot": "https://yourdomain.com/images/clausevault-screenshot.jpg",
  "softwareVersion": "1.0",
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ClauseVault",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/images/clausevault-logo.png",
  "description": "Smart clause library for real estate professionals",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Aylen Montenegro"
  },
  "sameAs": [
    "https://twitter.com/clausevault",
    "https://linkedin.com/company/clausevault"
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
      "name": "ClauseVault",
      "item": "https://yourdomain.com/deploy"
    }
  ]
};
