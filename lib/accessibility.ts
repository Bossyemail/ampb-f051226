/**
 * Accessibility utilities for enhanced mobile and screen reader support
 */

// ARIA labels and descriptions
export const ARIA_LABELS = {
  // Navigation
  MAIN_NAV: 'Main navigation',
  MOBILE_MENU: 'Mobile navigation menu',
  CLOSE_MENU: 'Close navigation menu',
  OPEN_MENU: 'Open navigation menu',
  
  // Actions
  LOADING: 'Loading content',
  SUBMIT_FORM: 'Submit form',
  CLOSE_MODAL: 'Close modal',
  OPEN_MODAL: 'Open modal',
  
  // Content
  SKIP_TO_CONTENT: 'Skip to main content',
  BACK_TO_TOP: 'Back to top',
  EXPAND_SECTION: 'Expand section',
  COLLAPSE_SECTION: 'Collapse section',
  
  // Social
  FOLLOW_ON: 'Follow on',
  EMAIL_ME: 'Send email to',
  VISIT_PROFILE: 'Visit profile on',
  
  // Media
  PLAY_VIDEO: 'Play video',
  PAUSE_VIDEO: 'Pause video',
  MUTE_VIDEO: 'Mute video',
  UNMUTE_VIDEO: 'Unmute video',
  
  // Forms
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters',
} as const;

// Focus management utilities
export class FocusManager {
  private static focusableSelectors = [
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'a[href]',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ].join(', ');

  static trapFocus(container: HTMLElement): () => void {
    const focusableElements = Array.from(
      container.querySelectorAll(this.focusableSelectors)
    ) as HTMLElement[];

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    
    // Focus first element
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }

  static restoreFocus(previousElement: HTMLElement | null): void {
    if (previousElement && typeof previousElement.focus === 'function') {
      previousElement.focus();
    }
  }

  static getFocusableElements(container?: HTMLElement): HTMLElement[] {
    const scope = container || document;
    return Array.from(scope.querySelectorAll(this.focusableSelectors)) as HTMLElement[];
  }
}

// Screen reader announcements
export class ScreenReaderAnnouncer {
  private static announcer: HTMLElement | null = null;

  static init(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (this.announcer) return;

    this.announcer = document.createElement('div');
    this.announcer.setAttribute('aria-live', 'polite');
    this.announcer.setAttribute('aria-atomic', 'true');
    this.announcer.className = 'sr-only';
    this.announcer.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(this.announcer);
  }

  static announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (!this.announcer) this.init();
    
    if (this.announcer) {
      this.announcer.setAttribute('aria-live', priority);
      this.announcer.textContent = message;
      
      // Clear after announcement
      setTimeout(() => {
        if (this.announcer) {
          this.announcer.textContent = '';
        }
      }, 1000);
    }
  }

  static announceError(message: string): void {
    this.announce(message, 'assertive');
  }

  static announceSuccess(message: string): void {
    this.announce(message, 'polite');
  }
}

// Touch gesture utilities
export class TouchGestures {
  private static swipeThreshold = 50;
  private static longPressDelay = 500;

  static onSwipe(
    element: HTMLElement,
    callbacks: {
      onSwipeLeft?: () => void;
      onSwipeRight?: () => void;
      onSwipeUp?: () => void;
      onSwipeDown?: () => void;
    }
  ): () => void {
    let startX = 0;
    let startY = 0;
    let startTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startTime = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;
      const deltaTime = Date.now() - startTime;

      // Ignore if too slow (not a swipe)
      if (deltaTime > 300) return;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX > this.swipeThreshold && absX > absY) {
        // Horizontal swipe
        if (deltaX > 0) {
          callbacks.onSwipeRight?.();
        } else {
          callbacks.onSwipeLeft?.();
        }
      } else if (absY > this.swipeThreshold && absY > absX) {
        // Vertical swipe
        if (deltaY > 0) {
          callbacks.onSwipeDown?.();
        } else {
          callbacks.onSwipeUp?.();
        }
      }
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }

  static onLongPress(
    element: HTMLElement,
    callback: () => void,
    delay: number = this.longPressDelay
  ): () => void {
    let pressTimer: NodeJS.Timeout;

    const handleTouchStart = () => {
      pressTimer = setTimeout(callback, delay);
    };

    const handleTouchEnd = () => {
      clearTimeout(pressTimer);
    };

    const handleTouchMove = () => {
      clearTimeout(pressTimer);
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchend', handleTouchEnd, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      clearTimeout(pressTimer);
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
      element.removeEventListener('touchmove', handleTouchMove);
    };
  }

  static onPinchZoom(
    element: HTMLElement,
    callbacks: {
      onZoomIn?: (scale: number) => void;
      onZoomOut?: (scale: number) => void;
    }
  ): () => void {
    let initialDistance = 0;

    const getDistance = (touches: TouchList): number => {
      const touch1 = touches[0];
      const touch2 = touches[1];
      return Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        initialDistance = getDistance(e.touches);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const currentDistance = getDistance(e.touches);
        const scale = currentDistance / initialDistance;

        if (scale > 1.1) {
          callbacks.onZoomIn?.(scale);
          initialDistance = currentDistance; // Reset for continuous zoom
        } else if (scale < 0.9) {
          callbacks.onZoomOut?.(scale);
          initialDistance = currentDistance; // Reset for continuous zoom
        }
      }
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
    };
  }
}

// Keyboard navigation utilities
export class KeyboardNavigation {
  static handleArrowKeys(
    container: HTMLElement,
    options: {
      orientation: 'horizontal' | 'vertical' | 'both';
      wrap?: boolean;
      loop?: boolean;
    } = { orientation: 'both', wrap: true, loop: false }
  ): () => void {
    const handleKeyDown = (e: KeyboardEvent) => {
      const focusableElements = FocusManager.getFocusableElements(container);
      const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
      
      if (currentIndex === -1) return;

      let nextIndex = currentIndex;
      const { orientation, wrap, loop } = options;

      switch (e.key) {
        case 'ArrowUp':
          if (orientation === 'vertical' || orientation === 'both') {
            nextIndex = currentIndex - 1;
            if (nextIndex < 0) {
              nextIndex = wrap ? focusableElements.length - 1 : (loop ? focusableElements.length - 1 : 0);
            }
          }
          break;
        
        case 'ArrowDown':
          if (orientation === 'vertical' || orientation === 'both') {
            nextIndex = currentIndex + 1;
            if (nextIndex >= focusableElements.length) {
              nextIndex = wrap ? 0 : (loop ? 0 : focusableElements.length - 1);
            }
          }
          break;
        
        case 'ArrowLeft':
          if (orientation === 'horizontal' || orientation === 'both') {
            nextIndex = currentIndex - 1;
            if (nextIndex < 0) {
              nextIndex = wrap ? focusableElements.length - 1 : (loop ? focusableElements.length - 1 : 0);
            }
          }
          break;
        
        case 'ArrowRight':
          if (orientation === 'horizontal' || orientation === 'both') {
            nextIndex = currentIndex + 1;
            if (nextIndex >= focusableElements.length) {
              nextIndex = wrap ? 0 : (loop ? 0 : focusableElements.length - 1);
            }
          }
          break;
        
        default:
          return; // Don't prevent default for other keys
      }

      if (nextIndex !== currentIndex) {
        e.preventDefault();
        focusableElements[nextIndex]?.focus();
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }

  static handleEscapeKey(callback: () => void): () => void {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }

  static handleEnterKey(callback: () => void, element?: HTMLElement): () => void {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        callback();
      }
    };

    const target = element || document;
    target.addEventListener('keydown', handleKeyDown);
    
    return () => {
      target.removeEventListener('keydown', handleKeyDown);
    };
  }
}

// Reduced motion utilities
export class MotionPreferences {
  static prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  static getMotionVariant(
    normal: any,
    reduced: any
  ): any {
    return this.prefersReducedMotion() ? reduced : normal;
  }

  static disableAnimationsForReducedMotion(): () => void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return () => {};
    if (!this.prefersReducedMotion()) return () => {};

    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }
}

// Color contrast utilities
export class ColorContrast {
  static getContrastRatio(color1: string, color2: string): number {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return 0;

    const luminance1 = this.getLuminance(rgb1);
    const luminance2 = this.getLuminance(rgb2);
    
    const lighter = Math.max(luminance1, luminance2);
    const darker = Math.min(luminance1, luminance2);
    
    return (lighter + 0.05) / (darker + 0.05);
  }

  private static hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  private static getLuminance(rgb: { r: number; g: number; b: number }): number {
    const { r, g, b } = rgb;
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  static meetsWCAG(color1: string, color2: string, level: 'AA' | 'AAA' = 'AA'): boolean {
    const ratio = this.getContrastRatio(color1, color2);
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
  }
}

// Initialize screen reader announcer on client side only
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  ScreenReaderAnnouncer.init();
}
