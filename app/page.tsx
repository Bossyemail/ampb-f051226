"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
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
          __html: JSON.stringify([organizationData, personData, websiteData]),
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
      <StickyNavigation />
      
              {/* Hero Section */}
        <section 
          className="relative h-[650px] w-full"
          style={{
            backgroundImage: 'url(/images/IMG_6635.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/70"></div>
          {/* Right side gradient for stats visibility */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-black/70"></div>
          {/* Bottom gradient overlay for smooth transition to next section - enhanced for mobile */}
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-32 bg-gradient-to-b from-transparent to-[#121216]"></div>
          {/* Additional mobile-specific gradient for better lower body coverage */}
          <div className="absolute bottom-0 left-0 right-0 h-64 md:hidden bg-gradient-to-b from-transparent via-black/50 to-[#121216]"></div>
        <div className="absolute inset-0 flex items-center pt-64 z-10">
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
                  <motion.h1
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2"
                  >
                    I'm Aylen
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-sm italic text-gray-300 mb-6"
                  >
                    Deal Flow Architect • SaaS Builder • Author
                  </motion.p>
                  {/* Mobile version - full content */}
                  <div className="block md:hidden">
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-2"
                    >
                      I turn real estate chaos into systems and profit.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-6"
                    >
                      From contract to closing, I manage the details and build the tools so agents can sell more and stress less.
                    </motion.p>
                  </div>
                  
                  {/* Desktop version - full content */}
                  <div className="hidden md:block">
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-2"
                    >
                      I turn real estate chaos into systems and profit.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-6"
                    >
                      From contract to closing, I manage the details and build the tools so agents can sell more and stress less.
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <a 
                      href="/elevate"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                      aria-label="Get Started Today"
                    >
                      Get Started Today
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>
              </div>
              <div className="col-span-3">
                {/* STATS OVERLAY */}
                <aside
                  className="pointer-events-none absolute right-4 md:right-6 top-20 w-40 md:w-48 lg:w-56 select-none block"
                  aria-label="Personal stats"
                >
                  <div className="space-y-6">
                    {/* 20+ Years of Experience */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <p className="text-white text-3xl md:text-4xl font-mono tracking-wider text-right">20+</p>
                      <p className="mt-2 text-right text-[10px] md:text-[11px] uppercase tracking-[0.08em] text-white/60">YEARS EXPERIENCE</p>
                    </motion.div>

                    <hr className="border-t border-white/10" />

                    {/* 3K+ Closed Deals */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <p className="text-white text-3xl md:text-4xl font-mono tracking-wider text-right">3K+</p>
                      <p className="mt-2 text-right text-[10px] md:text-[11px] uppercase tracking-[0.08em] text-white/60">CLOSED DEALS</p>
                    </motion.div>

                    <hr className="border-t border-white/10" />

                    {/* 4+ SaaS Products Built */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      <p className="text-white text-3xl md:text-4xl font-mono tracking-wider text-right">4+</p>
                      <p className="mt-2 text-right text-[10px] md:text-[11px] uppercase tracking-[0.08em] text-white/60">SAAS PRODUCTS BUILT</p>
                    </motion.div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing between hero and next section */}
      <div className="py-8"></div>

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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
              Things That Get Deals Closed
              <br />
              <span className="text-gray-300">(Without the Chaos)</span>
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              I've spent my entire career being the key force behind the scenes. The one making sure contracts close, fires get put out, and agents still look good in the process. These products? They're just my behind-the-scenes magic, bottled up for you. Pick a tab, watch the magic and steal the playbook.
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
                  <h3 className="text-xl md:text-2xl font-semibold text-white">TC Services</h3>
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
                      <h4 className="text-xl font-semibold text-white mb-4">"Deals Don't Die From Big Things — They Die From Missed Details"</h4>
                      <div className="text-center mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          Agents juggle showings, negotiations, and clients. Deadlines? Disclosures? Signatures? They slip through the cracks.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          That's why our licensed, experienced Transaction Coordinator services exist — to keep every deal on track from contract to close.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                          It's now smoother than ever to scale your business while we handle the chaos behind the scenes.
                        </p>
                      </div>
                      
                      {/* Video Placeholder */}
                      <div className="bg-black/30 rounded-lg p-8 border border-white/10 mb-6">
                        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                          <p className="text-gray-400 text-center">
                            📹 Timeline or checklist graphic with TC managing each step<br />
                            <span className="text-sm">TC Services VSL</span>
                          </p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mb-6 text-center">
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Never miss another inspection, deposit, or contingency deadline.</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Free yourself from inbox babysitting so you can actually sell.</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Protect your reputation with contracts handled right the first time.</span>
                        </li>
                      </ul>
                      
                      <div className="space-y-4 mb-6 text-center">
                        <p className="text-gray-300 leading-relaxed">
                          We don't just manage paperwork — we protect your reputation, your time, and your sanity.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Our team is licensed, experienced, and local to South Florida, with 30+ years of combined expertise in lending, operations, title, and sales. We bring deep knowledge of area-specific regulations and a true bird's-eye view of every deal, delivering unmatched transactional expertise.
                        </p>
                        
                        <p className="text-gray-300 leading-relaxed">
                          We're not for every agent — and that's intentional.
                        </p>
                        
                        <p className="text-gray-300 leading-relaxed">
                          We partner with seasoned, full-time professionals who spend their days with clients and their nights drafting addenda at 11 pm before they meet us. If that's you, we'll help you stop drowning in admin and start focusing on closings and future business.
                        </p>
                        
                        <h5 className="text-xl font-semibold text-white mb-4 mt-6">
                          Let's See If We're a Good Fit
                        </h5>
                        
                        <div className="space-y-1">
                          <p className="text-gray-300 leading-relaxed">
                            Less stress. More closings. A partner in the background making sure nothing gets missed.
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center mb-8">
                        <a 
                          href="mailto:hello@aylenmontenegro.com?subject=Book Your Fit Call&body=Hi Aylen, I'd like to book a fit call to discuss how your services can help my real estate business."
                          className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5 mb-2"
                        >
                          Book Your Fit Call
                        </a>
                        <p className="text-gray-400 text-sm">
                          Limited space available.
                        </p>
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
                  <h3 className="text-xl md:text-2xl font-semibold text-white">ClauseVault</h3>
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
                      <h4 className="text-xl font-semibold text-white mb-4">"ClauseVault — The Cheat Code for Your Contracts"</h4>
                      <div className="text-center mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          Most of deal chaos is simply about wording.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          That's why we built ClauseVault — a fast, searchable, razor-sharp library of battle-tested clauses built to protect your deals before they explode. You can copy in seconds. No hunting through old emails. No Franken-contracts.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                          It's now even faster to fix your contract.
                        </p>
                      </div>
                      
                      {/* Video Placeholder */}
                      <div className="bg-black/30 rounded-lg p-8 border border-white/10 mb-6">
                        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                          <p className="text-gray-400 text-center">
                            Search → Preview → Copy<br />
                            <span className="text-sm">ClauseVault VSL</span>
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          You'll see categories like, Deposits, Extensions, Closing & Appraisals. I even baked a little Miami into the background, because if you're going to fix contract chaos, you might as well enjoy the view.
                        </p>
                      </div>
                      
                      <ul className="space-y-3 mb-6 text-center">
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">No more blank screens at 10:47pm. Type what you need, see 2–3 clean options, copy, paste—done.</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Save favorites, pin brokerage-approved sets or create your own, so your team stays consistent across every deal.</span>
                        </li>
                      </ul>
                      
                      <div className="text-center mb-6">
                        <a 
                          href="/clausevault"
                          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/10 font-semibold text-lg relative z-50"
                          onClick={(e) => {
                            console.log('ClauseVault button clicked');
                            // Let the default link behavior handle navigation
                          }}
                          style={{ pointerEvents: 'auto' }}
                        >
                          Get ClauseVault Now →
                        </a>
                      </div>
                      
                      <div className="text-center mb-8">
                        <p className="text-gray-300 leading-relaxed">
                          No guesswork. No duct-taped contracts. Just precise, professional language — ready when you are.
                        </p>
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
                  <h3 className="text-xl md:text-2xl font-semibold text-white">BossyEmail</h3>
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
                      <h4 className="text-xl font-semibold text-white mb-4">"Stop Wasting Time Writing Emails"</h4>
                      <div className="text-center mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          Over half your day disappears into email chaos. Copy/paste old drafts, Google "templates," or wing it at midnight.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          That's why we built BossyEmail — a smarter way to generate, store, and send professional emails tailored for real estate.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                          It's now faster than ever to communicate with confidence.
                        </p>
                      </div>
                      
                      {/* Video Placeholder */}
                      <div className="bg-black/30 rounded-lg p-8 border border-white/10 mb-6">
                        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                          <p className="text-gray-400 text-center">
                            📹 Screenshot of BossyEmail dashboard (generator + saved templates)<br />
                            <span className="text-sm">BossyEmail VSL</span>
                          </p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mb-6 text-center">
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Real estate–specific email templates built from thousands of real transactions.</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Generate professional, deal-ready messages in seconds — no overthinking, no rewriting.</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Keep your deals moving by saying the right thing, at the right time.</span>
                        </li>
                      </ul>
                      
                      <div className="text-center mb-6">
                        <a 
                          href="https://bossyemail.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5">
                          See BossyEmail in Action
                        </a>
                      </div>
                      
                      <div className="text-center mb-8">
                        <p className="text-gray-300 leading-relaxed">
                          No more writer's block. No more second-guessing. Just hit generate, tweak, and send.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <hr className="border-gray-600 mt-4" />
            </motion.div>

            {/* Product 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: false, margin: "-50px" }}
              className="py-2"
            >
              <button 
                onClick={() => toggleItem(3)}
                className="w-full text-left flex items-center justify-between hover:opacity-80 transition-opacity py-2"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">04</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Books</h3>
                </div>
                {openItems.includes(3) ? (
                  <ChevronDown className="w-10 h-10 text-gray-400" />
                ) : (
                  <ChevronRight className="w-10 h-10 text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {openItems.includes(3) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold text-white mb-4">Books — Real Estate Without the Sugarcoat</h4>
                      <div className="text-center mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          I've always loved to write.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          And since the market has been slower than my mother-in-law typing a WhatsApp message,
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          I figured writing two books was a great idea. Who knew?
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                          But here's the thing — these aren't motivational fluff or Instagram-filter "success stories." They're a mix of battle scars, sarcasm, and the exact strategies I used to go from barely surviving year one to building a career I'm proud of.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                          Here are the stories — just don't expect names or addresses.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Some things we should keep private, NDA or not.
                        </p>
                      </div>
                      
                      {/* Book Cards */}
                      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 mb-6">
                        {/* Book 1 */}
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          whileHover={{ y: -8, scale: 1.02 }}
                          className="bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 rounded-xl flex flex-col items-center text-center relative hover:ring-white/20 transition-all duration-300"
                        >
                          {/* Coming Soon Tab */}
                          <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            whileHover={{ scale: 1.1 }}
                            className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full"
                          >
                            <span className="text-xs text-white font-medium">Coming Soon</span>
                          </motion.div>
                          <motion.img 
                            src="/images/books/smart-agents-guide.jpg" 
                            alt="The Smart Agent's Guide to Contracts That Close — book cover" 
                            className="w-32 h-48 sm:w-40 sm:h-60 object-cover mb-4 rounded shadow-lg"
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            transition={{ duration: 0.3 }}
                            loading="lazy"
                            decoding="async"
                          />
                          <h3 className="text-xl font-semibold text-white mb-1">The Smart Agent's Guide to Contracts That Close</h3>
                          <p className="text-sm text-gray-400 mb-4">Field-tested frameworks for airtight contracts</p>
                        </motion.div>
                        {/* Book 2 */}
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          whileHover={{ y: -8, scale: 1.02 }}
                          className="bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 rounded-xl flex flex-col items-center text-center relative hover:ring-white/20 transition-all duration-300"
                        >
                          {/* Coming Soon Tab */}
                          <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full"
                          >
                            <span className="text-xs text-white font-medium">Coming Soon</span>
                          </motion.div>
                          <motion.img 
                            src="/images/books/chief-email-officer.jpg" 
                            alt="Chief Email Officer - Confessions of a Contract Manager — book cover" 
                            className="w-32 h-48 sm:w-40 sm:h-60 object-cover mb-4 rounded shadow-lg"
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            transition={{ duration: 0.3 }}
                            loading="lazy"
                            decoding="async"
                          />
                          <h3 className="text-xl font-semibold text-white mb-1">Chief Email Officer – Confessions of a Contract Manager</h3>
                          <p className="text-sm text-gray-400 mb-4">Memoir, survival guide, and industry roast</p>
                        </motion.div>
                      </div>
                      
                      <ul className="space-y-3 mb-6 text-center">
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Learn how to sell more, stay sane, and still like your career.</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Shortcut the painful (and expensive) trial-and-error phase most agents suffer through.</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Read the kind of stories that make you say "OMG girl… same" — preferably with a glass of Caymus in hand.</span>
                        </li>
                      </ul>
                      
                      <div className="text-center mb-6">
                        <Link 
                          href="/read"
                          className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                        >
                          Read the Stories & Skip the Chaos
                        </Link>
                      </div>
                      
                      <div className="text-center mb-8">
                        <p className="text-gray-300 leading-relaxed">
                          I've managed thousands of contracts, coached agents, and fixed disasters nobody else wanted to touch.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          These books are the behind-the-scenes truth of how it actually works — the mistakes, the lessons, and the wins.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>




      {/* Testimonials */}
      <Testimonials />

      {/* About Me Teaser Section */}
      <section 
        className="relative h-[650px] w-full"
        style={{
          backgroundImage: 'url(/images/my-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/85"></div>
        
        <div className="absolute inset-0 flex items-center pt-48 z-10">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="text-left">
                  <motion.p 
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-sm italic text-gray-300 mb-2"
                  >
                    About Me
                  </motion.p>
                  <motion.h2 
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2"
                  >
                    My Story
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-sm italic text-gray-300 mb-6"
                  >
                    Real Estate Professional • Systems Builder • Deal Closer
                  </motion.p>
                  {/* Mobile version - shorter content */}
                  <div className="block md:hidden">
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-base text-gray-300 leading-tight mb-2"
                    >
                      I fix chaos and turn it into closings. But it wasn't always like that.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="text-base text-gray-300 leading-tight mb-6"
                    >
                      Now, I build the systems and shortcuts I wish I had back then.
                    </motion.p>
                  </div>
                  
                  {/* Desktop version - full content */}
                  <div className="hidden md:block">
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-2"
                    >
                      I fix chaos and turn it into closings. But it wasn't always like that.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-2"
                    >
                      My first job in real estate was answering phones, stuck at the front desk while making sure the fax machine was not jammed.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-2"
                    >
                      From there I clawed my way into bigger roles — contracts, transaction management, the midnight cleanups — until I became the one other people relied on to save their deals.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      viewport={{ once: true }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-6"
                    >
                      Now, I build the systems and shortcuts I wish I had back then.
                    </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="/about"
                      className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5 text-lg font-medium"
                    >
                      Learn More
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                </div>
              </div>
              <div className="md:col-span-3">
                {/* Empty space for image to show through */}
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
