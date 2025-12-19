"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
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
              backgroundPosition: 'center 25%',
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
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/15 via-black/10 to-transparent"></div>
        <div className="absolute inset-0 flex items-center pt-64 z-10">
          <div className="container px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="w-hero">
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="t-label"
                  >
                    Hi there
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="t-h1 mt-2"
                  >
                    I'm Aylen
                  </motion.h1>
                  <div className="w-xl stack mt-2">
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="t-body"
                  >
                    I help real estate professionals close deals<br />with fewer mistakes, fewer emails, and less stress.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    className="t-body"
                  >
                    Contracts, deadlines, and communication<br />don't need to be chaotic.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="t-body"
                  >
                    I build tools, systems, and support<br />that keep transactions moving — quietly and correctly.
                  </motion.p>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-3"
                  >
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <a
                        href="#tools"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm sm:text-base border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                        aria-label="Explore the Tools"
                      >
                        Explore the Tools →
                      </a>
                      <a
                        href="mailto:hello@aylenmontenegro.com"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm sm:text-base border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
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
                      <p className="t-label mt-1 md:mt-2 text-right">YEARS EXPERIENCE</p>
                    </motion.div>

                    {/* 3K+ Closed Deals */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <p className="text-white text-xl md:text-3xl font-mono tracking-wider text-right">3K+</p>
                      <p className="t-label mt-1 md:mt-2 text-right">CLOSED DEALS</p>
                    </motion.div>

                    {/* 4+ SaaS Products Built */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      <p className="text-white text-xl md:text-3xl font-mono tracking-wider text-right">4+</p>
                      <p className="t-label mt-1 md:mt-2 text-right">SAAS PRODUCTS BUILT</p>
                    </motion.div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Accordion Section */}
      <section id="tools" className="bg-black" style={{ paddingTop: '160px', paddingBottom: '96px' }}>
        <div className="container px-8 md:px-12 lg:px-16">
          <div style={{ margin: '0 auto', maxWidth: '640px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, margin: "-100px" }}
              style={{ textAlign: 'center' }}
            >
              <h2 className="t-h2">What I Build</h2>
              <p className="t-label mt-1">(Without the Chaos)</p>
              <p className="t-body mt-2">
                I've spent my career behind the scenes making sure contracts close, fires get put out, and agents still look good in the process. These tools are that behind-the-scenes work — bottled up and built for scale.
              </p>
            </motion.div>

          <div className="space-y-0" style={{ marginTop: '64px' }}>
            {/* Product 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false, margin: "-50px" }}
            >
              <div className="border-t border-white/10"></div>
              <button
                onClick={() => toggleItem(0)}
                className="w-full flex items-center justify-between gap-4 hover:opacity-80 transition-opacity py-3"
              >
                <div className="flex items-center gap-4">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">01</span>
                  <h3 className="t-h2">BossyEmail</h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-transform duration-300 ${openItems.includes(0) ? 'rotate-180' : ''}`}
                />
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
                    <div className="mt-6 w-xl">
                      <div className="mb-6 stack">
                        <p className="t-body">
                          AI-powered email tools designed specifically for real estate communication — so you're not rewriting the same emails, explanations, and follow-ups from scratch.
                        </p>
                        <p className="t-body">
                          Clear. Direct. Professional.
                        </p>
                        <p className="t-body">
                          Built for real transactions, not generic prompts.
                        </p>
                      </div>
                      <div className="mb-8">
                        <a
                          href="https://bossyemail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm sm:text-base border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                        >
                          Explore BossyEmail →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Product 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: false, margin: "-50px" }}
            >
              <div className="border-t border-white/10"></div>
              <button
                onClick={() => toggleItem(1)}
                className="w-full flex items-center justify-between gap-4 hover:opacity-80 transition-opacity py-3"
              >
                <div className="flex items-center gap-4">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">02</span>
                  <h3 className="t-h2">ClauseVault</h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-transform duration-300 ${openItems.includes(1) ? 'rotate-180' : ''}`}
                />
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
                    <div className="mt-6 w-xl">
                      <div className="mb-6 stack">
                        <p className="t-body">
                          Contract support tools that help you close communication gaps without practicing law or reinventing the wheel.
                        </p>
                        <p className="t-body">
                          Built to support the contract — not replace it.
                        </p>
                      </div>
                      <div className="mb-8">
                        <a
                          href="/clausevault"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm sm:text-base border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                        >
                          Explore ClauseVault →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Product 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: false, margin: "-50px" }}
            >
              <div className="border-t border-white/10"></div>
              <button
                onClick={() => toggleItem(2)}
                className="w-full flex items-center justify-between gap-4 hover:opacity-80 transition-opacity py-3"
              >
                <div className="flex items-center gap-4">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">03</span>
                  <h3 className="t-h2">Transaction Coordination</h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-white/60 transition-transform duration-300 ${openItems.includes(2) ? 'rotate-180' : ''}`}
                />
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
                    <div className="mt-6 w-xl">
                      <div className="mb-6 stack">
                        <p className="t-body">
                          For select clients, I offer white-glove transaction coordination and advisory support.
                        </p>
                        <p className="t-body">
                          This is not volume work.
                        </p>
                        <p className="t-body">
                          This is for professionals who value experience, discretion, and clean execution.
                        </p>
                        <p className="t-body">
                          Availability is limited by design.
                        </p>
                      </div>
                      <div className="mb-8">
                        <a
                          href="mailto:hello@aylenmontenegro.com?subject=TC%20availability"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm sm:text-base border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                        >
                          Inquire about services →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <div className="border-t border-white/10"></div>
          </div>
          </div>
        </div>
      </section>

      {/* Clarifier Section */}
      <section className="section divider bg-black" style={{ paddingBottom: '120px' }}>
        <div className="container px-8 md:px-12 lg:px-16">
          <div className="w-xl" style={{ margin: '0 auto' }}>
            <div className="stack">
              <p className="t-body">Most deals don't fall apart because of bad intentions.</p>
              <p className="t-body">They fall apart because of missed details, unclear emails, and preventable friction.</p>
              <p className="t-body">My work exists to remove that friction before it costs you time, money, or reputation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Numbered Section */}
      <section className="section divider bg-black">
        <div className="container px-8 md:px-12 lg:px-16">
          <div className="w-xl">
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
        </div>
      </section>

      {/* Editorial Content Section */}
      {activeEditorialItem && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="section bg-black"
        >
          <div className="container px-8 md:px-12 lg:px-16">
            <div className="w-xl">
              {/* WHY */}
              {activeEditorialItem === 'why' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="stack"
                >
                  <p className="t-body">Because most deals don't fall apart for dramatic reasons.</p>
                  <p className="t-body">They fall apart because small details get missed, emails get unclear, and friction builds until something breaks.</p>
                  <p className="t-body">I've spent over two decades working inside that friction — catching issues early and keeping deals moving before problems become visible.</p>
                  <p className="t-body">That perspective informs everything I build.</p>
                </motion.div>
              )}

              {/* WHAT */}
              {activeEditorialItem === 'what' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="stack"
                >
                  <p className="t-body">I help real estate professionals close deals with fewer mistakes, fewer emails, and less stress.</p>
                  <p className="t-body">That happens by fixing the communication and process breakdowns that quietly derail transactions.</p>
                  <p className="t-body">Software when it makes sense.</p>
                  <p className="t-body">Systems when they're needed.</p>
                  <p className="t-body">Human judgment when it matters.</p>
                </motion.div>
              )}

              {/* WHO */}
              {activeEditorialItem === 'who' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="stack"
                >
                  <p className="t-body">This is for real estate professionals who value clarity over chaos.</p>
                  <p className="t-body">People who take their reputation seriously.</p>
                  <p className="t-body">Who prefer systems over scrambling.</p>
                  <p className="t-body">Who want fewer fires, not more excitement.</p>
                  <p className="t-body">If that sounds like you, you're in the right place.</p>
                  <p className="t-body">I don't build for everyone.</p>
                  <p className="t-body">I build for people who want their business to feel calmer, cleaner, and more controlled.</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Final CTA */}
      <section className="section divider bg-black">
        <div className="container px-8 md:px-12 lg:px-16">
          <div className="w-xl" style={{ margin: '0 auto' }}>
            <h2 className="t-h2 mt-2">
              Start with the system that saves the most time.
            </h2>
            <div className="flex justify-center mt-3">
              <a
                href="/upgrade"
                className="btn inline-flex items-center gap-1.5 px-4 py-2.5 text-sm sm:text-base border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
              >
                Go to BossyEmail →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container px-8 md:px-12 lg:px-16">
          <p className="t-label" style={{ textAlign: 'center', marginBottom: '16px' }}>
            These systems were built inside real client work.
          </p>
        </div>
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
            backgroundPosition: '60% 25%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="absolute inset-0 flex items-center justify-start z-10 px-8 md:px-12 lg:px-16">
          <div className="w-xl" style={{ marginLeft: 0, marginRight: 'auto' }}>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="t-label"
            >
              About Me
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="t-h2 mt-2"
            >
              My Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="t-label mt-2"
            >
              Real Estate Professional<br />Systems Builder • Deal Closer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="stack mt-2"
            >
              <p className="t-body">
                I've spent over two decades inside real estate transactions —<br />working behind the scenes where mistakes actually show up.
              </p>
              <p className="t-body">
                I'm not here to teach aesthetics or hype.
              </p>
              <p className="t-body">
                I'm here to fix the operational side of deals<br />that most people ignore until something breaks.
              </p>
              <p className="t-body">
                That perspective informs everything I build.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              viewport={{ once: true }}
              className="mt-3"
            >
              <a
                href="/about"
                className="btn inline-flex items-center gap-1.5 px-4 py-2.5 text-sm sm:text-base border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
              >
                Learn More →
              </a>
            </motion.div>
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
    </>
  );
}
