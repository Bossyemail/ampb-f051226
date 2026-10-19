"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, MessageSquare, CircleHelp } from "lucide-react";

export default function SupportPage() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const router = useRouter();

  // Cycle through background images every 6 hours
  useEffect(() => {
    const getCurrentImageIndex = () => {
      const now = new Date();
      const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60));
      return Math.floor(hoursSinceEpoch / 6) % 106;
    };

    setCurrentBgIndex(getCurrentImageIndex());
  }, []);

  const supportOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email - we respond within 24 hours",
      action: () => {
        window.open('mailto:hello@aylenmontenegro.com', '_blank');
      },
      primary: true
    },
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about features, pricing, or partnerships",
      action: () => {
        window.open('mailto:hello@aylenmontenegro.com?subject=General Inquiry', '_blank');
      }
    },
    {
      icon: CircleHelp,
      title: "Technical Support",
      description: "Issues with the app, billing, or account access",
      action: () => {
        window.open('mailto:hello@aylenmontenegro.com?subject=Technical Support', '_blank');
      }
    }
  ];

  const faqItems = [
    {
      question: "How do I cancel my subscription?",
      answer: "You can manage your subscription through your account settings or contact support for assistance."
    },
    {
      question: "Can I edit the clauses?",
      answer: "Yes! All clauses are editable. Copy them to your contracts and modify as needed for your specific situation."
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a comprehensive clause library with no free trial, but you can cancel anytime."
    },
    {
      question: "How often are clauses updated?",
      answer: "We regularly update our clause library to reflect current laws and best practices in real estate."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(/images/clausevault/clausevault-bg-${currentBgIndex + 1}.jpg)`,
          }}
        />
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Additional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/clausevault/app')}
              className="text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex flex-col">
              <button
                onClick={() => router.push('/closeadmin')}
                className="text-2xl font-bold text-white font-mono lowercase hover:text-white/80 transition-colors text-left"
              >
                clausevault
              </button>
              <span className="text-white/60 text-xs -mt-1">Searchable, copy-ready clauses</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto max-w-4xl px-6 min-h-screen">
        <div className="py-8 pb-32">
          {/* Support Options */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl font-medium text-white mb-6 text-left">Get Support</h2>
            <div className="space-y-4">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <button
                    onClick={option.action}
                    className={`w-full p-6 backdrop-blur-sm border rounded-lg transition-all text-left ${
                      option.primary 
                        ? 'bg-white/10 border-white/20 hover:bg-white/15' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        option.primary ? 'bg-white/20' : 'bg-white/10'
                      }`}>
                        <option.icon className="w-6 h-6 text-white/80" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium mb-1">{option.title}</h3>
                        <p className="text-white/60 text-sm">{option.description}</p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-xl font-medium text-white mb-6 text-left">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-white font-medium">{item.question}</h3>
                    <svg
                      className={`w-5 h-5 text-white/60 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4"
                    >
                      <p className="text-white/60 text-sm">{item.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      {/* Footer with icons above line and disclaimer below */}
      <footer className="fixed bottom-0 left-0 right-0 pb-4 z-50 pointer-events-none">
        <div className="max-w-4xl mx-auto px-6">
          {/* Icons above the line - Right side only */}
          <div className="flex justify-end mb-1">
            <div className="flex items-center gap-2 pointer-events-auto">
              {/* User Profile Icon */}
              <button
                onClick={() => router.push('/profile')}
                className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                aria-label="User Profile"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>

              {/* Email Support Icon */}
              <button
                onClick={() => router.push('/support')}
                className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                aria-label="Email Support"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>

              {/* Settings Icon */}
              <button
                onClick={() => router.push('/settings')}
                className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200"
                aria-label="Settings"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Thin line */}
          <div className="w-full h-px bg-white/20 mb-2" />

          {/* Disclaimer below the line */}
          <div className="text-center">
            <p className="text-white/40 text-xs">
              Need help? Contact hello@aylenmontenegro.com for assistance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}