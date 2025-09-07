"use client";
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

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
              <div className="grid grid-cols-6 gap-8">
                <div className="col-span-2">
                  <div className="text-left">
                    <motion.h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">
                      Your Personal Ghostwriter
                    </motion.h2>
                    <motion.p className="text-sm italic text-gray-300 mb-2">
                      Searchable, Copy Ready Clause Library • Scenario Specific
                    </motion.p>
                    <motion.p className="text-base text-gray-300 leading-tight mb-6">
                      BossyEmail is basically me—two decades of contract management, agent wrangling, and deal-saving—trapped inside a tool.
                    </motion.p>
                    <motion.div>
                      <a 
                        href="https://bossyemail.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                      >
                        Get BossyEmail Now →
                      </a>
                    </motion.div>
                  </div>
                </div>
                <div className="col-span-4">
                  {/* Right side space for stats overlay (empty, just for spacing) */}
                </div>
              </div>
              {/* Stats Overlay - vertically centered with hero text */}
              <aside className="pointer-events-none absolute right-6 top-80 hidden w-56 select-none lg:block" aria-label="BossyEmail stats">
                <div className="space-y-6">
                  <div>
                    <p className="text-white/60 text-4xl font-mono tracking-wider text-right">AI</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">EMAIL GENERATOR</p>
                  </div>
                  <hr className="border-t border-white/10" />
                  <div>
                    <p className="text-white/60 text-4xl font-mono tracking-wider text-right">100+</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">TEMPLATES</p>
                  </div>
                  <hr className="border-t border-white/10" />
                  <div>
                    <p className="text-white/60 text-4xl font-mono tracking-wider text-right">500+</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">ACTIVE USERS</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
        
        {/* Real Estate Emails Section */}
        <section className="py-16 px-4 lg:px-8 relative z-10" style={{backgroundColor: "#212124"}}>
          <div className="relative z-10 flex justify-center">
            <div className="max-w-4xl text-center space-y-6 mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Real Estate Emails<br />
                Done For You
              </h2>
              <div className="text-center">
                <p className="text-gray-300 text-base leading-relaxed">
                  Your contracts might be airtight, but your inbox? That's where deals quietly die.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  Writing follow-ups, chasing docs, keeping clients in the loop
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  — it's the unglamorous part of the job nobody trains you for.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  That's why I built BossyEmail.
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  The exact words to move deals forward,
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  without rewriting the same message for the thousandth time.
                </p>
              </div>
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
          <a href="https://bossyemail.com" 
            target="_blank" 
            rel="noopener noreferrer"
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
              <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Markets change. People change.<br />
                Contingencies don't.
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Clients ghost. Lenders drag. Agents flip-flop. But protocols never change.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                BossyEmail turns that predictability into speed: scenario-specific emails in seconds, so your deals keep moving while everyone else stalls.
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
          <div className="max-w-4xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                From <em>Stuck</em> to <em>Sent</em> in Under 2 Minutes
              </h2>
            </div>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="border-b border-gray-600 pb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">01</span>
                  <span className="text-white/20 text-2xl">\</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Pick</h3>
                  <span className="text-white/20 text-2xl">\</span>
                  <p className="text-gray-300 text-base">
                    Inspection drama? Repair credit? Lender won't chill? Search and select.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="border-b border-gray-600 pb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">02</span>
                  <span className="text-white/20 text-2xl">\</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Personalize</h3>
                  <span className="text-white/20 text-2xl">\</span>
                  <p className="text-gray-300 text-base">
                    Plug in deal context for clarity and compliance in seconds.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="border-b border-gray-600 pb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-white/60 text-4xl font-mono tracking-wider">03</span>
                  <span className="text-white/20 text-2xl">\</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">Send</h3>
                  <span className="text-white/20 text-2xl">\</span>
                  <p className="text-gray-300 text-base">
                    Tight phrasing, zero typos, faster yeses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Authority Section */}
        <section className="py-16 px-4 lg:px-8 relative z-10 bg-[#282828]">
          <div className="relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Text */}
                <div className="text-left">
                  <p className="text-white text-base leading-relaxed">
                    Built by a TC Who's Sent Thousands of Real Estate Emails
                  </p>
                  <p className="text-white text-base leading-relaxed mb-4">
                    I've managed thousands of contracts, and I know how much rides on a single email being clear, firm, and timely.
                  </p>
                  <p className="text-white text-base leading-relaxed">
                    BossyEmail isn't about pretty words — it's about the messages that keep your deals alive.
                  </p>
                </div>
                
                {/* Right side - Animated Stats */}
                <div className="space-y-6">
                  {/* Sent Messages Stat */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-semibold text-lg">Sent Messages</h3>
                        <p className="text-gray-300 text-sm">Real estate emails delivered</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">
                          <AnimatedCounter end={38400} suffix="k" />
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Messages</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Inbox Zero Stat */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-semibold text-lg">Inbox Zero</h3>
                        <p className="text-gray-300 text-sm">Days of organized communication</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">
                          <AnimatedCounter end={5475} />
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Days</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Marked Done Stat */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-semibold text-lg">Marked Done</h3>
                        <p className="text-gray-300 text-sm">Conversations completed</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">
                          <AnimatedCounter end={248000} suffix="k" />
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Conversations</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section style={{backgroundColor: "#282828", padding: "60px 20px", textAlign: "center", color: "#fff"}}>
          <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1">
            Stop Typing. Start Closing.
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
            Every email you write from scratch is time you could spend on a deal. BossyEmail makes sure your next message is fast, persuasive, and impossible to ignore.
          </p>
          <a 
            href="https://bossyemail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5">
            Get BossyEmail Now
          </a>
          <p style={{marginTop: "15px", fontSize: "0.9rem", color: "#aaa"}}>
            No fluff. Cancel anytime.
          </p>
        </section>
        <Footer />
      </div>
    </>
  );
}
