"use client";

import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';

export default function DataSecurityPage() {
  return (
    <div className="min-h-screen text-white antialiased" style={{ backgroundColor: '#0E0F11' }}>
      <StickyNavigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-32 sm:pt-36 sm:pb-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Data & Security
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              We take data handling seriously and keep it simple.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl space-y-6">
            <ul className="space-y-4 text-base leading-relaxed text-white/70 sm:text-lg">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 text-white/50">•</span>
                <span>Payments are processed securely through Stripe</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 text-white/50">•</span>
                <span>We collect only what's necessary to operate our products and provide support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 text-white/50">•</span>
                <span>We do not sell or rent user data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 text-white/50">•</span>
                <span>Access to data is limited to trusted service providers (such as payment processors and email platforms)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 text-white/50">•</span>
                <span>Internal access is restricted to operational needs only</span>
              </li>
            </ul>
            
            <p className="mt-8 text-base leading-relaxed text-white/70 sm:text-lg">
              Our goal is to keep your information as protected and boring as a clean closing file.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
