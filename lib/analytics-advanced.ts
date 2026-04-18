// Advanced Analytics & Business Intelligence Tracking System

interface RevenueMetrics {
  ltv: number;
  cac: number;
  churnRate: number;
  revenuePerUser: number;
  upgradeEvents: number;
  downgradeEvents: number;
  paymentFailures: number;
  recoveryRate: number;
}

interface ContentMetrics {
  topClauses: Array<{ clause: string; copies: number; revenue: number }>;
  searchQueries: Array<{ query: string; count: number; noResults: number }>;
  templateDownloads: Array<{ template: string; downloads: number; conversions: number }>;
  pageEngagement: Record<string, number>; // section -> avg time
  videoCompletion: Array<{ video: string; starts: number; completions: number; rate: number }>;
  bookNotifications: Array<{ book: string; signups: number; purchases: number; conversionRate: number }>;
}

interface UserJourneyMetrics {
  crossAppUsers: number;
  multiProductUsers: Array<{ userId: string; apps: string[]; totalSpent: number }>;
  onboardingCompletion: number;
  featureAdoption: Record<string, number>;
}

interface MarketingMetrics {
  trafficSources: Record<string, { sessions: number; conversions: number; revenue: number }>;
  utmCampaigns: Array<{ campaign: string; source: string; medium: string; sessions: number; conversions: number; revenue: number }>;
  referralPerformance: Array<{ referrer: string; visits: number; conversions: number; revenue: number }>;
  socialEngagement: Record<string, { clicks: number; conversions: number; revenue: number }>;
}

interface DeviceMetrics {
  mobileVsDesktop: { mobile: number; desktop: number; tablet: number };
  browserUsage: Record<string, number>;
  devicePerformance: Record<string, { loadTime: number; bounceRate: number; conversionRate: number }>;
}

class AdvancedAnalytics {
  private sessionId: string;
  private userId?: string;
  private startTime: number;
  private pageEngagement: Map<string, number> = new Map();
  private videoTracking: Map<string, { startTime: number; progress: number }> = new Map();

  constructor() {
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.initializeAdvancedTracking();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeAdvancedTracking() {
    // Track device and browser information
    this.trackDeviceInfo();
    
    // Track traffic source and UTM parameters
    this.trackTrafficSource();
    
    // Track page engagement by section
    this.trackPageEngagement();
    
    // Track video completion rates
    this.trackVideoEngagement();
    
    // Track cross-app user flows
    this.trackCrossAppUsage();
  }

  // Revenue & Business Intelligence Tracking
  public trackRevenueEvent(eventType: 'subscription_upgrade' | 'subscription_downgrade' | 'payment_failure' | 'payment_recovery', data: any) {
    this.sendEvent('revenue_event', {
      event_type: eventType,
      user_id: this.userId,
      session_id: this.sessionId,
      ...data
    });
  }

  public trackCustomerMetrics(userId: string, metrics: Partial<RevenueMetrics>) {
    this.sendEvent('customer_metrics', {
      user_id: userId,
      session_id: this.sessionId,
      metrics
    });
  }

  // Content Performance Tracking
  public trackClauseCopy(clauseTitle: string, revenue: number = 0) {
    this.sendEvent('clause_copy', {
      clause_title: clauseTitle,
      revenue,
      user_id: this.userId,
      session_id: this.sessionId
    });
  }

  public trackSearchQuery(query: string, hasResults: boolean, resultsCount: number = 0) {
    this.sendEvent('search_query', {
      query,
      has_results: hasResults,
      results_count: resultsCount,
      user_id: this.userId,
      session_id: this.sessionId
    });
  }

  public trackTemplateDownload(templateName: string, conversion: boolean = false) {
    this.sendEvent('template_download', {
      template_name: templateName,
      conversion,
      user_id: this.userId,
      session_id: this.sessionId
    });
  }

  public trackBookNotificationSignup(bookTitle: string) {
    this.sendEvent('book_notification_signup', {
      book_title: bookTitle,
      user_id: this.userId,
      session_id: this.sessionId
    });
  }

  public trackBookPurchase(bookTitle: string, revenue: number) {
    this.sendEvent('book_purchase', {
      book_title: bookTitle,
      revenue,
      user_id: this.userId,
      session_id: this.sessionId
    });
  }

  // User Journey Tracking
  public trackCrossAppUsage(appName: string) {
    this.sendEvent('cross_app_usage', {
      app_name: appName,
      user_id: this.userId,
      session_id: this.sessionId,
      timestamp: Date.now()
    });
  }

  public trackFeatureAdoption(featureName: string, adopted: boolean) {
    this.sendEvent('feature_adoption', {
      feature_name: featureName,
      adopted,
      user_id: this.userId,
      session_id: this.sessionId
    });
  }

  public trackOnboardingStep(step: string, completed: boolean) {
    this.sendEvent('onboarding_step', {
      step,
      completed,
      user_id: this.userId,
      session_id: this.sessionId
    });
  }

  // Marketing Attribution Tracking
  private trackTrafficSource() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const referrer = document.referrer;

    this.sendEvent('traffic_source', {
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      referrer,
      session_id: this.sessionId,
      timestamp: Date.now()
    });
  }

  public trackSocialEngagement(platform: string, action: string, revenue: number = 0) {
    this.sendEvent('social_engagement', {
      platform,
      action,
      revenue,
      user_id: this.userId,
      session_id: this.sessionId
    });
  }

  public trackReferral(referrerUrl: string, revenue: number = 0) {
    this.sendEvent('referral_tracking', {
      referrer_url: referrerUrl,
      revenue,
      user_id: this.userId,
      session_id: this.sessionId
    });
  }

  // Device & Technical Tracking
  private trackDeviceInfo() {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);
    
    let deviceType = 'desktop';
    if (isTablet) deviceType = 'tablet';
    else if (isMobile) deviceType = 'mobile';

    this.sendEvent('device_info', {
      device_type: deviceType,
      user_agent: userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      session_id: this.sessionId
    });
  }

  // Page Engagement Tracking
  private trackPageEngagement() {
    const sections = document.querySelectorAll('[data-section]');
    
    sections.forEach(section => {
      const sectionName = section.getAttribute('data-section');
      if (!sectionName) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.pageEngagement.set(sectionName, Date.now());
          } else if (this.pageEngagement.has(sectionName)) {
            const startTime = this.pageEngagement.get(sectionName)!;
            const timeSpent = Date.now() - startTime;
            
            this.sendEvent('section_engagement', {
              section: sectionName,
              time_spent: timeSpent,
              user_id: this.userId,
              session_id: this.sessionId
            });
            
            this.pageEngagement.delete(sectionName);
          }
        });
      });

      observer.observe(section);
    });
  }

  // Video Tracking
  private trackVideoEngagement() {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
      const videoId = video.getAttribute('data-video-id') || 'unknown';
      
      video.addEventListener('play', () => {
        this.videoTracking.set(videoId, { startTime: Date.now(), progress: 0 });
        this.sendEvent('video_start', {
          video_id: videoId,
          user_id: this.userId,
          session_id: this.sessionId
        });
      });

      video.addEventListener('timeupdate', () => {
        if (this.videoTracking.has(videoId)) {
          const progress = (video.currentTime / video.duration) * 100;
          this.videoTracking.get(videoId)!.progress = progress;
        }
      });

      video.addEventListener('ended', () => {
        if (this.videoTracking.has(videoId)) {
          this.sendEvent('video_complete', {
            video_id: videoId,
            user_id: this.userId,
            session_id: this.sessionId
          });
          this.videoTracking.delete(videoId);
        }
      });
    });
  }

  // Cross-app Usage Tracking
  private trackCrossAppUsage() {
    // Check for existing user cookies/sessions across apps
    const apps = ['clausevault', 'bossyemail', 'main-site'];
    const crossAppData: string[] = [];

    apps.forEach(app => {
      const cookieName = `${app}_user_session`;
      if (document.cookie.includes(cookieName)) {
        crossAppData.push(app);
      }
    });

    if (crossAppData.length > 1) {
      this.sendEvent('cross_app_detected', {
        apps: crossAppData,
        user_id: this.userId,
        session_id: this.sessionId
      });
    }
  }

  private async sendEvent(eventName: string, parameters: Record<string, any>) {
    try {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters);
      }

      // Send to custom analytics endpoint
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
      console.error('Advanced analytics tracking error:', error);
    }
  }

  public setUserId(userId: string) {
    this.userId = userId;
  }

  public getSessionId(): string {
    return this.sessionId;
  }
}

// Initialize advanced analytics
let advancedAnalyticsInstance: AdvancedAnalytics | null = null;

export const initializeAdvancedAnalytics = () => {
  if (typeof window !== 'undefined' && !advancedAnalyticsInstance) {
    advancedAnalyticsInstance = new AdvancedAnalytics();
  }
  return advancedAnalyticsInstance;
};

export const getAdvancedAnalytics = () => advancedAnalyticsInstance;

// Convenience functions
export const trackRevenueEvent = (eventType: 'subscription_upgrade' | 'subscription_downgrade' | 'payment_failure' | 'payment_recovery', data: any) => {
  advancedAnalyticsInstance?.trackRevenueEvent(eventType, data);
};

export const trackClauseCopy = (clauseTitle: string, revenue: number = 0) => {
  advancedAnalyticsInstance?.trackClauseCopy(clauseTitle, revenue);
};

export const trackSearchQuery = (query: string, hasResults: boolean, resultsCount: number = 0) => {
  advancedAnalyticsInstance?.trackSearchQuery(query, hasResults, resultsCount);
};

export const trackTemplateDownload = (templateName: string, conversion: boolean = false) => {
  advancedAnalyticsInstance?.trackTemplateDownload(templateName, conversion);
};

export const trackCrossAppUsage = (appName: string) => {
  advancedAnalyticsInstance?.trackCrossAppUsage(appName);
};

export const trackSocialEngagement = (platform: string, action: string, revenue: number = 0) => {
  advancedAnalyticsInstance?.trackSocialEngagement(platform, action, revenue);
};

export const trackFeatureAdoption = (featureName: string, adopted: boolean) => {
  advancedAnalyticsInstance?.trackFeatureAdoption(featureName, adopted);
};

export type { RevenueMetrics, ContentMetrics, UserJourneyMetrics, MarketingMetrics, DeviceMetrics };
