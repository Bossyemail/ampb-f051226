// Analytics utility for tracking conversions and user interactions

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

export const trackCTA = (product: string, location: string) => {
  trackEvent('click', 'CTA', `${product}_${location}`);
};

export const trackEmailCapture = (source: string) => {
  trackEvent('sign_up', 'email_capture', source);
};

export const trackProductView = (product: string) => {
  trackEvent('view_item', 'product', product);
};

export const trackScroll = (section: string, percentage: number) => {
  trackEvent('scroll', 'engagement', section, Math.round(percentage));
};

export const trackTimeOnPage = (seconds: number) => {
  trackEvent('timing_complete', 'engagement', 'time_on_page', seconds);
};

// Conversion tracking for specific actions
export const conversions = {
  emailSignup: (source: string) => trackEmailCapture(source),
  productClick: (product: string, location: string) => trackCTA(product, location),
  contactForm: () => trackEvent('submit', 'form', 'contact'),
  testimonialView: (testimonialId: string) => trackEvent('view', 'testimonial', testimonialId),
  videoPlay: (videoId: string) => trackEvent('play', 'video', videoId),
  socialClick: (platform: string) => trackEvent('click', 'social', platform),
};
