"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Magnetic button component
const MagneticButton = ({ children, className = "", ...props }: any) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  
  React.useEffect(() => {
    const el = ref.current!;
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = clientX - left - width / 2;
      const y = clientY - top - height / 2;
      el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    };
    const onLeave = () => (el.style.transform = "translate(0,0)");
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  
  return (
    <button ref={ref} className={className} {...props}>
      {children}
    </button>
  );
};

const products = [
  {
    id: "bossyemail",
    title: "BOSSYEMAIL",
    subtitle: "Your personal deal-closing ghostwriter.",
    description: "Emails so sharp they cut through inbox clutter and make you look like you've been doing this for decades. Instant. Polished. Uncopyable.",
    cta: "Get Bossy",
    videoUrl: "https://player.vimeo.com/video/328217847?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&portrait=0&sidedock=0",
    color: "#7B8E90"
  },
  {
    id: "clausevault",
    title: "CLAUSE VAULT",
    subtitle: "The kind of clauses that make attorneys nod in approval.",
    description: "Searchable. Dangerous (in a good way). And absolutely not for amateurs.",
    cta: "Browse Clauses",
    videoUrl: "https://player.vimeo.com/video/328217847?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&portrait=0&sidedock=0",
    color: "#d3ccd6"
  },
  {
    id: "tcservices",
    title: "SELECTIVE TC SERVICES",
    subtitle: "White-glove contract management.",
    description: "Reserved for agents who treat time like money — because it is.",
    cta: "Get Started",
    videoUrl: "https://player.vimeo.com/video/328217847?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&portrait=0&sidedock=0",
    color: "#bcafaf"
  },
  {
    id: "books",
    title: "BOOKS",
    subtitle: "Not \"how-to\" fluff.",
    description: "Think playbooks that turn rookies into pros and pros into legends.",
    cta: "Start Reading",
    videoUrl: "https://player.vimeo.com/video/328217847?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&portrait=0&sidedock=0",
    color: "#EFEBE2"
  }
];

export default function ProductShowcase() {
  return (
    <>
      {/* Section Intro */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            The Best Agents Already Use These
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            They won't tell you, but I will: the agents pulling in the biggest deals aren't winging it.
            <br />
            They have airtight systems, killer templates, and the right words for every client, every time.
            <br />
            You can keep guessing, or you can start winning. Your call.
          </p>
        </motion.div>
      </div>
      
      {/* Books Section - Video Background */}
      <motion.div 
        className="h-[450px] w-full relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          defaultmuted
        >
          <source src="/videos/books-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-start">
          <div className="text-left px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1">
              BOOKS
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-1">
              Real Estate Sales Without the Fairy Dust
            </h3>
            <p className="text-base text-gray-300 max-w-3xl leading-relaxed mb-6">
              Forget the sugar-coated "success stories." My books pull back the curtain on the real estate industry—messy contracts, shady deals, and all. Read them if you want to laugh, learn, and survive the chaos with your sanity (mostly) intact.
            </p>
            <MagneticButton className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5">
              Explore
              <ChevronRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </motion.div>
      
      {/* Second Section - BossyEmail Video */}
      <motion.div 
        className="h-[450px] w-full relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          defaultmuted
          loading="lazy"
        >
          <source src="/videos/bossy-email.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="text-right px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1">
              BOSSYEMAIL
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-1">
              Emails That Close Deals and Get People to Actually Reply
            </h3>
            <p className="text-base text-gray-300 max-w-3xl leading-relaxed mb-6">
              Built by someone who's written thousands of real estate emails and lived to tell about it. BossyEmail gives you the exact words to chase docs, follow up without sounding desperate, and put out fires like a pro—without spending your whole life in your inbox.
            </p>
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
              onClick={() => trackEvent('click', 'CTA', 'bossyemail_hero')}
            >
              Get Started Today
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
      
              {/* Third Section - clausevault Video */}
      <motion.div 
        className="h-[450px] w-full relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          defaultmuted
          loading="lazy"
        >
          <source src="/videos/clause-vault.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="text-left px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1">
              clausevault
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-1">
              Your Contract's Secret Weapon
            </h3>
            <p className="text-base text-gray-300 max-w-3xl leading-relaxed mb-6">
              A library of powerful, ready-to-use clauses designed to protect your deals, your commission, and your sanity. No more digging through Google or begging other agents for "that one clause." Everything you need—organized, editable, and instantly ready for battle.
            </p>
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
              onClick={() => trackEvent('click', 'CTA', 'clausevault_hero')}
            >
              Get Started Today
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Fourth Section - TC Services Video */}
      <motion.div 
        className="h-[450px] w-full relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          defaultmuted
          loading="lazy"
        >
          <source src="/videos/tc-services.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="text-right px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1">
              SELECTIVE TC SERVICES
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-1">
              Your Deal's Best Insurance Policy
            </h3>
            <p className="text-base text-gray-300 max-w-3xl leading-relaxed mb-6">
              Think of me as your Contract Manager—the person making sure every signature, date, and detail is bulletproof. I handle the chaos so you can handle your clients. From contract to closing, my transaction coordinator services keep your deals on track, compliant, and stress-free… without you having to babysit the process.
            </p>
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
              onClick={() => trackEvent('click', 'CTA', 'tc_services_hero')}
            >
              Get Started Today
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>


    </>
  );
}
