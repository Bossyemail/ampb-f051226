import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth, req) => {
  // TEMPORARILY DISABLE ALL ADMIN PROTECTION FOR DEBUGGING
  console.log('Middleware running for:', req.url);
  
  // Skip all admin route protection for now
  if (isAdminRoute(req)) {
    console.log('Admin route accessed:', req.url, 'ALLOWING ALL ACCESS FOR DEBUGGING');
    // Allow all access to admin routes for debugging
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
