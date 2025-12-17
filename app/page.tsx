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
      
      <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
      <StickyNavigation />
      
              {/* Hero Section */}
        <section 
          className="relative h-[650px] w-full bg-[#0c0d11]"
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
          <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#0c0d11] via-[#0c0d11]/98 via-[#0c0d11]/90 via-black/75 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-[#0c0d11] via-[#0c0d11]/90 via-black/60 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#0c0d11] via-[#0c0d11]/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center pt-64 z-10">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="text-left">
                  <motion.h1
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3"
                  >
                    Never write a real estate email from scratch again.
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    className="text-base sm:text-lg text-gray-200 max-w-2xl leading-snug mb-6"
                  >
                    Deal-safe emails for inspections, follow-ups, and escalations — instantly.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <a 
                        href="https://bossyemail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm sm:text-base border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                        aria-label="Explore BossyEmail"
                      >
                        Explore BossyEmail →
                      </a>
                      <a
                        href="#about"
                        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                        aria-label="See how I work"
                      >
                        See how I work ↓
                      </a>
                      <p className="text-xs text-gray-400 pt-1">
                        Built by a licensed real estate professional operating inside real transactions.
                      </p>
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

      {/* Chaos to Operations Section */}
      <section className="bg-[#0c0d11] py-14 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight mb-2">
            Most real estate chaos isn’t strategic.<br />
            It’s operational.
          </h2>
          <div className="text-base sm:text-lg text-gray-300 leading-relaxed space-y-3 max-w-3xl mx-auto">
            <p>Deals don’t derail because agents don’t work hard.</p>
            <p>They derail because of:</p>
            <p className="leading-relaxed">Bad communication → Unclear language → Missed details → Emotional escalation</p>
            <p>I work in the unglamorous middle — where precision, timing, and wording matter.</p>
          </div>
        </div>
      </section>

      {/* Solution / Positioning */}
      <section className="bg-[#0c0d11] py-12 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2">
            This is where most agents get stuck.
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <p>Agents are expected to de-escalate clients, protect themselves legally, and keep deals moving — all through email.</p>
            <p>That’s where things go wrong.</p>
            <p>BossyEmail solves the most common operational failure in real estate: not knowing what to say — or how to say it — when it matters.</p>
          </div>
        </div>
      </section>

      {/* Products Accordion Section */}
      <section className="py-12 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-center mb-8"
          >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
            What I Build
            <br />
            <span className="text-gray-300">(Without the Chaos)</span>
          </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              I’ve spent my career behind the scenes making sure contracts close, fires get put out, and agents still look good in the process. These tools are that behind-the-scenes work — bottled up and built for scale.
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
                  <h3 className="text-xl md:text-2xl font-semibold text-white">BossyEmail</h3>
                </div>
                {openItems.includes(0) ? (
                  <ChevronDown className="w-10 h-10 text-gray-400" />
                ) : (
                  <ChevronRight className="w-10 h-10 text-gray-400" />
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
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold text-white mb-4">Deal-safe emails for real estate agents — instantly.</h4>
                      <div className="text-center mb-6 space-y-3">
                        <p className="text-gray-300 leading-relaxed">
                          BossyEmail tells you exactly what to say in inspections, follow-ups, and escalations — without second-guessing tone, wording, or risk.
                        </p>
                        <p className="text-sm text-gray-400">Most agents start here.</p>
                      </div>
                      <div className="text-center mb-8">
                        <a 
                          href="https://bossyemail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-md"
                        >
                          Go to BossyEmail →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <hr className="border-gray-600 mt-4" />
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
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Transaction Coordination</h3>
                </div>
                {openItems.includes(1) ? (
                  <ChevronDown className="w-10 h-10 text-gray-400" />
                ) : (
                  <ChevronRight className="w-10 h-10 text-gray-400" />
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
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold text-white mb-4">Backend support for producing agents.</h4>
                      <div className="text-center mb-6 space-y-3">
                        <p className="text-gray-300 leading-relaxed">
                          I work with a limited number of agents and teams providing transaction coordination — by availability.
                        </p>
                      </div>
                      <div className="text-center mb-8">
                        <a 
                          href="mailto:hello@aylenmontenegro.com?subject=TC%20availability"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm border border-white text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5"
                        >
                          TC Services →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <hr className="border-gray-600 mt-4" />
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
                  <h3 className="text-xl md:text-2xl font-semibold text-white">ClauseVault</h3>
                </div>
                {openItems.includes(2) ? (
                  <ChevronDown className="w-10 h-10 text-gray-400" />
                ) : (
                  <ChevronRight className="w-10 h-10 text-gray-400" />
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
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold text-white mb-4">Contract language for real-world scenarios.</h4>
                      <div className="text-center mb-6 space-y-3">
                        <p className="text-gray-300 leading-relaxed">
                          A curated library of deal-support clauses built around Florida’s As-Is contract framework — designed to reduce ambiguity and support clearer communication, not replace legal advice.
                        </p>
                      </div>
                      <div className="text-center mb-8">
                        <a 
                          href="/clausevault" 
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm border border-white text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm bg-white/5"
                        >
                          View ClauseVault →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <hr className="border-gray-600 mt-4" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="bg-[#0c0d11] py-14 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2">
            This isn’t theory.<br />
            It’s lived experience.
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            <p>I’m Aylen Montenegro — a licensed real estate professional, transaction coordinator, and systems builder based in Miami.</p>
            <p>I’ve spent years operating inside real files — inspections, extensions, escalations, and broker compliance — where wording and timing actually matter.</p>
            <p>BossyEmail and everything on this site comes from that reality. That’s why it works.</p>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-[#0c0d11] py-12 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2">
            If you’re a producing agent,<br />
            this will feel familiar.
          </h2>
          <div className="text-center space-y-2 text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            <p>› You’re tired of rewriting the same emails</p>
            <p>› You want fewer fires, not more apps</p>
            <p>› You care about sounding professional and protected</p>
            <p>› You don’t want beginner-level support</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0c0d11] py-12 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Start with the system that saves the most time.
          </h2>
          <div className="flex justify-center">
            <a 
              href="/upgrade"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
            >
              Go to BossyEmail
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0c0d11] px-6 sm:px-10 lg:px-16 pt-6">
        <p className="text-center text-sm text-gray-400 mb-4">
          These systems were built inside real client work.
        </p>
      </section>
      <Testimonials />

      {/* About Me Teaser Section */}
      <section
        id="about"
        className="w-full bg-[#0c0d11] py-16"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <div className="text-left space-y-3">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-sm italic text-gray-300"
                >
                  About Me
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white"
                >
                  My Story
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-sm italic text-gray-300"
                >
                  Real Estate Professional • Systems Builder • Deal Closer
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-base text-gray-300 leading-relaxed"
                >
                  I didn’t start in strategy or software. I started answering phones, managing files, cleaning up messes, and becoming the person agents relied on to save deals.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-base text-gray-300 leading-relaxed"
                >
                  Now, I build the systems and shortcuts I wish existed back then.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="pt-2"
                >
                  <a
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5 text-lg font-medium"
                  >
                    About Aylen →
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="h-full flex justify-center md:justify-end">
                <div className="w-full max-w-xs md:max-w-sm lg:max-w-md aspect-[4/5] rounded-lg overflow-hidden border border-white/10 shadow-xl shadow-black/30">
                  <img
                    src="/images/22.png"
                    alt="Aylen Montenegro"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
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
