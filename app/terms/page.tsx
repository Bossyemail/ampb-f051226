"use client";

import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen text-white antialiased" style={{ backgroundColor: '#0E0F11' }}>
      <StickyNavigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-32 sm:pt-36 sm:pb-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Terms & Conditions
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              Our tools, templates, books, and services are designed to add value to your business—not to replace your broker, your attorney, or your common sense.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              ClauseVault does not provide legal advice. BossyEmail won't magically make leads fall in love with your subject lines. And a checklist template doesn't turn anyone into a transaction coordinator overnight.
            </p>
            
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              You are solely responsible for how you use the content and for complying with your brokerage policies, contracts, and applicable law. If you paste a clause without checking with your broker or attorney and the deal blows up, that's on you—not us.
            </p>
            
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              By using our site, downloads, or SaaS tools, you agree to the full Terms & Conditions. In plain English: play smart, use the tools and double-check the details.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
