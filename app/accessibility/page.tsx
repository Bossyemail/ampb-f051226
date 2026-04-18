"use client";

import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen text-white antialiased" style={{ backgroundColor: "#0B0C0F" }}>
      <StickyNavigation />
      
      {/* Hero Section */}
      <section className="pt-28 pb-32 sm:pt-36 sm:pb-40">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Accessibility Statement
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              We aim to make this site accessible and usable for everyone. If you experience difficulty accessing any content or functionality, please reach out and we'll do our best to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Accessibility is an ongoing effort, and we welcome feedback on how we can improve.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
