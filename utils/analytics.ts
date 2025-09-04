// Analytics utility for tracking user behavior

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Track page views
export const trackPageView = (page: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_title: page,
      page_location: window.location.href,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track video interactions
export const trackVideoEvent = (action: 'play' | 'pause' | 'complete', videoId: string) => {
  trackEvent(action, 'video', videoId);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'button', `${buttonName}_${location}`);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll', 'engagement', 'scroll_depth', depth);
};

// Track form interactions
export const trackFormInteraction = (action: 'start' | 'complete' | 'error', formName: string) => {
  trackEvent(action, 'form', formName);
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('timing_complete', 'engagement', 'time_on_page', seconds);
};

// Track CTA interactions
export const trackCTA = (ctaName: string, location: string) => {
  trackEvent('click', 'cta', `${ctaName}_${location}`);
};

// Track feature interactions
export const trackFeatureView = (featureName: string) => {
  trackEvent('view', 'feature', featureName);
};
