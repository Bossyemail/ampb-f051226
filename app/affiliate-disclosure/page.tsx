"use client";

import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
      <StickyNavigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Affiliate Disclosure
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Sometimes we recommend products, services, or tools we use ourselves (or would happily pay for).
          </p>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              If you click on a link and buy, we may earn a small commission—at no extra cost to you. That's called affiliate marketing, and it helps us keep creating tools and content that actually help agents, instead of wasting time on "Just Listed!" reels.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              All the major tools on this site—ClauseVault, BossyEmail, ContractLoop, plus our digital downloads—were developed in-house and are owned by Aylen A. Montenegro. When we link to outside products, it's because we believe they bring genuine value, not because someone waved a commission check.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              In short: we only recommend what we'd use ourselves, and what we build, we proudly own.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
