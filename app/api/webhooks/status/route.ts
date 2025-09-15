import { NextRequest, NextResponse } from 'next/server';
import { getWebhookStats, getFailedWebhooks, retryFailedWebhook, cleanupWebhookEvents } from '@/lib/webhook-manager';
import { rateLimiters, withRateLimit } from '@/lib/rate-limiter';

export async function GET(request: NextRequest) {
  try {
    // Apply rate limiting
    const rateLimitError = withRateLimit(rateLimiters.admin)(request);
    if (rateLimitError) {
      return rateLimitError;
    }

    const url = new URL(request.url);
    const action = url.searchParams.get('action');

    switch (action) {
      case 'stats':
        const stats = getWebhookStats();
        return NextResponse.json({ stats });

      case 'failed':
        const failedWebhooks = getFailedWebhooks();
        return NextResponse.json({ failedWebhooks });

      case 'cleanup':
        const daysOld = parseInt(url.searchParams.get('days') || '30');
        const deletedCount = cleanupWebhookEvents(daysOld);
        return NextResponse.json({ 
          message: `Cleaned up ${deletedCount} webhook events older than ${daysOld} days`,
          deletedCount 
        });

      default:
        // Return all webhook information
        const allStats = getWebhookStats();
        const allFailed = getFailedWebhooks();
        
        return NextResponse.json({
          stats: allStats,
          failedWebhooks: allFailed,
          summary: {
            totalEvents: allStats.totalEvents,
            successRate: allStats.totalEvents > 0 ? 
              ((allStats.successfulEvents / allStats.totalEvents) * 100).toFixed(1) + '%' : '0%',
            failureRate: allStats.totalEvents > 0 ? 
              ((allStats.failedEvents / allStats.totalEvents) * 100).toFixed(1) + '%' : '0%'
          }
        });
    }
  } catch (error) {
    console.error('Webhook status API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch webhook status' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const rateLimitError = withRateLimit(rateLimiters.admin)(request);
    if (rateLimitError) {
      return rateLimitError;
    }

    const body = await request.json();
    const { action, eventId } = body;

    switch (action) {
      case 'retry':
        if (!eventId) {
          return NextResponse.json(
            { error: 'Event ID is required for retry action' },
            { status: 400 }
          );
        }

        const success = await retryFailedWebhook(eventId);
        if (success) {
          return NextResponse.json({ 
            message: `Webhook event ${eventId} queued for retry`,
            eventId,
            status: 'queued'
          });
        } else {
          return NextResponse.json(
            { error: 'Failed to retry webhook event' },
            { status: 400 }
          );
        }

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Webhook action API error:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook action' },
      { status: 500 }
    );
  }
}
