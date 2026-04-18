"use client";

import React from "react";
import { Quote } from "lucide-react";

/** File: `public/images/af-miamibeach11.jpg` → URL `/images/af-miamibeach11.jpg` */
const TESTIMONIALS_SKYLINE_SRC = "/images/af-miamibeach11.jpg";

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
    quote: "I'm an experienced Realtor with eight years in the business and over 500 closed deals, specializing in luxury homes in Florida and Massachusetts. I've worked with many transaction coordinators over the years, but Aylen and her team are by far the best I've ever partnered with. We now trust Aylen with every single transaction — always professional, always reliable.",
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

function FrostedTestimonialCard({
  t,
}: {
  t: Testimonial;
}) {
  return (
    <article className="w-full shrink-0 rounded-lg border border-white/25 bg-white/[0.12] p-3 shadow-md shadow-black/25 backdrop-blur-md sm:p-4">
      <Quote className="mb-1.5 h-3.5 w-3.5 text-white/50" aria-hidden />
      <blockquote className="text-pretty text-xs leading-relaxed text-white sm:text-sm sm:leading-relaxed">
        {t.quote}
      </blockquote>
      <div className="mt-2.5 border-t border-white/15 pt-2.5">
        <div className="text-xs font-medium text-white sm:text-[13px]">{t.author}</div>
        {(t.role || t.company) && (
          <div
            className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/65"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            {t.role && t.company
              ? `${t.role}${t.company ? ` • ${t.company}` : ""}`
              : t.role || t.company}
          </div>
        )}
        {t.result && (
          <div className="mt-1 text-[11px] italic text-white/60 sm:text-xs">{t.result}</div>
        )}
      </div>
    </article>
  );
}

/** Three columns, each scrolls upward continuously at a different speed (not horizontal marquee). */
function VerticalScrollColumns({ items }: { items: Testimonial[] }) {
  const [scrollPaused, setScrollPaused] = React.useState(false);
  const n = items.length;
  const third = Math.ceil(n / 3);
  const col1 = items.slice(0, third);
  const col2 = items.slice(third, third * 2);
  const col3 = items.slice(third * 2);

  const columns: { list: Testimonial[]; anim: string }[] = [
    { list: col1, anim: "ticker-testimonials-col-slow" },
    { list: col2, anim: "ticker-testimonials-col-mid" },
    { list: col3, anim: "ticker-testimonials-col-fast" },
  ];

  const pauseClass = scrollPaused ? "testimonials-scroll-paused" : "";

  const togglePause = React.useCallback(() => {
    setScrollPaused((p) => !p);
  }, []);

  return (
    <div
      className="grid h-full min-h-0 w-full cursor-pointer grid-cols-1 grid-rows-[repeat(3,minmax(0,1fr))] gap-3 sm:grid-cols-3 sm:grid-rows-1 sm:gap-4 lg:gap-5"
      title={scrollPaused ? "Click to resume scrolling" : "Click anywhere to pause scrolling"}
      onClick={togglePause}
    >
      {columns.map(({ list, anim }, ci) => (
        <div
          key={ci}
          className="relative mx-auto flex h-full min-h-0 w-full min-w-0 flex-col sm:max-w-none"
        >
          <div className="min-h-0 flex-1 overflow-hidden">
            <div className={`flex w-full flex-col gap-3 ${anim} ${pauseClass}`}>
              {list.map((t, i) => (
                <FrostedTestimonialCard key={`c${ci}-a-${i}`} t={t} />
              ))}
              {list.map((t, i) => (
                <FrostedTestimonialCard key={`c${ci}-b-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [bgFailed, setBgFailed] = React.useState(false);

  return (
    <section
      className="relative w-full bg-[#0b0c0f] pb-24 md:pb-32"
      aria-labelledby="testimonials-heading"
    >
      {/*
        Fixed height = background image area never grows; testimonial grid expands inside via flex-1.
        bg matches page (#0b0c0f) so no seam vs sections above/below; -mt-px overlaps prior section to kill hairlines.
      */}
      <div className="relative z-[1] -mt-px -mb-px flex h-[min(68vh,880px)] w-full flex-col overflow-hidden bg-[#0b0c0f] sm:h-[min(70vh,920px)] lg:h-[min(72vh,960px)]">
        {!bgFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={TESTIMONIALS_SKYLINE_SRC}
            alt=""
            width={1920}
            height={1080}
            className="absolute inset-0 z-0 h-full w-full object-cover"
            style={{ objectPosition: "center top" }}
            loading="eager"
            decoding="async"
            onError={() => setBgFailed(true)}
          />
        ) : null}

        {/* Darken the photo so cards read more clearly */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-black/58"
          aria-hidden
        />

        {/* Top: full-bleed blend into page bg — tall + gradual stops for a soft edge */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 z-[2] h-56 w-full min-w-full sm:h-72 lg:h-80"
          style={{
            background:
              "linear-gradient(to bottom, rgb(11 12 15 / 1) 0%, rgb(11 12 15 / 0.55) 28%, rgb(11 12 15 / 0.22) 55%, rgb(11 12 15 / 0.08) 78%, transparent 100%)",
          }}
          aria-hidden
        />
        {/* Bottom: full-bleed blend into next section */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-60 w-full min-w-full sm:h-72 lg:h-80"
          style={{
            background:
              "linear-gradient(to top, rgb(11 12 15 / 1) 0%, rgb(11 12 15 / 0.52) 26%, rgb(11 12 15 / 0.2) 52%, rgb(11 12 15 / 0.07) 76%, transparent 100%)",
          }}
          aria-hidden
        />

        {/* Testimonials fill the frame (wider + taller use of the fixed background box) */}
        <div className="relative z-[3] flex min-h-0 flex-1 flex-col bg-transparent px-6 pb-6 pt-8 md:px-8">
          <div className="mx-auto flex h-full min-h-0 w-full max-w-[min(100%,1320px)] flex-1 flex-col">
            <VerticalScrollColumns items={testimonials} />
          </div>
        </div>

        {/* Full-bleed soft edge over cards — lighter + taller ramp than before */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-0 z-[4] h-32 w-full bg-gradient-to-b from-black/45 via-black/12 via-45% to-transparent sm:h-40 lg:h-48"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-32 w-full bg-gradient-to-t from-black/45 via-black/12 via-45% to-transparent sm:h-40 lg:h-48"
          aria-hidden
        />
      </div>
    </section>
  );
}
