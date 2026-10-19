'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { ARIA_LABELS, MotionPreferences, ScreenReaderAnnouncer } from '@/lib/accessibility';

interface BackToTopProps {
  threshold?: number;
  className?: string;
  showText?: boolean;
}

export default function BackToTop({
  threshold = 300,
  className = '',
  showText = false
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isCinema, setIsCinema] = useState(false);

  useEffect(() => {
    const checkCinema = () => setIsCinema(document.documentElement.classList.contains('cinema'));
    checkCinema();
    const observer = new MutationObserver(checkCinema);
    observer.observe(document.documentElement, { attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  if (isCinema) return null;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Announce to screen readers
    ScreenReaderAnnouncer.announce('Returned to top of page');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  const motionVariants = typeof window !== 'undefined' 
    ? MotionPreferences.getMotionVariant(
        {
          initial: { opacity: 0, scale: 0.8, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.8, y: 20 },
          whileHover: { scale: 1.1, y: -2 },
          whileTap: { scale: 0.95 }
        },
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          whileHover: {},
          whileTap: {}
        }
      )
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        whileHover: {},
        whileTap: {}
      };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          variants={motionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="whileHover"
          whileTap="whileTap"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            fixed bottom-6 right-6 z-50
            transition-all duration-200
            focus:outline-none
            ${showText ? 'px-4 py-2' : 'p-3'}
            ${className}
          `}
          style={{ background: 'var(--teal)', color: 'var(--cream)' }}
          aria-label={ARIA_LABELS.BACK_TO_TOP}
          title="Back to top"
        >
          <div className="flex items-center gap-2">
            <ArrowUp className="w-5 h-5" aria-hidden="true" />
            {showText && (
              <span className="text-sm font-medium hidden sm:inline">
                Back to Top
              </span>
            )}
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
