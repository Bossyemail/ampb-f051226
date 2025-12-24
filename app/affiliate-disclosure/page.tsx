"use client";

import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen text-white antialiased" style={{ backgroundColor: '#0E0F11' }}>
      <StickyNavigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-32 sm:pt-36 sm:pb-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Affiliate Disclosure
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Sometimes we recommend products, services, or tools we use ourselves (or would happily pay for).
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              If you click on a link and buy, we may earn a small commission—at no extra cost to you. That's called affiliate marketing, and it helps us keep creating tools and content that actually help agents, instead of wasting time on "Just Listed!" reels.
            </p>
            
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              All the major tools on this site—ClauseVault, BossyEmail, ContractLoop, plus our digital downloads—were developed in-house and are owned by Aylen A. Montenegro. When we link to outside products, it's because we believe they bring genuine value, not because someone waved a commission check.
            </p>
            
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              In short: we only recommend what we'd use ourselves, and what we build, we proudly own.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
