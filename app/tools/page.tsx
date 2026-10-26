"use client";

import Link from "next/link";
import StickyNavigation from "@/components/StickyNavigation";
import Footer from "@/components/Footer";
import { GlassButton } from "@/components/ui/GlassButton";

export default function ToolsPage() {
  return (
    <>
    <div className="min-h-screen text-white antialiased" style={{ backgroundColor: '#0B0C0F' }}>
      {/* vignette / depth (cohesive with your other pages) */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_620px_at_12%_-10%,rgba(255,255,255,0.06),transparent_58%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_86%_0%,rgba(201,194,255,0.07),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_120%,rgba(0,0,0,0.9),transparent_62%)]"></div>
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      <StickyNavigation />

      {/* HERO */}
      <section className="relative pt-20 sm:pt-24 pb-14 overflow-hidden w-full">
        {/* Background Image - full width bleed */}
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
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Gradient overlay at bottom for blending */}
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/80 via-[#0B0C0F]/60 via-[#0B0C0F]/30 to-transparent"></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 pt-24 lg:pt-32">
              <p 
                className="text-xs tracking-[0.34em] text-white/50 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                Tools
              </p>

              <h1 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">
                Tools built from real transactions<br />
                <span className="text-white/70">— not templates.</span>
              </h1>

              <p className="mt-6 text-sm leading-[1.7] text-white/70 max-w-[64ch] sm:text-base sm:leading-[1.75]">
                Every tool here exists because something broke in a real file<br />
                — and I refused to let it happen twice.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <GlassButton href="#bossyemail" variant="primary">
                  Start with BossyEmail
                </GlassButton>
                <GlassButton href="#bossyemail" variant="secondary">
                  Browse the tools
                </GlassButton>
              </div>
            </div>

            {/* Right: editorial stats */}
            <div className="lg:col-span-5 lg:pl-10">
              <div className="pt-24 lg:pt-32 space-y-7 text-right">
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
      </section>

      {/* TICKER (rotating index right after hero) */}
      <section className="mt-8 pb-20 lg:pb-24">
        {/* top hairline */}
        <div className="h-px w-full bg-white/10"></div>

        <div className="relative overflow-hidden">
          <div className="ticker-edge-to-edge flex items-center gap-12 whitespace-nowrap py-4 px-6 text-xs tracking-[0.22em] text-white/70 sm:px-10">
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
              &nbsp;TC SERVICES
            </span>
            {/* duplicates for seamless infinite loop */}
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
              &nbsp;TC SERVICES
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
              &nbsp;TC SERVICES
            </span>
          </div>
        </div>

        {/* bottom hairline */}
        <div className="h-px w-full bg-white/10"></div>
      </section>

      <main className="relative mx-auto max-w-6xl px-6 sm:px-10" style={{ backgroundColor: '#0B0C0F' }}>

        {/* SECTION: BossyEmail */}
        <section id="bossyemail" className="py-14">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p 
                className="text-xs tracking-[0.34em] text-white/50 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                <span 
                  style={{ 
                    fontVariantNumeric: 'slashed-zero',
                    fontFeatureSettings: '"zero"',
                  }}
                >
                  01
                </span>
                {' '}— BOSSYEMAIL
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                Stop rewriting the same email 47 times.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-white/10 py-6">
                <p className="text-white/70 leading-relaxed max-w-[86ch]">
                  Ready-to-send templates plus an AI generator trained on real transaction chaos —
                  inspections, delays, escalations, and save-the-deal moments.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                <div className="border-t border-white/10 pt-6">
                  <div 
                    className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    Built for
                  </div>
                  <div className="mt-3 text-sm text-white/70">Listing, escrow, and closing chaos.</div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div 
                    className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    Outcome
                  </div>
                  <div className="mt-3 text-sm text-white/70">Cleaner communication. Fewer mistakes.</div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div 
                    className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    Time
                  </div>
                  <div className="mt-3 text-sm text-white/70">Two minutes to try. Hours saved weekly.</div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <GlassButton href="/closeadmin" variant="primary">
                  Try BossyEmail
                </GlassButton>
                <GlassButton href="/upgrade" variant="secondary">
                  View templates
                </GlassButton>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-white/10"></div>

        {/* SECTION: ClauseVault */}
        <section id="clausevault" className="py-14">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p 
                className="text-xs tracking-[0.34em] text-white/50 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                <span 
                  style={{ 
                    fontVariantNumeric: 'slashed-zero',
                    fontFeatureSettings: '"zero"',
                  }}
                >
                  02
                </span>
                {' '}— CLAUSEVAULT
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                Contract clarity — without playing attorney.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-white/10 py-6">
                <p className="text-white/70 leading-relaxed max-w-[86ch]">
                  Deal-support clauses built around Florida&apos;s As-Is framework —
                  designed to reduce ambiguity, set expectations, and keep files moving when things get gray.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                <div className="border-t border-white/10 pt-6">
                  <div 
                    className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    Designed to
                  </div>
                  <div className="mt-3 text-sm text-white/70">Reduce ambiguity and disputes.</div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div 
                    className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    Outcome
                  </div>
                  <div className="mt-3 text-sm text-white/70">Stronger paper trails.</div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div 
                    className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    Use case
                  </div>
                  <div className="mt-3 text-sm text-white/70">When contract language isn&apos;t enough.</div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <GlassButton href="/clausevault" variant="primary">
                  Explore ClauseVault
                </GlassButton>
                <GlassButton href="/clausevault" variant="secondary">
                  Browse categories
                </GlassButton>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-white/10"></div>

        {/* SECTION: TC */}
        <section id="tc" className="py-14 pb-24">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p 
                className="text-xs tracking-[0.34em] text-white/50 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                <span 
                  style={{ 
                    fontVariantNumeric: 'slashed-zero',
                    fontFeatureSettings: '"zero"',
                  }}
                >
                  03
                </span>
                {' '}— TC SERVICES
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                Transaction coordination for agents who refuse to compromise.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="border-y border-white/10 py-6">
                <p className="text-white/70 leading-relaxed max-w-[86ch]">
                  Licensed, high-precision transaction coordination designed to protect deadlines, documentation,
                  and reputation — under real volume. Limited capacity. Select clients only.
                </p>
              </div>

              <div className="mt-10">
                <GlassButton href="/elevate" variant="secondary">
                  Check availability
                </GlassButton>
              </div>

              <p className="mt-8 text-sm text-white/55 max-w-[86ch]">
                If you&apos;re protecting a brand — not just chasing closings — this is the layer that keeps everything quiet.
              </p>
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
