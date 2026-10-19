import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source:      '/elevate',
        destination: '/tc-services',
        permanent:   true,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com *.clerk.dev *.clerk.accounts.dev *.stripe.com js.stripe.com tracker.metricool.com va.vercel-scripts.com https://*.kit.com",
              "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
              "img-src 'self' data: blob: *.google-analytics.com *.googletagmanager.com tracker.metricool.com https://*.kit.com",
              "font-src 'self' fonts.gstatic.com https://*.kit.com",
              "connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com *.clerk.dev *.clerk.accounts.dev clerk-telemetry.com *.stripe.com api.stripe.com va.vercel-scripts.com ws://localhost:* wss://localhost:* https://*.kit.com",
              "frame-src 'self' *.clerk.dev *.clerk.accounts.dev *.stripe.com js.stripe.com https://*.kit.com",
              "worker-src 'self' blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://*.kit.com",
              "frame-ancestors 'none'"
            ].join('; ')
          }
        ]
      }
    ];
  }
};

export default nextConfig;
