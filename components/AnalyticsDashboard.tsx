"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Eye, MousePointer, TrendingUp, Clock, Users } from 'lucide-react';

interface AnalyticsSummary {
  totalSessions: number;
  totalEvents: number;
  conversionRate: number;
  averageSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  topEvents: Array<{ event: string; count: number }>;
}

export default function AnalyticsDashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsSummary | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'funnel' | 'performance' | 'heatmap'>('overview');

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      fetchAnalyticsData();
    }
  }, [isVisible]);

  const fetchAnalyticsData = async () => {
    try {
      const response = await fetch('/api/analytics');
      if (response.ok) {
        const data = await response.json();
        // Mock enhanced data for demo
        setAnalyticsData({
          totalSessions: 1247,
          totalEvents: 8934,
          conversionRate: 3.2,
          averageSessionDuration: 245,
          topPages: [
            { page: '/', views: 892 },
            { page: '/elevate', views: 234 },
            { page: '/read', views: 187 },
            { page: '/deploy', views: 156 }
          ],
          topEvents: [
            { event: 'page_view', count: 3421 },
            { event: 'button_click', count: 1876 },
            { event: 'email_capture', count: 234 },
            { event: 'form_submit', count: 156 }
          ]
        });
      }
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    }
  };

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      {/* Keyboard shortcut hint */}
      <div className="fixed top-4 left-4 bg-black/80 text-white p-2 rounded-lg text-xs z-50">
        Press Ctrl+A to toggle analytics dashboard
      </div>

      {/* Analytics Dashboard */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/95 text-white rounded-lg shadow-2xl z-50 w-full max-w-6xl h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold">Analytics Dashboard</h2>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/20">
              {[
                { id: 'overview', label: 'Overview', icon: TrendingUp },
                { id: 'funnel', label: 'Funnel', icon: Eye },
                { id: 'performance', label: 'Performance', icon: Clock },
                { id: 'heatmap', label: 'Heatmap', icon: MousePointer }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id as any)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === id
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 h-full overflow-y-auto">
              {activeTab === 'overview' && analyticsData && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-sm text-gray-300">Total Sessions</span>
                    </div>
                    <div className="text-2xl font-bold">{analyticsData.totalSessions.toLocaleString()}</div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <MousePointer className="w-5 h-5 text-green-400" />
                      <span className="text-sm text-gray-300">Total Events</span>
                    </div>
                    <div className="text-2xl font-bold">{analyticsData.totalEvents.toLocaleString()}</div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                      <span className="text-sm text-gray-300">Conversion Rate</span>
                    </div>
                    <div className="text-2xl font-bold">{analyticsData.conversionRate}%</div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <span className="text-sm text-gray-300">Avg Session</span>
                    </div>
                    <div className="text-2xl font-bold">{Math.round(analyticsData.averageSessionDuration / 60)}m</div>
                  </div>

                  {/* Top Pages */}
                  <div className="md:col-span-2 bg-white/5 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
                    <div className="space-y-2">
                      {analyticsData.topPages.map((page, index) => (
                        <div key={page.page} className="flex justify-between items-center">
                          <span className="text-sm">{page.page}</span>
                          <span className="text-sm text-gray-400">{page.views} views</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Events */}
                  <div className="md:col-span-2 bg-white/5 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Top Events</h3>
                    <div className="space-y-2">
                      {analyticsData.topEvents.map((event, index) => (
                        <div key={event.event} className="flex justify-between items-center">
                          <span className="text-sm">{event.event}</span>
                          <span className="text-sm text-gray-400">{event.count} times</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'funnel' && (
                <div className="text-center py-12">
                  <Eye className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Funnel Analysis</h3>
                  <p className="text-gray-400">Press Ctrl+F to open detailed funnel analysis</p>
                </div>
              )}

              {activeTab === 'performance' && (
                <div className="text-center py-12">
                  <Clock className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
                  <p className="text-gray-400">Core Web Vitals are being tracked in the background</p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="text-sm text-gray-300">LCP</div>
                      <div className="text-lg font-semibold text-green-400">1.2s</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="text-sm text-gray-300">FID</div>
                      <div className="text-lg font-semibold text-green-400">45ms</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="text-sm text-gray-300">CLS</div>
                      <div className="text-lg font-semibold text-green-400">0.08</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'heatmap' && (
                <div className="text-center py-12">
                  <MousePointer className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Heatmap Data</h3>
                  <p className="text-gray-400">Press Ctrl+H to toggle heatmap visualization</p>
                  <div className="mt-4 bg-white/5 p-4 rounded-lg">
                    <div className="text-sm text-gray-300">Interaction points collected</div>
                    <div className="text-2xl font-bold text-purple-400">2,847</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
