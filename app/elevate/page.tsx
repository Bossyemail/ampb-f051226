'use client';

import { useEffect, useRef } from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import { 
  trackPageView, 
  trackButtonClick, 
  trackVideoEvent, 
  trackScrollDepth, 
  trackTimeOnPage 
} from '@/utils/analytics';
import { structuredData, organizationData, breadcrumbData } from './structured-data';

export default function ElevatePage() {
  const startTime = useRef(Date.now());
  const scrollDepth = useRef(0);


  useEffect(() => {
    // Track page view
    trackPageView('TC Services Elevate Page');

    // Track time on page
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeSpent);
    };

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > scrollDepth.current) {
        scrollDepth.current = scrollPercent;
        if (scrollPercent % 25 === 0) { // Track every 25%
          trackScrollDepth(scrollPercent);
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = (buttonName: string, location: string) => {
    trackButtonClick(buttonName, location);
  };

  const handleVideoEvent = (action: 'play' | 'pause' | 'complete', videoId: string) => {
    trackVideoEvent(action, videoId);
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      
      <div className="min-h-screen text-white antialiased" style={{ backgroundColor: '#0E0F11' }}>
        <StickyNavigation />

        {/* Hero Section */}
        <section className="relative h-[650px] w-full -mt-32">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/videos/office-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 sm:bg-black/30 md:bg-black/45" />
          {/* Gradient on right side for better stats visibility */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#0E0F11] via-[#0E0F11]/60 via-transparent to-transparent" style={{ background: 'linear-gradient(to left, rgba(14, 15, 17, 1) 0%, rgba(14, 15, 17, 0.8) 20%, rgba(14, 15, 17, 0.4) 40%, transparent 60%)' }} />
          {/* Gradient on left side for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F11] via-[#0E0F11]/60 via-transparent to-transparent" style={{ background: 'linear-gradient(to right, rgba(14, 15, 17, 1) 0%, rgba(14, 15, 17, 0.8) 20%, rgba(14, 15, 17, 0.4) 40%, transparent 60%)' }} />
          {/* Gradient blend at bottom of hero */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0F11] to-transparent" />
          <div className="absolute inset-0 flex items-center pt-64">
            <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
              <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <p 
                    className="font-mono text-xs tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    TC SERVICES
                  </p>

                  <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Transaction coordination for agents who refuse to compromise.
                  </h1>

                  <div className="mt-6 max-w-[22rem] sm:max-w-2xl">
                    <p className="text-base leading-relaxed text-white/75 sm:text-white/70 sm:text-lg">
                      This is not checklist support.
                      It's licensed, high-precision transaction coordination designed to protect your
                      reputation, timelines, and peace of mind — under real volume.
                    </p>

                    <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-white/70">
                      If your business depends on clean execution from contract to close,
                      this is the layer that keeps everything quiet.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a 
                      href="#fit"
                      className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black hover:bg-white/90"
                      style={{ color: '#000000' }}
                    >
                      Are We a Fit? →
                    </a>
                    <p className="text-sm text-white/55">
                      Limited capacity · Select clients only
                    </p>
                  </div>
                </div>

                {/* Right: Credibility / Constraints Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_24px_90px_rgba(0,0,0,.55)]">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      WHAT THIS IS
                    </p>

                    <div className="mt-6 space-y-6 text-sm text-white/70">
                      <div className="flex items-start gap-4">
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
                        <p>
                          Licensed transaction coordination with deep contract fluency
                        </p>
                      </div>

                      <div className="h-px bg-white/10"></div>

                      <div className="flex items-start gap-4">
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
                        <p>
                          Active deadline management, document control, and risk flagging
                        </p>
                      </div>

                      <div className="h-px bg-white/10"></div>

                      <div className="flex items-start gap-4">
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
                        <p>
                          Backend protection for agents closing real volume
                        </p>
                      </div>

                      <div className="h-px bg-white/10"></div>

                      <div className="flex items-start gap-4">
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
                        <p>
                          Not a marketplace service · Not a low-cost add-on
                        </p>
                      </div>
                    </div>

                    <p className="mt-8 text-xs text-white/55">
                      This works best when expectations are clear — on both sides.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          {/* FIT FILTER Section */}
          <section id="fit" className="py-24 sm:py-32">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-12 sm:p-16">
              <div className="max-w-4xl">
                <p 
                  className="font-mono text-xs tracking-[0.28em] text-white/55"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  FIT MATTERS
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  This service is intentionally not for everyone.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  Transaction coordination works best when expectations, communication,
                  and responsibility are clearly defined.
                  This page exists to make sure we're aligned before we ever talk.
                </p>
              </div>

              <div className="mt-14 grid gap-10 lg:grid-cols-2">
                {/* WHO IT'S FOR */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_20px_80px_rgba(0,0,0,.5)]">
                  <p 
                    className="font-mono text-xs tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    THIS IS FOR YOU IF
                  </p>

                  <ul className="mt-8 space-y-6 text-sm text-white/75">
                    <li className="flex gap-4">
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
                      <span>
                        You close consistent volume and need a reliable backend partner —
                        not just help "when things get busy."
                      </span>
                    </li>

                    <li className="flex gap-4">
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
                      <span>
                        You care deeply about deadlines, documentation, and protecting your reputation.
                      </span>
                    </li>

                    <li className="flex gap-4">
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
                      <span>
                        You want fewer fires, fewer surprises, and fewer late-night emergencies.
                      </span>
                    </li>

                    <li className="flex gap-4">
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
                      <span>
                        You respect process and understand that clean systems beat heroics.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* WHO IT'S NOT FOR */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">
                  <p 
                    className="font-mono text-xs tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    THIS IS NOT FOR YOU IF
                  </p>

                  <ul className="mt-8 space-y-6 text-sm text-white/65">
                    <li className="flex gap-4">
                      <span 
                        className="font-mono text-white/40"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        01
                      </span>
                      <span>
                        You're looking for the cheapest TC option available.
                      </span>
                    </li>

                    <li className="flex gap-4">
                      <span 
                        className="font-mono text-white/40"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        02
                      </span>
                      <span>
                        You expect last-minute saves without following a process.
                      </span>
                    </li>

                    <li className="flex gap-4">
                      <span 
                        className="font-mono text-white/40"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        03
                      </span>
                      <span>
                        You treat deadlines as flexible suggestions.
                      </span>
                    </li>

                    <li className="flex gap-4">
                      <span 
                        className="font-mono text-white/40"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        04
                      </span>
                      <span>
                        You want someone to absorb chaos instead of eliminating it.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-10">
                <p className="text-sm text-white/60 max-w-3xl">
                  If the first list felt like a relief — and the second made you uncomfortable —
                  we're probably a fit.
                </p>

                <a 
                  href="#process"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.06]"
                >
                  See how it works →
                </a>
              </div>
            </div>
          </section>

          {/* SCOPE / OUTCOMES Section */}
          <section id="process" className="py-24 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left: Outcomes framing */}
              <div className="lg:col-span-5">
                <p 
                  className="font-mono text-xs tracking-[0.28em] text-white/55"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  01 \ SCOPE
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  The outcome is a quiet closing.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  You don't hire a TC for "help." You hire one to remove risk, protect deadlines,
                  and keep the transaction moving without constant supervision.
                </p>

                <p className="mt-6 text-base leading-relaxed text-white/70">
                  My job is to run the file like an operator — so you can stay in sales mode.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                    Deadline control
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                    Document discipline
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                    Clear communication
                  </span>
                </div>
              </div>

              {/* Right: Outcome cards */}
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  {/* Primary outcome card */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 shadow-[0_24px_90px_rgba(0,0,0,.55)]">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      WHAT YOU GET
                    </p>

                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                      A file that stays tight from contract to close.
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      Clean timelines, clear ownership, and documentation handled like it matters —
                      because it does.
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
                        <span>Deadline tracking + proactive reminders</span>
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
                        <span>Document collection + compliance packaging</span>
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
                        <span>Coordination with title, lenders, agents, vendors</span>
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
                        <span>Risk flagging before it becomes expensive</span>
                      </div>
                    </div>
                  </div>

                  {/* Supporting cards */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                      <p 
                        className="font-mono text-xs tracking-[0.28em] text-white/55"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        COMMUNICATION
                      </p>
                      <h4 className="mt-4 text-lg font-semibold tracking-tight text-white/90">
                        Clear, documented, decisive
                      </h4>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">
                        Every request, follow-up, and "we still need this" message is handled with professional tone
                        and written clarity — so nothing gets lost and no one gets to rewrite history later.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                      <p 
                        className="font-mono text-xs tracking-[0.28em] text-white/55"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        PROCESS
                      </p>
                      <h4 className="mt-4 text-lg font-semibold tracking-tight text-white/90">
                        Systems over heroics
                      </h4>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">
                        I run repeatable workflows, not "best effort."
                        That's how deals stay calm under pressure — and why this only works with clients who respect process.
                      </p>
                    </div>
                  </div>

                  {/* Boundaries note */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      IMPORTANT
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      This service is designed to reduce fires — not absorb them.
                      If a file is already off the rails, we can stabilize it, but the goal is prevention:
                      clear deadlines, clean documentation, and proactive control.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-14 flex flex-wrap items-center gap-4">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black hover:bg-white/90"
              >
                Request availability →
              </a>
              <p className="text-sm text-white/55">
                If you're protecting a brand, not just chasing closings, this is the right layer.
              </p>
            </div>
          </section>

          {/* RULES / EXPECTATIONS Section */}
          <section className="py-24 sm:py-32">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-12 sm:p-16">
              <div className="max-w-4xl">
                <p 
                  className="font-mono text-xs tracking-[0.28em] text-white/55"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  02 \ RULES
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Clear expectations keep deals clean.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  This service works because boundaries are defined up front.
                  These aren't preferences — they're non-negotiables designed to protect the transaction,
                  your reputation, and my capacity to do the work properly.
                </p>
              </div>

              <div className="mt-14 grid gap-10 lg:grid-cols-2">
                {/* HOW I WORK */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_20px_80px_rgba(0,0,0,.5)]">
                  <p 
                    className="font-mono text-xs tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    HOW I WORK
                  </p>

                  <ul className="mt-8 space-y-6 text-sm text-white/75">
                    <li className="flex gap-4">
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
                      <span>
                        I run the file proactively — tracking deadlines, documents, and risk before they become problems.
                      </span>
                    </li>

                    <li className="flex gap-4">
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
                      <span>
                        Communication is direct, documented, and professional at all times.
                      </span>
                    </li>

                    <li className="flex gap-4">
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
                      <span>
                        If something jeopardizes the deal, you'll hear it early — even if it's uncomfortable.
                      </span>
                    </li>

                    <li className="flex gap-4">
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
                      <span>
                        I don't guess, assume, or rely on memory. Everything is verified and logged.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* WHAT I DON'T DO */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">
                  <p 
                    className="font-mono text-xs tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    WHAT I DON'T DO
                  </p>

                  <ul className="mt-8 space-y-6 text-sm text-white/65">
                    <li className="flex gap-4">
                      <span 
                        className="font-mono text-white/40"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        01
                      </span>
                      <span>
                        I don't chase missing documents without agent support and accountability.
                      </span>
                    </li>

                    <li className="flex gap-4">
                      <span 
                        className="font-mono text-white/40"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        02
                      </span>
                      <span>
                        I don't cut corners to "move things along."
                      </span>
                    </li>

                    <li className="flex gap-4">
                      <span 
                        className="font-mono text-white/40"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        03
                      </span>
                      <span>
                        I don't absorb chaos caused by ignored deadlines or last-minute decisions.
                      </span>
                    </li>

                    <li className="flex gap-4">
                      <span 
                        className="font-mono text-white/40"
                        style={{
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        04
                      </span>
                      <span>
                        I don't operate in gray areas that expose you — or me — to unnecessary risk.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom framing */}
              <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-10">
                <p className="text-sm text-white/60 max-w-3xl">
                  These rules exist so deals don't rely on adrenaline, favors, or last-minute saves.
                  If this structure feels like relief, we'll work well together.
                </p>

                <a 
                  href="#availability"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.06]"
                >
                  Check availability →
                </a>
              </div>
            </div>
          </section>

          {/* CAPACITY Section */}
          <section id="availability" className="py-24 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left: Scarcity Framing */}
              <div className="lg:col-span-5">
                <p 
                  className="font-mono text-xs tracking-[0.28em] text-white/55"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  03 \ CAPACITY
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  This only works at limited scale.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  High-precision transaction coordination doesn't scale endlessly —
                  and that's intentional.
                </p>

                <p className="mt-6 text-base leading-relaxed text-white/70">
                  Every file I take on requires active oversight, judgment calls,
                  and real accountability. Expanding beyond a certain point would
                  compromise the very thing clients hire me for: control.
                </p>

                <p className="mt-6 text-base leading-relaxed text-white/70">
                  That's why availability is limited — and why I work with a small,
                  vetted group of agents at any given time.
                </p>
              </div>

              {/* Right: Capacity Card */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 sm:p-12 shadow-[0_24px_90px_rgba(0,0,0,.55)]">
                  <p 
                    className="font-mono text-xs tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    HOW AVAILABILITY WORKS
                  </p>

                  <div className="mt-8 space-y-6 text-sm text-white/75">
                    <div className="flex gap-4">
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
                      <span>
                        I cap the number of active files to maintain quality, speed, and accuracy.
                      </span>
                    </div>

                    <div className="h-px bg-white/10"></div>

                    <div className="flex gap-4">
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
                      <span>
                        New clients are accepted based on timing, volume, and overall fit —
                        not first come, first served.
                      </span>
                    </div>

                    <div className="h-px bg-white/10"></div>

                    <div className="flex gap-4">
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
                      <span>
                        When capacity is full, inquiries are waitlisted rather than rushed.
                      </span>
                    </div>

                    <div className="h-px bg-white/10"></div>

                    <div className="flex gap-4">
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
                      <span>
                        The goal is consistency — not growth at the expense of execution.
                      </span>
                    </div>
                  </div>

                  <div className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-6">
                    <p className="text-sm leading-relaxed text-white/70">
                      This model exists so you're never wondering who's watching your file —
                      or whether something slipped through the cracks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA bridge */}
            <div className="mt-14 flex flex-wrap items-center gap-4">
              <a 
                href="#final"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.06]"
              >
                Next: How to engage →
              </a>
              <p className="text-sm text-white/55">
                If you value consistency over convenience, this is intentional.
              </p>
            </div>
          </section>

          {/* FINAL CTA Section */}
          <section id="final" className="py-28 sm:py-40">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-12 sm:p-16">
              <div className="max-w-3xl">
                <p 
                  className="font-mono text-xs tracking-[0.28em] text-white/55"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  NEXT STEP
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  If this felt like relief, we should talk.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  I work with a limited number of agents because the standard is the product:
                  clean files, controlled timelines, and zero "what happened?" surprises.
                </p>

                <p className="mt-6 text-base leading-relaxed text-white/70">
                  If you're the type of agent who values process, protects your reputation,
                  and wants a backend partner — not a "helper" — this is a strong fit.
                </p>

                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black hover:bg-white/90"
                    style={{ color: '#000000' }}
                  >
                    Request availability →
                  </a>

                  <p className="text-sm text-white/55">
                    Fit-based · Limited capacity · No chaos
                  </p>
                </div>

                <div className="mt-12 rounded-2xl border border-white/10 bg-black/20 p-7">
                  <p 
                    className="font-mono text-xs tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    WHAT TO INCLUDE
                  </p>

                  <div className="mt-5 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
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
                      <span>Average monthly volume</span>
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
                      <span>Primary market / areas</span>
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
                      <span>Transaction types / systems</span>
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
                      <span>Ideal start timeframe</span>
                    </div>
                  </div>

                  <p className="mt-5 text-xs text-white/55">
                    The goal is to confirm fit quickly and respect everyone's time.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
