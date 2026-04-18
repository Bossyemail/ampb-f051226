import { organizationData, personData, websiteData, bookData } from '@/lib/structured-data';

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    organizationData,
    personData,
    websiteData,
    bookData({
      name: "The Smart Agent's Guide to Contracts That Close",
      description: "Field-tested frameworks for airtight contracts. Because paperwork isn't busywork—it's your paycheck. This book cuts through the chaos with field-tested clauses, compliance hacks, and real-world stories of deals saved (and commissions lost).",
      author: "Aylen Montenegro",
      image: "https://aylenmontenegro.com/images/books/smart-agents-guide.jpg",
      publisher: "Aylen Montenegro",
      datePublished: "2025"
    }),
    bookData({
      name: "Chief Email Officer – Confessions of a Contract Manager",
      description: "Memoir, survival guide, and industry roast. What do you get when you mash up years of transaction chaos, a sharp tongue, and an inbox full of 'just checking in' emails? This book.",
      author: "Aylen Montenegro", 
      image: "https://aylenmontenegro.com/images/books/chief-email-officer.jpg",
      publisher: "Aylen Montenegro",
      datePublished: "2025"
    })
  ]
};

export { organizationData, personData, websiteData };
