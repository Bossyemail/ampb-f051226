"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Instagram,
  Linkedin,
  Youtube,
  Mail
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { ScreenReaderAnnouncer } from '@/lib/accessibility';

interface NavigationProps {
  className?: string;
}

function TikTokIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.06v-.217C1.5 8.336 2.35 5.562 3.995 3.509 5.845 1.205 8.598.024 12.179 0h.007c3.581.024 6.334 1.205 8.184 3.509C23.65 5.562 24.5 8.336 24.5 11.843v.217c0 3.526-.85 6.38-2.495 8.431-1.85 2.304-4.603 3.485-8.184 3.509h-.007zM12.179 1.5c-3.207.021-5.675 1.08-7.403 3.174C3.548 6.828 2.75 9.254 2.75 12.06v.217c0 2.806.798 5.232 2.026 7.386 1.728 2.094 4.196 3.153 7.403 3.174h.007c3.207-.021 5.675-1.08 7.403-3.174 1.228-2.154 2.026-4.58 2.026-7.386v-.217c0-2.806-.798-5.232-2.026-7.386C17.854 2.58 15.386 1.521 12.179 1.5h-.007z"/>
    </svg>
  );
}

const navigationItems = [
  { label: 'Tools', href: '/tools' },
  { label: 'BossyEmail', href: '/upgrade' },
  { label: 'TC Services', href: '/elevate' },
  { label: 'ClauseVault', href: '/clausevault' },
  { label: 'About', href: '/about' },
] as const;

const socialLinks = [
  { 
    name: "Instagram", 
    href: "https://instagram.com/aylenbuilds",
    icon: Instagram,
    hoverColor: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(219,39,119,0.5)]",
    isCustomIcon: false
  },
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/aylenmontenegro",
    icon: Linkedin,
    hoverColor: "hover:bg-[#0077B5]",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]",
    isCustomIcon: false
  },
  { 
    name: "YouTube", 
    href: "https://youtube.com/@aylenmontenegropa",
    icon: Youtube,
    hoverColor: "hover:bg-[#FF0000]",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]",
    isCustomIcon: false
  },
  { 
    name: "TikTok", 
    href: "https://tiktok.com/@aylenbuilds",
    icon: TikTokIcon,
    hoverColor: "hover:bg-gradient-to-br hover:from-[#00f2ea] hover:to-[#ff0050]",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(255,0,80,0.5)]",
    isCustomIcon: true
  },
  { 
    name: "Threads", 
    href: "https://threads.net/@aylenbuilds",
    icon: ThreadsIcon,
    hoverColor: "hover:bg-black",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    isCustomIcon: true
  },
  { 
    name: "Email", 
    href: "mailto:hello@aylenmontenegro.com",
    icon: Mail,
    hoverColor: "hover:bg-gray-700",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(156,163,175,0.5)]",
    isCustomIcon: false
  }
] as const;

export default function Navigation({ className = '' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  // Only check pathname after mount to avoid hydration mismatch
  const isHomePage = mounted ? pathname === '/' : false;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const handleNavClick = (href: string, label: string) => {
    trackEvent('click', 'navigation', label);
    ScreenReaderAnnouncer.announce(`Navigating to ${label}`);
  };

  const baseClasses = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent';
  const additionalClasses = className ? String(className).trim() : '';
  const finalClassName = additionalClasses 
    ? `${baseClasses} ${additionalClasses}`.trim()
    : baseClasses;

  return (
    <nav
      className={finalClassName}
      style={mounted && isScrolled ? {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      } : undefined}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center px-4 lg:px-8 py-4">
        <div className="flex items-center flex-shrink-0">
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition-colors text-xs font-medium tracking-widest uppercase"
          >
            Aylen Montenegro
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 flex-1 justify-center">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href, item.label.toLowerCase())}
              className="text-[10px] font-medium tracking-widest uppercase transition-colors pb-1 text-white/70 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social icons - show on all pages */}
        <div className={`hidden md:flex items-center space-x-1 flex-shrink-0 ${!mounted ? 'opacity-0' : 'opacity-100'}`}>
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                onClick={() => trackEvent('click', 'social', social.name.toLowerCase())}
                className={`w-9 h-9 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:border-white/40 transition-all duration-300 hover:scale-110 ${social.hoverColor} ${social.hoverShadow}`}
                aria-label={social.name}
              >
                {social.isCustomIcon ? (
                  <IconComponent />
                ) : (
                  <IconComponent className="w-4 h-4" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
