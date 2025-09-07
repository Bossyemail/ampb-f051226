"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import StickyNavigation from '@/components/StickyNavigation';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import ServicesTicker from '@/components/ServicesTicker';
import Footer from '@/components/Footer';

export default function Home() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
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
          {/* Bottom gradient overlay for smooth transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#121216]"></div>
        <div className="absolute inset-0 flex items-center pt-64 z-10">
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
                    I'm Aylen
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-sm italic text-gray-300 mb-6"
                  >
                    Deal Flow Architect • SaaS Builder • Author
                  </motion.p>
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
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <a 
                      href="https://bossyemail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
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
                  className="pointer-events-none absolute right-6 top-80 hidden w-56 select-none lg:block"
                  aria-label="Personal stats"
                >
                  <div className="space-y-6">
                    {/* 20+ Years of Experience */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <p className="text-white/60 text-4xl font-mono tracking-wider text-right">20+</p>
                      <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">YEARS EXPERIENCE</p>
                    </motion.div>

                    <hr className="border-t border-white/10" />

                    {/* 3K+ Closed Deals */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <p className="text-white/60 text-4xl font-mono tracking-wider text-right">3K+</p>
                      <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">CLOSED DEALS</p>
                    </motion.div>

                    <hr className="border-t border-white/10" />

                    {/* 4+ SaaS Products Built */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      <p className="text-white/60 text-4xl font-mono tracking-wider text-right">4+</p>
                      <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">SAAS PRODUCTS BUILT</p>
                    </motion.div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing between hero and next section */}
      <div className="py-20"></div>

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
                      <h4 className="text-xl font-semibold text-white mb-4">Transaction Coordinating — White-Glove Contract Management</h4>
                      <div className="text-center mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          You can keep juggling your own contracts, chasing signatures, and triple-checking deadlines at 11:59 PM…
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          or you can hand it off to someone who's done it thousands of times.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4">
                          Our TC service is built to save your deals and your sanity.
                        </p>
                      </div>
                      
                      {/* Video Placeholder */}
                      <div className="bg-black/30 rounded-lg p-8 border border-white/10 mb-6">
                        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                          <p className="text-gray-400 text-center">
                            📹 Video Placeholder<br />
                            <span className="text-sm">Selective TC Services VSL</span>
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
                            Because we work closely with each agent, space is limited.
                          </p>
                          <p className="text-gray-300 leading-relaxed">
                            Schedule a call today to see how we can help you close more deals, with less stress.
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center mb-8">
                        <button className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5 mb-2">
                          Book Your Fit Call
                        </button>
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
                      <h4 className="text-xl font-semibold text-white mb-4">ClauseVault — The Cheat Code for Your Contracts</h4>
                      <div className="text-center mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          You don't lose deals because you can't sell.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          You lose them when contracts fall apart — missing clauses, loopholes, sloppy addenda.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                          That's where ClauseVault comes in.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          It's a razor-sharp library of battle-tested clauses built to protect your deals before they explode.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Search...find, copy what you need and you are done.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          I even baked a little Miami into the background, because if you're going to fix contract chaos, you might as well enjoy the view.
                        </p>
                      </div>
                      
                      {/* Video Placeholder */}
                      <div className="bg-black/30 rounded-lg p-8 border border-white/10 mb-6">
                        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                          <p className="text-gray-400 text-center">
                            📹 Video Placeholder<br />
                            <span className="text-sm">ClauseVault VSL</span>
                          </p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mb-6 text-center">
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Instantly plug in airtight clauses that reduce risk.</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Protect your clients (and yourself) from deal-killing mistakes.</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">Built by a TC who's cleaned up more chaos than SEAL Team 6.</span>
                        </li>
                      </ul>
                      
                      <div className="text-center mb-6">
                        <button className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5">
                          See the Magic in Action
                        </button>
                      </div>
                      
                      <div className="text-center mb-8">
                        <p className="text-gray-300 leading-relaxed">
                          I've worked thousands of contracts in South Florida's wildest markets — and I built ClauseVault out of necessity.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Too many agents were winging it, recycling the same weak language, and paying for it later. Now, instead of gambling with your deals, you get a clause library designed by someone who's lived the fallout firsthand.
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
                      <h4 className="text-xl font-semibold text-white mb-4">BossyEmail — Real Estate Emails, Done For You</h4>
                      <div className="text-center mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          Your contracts might be airtight, but your inbox? That's where deals quietly die.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Writing follow-ups, chasing docs, updating clients, keeping everyone looped in.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          It's the part of the job nobody trains you for and everybody hates.
                        </p>
                        <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                          That's why I built BossyEmail.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          It's the only email generator designed for real estate pros.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          Packed with custom-built templates that actually move your deals forward.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          No fluff, no "marketing spam" — just the exact words you need.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          To manage your pipeline and keep clients (and co-op agents) on track.
                        </p>
                      </div>
                      
                      {/* Video Placeholder */}
                      <div className="bg-black/30 rounded-lg p-8 border border-white/10 mb-6">
                        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                          <p className="text-gray-400 text-center">
                            📹 Video Placeholder<br />
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
                          I've managed thousands of contracts, and I know how much rides on one email being clear, firm, and timely.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                          BossyEmail isn't about pretty words — it's about the messages that actually keep your deals alive.
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
                      
                      {/* Video Placeholder */}
                      <div className="bg-black/30 rounded-lg p-8 border border-white/10 mb-6">
                        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                          <p className="text-gray-400 text-center">
                            📹 Video Placeholder<br />
                            <span className="text-sm">Books VSL</span>
                          </p>
                        </div>
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
                        <button className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5">
                          Read the Stories & Skip the Chaos
                        </button>
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
        
        <div className="absolute inset-0 flex items-center pt-32 z-10">
          <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-2">
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
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="/about"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>
              </div>
              <div className="col-span-3">
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
    </div>
  );
}
