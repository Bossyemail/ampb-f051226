"use client";

import React, { useState } from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import PreFooterCanvasBlend from '@/components/PreFooterCanvasBlend';
import BookNotificationModal from '@/components/BookNotificationModal';
import { structuredData } from './structured-data';

export default function ReadPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState('');

  const handleOpenModal = (bookTitle: string) => {
    setSelectedBook(bookTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook('');
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
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121216] to-transparent" />
        <div className="absolute inset-0 flex items-center pt-64">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
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
                    className="text-base text-gray-300 max-w-2xl leading-tight mb-3"
                  >
                    Skip the 5 a.m. "hustle harder" mantras.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-base text-gray-300 max-w-2xl leading-tight mb-6"
                  >
                    These are real frameworks and clause hacks for agents who'd rather outsmart a deal than post another "Just Listed!" selfie.
                  </motion.p>
                </div>
              </div>
              {/* Stats Overlay */}
              <aside
                className="pointer-events-none absolute right-0 mr-4 md:mr-6 top-80 hidden w-48 md:w-56 select-none lg:block"
                aria-label="Book stats"
              >
                <div className="space-y-6">
                  <div>
                    <p className="text-white text-4xl font-mono tracking-wider text-right">2</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">BOOKS</p>
                  </div>
                  <hr className="border-t border-white/10" />
                  <div>
                    <p className="text-white text-4xl font-mono tracking-wider text-right">Amazon</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">PUBLISHED</p>
                  </div>
                  <hr className="border-t border-white/10" />
                  <div>
                    <p className="text-white text-4xl font-mono tracking-wider text-right">Real</p>
                    <p className="mt-2 text-right text-[11px] uppercase tracking-[0.08em] text-white/60">STORIES</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section - Editorial, glassy cards */}
      <section id="books" className="py-20 pb-24 max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 bg-[#121216]">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Featured Books</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">Because drama belongs in reality TV, not your contracts.</p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">Frameworks, hacks, and confessions to keep your deals alive and your paychecks intact.</p>
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
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
            <div className="text-neutral-300 mb-4 text-left space-y-3">
              <p>Because paperwork isn't busywork—it's your paycheck. This book cuts through the chaos with field-tested clauses, compliance hacks, and real-world stories of deals saved (and commissions lost).</p>
              <p>Consider it your playbook for avoiding loopholes, stopping "oops" moments, and finally closing contracts without the Swiss cheese effect.</p>
            </div>
            <ul className="mb-4 space-y-1 text-neutral-300 text-[13px] text-left">
              <li>• Why Section 19 isn't a suggestion box</li>
              <li>• How airtight paperwork gets you paid, even when sellers flake</li>
              <li>• The clauses that protect your clients and the deal</li>
            </ul>
            <motion.button 
              onClick={() => handleOpenModal("The Smart Agent's Guide to Contracts That Close")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-150 backdrop-blur-sm bg-white/5 rounded-none min-h-[44px] select-none active:scale-[0.97] active:shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] active:brightness-90"
            >
              Tell Me When It Drops <ChevronRight className="w-4 h-4" />
            </motion.button>
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
            <div className="text-neutral-300 mb-4 text-left space-y-3">
              <p>What do you get when you mash up years of transaction chaos, a sharp tongue, and an inbox full of "just checking in" emails? This book.</p>
              <p>Equal parts memoir, survival guide, and roast of the real estate industry, it's a brutally honest look at the hidden labor of deal-making and the power of words that actually work.</p>
            </div>
            <ul className="mb-4 space-y-1 text-neutral-300 text-[13px] text-left">
              <li>• Snarky confessions from the trenches of contract management</li>
              <li>• Email frameworks that save time, sanity, and checks</li>
              <li>• Why "professional" doesn't have to mean boring</li>
            </ul>
            <motion.button 
              onClick={() => handleOpenModal("Chief Email Officer – Confessions of a Contract Manager")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-150 backdrop-blur-sm bg-white/5 rounded-none min-h-[44px] select-none active:scale-[0.97] active:shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] active:brightness-90"
            >
              Tell Me When It Drops <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Closing Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Smart agents know one good clause or one good email can change the outcome of a deal. That's what these books deliver. Coming soon—don't miss them.
          </p>
        </motion.div>
      </section>
      <PreFooterCanvasBlend from="#0a0a0d" />
      <Footer />
      
      {/* Book Notification Modal */}
      <BookNotificationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        bookTitle={selectedBook}
      />
      </div>
    </>
  );
}
