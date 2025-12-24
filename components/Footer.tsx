"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-0 w-full overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(/clausevault-bg-71.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Black overlay for legibility */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/80"></div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.28em] text-white/55" style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>AYLEN MONTENEGRO</p>
            <p className="mt-4 text-sm text-white/75">
              Helping real estate pros close deals—
              <br />without the late-night panic.
            </p>

            <div className="mt-4 flex items-center gap-1">
              <a
                href="https://instagram.com/aylenbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:shadow-[0_0_20px_rgba(219,39,119,0.5)]"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.01 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/aylenmontenegro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-[#0077B5] hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@aylenmontenegropa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@aylenbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[#00f2ea] hover:to-[#ff0050] hover:shadow-[0_0_20px_rgba(255,0,80,0.5)]"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a
                href="https://threads.net/@aylenbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                aria-label="Threads"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.06v-.217C1.5 8.336 2.35 5.562 3.995 3.509 5.845 1.205 8.598.024 12.179 0h.007c3.581.024 6.334 1.205 8.184 3.509C23.65 5.562 24.5 8.336 24.5 11.843v.217c0 3.526-.85 6.38-2.495 8.431-1.85 2.304-4.603 3.485-8.184 3.509h-.007zM12.179 1.5c-3.207.021-5.675 1.08-7.403 3.174C3.548 6.828 2.75 9.254 2.75 12.06v.217c0 2.806.798 5.232 2.026 7.386 1.728 2.094 4.196 3.153 7.403 3.174h.007c3.207-.021 5.675-1.08 7.403-3.174 1.228-2.154 2.026-4.58 2.026-7.386v-.217c0-2.806-.798-5.232-2.026-7.386C17.854 2.58 15.386 1.521 12.179 1.5h-.007z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@aylenmontenegro.com"
                className="w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-gray-700 hover:shadow-[0_0_20px_rgba(156,163,175,0.5)]"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* explore */}
          <div className="md:col-span-4 md:col-start-6">
            <p className="text-[10px] tracking-[0.28em] text-white/55" style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>EXPLORE</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><Link className="hover:text-white" href="/tools">Tools</Link></li>
              <li><Link className="hover:text-white" href="/upgrade">BossyEmail</Link></li>
              <li><Link className="hover:text-white" href="/elevate">TC Services</Link></li>
              <li><Link className="hover:text-white" href="/clausevault">ClauseVault</Link></li>
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
          <span>Made in Miami — powered by too much coffee and not enough beach days.</span>
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
