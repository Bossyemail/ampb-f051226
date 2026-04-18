export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage?: string;
  rating: number;
  reviews: number;
  readTime: string;
  price: string;
  category: string;
  bestseller?: boolean;
  new?: boolean;
  features: string[];
  excerpt?: string;
  tableOfContents?: string[];
  author: string;
  publishDate: string;
  isbn?: string;
  pages?: number;
  format: 'ebook' | 'paperback' | 'hardcover' | 'audiobook';
  availableFormats: ('ebook' | 'paperback' | 'hardcover' | 'audiobook')[];
}

export const books: Book[] = [
  {
    id: "chief-email-officer",
    title: "Chief Email Officer",
    subtitle: "The Complete Email Marketing System for Real Estate Agents",
    description: "Transform your email marketing from amateur to enterprise-level. This isn't just about sending emails — it's about building a revenue-generating machine that works while you sleep.",
    coverImage: "/images/books/chief-email-officer.jpg",
    rating: 4.9,
    reviews: 342,
    readTime: "4 hours",
    price: "$47",
    category: "Email Marketing",
    bestseller: true,
    new: false,
    author: "Aylen Montenegro",
    publishDate: "2024",
    pages: 312,
    format: "ebook",
    availableFormats: ["ebook", "paperback", "audiobook"],
    features: [
      "Complete email marketing framework",
      "Automated nurture sequences",
      "High-converting templates",
      "List building strategies",
      "Segmentation techniques",
      "A/B testing methodologies",
      "Compliance best practices",
      "Revenue tracking systems"
    ],
    excerpt: "Most agents treat email like a chore. Top performers treat it like their most valuable asset. Learn how to build an email system that generates consistent, predictable revenue month after month.",
    tableOfContents: [
      "Chapter 1: The Email Marketing Mindset",
      "Chapter 2: Building Your Email Foundation",
      "Chapter 3: List Building That Converts",
      "Chapter 4: Welcome Sequences That Wow",
      "Chapter 5: Nurture Campaigns That Sell",
      "Chapter 6: High-Converting Templates",
      "Chapter 7: Segmentation Strategies",
      "Chapter 8: Automation That Scales",
      "Chapter 9: Testing and Optimization",
      "Chapter 10: Compliance and Best Practices"
    ]
  },
  {
    id: "confessions-real-estate-manager",
    title: "Confessions of a Real Estate Manager",
    subtitle: "What Your Broker Won't Tell You About Building a Profitable Business",
    description: "The unvarnished truth about what it really takes to succeed in real estate. No sugar coating, no corporate speak — just the raw insights from managing hundreds of agents and millions in transactions.",
    coverImage: "/images/books/confessions-real-estate-manager.jpg",
    rating: 4.8,
    reviews: 189,
    readTime: "3.5 hours",
    price: "$39",
    category: "Business Strategy",
    bestseller: false,
    new: true,
    author: "Aylen Montenegro",
    publishDate: "2024",
    pages: 268,
    format: "ebook",
    availableFormats: ["ebook", "paperback"],
    features: [
      "Behind-the-scenes insights",
      "Profit optimization strategies",
      "Team building frameworks",
      "Client retention systems",
      "Risk management tactics",
      "Technology implementation",
      "Market positioning strategies",
      "Exit planning considerations"
    ],
    excerpt: "After managing hundreds of agents and overseeing millions in transactions, I'm sharing the secrets that separate the profitable from the struggling. This is the playbook your broker doesn't want you to have.",
    tableOfContents: [
      "Chapter 1: The Real Estate Reality Check",
      "Chapter 2: Building a Profitable Foundation",
      "Chapter 3: Client Acquisition That Scales",
      "Chapter 4: Retention Strategies That Work",
      "Chapter 5: Team Building and Management",
      "Chapter 6: Technology and Systems",
      "Chapter 7: Risk Management",
      "Chapter 8: Market Positioning",
      "Chapter 9: Exit Strategies",
      "Chapter 10: The Future of Real Estate"
    ]
  }
];

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

export const getBestsellers = (): Book[] => {
  return books.filter(book => book.bestseller);
};

export const getNewBooks = (): Book[] => {
  return books.filter(book => book.new);
};

export const getBooksByCategory = (category: string): Book[] => {
  return books.filter(book => book.category === category);
};
