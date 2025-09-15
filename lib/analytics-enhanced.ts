// Enhanced Analytics & Performance Tracking System

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: any[];
  }
}

// Core Web Vitals Tracking
interface WebVitals {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
}

// User Journey Tracking
interface UserJourney {
  sessionId: string;
  startTime: number;
  currentPage: string;
  previousPage?: string;
  actions: UserAction[];
  conversionEvents: ConversionEvent[];
}

interface UserAction {
  type: 'click' | 'scroll' | 'form_interaction' | 'page_view' | 'exit_intent' | 'hover';
  element: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

interface ConversionEvent {
  type: 'email_capture' | 'button_click' | 'form_submit' | 'page_view' | 'time_on_page';
  value?: string | number;
  timestamp: number;
  metadata?: Record<string, any>;
}

// Funnel Steps
export enum FunnelStep {
  VISIT = 'visit',
  HERO_VIEW = 'hero_view',
  SERVICES_VIEW = 'services_view',
  TESTIMONIALS_VIEW = 'testimonials_view',
  CONTACT_ATTEMPT = 'contact_attempt',
  EMAIL_CAPTURE = 'email_capture',
  CONVERSION = 'conversion'
}

class AnalyticsEnhanced {
  private sessionId: string;
  private userJourney: UserJourney;
  private performanceObserver: PerformanceObserver | null = null;
  private heatmapData: Array<{x: number, y: number, timestamp: number}> = [];
  private scrollDepth: number = 0;
  private maxScrollDepth: number = 0;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.userJourney = {
      sessionId: this.sessionId,
      startTime: Date.now(),
      currentPage: window.location.pathname,
      actions: [],
      conversionEvents: []
    };
    
    this.initializeTracking();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeTracking() {
    // Track initial page view
    this.trackPageView();
    
    // Initialize Core Web Vitals
    this.initializeWebVitals();
    
    // Initialize heatmap tracking
    this.initializeHeatmapTracking();
    
    // Initialize scroll tracking
    this.initializeScrollTracking();
    
    // Initialize user journey tracking
    this.initializeUserJourney();
    
    // Track exit intent
    this.trackExitIntent();
  }

  // Core Web Vitals Tracking
  private initializeWebVitals() {
    // Track LCP (Largest Contentful Paint)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.trackWebVital('LCP', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Track FID (First Input Delay)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        this.trackWebVital('FID', entry.processingStart - entry.startTime);
      });
    }).observe({ entryTypes: ['first-input'] });

    // Track CLS (Cumulative Layout Shift)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.trackWebVital('CLS', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });

    // Track FCP (First Contentful Paint)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        this.trackWebVital('FCP', entry.startTime);
      });
    }).observe({ entryTypes: ['paint'] });
  }

  private trackWebVital(name: string, value: number) {
    this.sendEvent('web_vitals', {
      metric_name: name,
      metric_value: Math.round(value),
      session_id: this.sessionId
    });
  }

  // Heatmap Tracking
  private initializeHeatmapTracking() {
    document.addEventListener('click', (e) => {
      if (!(e.target instanceof Element)) return;
      const rect = e.target.getBoundingClientRect();
      this.heatmapData.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });
      
      if (e.target instanceof Element) {
        this.trackUserAction('click', e.target, {
          position: { x: e.clientX, y: e.clientY },
          element: this.getElementSelector(e.target)
        });
      }
    });

    // Track mouse movements for heatmap (throttled)
    let mouseMoveThrottle: NodeJS.Timeout;
    document.addEventListener('mousemove', (e) => {
      clearTimeout(mouseMoveThrottle);
      mouseMoveThrottle = setTimeout(() => {
        this.heatmapData.push({
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now()
        });
      }, 100);
    });
  }

  // Scroll Tracking
  private initializeScrollTracking() {
    let scrollTimeout: NodeJS.Timeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > this.maxScrollDepth) {
          this.maxScrollDepth = scrollPercent;
          this.trackUserAction('scroll', document.body, {
            scroll_depth: scrollPercent,
            max_scroll_depth: this.maxScrollDepth
          });
        }
      }, 150);
    });
  }

  // User Journey Tracking
  private initializeUserJourney() {
    // Track page changes
    window.addEventListener('beforeunload', () => {
      this.trackSessionEnd();
    });

    // Track focus/blur events
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.trackUserAction('page_hide', document.body, {
          time_on_page: Date.now() - this.userJourney.startTime
        });
      } else {
        this.trackUserAction('page_show', document.body);
      }
    });
  }

  // Exit Intent Tracking
  private trackExitIntent() {
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY <= 0) {
        this.trackUserAction('exit_intent', document.body, {
          time_on_page: Date.now() - this.userJourney.startTime,
          scroll_depth: this.maxScrollDepth
        });
      }
    });
  }

  // Public Methods
  public trackPageView(page?: string) {
    const pagePath = page || window.location.pathname;
    this.userJourney.currentPage = pagePath;
    
    this.trackUserAction('page_view', document.body, {
      page_path: pagePath,
      referrer: document.referrer,
      user_agent: navigator.userAgent
    });

    this.sendEvent('page_view', {
      page_path: pagePath,
      session_id: this.sessionId,
      timestamp: Date.now()
    });
  }

  public trackUserAction(type: UserAction['type'], element: Element, metadata?: Record<string, any>) {
    const action: UserAction = {
      type,
      element: this.getElementSelector(element),
      timestamp: Date.now(),
      metadata
    };

    this.userJourney.actions.push(action);
    
    // Send to analytics
    this.sendEvent('user_action', {
      action_type: type,
      element: action.element,
      session_id: this.sessionId,
      metadata
    });
  }

  public trackConversion(eventType: ConversionEvent['type'], value?: string | number, metadata?: Record<string, any>) {
    const conversion: ConversionEvent = {
      type: eventType,
      value,
      timestamp: Date.now(),
      metadata
    };

    this.userJourney.conversionEvents.push(conversion);
    
    this.sendEvent('conversion', {
      conversion_type: eventType,
      value,
      session_id: this.sessionId,
      metadata
    });
  }

  public trackFunnelStep(step: FunnelStep, metadata?: Record<string, any>) {
    this.sendEvent('funnel_step', {
      funnel_step: step,
      session_id: this.sessionId,
      timestamp: Date.now(),
      metadata
    });
  }

  private getElementSelector(element: Element): string {
    if (element.id) return `#${element.id}`;
    if (element.className && typeof element.className === 'string') {
      return `.${element.className.split(' ')[0]}`;
    }
    return element.tagName.toLowerCase();
  }

  private sendEvent(eventName: string, parameters: Record<string, any>) {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }

    // Send to custom analytics endpoint
    this.sendToCustomEndpoint(eventName, parameters);
  }

  private async sendToCustomEndpoint(eventName: string, parameters: Record<string, any>) {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: eventName,
          parameters,
          session_id: this.sessionId,
          timestamp: Date.now()
        })
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }

  private trackSessionEnd() {
    const sessionDuration = Date.now() - this.userJourney.startTime;
    
    this.sendEvent('session_end', {
      session_id: this.sessionId,
      session_duration: sessionDuration,
      actions_count: this.userJourney.actions.length,
      conversions_count: this.userJourney.conversionEvents.length,
      max_scroll_depth: this.maxScrollDepth,
      heatmap_points: this.heatmapData.length
    });
  }

  // Get analytics data for debugging
  public getAnalyticsData() {
    return {
      sessionId: this.sessionId,
      userJourney: this.userJourney,
      heatmapData: this.heatmapData,
      scrollDepth: this.maxScrollDepth
    };
  }
}

// Initialize analytics
let analyticsInstance: AnalyticsEnhanced | null = null;

export const initializeAnalytics = () => {
  if (typeof window !== 'undefined' && !analyticsInstance) {
    analyticsInstance = new AnalyticsEnhanced();
  }
  return analyticsInstance;
};

export const getAnalytics = () => analyticsInstance;

// Convenience functions
export const trackPageView = (page?: string) => {
  analyticsInstance?.trackPageView(page);
};

export const trackUserAction = (type: UserAction['type'], element: Element, metadata?: Record<string, any>) => {
  analyticsInstance?.trackUserAction(type, element, metadata);
};

export const trackConversion = (eventType: ConversionEvent['type'], value?: string | number, metadata?: Record<string, any>) => {
  analyticsInstance?.trackConversion(eventType, value, metadata);
};

export const trackFunnelStep = (step: FunnelStep, metadata?: Record<string, any>) => {
  analyticsInstance?.trackFunnelStep(step, metadata);
};

export { FunnelStep, type UserJourney, type UserAction, type ConversionEvent };
