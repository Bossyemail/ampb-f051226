"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import { ScreenReaderAnnouncer } from '@/lib/accessibility';
import SocialLinksRow from '@/components/SocialLinksRow';

interface NavigationProps {
  className?: string;
}

const navigationItems = [
  { label: 'CloseAdmin', href: '/closeadmin' },
  { label: 'DealDesk', href: '/dealdesk' },
  { label: 'TC Services', href: '/elevate' },
  { label: 'Snarkletter', href: '/snarkletter' },
  { label: 'About', href: '/about' },
] as const;

export default function Navigation({ className = '' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

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
        <div className={`hidden shrink-0 md:flex ${!mounted ? "opacity-0" : "opacity-100"}`}>
          <SocialLinksRow />
        </div>
      </div>
    </nav>
  );
}
