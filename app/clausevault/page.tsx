"use client";

import { useEffect, Suspense } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from '@/components/Footer';
import { GlassButton } from '@/components/ui/GlassButton';

function ClauseVaultContent() {
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
      
      if (success === 'true' || user.publicMetadata?.clausevaultAccess) {
        console.log('User has access, redirecting to app');
        router.push('/clausevault/app');
        return;
      }
    }
  }, [userLoaded, user, isSignedIn, searchParams, router]);




  // Show landing page
  return (
    <div className="min-h-screen text-white antialiased" style={{ backgroundColor: '#0B0C0F' }}>
      {/* vignette / depth */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_620px_at_12%_-10%,rgba(255,255,255,0.06),transparent_58%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(900px_700px_at_86%_0%,rgba(201,194,255,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_900px_at_50%_120%,rgba(0,0,0,0.92),transparent_62%)]"></div>
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      {/* TOP BAR */}
      <header className="relative mx-auto max-w-6xl px-6 sm:px-10 pt-10 sm:pt-12 z-20">
        <div className="flex items-center justify-between">
          <div 
            className="text-xs tracking-[0.34em] text-white/70 uppercase"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            ClauseVault
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#signin"
              className="text-[10px] tracking-[0.42em] text-white/60 uppercase hover:text-white/85 transition"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
            >
              Sign in
            </a>
            <GlassButton href="#signup" variant="primary" className="px-5 py-2.5 text-sm font-semibold">
              Sign up
            </GlassButton>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-20 sm:pt-24 pb-14 overflow-hidden w-full">
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
            {/* Left: editorial */}
            <div className="lg:col-span-7">
              <p 
                className="text-xs tracking-[0.34em] text-white/50 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                CONTRACT SUPPORT
              </p>

              <h1 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">
                Contract clarity —<br />
                <span className="text-white/70">without playing attorney.</span>
              </h1>

              <p className="mt-6 text-sm leading-[1.7] text-white/70 max-w-[70ch] sm:text-base sm:leading-[1.75]">
                ClauseVault provides deal-support language for the gray areas that slow transactions down — built from real Florida files to reduce ambiguity, friction, and back-and-forth.
              </p>
              <p 
                className="mt-4 text-[10px] tracking-[0.38em] text-white/40 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                Deal-support language only. Not legal advice.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <GlassButton href="#signup" variant="primary">
                  Create account
                </GlassButton>
                <GlassButton href="#how" variant="secondary">
                  See how it works
                </GlassButton>
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

      <main className="relative mx-auto max-w-6xl px-6 sm:px-10" style={{ backgroundColor: '#0B0C0F' }}>
        {/* HOW IT WORKS (short, conversion-safe) */}
        <section id="how" className="py-12">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p 
                className="text-xs tracking-[0.34em] text-white/50 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                How it works
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                Find the language. Set expectations. Document the ask.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="border-y border-white/10 py-8">
                <div className="grid sm:grid-cols-3 gap-8">
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
                        01
                      </span>
                      {' '}— Find the clause
                    </p>
                    <p className="mt-3 text-sm text-white/60">Search by scenario or browse categories.</p>
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
                        02
                      </span>
                      {' '}— Select your intent
                    </p>
                    <p className="mt-3 text-sm text-white/60">Clarify expectations, protect timelines, reduce ambiguity.</p>
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
                      {' '}— Copy + paste
                    </p>
                    <p className="mt-3 text-sm text-white/60">Use as deal-support language. Confirm when needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-white/10"></div>

        {/* AUTH GATE (minimal, luxe) */}
        <section className="py-14 pb-24">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <p 
                className="text-xs tracking-[0.34em] text-white/50 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                Access
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                Sign in or create an account.
              </h2>
              <p className="mt-4 text-white/65 leading-relaxed">
                This is the app home. Once you&apos;re in, ClauseVault adapts prompts and recommendations to your workflow.
              </p>
              <p 
                className="mt-6 text-[10px] tracking-[0.38em] text-white/40 uppercase"
                style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
              >
                Deal-support language only. Not legal advice.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Sign in */}
                <div id="signin" className="border border-white/10 bg-white/[0.02] rounded-3xl px-7 py-10">
                  <p 
                    className="text-xs tracking-[0.34em] text-white/50 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    Sign in
                  </p>
                  <p className="mt-4 text-white/70 text-sm">
                    Returning user? Jump back in.
                  </p>
                  <div className="mt-8 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4 text-sm text-white/70">
                      Email
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4 text-sm text-white/70">
                      Password
                    </div>
                  </div>
                  <GlassButton 
                    href="/sign-in" 
                    variant="primary"
                    className="mt-8"
                  >
                    Sign in
                  </GlassButton>
                  <p className="mt-6 text-xs text-white/50">Forgot password?</p>
                </div>

                {/* Sign up */}
                <div id="signup" className="border border-white/10 bg-white/[0.02] rounded-3xl px-7 py-10">
                  <p 
                    className="text-xs tracking-[0.34em] text-white/50 uppercase"
                    style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                  >
                    Sign up
                  </p>
                  <p className="mt-4 text-white/70 text-sm">
                    New here? Create an account in under a minute.
                  </p>
                  <div className="mt-8 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4 text-sm text-white/70">
                      Email
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4 text-sm text-white/70">
                      Password
                    </div>
                  </div>
                  <GlassButton 
                    href="/sign-up" 
                    variant="primary"
                    className="mt-8"
                  >
                    Create account
                  </GlassButton>
                  <p className="mt-6 text-[9px] text-white/35">By creating an account, you agree to the terms.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <p 
            className="text-[9px] tracking-[0.38em] text-white/35 uppercase text-center"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            Built for Florida real estate workflows.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function ClauseVaultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>}>
      <ClauseVaultContent />
    </Suspense>
  );
}
