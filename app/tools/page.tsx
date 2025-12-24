"use client";

import Link from "next/link";
import StickyNavigation from "@/components/StickyNavigation";
import Footer from "@/components/Footer";

export default function ToolsPage() {
  return (
    <div className="min-h-screen text-white antialiased" style={{ backgroundColor: '#0E0F11' }}>
      <StickyNavigation />

      {/* Tools Hero */}
      <section className="relative pt-28 pb-32 sm:pt-36 sm:pb-40 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/clausevault-bg-11.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        
        {/* Dark overlay to darken image for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Gradient overlay at bottom for blending */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E0F11] via-[#0E0F11]/80 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <p 
              className="text-xs tracking-[0.28em] text-white/55"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              }}
            >
              TOOLS
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tools built from real transactions — not templates.
            </h1>

            <div className="mt-10 flex gap-2 overflow-x-auto pb-2" style={{ WebkitOverflowScrolling: 'touch' }}>
              <a href="#bossyemail" className="inline-flex items-center whitespace-nowrap rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                BossyEmail
              </a>
              <a href="#clausevault" className="inline-flex items-center whitespace-nowrap rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                ClauseVault
              </a>
              <a href="#tc" className="inline-flex items-center whitespace-nowrap rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-xs text-white/75">
                TC Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-10">

        {/* Tools Cards */}
        <section className="py-24 sm:py-32">
          <div className="space-y-6">
            {/* BossyEmail (Primary) */}
            <div id="bossyemail" className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 sm:p-12 shadow-[0_24px_90px_rgba(0,0,0,.55)]">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <p 
                    className="text-2xl sm:text-3xl font-mono tracking-wider text-white/55"
                    style={{
                      fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                      fontVariantNumeric: 'slashed-zero',
                      fontFeatureSettings: '"zero"',
                    }}
                  >
                    01
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">BossyEmail</h2>
                  <p className="mt-2 text-sm text-white/60">Deal-safe emails in seconds.</p>
                  <div className="mt-6 h-px bg-white/10"></div>
                  <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg max-w-2xl">
                    Deal-safe emails for real estate agents — instantly. When wording matters, guessing isn't an option.
                    BossyEmail tells you exactly what to say in inspections, follow-ups, and escalations.
                  </p>
                  <p className="mt-6 text-sm text-white/60">
                    Built from real transactions.
                  </p>
                </div>

                <div className="shrink-0">
                  <a 
                    href="/upgrade" 
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium hover:bg-white/90"
                    style={{ color: '#000000' }}
                  >
                    Try BossyEmail →
                  </a>
                </div>
              </div>
            </div>

            {/* ClauseVault */}
            <div id="clausevault" className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 sm:p-12">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <p 
                    className="text-2xl sm:text-3xl font-mono tracking-wider text-white/55"
                    style={{
                      fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                      fontVariantNumeric: 'slashed-zero',
                      fontFeatureSettings: '"zero"',
                    }}
                  >
                    02
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">ClauseVault</h2>
                  <p className="mt-2 text-sm text-white/60">Contract clarity for gray areas.</p>
                  <div className="mt-6 h-px bg-white/10"></div>
                  <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg max-w-2xl">
                    Contract language for real-world scenarios. A curated library of deal-support clauses built around
                    Florida's As-Is framework — designed to reduce ambiguity and support clearer communication.
                  </p>
                  <p className="mt-6 text-sm text-white/60">
                    Built from real transactions.
                  </p>
                </div>

                <div className="shrink-0">
                  <a 
                    href="/clausevault" 
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.06]"
                  >
                    Go to ClauseVault →
                  </a>
                </div>
              </div>
            </div>

            {/* TC Services */}
            <div id="tc" className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 sm:p-12">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-2xl">
                  <p 
                    className="text-2xl sm:text-3xl font-mono tracking-wider text-white/55"
                    style={{
                      fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                      fontVariantNumeric: 'slashed-zero',
                      fontFeatureSettings: '"zero"',
                    }}
                  >
                    03
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Transaction Coordination</h2>
                  <p className="mt-2 text-sm text-white/60">White-glove execution, limited capacity.</p>
                  <div className="mt-6 h-px bg-white/10"></div>
                  <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg max-w-2xl">
                    Backend support for producing agents. White-glove file management for professionals who want fewer
                    fires and fewer surprises — by availability.
                  </p>
                  <p className="mt-6 text-sm text-white/60">
                    Built from real transactions.
                  </p>
                </div>

                <div className="shrink-0">
                  <a 
                    href="/elevate" 
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-sm font-medium text-white/90 hover:bg-white/[0.06]"
                  >
                    View TC Services →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Start Here Routing Close */}
        <section className="py-24 sm:py-32">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 sm:p-12">
            <div className="max-w-3xl">
              <p 
                className="font-mono text-xs tracking-[0.28em] text-white/55"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                START HERE
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                If you only use one tool from this page, make it this one.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                BossyEmail removes the friction that slows deals down — the second-guessing, the rewrites, the "how do I say this?" moments that quietly eat your time and attention.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a 
                  href="/upgrade"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium hover:bg-white/90"
                  style={{ color: '#000000' }}
                >
                  Get BossyEmail →
                </a>
                <p className="text-sm text-white/55">Deal-safe emails in seconds.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
