"use client";

import React from "react";
import Link from "next/link";
import SocialLinksRow from "@/components/SocialLinksRow";

export default function Footer() {
  return (
    <footer className="relative -mt-px w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 w-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/clausevault-bg-71.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Black overlay for legibility */}
      <div className="absolute inset-0 z-[1] bg-black/60 sm:bg-black/80" />

      {/* Blend page background into footer image (matches #0b0c0f canvas on marketing pages) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-28 bg-gradient-to-b from-[#0b0c0f] via-[#0b0c0f]/70 to-transparent sm:h-36 md:h-40"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-12 pt-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.28em] text-white/55" style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>AYLEN MONTENEGRO</p>
            <p className="mt-4 text-sm text-white/75">
              The operational spine for real estate professionals closing real volume.
            </p>

            <div className="mt-4">
              <SocialLinksRow />
            </div>
          </div>

          {/* explore */}
          <div className="md:col-span-4 md:col-start-6">
            <p className="text-[10px] tracking-[0.28em] text-white/55" style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>EXPLORE</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><Link className="hover:text-white" href="/closeadmin">CloseAdmin</Link></li>
              <li><Link className="hover:text-white" href="/dealdesk">DealDesk</Link></li>
              <li><Link className="hover:text-white" href="/elevate">TC Services</Link></li>
              <li><Link className="hover:text-white" href="/snarkletter">Snarkletter</Link></li>
              <li><Link className="hover:text-white" href="/about">About</Link></li>
            </ul>
          </div>

          {/* legal */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-[10px] tracking-[0.28em] text-white/55" style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>LEGAL</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><Link className="hover:text-white" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-white" href="/terms">Terms &amp; Conditions</Link></li>
              <li><Link className="hover:text-white" href="/affiliate-disclosure">Affiliate Disclosure</Link></li>
              <li><Link className="hover:text-white" href="/accessibility">Accessibility</Link></li>
              <li><Link className="hover:text-white" href="/data-security">Data &amp; Security</Link></li>
            </ul>
          </div>
        </div>

        {/* divider row */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2025 Aylen Montenegro. All rights reserved.</span>
          <span>Built in Miami. Engineered for every closing table in Florida.</span>
          </div>

        {/* disclaimer */}
        <div className="mt-8 max-w-4xl text-sm leading-relaxed text-white/70">
          This site contains caffeine-powered opinions, sharp tools, and insider content for real estate pros.
          Nothing here is legal, tax, or financial advice. Use our resources responsibly, confirm with your broker or attorney when needed.
          Proceed at your own risk (and reward).
        </div>
      </div>
    </footer>
  );
}
