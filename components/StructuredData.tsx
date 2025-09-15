"use client";

import { organizationData, personData, websiteData, breadcrumbData, bookData, serviceData } from '@/lib/structured-data';

interface StructuredDataProps {
  type: 'organization' | 'person' | 'website' | 'breadcrumb' | 'book' | 'service';
  data?: any;
  breadcrumbItems?: Array<{name: string, url: string}>;
}

export default function StructuredData({ type, data, breadcrumbItems }: StructuredDataProps) {
  let structuredData;
  
  switch (type) {
    case 'organization':
      structuredData = organizationData;
      break;
    case 'person':
      structuredData = personData;
      break;
    case 'website':
      structuredData = websiteData;
      break;
    case 'breadcrumb':
      structuredData = breadcrumbItems ? breadcrumbData(breadcrumbItems) : null;
      break;
    case 'book':
      structuredData = data ? bookData(data) : null;
      break;
    case 'service':
      structuredData = data ? serviceData(data) : null;
      break;
    default:
      structuredData = null;
  }

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
