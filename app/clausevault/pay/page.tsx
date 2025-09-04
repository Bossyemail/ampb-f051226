"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser, useAuth } from "@clerk/nextjs";

export default function ClauseVaultPayPage() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const router = useRouter();
  const { user, isLoaded: userLoaded } = useUser();
  const { isSignedIn } = useAuth();

  // Check if user already has access
  useEffect(() => {
    if (!userLoaded) return;

    const checkAccess = async () => {
      // Check if user has existing access
      if (user && user.publicMetadata.clausevaultAccess) {
        // User already has access - redirect to ClauseVault
        router.push('/clausevault');
        return;
      }

      // Temporary admin access for development (remove in production)
      if (user && user.emailAddresses.some(email => email.emailAddress === 'aylen@bossyemail.com')) {
        router.push('/clausevault');
        return;
      }

      setIsCheckingAccess(false);
    };

    checkAccess();
  }, [userLoaded, user, router]);

  // Background rotation logic - changes every 6 hours
  useEffect(() => {
    const getCurrentImageIndex = () => {
      const now = new Date();
      const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60));
      return Math.floor(hoursSinceEpoch / 6) % 106; // Change every 6 hours, cycle through 106 images
    };

    setCurrentBgIndex(getCurrentImageIndex());
  }, []);

  const handlePayment = async () => {
    setIsLoading(true);
    
    try {
      const priceId = selectedPlan === 'monthly' 
        ? 'price_1S21m2GvrQbQlRXY46U7SF0k'  // Monthly
        : 'price_1RyKQfGvrQbQlRXYg7Z8JsLy'; // Yearly

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId,
          successUrl: `${window.location.origin}/clausevault?success=true`,
          cancelUrl: `${window.location.origin}/clausevault/pay`,
        }),
      });

      const { sessionId } = await response.json();
      
      // Redirect to Stripe Checkout
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error('Payment error:', error);
      setIsLoading(false);
    }
  };

  // Load Stripe
  const loadStripe = async (publishableKey: string) => {
    if (typeof window !== 'undefined') {
      const { loadStripe } = await import('@stripe/stripe-js');
      return loadStripe(publishableKey);
    }
    return null;
  };

  // Show loading while checking access
  if (isCheckingAccess) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative">
      {/* Rotating Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(/images/clausevault/clausevault-bg-${currentBgIndex + 1}${currentBgIndex < 35 ? '.jpg' : '.jpeg'})`,
          }}
        />
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Additional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <main className="mx-auto max-w-4xl px-6 py-16">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-2 tracking-wider lowercase">
              clausevault
            </h1>
            <p className="text-sm text-white/60 -mt-1 mb-8">
              Searchable, copy-ready clauses
            </p>
          </motion.div>

          {/* Description */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
              Stop the endless search at midnight. ClauseVault is your plug-and-play clause library built for Florida contracts and real estate chaos. Every clause is editable, agent-tested, and designed to keep you compliant without last minute headaches.
            </p>
          </motion.div>

          {/* Pricing Options */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Monthly Plan */}
            <div 
              className={`relative p-6 border rounded-lg cursor-pointer transition-all ${
                selectedPlan === 'monthly' 
                  ? 'border-white/40 bg-white/10' 
                  : 'border-white/20 bg-white/5 hover:border-white/30'
              }`}
              onClick={() => setSelectedPlan('monthly')}
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Monthly</h3>
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  $99
                </div>
                <div className="text-sm text-gray-300 mb-4">per month</div>
                <div className="text-xs text-gray-400 mb-4">Cancel anytime</div>
                <div className="text-xs text-green-400">✓ Full access to all clauses</div>
                <div className="text-xs text-green-400">✓ Regular updates</div>
                <div className="text-xs text-green-400">✓ Priority support</div>
              </div>
            </div>

            {/* Yearly Plan - Recommended */}
            <div 
              className={`relative p-6 border rounded-lg cursor-pointer transition-all ${
                selectedPlan === 'yearly' 
                  ? 'border-white/40 bg-white/10' 
                  : 'border-white/20 bg-white/5 hover:border-white/30'
              }`}
              onClick={() => setSelectedPlan('yearly')}
            >
              {/* Recommended Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-medium px-3 py-1 rounded-full">
                  3 MONTHS FREE
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Yearly</h3>
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  $891
                </div>
                <div className="text-sm text-gray-300 mb-1">per year</div>
                <div className="text-xs text-green-400 mb-4">≈ $74/mo • 3 months free</div>
                <div className="text-xs text-gray-400 mb-4">Cancel anytime</div>
                <div className="text-xs text-green-400">✓ Full access to all clauses</div>
                <div className="text-xs text-green-400">✓ Regular updates</div>
                <div className="text-xs text-green-400">✓ Priority support</div>
                <div className="text-xs text-green-400">✓ Early access to new features</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={handlePayment}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Get {selectedPlan === 'yearly' ? 'Yearly' : 'Monthly'} Access
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>

          {/* Trust Message */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-xs text-white/50">
              Secure payment powered by Stripe
            </p>
          </motion.div>

          {/* Footer with Trust Badges */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <p className="text-sm text-gray-400 mb-2">
              Single-user license · Broker-friendly
            </p>
            <p className="text-xs text-white/50">
              Includes free updates and priority support
            </p>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
