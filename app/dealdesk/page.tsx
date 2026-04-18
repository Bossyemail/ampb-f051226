"use client";

import { useEffect, Suspense } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import { GlassButton } from '@/components/ui/GlassButton';

function DealDeskContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isLoaded: userLoaded } = useUser();
  const { isSignedIn } = useAuth();

  // Check if user should be redirected to app
  useEffect(() => {
    if (!userLoaded) return;

    // If user is signed in and has access, redirect to app
    if (isSignedIn && user) {
      // Check for success parameter from Stripe (new purchase)
      const success = searchParams.get('success');
      
      // Admin users get automatic access
      const adminEmails = ['hello@aylenmontenegro.com', 'aylenfrommiami@gmail.com', 'aylen@bossyemail.com'];
      const isAdmin = user.emailAddresses?.some(email => 
        adminEmails.includes(email.emailAddress)
      );
      
      if (success === 'true' || user.publicMetadata?.clausevaultAccess || isAdmin) {
        console.log('User has access, redirecting to app');
        router.push('/clausevault/app');
        return;
      }
    }
  }, [userLoaded, user, isSignedIn, searchParams, router]);




  // Show landing page
  return (
    <div className="min-h-screen bg-[#0b0c0f] text-white">
      <StickyNavigation />

      {/* HERO - LOGIN PORTAL */}
      <section className="relative pt-20 sm:pt-24 pb-14 overflow-hidden w-full min-h-[600px]">
        {/* Background Image - full width bleed */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/clausevault/clausevault-bg-18.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        
        {/* Dark overlay to darken image for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Gradient overlay on right side */}
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#0B0C0F] via-[#0B0C0F]/70 to-transparent"></div>
        
        {/* Gradient overlay at bottom for blending into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/80 via-[#0B0C0F]/60 via-[#0B0C0F]/30 to-transparent"></div>
        
        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Product name and auth buttons */}
            <div className="lg:col-span-5 pt-24 lg:pt-32 relative z-20">
              <p
                className="text-xs tracking-[0.34em] text-white/50 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                DEALDESK
              </p>

              <h1 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">
                Florida&apos;s first compliance engine for real estate.
              </h1>

              <p className="mt-6 text-sm leading-[1.75] text-white/70 sm:text-base max-w-[68ch]">
                Every deal, every disclosure, every statutory trigger — evaluated automatically and recorded with a
                timestamp. Built for brokers, teams, and TCs who can&apos;t afford a missed form.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
                <GlassButton href="#how-it-works" variant="primary">
                  See How It Works
                </GlassButton>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="lg:col-span-3 lg:col-start-10 relative z-20">
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
                  <div className="text-xl font-semibold tracking-tight text-white/90">Built from</div>
                  <div 
                    className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    EXPERIENCE
                  </div>
                  <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
                </div>

                <div className="pb-6">
                  <div className="text-xl font-semibold tracking-tight text-white/90">Designed for</div>
                  <div 
                    className="mt-1 text-[10px] tracking-[0.28em] text-white/55"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    VOLUME
                  </div>
                  <div className="mt-4 ml-auto h-px w-1/2 bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative bg-[#0b0c0f]">
        {/* Intro — sits above HOW IT WORKS */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-16">
            <p className="max-w-[72ch] text-sm leading-relaxed text-white/70 sm:text-base sm:leading-relaxed">
              Florida has over 40 statutory and suggested disclosures depending on property type, financing, HOA status,
              year built, and occupancy. Miss one, and the closing delays. Miss a serious one, and the E&amp;O claim
              starts. DealDesk knows every trigger — and tells you exactly which forms apply to this deal, with a legal
              citation for each one.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="mx-auto max-w-6xl px-6 sm:px-10 pb-16 pt-2">
          <p
            className="text-xs tracking-[0.34em] text-white/50 uppercase"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            How it works
          </p>
          <h2 className="mt-4 max-w-[40ch] text-2xl font-semibold tracking-tight sm:text-3xl">
            Enter the deal. Run the rules. Move with confidence.
          </h2>
          <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-white/60 sm:text-base">
            DealDesk isn&apos;t a checklist. It&apos;s an engine. Every Determination is a timestamped compliance record
            you can hand to a regulator, an auditor, or a plaintiff&apos;s attorney without flinching.
          </p>

          <div className="mt-10 grid gap-8 border-y border-white/10 py-10 sm:grid-cols-3">
            <div className="border-t border-white/10 pt-6">
              <p
                className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                <span style={{ fontVariantNumeric: "slashed-zero", fontFeatureSettings: '"zero"' }}>01</span> — Enter the
                deal facts
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Property type. Financing. HOA status. Year built. Occupancy. Thirty seconds of input. No interpretation
                required, no statute to memorize.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p
                className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                <span style={{ fontVariantNumeric: "slashed-zero", fontFeatureSettings: '"zero"' }}>02</span> — DealDesk
                evaluates
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Florida statutory triggers, brokerage-specific overlays, and best-practice disclosures — all
                cross-referenced against the deal facts you entered. Rules run in milliseconds.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <p
                className="text-[10px] tracking-[0.34em] text-white/45 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                <span style={{ fontVariantNumeric: "slashed-zero", fontFeatureSettings: '"zero"' }}>03</span> — Receive
                the Determination
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                A timestamped compliance record listing every required form by statute, every suggested form by deal type,
                and the legal citation behind each one. Signed, sealed, audit-ready.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <GlassButton
              href="mailto:hello@aylenmontenegro.com?subject=DealDesk%20demo%20request"
              variant="primary"
              external
            >
              Request a Demo
            </GlassButton>
          </div>
        </section>

        <div className="h-px w-full bg-white/10" />

        {/* WHY THIS EXISTS */}
        <section id="why-this-exists" className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
          <p
            className="text-xs tracking-[0.34em] text-white/50 uppercase"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            Why this exists
          </p>
          <h2 className="mt-4 max-w-[40ch] text-2xl font-semibold tracking-tight sm:text-3xl">
            What a missed disclosure actually costs.
          </h2>
          <p className="mt-4 max-w-[72ch] text-sm leading-relaxed text-white/60 sm:text-base">
            This isn&apos;t theoretical. These are the real outcomes I&apos;ve watched unfold across 3,000+ Florida
            transactions.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="border-t border-white/10 pt-6">
              <div className="font-semibold text-white/90">The closing</div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Delays of 2-6 weeks while addenda are re-executed. Inspection periods reopen. Financing clocks reset.
                Rate locks expire. Deals that should have closed in 30 days drag to 75 — and sometimes fall apart
                entirely in the process.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <div className="font-semibold text-white/90">The agent</div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                E&amp;O claims in Florida average $20,000-$50,000 per incident. Carriers routinely raise premiums or drop
                coverage after two claims. Every missed disclosure is a resume item — and regulators don&apos;t forget.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <div className="font-semibold text-white/90">The brokerage</div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Vicarious liability on every transaction an agent runs under your license. One missed disclosure surfaced
                in an audit can trigger a full file review. FREC fines don&apos;t cap out. Neither does reputational
                damage.
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-[72ch] text-sm leading-relaxed text-white/55 sm:text-base">
            DealDesk isn&apos;t software. It&apos;s the paper trail that proves you did the work — before anyone asks.
          </p>
        </section>

        <div className="h-px w-full bg-white/10" />

        {/* BUILT FOR */}
        <section id="built-for" className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
          <p
            className="text-xs tracking-[0.34em] text-white/50 uppercase"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            Built for
          </p>
          <h2 className="mt-4 max-w-[40ch] text-2xl font-semibold tracking-tight sm:text-3xl">
            If your license is on the line, this is for you.
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="border-t border-white/10 pt-6">
              <div className="font-semibold text-white/90">Brokers</div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Deploy firm-wide disclosure rules that apply to every agent automatically. Reduce E&amp;O exposure across
                the roster. Sleep through audits. Onboard new agents without re-teaching Florida statute from scratch.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <div className="font-semibold text-white/90">Team leads</div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Every agent on your team produces the same compliance output — regardless of tenure. Your two-year agent
                gets the same rigor as your twenty-year veteran. The brand stays intact, even as you scale.
              </p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <div className="font-semibold text-white/90">Transaction coordinators</div>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Stop being the last line of defense on forms the agent forgot. DealDesk catches gaps before the file ever
                reaches your desk, so you&apos;re coordinating transactions instead of cleaning up after them.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-white/10" />

        {/* WHY TRUST THIS */}
        <section id="why-trust" className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
          <p
            className="text-xs tracking-[0.34em] text-white/50 uppercase"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            Why trust this
          </p>
          <h2 className="mt-4 max-w-[40ch] text-2xl font-semibold tracking-tight sm:text-3xl">
            Built by someone who&apos;s lived the liability.
          </h2>
          <div className="mt-6 max-w-[72ch] space-y-4 text-sm leading-relaxed text-white/65 sm:text-base">
            <p>
              I&apos;ve run 3,000+ Florida transactions across two decades. I&apos;ve watched agents lose commissions to
              a missed flood disclosure. I&apos;ve watched brokers get sued for a septic form that never got completed.
              I&apos;ve been the TC who caught it — and the TC who didn&apos;t.
            </p>
            <p>
              DealDesk is every lesson I&apos;ve learned the hard way, encoded into software, so you don&apos;t have to
              learn them the same way.
            </p>
          </div>
          <p
            className="mt-10 text-center text-[10px] tracking-[0.28em] text-white/45 sm:text-left"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            22 YEARS · 3,000+ FILES · FLORIDA STATUTE · MIAMI BUILT · CONTRACT TO CLOSE
          </p>
        </section>

        {/* NEXT STEP */}
        <section id="next-step" className="mx-auto max-w-6xl px-6 pb-20 pt-4 sm:px-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-12 sm:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p
                  className="text-xs tracking-[0.34em] text-white/50 uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  Next step
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Your license is worth more than your software budget.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                  DealDesk runs compliance for brokerages, teams, and TCs across Florida. One demo shows you every
                  statutory trigger your current workflow is missing — and what a single missed form could actually cost
                  you.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                <GlassButton
                  href="mailto:hello@aylenmontenegro.com?subject=DealDesk%20demo%20request"
                  variant="primary"
                  external
                >
                  Request a Demo →
                </GlassButton>
                <GlassButton
                  href="mailto:hello@aylenmontenegro.com?subject=DealDesk%20—%20talk%20to%20Aylen"
                  variant="secondary"
                  external
                >
                  Talk to Aylen
                </GlassButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function DealDeskPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>}>
      <DealDeskContent />
    </Suspense>
  );
}
