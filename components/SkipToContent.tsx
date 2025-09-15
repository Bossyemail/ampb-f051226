'use client';

import React, { useEffect, useState } from 'react';
import { ARIA_LABELS } from '@/lib/accessibility';

interface SkipToContentProps {
  targetId?: string;
  className?: string;
}

export default function SkipToContent({ 
  targetId = 'main-content', 
  className = '' 
}: SkipToContentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show skip link when Tab is pressed (first keyboard navigation)
      if (e.key === 'Tab' && !isVisible) {
        setIsVisible(true);
      }
    };

    const handleClick = () => {
      // Hide after clicking (user navigated away)
      setTimeout(() => setIsVisible(false), 100);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, [isVisible]);

  const handleSkip = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.focus();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleSkip}
      className={`
        fixed top-4 left-4 z-[9999] 
        bg-blue-600 text-white px-4 py-2 rounded-md
        text-sm font-medium shadow-lg
        transition-all duration-200 ease-in-out
        transform -translate-y-full opacity-0
        focus:translate-y-0 focus:opacity-100
        hover:bg-blue-700 focus:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isVisible ? 'translate-y-0 opacity-100' : ''}
        ${className}
      `}
      aria-label={ARIA_LABELS.SKIP_TO_CONTENT}
    >
      Skip to main content
    </button>
  );
}
