"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle, Play, Mail, Clock, Star, ChevronDown } from 'lucide-react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import { trackPageView, trackButtonClick, trackVideoEvent, trackScrollDepth, trackTimeOnPage } from '@/utils/analytics';
import { structuredData, organizationData, breadcrumbData } from './structured-data';

export default function DeployPage() {
  const startTime = useRef(Date.now());
  const scrollDepth = useRef(0);

  useEffect(() => {
    // Track page view
    trackPageView('ClauseVault Deploy Page');

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
          >
            <source src="/videos/clause-vault.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
          <div className="absolute inset-0 flex items-center pt-64">
            <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
              <div className="grid grid-cols-5 gap-8">
                <div className="col-span-2">
                  <div className="text-left">
                    <motion.h2 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2"
                    >
                      Meet clausevault
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-sm italic text-gray-300 mb-6"
                    >
                      Smart Clause Library • Scenario Specific
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-6"
                    >
                      Deal-ready contract language you can copy, paste, and send in minutes. No jargon. No hesitation. Just the exact words you need, in plain English.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <button 
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                        aria-label="Get ClauseVault Now"
                        onClick={() => handleButtonClick('Get ClauseVault Now', 'hero')}
                      >
                        Get clausevault Now →
                      </button>
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
            aria-label="ClauseVault stats"
          >
            <div className="space-y-6">
              {/* item */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">500+</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">CLAUSES</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">Instant</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">SEARCH</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">1000+</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">ACTIVE USERS</p>
              </motion.div>
            </div>
          </aside>
        </section>

        {/* Problem Section */}
        <section className="py-10 px-4 lg:px-8 relative z-10" style={{backgroundColor: "#8B5E3C"}}>
          <div className="relative z-10 flex justify-center">
            <div className="max-w-4xl text-center">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                Your On-Demand Contract Wingman
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Two decades of real-world contract fixes, distilled into plain-English clauses you can actually use—searchable, edit-ready, and deal-tested for every situation.
              </p>
            </div>
          </div>
        </section>

        {/* Pain Point + Transformation Section */}
        <section className="py-4 px-4 lg:px-8 relative z-10 bg-[#282828]">
          <div className="relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                {/* Before ClauseVault */}
                <div className="bg-[#282828] p-4 text-left">
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">
                    BEFORE CLAUSEVAULT
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dig through old contracts, copy-paste from colleagues, and hope you got it right.
                  </p>
                </div>
                {/* After ClauseVault */}
                <div className="bg-[#282828] p-4 text-right">
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">
                    AFTER CLAUSEVAULT
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    The exact wording you need, ready to use. Save time, avoid mistakes, look like a pro.
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
            >
              <source src="/videos/office-background.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        {/* Signup Section */}
        <div className="bg-[#282828] text-center py-8">
          <a href="/signup" 
             className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
             onClick={() => handleButtonClick('Get ClauseVault Now', 'signup')}>
                                    Get clausevault Now →
          </a>
          <p className="text-sm text-gray-400 mt-2">No fluff. Cancel anytime.</p>
        </div>

        {/* Solution Section */}
        <section className="py-16 px-4 lg:px-8 relative z-10 bg-[#282828]">
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-center text-2xl font-bold mb-1">
                  Your Personal Deal-Closing Clause Library
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  clausevault is basically me—two decades of contract management,<br />
                  agent wrangling, and deal-saving—trapped inside a tool.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  {
                    title: "500+",
                    description: "Clauses"
                  },
                  {
                    title: "Instant",
                    description: "Search"
                  },
                  {
                    title: "Proven",
                    description: "Language"
                  },
                  {
                    title: "Fire Drill",
                    description: "Mode"
                  }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <p className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-1">{feature.title}</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-400 italic text-sm">
                  It's not "clauses for everyone." It's clauses for you—the agent who actually wants to look like they know what they're doing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-[#282828] text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-center text-2xl font-bold mb-1">
              From <em>Stuck</em> to <em>Sent</em> in Under 2 Minutes
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8 items-center">
              
              {/* Step 1 */}
              <div className="flex justify-center">
                <span className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold leading-none font-sans"
                      style={{WebkitTextStroke: "2px white", color: "transparent", fontFamily: "Arial, sans-serif"}}>
                  1
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-1">Search</h3>
                <p className="text-sm opacity-80">
                  Find the clause you need (escrow, repairs, financing).
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex justify-center">
                <span className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold leading-none font-sans"
                      style={{WebkitTextStroke: "2px white", color: "transparent", fontFamily: "Arial, sans-serif"}}>
                  2
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-1">Customize</h3>
                <p className="text-sm opacity-80">
                  Add names, dates, and specifics.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex justify-center">
                <span className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold leading-none font-sans"
                      style={{WebkitTextStroke: "2px white", color: "transparent", fontFamily: "Arial, sans-serif"}}>
                  3
                </span>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-1">Deploy</h3>
                <p className="text-sm opacity-80">
                  The language does the heavy lifting. You get the deal.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section style={{backgroundColor: "#282828", padding: "60px 20px", textAlign: "center", color: "#fff"}}>
          <h2 className="text-center text-2xl font-bold mb-1">
            Stop Drafting. Start Closing.
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
            Every clause you draft from scratch is time you could spend on a deal. clausevault makes sure your next clause is the right one—fast, protective, and impossible to ignore.
          </p>
          <button 
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
            onClick={() => handleButtonClick('Get ClauseVault Now', 'final-cta')}
          >
            Get clausevault Now
            <ChevronRight className="w-4 h-4" />
          </button>
          <p style={{marginTop: "15px", fontSize: "0.9rem", color: "#aaa"}}>
            No fluff. Cancel anytime.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
