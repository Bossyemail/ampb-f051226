"use client";
import React from 'react';
import { motion } from 'framer-motion';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';

export default function UpgradePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
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
            <source src="/videos/bossy-email.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center pt-64">
            <div className="w-full max-w-6xl mx-auto px-8 lg:px-16 relative">
              <div className="grid grid-cols-5 gap-8">
                <div className="col-span-2">
                  <div className="text-left">
                    <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">
                      Meet BossyEmail
                    </motion.h2>
                    <motion.p className="text-sm italic text-gray-300 mb-6">
                      Smart Email Generator • Instant Templates
                    </motion.p>
                    <motion.p className="text-base text-gray-300 max-w-2xl leading-tight mb-6">
                      Built by someone who's written thousands of real estate emails and lived to tell about it. BossyEmail gives you the exact words to chase docs, follow up without sounding desperate, and put out fires like a pro — without living in your inbox.
                    </motion.p>
                    <motion.div>
                      <button className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5">
                        Get Started Today
                      </button>
                    </motion.div>
                  </div>
                </div>
                <div className="col-span-3">
                  {/* Right side space for stats overlay (empty, just for spacing) */}
                </div>
              </div>
              {/* Stats Overlay - vertically centered with hero text */}
              <aside className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 hidden w-56 select-none lg:block mr-6" aria-label="BossyEmail stats">
                <div className="space-y-6">
                  <div>
                    <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">AI</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">EMAIL GENERATOR</p>
                  </div>
                  <hr className="border-t border-white/10 w-1/2 ml-auto" />
                  <div>
                    <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">100+</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">TEMPLATES</p>
                  </div>
                  <hr className="border-t border-white/10 w-1/2 ml-auto" />
                  <div>
                    <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">500+</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">ACTIVE USERS</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        {/* Problem Section */}
        <section className="py-16 px-4 lg:px-8 relative z-10" style={{backgroundColor: "#212124"}}>
          <div className="relative z-10 flex justify-center">
            <div className="max-w-4xl text-center space-y-3 mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                Markets change. People change.<br />
                Contingencies don't.
              </h2>
              <p className="text-gray-300 text-sm leading-snug">
                Clients ghost. Lenders drag. Agents flip-flop. But contingencies and protocols stay the same. BossyEmail turns that predictability into speed: save hours of typing and generate scenario-specific emails in seconds—so deals keep moving while everyone else "checks with their client."
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
            className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5">
            Get BossyEmail Now →
          </a>
          <p className="text-sm text-gray-400 mt-2">No fluff. Cancel anytime.</p>
        </div>
        {/* Solution Section */}
        <section className="py-16 px-4 lg:px-8 relative z-10 bg-[#282828]">
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-center text-2xl font-bold mb-4">
                  Your Personal Deal-Closing Ghostwriter
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  BossyEmail is basically me—two decades of contract management,<br />
                  agent wrangling, and deal-saving—trapped inside a tool.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { title: "100+", description: "Templates" },
                  { title: "Instant", description: "AI Drafting" },
                  { title: "Proven", description: "Phrasing" },
                  { title: "Fire Drill", description: "Mode" }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <p className="text-white text-2xl md:text-3xl font-semibold tracking-tight mb-1">{feature.title}</p>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-400 italic text-sm">
                  It's not "AI for everyone." It's AI for you—the agent who actually wants to look like they know what they're doing.
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
                <h3 className="text-lg font-semibold mb-1">Pick</h3>
                <p className="text-sm opacity-80">
                  Inspection drama? Repair credit? Lender won’t chill? Search and select.
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
                <h3 className="text-lg font-semibold mb-1">Personalize</h3>
                <p className="text-sm opacity-80">
                  Plug in deal context and it auto-polishes for clarity and compliance in seconds.
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
                <h3 className="text-lg font-semibold mb-1">Send</h3>
                <p className="text-sm opacity-80">
                  Tight phrasing, zero typos, faster yeses.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Final CTA Section */}
        <section style={{backgroundColor: "#282828", padding: "60px 20px", textAlign: "center", color: "#fff"}}>
          <h2 className="text-center text-2xl font-bold mb-1">
            Stop Typing. Start Closing.
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
            Every email you write from scratch is time you could spend on a deal. BossyEmail makes sure your next message is the right one — fast, persuasive, and impossible to ignore.
          </p>
          <button 
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5">
            Get BossyEmail Now
          </button>
          <p style={{marginTop: "15px", fontSize: "0.9rem", color: "#aaa"}}>
            No fluff. Cancel anytime.
          </p>
        </section>
        <Footer />
      </div>
    </>
  );
}
