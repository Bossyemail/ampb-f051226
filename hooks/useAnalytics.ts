"use client";

import { useEffect, useRef, useCallback } from 'react';
import { 
  initializeAnalytics, 
  trackPageView, 
  trackUserAction, 
  trackConversion, 
  trackFunnelStep,
  FunnelStep,
  type UserAction,
  type ConversionEvent
} from '@/lib/analytics-enhanced';

export const useAnalytics = () => {
  const analyticsInitialized = useRef(false);

  useEffect(() => {
    if (!analyticsInitialized.current) {
      initializeAnalytics();
      analyticsInitialized.current = true;
    }
  }, []);

  const trackClick = useCallback((element: HTMLElement, metadata?: Record<string, any>) => {
    trackUserAction('click', element, metadata);
  }, []);

  const trackFormInteraction = useCallback((element: HTMLElement, metadata?: Record<string, any>) => {
    trackUserAction('form_interaction', element, metadata);
  }, []);

  const trackHover = useCallback((element: HTMLElement, metadata?: Record<string, any>) => {
    trackUserAction('hover', element, metadata);
  }, []);

  const trackEmailCapture = useCallback((email: string, source: string) => {
    trackConversion('email_capture', email, { source });
    trackFunnelStep(FunnelStep.EMAIL_CAPTURE, { source });
  }, []);

  const trackButtonClick = useCallback((buttonName: string, location: string, metadata?: Record<string, any>) => {
    trackConversion('button_click', buttonName, { location, ...metadata });
  }, []);

  const trackFormSubmit = useCallback((formName: string, metadata?: Record<string, any>) => {
    trackConversion('form_submit', formName, metadata);
  }, []);

  const trackPageViewWithFunnel = useCallback((page: string, funnelStep: FunnelStep, metadata?: Record<string, any>) => {
    trackPageView(page);
    trackFunnelStep(funnelStep, metadata);
  }, []);

  const trackTimeOnPage = useCallback((timeInSeconds: number, page: string) => {
    trackConversion('time_on_page', timeInSeconds, { page });
  }, []);

  return {
    trackClick,
    trackFormInteraction,
    trackHover,
    trackEmailCapture,
    trackButtonClick,
    trackFormSubmit,
    trackPageViewWithFunnel,
    trackTimeOnPage,
    trackFunnelStep
  };
};

// Hook for tracking page-specific analytics
export const usePageAnalytics = (pageName: string, funnelStep: FunnelStep) => {
  const { trackPageViewWithFunnel, trackTimeOnPage } = useAnalytics();
  const startTime = useRef(Date.now());

  useEffect(() => {
    // Track page view
    trackPageViewWithFunnel(pageName, funnelStep);

    // Track time on page when leaving
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeSpent, pageName);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pageName, funnelStep, trackPageViewWithFunnel, trackTimeOnPage]);

  return {
    trackTimeOnPage: () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeSpent, pageName);
    }
  };
};

// Hook for tracking form analytics
export const useFormAnalytics = (formName: string) => {
  const { trackFormInteraction, trackFormSubmit } = useAnalytics();

  const trackFieldFocus = useCallback((fieldName: string) => {
    trackFormInteraction(document.activeElement as HTMLElement, { 
      form: formName, 
      field: fieldName, 
      action: 'focus' 
    });
  }, [formName, trackFormInteraction]);

  const trackFieldBlur = useCallback((fieldName: string) => {
    trackFormInteraction(document.activeElement as HTMLElement, { 
      form: formName, 
      field: fieldName, 
      action: 'blur' 
    });
  }, [formName, trackFormInteraction]);

  const trackFieldChange = useCallback((fieldName: string, value: string) => {
    trackFormInteraction(document.activeElement as HTMLElement, { 
      form: formName, 
      field: fieldName, 
      action: 'change',
      value_length: value.length
    });
  }, [formName, trackFormInteraction]);

  const trackFormSubmission = useCallback((metadata?: Record<string, any>) => {
    trackFormSubmit(formName, metadata);
  }, [formName, trackFormSubmit]);

  return {
    trackFieldFocus,
    trackFieldBlur,
    trackFieldChange,
    trackFormSubmission
  };
};

// Hook for tracking button analytics
export const useButtonAnalytics = (buttonName: string, location: string) => {
  const { trackButtonClick, trackClick } = useAnalytics();

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>, metadata?: Record<string, any>) => {
    trackClick(event.currentTarget, { 
      button_name: buttonName, 
      location, 
      ...metadata 
    });
    trackButtonClick(buttonName, location, metadata);
  }, [buttonName, location, trackClick, trackButtonClick]);

  return { handleClick };
};
