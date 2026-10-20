// Site-wide structured data for SEO

export const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aylen Montenegro",
  "url": "https://aylenmontenegro.com",
  "logo": "https://aylenmontenegro.com/images/logo.png",
  "description": "Real estate transaction coordination and software for South Florida agents and brokerages. Licensed Florida real estate professional with 20+ years of experience and 3,000+ closings supported.",
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
    "name": "Real Estate Services & Software",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real Estate Transaction Coordination",
          "description": "Contract-to-close transaction coordination for agents and brokerages across Miami-Dade, Broward, and Palm Beach County"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": "CloseAdmin",
          "description": "Transaction management software built for real estate professionals. Currently in private beta."
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
  "url": "https://aylenmontenegro.com",
  "description": "Transaction coordination, software, and editorial writing on real estate operations for South Florida agents and brokerages.",
  "inLanguage": "en-US",
  "copyrightYear": "2026",
  "creator": { "@id": "https://aylenmontenegro.com/#person" },
  "publisher": { "@id": "https://aylenmontenegro.com/#organization" }
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
