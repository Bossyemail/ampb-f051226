'use client';

import { useEffect, useRef } from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import { GlassButton } from '@/components/ui/GlassButton';
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
              <source src="/videos/office-background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30 sm:bg-black/30 md:bg-black/45" />
            {/* Gradient blend at bottom of hero */}
            <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/70 via-[#0B0C0F]/40 via-[#0B0C0F]/20 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center pt-64 z-20">
              <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 relative z-30">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-8">
                    <p 
                      className="text-xs tracking-[0.34em] text-white/50 uppercase"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      TC Services
                    </p>

                    <h1 className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight">
                      Transaction coordination for<br />
                      agents who refuse to compromise.
                    </h1>

                    <p className="mt-8 text-sm leading-[1.7] text-white/70 max-w-[72ch] sm:text-base sm:leading-[1.75]">
                      Licensed, high-precision coordination designed to protect your reputation,<br />
                      timelines, and peace of mind — under real volume.
                    </p>
                    <p className="mt-4 text-sm leading-[1.7] text-white/70 max-w-[72ch] sm:text-base sm:leading-[1.75]">
                      This isn&apos;t checklist support.
                      <br />
                      It&apos;s calm execution from contract to close.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                      <GlassButton
                        href="https://form.jotform.com/252496909826069"
                        variant="primary"
                        external
                        className="relative z-40"
                        onClick={() => handleButtonClick('Request availability', 'Hero')}
                      >
                        Request availability
                      </GlassButton>
                      <span 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        Limited capacity · Fit-based
                      </span>
                    </div>
                  </div>

                  {/* Right: home-style stat stack */}
                  <div className="lg:col-span-4 lg:pl-6">
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

          <div className="mx-auto max-w-6xl px-6 sm:px-10 -mt-12 relative z-10">
            {/* Top gradient fade for seamless blend */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0B0C0F] to-transparent pointer-events-none z-10"></div>
            <div className="mt-14 h-px bg-white/10 relative z-20"></div>

            {/* WHAT THIS IS */}
            <section className="py-12">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <p 
                  className="text-xs tracking-[0.34em] text-white/50 uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  What this is
                </p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                  High-precision execution — not &quot;help.&quot;
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="py-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="pt-6">
                      <div 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        01
                      </div>
                      <div className="mt-3 font-semibold text-white/85">Licensed coordination</div>
                      <p className="mt-2 text-sm text-white/60">Deep contract fluency. Clean execution.</p>
                    </div>
                    <div className="pt-6">
                      <div 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        02
                      </div>
                      <div className="mt-3 font-semibold text-white/85">Deadline + document control</div>
                      <p className="mt-2 text-sm text-white/60">Tracking, packaging, and risk flagged early.</p>
                    </div>
                    <div className="border-t border-white/10 pt-6">
                      <div 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        03
                      </div>
                      <div className="mt-3 font-semibold text-white/85">Backend protection</div>
                      <p className="mt-2 text-sm text-white/60">Built for agents closing real volume.</p>
                    </div>
                    <div className="border-t border-white/10 pt-6">
                      <div 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >
                        04
                      </div>
                      <div className="mt-3 font-semibold text-white/85">Not a marketplace service</div>
                      <p className="mt-2 text-sm text-white/60">Not a low-cost add-on. Fit matters.</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>

            <div className="h-px bg-white/10"></div>

            {/* SCOPE */}
            <section className="py-12">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <p 
                  className="text-xs tracking-[0.34em] text-white/50 uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  Scope
                </p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                  The outcome is a quiet closing.
                </h2>
                <p className="mt-4 text-white/65 leading-relaxed">
                  You&apos;re hiring control: deadlines, documentation, and clear communication — handled like it matters.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="py-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="pt-6">
                      <p 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
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
                        {' '}— Deadline control
                      </p>
                      <p className="mt-3 text-sm text-white/60">Tracking with proactive reminders.</p>
                    </div>
                    <div className="pt-6">
                      <p 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
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
                        {' '}— Document discipline
                      </p>
                      <p className="mt-3 text-sm text-white/60">Collection, compliance packaging, audit-ready files.</p>
                    </div>
                    <div className="border-t border-white/10 pt-6">
                      <p 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
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
                        {' '}— Coordination
                      </p>
                      <p className="mt-3 text-sm text-white/60">Title, lenders, agents, vendors — aligned.</p>
                    </div>
                    <div className="border-t border-white/10 pt-6">
                      <p 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
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
                          04
                        </span>
                        {' '}— Risk flagged early
                      </p>
                      <p className="mt-3 text-sm text-white/60">Before it becomes expensive or public.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-l border-white/10 pl-6">
                  <div 
                    className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    Important
                  </div>
                  <p className="mt-3 text-sm text-white/60">
                    This is designed to reduce fires — not absorb them. Prevention is the product.
                  </p>
                </div>

                <div className="mt-10">
                  <GlassButton 
                    href="https://form.jotform.com/252496909826069" 
                    variant="primary"
                    external
                    onClick={() => handleButtonClick('Request availability', 'Scope')}
                  >
                    Request availability
                  </GlassButton>
                </div>
              </div>
              </div>
            </section>

            <div className="h-px bg-white/10"></div>

            {/* FIT MATTERS */}
            <section className="py-12">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <p 
                  className="text-xs tracking-[0.34em] text-white/50 uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  Fit matters
                </p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                  This isn&apos;t for everyone — on purpose.
                </h2>
                <p className="mt-4 text-white/65 leading-relaxed">
                  This works best when expectations, communication, and responsibility are clear.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="border-b border-white/10 py-8">
                    <div 
                      className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      This is for you if
                    </div>
                    <ul className="mt-6 space-y-4 text-sm text-white/65">
                      <li><span 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >01</span> <span className="ml-2">You close consistent volume and want an operator — not &quot;help.&quot;</span></li>
                      <li><span 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >02</span> <span className="ml-2">Deadlines, documentation, and your name matter.</span></li>
                      <li><span 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >03</span> <span className="ml-2">You want fewer fires, fewer surprises, fewer emergencies.</span></li>
                      <li><span 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >04</span> <span className="ml-2">You respect process — systems beat heroics.</span></li>
                    </ul>
                  </div>

                  <div className="border-b border-white/10 py-8">
                    <div 
                      className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      This is not for you if
                    </div>
                    <ul className="mt-6 space-y-4 text-sm text-white/65">
                      <li><span 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >01</span> <span className="ml-2">You&apos;re shopping for the cheapest TC.</span></li>
                      <li><span 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >02</span> <span className="ml-2">You want last-minute saves without a process.</span></li>
                      <li><span 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >03</span> <span className="ml-2">Deadlines are &quot;flexible suggestions.&quot;</span></li>
                      <li><span 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ 
                          fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                          fontVariantNumeric: 'slashed-zero',
                          fontFeatureSettings: '"zero"',
                        }}
                      >04</span> <span className="ml-2">You want chaos absorbed instead of eliminated.</span></li>
                    </ul>
                  </div>
                </div>

                <p className="mt-8 text-sm text-white/60">
                  If the first list felt like relief — and the second made you uncomfortable — we&apos;re probably a fit.
                </p>
              </div>
              </div>
            </section>

            <div className="h-px bg-white/10"></div>

            {/* RULES + CAPACITY (compressed) */}
            <section className="py-12">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <p 
                  className="text-xs tracking-[0.34em] text-white/50 uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  Rules + capacity
                </p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                  Structure is the advantage.
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="border-b border-white/10 py-8">
                  <div className="grid sm:grid-cols-2 gap-10">
                    <div>
                      <div 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        How I work
                      </div>
                      <ul className="mt-5 space-y-3 text-sm text-white/65">
                        <li>I run the file proactively.</li>
                        <li>Communication stays documented and professional.</li>
                        <li>Risks are escalated early.</li>
                        <li>Everything is verified and logged.</li>
                      </ul>
                    </div>
                    <div>
                      <div 
                        className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                        style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                      >
                        What I don&apos;t do
                      </div>
                      <ul className="mt-5 space-y-3 text-sm text-white/65">
                        <li>Chase docs without accountability.</li>
                        <li>Cut corners for speed.</li>
                        <li>Absorb chaos from ignored deadlines.</li>
                        <li>Operate in gray areas.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-8">
                    <div 
                      className="text-[10px] tracking-[0.42em] text-white/45 uppercase"
                      style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                    >
                      Capacity
                    </div>
                    <p className="mt-3 text-sm text-white/60 max-w-[86ch]">
                      I cap active files to protect quality, speed, and accuracy.
                      New clients are accepted by timing + fit.
                      When capacity is full, inquiries are waitlisted — not rushed.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </section>
          </div>

          {/* FINAL CTA */}
          <section id="availability" className="mx-auto max-w-6xl px-6 sm:px-10 py-16 pb-24">
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
                    If this felt like relief, we should talk.
                  </h3>
                  <p className="mt-3 text-white/70 max-w-[72ch]">
                    Include your monthly volume, market, transaction types, and ideal start timeframe.
                    We&apos;ll confirm fit quickly — and respect everyone&apos;s time.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:justify-self-end flex gap-3">
                  <GlassButton 
                    href="https://form.jotform.com/252496909826069" 
                    variant="primary"
                    external
                    className="text-center"
                    onClick={() => handleButtonClick('Request availability', 'Final CTA')}
                  >
                    Request availability
                  </GlassButton>
                  <GlassButton 
                    href="/tools" 
                    variant="secondary"
                    className="text-center"
                    onClick={() => handleButtonClick('Browse tools', 'Final CTA')}
                  >
                    Browse tools
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
