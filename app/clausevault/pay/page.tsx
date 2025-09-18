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
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { user, isLoaded: userLoaded } = useUser();
  const { isSignedIn } = useAuth();

  // Check if user already has access
  useEffect(() => {
    if (!userLoaded) return;

    const checkAccess = async () => {
      // Check if user has existing access
      if (user && user.publicMetadata?.clausevaultAccess) {
        // User already has access - redirect to clausevault
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
    setError(null);
    
    try {
      const priceId = selectedPlan === 'monthly' 
        ? 'price_1S21m2GvrQbQlRXY46U7SF0k'  // Monthly
        : 'price_1RyKQfGvrQbQlRXYg7Z8JsLy'; // Yearly

      console.log('Starting payment process for plan:', selectedPlan, 'priceId:', priceId);

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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const { sessionId } = data;
      console.log('Checkout session created:', sessionId);
      
      // Load Stripe with better error handling
      console.log('Publishable key:', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ? 'Found' : 'Missing');
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      
      if (!stripe) {
        throw new Error('Failed to load Stripe. Please refresh the page and try again.');
      }

      console.log('Stripe loaded successfully, redirecting to checkout...');

      // Redirect to Stripe Checkout with error handling
      const { error } = await stripe.redirectToCheckout({ sessionId });
      
      if (error) {
        console.error('Stripe redirect error:', error);
        setError(`Payment error: ${error.message}`);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(`Payment failed: ${errorMessage}`);
      setIsLoading(false);
    }
  };

  // Load Stripe with better mobile support
  const loadStripe = async (publishableKey: string) => {
    if (typeof window === 'undefined') {
      return null;
    }
    try {
      if (window.Stripe) { // Check if Stripe is already loaded
        return window.Stripe(publishableKey);
      }
      const { loadStripe } = await import('@stripe/stripe-js');
      if (!loadStripe) {
        throw new Error('Stripe library failed to load');
      }
      const stripe = await loadStripe(publishableKey);
      if (!stripe) {
        throw new Error('Failed to initialize Stripe');
      }
      return stripe;
    } catch (error) {
      console.error('Error loading Stripe:', error);
      return null;
    }
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url('/images/clausevault/clausevault-bg-${String(currentBgIndex + 1).padStart(2, '0')}.jpg')`
        }}
      />
      
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Company Branding */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
                AYLEN MONTENEGRO
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light tracking-widest uppercase">
                Turn Real Estate Chaos Into Systems & Profit
              </p>
            </div>
            
            {/* Product Branding */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                clausevault
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
                Searchable, copy-ready clauses
              </p>
            </div>
            
            <p className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Stop the endless search at midnight. clausevault is your plug-and-play clause library built for Florida contracts and real estate chaos. Every clause is editable, agent-tested, and designed to keep you compliant without last minute headaches.
            </p>
          </div>

          {/* Mobile Plan Toggle */}
          <div className="block md:hidden mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2">
              <div className="grid grid-cols-2 gap-2">
                <motion.button
                  onClick={() => setSelectedPlan('monthly')}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedPlan === 'monthly'
                      ? 'bg-white text-black shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  Monthly
                </motion.button>
                <motion.button
                  onClick={() => setSelectedPlan('yearly')}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                    selectedPlan === 'yearly'
                      ? 'bg-white text-black shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  Yearly
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    FREE
                  </span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Monthly Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`relative bg-white/10 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 ${
                selectedPlan === 'monthly' 
                  ? 'border-white/40 bg-white/20 shadow-2xl shadow-white/10' 
                  : 'border-white/20 hover:border-white/30'
              } ${selectedPlan === 'yearly' ? 'md:opacity-60' : ''}`}
            >
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Monthly
                </h3>
                <div className="mb-6">
                  <span className="text-5xl md:text-6xl font-bold text-white">$99</span>
                  <span className="text-xl text-gray-300 ml-3">per month</span>
                </div>
                <p className="text-gray-400 mb-8 font-light">Cancel anytime</p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center text-green-400">
                    <span className="text-xl mr-3">✓</span>
                    <span className="text-white text-lg">Full access to all clauses</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="text-xl mr-3">✓</span>
                    <span className="text-white text-lg">Regular updates</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="text-xl mr-3">✓</span>
                    <span className="text-white text-lg">Priority support</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Yearly Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`relative bg-white/10 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 ${
                selectedPlan === 'yearly' 
                  ? 'border-green-400/50 bg-gradient-to-br from-white/20 to-green-500/10 shadow-2xl shadow-green-500/20' 
                  : 'border-white/20 hover:border-white/30'
              } ${selectedPlan === 'monthly' ? 'md:opacity-60' : ''}`}
            >
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
                  3 MONTHS FREE
                </span>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Yearly
                </h3>
                <div className="mb-6">
                  <span className="text-5xl md:text-6xl font-bold text-white">$891</span>
                  <span className="text-xl text-gray-300 ml-3">per year</span>
                </div>
                <p className="text-green-400 text-lg mb-2 font-semibold">≈ $74/mo • 3 months free</p>
                <p className="text-gray-400 mb-8 font-light">Cancel anytime</p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center text-green-400">
                    <span className="text-xl mr-3">✓</span>
                    <span className="text-white text-lg">Full access to all clauses</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="text-xl mr-3">✓</span>
                    <span className="text-white text-lg">Regular updates</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="text-xl mr-3">✓</span>
                    <span className="text-white text-lg">Priority support</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <span className="text-xl mr-3">✓</span>
                    <span className="text-white text-lg">Early access to new features</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Error Display */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-red-500/20 border border-red-500/40 rounded-2xl text-red-100 text-center backdrop-blur-sm"
            >
              <div className="font-semibold mb-2 text-lg">Payment Error</div>
              <div className="text-sm">{error}</div>
              <button 
                onClick={() => setError(null)} 
                className="mt-3 text-sm underline hover:no-underline transition-colors"
              >
                Dismiss
              </button>
            </motion.div>
          )}

          {/* Payment Button */}
          <div className="text-center mb-12">
            <motion.button
              onClick={handlePayment}
              disabled={isLoading}
              className={`inline-flex items-center gap-3 px-16 py-5 bg-gradient-to-r from-green-600 to-green-700 text-white text-xl font-bold rounded-2xl transition-all duration-300 shadow-lg ${
                isLoading 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:from-green-700 hover:to-green-800 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105'
              }`}
              whileHover={!isLoading ? { scale: 1.05 } : {}}
              whileTap={!isLoading ? { scale: 0.95 } : {}}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing Payment...
                </>
              ) : (
                <>
                  Get {selectedPlan === 'monthly' ? 'Monthly' : 'Yearly'} Access
                  <ArrowRight className="w-6 h-6" />
                </>
              )}
            </motion.button>
          </div>

          {/* Retry Button */}
          {error && !isLoading && (
            <div className="text-center mb-8">
              <motion.button
                onClick={handlePayment}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 hover:border-white/30 transition-all rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Try Again
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          )}

          {/* Footer */}
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-400 font-medium">
              Secure payment powered by Stripe
            </p>
            <p className="text-xs text-gray-500">
              Single-user license • Broker-friendly
            </p>
            <p className="text-xs text-gray-500">
              Includes free updates and priority support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}