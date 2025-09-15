"use client";

import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
      <StickyNavigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Our tools, templates, books, and services are designed to add value to your business—not to replace your broker, your attorney, or your common sense.
          </p>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              ClauseVault does not provide legal advice. BossyEmail won't magically make leads fall in love with your subject lines. And a checklist template doesn't turn anyone into a transaction coordinator overnight.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              You are solely responsible for how you use the content and for complying with your brokerage policies, contracts, and applicable law. If you paste a clause without checking with your broker or attorney and the deal blows up, that's on you—not us.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              By using our site, downloads, or SaaS tools, you agree to the full Terms & Conditions. In plain English: play smart, use the tools and double-check the details.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
