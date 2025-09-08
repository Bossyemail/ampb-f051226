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
                <p className="text-white/60 text-4xl font-mono tracking-wider text-right">20+</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">YEARS EXPERIENCE</p>
              </motion.div>

              <hr className="border-t border-white/10" />

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-white/60 text-4xl font-mono tracking-wider text-right">Local</p>
                <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">SOUTH FLORIDA</p>
              </motion.div>

              <hr className="border-t border-white/10" />

                                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                          >
                            <p className="text-white/60 text-4xl font-mono tracking-wider text-right">Zero</p>
                            <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">RISK TOLERANCE</p>
                          </motion.div>
            </div>
          </aside>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-4 lg:px-8 relative z-10 bg-[#282828]">
          <div className="relative z-10 flex justify-center">
            <div className="max-w-4xl text-center space-y-6">
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">{/* Section Heading */}
                Transaction Coordination.<br /><em>Redefined.</em>
              </h2>
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
        <section className="py-16 px-4 lg:px-8 relative z-10 bg-[#282828]">
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

        {/* How It Works Section */}
        <section className="bg-[#282828] text-white pt-8 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Our Ideal Client Is…
            </h2>
            <div className="space-y-6 mt-10">
              {/* 1 - Seasoned */}
              <div className="flex items-center space-x-2">
                <span className="text-white/60 text-4xl font-mono tracking-wider">01</span>
                <span className="text-white/20 text-2xl mx-2">\</span>
                <h3 className="text-lg font-semibold text-white whitespace-nowrap">The Seasoned Pro</h3>
                <span className="text-white/20 text-2xl ml-4 mr-2">\</span>
                <div className="text-base text-gray-300 py-1">
                  <p>You've closed enough deals to know the basics—and you're running this like a full-time business. The numbers prove it.</p>
                </div>
              </div>
              
              <hr className="border-t border-white/10" />
              
              {/* 2 - Partner-Ready */}
              <div className="flex items-center space-x-2">
                <span className="text-white/60 text-4xl font-mono tracking-wider">02</span>
                <span className="text-white/20 text-2xl mx-2">\</span>
                <h3 className="text-lg font-semibold text-white whitespace-nowrap">The Partner-Ready Agent</h3>
                <span className="text-white/20 text-2xl ml-4 mr-2">\</span>
                <div className="text-base text-gray-300 py-1">
                  <p className="text-base">You're ready to install systems and protocols, delegate real work, and stop being your own bottleneck. You understand that delegation is how you scale.</p>
                </div>
              </div>
              
              <hr className="border-t border-white/10" />
              
              {/* 3 - Process-Driven */}
              <div className="flex items-center space-x-2">
                <span className="text-white/60 text-4xl font-mono tracking-wider">03</span>
                <span className="text-white/20 text-2xl mx-2">\</span>
                <h3 className="text-lg font-semibold text-white whitespace-nowrap">The Process-Driven Closer</h3>
                <span className="text-white/20 text-2xl ml-4 mr-2">\</span>
                <div className="text-base text-gray-300 py-1">
                  <p>You value compliance, fast communication, and decisive moves. You respect timelines—and the team that protects them.</p>
                </div>
              </div>
              
              <hr className="border-t border-white/10" />
              
              {/* 4 - Growth-Focused */}
              <div className="flex items-center space-x-2">
                <span className="text-white/60 text-4xl font-mono tracking-wider">04</span>
                <span className="text-white/20 text-2xl mx-2">\</span>
                <h3 className="text-lg font-semibold text-white whitespace-nowrap">The Growth-Focused Hustler</h3>
                <span className="text-white/20 text-2xl ml-4 mr-2">\</span>
                <div className="text-base text-gray-300 py-1">
                  <p className="text-base">You're not just maintaining — you're scaling.</p>
                </div>
              </div>
            </div>
            
            {/* Who We're NOT For Section */}
            <div className="mt-20">
              <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Who We're Not For (and That's OK)
              </h2>
              <div className="space-y-6 mt-10">
                {/* 01 - Part-Timers */}
                <div className="flex items-center space-x-2">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">01</span>
                  <span className="text-white/20 text-2xl mx-2">\</span>
                  <h3 className="text-lg font-semibold text-white whitespace-nowrap">The Part-Timer</h3>
                  <span className="text-white/20 text-2xl ml-4 mr-2">\</span>
                  <div className="text-base text-gray-300 py-1">
                    <p>If real estate is your side hustle, we're not your people. We partner with full-time professionals who treat this like a career, not a weekend gig.</p>
                  </div>
                </div>
                
                <hr className="border-t border-white/10" />
                
                {/* 02 - Fire-Drills Only */}
                <div className="flex items-center space-x-2">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">02</span>
                  <span className="text-white/20 text-2xl mx-2">\</span>
                  <h3 className="text-lg font-semibold text-white whitespace-nowrap">The Fire-Drill Caller</h3>
                  <span className="text-white/20 text-2xl ml-4 mr-2">\</span>
                  <div className="text-base text-gray-300 py-1">
                    <p>If you only call for help when your deal is already on fire, it's too late. We prevent chaos — we don't just mop it up.</p>
                  </div>
                </div>
                
                <hr className="border-t border-white/10" />
                
                {/* 03 - Control Freaks */}
                <div className="flex items-center space-x-2">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">03</span>
                  <span className="text-white/20 text-2xl mx-2">\</span>
                  <h3 className="text-lg font-semibold text-white whitespace-nowrap">The Control Freak</h3>
                  <span className="text-white/20 text-2xl ml-4 mr-2">\</span>
                  <div className="text-base text-gray-300 py-1">
                    <p className="text-base">If you can't let go of the paperwork and insist on micromanaging every addendum at 11 PM, we're not a fit.</p>
                  </div>
                </div>
                
                <hr className="border-t border-white/10" />
                
                {/* 04 - Cut-Rate Chasers */}
                <div className="flex items-center space-x-2">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">04</span>
                  <span className="text-white/20 text-2xl mx-2">\</span>
                  <h3 className="text-lg font-semibold text-white whitespace-nowrap">The Discount Shopper</h3>
                  <span className="text-white/20 text-2xl ml-4 mr-2">\</span>
                  <div className="text-base text-gray-300 py-1">
                    <p>If you're shopping for "the cheapest TC," keep shopping. We're about precision, compliance, and protecting your reputation — not bargain-bin shortcuts.</p>
                  </div>
                </div>
              </div>
              
              {/* Call to Action Text */}
              <div className="text-center mt-12">
                <hr className="border-t border-white/10 w-32 mx-auto mb-8" />
                <p className="text-gray-300 leading-relaxed text-base max-w-3xl mx-auto">
                  If you saw yourself in the list above, book the call. If you didn't, no hard feelings — we're not here for everyone, and we like it that way. But if you just thought, 'finally, someone who actually gets it,' then what are you waiting for? You're our kind of client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section style={{backgroundColor: "#282828", padding: "60px 20px", textAlign: "center", color: "#fff"}}>
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
