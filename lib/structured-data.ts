// Site-wide structured data for SEO

export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aylen Montenegro",
  "alternateName": "clausevault",
  "url": "https://aylenmontenegro.com",
  "logo": "https://aylenmontenegro.com/images/logo.png",
  "description": "Helping South Florida real estate agents close more deals with contract management, email templates, and proven frameworks.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Aylen Montenegro",
    "url": "https://aylenmontenegro.com/about"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "hello@aylenmontenegro.com",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/in/aylen-montenegro-pa-02083939/",
    "https://instagram.com/aylenbuilds",
    "https://youtube.com/@aylenmontenegropa",
    "https://threads.net/@aylenbuilds"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Real Estate Tools & Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Transaction Coordination Services",
          "description": "VIP transaction coordination and systems for real estate agents"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "ClauseVault",
          "description": "Searchable, copy-ready contract clauses for real estate professionals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "BossyEmail",
          "description": "Email templates that close deals faster"
        }
      }
    ]
  }
};

export const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Aylen Montenegro",
  "url": "https://aylenmontenegro.com",
  "image": "https://aylenmontenegro.com/images/aylen-profile.jpg",
  "description": "Real Estate Contract Manager and licensed Florida real estate professional serving South Florida agents. 20+ years experience, 3,000+ closings supported.",
  "jobTitle": "Real Estate Contract Manager",
  "worksFor": {
    "@type": "Organization",
    "name": "Aylen Montenegro"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "email": "hello@aylenmontenegro.com",
  "sameAs": [
    "https://www.linkedin.com/in/aylen-montenegro-pa-02083939/",
    "https://instagram.com/aylenbuilds",
    "https://youtube.com/@aylenmontenegropa",
    "https://threads.net/@aylenbuilds"
  ],
  "knowsAbout": [
    "Real Estate Transaction Coordination",
    "Contract Management",
    "Business Systems",
    "Email Marketing",
    "Real Estate Law",
    "Property Management"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Real Estate Industry Training"
  }
};

export const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Aylen Montenegro",
  "alternateName": "clausevault",
  "url": "https://aylenmontenegro.com",
  "description": "Real estate tools, resources, and services for South Florida agents. Contract management, email templates, and proven frameworks to close more deals.",
  "inLanguage": "en-US",
  "copyrightYear": "2025",
  "creator": {
    "@type": "Person",
    "name": "Aylen Montenegro"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Aylen Montenegro"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://aylenmontenegro.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbData = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const bookData = (book: {
  name: string;
  description: string;
  author: string;
  image?: string;
  isbn?: string;
  publisher?: string;
  datePublished?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Book",
  "name": book.name,
  "description": book.description,
  "author": {
    "@type": "Person",
    "name": book.author
  },
  "image": book.image || "https://aylenmontenegro.com/images/books/default.jpg",
  "isbn": book.isbn,
  "publisher": {
    "@type": "Organization",
    "name": book.publisher || "Aylen Montenegro"
  },
  "datePublished": book.datePublished || "2025",
  "bookFormat": "Paperback",
  "numberOfPages": "250",
  "genre": "Business",
  "inLanguage": "en-US"
});

export const serviceData = (service: {
  name: string;
  description: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "Aylen Montenegro"
  },
  "areaServed": {
    "@type": "State",
    "name": "Florida"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": service.name,
    "itemListElement": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name,
        "description": service.description
      },
      "price": service.price,
      "priceCurrency": service.priceCurrency || "USD",
      "availability": service.availability || "https://schema.org/InStock"
    }
  }
});
