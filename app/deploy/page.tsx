"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, CheckCircle, Play, Mail, Clock, Star, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import PreFooterCanvasBlend from '@/components/PreFooterCanvasBlend';
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
          {/* Gradient blend at bottom of hero */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121216] to-transparent" />
          <div className="absolute inset-0 flex items-center pt-64">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-2">
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
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-2 leading-tight"
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
                      className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed mb-2"
                    >
                      Deal-ready contract language you can copy, paste, and send in minutes.
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed mb-6"
                    >
                      No jargon. No hesitation. Just the exact words you need, in plain English.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <Link 
                        href="/closeadmin"
                        className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-150 backdrop-blur-sm bg-white/5 text-sm sm:text-base rounded-none select-none active:scale-[0.97] active:shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] active:brightness-90"
                        aria-label="Get ClauseVault Now"
                        onClick={() => handleButtonClick('Get ClauseVault Now', 'hero')}
                      >
                        Get ClauseVault Now →
                      </Link>
                    </motion.div>
                  </div>
                </div>
                <div className="md:col-span-3">
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
                <p className="text-white text-4xl font-mono tracking-wider text-right">250+</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">CLAUSES</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-white text-4xl font-mono tracking-wider text-right">Instant</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">SEARCH</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-white text-4xl font-mono tracking-wider text-right">DEAL</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">READY</p>
              </motion.div>
            </div>
          </aside>
        </section>

        {/* Problem Section */}
        <section className="pt-16 pb-4 px-4 lg:px-8 relative z-10 bg-[#121216]">
          <div className="relative z-10 flex justify-center">
            <div className="max-w-4xl text-center">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                Your Contract Cheat Code
              </h1>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                Your deal isn't dying because you can't sell.
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                It's dying because your contract looks like Swiss cheese — full of holes, missing clauses, and sloppy addenda that barely hold together. Loopholes big enough to drive a moving truck through.
              </p>
              <p className="text-base text-gray-300 leading-relaxed mb-16">
                Enter ClauseVault: A searchable library of razor-sharp clauses built from real-world disasters — the kind you don't forget after cleaning up your 200th blown deal. Every clause is scenario-specific: you search for the situation you're in, copy the language you need, and drop it right into your contract. Done.
              </p>
            </div>
          </div>
        </section>

        {/* Product Demo Section */}
        <section className="bg-[#121216] w-full relative">
          <div className="relative w-full pt-[40%] overflow-hidden">
            {/* Gradient blend at top of video */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#121216] to-transparent z-10" />
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
            {/* Gradient blend overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121216] to-transparent" />
          </div>
        </section>

        {/* Ticker Navigation - Below video */}
        <section className="bg-[#121216] py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
              <button 
                onClick={() => setActiveTab(1)}
                className={`flex items-center gap-1 sm:gap-2 md:gap-4 transition-all duration-300 hover:scale-105 ${
                  activeTab === 1 ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <span className={`text-2xl sm:text-3xl font-mono tracking-wider transition-colors duration-300 ${
                  activeTab === 1 ? 'text-white' : 'text-white/60'
                }`}>
                  01
                </span>
                <span className="text-neutral-500">\</span>
                <span className={`transition-colors duration-300 ${
                  activeTab === 1 ? 'text-white' : 'text-white/60'
                }`}>
                  Your Contract Safety Net
                </span>
              </button>
              <button 
                onClick={() => setActiveTab(2)}
                className={`flex items-center gap-1 sm:gap-2 md:gap-4 transition-all duration-300 hover:scale-105 ${
                  activeTab === 2 ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <span className={`text-2xl sm:text-3xl font-mono tracking-wider transition-colors duration-300 ${
                  activeTab === 2 ? 'text-white' : 'text-white/60'
                }`}>
                  02
                </span>
                <span className="text-neutral-500">\</span>
                <span className={`transition-colors duration-300 ${
                  activeTab === 2 ? 'text-white' : 'text-white/60'
                }`}>
                  Never Miss a Detail
                </span>
              </button>
              <button 
                onClick={() => setActiveTab(3)}
                className={`flex items-center gap-1 sm:gap-2 md:gap-4 transition-all duration-300 hover:scale-105 ${
                  activeTab === 3 ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <span className={`text-2xl sm:text-3xl font-mono tracking-wider transition-colors duration-300 ${
                  activeTab === 3 ? 'text-white' : 'text-white/60'
                }`}>
                  03
                </span>
                <span className="text-neutral-500">\</span>
                <span className={`transition-colors duration-300 ${
                  activeTab === 3 ? 'text-white' : 'text-white/60'
                }`}>
                  Built by a Pro
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Ticker Content Section */}
        <section className="bg-[#121216] pt-8 pb-16 px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
              
              {/* Tab Content */}
              <div className="text-center">
                {activeTab === 1 && (
                  <div className="text-left">
                    <div className="text-white text-base leading-relaxed">
                      <span className="float-left text-4xl font-mono tracking-wider text-white/60 mr-4 leading-none">01</span>
                      <div className="ml-16">
                        <p className="mb-6">Every deal is a minefield — vague addenda, missing clauses, and "copy-paste" contracts that leave gaping holes.</p>
                        <p className="mb-6">One oversight and your commission check is suddenly at risk.</p>
                        <p className="mb-6">That's why ClauseVault exists. It's not theory — it's a contract safety net designed to catch what others miss.</p>
                        <p className="mb-6">Inside, you'll find battle-tested clauses written from real-world disasters: the loopholes that cost agents thousands, the addenda that fell apart in arbitration, the wording that brokers flagged too late.</p>
                        <p className="mb-6">› You negotiate. ClauseVault makes sure the paperwork holds.</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="text-left">
                    <div className="text-white text-base leading-relaxed">
                      <span className="float-left text-4xl font-mono tracking-wider text-white/60 mr-4 leading-none">02</span>
                      <div className="ml-16">
                        <p className="mb-6">Here's the truth: deadlines don't forgive, brokers don't forget, and one missing disclosure can turn into a legal migraine.</p>
                        <p className="mb-6">ClauseVault keeps you ahead of the chaos. Every clause is scenario-specific — you search for the situation you're in, grab the exact language you need, and drop it straight into your contract.</p>
                        <p className="mb-6">No guessing, no Googling, no "I think this covers it."</p>
                        <p className="mb-6">› How it works: Negotiate → Search → Copy → Paste → Done.</p>
                        <p className="mb-6">You focus on closing. ClauseVault keeps every detail airtight.</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 3 && (
                  <div className="text-left">
                    <div className="text-white text-base leading-relaxed">
                      <span className="float-left text-4xl font-mono tracking-wider text-white/60 mr-4 leading-none">03</span>
                      <div className="ml-16">
                        <p className="mb-6">ClauseVault wasn't built in a classroom. It was built in the trenches — after years of fixing contracts that agents thought were solid until the deal blew up.</p>
                        <p className="mb-6">Every clause has one purpose: to back up your negotiations and protect your deal.</p>
                        <p className="mb-6">It's written in plain language, grounded in real transactions, and designed to close loopholes before they even open.</p>
                        <p className="mb-6">› Because the best tools don't come from theory. They come from surviving the mess and making sure you don't repeat it.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
        </section>
        {/* Final CTA */}
        <section className="py-16 pb-24 px-4 lg:px-8 relative z-10 bg-[#121216]">
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
              <Link 
                href="/closeadmin"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-150 backdrop-blur-sm bg-white/5 rounded-none select-none active:scale-[0.97] active:shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] active:brightness-90"
                onClick={() => handleButtonClick('Get ClauseVault Now', 'final-cta')}
              >
                Get ClauseVault Now →
              </Link>
              <p className="text-sm text-gray-400 mt-2">
                No fluff. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        <PreFooterCanvasBlend from="#121216" />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
