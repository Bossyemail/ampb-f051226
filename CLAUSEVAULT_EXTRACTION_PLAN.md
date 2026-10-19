# ClauseVault Extraction Plan
**Status:** Preserved for future standalone deployment
**Date documented:** 2026-10-18
**Baseline snapshot:** `~/Desktop/ampb-baseline`
**Original working folder:** `~/Desktop/ampb-f` (untouched)

---

## 1. What ClauseVault Is

ClauseVault was a SaaS product sold via the aylenmontenegro.com website. It provided a searchable library of ready-to-paste real estate clauses with copy-to-clipboard functionality. Access was sold as an annual subscription via Stripe, gated by Clerk authentication, and delivered via a purchase-confirmation email sent by Resend.

The product was accessed at `/deploy` (marketing page) → Stripe checkout → `/dealdesk?success=true` (post-purchase landing). The authenticated clause library UI (`/clausevault/app/` or similar) is **absent from this repository**.

---

## 2. File Inventory

### 2a. Marketing & Entry Pages

| File | Status | Notes |
|------|--------|-------|
| `app/deploy/page.tsx` | Present | Full ClauseVault marketing landing page. CTA links to `/closeadmin` (not Stripe) in current state. Has analytics tracking, tabbed content, video hero. |
| `app/deploy/structured-data.ts` | Present | SoftwareApplication JSON-LD. URL placeholder `yourdomain.com` — never updated. Contains AggregateRating 4.8/1000 (unverified). |
| `app/clausevault/page.tsx` | Present | Single-line `redirect("/")`. Legacy URL stub. |
| `app/upgrade/page.tsx` | Present | Single-line `redirect("/closeadmin")`. Legacy URL stub. |
| `app/support/page.tsx` | Present | ClauseVault app support page. Navigation links to `/clausevault/app`, `/profile`, `/settings` — none of which exist in this repo. |

### 2b. API Routes

| File | Status | Auth | Notes |
|------|--------|------|-------|
| `app/api/create-checkout-session/route.ts` | Present | **NONE** | Creates Stripe subscription checkout. `metadata: {product: 'clausevault'}`. HIGH RISK. |
| `app/api/create-portal-session/route.ts` | Present | **NONE** | Looks up customer by email, returns Stripe billing portal URL. HIGH RISK. |
| `app/api/send-access-email/route.ts` | Present | **NONE** | Sends Resend purchase-confirmation email. ClauseVault branding hardcoded. Called by Stripe webhook internally. |
| `app/api/webhooks/stripe/route.ts` | Present | Stripe signature | Handles `checkout.session.completed`. Calls `/api/send-access-email`. `accessUrl` hardcoded to `/dealdesk?success=true`. PROPERLY SECURED. |
| `app/api/webhooks/status/route.ts` | Present | Rate-limit only | GET: webhook stats. POST: retry by eventId. No auth beyond rate limiting. |
| `app/api/admin/copy-limit-alert/route.ts` | Present | **NONE** | Accepts copy-abuse alerts. All notification code commented out. Only `console.log`. Stub. |
| `app/api/webhooks/clerk/route.ts` | **MISSING** | — | Referenced in `lib/webhook-manager.ts` config but file does not exist. |

### 2c. Shared Libraries

| File | Status | Notes |
|------|--------|-------|
| `lib/webhook-manager.ts` | Present | In-memory WebhookManager class. Handles Stripe + Clerk events. State lost on cold start. Configured for both `stripe` and `clerk` endpoint handlers. |
| `lib/stripe.ts` (or similar) | Check | May contain Stripe client initialization. Verify before extraction. |
| `lib/resend.ts` (or similar) | Check | May contain Resend client initialization. Verify before extraction. |

### 2d. Authentication (Clerk)

| Item | Status | Notes |
|------|--------|-------|
| `middleware.ts` | **MISSING** | No Clerk route protection exists. No protected routes enforced at middleware level. |
| ClerkProvider in `app/layout.tsx` | Removed | No `@clerk/nextjs` import in root layout. |
| `@clerk/nextjs` in `package.json` | Present | Still listed as dependency. Unused by current running code. |
| Clerk webhook handler | **MISSING** | `CLERK_WEBHOOK_SECRET` is referenced in `lib/webhook-manager.ts` but `/api/webhooks/clerk/route.ts` does not exist. |

### 2e. ClauseVault App UI (Authenticated Experience)

| Item | Status | Notes |
|------|--------|-------|
| `/app/clausevault/app/` directory | **MISSING** | The authenticated clause library UI is absent. This is the core product feature. |
| `/app/dealdesk/` directory | Check | Post-purchase landing. May exist as a simple success page or may be missing. |
| Clause library data | **PRESENT** | `clausevault-data/clauses.json` — 236 items with `title`, `side`, `category`, `topic`, `tags`, `snippet`, `risk_level`. Moved from `public/data/` (was publicly served) to `clausevault-data/` (not served). Original duplicate `clauses 2.json` deleted. |
| User dashboard / profile / settings | **MISSING** | `/profile` and `/settings` linked from support page — do not exist in this repo. |

### 2f. Configuration & Env Vars

| Variable | Used In | Status |
|----------|---------|--------|
| `STRIPE_SECRET_KEY` | `create-checkout-session`, `create-portal-session`, `webhooks/stripe` | Required for all Stripe operations |
| `STRIPE_WEBHOOK_SECRET` | `webhooks/stripe` | Required for webhook signature verification |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Frontend Stripe.js | In `.env.local` of `ampb-f-seo-phase1` (live key) |
| `RESEND_API_KEY` | `send-access-email` | Has fallback `re_fallback_key` if missing |
| `NEXT_PUBLIC_BASE_URL` | `webhooks/stripe` (accessUrl construction) | Must be set for correct redirect after purchase |
| `CLERK_WEBHOOK_SECRET` | `lib/webhook-manager.ts` | Referenced but no handler exists |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Previously in root layout | Removed from current layout; `@clerk/nextjs` still in package.json |
| `CLERK_SECRET_KEY` | Previously server-side Clerk | Not referenced in current code; may be needed for extraction |

---

## 3. Stripe Payment Flow

```
User on /deploy → clicks "Get Access" CTA
  → POST /api/create-checkout-session {priceId, successUrl, cancelUrl}
  → Stripe hosted checkout
  → On success: Stripe fires checkout.session.completed webhook
  → POST /api/webhooks/stripe (signature-verified)
  → Internally calls POST /api/send-access-email
  → Resend sends purchase confirmation to customer email
  → User redirected to /dealdesk?success=true
```

**Gap:** The Stripe Price ID (priceId) is not hardcoded anywhere visible in this repo. The frontend must be passing it. Locate the Price ID in Stripe Dashboard before extraction.

---

## 4. Resend Email Flow

- Route: `app/api/send-access-email/route.ts`
- From: `noreply@aylenmontenegro.com`
- Template: ClauseVault branded HTML. Lists "50+ ready-to-paste real estate clauses, searchable database, copy-to-clipboard, annual access with updates"
- Triggered by: Stripe webhook → internal fetch call
- Also callable directly (no auth) — security risk in current state

---

## 5. Clerk Authentication Architecture (as designed)

ClauseVault was designed with:
- `ClerkProvider` wrapping the app in root layout (now removed)
- `middleware.ts` protecting authenticated routes (now missing)
- Clerk webhook (`/api/webhooks/clerk`) for user lifecycle events (handler missing)
- Gated clause library at `/clausevault/app/` or `/dealdesk` (authenticated UI absent)

To restore Clerk auth for the standalone ClauseVault product:
1. Re-add ClerkProvider to the new app's root layout
2. Create `middleware.ts` with `clerkMiddleware()` protecting `/clausevault/app/`, `/dealdesk/`, `/profile/`, `/settings/`
3. Create `/api/webhooks/clerk/route.ts` handler (reference `lib/webhook-manager.ts` config)
4. Provision new Clerk application in Clerk Dashboard for the new domain

---

## 6. Shared Dependencies (Cannot Delete)

These files serve both ClauseVault and the public website. Do not remove them when securing the main site:

- `lib/webhook-manager.ts` — used by active Stripe webhook handler
- `app/api/webhooks/stripe/route.ts` — handles existing subscriber lifecycle; must remain active
- `app/api/send-access-email/route.ts` — called by Stripe webhook; must remain until subscriber base migrates

---

## 7. Missing Files for Future Extraction

The following are required to fully rebuild ClauseVault as a standalone product and are **absent from this snapshot**:

1. `/app/clausevault/app/` — the entire authenticated clause library UI
2. `/app/dealdesk/` — post-purchase authenticated experience (verify if present)
3. `middleware.ts` — Clerk route protection
4. `/app/api/webhooks/clerk/route.ts` — Clerk user lifecycle handler
5. `clauses.ts` or `clauses.json` — the actual clause library content
6. `/app/profile/` — user account management
7. `/app/settings/` — user settings
8. Stripe Price ID — not hardcoded; retrieve from Stripe Dashboard
9. Clerk application credentials for the new domain

**Action before extraction:** Check `~/Desktop/ampb-f` (original working folder) for any of these files that may exist there but were not included in this snapshot.

---

## 8. Future Migration Checklist

When deploying ClauseVault as a standalone product:

- [ ] Create new Next.js project (or fork this repo and strip public website pages)
- [ ] Provision new Clerk application → new publishable key + secret key
- [ ] Create new Stripe product/price → record new Price ID
- [ ] Create new Resend API key (or reuse + update `from` address for new domain)
- [ ] Restore `ClerkProvider` in root layout
- [ ] Create `middleware.ts` with `clerkMiddleware()` protecting app routes
- [ ] Create `/api/webhooks/clerk/route.ts` from webhook-manager config
- [ ] Update `accessUrl` in `app/api/webhooks/stripe/route.ts` to new domain
- [ ] Update `deploy/structured-data.ts` — replace `yourdomain.com` placeholder
- [ ] Add auth to `/api/create-checkout-session` and `/api/create-portal-session`
- [ ] Add shared secret to `/api/send-access-email`
- [ ] Rebuild or restore authenticated clause library UI
- [ ] Seed clause library content
- [ ] Set all env vars in new Vercel project
- [ ] Register new Stripe webhook endpoint pointing to new domain
- [ ] Register new Clerk webhook endpoint pointing to new domain
- [ ] Test full purchase flow end-to-end before launch

---

## 9. What Stays on the Main Site (aylenmontenegro.com)

After securing ampb-baseline for public deployment, these ClauseVault-adjacent items remain:

**Active (must keep):**
- `app/api/webhooks/stripe/route.ts` — handles existing subscriber renewals/cancellations
- `app/api/send-access-email/route.ts` — called by Stripe webhook (add shared-secret auth)
- `lib/webhook-manager.ts` — required by Stripe webhook handler

**Inactive stubs (noindex + keep source):**
- `app/deploy/` — noindex via layout metadata; keep source for extraction
- `app/support/` — noindex via layout metadata; keep source for extraction
- `app/clausevault/page.tsx` — already redirects to `/`; no action needed
- `app/upgrade/page.tsx` — already redirects to `/closeadmin`; no action needed

**Disable (require approval before implementing):**
- `app/api/create-checkout-session/route.ts` — return 503 until ClauseVault relaunches
- `app/api/create-portal-session/route.ts` — return 503 until ClauseVault relaunches
- `app/api/webhooks/status/route.ts` — add ADMIN_SECRET header check
- `app/api/admin/copy-limit-alert/route.ts` — add ADMIN_SECRET header check

---

*This document is a planning artifact. No files have been deleted or modified as part of producing it. All ClauseVault source code remains intact in `~/Desktop/ampb-baseline`.*
