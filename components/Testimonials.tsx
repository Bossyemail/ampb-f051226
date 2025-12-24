"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

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
    company: "Coldwell Banker",
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
    company: "Coldwell Banker",
    rating: 5,
    result: "Complete peace of mind with collaborative excellence"
  },
  {
    quote: "Aylen is an absolute powerhouse always on top of everything and constantly delivering the best results. She's the glue that holds our team together, making every transaction smooth and effortless. Self-made and unstoppable, she can get anything done and never takes no for an answer. What most teams need multiple people for, Aylen does all on her own, and she does it with grace, professionalism, and heart.",
    author: "Mia C",
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "Powerhouse performance with heart"
  },
  {
    quote: "A BIG thank you to Aylen Montenegro! She was professional, precise, knowledgeable and kept us all on the ball. Smooth and quick four week closing wouldn't have happened without her.",
    author: "Maggie S",
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "Smooth 4-week closing"
  },
  {
    quote: "Aylen consistently delivers the highest standard of service, ensuring smooth and impeccable transactions. World-class communication skills, unwavering professionalism, an exceptional level of organization. It's always fantastic to hear that our agents are working with Aylen, as it truly contributes to making the deal feel seamless.",
    author: "Rachel I",
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "Seamless transactions with world-class service"
  },
  {
    quote: "I wanted to thank you and your team for your outstanding professionalism! You continue to demonstrate an impressive level of efficiency. Your commitment to accuracy not only streamlines the entire process but also instills a sense of confidence in all parties involved. Communication is key in real estate transactions, and you go above and beyond to keep all parties informed and updated.",
    author: "Debbie W",
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "Stress-free transactions with confidence"
  },
  {
    quote: "Aylen, is one of the best professional in Real Estate. 10 years in the business and I am truly grateful that I met them. Reliable, trustworthy, knowledgeable, very knowledgeable!! And always here to deliver the best services.",
    author: "Sofia S",
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "All my business - smooth and professional deals"
  },
  {
    quote: "It is a pleasure to work with Aylen Montenegro in every transaction because her dedication to her work makes it a smooth transaction. The documentation always has all the signatures and initials; she is always attentive to every deadline, and detail that is needed, allowing the agent to dedicate more time to finding more clients.",
    author: "Yudy S",
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "Smooth transactions with complete documentation"
  },
  {
    quote: "I highly recommend our transaction coordinators for their efficient, professional, and helpful approach to transaction management. Their dedication to simplifying the process for our agents ensures a smooth transaction. I'm grateful for their expertise and would gladly recommend them.",
    author: "Yolanda B",
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "Efficient and professional transaction management"
  },
  {
    quote: "Working with Aylen has been a game-changer for my business. Her attention to detail and proactive approach to transaction management has saved me countless hours and prevented numerous potential issues. She's become an invaluable part of my team.",
    author: "Maria T",
    role: "",
    company: "Keller Williams Realty",
    rating: 5,
    result: "Game-changing transaction support"
  },
  {
    quote: "Aylen's expertise in real estate transactions is unmatched. She handles every detail with precision and keeps me informed throughout the entire process. My clients always comment on how smooth and professional everything feels.",
    author: "Carlos R",
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "Unmatched transaction expertise"
  },
  {
    quote: "Aylen...she is just wow! I've worked with her for almost four years, and she has been nothing short of amazing. Incredibly proactive, highly knowledgeable about real estate, and always on top of every detail. She has never missed a deadline. I've learned so much from her and truly value her expertise.",
    author: "Andres C",
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "Four years of flawless service"
  },
  {
    quote: "Aylen she is just wow! I've worked with her for almost four years, and she has been nothing short of amazing. Incredibly proactive, highly knowledgeable about real estate, and always on top of every detail, she has never missed a deadline. I've learned so much from her and truly value her expertise.",
    author: "Elina S",
    role: "",
    company: "The Alpha Commercial",
    rating: 5,
    result: "Four years of exceptional expertise"
  },
  {
    quote: "Where do I even begin with Aylen? She has the patience of a saint, and her knowledge spans everything from A to Z. She's someone I can truly trust every single day, and someone I feel comfortable opening up to. I've worked with Aylen since the very start of my real estate career, and I can confidently say I would not be where I am today without her. Aylen comes highly recommended — not just by me, but also by my partners Laura and Mia. She is smart, educated, patient, humble, and incredibly understanding. I'd work with Aylen 11 out of 10 times.",
    author: "Chase C",
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "Trusted partner from day one"
  },
  {
    quote: "Working with Aylen has been nothing short of exceptional. She is the heartbeat of every transaction meticulous, proactive, and always several steps ahead. Her attention to detail is unmatched, ensuring that no document is overlooked and no deadline is missed. Communication with her is seamless; she anticipates needs before they arise and resolves challenges before they become problems. Thanks to her expertise and dedication, every process feels effortless and stress-free. I have worked with many professionals in real estate, but her combination of knowledge, efficiency, and genuine care for clients is truly rare. She is not just a transaction coordinator, she is the reason closings happen smoothly and successfully.",
    author: "Rosa P",
    role: "",
    company: "The Poler Group",
    rating: 5,
    result: "The reason closings happen smoothly and successfully"
  },
  {
    quote: "I had an outstanding experience working with Aylen in multiple deals. She is professional, highly proficient, and handled every detail with exceptional care and efficiency. Her expertise made the process smooth and stress-free. I would highly recommend her services to anyone seeking a contract coordinator. She is a true real estate professional.",
    author: "Gloria L",
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "Outstanding experience in multiple deals"
  },
  {
    quote: "I’m an experienced Realtor with eight years in the business and over 500 closed deals, specializing in luxury homes in Florida and Massachusetts. I’ve worked with many transaction coordinators over the years, but Aylen and her team are by far the best I’ve ever partnered with. We now trust Aylen with every single transaction — always professional, always reliable.",
    author: "Sergio G",
    role: "",
    company: "Coldwell Banker",
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
    company: "Coldwell Banker",
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
    role: "",
    company: "Coldwell Banker",
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
    role: "",
    company: "Coldwell Banker",
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
    role: "",
    company: "Coldwell Banker",
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
    role: "",
    company: "Coldwell Banker",
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
    role: "",
    company: "Coldwell Banker",
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
    role: "",
    company: "Coldwell Banker",
    rating: 5,
    result: "Crucial asset with five-star performance"
  }
];




export default function Testimonials() {
  // Distribute testimonials across 3 columns for masonry layout
  const column1: typeof testimonials = [];
  const column2: typeof testimonials = [];
  const column3: typeof testimonials = [];

  testimonials.forEach((testimonial, index) => {
    if (index % 3 === 0) {
      column1.push(testimonial);
    } else if (index % 3 === 1) {
      column2.push(testimonial);
    } else {
      column3.push(testimonial);
    }
  });

  const renderColumn = (columnTestimonials: typeof testimonials, columnIndex: number, offsetClass: string) => (
    <div className={`space-y-6 ${offsetClass}`}>
      {columnTestimonials.map((testimonial, index) => {
        const globalIndex = columnIndex === 0 
          ? index * 3 
          : columnIndex === 1 
          ? index * 3 + 1 
          : index * 3 + 2;
        
        return (
          <motion.div
            key={`${testimonial.author}-${globalIndex}`}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: globalIndex * 0.05 }}
            className="group relative"
          >
            {/* Clean Minimal Card */}
            <div 
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-12 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]"
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div>
                  <Quote className="w-5 h-5 text-white/30" />
                </div>
                
                  {/* Quote Text */}
                <blockquote className="font-sans text-base sm:text-[17px] text-white/75 max-w-[52ch]" style={{ lineHeight: '1.7' }}>
                  {testimonial.quote}
                  </blockquote>
      
                  {/* Author Info */}
                <div className="pt-6 border-t border-white/10">
                <div className="font-sans text-sm font-medium text-white/90 mb-1">
                        {testimonial.author}
                      </div>
                {(testimonial.role || testimonial.company) && (
                  <div 
                    className="text-xs uppercase tracking-[0.28em] text-white/60 mt-1"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    {testimonial.role && testimonial.company 
                      ? `${testimonial.role}${testimonial.company ? ` • ${testimonial.company}` : ''}`
                      : testimonial.role || testimonial.company
                    }
                      </div>
                )}
                {testimonial.result && (
                  <div className="mt-2 font-sans text-xs text-white/60 italic">
                    {testimonial.result}
                    </div>
                )}
                  </div>
                </div>
              </div>
            </motion.div>
        );
      })}
    </div>
  );

  return (
    <section className="mt-10">
      {/* Scroll viewport */}
      <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
        {/* top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-black/70 to-transparent" />
        {/* bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-black/70 to-transparent" />

        <div
          className="max-h-[520px] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >

          {/* Staggered grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* column 1 */}
            {renderColumn(column1, 0, '')}
            
            {/* column 2 (offset downward) */}
            {renderColumn(column2, 1, 'md:pt-10')}
            
            {/* column 3 (offset upward or less) */}
            {renderColumn(column3, 2, 'md:pt-4')}
          </div>
        </div>
      </div>

      {/* Total count and scroll indicator */}
      <div className="mt-6 flex flex-col items-center gap-3">
        {/* Scrollbar icon */}
        <svg
          className="h-8 w-4 text-white/40"
          fill="none"
          viewBox="0 0 16 32"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {/* Scrollbar track */}
          <rect
            x="1"
            y="1"
            width="14"
            height="30"
            rx="7"
            stroke="currentColor"
            fill="none"
          />
          {/* Scrollbar thumb */}
          <rect
            x="3"
            y="22"
            width="10"
            height="6"
            rx="3"
            fill="currentColor"
            className="animate-bounce"
            style={{ animationDuration: '1.5s' }}
          />
        </svg>
        
        {/* Text */}
        <p className="text-[10px] text-white/45 text-center" style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>
          Scroll for more ({testimonials.length} total)
        </p>
      </div>
    </section>
  );
}
