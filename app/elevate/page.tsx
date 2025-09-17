'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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
  const [activeTickerItem, setActiveTickerItem] = useState<string | null>('who-thrives');

  const tickerItems = [
    {
      id: 'who-thrives',
      number: '01',
      title: 'Who Thrives With Us',
      content: (
        <>
          <div className="mb-6">
            <p>We're not for everyone — and that's the point. The agents who get the most value out of working with us share a few things in common. If this sounds like you, you're in the right place.</p>
          </div>
          
          <div className="space-y-8">
            {/* 1 - Seasoned */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-white/60 text-4xl font-mono tracking-wider">01</span>
                <span className="text-white/20 text-2xl">\</span>
                <h3 className="text-lg font-semibold text-white">The Seasoned Pro</h3>
              </div>
              <div className="text-base text-gray-300 ml-0 md:ml-16">
                <p className="mb-1">You've closed enough deals to know the basics — and you're running this like a full-time business. The numbers prove it. Now you need support that matches your level.</p>
              </div>
            </div>
            
            {/* 2 - Partner-Ready */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-white/60 text-4xl font-mono tracking-wider">02</span>
                <span className="text-white/20 text-2xl">\</span>
                <h3 className="text-lg font-semibold text-white">The Partner-Ready Agent</h3>
              </div>
              <div className="text-base text-gray-300 ml-0 md:ml-16">
                <p className="mb-1">You're ready to install systems, delegate real work, and stop being your own bottleneck.</p>
                <p>You know delegation isn't a weakness — it's how you scale.</p>
              </div>
            </div>
            
            {/* 3 - Process-Driven */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-white/60 text-4xl font-mono tracking-wider">03</span>
                <span className="text-white/20 text-2xl">\</span>
                <h3 className="text-lg font-semibold text-white">The Process-Driven Closer</h3>
              </div>
              <div className="text-base text-gray-300 ml-0 md:ml-16">
                <p className="mb-1">You value compliance, fast communication, and decisive moves.</p>
                <p>You respect timelines — and you respect the team that protects them.</p>
              </div>
            </div>
            
            {/* 4 - Growth-Focused */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-white/60 text-4xl font-mono tracking-wider">04</span>
                <span className="text-white/20 text-2xl">\</span>
                <h3 className="text-lg font-semibold text-white">The Growth-Focused Hustler</h3>
              </div>
              <div className="text-base text-gray-300 ml-0 md:ml-16">
                <p className="mb-1">You're not just maintaining — you're building. You want more volume, more leverage, and more freedom.</p>
                <p>That takes a partner who can match your pace.</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action Text */}
          <div className="text-center mt-12">
            <hr className="border-t border-white/10 w-32 mx-auto mb-8" />
            <p className="text-gray-300 leading-relaxed text-base max-w-3xl mx-auto">
              If you saw yourself in the list above, we should talk. The right fit isn't about convincing — it's about recognizing. And if you're nodding right now, you've found your team.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'who-we-cant-help',
      number: '02',
      title: 'Who We Can\'t Help',
      content: (
        <>
          <div className="mb-6">
            <p>We've learned through experience: not every agent is a good match. If you see yourself here, no hard feelings — we still want the best for you and your business.</p>
          </div>
          
          <div className="space-y-8">
            {/* 01 - Part-Timers */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-white/60 text-4xl font-mono tracking-wider">01</span>
                <span className="text-white/20 text-2xl">\</span>
                <h3 className="text-lg font-semibold text-white">The Part-Timer</h3>
              </div>
              <div className="text-base text-gray-300 ml-0 md:ml-16">
                <p className="mb-1">If real estate is your side hustle, we're not a fit.</p>
                <p>We partner with professionals who treat this like a career, not a weekend gig.</p>
              </div>
            </div>
            
            {/* 02 - Fire-Drills Only */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-white/60 text-4xl font-mono tracking-wider">02</span>
                <span className="text-white/20 text-2xl">\</span>
                <h3 className="text-lg font-semibold text-white">The Fire-Drill Caller</h3>
              </div>
              <div className="text-base text-gray-300 ml-0 md:ml-16">
                <p className="mb-1">If you only call when your deal is already on fire, it's too late.</p>
                <p>We prevent chaos — we don't just mop it up.</p>
              </div>
            </div>
            
            {/* 03 - Control Freaks */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-white/60 text-4xl font-mono tracking-wider">03</span>
                <span className="text-white/20 text-2xl">\</span>
                <h3 className="text-lg font-semibold text-white">The Control Freak</h3>
              </div>
              <div className="text-base text-gray-300 ml-0 md:ml-16">
                <p className="mb-1">If you can't let go of the paperwork and insist on micromanaging every addendum at 11 PM, this won't work.</p>
                <p>We're here to take weight off your plate, not argue over it.</p>
              </div>
            </div>
            
            {/* 04 - Cut-Rate Chasers */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-white/60 text-4xl font-mono tracking-wider">04</span>
                <span className="text-white/20 text-2xl">\</span>
                <h3 className="text-lg font-semibold text-white">The Discount Shopper</h3>
              </div>
              <div className="text-base text-gray-300 ml-0 md:ml-16">
                <p className="mb-1">If you're shopping for "the cheapest TC in town," keep scrolling.</p>
                <p>We're about precision, compliance, and protecting your reputation — not bargain-bin shortcuts.</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action Text */}
          <div className="text-center mt-12">
            <hr className="border-t border-white/10 w-32 mx-auto mb-8" />
            <p className="text-gray-300 leading-relaxed text-base max-w-3xl mx-auto">
              As independent contractors, we believe in choosing each other. If this isn't the right fit, no worries — we'll be here if anything changes. And if you thought, "Finally, someone who actually gets it," then let's not waste another deal.
            </p>
          </div>
        </>
      )
    }
  ];

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
          >
            <source src="/videos/office-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
          {/* Gradient blend at bottom of hero video */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121216] to-transparent" />
          <div className="absolute inset-0 flex items-center pt-64">
            <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
              <div className="grid grid-cols-6 gap-8">
                <div className="col-span-3">
                  <div className="text-left">
                    <motion.p 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-sm italic text-gray-300 mb-2"
                    >
                      Here is
                    </motion.p>
                    <motion.h2 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2"
                    >
                      A Tailored TC Service for Agents Who Refuse to Compromise.
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="text-sm italic text-gray-300 mb-6"
                    >
                      Local • Licensed • Experienced
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-base text-gray-300 max-w-2xl leading-tight mb-6"
                    >
                      Your deals deserve more than checklists. Our licensed South Florida team delivers precision, speed, and discretion — so your reputation stays flawless and your clients stay protected.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <a
                        href="https://form.jotform.com/252496909826069"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                        aria-label="Schedule a discovery call"
                        onClick={() => handleButtonClick('Are We a Fit?', 'hero')}
                      >
                        Are We a Fit? <span>{'>'}</span>
                      </a>
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
                <p className="text-white text-4xl font-mono tracking-wider text-right">20+</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">YEARS EXPERIENCE</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-white text-4xl font-mono tracking-wider text-right">Local</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">SOUTH FLORIDA</p>
              </motion.div>

              <hr className="border-t border-white/10" />

                                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                          >
                            <p className="text-white text-4xl font-mono tracking-wider text-right">Zero</p>
                            <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">RISK TOLERANCE</p>
                          </motion.div>
            </div>
          </aside>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 lg:px-8 relative z-10 bg-[#121216]">
          <div className="relative z-10 flex justify-center">
            <div className="max-w-4xl text-center space-y-6">
              <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">{/* Section Heading */}
                Transaction Coordination.<br /><em>Redefined.</em>
              </h1>
              <p className="text-gray-300 leading-relaxed text-base text-center max-w-3xl mx-auto">
                We don't just push paperwork — we protect your reputation, your time, and your sanity. With 30+ years of combined expertise in lending, title, and sales, we bring unmatched local knowledge and airtight execution to every closing. From contract to keys, nothing slips through the cracks.
              </p>
              <div className="font-medium text-white text-center">
                We're not for everyone — and that's intentional.
              </div>
              <p className="text-gray-300 leading-relaxed text-base text-center max-w-3xl mx-auto">
                We partner exclusively with full-time professionals who value precision and speed. If you're serious about scaling your business and done with chasing signatures at 11 PM, you're in the right place.
              </p>
            </div>
          </div>
        </section>


        {/* Product Demo Section */}
        <section className="bg-[#121216] w-full">
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
            {/* Gradient blend at top of video */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#121216] to-transparent z-10" />
            {/* Gradient blend at bottom of video */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121216] to-transparent" />
            
            {/* Interactive About Sections Ticker - Centered in video columns */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-32 w-full text-sm px-4 sm:px-8 lg:px-16 py-4"
            >
              {tickerItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTickerItem(activeTickerItem === item.id ? null : item.id)}
                  className={`flex items-center gap-4 transition-all duration-300 hover:scale-105 ${
                    activeTickerItem === item.id ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <span className={`text-3xl font-mono tracking-wider transition-colors duration-300 ${
                    activeTickerItem === item.id ? 'text-white' : 'text-white/60'
                  }`}>
                    {item.number}
                  </span>
                  <span className="text-neutral-500">\</span>
                  <span className={`text-lg transition-colors duration-300 ${
                    activeTickerItem === item.id ? 'text-white' : 'text-white'
                  }`}>
                    {item.title}
                  </span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Ticker Content Section */}
        {activeTickerItem && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-[#121216] pt-8 pb-8"
          >
            <div className="mx-auto max-w-4xl px-4 lg:px-8">
              {tickerItems
                .filter(item => item.id === activeTickerItem)
                .map((item) => (
                  <div key={item.id} className="text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-base text-neutral-300 leading-relaxed max-w-4xl space-y-4"
                    >
                      <div>
                        {typeof item.content === 'string' ? (
                          <p>{item.content}</p>
                        ) : (
                          item.content
                        )}
                      </div>
                    </motion.div>
                  </div>
                ))}
            </div>
          </motion.section>
        )}

        {/* Signup Section */}
        <div className="bg-[#121216] text-center py-8">
          <a href="https://form.jotform.com/252496909826069"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
            onClick={() => handleButtonClick('Are We a Fit?', 'signup')}>
            Are We a Fit? <span>{'>'}</span>
          </a>
          <p className="text-sm text-gray-400 mt-2">Limited space available.</p>
        </div>

        {/* Solution Section */}
        <section className="py-16 px-4 lg:px-8 relative z-10 bg-[#121216]">
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 space-y-4">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                  Your Partner in Business — <span className="italic font-normal">On Demand</span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We don't just manage paperwork
                </p>
                <p className="text-gray-300 leading-relaxed -mt-4">
                  — we protect your reputation, your time, and your sanity with unmatched expertise.
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
                  This isn't about replacing you
                </p>
                <p className="text-gray-400 italic text-sm">
                  — it's about adding value, competence, and structure your clients will notice immediately.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Final CTA Section */}
        <section className="py-16 pb-24 px-4 lg:px-8 relative z-10 bg-[#121216] text-center">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Let's See If We're a <em>Good</em> Fit
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
            Because we work closely with each agent, space is limited. Schedule a call today to see how we can help you close more deals, with less stress.
          </p>
          <a
            href="https://form.jotform.com/252496909826069"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
            onClick={() => handleButtonClick('Are We a Fit?', 'final-cta')}
          >
            Are We a Fit? <span>{'>'}</span>
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Limited space available.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
