"use client";
import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import { GlassButton } from '@/components/ui/GlassButton';

export default function CloseAdminPage() {

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .ticker { --speed: 26s; }
        .ticker__track {
          display: flex;
          width: max-content;
          animation: ticker var(--speed) linear infinite;
        }
        .group:hover .ticker__track { animation-play-state: paused; }

        .ticker__row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 16px;
          margin-right: 16px;
        }

        .ticker__item{
          display: inline-flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
          color: rgba(255,255,255,0.86);
        }

        .ticker__dot{
          width: 3px;
          height: 3px;
          border-radius: 999px;
          background: rgba(255,255,255,0.22);
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}} />
      <div className="min-h-screen text-white antialiased" style={{ backgroundColor: '#0B0C0F' }}>
        {/* vignette / depth */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(900px_620px_at_12%_-10%,rgba(255,255,255,0.06),transparent_58%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_86%_0%,rgba(201,194,255,0.07),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_120%,rgba(0,0,0,0.9),transparent_62%)]"></div>
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        <main className="relative">
          <StickyNavigation />

          {/* HERO */}
          <section className="relative h-[650px] w-full -mt-32 overflow-hidden z-30">
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
            <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/70 via-[#0B0C0F]/40 via-[#0B0C0F]/20 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center pt-64 z-20">
              <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 relative z-30">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-7">
                    <p
                      className="text-xs tracking-[0.34em] text-white/50 uppercase"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      CloseAdmin
                    </p>

                    <h1 className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight">
                      Your operation. In one place. Finally.
                    </h1>

                    <p className="mt-8 text-sm leading-[1.7] text-white/70 max-w-[68ch] sm:text-base sm:leading-[1.75]">
                      CloseAdmin is the ops suite for agents, TCs, and teams running real volume. Email templates, clause
                      library, deadline tracking, transaction reports — built from 3,000+ real transactions, not a SaaS
                      brainstorm.
                    </p>

                    <p className="mt-5 text-sm leading-[1.7] text-white/65 max-w-[68ch] sm:text-base sm:leading-[1.75]">
                      Stop stitching together Google Sheets, email drafts, PDF clauses, and your memory. Everything you
                      need to run a transaction from contract to close — in one dashboard, built by someone who&apos;s
                      closed the files herself.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4 relative z-40">
                      <GlassButton href="https://bossyemail.com" variant="primary" external className="relative z-40">
                        Try CloseAdmin
                      </GlassButton>
                      <GlassButton href="#modules" variant="secondary" className="relative z-40">
                        See the Modules
                      </GlassButton>
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-sm text-white/55">
                      <span 
                        className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        Fastest win
                      </span>
                      <span className="text-white/35">•</span>
                      <span>Two minutes to try. Saves hours a week.</span>
                    </div>
                  </div>

                  {/* Right: home-style stat stack */}
                  <div className="lg:col-span-5 lg:pl-10">
                    <div className="space-y-7 text-right">
                      <div className="pb-6">
                        <div className="text-xl font-semibold tracking-tight text-white/90">Industry</div>
                        <div 
                          className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                          style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                        >
                          SPECIFIC
                        </div>
                        <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
                      </div>

                      <div className="pb-6">
                        <div className="text-xl font-semibold tracking-tight text-white/90">Built</div>
                        <div 
                          className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                          style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                        >
                          FROM EXPERIENCE
                        </div>
                        <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
                      </div>

                      <div className="pb-6">
                        <div className="text-xl font-semibold tracking-tight text-white/90">Designed</div>
                        <div 
                          className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                          style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                        >
                          FOR VOLUME
                        </div>
                        <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TICKER (Editorial, numbered, no pills) */}
          <section className="pb-12 relative z-10 -mt-12">
            <div className="border-y border-white/10">
              {/* Top gradient fade for seamless blend */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0B0C0F] to-transparent pointer-events-none z-10"></div>
              <div className="relative overflow-hidden py-5">
                {/* edge fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0B0C0F] to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0B0C0F] to-transparent z-10"></div>

                <div className="ticker group">
                  <div className="ticker__track">
                    {/* row 1 */}
                    <div className="ticker__row">
                      <span className="ticker__item">
                        <span 
                          className="text-[10px] tracking-[0.42em] text-white/40"
                          style={{ 
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          01
                        </span>
                        <span className="text-white/85 font-medium">Inspections</span>
                        <span className="text-white/55">Request / response / negotiation</span>
                        <span className="text-white/35">→</span>
                      </span>

                      <span className="ticker__dot"></span>

                      <span className="ticker__item">
                        <span 
                          className="text-[10px] tracking-[0.42em] text-white/40"
                          style={{ 
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          02
                        </span>
                        <span className="text-white/85 font-medium">Deadlines</span>
                        <span className="text-white/55">Extensions + lender pacing</span>
                        <span className="text-white/35">→</span>
                      </span>

                      <span className="ticker__dot"></span>

                      <span className="ticker__item">
                        <span 
                          className="text-[10px] tracking-[0.42em] text-white/40"
                          style={{ 
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          03
                        </span>
                        <span className="text-white/85 font-medium">Title</span>
                        <span className="text-white/55">Follow-ups + missing items</span>
                        <span className="text-white/35">→</span>
                      </span>

                      <span className="ticker__dot"></span>

                      <span className="ticker__item">
                        <span 
                          className="text-[10px] tracking-[0.42em] text-white/40"
                          style={{ 
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          04
                        </span>
                        <span className="text-white/85 font-medium">Escalations</span>
                        <span className="text-white/55">Save-the-deal communication</span>
                        <span className="text-white/35">→</span>
                      </span>

                      <span className="ticker__dot"></span>

                      <span className="ticker__item">
                        <span 
                          className="text-[10px] tracking-[0.42em] text-white/40"
                          style={{ 
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          05
                        </span>
                        <span className="text-white/85 font-medium">HOA / Condo</span>
                        <span className="text-white/55">Apps, docs, approvals</span>
                        <span className="text-white/35">→</span>
                      </span>
                    </div>

                    {/* row 2 duplicate for seamless loop */}
                    <div className="ticker__row" aria-hidden="true">
                      <span className="ticker__item">
                        <span 
                          className="text-[10px] tracking-[0.42em] text-white/40"
                          style={{ 
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          01
                        </span>
                        <span className="text-white/85 font-medium">Inspections</span>
                        <span className="text-white/55">Request / response / negotiation</span>
                        <span className="text-white/35">→</span>
                      </span>

                      <span className="ticker__dot"></span>

                      <span className="ticker__item">
                        <span 
                          className="text-[10px] tracking-[0.42em] text-white/40"
                          style={{ 
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          02
                        </span>
                        <span className="text-white/85 font-medium">Deadlines</span>
                        <span className="text-white/55">Extensions + lender pacing</span>
                        <span className="text-white/35">→</span>
                      </span>

                      <span className="ticker__dot"></span>

                      <span className="ticker__item">
                        <span 
                          className="text-[10px] tracking-[0.42em] text-white/40"
                          style={{ 
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          03
                        </span>
                        <span className="text-white/85 font-medium">Title</span>
                        <span className="text-white/55">Follow-ups + missing items</span>
                        <span className="text-white/35">→</span>
                      </span>

                      <span className="ticker__dot"></span>

                      <span className="ticker__item">
                        <span 
                          className="text-[10px] tracking-[0.42em] text-white/40"
                          style={{ 
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          04
                        </span>
                        <span className="text-white/85 font-medium">Escalations</span>
                        <span className="text-white/55">Save-the-deal communication</span>
                        <span className="text-white/35">→</span>
                      </span>

                      <span className="ticker__dot"></span>

                      <span className="ticker__item">
                        <span 
                          className="text-[10px] tracking-[0.42em] text-white/40"
                          style={{ 
                            fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          05
                        </span>
                        <span className="text-white/85 font-medium">HOA / Condo</span>
                        <span className="text-white/55">Apps, docs, approvals</span>
                        <span className="text-white/35">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            {/* WHAT'S INSIDE — four modules */}
            <section id="modules" className="py-14">
              <p
                className="text-xs tracking-[0.34em] text-white/50 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                What&apos;s inside
              </p>
              <h2 className="mt-4 max-w-[40ch] text-2xl sm:text-3xl font-semibold tracking-tight">
                Four modules. One operating system.
              </h2>
              <p className="mt-4 max-w-[64ch] text-sm leading-relaxed text-white/60 sm:text-base">
                Every module was built because I needed it. Then refined because my clients needed it better.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="border-t border-white/10 pt-6">
                  <p
                    className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    <span
                      style={{
                        fontVariantNumeric: "slashed-zero",
                        fontFeatureSettings: '"zero"',
                      }}
                    >
                      01
                    </span>{" "}
                    — BossyEmail
                  </p>
                  <p className="mt-2 text-[10px] tracking-[0.2em] text-emerald-400/90 uppercase">Available now</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    320+ templates and an AI generator trained on real transaction scenarios. Inspections, delays,
                    escalations, save-the-deal moments.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p
                    className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    <span
                      style={{
                        fontVariantNumeric: "slashed-zero",
                        fontFeatureSettings: '"zero"',
                      }}
                    >
                      02
                    </span>{" "}
                    — ClauseVault
                  </p>
                  <p className="mt-2 text-[10px] tracking-[0.2em] text-emerald-400/90 uppercase">Available now</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    A library of battle-tested contract language. Search, copy, paste. Never stare at a blank addendum
                    box again.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p
                    className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    <span
                      style={{
                        fontVariantNumeric: "slashed-zero",
                        fontFeatureSettings: '"zero"',
                      }}
                    >
                      03
                    </span>{" "}
                    — Deadline tracking
                  </p>
                  <p className="mt-2 text-[10px] tracking-[0.2em] text-white/40 uppercase">Coming soon</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    Every contractual date, flagged before it becomes a crisis. Pre-built for Florida statutory
                    timelines.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p
                    className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    <span
                      style={{
                        fontVariantNumeric: "slashed-zero",
                        fontFeatureSettings: '"zero"',
                      }}
                    >
                      04
                    </span>{" "}
                    — Transaction reports
                  </p>
                  <p className="mt-2 text-[10px] tracking-[0.2em] text-white/40 uppercase">Coming soon</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    One-click summaries for agents, brokers, attorneys, and lenders. Everything they need. None of the
                    noise.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <GlassButton href="https://bossyemail.com" variant="primary" external>
                  Try CloseAdmin
                </GlassButton>
                <GlassButton href="https://bossyemail.com/pricing" variant="secondary" external>
                  See pricing
                </GlassButton>
              </div>
            </section>

            <div className="h-px bg-white/10"></div>

            {/* PROOF */}
            <section id="proof" className="py-14">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-4">
                  <p
                    className="text-xs tracking-[0.34em] text-white/50 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    Proof
                  </p>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                    Built by a TC. Not a product team.
                  </h2>
                  <p className="mt-3 text-sm text-white/60 max-w-[86ch] leading-relaxed">
                    This wasn&apos;t designed to sound good. It was designed to hold up under pressure — inside real
                    transactions, with real deadlines, and real consequences.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <div className="border-b border-white/10 py-8">
                    <div className="grid sm:grid-cols-3 gap-8">
                      <div className="border-t border-white/10 pt-6">
                        <div className="text-white/85 font-semibold">Built from 3,000+ files</div>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">
                          Every module solves a problem I&apos;ve hit in real transactions. Not a problem a roadmap
                          predicted.
                        </p>
                      </div>

                      <div className="border-t border-white/10 pt-6">
                        <div className="text-white/85 font-semibold">No vendor bloat</div>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">
                          No features nobody uses. No integrations that break. One dashboard. One operator.
                        </p>
                      </div>

                      <div className="border-t border-white/10 pt-6">
                        <div className="text-white/85 font-semibold">One person&apos;s standards</div>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">
                          I use this every day. If it&apos;s not good enough for my own clients, it&apos;s not good enough
                          to ship.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-white/55 max-w-[86ch]">
                    If your business runs on volume, you don&apos;t need more software. You need software built by
                    someone who&apos;s actually closed the files.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* FINAL CTA */}
          <section className="mx-auto max-w-6xl px-6 sm:px-10 py-16 pb-24">
            <div className="border border-white/10 bg-white/[0.02] rounded-3xl px-8 sm:px-12 py-12">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-8">
                  <p
                    className="text-xs tracking-[0.34em] text-white/50 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    Next step
                  </p>
                  <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                    Ready to run your operation like a real business?
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-[72ch] sm:text-base">
                    Start free. No credit card. Full access to every module. If it saves you time, you&apos;ll know in a
                    week. If it doesn&apos;t, close the tab and forget you met me.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col items-stretch gap-3 sm:flex-row lg:flex-col lg:justify-self-end lg:items-end">
                  <GlassButton href="https://bossyemail.com" variant="primary" external>
                    Try CloseAdmin →
                  </GlassButton>
                  <GlassButton href="https://bossyemail.com/pricing" variant="secondary" external>
                    See pricing
                  </GlassButton>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
