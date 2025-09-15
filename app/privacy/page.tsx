"use client";

import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121216] via-[#0c0d11] to-[#0a0a0d] text-white">
      <StickyNavigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            We respect your privacy more than sellers respect showing schedules.
          </p>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              Here's the deal: we collect the basics (name, email, contact info) so we can operate our products (ClauseVault, BossyEmail, Contract Loop, digital downloads), keep improving them, and make sure you get the updates and support you signed up for.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              We don't sell, rent, or hand off your information to shady third parties. Ever. If we share data, it's only with trusted service providers who help us run this business (think: payment processors, email platforms, or analytics tools). They get the bare minimum—nothing more.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              By using this site, you consent to our collection and use of data as outlined in the full Privacy Policy. Translation: we'll treat your information like a closing gift, not a lead list.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
