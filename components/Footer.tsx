"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { 
      name: "Instagram", 
      href: "https://instagram.com/aylenbuilds",
      icon: Instagram,
      hoverColor: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(219,39,119,0.5)]"
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/aylenmontenegro",
      icon: Linkedin,
      hoverColor: "hover:bg-[#0077B5]",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]"
    },
    { 
      name: "YouTube", 
      href: "https://youtube.com/@aylenmontenegropa",
      icon: Youtube,
      hoverColor: "hover:bg-[#FF0000]",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
    },
    { 
      name: "TikTok", 
      href: "https://tiktok.com/@aylenbuilds",
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      hoverColor: "hover:bg-gradient-to-br hover:from-[#00f2ea] hover:to-[#ff0050]",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(255,0,80,0.5)]"
    },
    { 
      name: "Threads", 
      href: "https://threads.net/@aylenbuilds",
      icon: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.06v-.217C1.5 8.336 2.35 5.562 3.995 3.509 5.845 1.205 8.598.024 12.179 0h.007c3.581.024 6.334 1.205 8.184 3.509C23.65 5.562 24.5 8.336 24.5 11.843v.217c0 3.526-.85 6.38-2.495 8.431-1.85 2.304-4.603 3.485-8.184 3.509h-.007zM12.179 1.5c-3.207.021-5.675 1.08-7.403 3.174C3.548 6.828 2.75 9.254 2.75 12.06v.217c0 2.806.798 5.232 2.026 7.386 1.728 2.094 4.196 3.153 7.403 3.174h.007c3.207-.021 5.675-1.08 7.403-3.174 1.228-2.154 2.026-4.58 2.026-7.386v-.217c0-2.806-.798-5.232-2.026-7.386C17.854 2.58 15.386 1.521 12.179 1.5h-.007z"/>
        </svg>
      ),
      hoverColor: "hover:bg-black",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(0,0,0,0.7)]"
    },
    { 
      name: "Email", 
      href: "mailto:hello@aylenmontenegro.com",
      icon: Mail,
      hoverColor: "hover:bg-gray-700",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(107,114,128,0.5)]"
    }
  ];

  return (
    <footer className="relative bg-[#114B4D] border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-sans text-lg sm:text-xl font-medium tracking-tight text-white/95">Aylen Montenegro</h3>
            <p className="font-sans mt-3 max-w-md text-sm sm:text-[15px] font-normal text-white/75 leading-[1.6]">
              Helping real estate pros close deals—without the late‑night panic.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/75 hover:text-white hover:border-white/40 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {typeof IconComponent === 'function' && IconComponent.name === '' ? (
                      <IconComponent />
                    ) : (
                      <IconComponent className="w-4 h-4" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:pl-8">
            <p className="font-sans text-xs font-medium uppercase tracking-wider text-white/60 mb-4">Explore</p>
            <ul className="space-y-2.5">
              <li><a className="font-sans text-sm font-normal text-white/75 hover:text-white/95 transition-colors" href="/">Home</a></li>
              <li><a className="font-sans text-sm font-normal text-white/75 hover:text-white/95 transition-colors" href="/read">Read</a></li>
              <li><a className="font-sans text-sm font-normal text-white/75 hover:text-white/95 transition-colors" href="/upgrade">Upgrade</a></li>
              <li><a className="font-sans text-sm font-normal text-white/75 hover:text-white/95 transition-colors" href="/deploy">Deploy</a></li>
              <li><a className="font-sans text-sm font-normal text-white/75 hover:text-white/95 transition-colors" href="/spill">Spill</a></li>
              <li><a className="font-sans text-sm font-normal text-white/75 hover:text-white/95 transition-colors" href="/about">About</a></li>
            </ul>
          </div>

          {/* Legal / Disclaimers */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-wider text-white/60 mb-4">Legal</p>
            <ul className="space-y-2.5">
              <li><a className="font-sans text-sm font-normal text-white/75 hover:text-white/95 transition-colors" href="/privacy">Privacy Policy</a></li>
              <li><a className="font-sans text-sm font-normal text-white/75 hover:text-white/95 transition-colors" href="/terms">Terms & Conditions</a></li>
              <li><a className="font-sans text-sm font-normal text-white/75 hover:text-white/95 transition-colors" href="/affiliate-disclosure">Affiliate Disclosure</a></li>
            </ul>
            <p className="font-sans mt-5 max-w-sm text-xs font-normal leading-[1.6] text-white/60">
              This site contains caffeine-powered opinions, sharp tools, and insider content for real estate pros. Nothing here is legal, tax, or financial advice. Use our resources responsibly, confirm with your broker or attorney when needed. Proceed at your own risk (and reward).
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 font-sans text-xs font-normal text-white/60 md:flex-row md:items-center">
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
