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
        className={`inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5 text-sm sm:text-base ${className}`}
        aria-label={buttonText}
      >
        {buttonText}
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-8 h-8 text-green-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Welcome to the Snarkletter! 🎉
                </h3>
                <p className="text-gray-600">
                  You're all set! Check your email for a welcome message.
                </p>
              </div>
            ) : (
              // Subscription Form
              <div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Join the Snarkletter
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Real estate insights with a side of sass. No fluff, just real talk.
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name (optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  {error && (
                    <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe to Snarkletter'}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
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
