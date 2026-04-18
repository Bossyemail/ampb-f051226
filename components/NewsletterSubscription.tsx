"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Check } from 'lucide-react';

interface NewsletterSubscriptionProps {
  buttonText?: string;
  className?: string;
  source?: string;
}

export default function NewsletterSubscription({ 
  buttonText = "Send Me the Snarkletter",
  className = "",
  source = "spill-page"
}: NewsletterSubscriptionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          source,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setEmail('');
        setName('');
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
        }, 2000);
      } else {
        setError(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-150 backdrop-blur-sm bg-white/5 text-sm sm:text-base rounded-none select-none active:scale-[0.97] active:shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] active:brightness-90 ${className}`}
        aria-label={buttonText}
      >
        {buttonText}
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors text-2xl"
              aria-label="Close"
            >
              ×
            </button>

            {isSuccess ? (
              // Success State
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-8 h-8 text-green-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Welcome to the Snarkletter! 🎉
                </h3>
                <p className="text-white/80">
                  You're all set! Check your email for a welcome message.
                </p>
              </div>
            ) : (
              // Subscription Form
              <div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Join the Snarkletter
                  </h3>
                  <p className="text-white/80 text-sm">
                    Real estate insights with a side of sass. No fluff, just real talk.
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-white/30 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-white/30 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  {error && (
                    <div className="text-red-300 text-sm bg-red-500/20 backdrop-blur-sm border border-red-400/30 p-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading || !email || !name}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-4 rounded-none font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.99] active:shadow-[inset_0_2px_12px_rgba(0,0,0,0.35)] active:brightness-90 disabled:active:scale-100 disabled:active:shadow-none"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe to Snarkletter'}
                  </button>
                </form>

                <p className="text-xs text-white/60 text-center mt-4">
                  Your deals will thank you. Pinky swear.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}
