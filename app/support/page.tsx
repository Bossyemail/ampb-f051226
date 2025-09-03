'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import StickyNavigation from '@/components/StickyNavigation';
import Footer from '@/components/Footer';
import { trackPageView } from '@/utils/analytics';

export default function SupportPage() {
  useEffect(() => {
    trackPageView('support');
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:aylen@clausevault.co?subject=ClauseVault Support Request';
  };

  const supportFeatures = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Direct Email Support",
      description: "Get personalized assistance directly from the founder. No automated responses, no waiting in queues.",
      action: "Send Email",
      onClick: handleEmailClick
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Response",
      description: "While I may not respond at 3 AM, I typically reply within 2-4 hours during business hours.",
      action: null
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Priority Support",
      description: "As a ClauseVault user, you get priority support. Your success is my success.",
      action: null
    }
  ];

  const faqItems = [
    {
      question: "How do I add custom clauses?",
      answer: "Click the 'Add Custom Clause' button in the top right of ClauseVault. Fill in the details and your custom clause will be saved to your account."
    },
    {
      question: "Can I export my clauses?",
      answer: "Currently, clauses are designed for copy-paste use. You can copy any clause to your clipboard with one click."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. All data is encrypted and stored securely. Your custom clauses are private to your account."
    },
    {
      question: "What if I need a specific clause?",
      answer: "Email me directly at aylen@clausevault.co with your request. I'll add it to the library or create a custom one for you."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#252A33] via-[#383C3E] to-[#252A33] text-white">
      <StickyNavigation />
      
      {/* Background Video */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/videos/office-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Support
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Need help? I'm here to ensure you get the most out of ClauseVault.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-8 rounded-xl mb-12"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7B8E90] to-[#BCAFAF] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-white/60 mb-6 max-w-md mx-auto">
                Email me directly at{' '}
                <span className="text-[#D3CCD6] font-medium">aylen@clausevault.co</span>
                {' '}for personalized support, feature requests, or any questions.
              </p>
              <button
                onClick={handleEmailClick}
                className="px-8 py-3 bg-gradient-to-r from-[#7B8E90] to-[#BCAFAF] hover:from-[#6A7D7F] hover:to-[#AB9E9E] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </button>
            </div>
          </motion.div>

          {/* Support Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {supportFeatures.map((feature, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#7B8E90]/20 to-[#BCAFAF]/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-[#D3CCD6]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {feature.description}
                </p>
                {feature.action && (
                  <button
                    onClick={feature.onClick}
                    className="text-[#D3CCD6] hover:text-white text-sm font-medium transition-colors"
                  >
                    {feature.action} →
                  </button>
                )}
              </div>
            ))}
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="backdrop-blur-md bg-white/5 ring-1 ring-white/10 p-8 rounded-xl"
          >
            <h2 className="font-heading text-2xl font-semibold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-white/10 pb-6 last:border-b-0">
                  <h3 className="font-heading text-lg font-medium text-white mb-2">
                    {item.question}
                  </h3>
                  <p className="text-white/60">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
