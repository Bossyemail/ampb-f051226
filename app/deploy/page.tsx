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
  const [activeTab, setActiveTab] = useState(1);

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
                    <motion.p 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-sm italic text-gray-300 mb-2"
                    >
                      Hi,
                    </motion.p>
                    <motion.h2 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2"
                    >
                      Meet ClauseVault
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-sm italic text-gray-300 mb-6"
                    >
                      Searchable, Copy Ready Clause Library • Scenario Specific
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-2"
                    >
                      Deal-ready contract language you can copy, paste, and send in minutes.
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-6"
                    >
                      No jargon. No hesitation. Just the exact words you need, in plain English.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <button 
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                        aria-label="Get ClauseVault Now"
                        onClick={() => handleButtonClick('Get ClauseVault Now', 'hero')}
                      >
                        Get ClauseVault Now →
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
                <p className="text-white/60 text-4xl font-mono tracking-wider text-right">250+</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">CLAUSES</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-white/60 text-4xl font-mono tracking-wider text-right">Instant</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">SEARCH</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-white/60 text-4xl font-mono tracking-wider text-right">1000+</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">ACTIVE USERS</p>
              </motion.div>
            </div>
          </aside>
        </section>

        {/* Problem Section */}
        <section className="pt-16 pb-4 px-4 lg:px-8 relative z-10 bg-[#282828]">
          <div className="relative z-10 flex justify-center">
            <div className="max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                The Cheat Code for Your Contracts
              </h2>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                Deals don't die because you can't sell.<br />
                They die when contracts fall apart — missing clauses, sloppy addenda, loopholes that cost commissions.
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                That's why I built ClauseVault.
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-16">
                A searchable library of razor-sharp, battle-tested clauses designed to keep your paperwork airtight.<br />
                And your closings alive.
              </p>
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
                                    Get ClauseVault Now →
          </a>
          <p className="text-sm text-gray-400 mt-2">No fluff. Cancel anytime.</p>
        </div>



        {/* Tab System */}
        <section className="py-16 px-4 lg:px-8 relative z-10 bg-[#282828]">
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-1 bg-white/5 p-1 rounded-lg">
                  <button 
                    onClick={() => setActiveTab(1)}
                    className={`px-12 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeTab === 1 
                        ? 'text-white bg-white/10' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Your Contract Safety Net
                  </button>
                  <button 
                    onClick={() => setActiveTab(2)}
                    className={`px-12 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeTab === 2 
                        ? 'text-white bg-white/10' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Never Miss a Detail
                  </button>
                  <button 
                    onClick={() => setActiveTab(3)}
                    className={`px-12 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeTab === 3 
                        ? 'text-white bg-white/10' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Built by a Pro
                  </button>
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="text-center">
                {activeTab === 1 && (
                  <div className="text-white text-base leading-relaxed space-y-2">
                    <p>I've worked on thousands of contracts.</p>
                    <p>I know exactly where deals go sideways.</p>
                    <p>ClauseVault fixes that:</p>
                    <p>Searchable Library → 250+ real-world clauses.</p>
                    <p>Deal-Saving Language → Close loopholes & save commissions.</p>
                    <p>Built for Real Estate → Agents, TCs, and teams.</p>
                    <p>Miami Edge → A little city flair while you lock down deals.</p>
                    <p>💡 Think of it as a contract cheat code — protection without panic.</p>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="text-white text-base leading-relaxed space-y-2">
                    <p>Because "Missing a Clause" Shouldn't Cost You a Closing</p>
                    <p>One sloppy line = lost deal.</p>
                    <p>One loophole = weeks of fallout.</p>
                    <p>One missed clause = thousands gone.</p>
                    <p>ClauseVault makes sure you never gamble with your contracts again.</p>
                  </div>
                )}
                {activeTab === 3 && (
                  <div className="text-white text-base leading-relaxed space-y-2">
                    <p>Built by a TC Who's Worked on Thousands of Contracts</p>
                    <p>I've seen it all:</p>
                    <p>Missed deadlines.</p>
                    <p>Loopholes that blew up deals.</p>
                    <p>Vague clauses that caused weeks of fallout.</p>
                    <p>ClauseVault isn't theory.</p>
                    <p>It's the exact language I've used in South Florida's wildest markets —</p>
                    <p>packaged for agents who want to stay three steps ahead.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>



        {/* Final CTA */}
        <section className="py-16 px-4 lg:px-8 relative z-10 bg-[#282828]">
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                Stop Drafting. Start Closing.
              </h2>
              <p className="text-base text-gray-300 leading-relaxed mb-2">
                Every clause you write from scratch is time you could spend on a deal.
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                ClauseVault makes sure your next clause is airtight, fast, and impossible to ignore.
              </p>
              <button 
                className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                onClick={() => handleButtonClick('Get ClauseVault Now', 'final-cta')}
              >
                Get ClauseVault Now →
              </button>
              <p className="text-sm text-gray-400 mt-2">
                No fluff. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
