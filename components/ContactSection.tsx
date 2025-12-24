"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { MessageCircle, Mail, Send, X } from "lucide-react";

const ACCENT = "#D5C7DB"; // Lavender

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsModalOpen(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <section className="relative py-16 border-t border-white/10">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="t-h2">
                Questions? Let’s talk.
              </h2>
              <p className="t-body mt-2" style={{ maxWidth: '640px', margin: '0 auto' }}>
                Have questions about services or collaboration?<br />
                Drop me a line and we’ll see if it’s a fit.
              </p>
              <div className="mt-3">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5 rounded"
              >
                <MessageCircle className="w-4 h-4" />
                Start a Conversation →
              </motion.button>
              </div>
            </motion.div>
            <p className="t-label mt-2">
              For service and collaboration inquiries only.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 text-white w-96 max-w-lg mx-auto rounded-lg shadow-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {isSuccess ? "Message Sent!" : "Get in Touch"}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!isSuccess ? (
              <motion.form 
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:ring-white/20 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:ring-white/20 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject (optional)"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:ring-white/20 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="What's on your mind?"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:ring-white/20 rounded px-3 py-2 resize-none"
                    required
                  />
                </div>
                
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 border border-white/20 text-black bg-white/90 hover:bg-white hover:text-black transition-all duration-300 rounded px-4 py-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.name || !formData.email || !formData.message || isSubmitting}
                    className="flex-1 bg-white text-black hover:bg-white/90 transition-all duration-300 rounded px-4 py-2 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                    {!isSubmitting && <Send className="w-4 h-4" />}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center py-4"
              >
                <p className="text-green-400 font-medium">Thanks for reaching out!</p>
                <p className="text-gray-300 text-sm mt-2">I'll get back to you soon.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}
