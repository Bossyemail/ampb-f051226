"use client";
import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';

export default function UpgradePage() {

  return (
    <>
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
            <source src="/videos/bossy-email.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 sm:bg-black/30 md:bg-black/45" />
          {/* Gradient blend at bottom of hero */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0F11] to-transparent" />
          <div className="absolute inset-0 flex items-center pt-64">
            <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
              <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
                {/* Left: Copy */}
                <div className="lg:col-span-7">
                  <p 
                    className="font-mono text-xs tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    BOSSYEMAIL
                  </p>

                  <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Stop writing real estate emails from scratch.
                  </h1>

                  <div className="mt-6 max-w-[22rem] sm:max-w-2xl">
                    <p className="text-base leading-relaxed text-white/75 sm:text-white/70 sm:text-lg">
                      Every email you rewrite is time stolen from selling, negotiating, and closing.
                      BossyEmail gives you deal-safe messages in seconds — for the moments that actually matter.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a 
                      href="/signup"
                      className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90"
                      style={{ color: '#000000' }}
                    >
                      Get BossyEmail Now →
                    </a>
                    <p className="text-sm text-white/55">No fluff. Cancel anytime.</p>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                      Deal-safe templates
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                      Scenario-specific generator
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                      Built by a TC
                    </span>
                  </div>
                </div>

                {/* Right: "Mechanism" / Steps Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 shadow-[0_24px_90px_rgba(0,0,0,.55)]">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      HOW IT WORKS
                    </p>

                    <h2 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                      From stuck → sent in under 2 minutes.
                    </h2>

                    <div className="mt-8 space-y-6 text-sm text-white/70">
                      <div className="flex gap-4">
                        <span 
                          className="font-mono text-white/50"
                          style={{
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          01
                        </span>
                        <div>
                          <p className="font-medium text-white/85">Pick</p>
                          <p className="mt-1">Inspection drama? Repair credit? Doc delay? Search and select.</p>
                        </div>
                      </div>

                      <div className="h-px bg-white/10"></div>

                      <div className="flex gap-4">
                        <span 
                          className="font-mono text-white/50"
                          style={{
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          02
                        </span>
                        <div>
                          <p className="font-medium text-white/85">Personalize</p>
                          <p className="mt-1">Drop in deal context for clarity and compliance.</p>
                        </div>
                      </div>

                      <div className="h-px bg-white/10"></div>

                      <div className="flex gap-4">
                        <span 
                          className="font-mono text-white/50"
                          style={{
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          03
                        </span>
                        <div>
                          <p className="font-medium text-white/85">Send</p>
                          <p className="mt-1">Clean phrasing. Fewer typos. Faster "yes."</p>
                        </div>
                      </div>
                    </div>

                    <a 
                      href="/signup"
                      className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90"
                      style={{ color: '#000000' }}
                    >
                      Start Free Trial →
                    </a>

                    <p className="mt-3 text-center text-xs text-white/55">
                      Cancel anytime. No fluff. No "AI magic." Just function.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          {/* BOTTLENECK Section */}
          <section className="pt-16 pb-24 sm:pt-20 sm:pb-32">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 sm:p-14">
              <div className="max-w-3xl">
                <p 
                  className="font-mono text-xs tracking-[0.28em] text-white/55"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  01 \ THE BOTTLENECK
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Your contracts might be airtight, but your inbox?
                </h2>

                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  That's where deals quietly stall. Follow-ups get delayed. Clients ghost. Lenders drag.
                  And you're stuck rewriting the same message — again — while the clock keeps moving.
                </p>

                <p className="mt-6 text-base leading-relaxed text-white/70">
                  Under volume, email becomes invisible labor:
                  tone-checking, rephrasing, smoothing conflict, documenting everything, and trying not to say the wrong thing
                  in writing (because… real estate).
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      WHAT IT COSTS
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-white/70">
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
                        <span>Time you should be spending on sales and negotiations</span>
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
                        <span>Missed deadlines because you're buried in back-and-forth</span>
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
                        <span>Risk from sloppy wording when things get tense</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      WHAT YOU WANT INSTEAD
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-white/70">
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
                        <span>Fast, clean emails that don't invite chaos</span>
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
                        <span>Scenario-specific language you can trust</span>
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
                        <span>More "sent" and fewer "drafts"</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <a 
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90"
                  >
                    Fix the inbox problem →
                  </a>
                  <p className="text-sm text-white/55">BossyEmail was built for this exact bottleneck.</p>
                </div>
              </div>
            </div>
          </section>

          {/* THE FIX Section */}
          <section className="py-24 sm:py-32">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              {/* Left: Thesis */}
              <div className="lg:col-span-5">
                <p 
                  className="font-mono text-xs tracking-[0.28em] text-white/55"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  02 \ THE FIX
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Control the message. Control the deal.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  BossyEmail gives you scenario-specific language that's clean, decisive, and deal-safe —
                  so you can move the transaction forward without rewriting the same email five different ways.
                </p>

                <p className="mt-6 text-base leading-relaxed text-white/70">
                  This isn't "AI magic." It's operational clarity:
                  the right tone, the right structure, and the right ask — delivered fast.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a 
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90"
                    style={{ color: '#000000' }}
                  >
                    Start Free Trial →
                  </a>
                  <a 
                    href="#proof"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.06]"
                  >
                    See examples →
                  </a>
                </div>
              </div>

              {/* Right: Mechanism Cards */}
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 shadow-[0_24px_90px_rgba(0,0,0,.55)]">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      THE MECHANISM
                    </p>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                      Built around real scenarios, not generic prompts.
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      You select the situation you're in — inspections, delays, deposits, deadlines, access, extensions —
                      and BossyEmail generates a message that's structured to get a response (without inviting chaos).
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                      <p 
                        className="font-mono text-xs tracking-[0.28em] text-white/55"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        WHY IT WORKS
                      </p>
                      <ul className="mt-5 space-y-3 text-sm text-white/70">
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
                          <span>Decisive structure (clear ask + deadline)</span>
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
                          <span>Professional tone that doesn't escalate</span>
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
                          <span>Documentation-friendly language</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                      <p 
                        className="font-mono text-xs tracking-[0.28em] text-white/55"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        WHAT YOU GET
                      </p>
                      <ul className="mt-5 space-y-3 text-sm text-white/70">
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
                          <span>Templates + AI generator for edge cases</span>
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
                          <span>Cleaner follow-ups that get replies</span>
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
                          <span>More "sent" and fewer "drafts"</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      BUILT BY A TC
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      BossyEmail was built from the real messages that keep transactions moving —
                      the ones agents need when the deal is fragile and the tone has to be right.
                    </p>
                    <p className="mt-4 text-sm text-white/60">
                      Translation: fewer fires, cleaner closings, stronger referrals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EXAMPLES Section */}
          <section id="proof" className="py-24 sm:py-32">
            <div className="max-w-3xl">
              <p 
                className="font-mono text-xs tracking-[0.28em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                03 \ EXAMPLES
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Cleaner emails. Faster replies. Fewer fires.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                Same situation. Two different outcomes.
                BossyEmail gives you language that's clear, professional, and hard to ignore.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {/* Example 1 */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      SCENARIO
                    </p>
                    <p className="mt-4 text-lg font-medium text-white/90">Inspection period ending — no response yet</p>
                    <p className="mt-2 text-sm text-white/60">Goal: get confirmation and a decision without escalating.</p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                      Follow-up
                    </span>
                  </div>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  {/* Before */}
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-7">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      BEFORE
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-white/70">
                      Hi, just checking in to see if you received the inspection report.
                      Let me know what you think and if you want to move forward. Thanks!
                    </p>
                    <div className="mt-6 h-px bg-white/10"></div>
                    <p className="mt-5 text-xs text-white/55">Soft ask. Easy to ignore. No deadline.</p>
                  </div>

                  {/* After */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-[0_18px_70px_rgba(0,0,0,.5)]">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      AFTER (BOSSYEMAIL)
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-white/80">
                      Hi [Name],<br />
                      Following up as the inspection period ends on <span className="text-white/90">[date]</span>.<br />
                      Please confirm receipt of the attached report and advise whether the buyer will proceed
                      as-is or submit a request prior to the deadline.<br />
                      Thank you.
                    </p>
                    <div className="mt-6 h-px bg-white/10"></div>
                    <p className="mt-5 text-xs text-white/60">Clear ask + timeline. Professional. Document-friendly.</p>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      SCENARIO
                    </p>
                    <p className="mt-4 text-lg font-medium text-white/90">Closing delay — lender needs more time</p>
                    <p className="mt-2 text-sm text-white/60">Goal: request an extension without sounding chaotic.</p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                      Extension
                    </span>
                  </div>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                  {/* Before */}
                  <div className="rounded-3xl border border-white/10 bg-black/20 p-7">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      BEFORE
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-white/70">
                      The lender is taking longer than expected so we might need to push closing.
                      Can you let us know if the sellers will agree to extend?
                    </p>
                    <div className="mt-6 h-px bg-white/10"></div>
                    <p className="mt-5 text-xs text-white/55">Vague. Signals uncertainty. Invites negotiation chaos.</p>
                  </div>

                  {/* After */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-[0_18px_70px_rgba(0,0,0,.5)]">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      AFTER (BOSSYEMAIL)
                    </p>
                    <p className="mt-5 text-sm leading-relaxed text-white/80">
                      Hi [Name],<br />
                      Due to lender processing timelines, the buyer is requesting a closing extension to
                      <span className="text-white/90"> [new date]</span>.<br />
                      Please confirm seller approval so we can circulate the appropriate addendum for signature.<br />
                      Thank you.
                    </p>
                    <div className="mt-6 h-px bg-white/10"></div>
                    <p className="mt-5 text-xs text-white/60">Specific date. Clear next step. Keeps leverage.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-4">
              <a 
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90"
                style={{ color: '#000000' }}
              >
                Start Free Trial →
              </a>
              <p className="text-sm text-white/55">Use templates or generate custom language when the deal gets weird.</p>
            </div>
          </section>

          {/* WHAT YOU GET Section */}
          <section className="py-24 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left: Framing */}
              <div className="lg:col-span-5">
                <p 
                  className="font-mono text-xs tracking-[0.28em] text-white/55"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  04 \ WHAT YOU GET
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Everything you need to send the right email — fast.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  BossyEmail isn't a template folder.
                  It's a deal-language system: scenarios, structure, and phrasing built for real transactions.
                </p>

                <p className="mt-6 text-base leading-relaxed text-white/70">
                  Use it daily for the repeats — and lean on the generator when the deal gets weird.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                    Built for agents
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                    Built for speed
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                    Built to document
                  </span>
                </div>
              </div>

              {/* Right: Stack Cards */}
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  {/* Core */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 shadow-[0_24px_90px_rgba(0,0,0,.55)]">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      CORE
                    </p>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                      300+ real estate email templates
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      The standard messages you send over and over: follow-ups, document requests, inspection responses,
                      deadline reminders, access issues, delays, and everything in between.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2 text-sm text-white/70">
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
                        <span>Listing + buyer-side scenarios</span>
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
                        <span>Clean tone + clear asks</span>
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
                        <span>Deadline-aware wording</span>
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
                        <span>Easy to customize</span>
                      </div>
                    </div>
                  </div>

                  {/* Generator + Scenarios */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                      <p 
                        className="font-mono text-xs tracking-[0.28em] text-white/55"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        GENERATOR
                      </p>
                      <h4 className="mt-4 text-lg font-semibold tracking-tight text-white/90">
                        Scenario-based AI writing
                      </h4>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">
                        When you can't find the perfect template, generate one with deal context —
                        without starting from a blank page.
                      </p>
                      <p className="mt-4 text-xs text-white/55">
                        No "AI voice." Just clean professional language.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                      <p 
                        className="font-mono text-xs tracking-[0.28em] text-white/55"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        ORGANIZATION
                      </p>
                      <h4 className="mt-4 text-lg font-semibold tracking-tight text-white/90">
                        Search + categories that make sense
                      </h4>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">
                        Find the right email in seconds by keyword, stage, and scenario —
                        so you're not scrolling during a crisis.
                      </p>
                      <p className="mt-4 text-xs text-white/55">
                        Built to reduce decision fatigue.
                      </p>
                    </div>
                  </div>

                  {/* Updates / Trust */}
                  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
                    <p 
                      className="font-mono text-xs tracking-[0.28em] text-white/55"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      ALWAYS CURRENT
                    </p>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                      Updated as the market shifts
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      Real estate changes. Language evolves. BossyEmail stays current so you don't have to rebuild your
                      communication system every time a new issue becomes "the thing."
                    </p>
                    <p className="mt-4 text-sm text-white/60">
                      The result: fewer mistakes, cleaner closings, stronger referrals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Row */}
            <div className="mt-14 flex flex-wrap items-center gap-4">
              <a 
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black hover:bg-white/90"
                style={{ color: '#000000' }}
              >
                Start Free Trial →
              </a>
              <p className="text-sm text-white/55">
                If you send the same emails every week, this pays for itself fast.
              </p>
            </div>
          </section>

          {/* PRICING Section */}
          <section className="py-24 sm:py-32">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              {/* Left: Close Copy */}
              <div className="lg:col-span-5">
                <p 
                  className="font-mono text-xs tracking-[0.28em] text-white/55"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  05 \ PRICING
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Your inbox doesn't need more effort.
                  It needs a system.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  BossyEmail pays for itself the first time you avoid a sloppy message, a missed deadline,
                  or a deal that goes sideways because the email was unclear.
                </p>

                <p className="mt-6 text-base leading-relaxed text-white/70">
                  Try it, use it daily, and keep it only if it makes you faster.
                </p>

                <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                  <p 
                    className="font-mono text-xs tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    RISK REVERSAL
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    If it doesn't save you time, cancel. No friction. No guilt. No hostage situation.
                  </p>
                  <p className="mt-4 text-xs text-white/55">
                    (Yes, that last part was personal.)
                  </p>
                </div>
              </div>

              {/* Right: Pricing Cards */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 shadow-[0_24px_90px_rgba(0,0,0,.55)]">
                  <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-xl">
                      <p 
                        className="font-mono text-xs tracking-[0.28em] text-white/55"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        CHOOSE YOUR PLAN
                      </p>
                      <h3 className="mt-4 text-xl font-semibold tracking-tight text-white/90">
                        Simple pricing. Immediate value.
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">
                        Includes all templates + scenario generator + updates.
                      </p>
                    </div>

                    <div className="shrink-0">
                      <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                        Cancel anytime
                      </span>
                    </div>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {/* Plan: Lite */}
                    <div className="rounded-3xl border border-white/10 bg-black/20 p-7">
                      <p 
                        className="font-mono text-xs tracking-[0.28em] text-white/55"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        LITE
                      </p>
                      <div className="mt-4 flex items-baseline gap-2">
                        <p className="text-3xl font-semibold">$29</p>
                        <p className="text-sm text-white/55">/ month</p>
                      </div>
                      <p className="mt-4 text-sm text-white/70">
                        Core email generation
                      </p>
                      <p className="mt-1 text-sm text-white/60">
                        Essential scenarios
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
                          <span>AI Email Generator</span>
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
                          <span>Tone control</span>
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
                          <span>Email history</span>
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
                          <span>Mobile-friendly workflow</span>
                        </li>
                      </ul>

                      <a 
                        href="/signup?plan=lite"
                        className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.06]"
                      >
                        Start Free →
                      </a>
                    </div>

                    {/* Plan: Royalty */}
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-[0_18px_70px_rgba(0,0,0,.5)]">
                      <div className="flex items-center justify-between gap-4">
                        <p 
                          className="font-mono text-xs tracking-[0.28em] text-white/55"
                          style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                        >
                          ROYALTY
                        </p>
                        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/75">
                          Most popular
                        </span>
                      </div>

                      <div className="mt-4 flex items-baseline gap-2">
                        <p className="text-3xl font-semibold">$39</p>
                        <p className="text-sm text-white/55">/ month</p>
                      </div>

                      <p className="mt-4 text-sm text-white/70">
                        Unlimited emails
                      </p>

                      <p className="mt-4 text-xs text-white/55 font-medium">Includes:</p>
                      <ul className="mt-4 space-y-3 text-sm text-white/70">
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
                          <span>Unlimited emails</span>
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
                          <span>300+ email templates</span>
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
                          <span>Advanced scenarios</span>
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
                          <span>Priority updates</span>
                        </li>
                      </ul>

                      <a 
                        href="/signup?plan=royalty"
                        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
                        style={{ color: '#000000' }}
                      >
                        Start Free →
                      </a>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
                    <p className="text-sm text-white/60 max-w-2xl">
                      Secure checkout. Instant access. If it doesn't save you time, cancel anytime.
                    </p>
                    <a 
                      href="/signup"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.06]"
                    >
                      Compare plans →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA Section */}
          <section className="py-28 sm:py-40">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-12 sm:p-16">
              <div className="max-w-3xl">
                <p 
                  className="font-mono text-xs tracking-[0.28em] text-white/55"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  FINAL THOUGHT
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  You don't need better emails.
                  You need fewer decisions.
                </h2>

                <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                  BossyEmail removes the friction that slows deals down —
                  the second-guessing, the rewrites, the "how do I say this?" moments
                  that quietly eat your time and attention.
                </p>

                <p className="mt-6 text-base leading-relaxed text-white/70">
                  If email is part of your daily workflow, this becomes one of those tools
                  you forget you're even using — because it just works.
                </p>

                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <a 
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black hover:bg-white/90"
                    style={{ color: '#000000' }}
                  >
                    Start using BossyEmail →
                  </a>

                  <p className="text-sm text-white/55">
                    Try it today. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
