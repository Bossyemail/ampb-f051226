"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import StickyNavigation from '@/components/StickyNavigation';
import ProductShowcase from '@/components/ProductShowcase';
import ExperienceSection from '@/components/ExperienceSection';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
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
          loading="lazy"
        >
          <source src="/videos/miami-skyline.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex items-center pt-64">
          <div className="w-full max-w-6xl mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-5 gap-8">
              <div className="col-span-2">
                <div className="text-left">
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    Aylen Montenegro
                  </motion.h1>
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-gray-300 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Real Estate Tools That Actually Work
                  </motion.p>
                  <motion.p 
                    className="text-base text-gray-300 max-w-2xl leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    I help South Florida agents close more deals—faster, smoother, no fluff. 
                    From email templates that get replies to contract clauses that protect your deals.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <button className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5">
                      See What I Built
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </div>
              <div className="col-span-3">
                {/* Right side space for stats overlay */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Services */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <ContactSection />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
