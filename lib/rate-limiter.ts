// Rate Limiting System
interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
  message?: string;
}

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

class RateLimiter {
  private store: RateLimitStore = {};
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
    
    // Clean up expired entries every minute
    setInterval(() => this.cleanup(), 60000);
  }

  private cleanup() {
    const now = Date.now();
    Object.keys(this.store).forEach(key => {
      if (this.store[key].resetTime < now) {
        delete this.store[key];
      }
    });
  }

  private getKey(identifier: string): string {
    return identifier;
  }

  private getWindowStart(): number {
    return Math.floor(Date.now() / this.config.windowMs) * this.config.windowMs;
  }

  isAllowed(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    const key = this.getKey(identifier);
    const now = Date.now();
    const windowStart = this.getWindowStart();
    const resetTime = windowStart + this.config.windowMs;

    // Get or create entry
    if (!this.store[key] || this.store[key].resetTime < windowStart) {
      this.store[key] = {
        count: 0,
        resetTime: resetTime
      };
    }

    // Check if limit exceeded
    if (this.store[key].count >= this.config.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: this.store[key].resetTime
      };
    }

    // Increment counter
    this.store[key].count++;

    return {
      allowed: true,
      remaining: this.config.maxRequests - this.store[key].count,
      resetTime: this.store[key].resetTime
    };
  }

  getRemaining(identifier: string): number {
    const key = this.getKey(identifier);
    const entry = this.store[key];
    
    if (!entry) {
      return this.config.maxRequests;
    }

    const now = Date.now();
    if (entry.resetTime < now) {
      return this.config.maxRequests;
    }

    return Math.max(0, this.config.maxRequests - entry.count);
  }

  getResetTime(identifier: string): number {
    const key = this.getKey(identifier);
    const entry = this.store[key];
    
    if (!entry) {
      return this.getWindowStart() + this.config.windowMs;
    }

    return entry.resetTime;
  }
}

// Pre-configured rate limiters for different endpoints
export const rateLimiters = {
  // General API endpoints - 100 requests per 15 minutes
  general: new RateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100,
    message: 'Too many requests, please try again later'
  }),

  // Analytics endpoints - 1000 requests per hour
  analytics: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 1000,
    message: 'Analytics rate limit exceeded'
  }),

  // Contact form - 5 submissions per hour
  contact: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 5,
    message: 'Too many contact form submissions, please try again later'
  }),

  // Email capture - 10 submissions per hour
  emailCapture: new RateLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10,
    message: 'Too many email signups, please try again later'
  }),

  // Admin endpoints - 50 requests per 5 minutes
  admin: new RateLimiter({
    windowMs: 5 * 60 * 1000, // 5 minutes
    maxRequests: 50,
    message: 'Admin rate limit exceeded'
  })
};

// Helper function to get client identifier
export function getClientIdentifier(request: Request): string {
  // Try to get IP from various headers
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  
  const ip = forwarded?.split(',')[0] || realIp || cfConnectingIp || 'unknown';
  
  // For development, use a more specific identifier
  if (ip === 'unknown' || ip === '127.0.0.1') {
    return 'localhost';
  }
  
  return ip;
}

// Rate limiting middleware function
export function withRateLimit(
  limiter: RateLimiter,
  getIdentifier?: (request: Request) => string
) {
  return (request: Request) => {
    const identifier = getIdentifier ? getIdentifier(request) : getClientIdentifier(request);
    const result = limiter.isAllowed(identifier);

    if (!result.allowed) {
      return new Response(
        JSON.stringify({
          error: 'Rate limit exceeded',
          message: limiter['config'].message || 'Too many requests',
          resetTime: result.resetTime,
          remaining: result.remaining
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Limit': limiter['config'].maxRequests.toString(),
            'X-RateLimit-Remaining': result.remaining.toString(),
            'X-RateLimit-Reset': result.resetTime.toString(),
            'Retry-After': Math.ceil((result.resetTime - Date.now()) / 1000).toString()
          }
        }
      );
    }

    return null; // No rate limit violation
  };
}

// Export types
export type { RateLimitConfig, RateLimitStore };
