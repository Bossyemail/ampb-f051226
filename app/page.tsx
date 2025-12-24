"use client";

import React from "react";
import Link from "next/link";
import StickyNavigation from '@/components/StickyNavigation';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="text-white antialiased" style={{ backgroundColor: '#0E0F11' }}>
      <StickyNavigation />

      {/* HERO */}
      <HeroNew />

      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* WHAT I BUILD */}
        <WhatIBuildNew />

        {/* ROLLER SECTION - breaks out of container for full bleed */}
      </div>
      <RollerSection />
      <div className="mx-auto max-w-6xl px-6 sm:px-10 pt-16 pb-24 sm:pt-20 sm:pb-32" style={{ backgroundColor: '#0E0F11' }}>

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

        {/* EDGE-TO-EDGE INFINITE INDEXED TICKER */}
        <EdgeToEdgeTickerNew />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */
function HeroNew() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden" style={{ backgroundColor: '#0E0F11' }}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/14.png)",
          backgroundSize: "60%",
          backgroundPosition: "center 35%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Side gradients to blend image edges into soft charcoal background - stronger right side and bottom */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(14, 15, 17, 1) 0%, rgba(14, 15, 17, 0.95) 10%, rgba(14, 15, 17, 0.8) 20%, rgba(14, 15, 17, 0.4) 30%, transparent 35%, transparent 55%, rgba(14, 15, 17, 0.5) 65%, rgba(14, 15, 17, 0.85) 75%, rgba(14, 15, 17, 0.95) 85%, rgba(14, 15, 17, 1) 100%)' }}></div>
      {/* Bottom fade gradient - blends to soft charcoal */}
      <div className="absolute inset-x-0 bottom-0 h-64" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(14, 15, 17, 0.4) 50%, rgba(14, 15, 17, 1) 100%)' }}></div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        {/* HERO GRID */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COPY (pushed DOWN) */}
          <div className="lg:col-span-6">
            {/* This spacer is what moves everything lower */}
            <div className="pt-32 sm:pt-36 lg:pt-40">
              <p
                className="text-[10px] tracking-[0.28em] text-white/55"
                style={{
                  fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                }}
              >
                HI THERE
              </p>

              <h1 className="mt-3 mb-8 text-4xl font-semibold tracking-tight sm:text-5xl" style={{ lineHeight: '1.08' }}>
                I&apos;m Aylen<span className="text-white/90">,</span>
              </h1>

              <p className="mb-6 max-w-[65ch] text-base sm:text-[17px] text-white/75" style={{ lineHeight: '1.7' }}>
                I help real estate professionals close deals with fewer mistakes, fewer emails, and less stress.
              </p>

              <p className="mb-6 max-w-[65ch] text-base sm:text-[17px] text-white/75" style={{ lineHeight: '1.7' }}>
                Contracts, deadlines, and communication don&apos;t need to be chaotic. I build tools, systems, and support that keep transactions moving — quietly and correctly.
              </p>

              {/* Buttons: rectangular, with "selected" style available */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {/* Selected example (white) */}
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90"
                  style={{ color: '#000000' }}
                >
                  Explore the Tools
                </Link>

                {/* Default button */}
                <Link
                  href="/work-with-me"
                  className="inline-flex items-center justify-center rounded-md border border-white/18 bg-white/0 px-5 py-2.5 text-sm font-medium text-white/85 hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  Work With Me
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT STATS (no box, floating) */}
          <div className="lg:col-span-6">
            <div className="pt-24 sm:pt-28 lg:pt-32">
              <div className="max-w-[360px] lg:ml-auto">
                <div className="space-y-7 text-right">
                  <div className="pb-6">
                    <div className="text-xl font-semibold tracking-tight text-white/90">20+</div>
                    <div
                      className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                      style={{
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                      }}
                    >
                      YEARS EXPERIENCE
                    </div>
                    {/* half-length divider */}
                    <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
                  </div>

                  <div className="pb-6">
                    <div className="text-xl font-semibold tracking-tight text-white/90">3K+</div>
                    <div
                      className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                      style={{
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                      }}
                    >
                      CLOSED DEALS
                    </div>
                    {/* half-length divider */}
                    <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
                  </div>

                  <div className="pb-6">
                    <div className="text-xl font-semibold tracking-tight text-white/90">4+</div>
                    <div
                      className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                      style={{
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                      }}
                    >
                      SAAS PRODUCTS BUILT
                    </div>
                    {/* half-length divider */}
                    <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider line at bottom of hero */}
          <div className="lg:col-span-12">
            <div className="mt-16 h-px w-full bg-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* -------------------------- WHAT I BUILD -------------------------- */
function WhatIBuildNew() {
  return (
    <section className="py-24 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Left intro */}
        <div className="lg:col-span-4">
          <p
            className="text-[10px] tracking-wide text-white/50"
            style={{ 
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
            }}
          >
            WHAT I BUILD
          </p>

          <h2 className="mt-3 mb-8 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ lineHeight: '1.2' }}>
            Tools that remove the chaos.
          </h2>

          <p className="mb-6 max-w-[65ch] text-base text-white/70" style={{ lineHeight: '1.7' }}>
            These are the systems behind the scenes — bottled up and built for scale.
          </p>
        </div>

        {/* Right: expandable rows */}
        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded-2xl border border-white/10" style={{ backgroundColor: '#0E0F11' }}>
            {/* Row 01 */}
            <details className="border-b border-white/10">
              <summary className="flex w-full cursor-pointer list-none items-start gap-5 p-6 transition-colors hover:bg-white/[0.02] sm:p-7">
                <div
                  className="pt-0.5 text-lg tracking-[0.28em] text-white/45 sm:text-xl"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  01
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl" style={{ lineHeight: '1.2' }}>
                        BossyEmail
                      </h3>
                      <p className="mt-3 mb-6 max-w-[65ch] text-sm text-white/65" style={{ lineHeight: '1.7' }}>
                        Email templates + AI generator built for real estate chaos. Stop rewriting the same message 47 times.
                      </p>
                    </div>

                    {/* chevron */}
                    <svg
                      className="details-chevron mt-1 h-5 w-5 flex-none text-white/55 transition-transform duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </summary>

              {/* Expanded content (clean, not boxy) */}
              <div className="details-content px-6 pb-6 sm:px-7">
                <div className="ml-[calc(1.25rem+1.25rem)] max-w-[65ch] text-sm text-white/70 sm:ml-[calc(1.75rem+1.25rem)]" style={{ lineHeight: '1.7' }}>
                  <div className="mt-4 aspect-video w-full rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    >
                      <source src="/videos/bossyemail-vsl.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </details>

            {/* Row 02 */}
            <details className="border-b border-white/10">
              <summary className="flex w-full cursor-pointer list-none items-start gap-5 p-6 transition-colors hover:bg-white/[0.02] sm:p-7">
                <div
                  className="pt-0.5 text-lg tracking-[0.28em] text-white/45 sm:text-xl"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  02
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        ClauseVault
                      </h3>
                      <p className="mt-3 mb-6 max-w-[65ch] text-sm text-white/65" style={{ lineHeight: '1.7' }}>
                        Contract language support that keeps deals moving — without playing attorney.
                      </p>
                    </div>

                    <svg
                      className="details-chevron mt-1 h-5 w-5 flex-none text-white/55 transition-transform duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </summary>

              <div className="details-content px-6 pb-6 sm:px-7">
                <div className="ml-[calc(1.25rem+1.25rem)] max-w-[65ch] text-sm text-white/70 sm:ml-[calc(1.75rem+1.25rem)]" style={{ lineHeight: '1.7' }}>
                  <div className="mt-4 aspect-video w-full rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    >
                      <source src="/videos/clausevault-vsl 2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </details>

            {/* Row 03 */}
            <details>
              <summary className="flex w-full cursor-pointer list-none items-start gap-5 p-6 transition-colors hover:bg-white/[0.02] sm:p-7">
                <div
                  className="pt-0.5 text-lg tracking-[0.28em] text-white/45 sm:text-xl"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  03
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        Transaction Coordination
                      </h3>
                      <p className="mt-3 mb-6 max-w-[65ch] text-sm text-white/65" style={{ lineHeight: '1.7' }}>
                        White-glove file management for agents who want fewer fires and fewer surprises.
                      </p>
                    </div>

                    <svg
                      className="details-chevron mt-1 h-5 w-5 flex-none text-white/55 transition-transform duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </summary>

              <div className="details-content px-6 pb-6 sm:px-7">
                <div className="ml-[calc(1.25rem+1.25rem)] max-w-[65ch] text-sm text-white/70 sm:ml-[calc(1.75rem+1.25rem)]" style={{ lineHeight: '1.7' }}>
                  <div className="mt-4 aspect-video w-full rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    >
                      <source src="/videos/tc-services.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </details>
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

  const copy = React.useMemo(() => ({
    1: {
      title: "Deals don't fall apart from drama.",
      body: "They fall apart from friction.\n\nMissed details. Unclear ownership.\n\n\"I thought you had it\" moments that quietly stack up under pressure.\n\nUnder volume, small gaps become expensive fast.",
      foot: "Deadlines slip. Communication fragments. Reputations take hits — without anyone noticing until it's too late."
    },
    2: {
      title: "Because most agents are scaling activity, not systems.",
      body: "As deal volume increases, coordination becomes invisible work —\n\nand invisible work is where things break.\n\nMore emails. More people. More handoffs.\n\nSame tools. Same habits. Same fire-drills.",
      foot: "Chaos doesn't come from incompetence. It comes from growth without structure."
    },
    3: {
      title: "Control.",
      body: "Not micromanagement.\n\nNot working harder.\n\nNot being \"on\" 24/7.\n\nReal control comes from clear ownership, clean communication, and repeatable systems that run whether you're watching or not.",
      foot: "When the process is tight, deals move quietly. When deals move quietly, your reputation compounds."
    },
    4: {
      title: "This is built for agents and teams who:",
      body: "Close enough volume to feel the friction\n\nCare deeply about reputation, speed, and consistency\n\nAre done being the safety net for broken processes\n\nWant fewer fires — not more adrenaline",
      foot: "If you're protecting a brand, not just chasing closings, you don't need more hustle. You need control."
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
    <section className="relative py-28 sm:py-32 lg:py-40 overflow-hidden mb-32">
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
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT */}
          <div className="lg:col-span-5">
            {/* Stage indicator (side-by-side) */}
            <div
              className="flex gap-6 text-base tracking-[0.28em] text-white/60"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              <span className={step === 1 ? "font-medium text-white" : "text-white/30"}>PROBLEM</span>
              <span className={step === 2 ? "font-medium text-white" : "text-white/30"}>WHY</span>
              <span className={step === 3 ? "font-medium text-white" : "text-white/30"}>WHAT</span>
              <span className={step === 4 ? "font-medium text-white" : "text-white/30"}>WHO</span>
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
                      }}
                      suppressHydrationWarning
                    >
                      02
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 mb-6 max-w-[65ch] text-base text-white/75 sm:text-[17px] space-y-2" style={{ lineHeight: '1.7' }}>
              <p>Deals don&apos;t fall apart from drama.</p>
              <p>They fall apart from friction.</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/20 bg-white/[0.08] backdrop-blur-md p-7 sm:p-12" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
              <h3 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ lineHeight: '1.2' }}>
                {cardContent.title}
              </h3>
              <div className="mt-4 mb-6 max-w-[65ch] text-sm text-white/70 sm:text-[15px] space-y-4" style={{ lineHeight: '1.7' }}>
                {cardContent.body.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 h-px w-full bg-white/10"></div>
              <p className="mt-4 mb-6 text-sm text-white/60" style={{ lineHeight: '1.7' }}>
                {cardContent.foot}
              </p>
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
    <section className="mb-32 mt-8 sm:mt-10">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p
              className="text-[10px] tracking-wide text-white/50"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              FASTEST WIN
            </p>

            <h3 className="mt-4 mb-8 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ lineHeight: '1.2' }}>
              Stop writing real estate emails from scratch.
            </h3>

            <p className="mb-6 max-w-[65ch] text-sm text-white/70 sm:text-[15px]" style={{ lineHeight: '1.7' }}>
              BossyEmail gives you ready-to-send templates + an AI generator trained for the kinds of messages that
              actually happen in transactions. Less typing. Fewer mistakes. More control.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-[0.22em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                TEMPLATES
              </span>
              <span
                className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-[0.22em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                AI GENERATOR
              </span>
              <span
                className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-[0.22em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                REAL ESTATE SPECIFIC
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <div className="flex w-full flex-col gap-3 sm:w-auto">
              {/* Primary (rectangular, turns white) */}
              <Link
                href="https://bossyemail.com"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 px-6 text-sm font-medium bg-white hover:bg-white/90"
                style={{ color: '#000000' }}
              >
                Try BossyEmail
              </Link>

              {/* Secondary (outline, turns white on hover) */}
              <Link
                href="/tools"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 px-6 text-sm font-medium text-white/85 hover:bg-white hover:text-black"
              >
                See all tools
              </Link>

              <p className="text-center text-[10px] leading-relaxed text-white/50 sm:text-left">
                Two minutes to try.<br />
                Saves hours a week.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 h-px w-full bg-white/10"></div>

        {/* micro-proof (keep it Apple-minimal) */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm font-medium">320+ templates</p>
            <p className="mt-1 text-xs leading-relaxed text-white/60">
              Built for listing, escrow, and closing chaos.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm font-medium">Less back-and-forth</p>
            <p className="mt-1 text-xs leading-relaxed text-white/60">
              Cleaner communication = fewer mistakes.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm font-medium">Made by a TC</p>
            <p className="mt-1 text-xs leading-relaxed text-white/60">
              Real files. Real deadlines. Real consequences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- REVIEWS: HEADING ONLY -------------------------- */
function ReviewsHeadingNew() {
  return (
    <section className="mt-16 sm:mt-20">
      <div className="max-w-3xl">
        <p
          className="text-[10px] tracking-[0.28em] text-white/55"
          style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
        >
          HYPE FOLDER
        </p>

        <h2 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
          What other people said.
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-white/65">
          Real feedback from real clients.
        </p>
      </div>
    </section>
  );
}

/* -------------------------- ABOUT PREVIEW -------------------------- */
function AboutPreviewNew() {
  return (
    <section className="mb-32 mt-16 sm:mt-20">
      <div className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-28 sm:py-40">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* COPY */}
        <div className="lg:col-span-7">
          <p 
            className="text-[10px] tracking-wide text-white/50"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            ABOUT
          </p>

          <h2 className="mt-3 mb-8 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ lineHeight: '1.2' }}>
            I make closings boring — so you can scale.
          </h2>

          <p className="mb-6 max-w-[65ch] text-base text-white/70" style={{ lineHeight: '1.7' }}>
            I've managed thousands of real transactions, not hypotheticals.
            When the same problems show up over and over, you either keep firefighting —
            or you build systems that stop the fires.
          </p>

          <p className="mb-6 max-w-[65ch] text-base text-white/70" style={{ lineHeight: '1.7' }}>
            That's what I do. I turn repeatable chaos into workflows, tools,
            and support that let agents focus on clients instead of cleanup.
          </p>

          <div className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-white bg-white px-6 py-3 text-sm font-medium hover:bg-white/90"
              style={{ color: '#000000' }}
            >
              Read the full story →
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="lg:col-span-5">
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
      </div>
    </section>
  );
}

/* -------------------------- FINAL CTA -------------------------- */
function FinalCTANew() {
  return (
    <section className="mb-32 mt-16 sm:mt-20">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* COPY */}
          <div className="max-w-xl">
            <p 
              className="text-[10px] tracking-wide text-white/50"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              NEXT STEP
            </p>

            <h3 className="mt-3 mb-8 text-xl font-semibold tracking-tight sm:text-2xl" style={{ lineHeight: '1.2' }}>
              If you're closing volume, you need systems.
            </h3>

            <p className="mb-6 text-sm text-white/65" style={{ lineHeight: '1.7' }}>
              Pick the tool — or hand the file over and let me run it.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/elevate"
              className="inline-flex items-center justify-center rounded-md border border-white bg-white px-6 py-3 text-sm font-medium hover:bg-white/90"
              style={{ color: '#000000' }}
            >
              TC Services →
            </Link>

            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-transparent px-6 py-3 text-sm font-medium text-white/85 hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              Browse Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- CONTACT SECTION -------------------------- */
function ContactSectionNew() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Label */}
        <p
          className="font-mono text-xs tracking-[0.28em] text-white/55"
          style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
        >
          CONTACT
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Contact
        </h1>

        {/* Intro */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          For product support, partnerships, or general inquiries, the best way to reach us is by email.
        </p>

        {/* Card */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-10 shadow-[0_24px_90px_rgba(0,0,0,.55)] sm:p-12">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            {/* Left: Email + note */}
            <div className="max-w-2xl">
              <p className="text-sm text-white/60">Email</p>

              <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                {/* Email address */}
                <a
                  href="mailto:hello@aylenmontenegro.com"
                  className="text-lg font-medium tracking-tight text-white/90 hover:text-white"
                >
                  hello@aylenmontenegro.com
                </a>

                {/* Divider (desktop) */}
                <span className="hidden h-4 w-px bg-white/10 sm:block"></span>

                {/* Response time */}
                <p className="text-sm text-white/60">
                  We typically respond within 1–2 business days.
                </p>
              </div>

              {/* Boundary / routing line */}
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/60">
                If you're interested in working together, please use the relevant page (BossyEmail, TC Services, or ClauseVault) to get started.
              </p>
            </div>

            {/* Right: CTA button */}
            <div className="w-full sm:w-auto">
              <a
                href="mailto:hello@aylenmontenegro.com"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black hover:bg-white/90 sm:w-auto"
                style={{ color: '#000000' }}
              >
                Email Us
              </a>

              <p className="mt-4 text-xs text-white/55">
                No forms. No spam. Just email.
              </p>
            </div>
          </div>
        </div>

        {/* Optional: Secondary line (quiet, not salesy) */}
        <div className="mt-14 border-t border-white/10 pt-12">
          <p className="max-w-2xl text-sm leading-relaxed text-white/60">
            For billing questions, include the email associated with your account so we can help faster.
          </p>
        </div>
      </div>
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
        <div className="ticker-edge-to-edge flex items-center gap-12 whitespace-nowrap px-6 py-4 text-xs tracking-[0.22em] text-white/70 sm:px-10">
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


