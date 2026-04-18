'use client';

import React from 'react';
import { ARIA_LABELS } from '@/lib/accessibility';

interface SkipToContentProps {
  targetId?: string;
  className?: string;
}

/**
 * Skip link visibility is CSS-only (focus / focus-visible) so server and client HTML match.
 * Avoids hydration mismatches from useState + Tab listeners.
 */
export default function SkipToContent({
  targetId = 'main-content',
  className = '',
}: SkipToContentProps) {
  const handleSkip = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.focus();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={handleSkip}
      suppressHydrationWarning
      className={`
        fixed top-4 left-4 z-[9999]
        bg-blue-600 text-white px-4 py-2 rounded-none
        text-sm font-medium shadow-lg
        transition-all duration-150 ease-in-out select-none
        active:scale-[0.97] active:shadow-[inset_0_2px_10px_rgba(0,0,0,0.35)] active:brightness-90
        -translate-y-[120%] opacity-0 pointer-events-none
        focus:pointer-events-auto focus:translate-y-0 focus:opacity-100
        focus-visible:pointer-events-auto focus-visible:translate-y-0 focus-visible:opacity-100
        hover:bg-blue-700 focus:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
      aria-label={ARIA_LABELS.SKIP_TO_CONTENT}
    >
      Skip to main content
    </button>
  );
}
