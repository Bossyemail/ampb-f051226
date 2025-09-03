import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory analytics storage (replace with database in production)
interface AnalyticsEvent {
  id: string;
  event: string;
  userId?: string;
  email?: string;
  product?: string;
  metadata?: Record<string, unknown>;
  timestamp: Date;
  userAgent?: string;
  ip?: string;
}

// In-memory storage
const analyticsEvents: AnalyticsEvent[] = [];

export async function POST(request: NextRequest) {
  try {
    const { event, userId, email, product, metadata } = await request.json();

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
      metadata,
      timestamp: new Date(),
      userAgent: request.headers.get('user-agent') || undefined,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
    };

    analyticsEvents.push(analyticsEvent);

    // Log important events
    if (['purchase_completed', 'user_registered', 'clause_copied'].includes(event)) {
      console.log('Analytics Event:', {
        event,
        email,
        product,
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
