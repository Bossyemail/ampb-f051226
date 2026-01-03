"use client";

import { useEffect, Suspense } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import StickyNavigation from '@/components/StickyNavigation';
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
                CLAUSEVAULT
              </p>

              <h1 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">
                Contract clarity —<br />
                <span className="text-white/70">without playing attorney.</span>
              </h1>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <GlassButton href="/sign-in?redirect_url=/clausevault" variant="primary" className="min-w-[140px]">
                  Sign in
                </GlassButton>
                <GlassButton href="/sign-up?redirect_url=/clausevault" variant="secondary" className="min-w-[140px]">
                  Create account
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
