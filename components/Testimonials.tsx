"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const BRAND_COLORS = ["#EFEBE2", "#7B8E90", "#d3ccd6", "#bcafaf"];

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  result?: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "I cannot speak highly enough of my transaction manager, Aylen Montenegro. She has become an integral part of my business and a true partner in my growth. Aylen is exceptionally efficient, knowledgeable, and professional, consistently managing each transaction with precision and care. Her support has allowed me to focus more on serving my clients at the highest level, and the improvement in my workflow and productivity has been remarkable. Since Aylen joined my team, I have experienced significant growth and a level of organization that has elevated my business operations. I rely on Aylen's expertise every day, and I recommend her without reservation to any real estate professional seeking a dedicated and reliable transaction manager.",
    author: "Daniele G.",
    role: "",
    company: "",
    rating: 5,
    result: "True business partner driving significant growth"
  },
  {
    quote: "I've worked with Aylen for several years now, and her consistency is unmatched. She's always ahead of every deadline, incredibly knowledgeable, and communicates clearly throughout the entire process. Her reliability, accountability, and attention to detail make every transaction smooth and efficient. Aylen truly exceeds expectations and elevates every deal she touches.",
    author: "Drusso C.",
    role: "",
    company: "",
    rating: 5,
    result: "Unmatched consistency that elevates every deal"
  },
  {
    quote: "Working with Aylen is truly a pleasure. She is incredibly knowledgeable, easy to work with, and always brings a great attitude to every task. She understands instructions quickly, communicates clearly, and stays consistently ahead throughout the transaction process. Her problem-solving skills are excellent, and she adapts easily to the changes that often come up in real estate transactions. Having her oversee the details gives me complete peace of mind. Aylen brings professionalism, reliability, and a collaborative spirit to every file.",
    author: "Claudia W.",
    role: "",
    company: "",
    rating: 5,
    result: "Complete peace of mind with collaborative excellence"
  },
  {
    quote: "Aylen is an absolute powerhouse always on top of everything and constantly delivering the best results. She's the glue that holds our team together, making every transaction smooth and effortless. Self-made and unstoppable, she can get anything done and never takes no for an answer. What most teams need multiple people for, Aylen does all on her own, and she does it with grace, professionalism, and heart.",
    author: "Mia C",
    role: "Top Producer",
    company: "Coldwell Banker Miami Beach",
    rating: 5,
    result: "Powerhouse performance with heart"
  },
  {
    quote: "A BIG thank you to Aylen Montenegro! She was professional, precise, knowledgeable and kept us all on the ball. Smooth and quick four week closing wouldn't have happened without her.",
    author: "Maggie S",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Smooth 4-week closing"
  },
  {
    quote: "Aylen consistently delivers the highest standard of service, ensuring smooth and impeccable transactions. World-class communication skills, unwavering professionalism, an exceptional level of organization. It's always fantastic to hear that our agents are working with Aylen, as it truly contributes to making the deal feel seamless.",
    author: "Rachel I",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Seamless transactions with world-class service"
  },
  {
    quote: "I wanted to thank you and your team for your outstanding professionalism! You continue to demonstrate an impressive level of efficiency. Your commitment to accuracy not only streamlines the entire process but also instills a sense of confidence in all parties involved. Communication is key in real estate transactions, and you go above and beyond to keep all parties informed and updated.",
    author: "Debbie W",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Stress-free transactions with confidence"
  },
  {
    quote: "Aylen, is one of the best professional in Real Estate. 10 years in the business and I am truly grateful that I met them. Reliable, trustworthy, knowledgeable, very knowledgeable!! And always here to deliver the best services.",
    author: "Sofia S",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "All my business - smooth and professional deals"
  },
  {
    quote: "It is a pleasure to work with Aylen Montenegro in every transaction because her dedication to her work makes it a smooth transaction. The documentation always has all the signatures and initials; she is always attentive to every deadline, and detail that is needed, allowing the agent to dedicate more time to finding more clients.",
    author: "Yudy S",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Smooth transactions with complete documentation"
  },
  {
    quote: "I highly recommend our transaction coordinators for their efficient, professional, and helpful approach to transaction management. Their dedication to simplifying the process for our agents ensures a smooth transaction. I'm grateful for their expertise and would gladly recommend them.",
    author: "Yolanda B",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Efficient and professional transaction management"
  },
  {
    quote: "Working with Aylen has been a game-changer for my business. Her attention to detail and proactive approach to transaction management has saved me countless hours and prevented numerous potential issues. She's become an invaluable part of my team.",
    author: "Maria T",
    role: "Top Producer",
    company: "Keller Williams Realty",
    rating: 5,
    result: "Game-changing transaction support"
  },
  {
    quote: "Aylen's expertise in real estate transactions is unmatched. She handles every detail with precision and keeps me informed throughout the entire process. My clients always comment on how smooth and professional everything feels.",
    author: "Carlos R",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Unmatched transaction expertise"
  },
  {
    quote: "Aylen...she is just wow! I've worked with her for almost four years, and she has been nothing short of amazing. Incredibly proactive, highly knowledgeable about real estate, and always on top of every detail. She has never missed a deadline. I've learned so much from her and truly value her expertise.",
    author: "Andres C",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Four years of flawless service"
  },
  {
    quote: "Aylen she is just wow! I've worked with her for almost four years, and she has been nothing short of amazing. Incredibly proactive, highly knowledgeable about real estate, and always on top of every detail, she has never missed a deadline. I've learned so much from her and truly value her expertise.",
    author: "Elina S",
    role: "Top Producer",
    company: "The Alpha Commercial",
    rating: 5,
    result: "Four years of exceptional expertise"
  },
  {
    quote: "Where do I even begin with Aylen? She has the patience of a saint, and her knowledge spans everything from A to Z. She's someone I can truly trust every single day, and someone I feel comfortable opening up to. I've worked with Aylen since the very start of my real estate career, and I can confidently say I would not be where I am today without her. Aylen comes highly recommended — not just by me, but also by my partners Laura and Mia. She is smart, educated, patient, humble, and incredibly understanding. I'd work with Aylen 11 out of 10 times.",
    author: "Chase C",
    role: "Top Producer",
    company: "Coldwell Banker Miami Beach",
    rating: 5,
    result: "Trusted partner from day one"
  },
  {
    quote: "Working with Aylen has been nothing short of exceptional. She is the heartbeat of every transaction meticulous, proactive, and always several steps ahead. Her attention to detail is unmatched, ensuring that no document is overlooked and no deadline is missed. Communication with her is seamless; she anticipates needs before they arise and resolves challenges before they become problems. Thanks to her expertise and dedication, every process feels effortless and stress-free. I have worked with many professionals in real estate, but her combination of knowledge, efficiency, and genuine care for clients is truly rare. She is not just a transaction coordinator, she is the reason closings happen smoothly and successfully.",
    author: "Rosa P",
    role: "The Poler Group",
    company: "The Poler Group",
    rating: 5,
    result: "The reason closings happen smoothly and successfully"
  },
  {
    quote: "I had an outstanding experience working with Aylen in multiple deals. She is professional, highly proficient, and handled every detail with exceptional care and efficiency. Her expertise made the process smooth and stress-free. I would highly recommend her services to anyone seeking a contract coordinator. She is a true real estate professional.",
    author: "Gloria L",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Outstanding experience in multiple deals"
  },
  {
    quote: "I’m an experienced Realtor with eight years in the business and over 500 closed deals, specializing in luxury homes in Florida and Massachusetts. I’ve worked with many transaction coordinators over the years, but Aylen and her team are by far the best I’ve ever partnered with. We now trust Aylen with every single transaction — always professional, always reliable.",
    author: "Sergio G",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Best TC partnership in 8 years and 500+ deals"
  },
  {
    quote: "I shared recently just how strong and consistent your support is to your agents on the intro emails, on top of execution and circulatios addendums, keeping buyer's and seller's team equally informed, obtaining all items that your clients need from association to circulate with buyers and with lenders, and how crucial is your involvement is on staying on top of all contract deadlines.",
    author: "Sofia M.",
    role: "Firm Administrator",
    company: "",
    rating: 5
  },
  {
    quote: "Is rare to find true support in this town. Our luxury business move fast and Aylen does not miss a beat. Crushing one contingency after the other one, she is still responsive and polite after the 20th email when someone can't work a pdf. This is why she is on every deal we do.",
    author: "Laura C. & Seth C.",
    role: "Residential Luxury Specialists",
    company: "",
    rating: 5
  },
  {
    quote: "I would not dream of doing any deals without Aylen by my side. Her support from contract to close is part of the added value I like to offer my clients. From deadlines to solving problems when they arise, I can count on her to deliver",
    author: "Gisell S.",
    role: "",
    company: "Coldwell Banker Realty",
    rating: 5
  },
  {
    quote: "Aylen and I have worked on countless transactions together and every time I see her name as a TC I know the agent and I will have proper support. Aylen and her team establish timely communication between both buyers and seller and make sure that all deadlines are met. They also facilitate communication with insurance agents, HOAs, property management, or any other party involved, this way the agent can focus on getting the next deal.",
    author: "Fernando M.",
    role: "Originating Manager",
    company: "",
    rating: 5
  },
  {
    quote: "Aylen is absolutely incredible to work with. Her attention to detail and proactive communication makes every transaction seamless. She anticipates needs before they arise and always keeps everyone informed throughout the process. I wouldn't trust anyone else with my deals.",
    author: "Judith L.",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Seamless transactions with proactive communication"
  },
  {
    quote: "Aylen was such a huge help to us throughout our closing process! She made everything smooth and stress-free, and it was truly a pleasure working with her. We couldn't have done it without her support.",
    author: "Ms. Palmer",
    role: "Happy Buyer",
    company: "",
    rating: 5,
    result: "Smooth and stress-free closing process"
  },
  {
    quote: "Working with Aylen has transformed how I handle my real estate business. Her expertise and efficiency allow me to focus on what I do best - selling. Every transaction is handled with precision and care. She's become an essential part of my success.",
    author: "Andres E.",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Transformed business operations with precision and care"
  },
  {
    quote: "Aylen is fast, sharp, and always on top of the details. Her quickness and professionalism make every transaction smoother. She's the kind of partner you want on your side when deadlines matter.",
    author: "Robert R.",
    role: "Attorney",
    company: "",
    rating: 5,
    result: "Fast, sharp, and always on top of details"
  },
  {
    quote: "Aylen's professionalism and knowledge are unmatched. She handles every aspect of the transaction with such expertise that I never have to worry about anything falling through the cracks. Her communication is clear, timely, and always helpful.",
    author: "Fernando A.",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Unmatched professionalism with clear communication"
  },
  {
    quote: "Other people wouldn't even return our calls. Aylen not only answered, but she answered every single question we threw her way — and trust me, there were a lot. She made us feel confident every step of the way, and for that, we're forever grateful.",
    author: "Denise M",
    role: "Happy Buyer",
    company: "",
    rating: 5,
    result: "Answered every question with confidence"
  },
  {
    quote: "I've been working with Aylen for years and she consistently delivers exceptional service. Her ability to manage complex transactions while keeping everyone informed is remarkable. She's not just a transaction coordinator - she's a true partner in my business success.",
    author: "Laura G.",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "True business partner with exceptional service"
  },
  {
    quote: "Timing wasn't exactly on our side — we sold, then the market went wild, and suddenly finding a new home felt impossible. But Aylen stuck with us, navigated the chaos, and made sure we landed in the right place. Now we've got the dream pool and a tiki hut we didn't even know we needed. Worth every ounce of stress.",
    author: "Happy Seller & Buyer",
    role: "",
    company: "",
    rating: 5,
    result: "Navigated market chaos to find dream home"
  },
  {
    quote: "Most people would have thrown in the towel after months of probate and foreclosure delays — but not Aylen. She stuck with us for a whole year, kept us sane, and never let us lose sight of the goal. In the end, we got the dream home we'd been waiting for, and it was worth every minute.",
    author: "Grateful Homebuyer",
    role: "",
    company: "",
    rating: 5,
    result: "Stuck with us for a whole year through delays"
  },
  {
    quote: "Inherited property comes with enough stress on its own — the last thing I wanted was a long, drawn-out sale. Aylen jumped in, took charge, and had the Coral Gables home sold in under 30 days. Fast, smooth, and done. Exactly what I needed.",
    author: "Satisfied Seller",
    role: "",
    company: "",
    rating: 5,
    result: "Sold inherited property in under 30 days"
  },
  {
    quote: "Aylen went above and beyond to help us find the perfect home with the land my husband wanted, in exactly the location we had dreamed of. With our hectic schedules, she made the process seamless — we signed during our lunch break and funded before the end of the workday. It truly couldn't have been easier.",
    author: "Happy Buyer",
    role: "",
    company: "",
    rating: 5,
    result: "Seamless process with perfect timing"
  },
  {
    quote: "Aylen is my secret weapon. I don't touch a transaction without her. She keeps the chaos under control, knows exactly how to guide a deal to closing, and saves me (and my clients) more times than I can count. Simply put — she's the closer behind the closer.",
    author: "Nathalys F.",
    role: "Top Producer",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "The closer behind the closer"
  },
  {
    quote: "Back in 2009, when the market was in the toilet, I was searching for a fixer-upper under $50,000. Most listing agents holding all the REO properties wouldn't even bother to answer the phone. Then I was referred to Aylen, and from our very first call I knew she was different — she took me seriously. She found me a home for just $25,000, and I remodeled it into exactly what I wanted. Our family still lives here today, and the value has skyrocketed little by little. It turned out to be one of the best decisions I've ever made.",
    author: "Happy Buyer",
    role: "",
    company: "",
    rating: 5,
    result: "Found $25K home in 2009 market crash"
  },
  {
    quote: "I needed to sell my home quickly and move out of state. Aylen made it happen — we closed in just 30 days. All I had to do was take my passport and go; she even took care of disposing of the personal property so I didn't have to worry about a thing. She turned what could have been overwhelming into a smooth, stress-free process.",
    author: "Relieved Seller",
    role: "",
    company: "",
    rating: 5,
    result: "30-day closing with out-of-state move"
  },
  {
    quote: "I have had the pleasure of working with Aylen for many years now. When I have a transaction where she is the TC I am instantly happy because I know she is extremely efficient, responsive and effective. She goes above and beyond her role. In fact, I have told her before that she should charge more because of her expertise, professionalism and ability to prevent- and solve problems- should they arise. Agents, buyers and sellers are all in GREAT hands with, Aylen!  MAKE TC'S GREAT AGAIN!",
    author: "Lourdes F.",
    role: "VP of Lending",
    company: "",
    rating: 5
  },
  {
    quote: "Aylen Montenegro has demonstrated exceptional performance and is a crucial asset to our real estate team. Her consistently go above and beyond to ensure our transactions are seamless, compliant, and our clients' best interests are protected. Her expertise and attention to detail have significantly contributed to our team's efficiency and success. Five stars all the way—we are so grateful for her contributions!",
    author: "Edner F.",
    role: "Real Estate Professional",
    company: "Coldwell Banker Realty",
    rating: 5,
    result: "Crucial asset with five-star performance"
  }
];

// Function to control individual card positioning
const getCardMargin = (index: number) => {
  // Consistent spacing throughout - let natural card heights create the Pinterest effect
  const margins = [
    0,    // Mia C (card 0) - top left
    0,    // Sofia S (card 1) - top right  
    0,    // Maggie S (card 2) - top center
    0,    // Agelica C (card 3) - natural flow
    0,    // Yudy S (card 4) - natural flow
    0,    // Rachel I (card 5) - natural flow
    0,    // Debbie W (card 6) - natural flow
    0,    // Yolanda B (card 7) - natural flow
    0,    // Maria T (card 8) - natural flow
    0     // Carlos R (card 9) - natural flow
  ];
  return margins[index] || 0;
};

// Function to get random brand color
const getRandomBrandColor = (index: number) => {
  return BRAND_COLORS[index % BRAND_COLORS.length];
};

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.children;
    const columns = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const columnHeights = new Array(columns).fill(0);
    const columnElements: HTMLElement[][] = Array.from({ length: columns }, () => []);

    // Reset positions
    Array.from(cards).forEach((card) => {
      (card as HTMLElement).style.position = 'absolute';
      (card as HTMLElement).style.top = '0';
      (card as HTMLElement).style.left = '0';
    });

    // Position cards
    Array.from(cards).forEach((card, index) => {
      const cardElement = card as HTMLElement;
      const columnIndex = index % columns;
      
      cardElement.style.position = 'absolute';
      cardElement.style.top = `${columnHeights[columnIndex]}px`;
      cardElement.style.left = `${columnIndex * (100 / columns)}%`;
      cardElement.style.width = `${100 / columns - 2}%`;
      
      columnElements[columnIndex].push(cardElement);
      columnHeights[columnIndex] += cardElement.offsetHeight + 16; // 16px gap
    });

    // Set container height
    const maxHeight = Math.max(...columnHeights);
    container.style.height = `${maxHeight}px`;
  }, [testimonials]);

  return (
    <section
      className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 overflow-hidden"
    >
      {/* Falling Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Streams 1-13: Far Left */}
        <motion.div className="absolute top-64 left-0 w-2 h-2 bg-white/40 rounded-full" animate={{ y: [0, 300], x: [0, 200], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }} />
        <motion.div className="absolute top-64 left-0 w-1.5 h-1.5 bg-white/35 rounded-full" animate={{ y: [0, 250], x: [0, 180], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} />
        <motion.div className="absolute top-64 left-1/24 w-2 h-2 bg-white/30 rounded-full" animate={{ y: [0, 350], x: [0, 190], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} />
        <motion.div className="absolute top-64 left-1/24 w-1.5 h-1.5 bg-white/35 rounded-full" animate={{ y: [0, 280], x: [0, 170], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 2.0 }} />
        <motion.div className="absolute top-64 left-1/12 w-2 h-2 bg-white/40 rounded-full" animate={{ y: [0, 320], x: [0, 150], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.6 }} />
        <motion.div className="absolute top-64 left-1/12 w-1.5 h-1.5 bg-white/30 rounded-full" animate={{ y: [0, 270], x: [0, 160], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }} />
        <motion.div className="absolute top-64 left-1/8 w-2 h-2 bg-white/35 rounded-full" animate={{ y: [0, 290], x: [0, 140], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
        <motion.div className="absolute top-64 left-1/8 w-1.5 h-1.5 bg-white/40 rounded-full" animate={{ y: [0, 330], x: [0, 130], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut", delay: 2.4 }} />
        <motion.div className="absolute top-64 left-1/6 w-2 h-2 bg-white/30 rounded-full" animate={{ y: [0, 250], x: [0, 120], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.0 }} />
        <motion.div className="absolute top-64 left-1/6 w-1.5 h-1.5 bg-white/35 rounded-full" animate={{ y: [0, 310], x: [0, 110], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2.8 }} />
        <motion.div className="absolute top-64 left-5/24 w-2 h-2 bg-white/40 rounded-full" animate={{ y: [0, 340], x: [0, 100], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} />
        <motion.div className="absolute top-64 left-5/24 w-1.5 h-1.5 bg-white/30 rounded-full" animate={{ y: [0, 260], x: [0, 90], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 1.4 }} />
        <motion.div className="absolute top-64 left-1/4 w-2 h-2 bg-white/35 rounded-full" animate={{ y: [0, 300], x: [0, 80], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
        
        {/* Streams 14-26: Left Center */}
        <motion.div className="absolute top-64 left-1/4 w-1.5 h-1.5 bg-white/40 rounded-full" animate={{ y: [0, 250], x: [0, 70], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut", delay: 2.2 }} />
        <motion.div className="absolute top-64 left-7/24 w-2 h-2 bg-white/30 rounded-full" animate={{ y: [0, 350], x: [0, 60], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }} />
        <motion.div className="absolute top-64 left-7/24 w-1.5 h-1.5 bg-white/35 rounded-full" animate={{ y: [0, 280], x: [0, 50], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2.6 }} />
        <motion.div className="absolute top-64 left-1/3 w-2 h-2 bg-white/40 rounded-full" animate={{ y: [0, 320], x: [0, 40], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }} />
        <motion.div className="absolute top-64 left-1/3 w-1.5 h-1.5 bg-white/30 rounded-full" animate={{ y: [0, 270], x: [0, 30], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 1.7 }} />
        <motion.div className="absolute top-64 left-3/8 w-2 h-2 bg-white/35 rounded-full" animate={{ y: [0, 290], x: [0, 25], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} />
        <motion.div className="absolute top-64 left-3/8 w-1.5 h-1.5 bg-white/40 rounded-full" animate={{ y: [0, 330], x: [0, 20], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut", delay: 2.9 }} />
        <motion.div className="absolute top-64 left-5/12 w-2 h-2 bg-white/30 rounded-full" animate={{ y: [0, 250], x: [0, 15], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }} />
        <motion.div className="absolute top-64 left-5/12 w-1.5 h-1.5 bg-white/35 rounded-full" animate={{ y: [0, 310], x: [0, 10], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2.1 }} />
        <motion.div className="absolute top-64 left-11/24 w-2 h-2 bg-white/40 rounded-full" animate={{ y: [0, 340], x: [0, 8], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
        <motion.div className="absolute top-64 left-11/24 w-1.5 h-1.5 bg-white/30 rounded-full" animate={{ y: [0, 260], x: [0, 5], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 1.9 }} />
        <motion.div className="absolute top-64 left-1/2 w-2 h-2 bg-white/35 rounded-full" animate={{ y: [0, 300], x: [0, 3], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} />
        <motion.div className="absolute top-64 left-1/2 w-1.5 h-1.5 bg-white/40 rounded-full" animate={{ y: [0, 280], x: [0, 2], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} />
        
        {/* Streams 27-39: Right Center */}
        <motion.div className="absolute top-64 left-13/24 w-2 h-2 bg-white/30 rounded-full" animate={{ y: [0, 350], x: [0, 1], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} />
        <motion.div className="absolute top-64 left-13/24 w-1.5 h-1.5 bg-white/35 rounded-full" animate={{ y: [0, 270], x: [0, 1], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2.7 }} />
        <motion.div className="absolute top-64 left-7/12 w-2 h-2 bg-white/40 rounded-full" animate={{ y: [0, 320], x: [0, 0], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }} />
        <motion.div className="absolute top-64 left-7/12 w-1.5 h-1.5 bg-white/30 rounded-full" animate={{ y: [0, 290], x: [0, 0], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />
        <motion.div className="absolute top-64 left-5/8 w-2 h-2 bg-white/35 rounded-full" animate={{ y: [0, 250], x: [0, 0], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
        <motion.div className="absolute top-64 left-5/8 w-1.5 h-1.5 bg-white/40 rounded-full" animate={{ y: [0, 330], x: [0, 0], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut", delay: 2.3 }} />
        <motion.div className="absolute top-64 left-2/3 w-2 h-2 bg-white/30 rounded-full" animate={{ y: [0, 310], x: [0, 0], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }} />
        <motion.div className="absolute top-64 left-2/3 w-1.5 h-1.5 bg-white/35 rounded-full" animate={{ y: [0, 260], x: [0, 0], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2.9 }} />
        <motion.div className="absolute top-64 left-17/24 w-2 h-2 bg-white/40 rounded-full" animate={{ y: [0, 340], x: [0, 0], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} />
        <motion.div className="absolute top-64 left-17/24 w-1.5 h-1.5 bg-white/30 rounded-full" animate={{ y: [0, 280], x: [0, 0], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 1.7 }} />
        <motion.div className="absolute top-64 left-3/4 w-2 h-2 bg-white/35 rounded-full" animate={{ y: [0, 300], x: [0, 0], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} />
        <motion.div className="absolute top-64 left-3/4 w-1.5 h-1.5 bg-white/40 rounded-full" animate={{ y: [0, 270], x: [0, 0], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut", delay: 2.1 }} />
        <motion.div className="absolute top-64 left-19/24 w-2 h-2 bg-white/30 rounded-full" animate={{ y: [0, 320], x: [0, 0], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }} />
        
        {/* Streams 40-52: Far Right */}
        <motion.div className="absolute top-64 left-19/24 w-1.5 h-1.5 bg-white/35 rounded-full" animate={{ y: [0, 290], x: [0, 0], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2.7 }} />
        <motion.div className="absolute top-64 left-5/6 w-2 h-2 bg-white/40 rounded-full" animate={{ y: [0, 250], x: [0, 0], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
        <motion.div className="absolute top-64 left-5/6 w-1.5 h-1.5 bg-white/30 rounded-full" animate={{ y: [0, 350], x: [0, 0], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 1.9 }} />
        <motion.div className="absolute top-64 left-7/8 w-2 h-2 bg-white/35 rounded-full" animate={{ y: [0, 310], x: [0, 0], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
        <motion.div className="absolute top-64 left-7/8 w-1.5 h-1.5 bg-white/40 rounded-full" animate={{ y: [0, 280], x: [0, 0], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut", delay: 2.3 }} />
        <motion.div className="absolute top-64 left-23/24 w-2 h-2 bg-white/30 rounded-full" animate={{ y: [0, 340], x: [0, 0], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }} />
        <motion.div className="absolute top-64 left-23/24 w-1.5 h-1.5 bg-white/35 rounded-full" animate={{ y: [0, 260], x: [0, 0], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2.9 }} />
        <motion.div className="absolute top-64 left-11/12 w-2 h-2 bg-white/40 rounded-full" animate={{ y: [0, 300], x: [0, 0], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} />
        <motion.div className="absolute top-64 left-11/12 w-1.5 h-1.5 bg-white/30 rounded-full" animate={{ y: [0, 270], x: [0, 0], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />
        <motion.div className="absolute top-64 left-47/48 w-2 h-2 bg-white/35 rounded-full" animate={{ y: [0, 320], x: [0, 0], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }} />
        <motion.div className="absolute top-64 left-47/48 w-1.5 h-1.5 bg-white/40 rounded-full" animate={{ y: [0, 290], x: [0, 0], opacity: [0, 0.6, 0.6, 0] }} transition={{ duration: 6.0, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} />
        <motion.div className="absolute top-64 left-95/96 w-2 h-2 bg-white/30 rounded-full" animate={{ y: [0, 250], x: [0, 0], opacity: [0, 0.4, 0.4, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }} />
        <motion.div className="absolute top-64 left-95/96 w-1.5 h-1.5 bg-white/35 rounded-full" animate={{ y: [0, 350], x: [0, 0], opacity: [0, 0.5, 0.5, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2.7 }} />
      </div>
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-3 md:mb-4"
        >
          What Other People Said<br />(No NDA Required)
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          <p>They swear I deliver. Either that, or I&apos;m way better at bribery than I thought.</p>
          <p>Turns out contract triage is a marketable skill.</p>
          <p>Real feedback. Zero bribes. Pinky swear.</p>
        </motion.div>
      </div>

            {/* Testimonials Container */}
      <div ref={containerRef} className="relative max-h-[600px] overflow-y-auto pb-16 scrollbar-hide">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.author}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
          >
            {/* Glass Effect Card */}
            <div 
              className="relative overflow-hidden rounded-lg border text-white hover:bg-white hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/5 group/neon hover:scale-[1.02] hover:-translate-y-1"
              style={{ 
                borderColor: getRandomBrandColor(index),
                backgroundColor: `${getRandomBrandColor(index)}10`
              }}
            >
                <div className="relative p-4">
                  {/* Quote Text */}
                  <blockquote className="text-white/90 group-hover/neon:text-white/90 text-sm font-medium leading-relaxed mb-3">
                    "{testimonial.quote}"
                  </blockquote>
      
                  {/* Author Info */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 group-hover/neon:from-white/20 group-hover/neon:to-white/10 flex items-center justify-center">
                      <span className="text-white/90 group-hover/neon:text-white/90 font-semibold text-xs">
                        {testimonial.author.split(' ')[0][0]}{testimonial.author.split(' ')[1]?.[0] || ''}
                      </span>
                    </div>
                    <div>
                      <div className="text-white group-hover/neon:text-white font-medium text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400 group-hover/neon:text-gray-300 text-xs">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
        ))}
      </div>
          
          {/* Scroll Indicator - Above CTA */}
          <div className="text-center py-4">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex flex-col items-center gap-2"
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                />
              </div>
              <span className="text-white/60 text-xs font-medium">Scroll for more testimonials ({testimonials.length} total)</span>
            </motion.div>
          </div>

      {/* Bottom CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <p className="text-gray-300 mb-4">
          Ready to join them?
        </p>
        <a 
          href="/elevate" 
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/[0.03] transition rounded-lg"
        >
          Let's Talk Results
        </a>
      </motion.div>
    </section>
  );
}
