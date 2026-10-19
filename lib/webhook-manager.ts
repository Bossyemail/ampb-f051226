// Advanced Webhook Management System
import { sendAccessEmail } from './send-access-email';

interface WebhookEvent {
  id: string;
  provider: 'stripe' | 'clerk' | 'custom';
  eventType: string;
  payload: any;
  timestamp: Date;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'retrying';
  attempts: number;
  maxAttempts: number;
  nextRetryAt?: Date;
  error?: string;
  metadata?: Record<string, any>;
}

interface WebhookConfig {
  provider: string;
  endpoint: string;
  secret: string;
  enabled: boolean;
  retryPolicy: {
    maxAttempts: number;
    backoffMultiplier: number;
    initialDelay: number;
  };
  events: string[];
}

interface WebhookStats {
  totalEvents: number;
  successfulEvents: number;
  failedEvents: number;
  retryEvents: number;
  averageProcessingTime: number;
  lastEventAt?: Date;
  eventsByType: Record<string, number>;
}

class WebhookManager {
  private events: WebhookEvent[] = [];
  private configs: WebhookConfig[] = [];
  private processingQueue: string[] = [];
  private isProcessing = false;

  constructor() {
    this.initializeConfigs();
    this.startProcessor();
  }

  private initializeConfigs() {
    this.configs = [
      {
        provider: 'stripe',
        endpoint: '/api/webhooks/stripe',
        secret: process.env.STRIPE_WEBHOOK_SECRET || '',
        enabled: true,
        retryPolicy: {
          maxAttempts: 3,
          backoffMultiplier: 2,
          initialDelay: 1000
        },
        events: [
          'checkout.session.completed',
          'invoice.payment_succeeded',
          'invoice.payment_failed',
          'customer.subscription.created',
          'customer.subscription.updated',
          'customer.subscription.deleted'
        ]
      },
      {
        provider: 'clerk',
        endpoint: '/api/webhooks/clerk',
        secret: process.env.CLERK_WEBHOOK_SECRET || '',
        enabled: true,
        retryPolicy: {
          maxAttempts: 3,
          backoffMultiplier: 2,
          initialDelay: 1000
        },
        events: [
          'user.created',
          'user.updated',
          'user.deleted',
          'session.created',
          'session.ended'
        ]
      }
    ];
  }

  // Register a new webhook event
  async registerEvent(
    provider: string,
    eventType: string,
    payload: any,
    metadata?: Record<string, any>
  ): Promise<string> {
    const eventId = this.generateEventId();
    const config = this.configs.find(c => c.provider === provider);
    
    if (!config || !config.enabled) {
      throw new Error(`Webhook provider ${provider} not found or disabled`);
    }

    if (!config.events.includes(eventType)) {
      throw new Error(`Event type ${eventType} not allowed for provider ${provider}`);
    }

    const event: WebhookEvent = {
      id: eventId,
      provider: provider as any,
      eventType,
      payload,
      timestamp: new Date(),
      status: 'pending',
      attempts: 0,
      maxAttempts: config.retryPolicy.maxAttempts,
      metadata
    };

    this.events.push(event);
    this.processingQueue.push(eventId);

    console.log(`Webhook event registered: ${eventId} (${provider}:${eventType})`);
    
    return eventId;
  }

  // Process webhook events
  private async startProcessor() {
    if (this.isProcessing) return;
    
    this.isProcessing = true;
    
    setInterval(async () => {
      if (this.processingQueue.length > 0) {
        const eventId = this.processingQueue.shift();
        if (eventId) {
          await this.processEvent(eventId);
        }
      }
    }, 1000); // Process every second
  }

  private async processEvent(eventId: string) {
    const event = this.events.find(e => e.id === eventId);
    if (!event) return;

    const startTime = Date.now();
    event.status = 'processing';
    event.attempts++;

    try {
      await this.executeWebhookHandler(event);
      
      event.status = 'completed';
      const processingTime = Date.now() - startTime;
      console.log(`Webhook event ${eventId} processed successfully in ${processingTime}ms`);
      
    } catch (error) {
      console.error(`Webhook event ${eventId} failed:`, error);
      
      event.error = error instanceof Error ? error.message : 'Unknown error';
      
      if (event.attempts < event.maxAttempts) {
        event.status = 'retrying';
        event.nextRetryAt = this.calculateNextRetry(event);
        this.processingQueue.push(eventId); // Re-queue for retry
      } else {
        event.status = 'failed';
        console.error(`Webhook event ${eventId} failed permanently after ${event.attempts} attempts`);
      }
    }
  }

  private calculateNextRetry(event: WebhookEvent): Date {
    const config = this.configs.find(c => c.provider === event.provider);
    if (!config) return new Date(Date.now() + 60000); // Default 1 minute

    const delay = config.retryPolicy.initialDelay * 
                  Math.pow(config.retryPolicy.backoffMultiplier, event.attempts - 1);
    
    return new Date(Date.now() + delay);
  }

  private async executeWebhookHandler(event: WebhookEvent) {
    switch (event.provider) {
      case 'stripe':
        await this.handleStripeWebhook(event);
        break;
      case 'clerk':
        await this.handleClerkWebhook(event);
        break;
      default:
        throw new Error(`Unknown webhook provider: ${event.provider}`);
    }
  }

  private async handleStripeWebhook(event: WebhookEvent) {
    const { eventType, payload } = event;

    switch (eventType) {
      case 'checkout.session.completed':
        await this.handleCheckoutCompleted(payload);
        break;
      case 'invoice.payment_succeeded':
        await this.handlePaymentSucceeded(payload);
        break;
      case 'invoice.payment_failed':
        await this.handlePaymentFailed(payload);
        break;
      case 'customer.subscription.created':
        await this.handleSubscriptionCreated(payload);
        break;
      case 'customer.subscription.updated':
        await this.handleSubscriptionUpdated(payload);
        break;
      case 'customer.subscription.deleted':
        await this.handleSubscriptionDeleted(payload);
        break;
      default:
        console.log(`Unhandled Stripe event type: ${eventType}`);
    }
  }

  private async handleClerkWebhook(event: WebhookEvent) {
    const { eventType, payload } = event;

    switch (eventType) {
      case 'user.created':
        await this.handleUserCreated(payload);
        break;
      case 'user.updated':
        await this.handleUserUpdated(payload);
        break;
      case 'user.deleted':
        await this.handleUserDeleted(payload);
        break;
      case 'session.created':
        await this.handleSessionCreated(payload);
        break;
      case 'session.ended':
        await this.handleSessionEnded(payload);
        break;
      default:
        console.log(`Unhandled Clerk event type: ${eventType}`);
    }
  }

  // Stripe webhook handlers
  private async handleCheckoutCompleted(session: any) {
    if (session.customer_email && session.metadata?.product === 'clausevault') {
      await sendAccessEmail({
        email: session.customer_email,
        customerName: session.customer_details?.name || '',
        productName: 'ClauseVault Pro',
        accessUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/dealdesk?success=true`,
      });
    }
  }

  private async handlePaymentSucceeded(invoice: any) {
    console.log('Payment succeeded for:', invoice.customer_email);
    // Could send renewal confirmation email here
  }

  private async handlePaymentFailed(invoice: any) {
    console.log('Payment failed for:', invoice.customer_email);
    // Could send payment failure notification here
  }

  private async handleSubscriptionCreated(subscription: any) {
    console.log('Subscription created:', subscription.id);
    // Handle new subscription
  }

  private async handleSubscriptionUpdated(subscription: any) {
    console.log('Subscription updated:', subscription.id);
    // Handle subscription changes
  }

  private async handleSubscriptionDeleted(subscription: any) {
    console.log('Subscription deleted:', subscription.id);
    // Handle subscription cancellation
  }

  // Clerk webhook handlers
  private async handleUserCreated(user: any) {
    console.log('User created:', user.id);
    // Handle new user registration
  }

  private async handleUserUpdated(user: any) {
    console.log('User updated:', user.id);
    // Handle user profile updates
  }

  private async handleUserDeleted(user: any) {
    console.log('User deleted:', user.id);
    // Handle user deletion
  }

  private async handleSessionCreated(session: any) {
    console.log('Session created:', session.id);
    // Handle user login
  }

  private async handleSessionEnded(session: any) {
    console.log('Session ended:', session.id);
    // Handle user logout
  }

  // Get webhook statistics
  getStats(): WebhookStats {
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    const recentEvents = this.events.filter(e => e.timestamp > last24Hours);
    
    const stats: WebhookStats = {
      totalEvents: recentEvents.length,
      successfulEvents: recentEvents.filter(e => e.status === 'completed').length,
      failedEvents: recentEvents.filter(e => e.status === 'failed').length,
      retryEvents: recentEvents.filter(e => e.status === 'retrying').length,
      averageProcessingTime: 0,
      eventsByType: {}
    };

    // Calculate average processing time
    const completedEvents = recentEvents.filter(e => e.status === 'completed');
    if (completedEvents.length > 0) {
      // This would need to be tracked during processing
      stats.averageProcessingTime = 250; // Mock value
    }

    // Count events by type
    recentEvents.forEach(event => {
      stats.eventsByType[event.eventType] = (stats.eventsByType[event.eventType] || 0) + 1;
    });

    // Get last event timestamp
    const sortedEvents = recentEvents.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    stats.lastEventAt = sortedEvents[0]?.timestamp;

    return stats;
  }

  // Get events by status
  getEventsByStatus(status: WebhookEvent['status']): WebhookEvent[] {
    return this.events.filter(e => e.status === status);
  }

  // Get failed events that need attention
  getFailedEvents(): WebhookEvent[] {
    return this.events.filter(e => e.status === 'failed');
  }

  // Retry failed event
  async retryEvent(eventId: string): Promise<boolean> {
    const event = this.events.find(e => e.id === eventId);
    if (!event || event.status !== 'failed') {
      return false;
    }

    event.status = 'pending';
    event.attempts = 0;
    event.error = undefined;
    this.processingQueue.push(eventId);

    return true;
  }

  // Clean up old events
  cleanup(daysOld: number = 30) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);

    const initialCount = this.events.length;
    this.events = this.events.filter(e => e.timestamp > cutoffDate);
    
    const deletedCount = initialCount - this.events.length;
    console.log(`Webhook cleanup: deleted ${deletedCount} old events`);
    
    return deletedCount;
  }

  private generateEventId(): string {
    return `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Create singleton instance
export const webhookManager = new WebhookManager();

// Export types
export type { WebhookEvent, WebhookConfig, WebhookStats };

// Helper functions for admin dashboard
export const getWebhookStats = () => {
  return webhookManager.getStats();
};

export const getFailedWebhooks = () => {
  return webhookManager.getFailedEvents();
};

export const retryFailedWebhook = async (eventId: string) => {
  return await webhookManager.retryEvent(eventId);
};

export const cleanupWebhookEvents = (daysOld: number = 30) => {
  return webhookManager.cleanup(daysOld);
};
