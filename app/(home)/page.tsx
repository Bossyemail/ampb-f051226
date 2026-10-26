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

      {/* NEXT SECTION (starts already blended because hero bottom gradient matches bg) */}
      <WhatIBuildNew />

      {/* ROLLER SECTION - breaks out of container for full bleed */}
      <RollerSection />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">

        {/* CTA: BOSSYEMAIL */}
        <BossyEmailCTANew />

        {/* REVIEWS: heading only */}
        <ReviewsHeadingNew />

        {/* REVIEWS - Keep existing Testimonials component */}
        <Testimonials />
      </div>

        {/* ABOUT PREVIEW - breaks out of container for full bleed */}
        <AboutPreviewNew />
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
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
    <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-16 sm:pt-20 pb-14">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Copy */}
        <div className="lg:col-span-5 pt-24 lg:pt-32">
          <p 
            className="text-[11px] tracking-[0.36em] text-white/50"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            HI THERE
          </p>

          <h1 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">
            Close deals<br />
            without the chaos.
          </h1>

          <p className="mt-7 text-sm leading-[1.7] text-white/70 max-w-[46ch] sm:text-base sm:leading-[1.75]">
            Work with me — or use the tools I built.<br />
            Built from 3,000+ real transactions to reduce friction, mistakes, and back-and-forth.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
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
    <section id="tools" className="mx-auto max-w-6xl px-6 sm:px-10 pt-8 lg:pt-12 pb-24 lg:pb-28">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <p 
            className="text-xs tracking-[0.34em] text-white/45"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            WHAT I BUILD
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tight">Tools that remove the chaos.</h2>
          <p className="mt-4 text-white/65 leading-relaxed max-w-[46ch]">
            These are the systems behind the scenes — built from real transactions and designed for scale.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[26px] border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
            {/* Row 01 - BossyEmail */}
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
                  <div className="text-lg font-semibold tracking-tight">BossyEmail</div>
                  <div className="mt-1 text-sm text-white/60">
                    Stop rewriting the same email 47 times.
                  </div>
                </div>
              </div>
              <span className="acc-icon text-white/50">{openAccordion === 1 ? '▴' : '▾'}</span>
            </button>
            {openAccordion === 1 && (
              <div className="acc-panel px-7 pb-6 border-b border-white/10">
                <div className="pl-[44px] mb-4">
                  <p className="text-sm leading-[1.7] text-white/70 mb-4">
                    Ready-to-send real estate emails and an AI generator trained on actual transaction chaos — inspections, delays, escalations, and save-the-deal moments.
                  </p>
                  <p 
                    className="text-xs tracking-[0.30em] text-white/40"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    OUTCOME: CLEANER COMMUNICATION. FEWER MISTAKES. FASTER RESOLUTIONS.
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
                  <GlassButton href="https://bossyemail.com" variant="secondary" external className="h-10 px-5 text-sm font-medium">
                    Try BossyEmail →
                  </GlassButton>
                </div>
              </div>
            )}

            {/* Row 02 - ClauseVault */}
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
                  <div className="text-lg font-semibold tracking-tight">ClauseVault</div>
                  <div className="mt-1 text-sm text-white/60">
                    Contract clarity without playing attorney.
                  </div>
                </div>
              </div>
              <span className="acc-icon text-white/50">{openAccordion === 2 ? '▴' : '▾'}</span>
            </button>
            {openAccordion === 2 && (
              <div className="acc-panel px-7 pb-6 border-b border-white/10">
                <div className="pl-[44px] mb-4">
                  <p className="text-sm leading-[1.7] text-white/70 mb-4">
                    Deal-support clauses built for real-world use to reduce ambiguity, set expectations, and keep transactions moving when things get gray.
                  </p>
                  <p 
                    className="text-xs tracking-[0.30em] text-white/40"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    OUTCOME: LESS BACK-AND-FORTH. FEWER DISPUTES. STRONGER PAPER TRAILS.
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
                  <GlassButton href="/clausevault" variant="secondary" className="h-10 px-5 text-sm font-medium">
                    Go to ClauseVault →
                  </GlassButton>
                </div>
              </div>
            )}

            {/* Row 03 - Transaction Coordination */}
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
                  <div className="text-lg font-semibold tracking-tight">Transaction Coordination</div>
                  <div className="mt-1 text-sm text-white/60">
                    White-glove execution for agents who don't have margin for error.
                  </div>
                </div>
              </div>
              <span className="acc-icon text-white/50">{openAccordion === 3 ? '▴' : '▾'}</span>
            </button>
            {openAccordion === 3 && (
              <div className="acc-panel px-7 pb-7">
                <div className="pl-[44px] mb-4">
                  <p className="text-sm leading-[1.7] text-white/70 mb-4">
                    I manage the file, the deadlines, the follow-ups, and the details that quietly kill deals when ignored.
                  </p>
                  <p 
                    className="text-xs tracking-[0.30em] text-white/40"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    OUTCOME: MORE CONTROL. LESS STRESS. CLEANER CLOSINGS.
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
                    View TC Services →
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
      title: "Most agents scale activity, not systems.",
      body: "As volume increases, coordination becomes invisible work — and invisible work is where deals break.",
      foot: ""
    },
    3: {
      title: "Control.",
      body: "Not micromanagement.\n\nNot being \"on\" 24/7.\n\nReal control comes from ownership, clean communication, and repeatable systems.",
      foot: ""
    },
    4: {
      title: "This is built for agents and teams who:",
      body: "• Close enough volume to feel friction\n• Care about reputation and consistency\n• Are done using adrenaline as a safety net",
      foot: "If you're protecting a brand — not just chasing closings — you don't need more hustle. You need control."
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
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/6"></div>
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
      {/* Bottom fade gradient - blends to soft charcoal for smooth transition */}
      <div className="absolute inset-x-0 bottom-0 h-64" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(14, 15, 17, 0.4) 50%, rgba(14, 15, 17, 1) 100%)', zIndex: 1 }}></div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        <div ref={sectionElementRef} id="rollerSection" className="roller mt-0">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
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

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md p-6 lg:p-8" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
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


/* -------------------------- CTA: BOSSYEMAIL (STATIC) -------------------------- */
function BossyEmailCTANew() {
  return (
    <section className="relative py-16 lg:py-24">
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/6"></div>
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="rounded-2xl border border-white/5 bg-[#0E0F11] p-6 lg:p-8" style={{ boxShadow: 'none', WebkitBoxShadow: 'none', MozBoxShadow: 'none' }}>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p
                className="text-xs uppercase tracking-[0.2em] text-white/60"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                FASTEST WIN
              </p>

              <h3 className="mt-4 mb-6 text-3xl font-semibold tracking-tight lg:text-4xl" style={{ lineHeight: '1.15' }}>
                Stop writing real estate emails from scratch.
              </h3>

              <p className="mb-6 max-w-[65ch] text-sm leading-7 text-white/70 lg:text-base lg:leading-8">
                BossyEmail gives you ready-to-send templates and an AI generator trained for the messages that actually happen in real transactions.<br />
                <br />
                Inspections. Delays. Escalations. Save-the-deal moments.<br />
                <br />
                Less typing. Fewer mistakes. More control.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs tracking-[0.2em] text-white/60"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  TEMPLATES
                </span>
                <span
                  className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs tracking-[0.2em] text-white/60"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  AI GENERATOR
                </span>
                <span
                  className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs tracking-[0.2em] text-white/60"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  REAL ESTATE SPECIFIC
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-[#0E0F11] p-4 shadow-none">
                  <p className="text-sm font-medium text-white/90">320+ real templates</p>
                  <p className="mt-1 text-xs leading-7 text-white/60">
                    Built for listing, escrow, and closing chaos.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0E0F11] p-4 shadow-none">
                  <p className="text-sm font-medium text-white/90">Less back-and-forth</p>
                  <p className="mt-1 text-xs leading-7 text-white/60">
                    Cleaner communication means fewer mistakes.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0E0F11] p-4 shadow-none">
                  <p className="text-sm font-medium text-white/90">Built by a TC</p>
                  <p className="mt-1 text-xs leading-7 text-white/60">
                    Real files. Real deadlines. Real consequences.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <GlassButton href="https://bossyemail.com" variant="primary" external className="px-7 py-3 text-sm font-medium">
                    Try BossyEmail
                  </GlassButton>
                  <GlassButton href="/tools" variant="secondary" className="px-7 py-3 text-sm font-medium">
                    See all tools
                  </GlassButton>
                  <p className="text-xs leading-7 text-white/60">
                    Two minutes to try.<br />
                    Saves hours a week.
                  </p>
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

/* -------------------------- REVIEWS: HEADING ONLY -------------------------- */
function ReviewsHeadingNew() {
  return (
    <section className="relative pt-16 lg:pt-24 pb-8 lg:pb-12">
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/6"></div>
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <p
            className="text-xs uppercase tracking-[0.2em] text-white/60"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            HYPE FOLDER
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight lg:text-4xl" style={{ lineHeight: '1.15' }}>
            What other people said.
          </h2>

          <p className="mt-6 text-base leading-7 text-white/70 lg:text-lg lg:leading-8">
            Real feedback from real clients.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- ABOUT PREVIEW -------------------------- */
function AboutPreviewNew() {
  return (
    <section className="relative py-16 lg:py-24">
      {/* Full-width divider for clean top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/6"></div>
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* COPY */}
          <div className="lg:col-span-5">
            <p 
              className="text-xs uppercase tracking-[0.2em] text-white/60"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              ABOUT
            </p>

            <h2 className="mt-4 mb-6 text-3xl font-semibold tracking-tight lg:text-4xl" style={{ lineHeight: '1.15' }}>
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

            <div className="mt-6">
              <GlassButton href="/about" variant="primary" className="px-7 py-3 text-sm font-medium">
                Read the full story →
              </GlassButton>
            </div>
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-7">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <img
                src="/27.png"
                alt="Aylen Montenegro"
                className="h-full w-full object-cover"
                style={{
                  objectPosition: 'center 20%',
                  transform: 'scale(1.5)',
                }}
              />
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
    <section className="relative py-16 lg:py-24">
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/6"></div>
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* COPY */}
          <div className="max-w-xl">
            <p 
              className="text-xs uppercase tracking-[0.2em] text-white/60"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              NEXT STEP
            </p>

            <h3 className="mt-4 mb-6 text-3xl font-semibold tracking-tight lg:text-4xl" style={{ lineHeight: '1.15' }}>
              If you're closing volume, you need systems.
            </h3>

            <p className="mb-6 text-base leading-7 text-white/70 lg:text-lg lg:leading-8">
              Pick the tool — or hand the file over and let me run it.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-3 lg:flex-row">
            <GlassButton href="/elevate" variant="primary" className="px-7 py-3 text-sm font-medium">
              TC Services →
            </GlassButton>
            <GlassButton href="/tools" variant="secondary" className="px-7 py-3 text-sm font-medium">
              Browse Tools
            </GlassButton>
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
    <section className="relative py-16 lg:py-20">
      {/* Section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/6"></div>
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: Label + Heading */}
          <div className="lg:col-span-4">
            <p
              className="text-xs tracking-[0.34em] text-white/50 uppercase"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              Contact
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
              The fastest way to reach us is by email.
            </h2>
          </div>

          {/* Right: Email Card */}
          <div className="lg:col-span-8">
            <div className="border-t border-white/10 py-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                {/* Left: Email + Links */}
                <div className="flex-1">
                  <a
                    href="mailto:hello@aylenmontenegro.com"
                    className="text-lg font-medium tracking-tight text-white/90 hover:text-white"
                  >
                    hello@aylenmontenegro.com
                  </a>
                  <p className="mt-2 text-sm text-white/60">
                    We typically respond within 1–2 hours.
                  </p>

                  <div className="mt-6 space-y-2 text-sm text-white/60">
                    <p>For the quickest response:</p>
                    <div className="space-y-1">
                      <div><Link href="/upgrade" className="text-white/80 hover:text-white underline">BossyEmail</Link> → product questions or access</div>
                      <div><Link href="/clausevault" className="text-white/80 hover:text-white underline">ClauseVault</Link> → contract support tools</div>
                      <div><Link href="/elevate" className="text-white/80 hover:text-white underline">TC Services</Link> → availability & onboarding</div>
                    </div>
                  </div>
                </div>

                {/* Right: CTA button */}
                <div className="w-full sm:w-auto sm:pl-6">
                  <GlassButton 
                    href="mailto:hello@aylenmontenegro.com" 
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    Email Us
                  </GlassButton>
                  <div className="mt-2 space-y-1 text-xs text-white/50">
                    <div>No forms.</div>
                    <div>No spam.</div>
                    <div>Just email.</div>
                  </div>
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
function HeroTickerNew() {
  return (
    <section className="mt-8 pb-20 lg:pb-24">
      {/* top hairline */}
      <div className="h-px w-full bg-white/10"></div>

      <div className="relative overflow-hidden">
        <div className="ticker-edge-to-edge flex items-center gap-12 whitespace-nowrap px-6 py-4 text-xs tracking-[0.22em] text-white/70 sm:px-10">
          {/* sequence */}
          <span>Real estate doesn't break from lack of effort. It breaks from missed details, unclear communication and bad systems. I fix that.</span>
          {/* duplicate for seamless infinite loop */}
          <span>Real estate doesn't break from lack of effort. It breaks from missed details, unclear communication and bad systems. I fix that.</span>
        </div>
      </div>

      {/* bottom hairline */}
      <div className="h-px w-full bg-white/10"></div>
    </section>
  );
}

/* -------------------------- EDGE-TO-EDGE INFINITE INDEXED TICKER -------------------------- */
function EdgeToEdgeTickerNew() {
  return (
    <section className="mt-16 sm:mt-20 pb-16">
      {/* top hairline */}
      <div className="h-px w-full bg-white/10"></div>

      <div className="relative overflow-hidden">
        <div className="ticker-edge-to-edge flex items-center gap-12 whitespace-nowrap py-4 text-xs tracking-[0.22em] text-white/70">
          {/* sequence */}
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              01
            </span>
            &nbsp;BOSSYEMAIL
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              02
            </span>
            &nbsp;CLAUSEVAULT
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              03
            </span>
            &nbsp;TRANSACTION&nbsp;COORDINATION
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              04
            </span>
            &nbsp;CONTRACTLOOP
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              05
            </span>
            &nbsp;TEMPLATES
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              06
            </span>
            &nbsp;TRAINING
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              07
            </span>
            &nbsp;WORKFLOWS
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              08
            </span>
            &nbsp;AUTOMATION
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              09
            </span>
            &nbsp;MIAMI&nbsp;TC&nbsp;CHAOS&nbsp;(MANAGED)
          </span>

          {/* duplicate for seamless infinite loop */}
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              01
            </span>
            &nbsp;BOSSYEMAIL
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              02
            </span>
            &nbsp;CLAUSEVAULT
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              03
            </span>
            &nbsp;TRANSACTION&nbsp;COORDINATION
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              04
            </span>
            &nbsp;CONTRACTLOOP
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              05
            </span>
            &nbsp;TEMPLATES
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              06
            </span>
            &nbsp;TRAINING
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              07
            </span>
            &nbsp;WORKFLOWS
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              08
            </span>
            &nbsp;AUTOMATION
          </span>
          <span>
            <span 
              className="font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                fontVariantNumeric: 'slashed-zero',
                fontFeatureSettings: '"zero"',
              }}
            >
              09
            </span>
            &nbsp;MIAMI&nbsp;TC&nbsp;CHAOS&nbsp;(MANAGED)
          </span>
        </div>
      </div>

      {/* bottom hairline */}
      <div className="h-px w-full bg-white/10"></div>
    </section>
  );
}


