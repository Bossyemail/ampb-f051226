"use client";
import React from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import { GlassButton } from '@/components/ui/GlassButton';

export default function UpgradePage() {

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
                      BossyEmail
                    </p>

                    <h1 className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight">
                      Stop writing real estate<br />
                      emails from scratch.
                    </h1>

                    <p className="mt-8 text-sm leading-[1.7] text-white/70 max-w-[68ch] sm:text-base sm:leading-[1.75]">
                      BossyEmail gives you ready-to-send templates and an AI generator trained on the messages that actually happen in real transactions — inspections, delays, escalations, and &quot;please don&apos;t blow up the deal&quot; moments.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4 relative z-40">
                      <GlassButton href="/signup" variant="primary" className="relative z-40">
                        Try BossyEmail
                      </GlassButton>
                      <GlassButton href="#how" variant="secondary" className="relative z-40">
                        See how it works
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
            {/* HOW IT WORKS (editorial, not boxy) */}
            <section id="how" className="py-14">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <p 
                  className="text-xs tracking-[0.34em] text-white/50 uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  How it works
                </p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                  You pick the moment.<br />BossyEmail gives you the message.
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="border-b border-white/10 py-8">
                  <div className="grid sm:grid-cols-3 gap-8">
                    <div className="border-t border-white/10 pt-6">
                      <p 
                        className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        }}
                      >
                        <span 
                          style={{ 
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          01
                        </span>
                        {' '}— Choose a scenario
                      </p>
                      <p className="mt-3 text-sm text-white/60">
                        Inspections, delays, financing, title, HOA, repairs, escalation.
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <p 
                        className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        }}
                      >
                        <span 
                          style={{ 
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          02
                        </span>
                        {' '}— Generate the email
                      </p>
                      <p className="mt-3 text-sm text-white/60">
                        Clear tone. Correct structure. No &quot;wait — what did we say?&quot; moments.
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <p 
                        className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        }}
                      >
                        <span 
                          style={{ 
                            fontVariantNumeric: 'slashed-zero',
                            fontFeatureSettings: '"zero"',
                          }}
                        >
                          03
                        </span>
                        {' '}— Send with confidence
                      </p>
                      <p className="mt-3 text-sm text-white/60">
                        Cleaner paper trails. Less back-and-forth. Less rework.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <GlassButton href="/signup" variant="primary">
                    Try BossyEmail
                  </GlassButton>
                  <GlassButton href="#proof" variant="secondary">
                    See proof
                  </GlassButton>
                </div>
              </div>
            </div>
            </section>

            <div className="h-px bg-white/10"></div>

            {/* PROOF (short, editorial strip) */}
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
                  Built by a TC. Not a copywriter.
                </h2>
                <p className="mt-3 text-sm text-white/60 max-w-[86ch]">
                  This wasn&apos;t designed to sound good.<br />
                  It was designed to hold up under pressure.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="border-b border-white/10 py-8">
                  <div className="grid sm:grid-cols-3 gap-8">
                    <div className="border-t border-white/10 pt-6">
                      <div className="mt-3 text-white/85 font-semibold">Less back-and-forth</div>
                      <p className="mt-2 text-sm text-white/60">Clear communication reduces mistakes.</p>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <div className="mt-3 text-white/85 font-semibold">Stronger paper trails</div>
                      <p className="mt-2 text-sm text-white/60">Messages hold up when things get tense.</p>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <div className="mt-3 text-white/85 font-semibold">Hours recovered</div>
                      <p className="mt-2 text-sm text-white/60">Stop rewriting the same email 47 times.</p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm text-white/55 max-w-[86ch]">
                  If your business runs on volume, you don&apos;t need more hustle. You need repeatable communication that doesn&apos;t create new fires.
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
                    Try BossyEmail. Keep the deal moving.
                  </h3>
                  <p className="mt-3 text-white/70 max-w-[72ch]">
                    It&apos;s the fastest win in this ecosystem: less typing, fewer mistakes, cleaner communication — immediately.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:justify-self-end flex gap-3">
                  <GlassButton href="/signup" variant="primary">
                    Try BossyEmail
                  </GlassButton>
                  <GlassButton href="/tools" variant="secondary">
                    See all tools
                  </GlassButton>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="py-24 sm:py-32"></div>

        <Footer />
      </div>
    </>
  );
}
