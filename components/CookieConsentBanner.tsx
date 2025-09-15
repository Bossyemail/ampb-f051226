"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, Check } from 'lucide-react';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookie-consent-given');
    if (!consentGiven) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true
    };
    
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-given', 'true');
    
    // Initialize Google Analytics consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }

    setIsVisible(false);
  };

  const acceptNecessary = () => {
    const preferences = {
      necessary: true,
      analytics: false
    };
    
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-given', 'true');
    
    // Initialize Google Analytics consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }

    setIsVisible(false);
  };


  if (!isVisible) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-0 left-0 right-0 z-40 p-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Cookie className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-white font-mono">Cookie Consent</h3>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
              >
                <Settings className="w-5 h-5 text-white/60" />
              </button>
            </div>

            {/* Main Message */}
            <div className="mb-4">
              <p className="text-white/80 mb-2">
                Look, we both know you're not reading this. We use cookies to make sure the site works and maybe learn a thing or two about what you actually click on. 
                That's it. No creepy tracking, no selling your data to sketchy third parties.
              </p>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 space-y-3"
                >
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-white font-medium text-sm">Essential Cookies</span>
                      </div>
                      <p className="text-white/60 text-xs">Site won't work without these. Deal with it.</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Cookie className="w-4 h-4 text-blue-400" />
                        <span className="text-white font-medium text-sm">Analytics</span>
                      </div>
                      <p className="text-white/60 text-xs">So we know which pages you actually read (spoiler: probably not this one)</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptAll}
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-mono text-sm"
              >
                Fine, Whatever
              </button>
              
              <button
                onClick={acceptNecessary}
                className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors font-mono text-sm"
              >
                Just the Essentials
              </button>
            </div>

            {/* Links */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-4 text-sm">
                <a 
                  href="/privacy" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </>
  );
}
