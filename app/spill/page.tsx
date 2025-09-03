"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import StickyNavigation from "@/components/StickyNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from 'react';

function PremiumFAQ() {
  const faqData = [
    {
      q: "What exactly do I get?",
      a: "One email a week with a quick lesson, a copy-paste play (script/clauses), and 3 links worth your time."
    },
    {
      q: "Is this for new agents?",
      a: "It’s written for full-time agents, but anyone who wants cleaner deals and fewer 11 p.m. addenda will benefit."
    },
    {
      q: "Spam? Data? Unsubscribe?",
      a: "No spam, no selling lists, unsubscribe anytime with one click. Your inbox is safe."
    }
  ];
  const [open, setOpen] = useState(null);
  return (
    <section className="mt-20">
      <h2 className="text-center text-xl font-semibold tracking-tight text-white mb-8">Quick Answers</h2>
      <div className="flex flex-col divide-y divide-white/10">
        {faqData.map(({ q, a }, i) => (
          <div
            key={i}
            className="py-6 cursor-pointer group transition-all duration-300"
            onClick={() => setOpen(open === i ? null : i)}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpen(open === i ? null : i); }}
            aria-expanded={open === i}
            role="button"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-white font-semibold text-base text-center">{q}</span>
              <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
              style={{ minHeight: 0 }}
            >
              <p className="text-neutral-300 text-[15px] text-center">{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SpillPage() {
  return (
    <div className="min-h-screen bg-[#212124] text-white">
      <StickyNavigation />
      {/* Hero Section - Consistent with other pages */}
      <section className="relative h-[650px] w-full -mt-32">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          loading="lazy"
        >
          <source src="/videos/office-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex items-center pt-64">
          <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-2">
                <div className="text-left">
                  <motion.h2
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2"
                  >
                    Don’t sign up.<br />Seriously.
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-sm italic text-gray-300 mb-6"
                  >
                    Unfiltered • Battle-Tested • Inbox Gold.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-base text-gray-300 max-w-2xl leading-tight mb-6"
                  >
                    This is where the glossy “rah-rah” industry advice goes to die — and real talk takes over. Every edition delivers something you can actually use before your next showing, contract negotiation, or late-night “we have a problem” text.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <button
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
                      aria-label="Send Me the Snarkletter"
                    >
                      Send Me the Snarkletter
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </div>
              {/* Stats Overlay */}
              <aside
                className="pointer-events-none absolute right-0 top-80 hidden w-56 select-none lg:block mr-6"
                aria-label="Snarkletter stats"
              >
                <div className="space-y-6">
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                    <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">NO</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">SPAM</p>
                  </motion.div>
                  <hr className="border-t border-white/10" />
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}>
                    <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">NO</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">FLUFF</p>
                  </motion.div>
                  <hr className="border-t border-white/10" />
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}>
                    <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">NO</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">BORING</p>
                  </motion.div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        {/* STATS OVERLAY */}
        {/* This aside block is now redundant with the new grid layout */}
      </section>
      {/* Main Content - Replace with provided copy */}
      <main className="bg-gradient-to-b from-neutral-900 to-neutral-950 py-12">
        <div className="mx-auto max-w-6xl px-8 lg:px-16">
          {/* FROM SOMEONE IN THE ARENA (text only) */}
          <section className="mt-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">From Someone in the Arena</h2>
            <p className="mt-2 text-neutral-300 max-w-3xl">
              Not recycled theory from a “guru.” This comes from someone who’s still doing the work:
            </p>
            <ul className="mt-3 space-y-1 text-neutral-300 text-[14px]">
              <li className="flex gap-2"><span className="text-neutral-500">•</span> Negotiated the train-wreck contracts</li>
              <li className="flex gap-2"><span className="text-neutral-500">•</span> Smoothed over meltdown clients</li>
              <li className="flex gap-2"><span className="text-neutral-500">•</span> Survived the 11:30 p.m. “we need to rewrite the addendum” calls</li>
            </ul>
            <blockquote className="mt-4 border-l border-white/10 pl-4 text-neutral-300 italic max-w-3xl">
              Think of it as your inbox best friend—the one who knows the ins, outs, and back doors of contracts,
              client management, and the industry’s favorite BS—and will tell you exactly what’s worth your time.
            </blockquote>
          </section>

          {/* INSIDE EVERY SNARKLETTER */}
          <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Inside Every Snarkletter</h2>
            <p className="mt-2 text-neutral-300">Real solutions, zero fluff. Here’s what hits your inbox.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* 01 */}
              <article className="group backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-5 rounded-none transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(211,204,214,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">01</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Problem of the Week</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">
                  A real-world deal disaster—and the exact fix so you don’t end up in the same mess.
                </p>
              </article>
              {/* 02 */}
              <article className="group backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-5 rounded-none transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(17,75,77,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">02</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Quick Win</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">
                  A tactic, script, or tool you can drop into a deal <em>today</em> to close faster.
                </p>
              </article>
              {/* 03 */}
              <article className="group backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-5 rounded-none transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(211,204,214,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">03</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Storytime (with Snark)</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">
                  Field stories you won’t hear in training—lessons baked in (and probably a laugh).
                </p>
              </article>
              {/* 04 */}
              <article className="group backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-5 rounded-none transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-14px_rgba(17,75,77,.35)]">
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">04</span>
                  <span className="text-neutral-500">/</span>
                  <h3 className="text-white text-sm font-semibold tracking-tight">Tools &amp; Trends</h3>
                </div>
                <p className="mt-1 text-neutral-300 text-[13px] leading-5">
                  Scripts, checklists, and resources that keep you compliant and three steps ahead.
                </p>
              </article>
            </div>
          </section>

          {/* Micro-FAQ */}
          <PremiumFAQ />

          {/* CTA - Editorial Button at the bottom */}
          <div className="mt-16 text-center">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
              aria-label="Send Me the Snarkletter"
            >
              Send Me the Snarkletter
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
