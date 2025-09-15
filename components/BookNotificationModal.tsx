"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAnalytics } from '@/hooks/useAnalytics';

interface BookNotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookTitle: string;
}

export default function BookNotificationModal({ 
  isOpen, 
  onClose, 
  bookTitle 
}: BookNotificationModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { trackEmailCapture, trackFormSubmit } = useAnalytics();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      
      // Track conversion events
      trackEmailCapture(email, 'book_notification');
      trackFormSubmit('book_notification_modal', { book_title: bookTitle });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="bg-white/10 backdrop-blur-md border border-white/20 text-white max-w-md mx-auto shadow-2xl"
        showCloseButton={false}
      >
        <DialogHeader className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center"
          >
            {isSuccess ? (
              <Check className="w-8 h-8 text-green-400" />
            ) : (
              <Mail className="w-8 h-8 text-white" />
            )}
          </motion.div>
          
          <DialogTitle className="text-xl font-semibold text-white">
            {isSuccess ? "You're In!" : "Get Notified"}
          </DialogTitle>
          
          <DialogDescription className="text-gray-300">
            {isSuccess ? (
              "We'll let you know as soon as this book drops."
            ) : (
              `Be the first to know when "${bookTitle}" is available.`
            )}
          </DialogDescription>
        </DialogHeader>

        {!isSuccess ? (
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:ring-white/20"
                required
              />
            </div>
            
            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-white/20 text-black bg-white/90 hover:bg-white hover:text-black"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!email || isSubmitting}
                className="flex-1 bg-white text-black hover:bg-white/90"
              >
                {isSubmitting ? "Submitting..." : "Notify Me"}
              </Button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-4"
          >
            <p className="text-green-400 font-medium">Thanks for signing up!</p>
          </motion.div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </DialogContent>
    </Dialog>
  );
}
