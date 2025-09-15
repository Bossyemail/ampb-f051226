import { NextRequest, NextResponse } from 'next/server';
import { rateLimiters, withRateLimit } from '@/lib/rate-limiter';

// Enhanced analytics storage (replace with database in production)
interface AnalyticsEvent {
  id: string;
  event: string;
  userId?: string;
  email?: string;
  product?: string;
  sessionId?: string;
  parameters?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  timestamp: Date;
  userAgent?: string;
  ip?: string;
}

interface FunnelData {
  sessionId: string;
  steps: string[];
  timestamp: Date;
}

interface PerformanceMetric {
  metricName: string;
  metricValue: number;
  sessionId: string;
  url: string;
  timestamp: Date;
}

interface UserJourney {
  sessionId: string;
  actions: Array<{
    type: string;
    element: string;
    timestamp: number;
    metadata?: Record<string, unknown>;
  }>;
  conversions: Array<{
    type: string;
    value?: string | number;
    timestamp: number;
  }>;
}

interface RevenueMetrics {
  userId: string;
  ltv: number;
  cac: number;
  churnRate: number;
  revenuePerUser: number;
  upgradeEvents: number;
  downgradeEvents: number;
  paymentFailures: number;
  recoveryRate: number;
  timestamp: Date;
}

interface ContentMetrics {
  clauseCopies: Array<{ clause: string; copies: number; revenue: number }>;
  searchQueries: Array<{ query: string; count: number; noResults: number }>;
  templateDownloads: Array<{ template: string; downloads: number; conversions: number }>;
  pageEngagement: Record<string, number>;
  videoCompletion: Array<{ video: string; starts: number; completions: number; rate: number }>;
  bookNotifications: Array<{ book: string; signups: number; purchases: number; conversionRate: number }>;
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

interface CrossAppMetrics {
  multiProductUsers: Array<{ userId: string; apps: string[]; totalSpent: number }>;
  crossAppFlows: Array<{ userId: string; flow: string[]; timestamp: Date }>;
}

// In-memory storage
const analyticsEvents: AnalyticsEvent[] = [];
const funnelData: FunnelData[] = [];
const performanceMetrics: PerformanceMetric[] = [];
const userJourneys: UserJourney[] = [];
const revenueMetrics: RevenueMetrics[] = [];
const contentMetrics: ContentMetrics[] = [];
const marketingMetrics: MarketingMetrics[] = [];
const deviceMetrics: DeviceMetrics[] = [];
const crossAppMetrics: CrossAppMetrics[] = [];

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const rateLimitError = withRateLimit(rateLimiters.analytics)(request);
    if (rateLimitError) {
      return rateLimitError;
    }

    const body = await request.json();
    const { event, userId, email, product, sessionId, parameters, metadata } = body;

    if (!event) {
      return NextResponse.json(
        { error: 'Event type is required' },
        { status: 400 }
      );
    }

    const analyticsEvent: AnalyticsEvent = {
      id: `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      event,
      userId,
      email,
      product,
      sessionId,
      parameters,
      metadata,
      timestamp: new Date(),
      userAgent: request.headers.get('user-agent') || undefined,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
    };

    analyticsEvents.push(analyticsEvent);

    // Handle specific event types
    if (event === 'funnel_step' && sessionId && parameters?.funnel_step) {
      const existingFunnel = funnelData.find(f => f.sessionId === sessionId);
      if (existingFunnel) {
        if (!existingFunnel.steps.includes(parameters.funnel_step as string)) {
          existingFunnel.steps.push(parameters.funnel_step as string);
        }
      } else {
        funnelData.push({
          sessionId,
          steps: [parameters.funnel_step as string],
          timestamp: new Date()
        });
      }
    }

    if (event === 'performance_metric' && parameters?.metric_name && parameters?.metric_value) {
      performanceMetrics.push({
        metricName: parameters.metric_name as string,
        metricValue: parameters.metric_value as number,
        sessionId: sessionId || 'unknown',
        url: request.headers.get('referer') || 'unknown',
        timestamp: new Date()
      });
    }

    if (event === 'user_action' && sessionId) {
      const existingJourney = userJourneys.find(j => j.sessionId === sessionId);
      if (existingJourney) {
        existingJourney.actions.push({
          type: parameters?.action_type as string || 'unknown',
          element: parameters?.element as string || 'unknown',
          timestamp: Date.now(),
          metadata: parameters?.metadata as Record<string, unknown>
        });
      }
    }

    if (event === 'conversion' && sessionId) {
      const existingJourney = userJourneys.find(j => j.sessionId === sessionId);
      if (existingJourney) {
        existingJourney.conversions.push({
          type: parameters?.conversion_type as string || 'unknown',
          value: parameters?.value,
          timestamp: Date.now()
        });
      }
    }

    // Handle advanced analytics events
    if (event === 'revenue_event' && parameters?.user_id) {
      const existingRevenue = revenueMetrics.find(r => r.userId === parameters.user_id);
      if (existingRevenue) {
        switch (parameters.event_type) {
          case 'subscription_upgrade':
            existingRevenue.upgradeEvents++;
            break;
          case 'subscription_downgrade':
            existingRevenue.downgradeEvents++;
            break;
          case 'payment_failure':
            existingRevenue.paymentFailures++;
            break;
          case 'payment_recovery':
            existingRevenue.recoveryRate = (existingRevenue.recoveryRate + 1) / existingRevenue.paymentFailures * 100;
            break;
        }
      }
    }

    if (event === 'clause_copy' && parameters?.clause_title) {
      const existingContent = contentMetrics[0] || {
        clauseCopies: [],
        searchQueries: [],
        templateDownloads: [],
        pageEngagement: {},
        videoCompletion: [],
        bookNotifications: []
      };
      
      const existingClause = existingContent.clauseCopies.find(c => c.clause === parameters.clause_title);
      if (existingClause) {
        existingClause.copies++;
        existingClause.revenue += parameters.revenue || 0;
      } else {
        existingContent.clauseCopies.push({
          clause: parameters.clause_title,
          copies: 1,
          revenue: parameters.revenue || 0
        });
      }
      
      if (contentMetrics.length === 0) {
        contentMetrics.push(existingContent);
      }
    }

    if (event === 'search_query' && parameters?.query) {
      const existingContent = contentMetrics[0] || {
        clauseCopies: [],
        searchQueries: [],
        templateDownloads: [],
        pageEngagement: {},
        videoCompletion: [],
        bookNotifications: []
      };
      
      const existingQuery = existingContent.searchQueries.find(q => q.query === parameters.query);
      if (existingQuery) {
        existingQuery.count++;
        if (!parameters.has_results) {
          existingQuery.noResults++;
        }
      } else {
        existingContent.searchQueries.push({
          query: parameters.query,
          count: 1,
          noResults: parameters.has_results ? 0 : 1
        });
      }
      
      if (contentMetrics.length === 0) {
        contentMetrics.push(existingContent);
      }
    }

    if (event === 'traffic_source' && sessionId) {
      const existingMarketing = marketingMetrics[0] || {
        trafficSources: {},
        utmCampaigns: [],
        referralPerformance: [],
        socialEngagement: {}
      };
      
      const source = parameters.utm_source || 'direct';
      if (!existingMarketing.trafficSources[source]) {
        existingMarketing.trafficSources[source] = { sessions: 0, conversions: 0, revenue: 0 };
      }
      existingMarketing.trafficSources[source].sessions++;
      
      if (marketingMetrics.length === 0) {
        marketingMetrics.push(existingMarketing);
      }
    }

    if (event === 'device_info' && parameters?.device_type) {
      const existingDevice = deviceMetrics[0] || {
        mobileVsDesktop: { mobile: 0, desktop: 0, tablet: 0 },
        browserUsage: {},
        devicePerformance: {}
      };
      
      existingDevice.mobileVsDesktop[parameters.device_type as keyof typeof existingDevice.mobileVsDesktop]++;
      
      if (deviceMetrics.length === 0) {
        deviceMetrics.push(existingDevice);
      }
    }

    if (event === 'cross_app_detected' && parameters?.apps && parameters?.user_id) {
      const existingCrossApp = crossAppMetrics[0] || {
        multiProductUsers: [],
        crossAppFlows: []
      };
      
      const existingUser = existingCrossApp.multiProductUsers.find(u => u.userId === parameters.user_id);
      if (existingUser) {
        existingUser.apps = [...new Set([...existingUser.apps, ...parameters.apps])];
      } else {
        existingCrossApp.multiProductUsers.push({
          userId: parameters.user_id,
          apps: parameters.apps,
          totalSpent: 0 // This would be calculated from revenue data
        });
      }
      
      if (crossAppMetrics.length === 0) {
        crossAppMetrics.push(existingCrossApp);
      }
    }

    // Log important events
    if (['purchase_completed', 'user_registered', 'clause_copied', 'email_capture', 'revenue_event', 'clause_copy', 'cross_app_detected'].includes(event)) {
      console.log('Analytics Event:', {
        event,
        email,
        product,
        sessionId,
        timestamp: analyticsEvent.timestamp,
      });
    }

    return NextResponse.json({ success: true, eventId: analyticsEvent.id });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const event = searchParams.get('event');
    const product = searchParams.get('product');
    const days = parseInt(searchParams.get('days') || '30');

    let filteredEvents = analyticsEvents;

    // Filter by event type
    if (event) {
      filteredEvents = filteredEvents.filter(e => e.event === event);
    }

    // Filter by product
    if (product) {
      filteredEvents = filteredEvents.filter(e => e.product === product);
    }

    // Filter by date range
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    filteredEvents = filteredEvents.filter(e => e.timestamp >= cutoffDate);

    // Calculate metrics
    const metrics = {
      totalEvents: filteredEvents.length,
      uniqueUsers: new Set(filteredEvents.map(e => e.email).filter(Boolean)).size,
      eventsByType: filteredEvents.reduce((acc, e) => {
        acc[e.event] = (acc[e.event] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      recentEvents: filteredEvents
        .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
        .slice(0, 10)
        .map(e => ({
          event: e.event,
          email: e.email,
          product: e.product,
          timestamp: e.timestamp,
        })),
    };

    return NextResponse.json({ success: true, metrics });
  } catch (error) {
    console.error('Analytics retrieval error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve analytics' },
      { status: 500 }
    );
  }
}
