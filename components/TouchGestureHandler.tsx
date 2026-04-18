'use client';

import React, { useEffect, useRef } from 'react';
import { TouchGestures, ScreenReaderAnnouncer } from '@/lib/accessibility';

interface TouchGestureHandlerProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onLongPress?: () => void;
  onPinchIn?: (scale: number) => void;
  onPinchOut?: (scale: number) => void;
  longPressDelay?: number;
  enableSwipe?: boolean;
  enableLongPress?: boolean;
  enablePinch?: boolean;
  className?: string;
}

export default function TouchGestureHandler({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onLongPress,
  onPinchIn,
  onPinchOut,
  longPressDelay = 500,
  enableSwipe = true,
  enableLongPress = true,
  enablePinch = false,
  className = ''
}: TouchGestureHandlerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupFunctions = useRef<Array<() => void>>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cleanups: Array<() => void> = [];

    // Setup swipe gestures
    if (enableSwipe && (onSwipeLeft || onSwipeRight || onSwipeUp || onSwipeDown)) {
      const swipeCleanup = TouchGestures.onSwipe(container, {
        onSwipeLeft: () => {
          onSwipeLeft?.();
          ScreenReaderAnnouncer.announce('Swipe left gesture detected');
        },
        onSwipeRight: () => {
          onSwipeRight?.();
          ScreenReaderAnnouncer.announce('Swipe right gesture detected');
        },
        onSwipeUp: () => {
          onSwipeUp?.();
          ScreenReaderAnnouncer.announce('Swipe up gesture detected');
        },
        onSwipeDown: () => {
          onSwipeDown?.();
          ScreenReaderAnnouncer.announce('Swipe down gesture detected');
        }
      });
      cleanups.push(swipeCleanup);
    }

    // Setup long press gesture
    if (enableLongPress && onLongPress) {
      const longPressCleanup = TouchGestures.onLongPress(
        container,
        () => {
          onLongPress();
          ScreenReaderAnnouncer.announce('Long press gesture detected');
        },
        longPressDelay
      );
      cleanups.push(longPressCleanup);
    }

    // Setup pinch gestures
    if (enablePinch && (onPinchIn || onPinchOut)) {
      const pinchCleanup = TouchGestures.onPinchZoom(container, {
        onZoomIn: (scale) => {
          onPinchOut?.(scale);
          ScreenReaderAnnouncer.announce(`Pinch zoom in: ${Math.round(scale * 100)}%`);
        },
        onZoomOut: (scale) => {
          onPinchIn?.(scale);
          ScreenReaderAnnouncer.announce(`Pinch zoom out: ${Math.round(scale * 100)}%`);
        }
      });
      cleanups.push(pinchCleanup);
    }

    cleanupFunctions.current = cleanups;

    return () => {
      cleanups.forEach(cleanup => cleanup());
    };
  }, [
    enableSwipe,
    enableLongPress,
    enablePinch,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onLongPress,
    onPinchIn,
    onPinchOut,
    longPressDelay
  ]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        touchAction: enablePinch ? 'none' : 'auto',
        WebkitTouchCallout: enableLongPress ? 'none' : 'default',
        WebkitUserSelect: enableLongPress ? 'none' : 'auto'
      }}
    >
      {children}
    </div>
  );
}
