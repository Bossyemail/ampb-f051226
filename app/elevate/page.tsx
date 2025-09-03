'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import { 
  trackPageView, 
  trackButtonClick, 
  trackVideoEvent, 
  trackScrollDepth, 
  trackTimeOnPage 
} from '@/utils/analytics';
import { structuredData, organizationData, breadcrumbData } from './structured-data';

export default function ElevatePage() {
  const startTime = useRef(Date.now());
  const scrollDepth = useRef(0);

  useEffect(() => {
    // Track page view
    trackPageView('TC Services Elevate Page');

    // Track time on page
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeSpent);
    };

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > scrollDepth.current) {
        scrollDepth.current = scrollPercent;
        if (scrollPercent % 25 === 0) { // Track every 25%
          trackScrollDepth(scrollPercent);
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = (buttonName: string, location: string) => {
    trackButtonClick(buttonName, location);
  };

  const handleVideoEvent = (action: 'play' | 'pause' | 'complete', videoId: string) => {
    trackVideoEvent(action, videoId);
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
        {/* Enhanced Sticky Navigation */}
        <StickyNavigation />

        {/* Hero Section */}
        <section className="relative h-[650px] w-full -mt-32">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            loading="lazy"
          >
            <source src="/videos/office-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
          <div className="absolute inset-0 flex items-center pt-64">
            <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
              <div className="grid grid-cols-6 gap-8">
                <div className="col-span-3">
                  <div className="text-left">
                    <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">{/* Hero Heading */}
                      A Tailored Transaction Coordinating Service for the Agents Who Need It Most.
                    </motion.h2>
                    <motion.p className="text-sm italic text-gray-300 mb-6">{/* Hero Subheading */}
                      Local • Licensed • Experienced
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-6"
                    >
                      Our licensed, local team ensures every deal is handled with precision, speed, and discretion — exactly what your reputation demands.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <button
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                        aria-label="Schedule a discovery call"
                        onClick={() => handleButtonClick('Schedule a Discovery Call', 'hero')}
                      >
                        Schedule a Discovery Call
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="mt-6"></div>
                    </motion.div>
                  </div>
                </div>
                <div className="col-span-3">
                  {/* Right side space for stats overlay */}
                </div>
              </div>
            </div>
          </div>

          {/* STATS OVERLAY */}
          <aside
            className="pointer-events-none absolute right-6 top-80 hidden w-56 select-none lg:block"
            aria-label="TC Services stats"
          >
            <div className="space-y-6">
              {/* item */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">20+</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">YEARS EXPERIENCE</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">Local</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">SOUTH FLORIDA</p>
              </motion.div>

              <hr className="border-t border-white/10" />

                                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                          >
                            <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">Zero</p>
                            <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">RISK TOLERANCE</p>
                          </motion.div>
            </div>
          </aside>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 lg:px-8 relative z-10" style={{backgroundColor: "#114B4D"}}>
          <div className="relative z-10 flex justify-center">
            <div className="max-w-4xl text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">{/* Section Heading */}
                Transaction Coordination.<br /><em>Redefined.</em>
              </h2>
              <p className="text-gray-300 leading-relaxed text-base text-center max-w-3xl mx-auto">
                We don’t just manage paperwork — we protect your reputation, your time, and your sanity. Our team is licensed, experienced, and local to South Florida, with 30+ years of combined expertise in lending, operations, title, and sales. We bring deep knowledge of area-specific regulations and a true bird’s-eye view of every deal, delivering unmatched transactional expertise.
              </p>
              <div className="font-medium text-white text-center">
                We’re not for every agent — and that’s intentional.
              </div>
              <p className="text-gray-300 leading-relaxed text-base text-center max-w-3xl mx-auto">
                We partner with seasoned, full-time professionals who spend their days with clients and their nights drafting addenda at 11 PM. If that’s you, we’ll help you stop drowning in admin and start focusing on closings and future business.
              </p>
            </div>
          </div>
        </section>

        {/* Pain Point + Transformation Section */}
        <section className="pt-8 pb-6 px-4 lg:px-8 relative z-10 bg-[#282828]">
          <div className="relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                
                {/* Before Elevate */}
                <div className="bg-[#282828] p-4 text-left">
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">
                    BEFORE
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    You’re buried in admin work, giving up nights and weekends to chase paperwork. You spend your days with clients and your nights writing addenda at 11 PM. Your reputation is on the line with every deal, but you’re too busy to make sure every detail is flawless.
                  </p>
                </div>

                {/* After Elevate */}
                <div className="bg-[#282828] p-4 text-right">
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">
                    AFTER
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    You have a licensed, experienced partner at your side — every detail handled with airtight precision. No missed deadlines. No compliance gaps. You focus on closings while we protect your reputation, your time, and your sanity with true white-glove service.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Product Demo Section */}
        <section className="bg-[#282828] w-full">
          <div className="relative w-full pt-[40%] overflow-hidden">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              loading="lazy"
            >
              <source src="/videos/office-background.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* Signup Section */}
        <div className="bg-[#282828] text-center py-8">
          <a href="/contact"
            className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
            onClick={() => handleButtonClick('Book a Fit Call', 'signup')}>
            Book a Fit Call →
          </a>
          <p className="text-sm text-gray-400 mt-2">Limited space available.</p>
        </div>

        {/* Solution Section */}
        <section className="py-16 px-4 lg:px-8 relative z-10 bg-[#282828]">
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  Your Transaction Coordination Partner — <span className="italic font-normal">Redefined</span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We don’t just manage paperwork — we protect your reputation, your time, and your sanity with unmatched expertise.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <p className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-1">Tailored</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Agent-Specific</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-1">Zero</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Risk Tolerance</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-1">Aligned</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Mutual Success</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-1">Licensed</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Local Insight</p>
                </div>
              </div>
              <div className="text-center mt-8 mb-8">
                <p className="text-gray-400 italic text-sm">
                  This isn’t about replacing you — it’s about adding value, competence, and structure your clients will notice immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-[#282828] text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-center text-2xl font-bold mb-1">
              Who We’re For
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 items-center mt-10">
              {/* 1 - Seasoned */}
              <div className="flex justify-center">
                <span className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold leading-none font-sans mb-2" style={{WebkitTextStroke: "2px white", color: "transparent", fontFamily: "Arial, sans-serif"}}>
                  1
                </span>
              </div>
              <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
                <h3 className="text-lg font-semibold mb-1">Seasoned</h3>
                <p className="text-sm opacity-80 max-w-xs">
                  You’ve closed enough deals to know the basics—and you’re running this like a full-time business. The numbers prove it.
                </p>
              </div>
              {/* 2 - Partner-Ready */}
              <div className="flex justify-center">
                <span className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold leading-none font-sans mb-2" style={{WebkitTextStroke: "2px white", color: "transparent", fontFamily: "Arial, sans-serif"}}>
                  2
                </span>
              </div>
              <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
                <h3 className="text-lg font-semibold mb-1">Partner-Ready</h3>
                <p className="text-sm opacity-80 max-w-xs">
                  You’re ready to install systems and protocols, delegate real work, and stop being your own bottleneck.
                </p>
              </div>
              {/* 3 - Process-Driven */}
              <div className="flex justify-center">
                <span className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold leading-none font-sans mb-2" style={{WebkitTextStroke: "2px white", color: "transparent", fontFamily: "Arial, sans-serif"}}>
                  3
                </span>
              </div>
              <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
                <h3 className="text-lg font-semibold mb-1">Process-Driven</h3>
                <p className="text-sm opacity-80 max-w-xs">
                  You value compliance, fast communication, and decisive moves. You respect timelines—and the team that protects them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section style={{backgroundColor: "#282828", padding: "60px 20px", textAlign: "center", color: "#fff"}}>
          <h2 className="text-center text-2xl font-bold mb-1">
            Let’s See If We’re a <em>Good</em> Fit
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
            Because we work closely with each agent, space is limited. Schedule a call today to see how we can help you close more deals, with less stress.
          </p>
          <button
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
            onClick={() => handleButtonClick('Book a Fit Call', 'final-cta')}
          >
            Book Your Fit Call &rarr;
          </button>
          <p style={{marginTop: "15px", fontSize: "0.9rem", color: "#aaa"}}>
            Limited space available.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
