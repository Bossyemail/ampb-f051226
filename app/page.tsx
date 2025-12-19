"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import StickyNavigation from '@/components/StickyNavigation';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import ServicesTicker from '@/components/ServicesTicker';
import Footer from '@/components/Footer';
import { organizationData, personData, websiteData } from '@/lib/structured-data';
import { usePageAnalytics } from '@/hooks/useAnalytics';
import { FunnelStep } from '@/lib/analytics-enhanced';
import { initializeAdvancedAnalytics } from '@/lib/analytics-advanced';
// Analytics components - only import when needed for development
// import PerformanceMonitor from '@/components/PerformanceMonitor';
// import FunnelAnalyzer from '@/components/FunnelAnalyzer';
// import AnalyticsDashboard from '@/components/AnalyticsDashboard';

export default function Home() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeEditorialItem, setActiveEditorialItem] = useState<string | null>('why');

  // Initialize analytics for this page
  usePageAnalytics('Home Page', FunnelStep.VISIT);
  
  // Initialize advanced analytics
  useEffect(() => {
    initializeAdvancedAnalytics();
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? [] // If clicking the currently open item, close it (empty array)
        : [index] // If clicking a different item, close all others and open only this one
    );
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personData),
        }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
        suppressHydrationWarning
      />
      
      <div className="min-h-screen bg-black text-white antialiased">
      <StickyNavigation />
      
              {/* Hero Section */}
        <section
          className="relative h-[650px] w-full bg-black"
        >
          {/* Image layer with CSS mask - using bottom pattern for all edges */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/images/14.png)',
              backgroundSize: '78%',
              backgroundPosition: 'center 35%',
              backgroundRepeat: 'no-repeat',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.5) 82%, transparent 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.5) 82%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
              maskComposite: 'intersect'
            }}
          ></div>
          {/* Dark overlay gradients to blend sides into background */}
          <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black via-black/98 via-black/90 via-black/75 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-black via-black/90 via-black/60 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center pt-64 z-10">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="max-w-3xl">
                  <motion.h1
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="font-sans text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight leading-[1.08] text-white/95 mb-5 sm:mb-6"
                  >
                    I'm Aylen.
                  </motion.h1>
                  <div className="max-w-2xl space-y-4 sm:space-y-5">
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]"
                  >
                    I help real estate professionals close deals with fewer mistakes, fewer emails, and less stress.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]"
                  >
                    Contracts, deadlines, and communication don't need to be chaotic.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]"
                  >
                    I build tools, systems, and support that keep transactions moving — quietly and correctly.
                  </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-6 sm:mt-7"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <a
                        href="#tools"
                        className="font-sans inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium bg-white text-black hover:opacity-90 transition-opacity"
                        aria-label="Explore the Tools"
                      >
                        Explore the Tools
                      </a>
                      <a
                        href="mailto:hello@aylenmontenegro.com"
                        className="font-sans inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium border border-white/20 text-white hover:opacity-80 transition-opacity"
                        aria-label="Work With Me"
                      >
                        Work With Me
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="col-span-3">
                {/* STATS OVERLAY */}
                <aside
                  className="pointer-events-none absolute right-4 md:right-6 top-20 md:top-32 w-36 md:w-44 lg:w-52 select-none block"
                  aria-label="Personal stats"
                >
                  <div className="space-y-3 md:space-y-6">
                    {/* 20+ Years of Experience */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <p className="text-white text-xl md:text-3xl font-mono tracking-wider text-right">20+</p>
                      <p className="mt-1 md:mt-2 text-right text-[9px] md:text-[10px] uppercase tracking-[0.08em] text-white/60">YEARS EXPERIENCE</p>
                    </motion.div>

                    <hr className="border-t border-white/10" />

                    {/* 3K+ Closed Deals */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <p className="text-white text-xl md:text-3xl font-mono tracking-wider text-right">3K+</p>
                      <p className="mt-1 md:mt-2 text-right text-[9px] md:text-[10px] uppercase tracking-[0.08em] text-white/60">CLOSED DEALS</p>
                    </motion.div>

                    <hr className="border-t border-white/10" />

                    {/* 4+ SaaS Products Built */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      <p className="text-white text-xl md:text-3xl font-mono tracking-wider text-right">4+</p>
                      <p className="mt-1 md:mt-2 text-right text-[9px] md:text-[10px] uppercase tracking-[0.08em] text-white/60">SAAS PRODUCTS BUILT</p>
                    </motion.div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Accordion Section */}
      <section id="tools" className="py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-center mb-12 sm:mb-14"
          >
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-[36px] font-medium tracking-tight leading-[1.2] text-white/95 mb-5">
            What I Build
            <br />
            <span className="text-white/60">(Without the Chaos)</span>
          </h2>
            <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 max-w-2xl mx-auto leading-[1.6]">
              I've spent my career behind the scenes making sure contracts close, fires get put out, and agents still look good in the process. These tools are that behind-the-scenes work — bottled up and built for scale.
            </p>
          </motion.div>

          <div className="space-y-0">
            {/* Product 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false, margin: "-50px" }}
              className="py-2"
            >
              <button
                onClick={() => toggleItem(0)}
                className="w-full text-left flex items-center justify-between hover:opacity-80 transition-opacity py-2"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">01</span>
                  <h3 className="font-sans text-xl md:text-2xl font-medium text-white/95">BossyEmail</h3>
                </div>
                {openItems.includes(0) ? (
                  <ChevronDown className="w-10 h-10 text-white/40" />
                ) : (
                  <ChevronRight className="w-10 h-10 text-white/40" />
                )}
              </button>

              <AnimatePresence>
                {openItems.includes(0) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 max-w-2xl mx-auto">
                      <div className="text-center mb-6 space-y-4">
                        <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">
                          AI-powered email tools designed specifically for real estate communication — so you're not rewriting the same emails, explanations, and follow-ups from scratch.
                        </p>
                        <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">
                          Clear. Direct. Professional.
                        </p>
                        <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">
                          Built for real transactions, not generic prompts.
                        </p>
                      </div>
                      <div className="text-center mb-8">
                        <a
                          href="https://bossyemail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium bg-white text-black hover:opacity-90 transition-opacity"
                        >
                          Explore BossyEmail
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <hr className="border-white/10 mt-4" />
            </motion.div>

            {/* Product 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: false, margin: "-50px" }}
              className="py-2"
            >
              <button
                onClick={() => toggleItem(1)}
                className="w-full text-left flex items-center justify-between hover:opacity-80 transition-opacity py-2"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">02</span>
                  <h3 className="font-sans text-xl md:text-2xl font-medium text-white/95">ClauseVault</h3>
                </div>
                {openItems.includes(1) ? (
                  <ChevronDown className="w-10 h-10 text-white/40" />
                ) : (
                  <ChevronRight className="w-10 h-10 text-white/40" />
                )}
              </button>

              <AnimatePresence>
                {openItems.includes(1) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 max-w-2xl mx-auto">
                      <div className="text-center mb-6 space-y-4">
                        <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">
                          Contract support tools that help you close communication gaps without practicing law or reinventing the wheel.
                        </p>
                        <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">
                          Built to support the contract — not replace it.
                        </p>
                      </div>
                      <div className="text-center mb-8">
                        <a
                          href="/clausevault"
                          className="font-sans inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium bg-white text-black hover:opacity-90 transition-opacity"
                        >
                          Explore ClauseVault
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <hr className="border-white/10 mt-4" />
            </motion.div>

            {/* Product 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: false, margin: "-50px" }}
              className="py-2"
            >
              <button
                onClick={() => toggleItem(2)}
                className="w-full text-left flex items-center justify-between hover:opacity-80 transition-opacity py-2"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">03</span>
                  <h3 className="font-sans text-xl md:text-2xl font-medium text-white/95">Transaction Coordination</h3>
                </div>
                {openItems.includes(2) ? (
                  <ChevronDown className="w-10 h-10 text-white/40" />
                ) : (
                  <ChevronRight className="w-10 h-10 text-white/40" />
                )}
              </button>

              <AnimatePresence>
                {openItems.includes(2) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 max-w-2xl mx-auto">
                      <div className="text-center mb-6 space-y-4">
                        <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">
                          For select clients, I offer white-glove transaction coordination and advisory support.
                        </p>
                        <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">
                          This is not volume work.
                        </p>
                        <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">
                          This is for professionals who value experience, discretion, and clean execution.
                        </p>
                        <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">
                          Availability is limited by design.
                        </p>
                      </div>
                      <div className="text-center mb-8">
                        <a
                          href="mailto:hello@aylenmontenegro.com?subject=TC%20availability"
                          className="font-sans inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium bg-white text-black hover:opacity-90 transition-opacity"
                        >
                          Inquire about services
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <hr className="border-white/10 mt-4" />
            </motion.div>

          </div>
        </div>
        </div>
      </section>

      {/* Clarifier Section */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 text-center">
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
            <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">Most deals don't fall apart because of bad intentions.</p>
            <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">They fall apart because of missed details, unclear emails, and preventable friction.</p>
            <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">My work exists to remove that friction before it costs you time, money, or reputation.</p>
          </div>
        </div>
      </section>

      {/* Editorial Numbered Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          {/* Numbered Ticker Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12 justify-center"
          >
            <button
              onClick={() => setActiveEditorialItem(activeEditorialItem === 'why' ? null : 'why')}
              className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                activeEditorialItem === 'why' ? 'opacity-100' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <span className={`text-3xl sm:text-4xl font-mono tracking-wider transition-colors duration-300 ${
                activeEditorialItem === 'why' ? 'text-white' : 'text-white/60'
              }`}>
                01
              </span>
              <span className="text-neutral-500">\</span>
              <span className={`text-xl md:text-2xl transition-colors duration-300 ${
                activeEditorialItem === 'why' ? 'text-white' : 'text-white'
              }`}>
                Why
              </span>
            </button>

            <button
              onClick={() => setActiveEditorialItem(activeEditorialItem === 'what' ? null : 'what')}
              className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                activeEditorialItem === 'what' ? 'opacity-100' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <span className={`text-3xl sm:text-4xl font-mono tracking-wider transition-colors duration-300 ${
                activeEditorialItem === 'what' ? 'text-white' : 'text-white/60'
              }`}>
                02
              </span>
              <span className="text-neutral-500">\</span>
              <span className={`text-xl md:text-2xl transition-colors duration-300 ${
                activeEditorialItem === 'what' ? 'text-white' : 'text-white'
              }`}>
                What
              </span>
            </button>

            <button
              onClick={() => setActiveEditorialItem(activeEditorialItem === 'who' ? null : 'who')}
              className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                activeEditorialItem === 'who' ? 'opacity-100' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <span className={`text-3xl sm:text-4xl font-mono tracking-wider transition-colors duration-300 ${
                activeEditorialItem === 'who' ? 'text-white' : 'text-white/60'
              }`}>
                03
              </span>
              <span className="text-neutral-500">\</span>
              <span className={`text-xl md:text-2xl transition-colors duration-300 ${
                activeEditorialItem === 'who' ? 'text-white' : 'text-white'
              }`}>
                Who
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Editorial Content Section */}
      {activeEditorialItem && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="pt-0 pb-16 sm:pb-20"
        >
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="mx-auto max-w-2xl">
            {/* WHY */}
            {activeEditorialItem === 'why' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4 sm:space-y-5"
              >
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">Because most deals don't fall apart for dramatic reasons.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">They fall apart because small details get missed, emails get unclear, and friction builds until something breaks.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">I've spent over two decades working inside that friction — catching issues early and keeping deals moving before problems become visible.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">That perspective informs everything I build.</p>
              </motion.div>
            )}

            {/* WHAT */}
            {activeEditorialItem === 'what' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4 sm:space-y-5"
              >
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">I help real estate professionals close deals with fewer mistakes, fewer emails, and less stress.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">That happens by fixing the communication and process breakdowns that quietly derail transactions.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">Software when it makes sense.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">Systems when they're needed.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">Human judgment when it matters.</p>
              </motion.div>
            )}

            {/* WHO */}
            {activeEditorialItem === 'who' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4 sm:space-y-5"
              >
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">This is for real estate professionals who value clarity over chaos.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">People who take their reputation seriously.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">Who prefer systems over scrambling.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">Who want fewer fires, not more excitement.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">If that sounds like you, you're in the right place.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">I don't build for everyone.</p>
                <p className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]">I build for people who want their business to feel calmer, cleaner, and more controlled.</p>
              </motion.div>
            )}
          </div>
          </div>
        </motion.section>
      )}

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-[36px] font-medium tracking-tight leading-[1.2] text-white/95">
            Start with the system that saves the most time.
          </h2>
          <div className="flex justify-center">
            <a
              href="/upgrade"
              className="font-sans inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium border border-white/20 text-white hover:opacity-80 transition-opacity"
            >
              Go to BossyEmail
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black px-6 sm:px-10 pt-6">
        <p className="font-sans text-center text-sm font-normal text-white/60 mb-4">
          These systems were built inside real client work.
        </p>
      </section>
      <Testimonials />

      {/* About Me Teaser Section */}
      <section
        id="about"
        className="relative h-[650px] w-full bg-black overflow-hidden"
      >
        {/* Background image with left fade for text readability */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000000 0%, #000000 32%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.35) 68%, transparent 85%), url(/images/22.png)',
            backgroundSize: 'cover',
            backgroundPosition: '60% 38%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="absolute inset-0 flex items-center z-10">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-10">
            <div className="max-w-xl text-left space-y-4 sm:space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/60"
              >
                About Me
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: true }}
                className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight leading-[1.15] text-white/95"
              >
                My Story
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/60"
              >
                Real Estate Professional • Systems Builder • Deal Closer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]"
              >
                I've spent over two decades inside real estate transactions — working behind the scenes where mistakes actually show up.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]"
              >
                I'm not here to teach aesthetics or hype.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]"
              >
                I'm here to fix the operational side of deals that most people ignore until something breaks.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="font-sans text-base sm:text-[17px] font-normal text-white/75 leading-[1.6]"
              >
                That perspective informs everything I build.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                viewport={{ once: true }}
                className="pt-2"
              >
                <a
                  href="/about"
                  className="font-sans inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium border border-white/20 text-white hover:opacity-80 transition-opacity"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Final CTA */}
      <FinalCTA />

      {/* Services Ticker */}
      <ServicesTicker />

      {/* Footer */}
      <Footer />
      
      {/* Analytics Components - Hidden in Production */}
      {/* Uncomment for development debugging:
      <PerformanceMonitor enabled={true} />
      <FunnelAnalyzer enabled={true} />
      <AnalyticsDashboard />
      */}
      </div>
    </>
  );
}
