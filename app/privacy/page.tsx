"use client";

import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-white antialiased" style={{ backgroundColor: '#0E0F11' }}>
      <StickyNavigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-32 sm:pt-36 sm:pb-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Privacy Policy
          </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            We respect your privacy more than sellers respect showing schedules.
          </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Here's the deal: we collect the basics (name, email, contact info) so we can operate our products (ClauseVault, BossyEmail, Contract Loop, digital downloads), keep improving them, and make sure you get the updates and support you signed up for.
            </p>
            
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              We don't sell, rent, or hand off your information to shady third parties. Ever. If we share data, it's only with trusted service providers who help us run this business (think: payment processors, email platforms, or analytics tools). They get the bare minimum—nothing more.
            </p>
            
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              By using this site, you consent to our collection and use of data as outlined in the full Privacy Policy. Translation: we'll treat your information like a closing gift, not a lead list.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
