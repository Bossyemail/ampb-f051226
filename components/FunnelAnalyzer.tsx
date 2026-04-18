"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FunnelStep {
  name: string;
  count: number;
  conversionRate: number;
}

interface FunnelData {
  steps: FunnelStep[];
  totalSessions: number;
  overallConversionRate: number;
}

interface FunnelAnalyzerProps {
  enabled?: boolean;
}

export default function FunnelAnalyzer({ enabled = false }: FunnelAnalyzerProps) {
  const [funnelData, setFunnelData] = useState<FunnelData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Fetch funnel data from analytics API
    const fetchFunnelData = async () => {
      try {
        const response = await fetch('/api/analytics/funnel');
        if (response.ok) {
          const data = await response.json();
          setFunnelData(data);
        }
      } catch (error) {
        console.error('Failed to fetch funnel data:', error);
      }
    };

    fetchFunnelData();
    
    // Refresh data every 30 seconds
    const interval = setInterval(fetchFunnelData, 30000);
    return () => clearInterval(interval);
  }, [enabled]);

  // Show keyboard shortcut hint
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  if (!enabled || !funnelData) return null;

  return (
    <>
      {/* Keyboard shortcut hint */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded-lg text-xs z-50">
          Press Ctrl+F to toggle funnel analysis
        </div>
      )}

      {/* Funnel Visualization */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 text-white p-6 rounded-lg z-50 max-w-2xl w-full mx-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Conversion Funnel Analysis</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 p-3 rounded">
              <div className="text-sm text-gray-300">Total Sessions</div>
              <div className="text-2xl font-bold">{funnelData.totalSessions.toLocaleString()}</div>
            </div>
            <div className="bg-white/10 p-3 rounded">
              <div className="text-sm text-gray-300">Overall Conversion</div>
              <div className="text-2xl font-bold">{funnelData.overallConversionRate.toFixed(1)}%</div>
            </div>
          </div>

          {/* Funnel Steps */}
          <div className="space-y-3">
            {funnelData.steps.map((step, index) => {
              const isLastStep = index === funnelData.steps.length - 1;
              const previousStep = index > 0 ? funnelData.steps[index - 1] : null;
              const stepConversionRate = previousStep 
                ? (step.count / previousStep.count) * 100 
                : (step.count / funnelData.totalSessions) * 100;

              return (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Bar */}
                  <div className="flex items-center space-x-4">
                    <div className="w-24 text-sm text-gray-300">{step.name}</div>
                    <div className="flex-1 bg-gray-700 rounded-full h-8 relative overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${stepConversionRate}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                        {step.count.toLocaleString()} ({stepConversionRate.toFixed(1)}%)
                      </div>
                    </div>
                  </div>

                  {/* Conversion Rate */}
                  {!isLastStep && (
                    <div className="text-right text-xs text-gray-400 mt-1">
                      ↓ {stepConversionRate.toFixed(1)}% conversion
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Insights */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <h4 className="text-sm font-semibold mb-2">Key Insights</h4>
            <ul className="text-xs text-gray-300 space-y-1">
              {funnelData.steps.map((step, index) => {
                const previousStep = index > 0 ? funnelData.steps[index - 1] : null;
                const conversionRate = previousStep 
                  ? (step.count / previousStep.count) * 100 
                  : (step.count / funnelData.totalSessions) * 100;

                if (conversionRate < 50 && index > 0) {
                  return (
                    <li key={step.name} className="text-yellow-400">
                      • Low conversion at {step.name}: {conversionRate.toFixed(1)}%
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
}
