// This public HTTP endpoint is disabled while ClauseVault is not publicly available.
// Email sending logic has been moved to lib/send-access-email.ts (server-only function)
// called directly from app/api/webhooks/stripe/route.ts and lib/webhook-manager.ts.
//
// PRESERVED SOURCE — do not delete. Required for ClauseVault standalone extraction.
// To restore: move the sendAccessEmail logic back into a POST handler here,
// and add appropriate server-to-server authentication.
//
// Original callers:
//   - app/api/webhooks/stripe/route.ts (sendAccessEmail helper function)
//   - lib/webhook-manager.ts (WebhookManager.sendAccessEmail private method)

import { NextRequest, NextResponse } from 'next/server';

export async function POST(_request: NextRequest) {
  return NextResponse.json(
    { error: 'Service temporarily unavailable' },
    { status: 503 }
  );
}
