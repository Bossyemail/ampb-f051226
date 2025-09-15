"use client";

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

interface PerformanceMonitorProps {
  enabled?: boolean;
  reportInterval?: number;
}

export default function PerformanceMonitor({ 
  enabled = true, 
  reportInterval = 5000 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    loadTime: null
  });

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Track page load time
    const trackLoadTime = () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));
      
      // Send to analytics
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'performance_metric',
          parameters: {
            metric_name: 'page_load_time',
            metric_value: loadTime,
            timestamp: Date.now()
          }
        })
      }).catch(console.error);
    };

    // Track TTFB (Time to First Byte)
    const trackTTFB = () => {
      const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    };

    // Track Core Web Vitals
    const trackLCP = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    };

    const trackFID = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        });
      }).observe({ entryTypes: ['first-input'] });
    };

    const trackCLS = () => {
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });
    };

    const trackFCP = () => {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      }).observe({ entryTypes: ['paint'] });
    };

    // Initialize tracking
    trackLCP();
    trackFID();
    trackCLS();
    trackFCP();

    // Track load time when page is fully loaded
    if (document.readyState === 'complete') {
      trackLoadTime();
      trackTTFB();
    } else {
      window.addEventListener('load', () => {
        trackLoadTime();
        trackTTFB();
      });
    }

    // Periodic performance reporting
    const interval = setInterval(() => {
      const currentMetrics = { ...metrics };
      
      // Only report if we have meaningful data
      if (Object.values(currentMetrics).some(value => value !== null)) {
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'performance_report',
            parameters: {
              ...currentMetrics,
              timestamp: Date.now(),
              url: window.location.pathname
            }
          })
        }).catch(console.error);
      }
    }, reportInterval);

    return () => {
      clearInterval(interval);
    };
  }, [enabled, reportInterval, metrics]);

  // Development mode: Show metrics overlay
  if (process.env.NODE_ENV === 'development' && enabled) {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50 max-w-xs">
        <div className="font-bold mb-2">Performance Metrics</div>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>FID: {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}</div>
        <div>Load: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}</div>
      </div>
    );
  }

  return null;
}
