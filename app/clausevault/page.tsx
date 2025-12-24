"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Footer from '@/components/Footer';

function ClauseVaultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isLoaded: userLoaded } = useUser();
  const { isSignedIn } = useAuth();
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentImageNumber, setCurrentImageNumber] = useState(1);
  
  // Available background images (excluding missing ones like 54, 55)
  const availableImages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
    101, 102, 103, 104, 105, 106
  ];


  const handleMouseEnter = () => setIsAnimationPaused(true);
  const handleMouseLeave = () => setIsAnimationPaused(false);

  // Cycle through background images every 6 hours, starting from image 1
  useEffect(() => {
    const getCurrentImageIndex = () => {
      const now = new Date();
      const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60));
      const arrayIndex = Math.floor(hoursSinceEpoch / 6) % availableImages.length;
      const imageNumber = availableImages[arrayIndex];
      console.log('Current image number:', imageNumber); // Debug log
      console.log('Image path:', `/images/clausevault/clausevault-bg-${imageNumber}.jpg`); // Debug log
      setCurrentImageNumber(imageNumber);
      return arrayIndex;
    };

    setCurrentBgIndex(getCurrentImageIndex());
  }, []);

  // Check if user should be redirected to app
  useEffect(() => {
    if (!userLoaded) return;

    // If user is signed in and has access, redirect to app
    if (isSignedIn && user) {
      // Check for success parameter from Stripe (new purchase)
      const success = searchParams.get('success');
      
      if (success === 'true' || user.publicMetadata?.clausevaultAccess) {
        console.log('User has access, redirecting to app');
        router.push('/clausevault/app');
        return;
      }
    }
  }, [userLoaded, user, isSignedIn, searchParams, router]);



  // Handle Get Access button click
  const handleGetAccess = () => {
    router.push('/clausevault/pay');
  };

  // Show landing page
  return (
    <div className="min-h-screen text-white antialiased" style={{ backgroundColor: '#0E0F11' }}>
      {/* Login Button - Top Right */}
      <div className="absolute top-16 right-6 z-30">
        <button 
          onClick={() => router.push('/sign-in?redirect_url=/clausevault/app')}
          className="px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors font-medium"
          style={{ color: '#000000' }}
        >
          Sign In
        </button>
      </div>
      
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* CLAUSEVAULT HERO */}
        <section className="py-24 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              <p 
                className="font-mono text-xs tracking-[0.28em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                CLAUSEVAULT
              </p>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Searchable, copy-ready clauses for real-world deals.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                ClauseVault helps you communicate clearly inside the contract framework —
                especially when timelines shift, documents arrive late, or expectations need to be spelled out.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                Built around Florida's As-Is reality. Designed for speed, clarity, and fewer "what did you mean?" moments.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                  Scenario categories
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                  Copy + paste ready
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                  Updated over time
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                  Built by a TC
                </span>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a 
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black hover:bg-white/90"
                  style={{ color: '#000000' }}
                >
                  Get access →
                </a>
                <p className="text-sm text-white/55">Monthly or yearly. Cancel anytime.</p>
              </div>
            </div>

            {/* Right: Pricing / Trust card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_24px_90px_rgba(0,0,0,.55)]">
                <p 
                  className="font-mono text-xs tracking-[0.28em] text-white/55"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  PRICING
                </p>

                <div className="mt-7 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <div className="flex items-baseline justify-between gap-6">
                      <p className="text-sm text-white/70">Monthly</p>
                      <p className="text-2xl font-semibold">$99 <span className="text-sm font-normal text-white/50">/mo</span></p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <div className="flex items-baseline justify-between gap-6">
                      <p className="text-sm text-white/70">Yearly</p>
                      <p className="text-2xl font-semibold">$891 <span className="text-sm font-normal text-white/50">/yr</span></p>
                    </div>
                    <p className="mt-2 text-xs text-white/55">3 months free.</p>
                  </div>
                </div>

                <a 
                  href="/clausevault/checkout"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90"
                  style={{ color: '#000000' }}
                >
                  Get access →
                </a>

                <p className="mt-4 text-xs text-white/55">
                  Not legal advice. Contract support only.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE FIX / MECHANISM */}
        <section className="py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left: Mechanism framing */}
            <div className="lg:col-span-5">
              <p 
                className="font-mono text-xs tracking-[0.28em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                02 \ THE FIX
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Less ambiguity. More execution.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                ClauseVault gives you a curated library of deal-support clauses for the moments
                contracts don't spell out cleanly — so expectations stay clear and timelines stay intact.
              </p>

              <p className="mt-6 text-base leading-relaxed text-white/70">
                It's not about "adding more words."
                It's about using the right language to prevent confusion, reduce back-and-forth,
                and keep the deal moving calmly.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a 
                  href="#how"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.06]"
                >
                  How it works →
                </a>
                <a 
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90"
                  style={{ color: '#000000' }}
                >
                  Get access →
                </a>
              </div>
            </div>

            {/* Right: Mechanism cards */}
            <div className="lg:col-span-7">
              <div className="space-y-6">
                {/* Core mechanism */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 shadow-[0_24px_90px_rgba(0,0,0,.55)]">
                  <p 
                    className="font-mono text-xs tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    THE MECHANISM
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                    Scenario-based clause library
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    Search by category and scenario — inspections, timing, extensions, access, documents, and more —
                    then copy, paste, and tailor as needed for the transaction.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 text-sm text-white/70">
                    <div className="flex gap-3">
                      <span 
                        className="font-mono text-white/45"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        01
                      </span>
                      <span>Fast retrieval when timing matters</span>
                    </div>
                    <div className="flex gap-3">
                      <span 
                        className="font-mono text-white/45"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        02
                      </span>
                      <span>Language designed to clarify, not inflame</span>
                    </div>
                    <div className="flex gap-3">
                      <span 
                        className="font-mono text-white/45"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        03
                      </span>
                      <span>Built to reduce "interpretation fights"</span>
                    </div>
                    <div className="flex gap-3">
                      <span 
                        className="font-mono text-white/45"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        04
                      </span>
                      <span>Updated as contracts evolve</span>
                    </div>
                  </div>
                </div>

                {/* 2-up: Why it works / What it's not */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      WHY IT WORKS
                    </p>
                    <h4 className="mt-4 text-lg font-semibold tracking-tight text-white/90">
                      It standardizes clarity
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      You stop rewriting clause language from memory or recycling old deals.
                      Instead, you work from a consistent, scenario-first system designed to protect timelines and expectations.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      WHAT IT ISN'T
                    </p>
                    <h4 className="mt-4 text-lg font-semibold tracking-tight text-white/90">
                      Not legal advice
                    </h4>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      ClauseVault is contract support — built to help you communicate within the existing framework.
                      When legal interpretation is required, you should consult an attorney.
                    </p>
                  </div>
                </div>

                {/* "Built by a TC" trust anchor */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
                  <p 
                    className="font-mono text-xs tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    BUILT IN THE REAL WORLD
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    This library is built from the recurring issues that appear in actual transactions —
                    not theory, not chat-room opinions, and not "what sounds good."
                  </p>
                  <p className="mt-4 text-sm text-white/60">
                    The goal is simple: reduce ambiguity and keep deals moving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-24 sm:py-32">
          <div className="max-w-3xl">
            <p 
              className="font-mono text-xs tracking-[0.28em] text-white/55"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              03 \ HOW IT WORKS
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Search. Copy. Tailor.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              ClauseVault is designed for speed under pressure.
              No digging through old files. No rewriting from memory.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">
              <p 
                className="font-mono text-xs tracking-[0.28em] text-white/55"
                style={{
                  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                  fontVariantNumeric: 'slashed-zero',
                  fontFeatureSettings: '"zero"',
                }}
              >
                01
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                Search by scenario
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Choose the category that matches the deal: timing, inspections, access, documents, extensions,
                and other "gray area" moments.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_18px_70px_rgba(0,0,0,.5)]">
              <p 
                className="font-mono text-xs tracking-[0.28em] text-white/55"
                style={{
                  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                  fontVariantNumeric: 'slashed-zero',
                  fontFeatureSettings: '"zero"',
                }}
              >
                02
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                Copy a clause that fits
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Grab language designed to clarify expectations without escalating tone.
                Built to be readable, direct, and documentation-friendly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">
              <p 
                className="font-mono text-xs tracking-[0.28em] text-white/55"
                style={{
                  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                  fontVariantNumeric: 'slashed-zero',
                  fontFeatureSettings: '"zero"',
                }}
              >
                03
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                Tailor to the deal
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Adjust dates, parties, and specifics. Then use it as part of the contract/addenda workflow
                and keep the transaction moving.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a 
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black hover:bg-white/90"
              style={{ color: '#000000' }}
            >
              Get access →
            </a>
            <p className="text-sm text-white/55">
              Built to reduce ambiguity — not replace legal counsel.
            </p>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section className="py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left: framing */}
            <div className="lg:col-span-5">
              <p 
                className="font-mono text-xs tracking-[0.28em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                04 \ WHAT'S INSIDE
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Organized by how real transactions actually move.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                ClauseVault is structured around the moments where clarity matters most —
                offers, deposits, inspections, financing, and closing logistics.
              </p>

              <p className="mt-6 text-base leading-relaxed text-white/70">
                Categories are designed for speed, so you can find the right language
                without breaking momentum in the deal.
              </p>
            </div>

            {/* Right: category grid */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      LIBRARY
                    </p>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                      Clause categories
                    </h3>
                    <p className="mt-3 text-sm text-white/60">
                      Built for retrieval under pressure.
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                    Expands over time
                  </span>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      OFFER
                    </p>
                    <p className="mt-3 text-lg font-medium text-white/90">Submission & terms</p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      CONTRACT
                    </p>
                    <p className="mt-3 text-lg font-medium text-white/90">Execution & corrections</p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      DEPOSITS
                    </p>
                    <p className="mt-3 text-lg font-medium text-white/90">Escrow & timing</p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      INSPECTIONS
                    </p>
                    <p className="mt-3 text-lg font-medium text-white/90">Repairs & responses</p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      LENDER
                    </p>
                    <p className="mt-3 text-lg font-medium text-white/90">Loan process issues</p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      FINANCING
                    </p>
                    <p className="mt-3 text-lg font-medium text-white/90">Approval & conditions</p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      ACCESS
                    </p>
                    <p className="mt-3 text-lg font-medium text-white/90">Entry & logistics</p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      CONDO DOCS
                    </p>
                    <p className="mt-3 text-lg font-medium text-white/90">Associations & delivery</p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      REQUESTS
                    </p>
                    <p className="mt-3 text-lg font-medium text-white/90">Special terms & asks</p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      TITLE
                    </p>
                    <p className="mt-3 text-lg font-medium text-white/90">Closing & curative items</p>
                  </div>
                </div>

                {/* UPDATED TIP */}
                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-sm text-white/60">
                    In addition to the library, you can create your own custom clauses
                    and save them privately — so your best language is always one click away.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a 
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-white/90 hover:bg-white/[0.06]"
            >
              View pricing →
            </a>
            <p className="text-sm text-white/55">
              Built to support real-world contract workflows.
            </p>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 sm:py-32">
          {/* YEARLY PLAN (Annual savings) */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-[0_18px_70px_rgba(0,0,0,.5)] max-w-md">
            <div className="flex items-center justify-between gap-4">
              <p 
                className="font-mono text-xs tracking-[0.28em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                YEARLY
              </p>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/75">
                Annual savings
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <p className="text-3xl font-semibold">$891</p>
              <p className="text-sm text-white/55">/ year</p>
            </div>

            <p className="mt-2 text-xs text-white/55">3 months free.</p>

            <p className="mt-4 text-sm text-white/70">
              Best if you use clauses weekly (or manage multiple files).
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <span 
                  className="font-mono text-white/45"
                  style={{
                    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    fontVariantNumeric: 'slashed-zero',
                    fontFeatureSettings: '"zero"',
                  }}
                >
                  01
                </span>
                <span>Everything in Monthly</span>
              </li>
              <li className="flex gap-3">
                <span 
                  className="font-mono text-white/45"
                  style={{
                    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    fontVariantNumeric: 'slashed-zero',
                    fontFeatureSettings: '"zero"',
                  }}
                >
                  02
                </span>
                <span>Lower effective monthly cost</span>
              </li>
              <li className="flex gap-3">
                <span 
                  className="font-mono text-white/45"
                  style={{
                    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    fontVariantNumeric: 'slashed-zero',
                    fontFeatureSettings: '"zero"',
                  }}
                >
                  03
                </span>
                <span>Better for teams + TCs</span>
              </li>
              <li className="flex gap-3">
                <span 
                  className="font-mono text-white/45"
                  style={{
                    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                    fontVariantNumeric: 'slashed-zero',
                    fontFeatureSettings: '"zero"',
                  }}
                >
                  04
                </span>
                <span>Updates included</span>
              </li>
            </ul>

            <a 
              href="/clausevault/checkout?plan=yearly"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
              style={{ color: '#000000' }}
            >
              Start Yearly →
            </a>
          </div>

          {/* NO FRICTION (Risk reversal) */}
          <div className="mt-14 max-w-md rounded-2xl border border-white/10 bg-black/20 p-7">
            <p 
              className="font-mono text-xs tracking-[0.28em] text-white/55"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              NO FRICTION
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Try it. If it doesn't make you faster and clearer, cancel.
              ClauseVault should feel like a workflow upgrade — not another subscription you ignore.
            </p>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function ClauseVaultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>}>
      <ClauseVaultContent />
    </Suspense>
  );
}
