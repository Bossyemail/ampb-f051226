"use client";

import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ReadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
      <StickyNavigation />
      {/* Hero Section - Consistent with other pages */}
      <section className="relative h-[650px] w-full -mt-32">
        {/* Placeholder video of Aylen with both books */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/videos/books-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex items-center pt-64">
          <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-2">
                <div className="text-left">
                  <motion.h1
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2"
                  >
                    Meet The Books
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-sm italic text-gray-300 mb-3"
                  >
                    Zero fluff. Zero rah-rah.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-base text-gray-300 max-w-2xl leading-tight mb-6"
                  >
                    Skip the 5 a.m. “hustle harder” mantras. These are real frameworks and clause hacks for agents who’d rather outsmart a deal than post another “Just Listed!” selfie.
                  </motion.p>
                </div>
              </div>
              {/* Stats Overlay */}
              <aside
                className="pointer-events-none absolute right-0 mr-6 top-80 hidden w-56 select-none lg:block"
                aria-label="Book stats"
              >
                <div className="space-y-6">
                  <div>
                    <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">2</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">BOOKS</p>
                  </div>
                  <hr className="border-t border-white/10" />
                  <div>
                    <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">Amazon</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">PUBLISHED</p>
                  </div>
                  <hr className="border-t border-white/10" />
                  <div>
                    <p className="text-white text-[32px] leading-none font-semibold tracking-tight text-right">Real</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">STORIES</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section - Editorial, glassy cards */}
      <section id="books" className="py-20 max-w-6xl mx-auto px-8 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Featured Books</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Book 1 */}
          <div className="bg-white/5 ring-1 ring-white/10 p-8 rounded-xl flex flex-col items-center text-center">
            <img src="/images/books/boring-closings.jpg" alt="Boring Closings (The Good Kind) — book cover" className="w-40 h-60 object-cover mb-4 rounded shadow-lg" />
            <h3 className="text-xl font-semibold text-white mb-2">Boring Closings (The Good Kind)</h3>
            <p className="text-neutral-300 mb-4">Contracts don’t need drama; they need decisions. This is the field manual for making addenda readable, timelines unmissable, and closings pleasantly uneventful.</p>
            <ul className="mb-4 space-y-1 text-neutral-300 text-[13px] text-left">
              <li>• The <span className="text-white font-medium">N.O.T.E.</span> method for airtight addenda</li>
              <li>• Timeline scoreboard (who does what by when)</li>
              <li>• Pre-close checklist that prevents 11 p.m. surprises</li>
            </ul>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-neutral-400 mb-4 justify-center">
              <span>Paperback + eBook</span><span className="text-neutral-500">•</span>
              <span>~160 pages</span><span className="text-neutral-500">•</span>
              <span>Templates inside</span>
            </div>
            <a href="#buy-boring" className="inline-flex items-center gap-2 px-5 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5 rounded">
              View on Amazon <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          {/* Book 2 */}
          <div className="bg-white/5 ring-1 ring-white/10 p-8 rounded-xl flex flex-col items-center text-center">
            <img src="/images/books/clausevault-guide.jpg" alt="ClauseVault Field Guide — book cover" className="w-40 h-60 object-cover mb-4 rounded shadow-lg" />
                            <h3 className="text-xl font-semibold text-white mb-2">clausevault Field Guide</h3>
            <p className="text-neutral-300 mb-4">Language wins deals—and survives audits. This guide gives you drop-in clauses for the moments that usually get vague, rewritten, or litigated. Clean phrasing. Measurable terms. Fewer “we meant…” emails.</p>
            <ul className="mb-4 space-y-1 text-neutral-300 text-[13px] text-left">
              <li>• Credits, repairs, and timelines—made measurable</li>
              <li>• Appraisal & financing protection without drama</li>
              <li>• Seller rent-backs and access handled like adults</li>
            </ul>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-neutral-400 mb-4 justify-center">
              <span>Paperback + eBook</span><span className="text-neutral-500">•</span>
              <span>~140 pages</span><span className="text-neutral-500">•</span>
              <span>Clause templates</span>
            </div>
            <a href="#buy-clause" className="inline-flex items-center gap-2 px-5 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5 rounded">
              View on Amazon <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
