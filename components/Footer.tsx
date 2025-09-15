"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#114B4D] to-[#8B5E3C] text-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-black uppercase">Aylen Montenegro</h3>
            <p className="mt-2 max-w-md text-sm text-black/70">
              Helping real estate pros close deals—without the late‑night panic.
            </p>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-2">
              {[
                { 
                  name: "Instagram", 
                  href: "https://instagram.com/aylenbuilds", 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="5"/>
                      <circle cx="16" cy="8" r="1"/>
                    </svg>
                  )
                },
                { 
                  name: "LinkedIn", 
                  href: "https://linkedin.com/in/aylenmontenegro", 
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )
                },
                { 
                  name: "YouTube", 
                  href: "https://youtube.com", 
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  )
                },
                { 
                  name: "TikTok", 
                  href: "https://tiktok.com/@aylenbuilds", 
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  )
                },
                { 
                  name: "Threads", 
                  href: "https://threads.net/@aylenbuilds", 
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.06v-.217C1.5 8.336 2.35 5.562 3.995 3.509 5.845 1.205 8.598.024 12.179 0h.007c3.581.024 6.334 1.205 8.184 3.509C23.65 5.562 24.5 8.336 24.5 11.843v.217c0 3.526-.85 6.38-2.495 8.431-1.85 2.304-4.603 3.485-8.184 3.509h-.007zM12.179 1.5c-3.207.021-5.675 1.08-7.403 3.174C3.548 6.828 2.75 9.254 2.75 12.06v.217c0 2.806.798 5.232 2.026 7.386 1.728 2.094 4.196 3.153 7.403 3.174h.007c3.207-.021 5.675-1.08 7.403-3.174 1.228-2.154 2.026-4.58 2.026-7.386v-.217c0-2.806-.798-5.232-2.026-7.386C17.854 2.58 15.386 1.521 12.179 1.5h-.007z"/>
                    </svg>
                  )
                },
                { 
                  name: "Email", 
                  href: "mailto:hello@aylenmontenegro.com", 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  )
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-black/20 bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:pl-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-black/70">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li><a className="transition hover:text-black uppercase" href="/">Home</a></li>
              <li><a className="transition hover:text-black uppercase" href="/read">Read</a></li>
              <li><a className="transition hover:text-black uppercase" href="/upgrade">Upgrade</a></li>
              <li><a className="transition hover:text-black uppercase" href="/deploy">Deploy</a></li>
              <li><a className="transition hover:text-black uppercase" href="/spill">Spill</a></li>
              <li><a className="transition hover:text-black uppercase" href="/about">About</a></li>
            </ul>
          </div>

          {/* Legal / Disclaimers */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-black/70">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li><a className="transition hover:text-black uppercase" href="/privacy">Privacy Policy</a></li>
              <li><a className="transition hover:text-black uppercase" href="/terms">Terms & Conditions</a></li>
              <li><a className="transition hover:text-black uppercase" href="/affiliate-disclosure">Affiliate Disclosure</a></li>
            </ul>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-black/70">
              This site contains caffeine-powered opinions, sharp tools, and insider content for real estate pros. Nothing here is legal, tax, or financial advice. Use our resources responsibly, confirm with your broker or attorney when needed. Proceed at your own risk (and reward).
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-black/10 pt-4">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-black/70 md:flex-row md:items-center">
            <p>© 2025 Aylen Montenegro. All rights reserved.</p>
            <p className="inline-flex items-center gap-2">
              Made in Miami — powered by too much coffee and not enough beach days.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
