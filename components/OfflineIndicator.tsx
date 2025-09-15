'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import { useServiceWorker } from '@/hooks/useServiceWorker';
import { ScreenReaderAnnouncer } from '@/lib/accessibility';

export default function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);
  const [showUpdate, setShowUpdate] = useState(false);
  const { isRegistered, error, updateServiceWorker, skipWaiting } = useServiceWorker();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      ScreenReaderAnnouncer.announce('Connection restored');
    };

    const handleOffline = () => {
      setIsOnline(false);
      ScreenReaderAnnouncer.announceError('Connection lost - you are now offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (error && error.includes('New content is available')) {
      setShowUpdate(true);
    }
  }, [error]);

  const handleUpdateClick = async () => {
    await skipWaiting();
  };

  const handleRefreshClick = async () => {
    await updateServiceWorker();
  };

  return (
    <>
      {/* Offline Indicator */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 px-4 text-center"
            role="alert"
            aria-live="assertive"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-medium">
                You're offline. Some features may be limited.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Update Available */}
      <AnimatePresence>
        {showUpdate && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white py-3 px-4"
            role="alert"
            aria-live="polite"
          >
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                <span className="text-sm font-medium">
                  New version available
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRefreshClick}
                  className="text-xs px-3 py-1 bg-blue-700 hover:bg-blue-800 rounded transition-colors"
                  aria-label="Refresh to get latest version"
                >
                  Refresh
                </button>
                
                <button
                  onClick={handleUpdateClick}
                  className="text-xs px-3 py-1 bg-white text-blue-600 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Update to latest version"
                >
                  Update
                </button>
                
                <button
                  onClick={() => setShowUpdate(false)}
                  className="text-xs px-3 py-1 bg-blue-700 hover:bg-blue-800 rounded transition-colors"
                  aria-label="Dismiss update notification"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
}
