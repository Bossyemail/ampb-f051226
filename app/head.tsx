export default function Head() {
  return (
    <>
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#252A33" />
      <meta name="color-scheme" content="dark" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="origin-when-cross-origin" />
      
      {/* Performance Optimizations */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      
      {/* Social Media Meta Tags */}
      <meta property="og:site_name" content="Aylen Montenegro" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@aylenmontenegro" />
      <meta name="twitter:creator" content="@aylenmontenegro" />
      
      {/* Business Meta Tags */}
      <meta name="business:contact_data:street_address" content="South Florida" />
      <meta name="business:contact_data:locality" content="Florida" />
      <meta name="business:contact_data:region" content="FL" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-XXX-XXX-XXXX" />
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aylen Montenegro",
            "jobTitle": "Real Estate Consultant",
            "description": "South Florida real estate consultant helping agents close more deals faster",
            "url": "https://aylenmontenegro.com",
            "sameAs": [
              "https://www.linkedin.com/in/aylenmontenegro",
              "https://www.instagram.com/aylenmontenegro",
              "https://www.youtube.com/@aylenmontenegro"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Aylen Montenegro Consulting"
            },
            "knowsAbout": [
              "Real Estate",
              "Deal Flow",
              "SaaS",
              "Business Strategy",
              "South Florida Real Estate"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Florida",
              "addressCountry": "US"
            }
          })
        }}
      />
    </>
  );
}
