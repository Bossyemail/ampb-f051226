"use client";

import React from "react";
import Link from "next/link";
import StickyNavigation from '@/components/StickyNavigation';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Container } from '@/components/ui/Container';
import { GlassButton } from '@/components/ui/GlassButton';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b0c0f] text-white">
      <StickyNavigation />

      {/* HERO */}
      <HeroNew />

      {/* TICKER */}
      <HeroTickerNew />

      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* REVIEWS: heading — testimonials block is full-bleed below (must not sit inside max-w wrapper) */}
        <ReviewsHeadingNew />
      </div>
      <Testimonials />

      {/* NEXT SECTION (starts already blended because hero bottom gradient matches bg) */}
      <WhatIBuildNew />

      {/* ROLLER SECTION - breaks out of container for full bleed */}
      <RollerSection />

      {/* ABOUT PREVIEW - breaks out of container for full bleed */}
      <AboutPreviewNew />
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* FINAL CTA */}
        <FinalCTANew />

        {/* CONTACT SECTION */}
        <ContactSectionNew />
      </div>

      {/* EDGE-TO-EDGE INFINITE INDEXED TICKER - breaks out of container for full bleed */}
      <EdgeToEdgeTickerNew />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */
function HeroNew() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-8 pb-24 pt-32 md:pb-28 md:pt-40">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
        {/* Copy */}
        <div className="lg:col-span-5 pt-24 lg:pt-32">
          <p 
            className="mb-4 text-[11px] tracking-[0.36em] text-white/50"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            WELCOME
          </p>

          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            The operational spine for real estate professionals.
          </h1>

          <p className="mt-6 text-sm leading-[1.7] text-white/70 max-w-[46ch] sm:text-base sm:leading-[1.75]">
            Built from 3,000+ transactions. Work with me directly, or use the tools I built to make your life easier.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <GlassButton href="/tools" variant="primary">
              Explore the Tools
            </GlassButton>

            <GlassButton href="/elevate" variant="secondary">
              Work With Me
            </GlassButton>
          </div>
        </div>

        {/* FLOATING portrait (NO outline box) */}
        <div className="lg:col-span-4 lg:col-start-6">
          <div className="relative overflow-hidden">
            {/* soft halo behind image */}
            <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),transparent_70%)] blur-2xl opacity-60"></div>

            <img
              className="relative h-[520px] w-full object-cover"
              src="/images/14.png"
              alt="Aylen Montenegro"
              style={{ 
                transform: 'scale(1.35)', 
                transformOrigin: 'center',
                objectPosition: 'center 40%'
              }}
            />

            {/* blend into background on all sides */}
            <div className="pointer-events-none absolute inset-0">
              {/* Top blend */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0b0c0f] via-[#0b0c0f]/60 to-transparent"></div>
              {/* Bottom blend */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0c0f] via-[#0b0c0f]/50 to-transparent"></div>
              {/* Left blend */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0c0f] via-[#0b0c0f]/70 to-transparent"></div>
              {/* Right blend */}
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0c0f] via-[#0b0c0f]/70 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Right stats */}
        <div className="lg:col-span-3 lg:col-start-10">
          <div className="pt-24 lg:pt-32 space-y-7 text-right">
            <div className="pb-6">
              <div className="text-xl font-semibold tracking-tight text-white/90">20+</div>
              <div 
                className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                YEARS EXPERIENCE
              </div>
              <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
            </div>

            <div className="pb-6">
              <div className="text-xl font-semibold tracking-tight text-white/90">3K+</div>
              <div 
                className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                CLOSED DEALS
              </div>
              <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
            </div>

            <div className="pb-6">
              <div className="text-xl font-semibold tracking-tight text-white/90">4+</div>
              <div 
                className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                SAAS PRODUCTS BUILT
              </div>
              <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- WHAT I BUILD -------------------------- */
function WhatIBuildNew() {
  const [openAccordion, setOpenAccordion] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section id="tools" className="relative z-[1] -mt-px mx-auto max-w-6xl bg-[#0b0c0f] px-6 py-24 md:px-8 md:py-32">
      <div className="grid lg:grid-cols-12 gap-12 items-start lg:gap-16">
        <div className="lg:col-span-5">
          <p 
            className="mb-4 text-xs tracking-[0.34em] text-white/45"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            WHAT I BUILD
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
            Three products.
            <br />
            Together, they form one operating system for real estate.
          </h2>
          <p className="mt-6 text-white/65 leading-relaxed max-w-[46ch]">
            Each one was built inside 3,000+ real transactions — not guessed at from a pitch deck.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[26px] border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
            {/* Row 01 - CloseAdmin */}
            <button
              onClick={() => toggleAccordion(1)}
              className="acc-trigger w-full text-left px-7 py-6 flex items-center justify-between gap-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
              aria-expanded={openAccordion === 1}
            >
              <div className="flex items-start gap-5">
                <div 
                  className="text-xs tracking-[0.32em] text-white/40 pt-1"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  01
                </div>
                <div>
                  <div className="text-lg font-semibold tracking-tight">CloseAdmin</div>
                  <div className="mt-1 text-sm text-white/60">
                    The ops suite.
                  </div>
                </div>
              </div>
              <span className="acc-icon text-white/50">{openAccordion === 1 ? '▴' : '▾'}</span>
            </button>
            {openAccordion === 1 && (
              <div className="acc-panel px-7 pb-6 border-b border-white/10">
                <div className="pl-[44px] mb-4">
                  <p className="text-sm leading-[1.7] text-white/70">
                    Email templates, clause library, deadline tracking, and reporting — built from 3,000+ real transactions. Everything an agent or TC needs to run deals from contract to close.
                  </p>
                </div>
                <div className="pl-[44px] mt-4 aspect-video w-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/bossyemail-vsl.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="pl-[44px] mt-4">
                  <GlassButton href="/closeadmin" variant="secondary" className="h-10 px-5 text-sm font-medium">
                    See CloseAdmin →
                  </GlassButton>
                </div>
              </div>
            )}

            {/* Row 02 - DealDesk */}
            <button
              onClick={() => toggleAccordion(2)}
              className="acc-trigger w-full text-left px-7 py-6 flex items-center justify-between gap-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
              aria-expanded={openAccordion === 2}
            >
              <div className="flex items-start gap-5">
                <div 
                  className="text-xs tracking-[0.32em] text-white/40 pt-1"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  02
                </div>
                <div>
                  <div className="text-lg font-semibold tracking-tight">DealDesk</div>
                  <div className="mt-1 text-sm text-white/60">
                    The compliance engine.
                  </div>
                </div>
              </div>
              <span className="acc-icon text-white/50">{openAccordion === 2 ? '▴' : '▾'}</span>
            </button>
            {openAccordion === 2 && (
              <div className="acc-panel px-7 pb-6 border-b border-white/10">
                <div className="pl-[44px] mb-4">
                  <p className="text-sm leading-[1.7] text-white/70">
                    Florida&apos;s first disclosure compliance infrastructure. Statutory triggers, timestamped determinations, and audit-ready records. Built for brokers and teams who can&apos;t afford a missed form.
                  </p>
                </div>
                <div className="pl-[44px] mt-4 aspect-video w-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/clausevault-vsl 2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="pl-[44px] mt-4">
                  <GlassButton href="/dealdesk" variant="secondary" className="h-10 px-5 text-sm font-medium">
                    See DealDesk →
                  </GlassButton>
                </div>
              </div>
            )}

            {/* Row 03 - TC Services */}
            <button
              onClick={() => toggleAccordion(3)}
              className="acc-trigger w-full text-left px-7 py-6 flex items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors"
              aria-expanded={openAccordion === 3}
            >
              <div className="flex items-start gap-5">
                <div 
                  className="text-xs tracking-[0.32em] text-white/40 pt-1"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  03
                </div>
                <div>
                  <div className="text-lg font-semibold tracking-tight">TC Services</div>
                  <div className="mt-1 text-sm text-white/60">
                    Done-for-you.
                  </div>
                </div>
              </div>
              <span className="acc-icon text-white/50">{openAccordion === 3 ? '▴' : '▾'}</span>
            </button>
            {openAccordion === 3 && (
              <div className="acc-panel px-7 pb-7">
                <div className="pl-[44px] mb-4">
                  <p className="text-sm leading-[1.7] text-white/70">
                    White-glove transaction coordination from someone who&apos;s closed 3,000+ files. Licensed, precise, calm under volume. This isn&apos;t checklist support — it&apos;s pattern recognition.
                  </p>
                </div>
                <div className="pl-[44px] mt-4 aspect-video w-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/videos/tc-services-vsl.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="pl-[44px] mt-4">
                  <GlassButton href="/elevate" variant="secondary" className="h-10 px-5 text-sm font-medium">
                    Work with me →
                  </GlassButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- ROLLER SECTION -------------------------- */
function RollerSection() {
  const sectionElementRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [step, setStep] = React.useState(1);
  const wheelLockedRef = React.useRef(false);

  const H = 220; // must match window height
  // Track items: [03,04,01,02,03,04,01,02]
  // Middle indexes (4..7) = 03,04,01,02
  const stepToMiddleIndex: { [key: number]: number } = { 1: 6, 2: 7, 3: 4, 4: 5 }; // 01,02,03,04

  const stageText: { [key: number]: string } = { 1: "PROBLEM", 2: "WHY", 3: "WHAT", 4: "WHO" };

  const copy: { [key: number]: { title: string; body: string; foot: string } } = React.useMemo(() => ({
    1: {
      title: "Deals don't fall apart from drama.",
      body: "They fall apart from friction.\n\nMissed details. Unclear ownership. Small gaps that compound under pressure.",
      foot: ""
    },
    2: {
      title: "Volume exposes weak infrastructure.",
      body: "Every agent, broker, and TC hits the same wall: the systems that worked at 10 deals a year don't work at 40.\n\nThe coordination gets invisible. The misses compound. The deals — and the reputations — start to crack.",
      foot: ""
    },
    3: {
      title: "Infrastructure. Not hustle.",
      body: "What you need isn't more grit or better time management. You need systems that run when you're not watching — compliance that catches itself, communication that documents itself, coordination that doesn't depend on memory.",
      foot: ""
    },
    4: {
      title: "This is built for:",
      body: "• Agents closing enough volume to feel friction on every deal\n• Brokers who can't afford a missed disclosure or a cracked reputation\n• TCs running 20+ active files and still being asked to do more",
      foot: "If you're protecting a brand — not just chasing closings — the answer isn't more effort. It's better infrastructure."
    }
  }), []);

  const [cardContent, setCardContent] = React.useState(copy[1]);

  const styleButtons = React.useCallback((activeStep: number) => {
    if (typeof document === 'undefined') return;
    const btns = Array.from(document.querySelectorAll<HTMLButtonElement>('button[data-step]'));
    btns.forEach((b) => {
      const isActive = Number(b.dataset.step) === activeStep;
      b.style.opacity = isActive ? "1" : ".65";
      b.style.background = isActive ? "rgba(255,255,255,.10)" : "transparent";
      b.style.borderColor = isActive ? "rgba(255,255,255,.28)" : "rgba(255,255,255,.15)";
      b.style.color = isActive ? "white" : "rgba(255,255,255,.8)";
    });
  }, []);

  const rollInfinite = React.useCallback((stepNum: number, direction: number) => {
    if (!trackRef.current) return;
    const baseIndex = stepToMiddleIndex[stepNum];
    const loopIndex = baseIndex + (direction > 0 ? 4 : -4);
    trackRef.current.style.transition = 'transform 520ms cubic-bezier(.2,.8,.2,1)';
    trackRef.current.style.transform = `translateY(${-loopIndex * H}px)`;

    setTimeout(() => {
      if (!trackRef.current) return;
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateY(${-baseIndex * H}px)`;
      requestAnimationFrame(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = 'transform 520ms cubic-bezier(.2,.8,.2,1)';
        }
      });
    }, 540);
  }, [stepToMiddleIndex, H]);

  const render = React.useCallback((stepNum: number) => {
    setCardContent(copy[stepNum]);
    styleButtons(stepNum);

    const targetIndex = stepToMiddleIndex[stepNum];
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 520ms cubic-bezier(.2,.8,.2,1)';
      trackRef.current.style.transform = `translateY(${-targetIndex * H}px)`;
    }
  }, [copy, styleButtons, stepToMiddleIndex, H]);

  React.useEffect(() => {
    if (trackRef.current) {
      const targetIndex = stepToMiddleIndex[step];
      trackRef.current.style.transition = 'transform 520ms cubic-bezier(.2,.8,.2,1)';
      trackRef.current.style.transform = `translateY(${-targetIndex * H}px)`;
    }
    setCardContent(copy[step]);
    styleButtons(step);
  }, [step, styleButtons]);

  // Initialize on mount
  React.useEffect(() => {
    if (trackRef.current) {
      const initialIndex = stepToMiddleIndex[1];
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateY(${-initialIndex * H}px)`;
      // Re-enable transition after initial positioning
      requestAnimationFrame(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = 'transform 520ms cubic-bezier(.2,.8,.2,1)';
        }
      });
    }
    styleButtons(1);
  }, [styleButtons]);

  React.useEffect(() => {
    const section = sectionElementRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (wheelLockedRef.current) return;
      wheelLockedRef.current = true;

      const dir = e.deltaY > 0 ? +1 : -1;
      const clampStep = (n: number) => {
        if (n < 1) return 4;
        if (n > 4) return 1;
        return n;
      };
      const nextStep = clampStep(step + dir);

      setStep(nextStep);
      rollInfinite(nextStep, dir);

      setTimeout(() => {
        wheelLockedRef.current = false;
      }, 520);
    };

    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleWheel);
    };
  }, [step, rollInfinite]);

  const handleButtonClick = (nextStep: number) => {
    if (nextStep === step) {
      render(step);
      rollInfinite(step, +1);
      return;
    }
    setStep(nextStep);
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Section divider (above fades) */}
      <div className="absolute inset-x-0 top-0 z-[2] h-px bg-white/6"></div>
      {/* Background image - full bleed */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/clausevault-bg-6.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Dark overlay to darken the image */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Top fade — blend from page bg (#0b0c0f) into the image */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-48 sm:h-56 lg:h-64"
        style={{
          background:
            'linear-gradient(to bottom, rgb(11 12 15 / 1) 0%, rgb(11 12 15 / 0.5) 42%, transparent 100%)',
        }}
        aria-hidden
      />
      {/* Bottom fade gradient - blends to soft charcoal for smooth transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(14, 15, 17, 0.4) 50%, rgba(14, 15, 17, 1) 100%)' }} aria-hidden></div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <div ref={sectionElementRef} id="rollerSection" className="roller mt-0">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* LEFT */}
          <div className="lg:col-span-5">
            {/* Stage indicator (side-by-side) */}
            <div
              className="flex gap-6 text-base tracking-[0.28em] text-white/60"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              <span className={step === 1 ? "font-medium text-white" : "text-white/30"}>01 — PROBLEM</span>
              <span className={step === 2 ? "font-medium text-white" : "text-white/30"}>02 — WHY</span>
              <span className={step === 3 ? "font-medium text-white" : "text-white/30"}>03 — WHAT</span>
              <span className={step === 4 ? "font-medium text-white" : "text-white/30"}>04 — WHO</span>
            </div>

            {/* INFINITE TIMER NUMBER */}
            <div className="mt-3 leading-none">
              {/* window */}
              <div className="relative overflow-hidden" style={{ height: '220px' }}>
                {/* track */}
                <div
                  ref={trackRef}
                  className="track"
                  style={{
                    willChange: 'transform',
                    transform: 'translate3d(0, 0, 0)',
                  }}
                >
                  {/* clones: [03,04,01,02,03,04,01,02] */}
                  <div className="h-[220px] flex items-start">
                    <div 
                      className="text-[96px] font-semibold leading-none tracking-tight text-white/30 sm:text-[120px] lg:text-[150px] font-mono"
                      style={{
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        fontVariantNumeric: 'slashed-zero',
                        fontFeatureSettings: '"zero"',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        textRendering: 'geometricPrecision',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                      suppressHydrationWarning
                    >
                      03
                    </div>
                  </div>
                  <div className="h-[220px] flex items-start">
                    <div 
                      className="text-[96px] font-semibold leading-none tracking-tight text-white/30 sm:text-[120px] lg:text-[150px] font-mono"
                      style={{
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        fontVariantNumeric: 'slashed-zero',
                        fontFeatureSettings: '"zero"',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        textRendering: 'geometricPrecision',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                      suppressHydrationWarning
                    >
                      04
                    </div>
                  </div>
                  <div className="h-[220px] flex items-start">
                    <div 
                      className="text-[96px] font-semibold leading-none tracking-tight text-white/30 sm:text-[120px] lg:text-[150px] font-mono"
                      style={{
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        fontVariantNumeric: 'slashed-zero',
                        fontFeatureSettings: '"zero"',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        textRendering: 'geometricPrecision',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                      suppressHydrationWarning
                    >
                      01
                    </div>
                  </div>
                  <div className="h-[220px] flex items-start">
                    <div 
                      className="text-[96px] font-semibold leading-none tracking-tight text-white/30 sm:text-[120px] lg:text-[150px] font-mono"
                      style={{
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        fontVariantNumeric: 'slashed-zero',
                        fontFeatureSettings: '"zero"',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        textRendering: 'geometricPrecision',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                      suppressHydrationWarning
                    >
                      02
                    </div>
                  </div>

                  {/* middle */}
                  <div className="h-[220px] flex items-start">
                    <div 
                      className="text-[96px] font-semibold leading-none tracking-tight text-white/30 sm:text-[120px] lg:text-[150px] font-mono"
                      style={{
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        fontVariantNumeric: 'slashed-zero',
                        fontFeatureSettings: '"zero"',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        textRendering: 'geometricPrecision',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                      suppressHydrationWarning
                    >
                      03
                    </div>
                  </div>
                  <div className="h-[220px] flex items-start">
                    <div 
                      className="text-[96px] font-semibold leading-none tracking-tight text-white/30 sm:text-[120px] lg:text-[150px] font-mono"
                      style={{
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        fontVariantNumeric: 'slashed-zero',
                        fontFeatureSettings: '"zero"',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        textRendering: 'geometricPrecision',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                      suppressHydrationWarning
                    >
                      04
                    </div>
                  </div>
                  <div className="h-[220px] flex items-start">
                    <div 
                      className="text-[96px] font-semibold leading-none tracking-tight text-white/30 sm:text-[120px] lg:text-[150px] font-mono"
                      style={{
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        fontVariantNumeric: 'slashed-zero',
                        fontFeatureSettings: '"zero"',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        textRendering: 'geometricPrecision',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                      suppressHydrationWarning
                    >
                      01
                    </div>
                  </div>
                  <div className="h-[220px] flex items-start">
                    <div 
                      className="text-[96px] font-semibold leading-none tracking-tight text-white/30 sm:text-[120px] lg:text-[150px] font-mono"
                      style={{
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        fontVariantNumeric: 'slashed-zero',
                        fontFeatureSettings: '"zero"',
                        WebkitFontSmoothing: 'antialiased',
                        MozOsxFontSmoothing: 'grayscale',
                        textRendering: 'geometricPrecision',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                      }}
                      suppressHydrationWarning
                    >
                      02
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT — min-height = step 04 (WHO) so section height (and bg crop) stays constant across steps */}
          <div className="lg:col-span-7">
            <div
              className="flex min-h-[26rem] flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md sm:min-h-[28rem] lg:min-h-[32rem] lg:p-8"
              style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
            >
              <h3 className="mb-6 text-3xl font-semibold tracking-tight lg:text-4xl" style={{ lineHeight: '1.15' }}>
                {cardContent.title}
              </h3>
              <div className="mt-4 mb-6 max-w-[65ch] text-sm leading-7 text-white/70 lg:text-base lg:leading-8 space-y-4">
                {cardContent.body.includes('•') && !cardContent.body.includes('\n\n') ? (
                  <p style={{ whiteSpace: 'pre-line' }}>{cardContent.body}</p>
                ) : (
                  cardContent.body.split('\n\n').filter(p => p.trim()).map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                )}
              </div>
              {cardContent.foot && (
                <>
                  <div className="mt-8 h-px w-full bg-white/10"></div>
                  <p className="mt-4 mb-6 text-sm leading-7 text-white/60 lg:text-base lg:leading-8">
                    {cardContent.foot}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

/* -------------------------- REVIEWS: HEADING ONLY -------------------------- */
function ReviewsHeadingNew() {
  return (
    <section
      id="testimonials"
      className="relative z-0 bg-[#0b0c0f] pb-8 pt-24 md:pb-10 md:pt-32"
      aria-labelledby="testimonials-heading"
    >
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.04]"></div>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="max-w-3xl">
          <p
            className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            ON THE RECORD
          </p>

          <h2 id="testimonials-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[2rem]" style={{ lineHeight: '1.15' }}>
            The people who bet their deals on this work.
          </h2>

          <p className="mt-6 text-sm leading-7 text-white/70 sm:text-base sm:leading-7">
            Local agents, attorneys, lenders, and operators — 50 endorsements and counting.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- ABOUT PREVIEW -------------------------- */
function AboutPreviewNew() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Full-width divider for clean top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/6"></div>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            {/* COPY */}
          <div className="lg:col-span-5">
            <p 
              className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              ABOUT
            </p>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight lg:text-4xl" style={{ lineHeight: '1.15' }}>
              I make closings boring — so you can scale.
            </h2>

            <p className="mb-6 max-w-[65ch] text-base leading-7 text-white/70 lg:text-lg lg:leading-8">
              I've managed thousands of real transactions, not hypotheticals.
              When the same problems show up over and over, you either keep firefighting —
              or you build systems that stop the fires.
            </p>

            <p className="mb-6 max-w-[65ch] text-base leading-7 text-white/70 lg:text-lg lg:leading-8">
              That's what I do. I turn repeatable chaos into workflows, tools,
              and support that let agents focus on clients instead of cleanup.
            </p>

            <div className="mt-8">
              <GlassButton href="/about" variant="primary" className="px-7 py-3 text-sm font-medium">
                Read the full story →
              </GlassButton>
            </div>
          </div>

          {/* IMAGE — blends into #0b0c0f section background (edge vignettes, same language as hero portrait) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] w-full max-lg:max-h-[min(70vh,560px)] lg:max-h-[min(78vh,680px)] overflow-hidden">
              <img
                src="/27.png"
                alt="Aylen Montenegro"
                className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
              />
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0b0c0f] via-[#0b0c0f]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0b0c0f] via-[#0b0c0f]/50 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-32 max-lg:w-24 bg-gradient-to-r from-[#0b0c0f] via-[#0b0c0f]/65 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0c0f] via-[#0b0c0f]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section bottom divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/6"></div>
    </section>
  );
}

/* -------------------------- FINAL CTA -------------------------- */
function FinalCTANew() {
  return (
    <section className="relative py-20 md:py-24">
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/6"></div>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 lg:p-8">
          <div className="flex flex-col gap-8">
            {/* COPY */}
            <div className="max-w-2xl">
              <p 
                className="mb-4 text-xs uppercase tracking-[0.2em] text-white/60"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                NEXT STEP
              </p>

              <h3 className="mb-6 text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
                Ready to stop duct-taping your operation?
              </h3>

              <p className="text-base leading-7 text-white/70 lg:text-lg lg:leading-8">
                Three ways to move forward. Pick what fits.
              </p>
            </div>

            {/* ACTIONS — three columns side by side (stack on small screens) */}
            <div className="mt-8 grid w-full grid-cols-1 gap-6 border-t border-white/10 pt-8 md:grid-cols-3 md:gap-4 lg:gap-6">
              <div className="flex min-w-0 flex-col gap-2">
                <GlassButton href="/elevate" variant="primary" className="w-full px-4 py-3 text-sm font-medium">
                  Hire a TC →
                </GlassButton>
                <p className="text-sm leading-relaxed text-white/60">
                  For agents ready to hand the file over.
                </p>
              </div>
              <div className="flex min-w-0 flex-col gap-2">
                <GlassButton href="/closeadmin" variant="secondary" className="w-full px-4 py-3 text-sm font-medium">
                  See CloseAdmin →
                </GlassButton>
                <p className="text-sm leading-relaxed text-white/60">
                  For ops teams who want the software.
                </p>
              </div>
              <div className="flex min-w-0 flex-col gap-2">
                <GlassButton href="/dealdesk" variant="secondary" className="w-full px-4 py-3 text-sm font-medium">
                  See DealDesk →
                </GlassButton>
                <p className="text-sm leading-relaxed text-white/60">
                  For brokers who need compliance infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section bottom divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/6"></div>
    </section>
  );
}

/* -------------------------- CONTACT SECTION -------------------------- */
function ContactSectionNew() {
  return (
    <section className="relative py-20 md:py-24">
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/6"></div>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Left: Label + Heading */}
          <div className="lg:col-span-4">
            <p
              className="mb-4 text-xs tracking-[0.34em] text-white/50 uppercase"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              Contact
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Skip the forms.
              <br />
              Just email me.
            </h2>
          </div>

          {/* Right: email + routing + CTA */}
          <div className="lg:col-span-8">
            <div className="border-t border-white/10 py-8">
              <div className="max-w-[65ch] space-y-6 text-sm leading-7 text-white/65 lg:text-base lg:leading-8">
                <div>
                  <a
                    href="mailto:hello@aylenmontenegro.com"
                    className="text-lg font-medium tracking-tight text-white/90 hover:text-white lg:text-xl"
                  >
                    hello@aylenmontenegro.com
                  </a>
                  <p className="mt-2 text-white/60">
                    Most messages get a reply within the hour.
                  </p>
                </div>

                <div className="space-y-3">
                  <p>For the fastest response, tell me which door you&apos;re coming through:</p>
                  <div className="space-y-2 text-white/70">
                    <div>
                      <Link href="/closeadmin" className="font-medium text-white/90 underline decoration-white/25 underline-offset-2 hover:text-white hover:decoration-white/50">
                        CloseAdmin
                      </Link>
                      {' '}
                      → product access, demos, or technical questions
                    </div>
                    <div>
                      <Link href="/dealdesk" className="font-medium text-white/90 underline decoration-white/25 underline-offset-2 hover:text-white hover:decoration-white/50">
                        DealDesk
                      </Link>
                      {' '}
                      → Florida compliance, brokerage licensing, enterprise demos
                    </div>
                    <div>
                      <Link href="/elevate" className="font-medium text-white/90 underline decoration-white/25 underline-offset-2 hover:text-white hover:decoration-white/50">
                        TC Services
                      </Link>
                      {' '}
                      → availability, pricing, and onboarding
                    </div>
                  </div>
                </div>

                <p className="text-white/55">
                  No funnels. No auto-responders. No &ldquo;let&apos;s hop on a discovery call.&rdquo;
                </p>
                <p className="text-white/75">Just a direct line to the person who built it.</p>

                <div className="pt-2">
                  <GlassButton
                    href="mailto:hello@aylenmontenegro.com"
                    variant="primary"
                    className="px-7 py-3 text-sm font-medium"
                  >
                    Email Me
                  </GlassButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section bottom divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/6"></div>
    </section>
  );
}

/* -------------------------- HERO TICKER -------------------------- */
const HERO_TICKER_LINE =
  "  3,000+ transactions closed  /  50+ top South Florida professionals on the record  /  over 2 decades inside the deals  /";

function HeroTickerNew() {
  return (
    <section className="py-8">
      {/* top hairline */}
      <div className="h-px w-full bg-white/10"></div>

      <div className="relative overflow-hidden">
        <div className="ticker-edge-to-edge flex items-center gap-0 whitespace-nowrap px-6 py-4 text-xs tracking-[0.24em] text-white/70 md:px-8 uppercase [font-variant-numeric:tabular-nums]">
          <span className="inline-block whitespace-pre">{HERO_TICKER_LINE}</span>
          <span className="inline-block whitespace-pre" aria-hidden="true">
            {HERO_TICKER_LINE}
          </span>
        </div>
      </div>

      {/* bottom hairline */}
      <div className="h-px w-full bg-white/10"></div>
    </section>
  );
}

/* -------------------------- EDGE-TO-EDGE INFINITE INDEXED TICKER -------------------------- */
const edgeTickerMonoStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
  fontVariantNumeric: "slashed-zero",
  fontFeatureSettings: '"zero"',
};

function EdgeToEdgeTickerSequence() {
  return (
    <>
      <span>
        <span className="font-mono" style={edgeTickerMonoStyle}>
          01
        </span>
        &nbsp;CLOSEADMIN
      </span>
      <span className="text-white/35">·</span>
      <span>
        <span className="font-mono" style={edgeTickerMonoStyle}>
          02
        </span>
        &nbsp;DEALDESK
      </span>
      <span className="text-white/35">·</span>
      <span>
        <span className="font-mono" style={edgeTickerMonoStyle}>
          03
        </span>
        &nbsp;TC&nbsp;SERVICES
      </span>
      <span className="text-white/35">·</span>
      <span>BUILT&nbsp;IN&nbsp;MIAMI</span>
      <span className="text-white/35">·</span>
      <span>ENGINEERED&nbsp;FOR&nbsp;FLORIDA</span>
    </>
  );
}

function EdgeToEdgeTickerNew() {
  return (
    <section className="py-8">
      {/* top hairline */}
      <div className="h-px w-full bg-white/10"></div>

      <div className="relative overflow-hidden">
        <div className="ticker-edge-to-edge flex items-center gap-8 whitespace-nowrap px-6 py-4 text-xs tracking-[0.22em] text-white/70 md:px-8 sm:gap-12">
          <EdgeToEdgeTickerSequence />
          <EdgeToEdgeTickerSequence />
        </div>
      </div>

      {/* bottom hairline */}
      <div className="h-px w-full bg-white/10"></div>
    </section>
  );
}


