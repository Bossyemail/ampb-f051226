"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Copy, DollarSign, Eye } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface AnalyticsData {
  totalEvents: number;
  uniqueUsers: number;
  eventsByType: Record<string, number>;
  recentEvents: Array<{
    event: string;
    email: string;
    product: string;
    timestamp: string;
  }>;
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState(30);
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // Check if user is authorized to access admin
  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/sign-in?redirect_url=/admin');
      return;
    }

    if (isLoaded && user) {
      // Check if user is admin (you can customize this logic)
      const isAdmin = user.emailAddresses.some(email => 
        email.emailAddress === 'aylen@bossyemail.com'
      );
      
      if (!isAdmin) {
        router.push('/');
        return;
      }
    }
  }, [isLoaded, user, router]);

  useEffect(() => {
    fetchAnalytics();
  }, [timeRange]);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/analytics?days=${timeRange}`);
      if (response.ok) {
        const data = await response.json();
        setAnalytics(data.metrics);
      }
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  // Show loading while checking auth
  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Show loading while user is not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Redirecting to sign in...</div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-xl">Failed to load analytics</div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">ClauseVault Analytics</h1>
          <p className="text-gray-400">Business insights and user activity</p>
        </motion.div>

        {/* Time Range Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(Number(e.target.value))}
            className="bg-white/10 border border-white/20 rounded px-3 py-2 text-white"
          >
            <option value={7}>Last 7 days</option>
            <option value={30}>Last 30 days</option>
            <option value={90}>Last 90 days</option>
          </select>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">Unique Users</span>
            </div>
            <div className="text-2xl font-bold">{analytics.uniqueUsers}</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">Total Events</span>
            </div>
            <div className="text-2xl font-bold">{analytics.totalEvents}</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Copy className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-400">Clauses Copied</span>
            </div>
            <div className="text-2xl font-bold">{analytics.eventsByType.clause_copied || 0}</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-gray-400">Purchases</span>
            </div>
            <div className="text-2xl font-bold">{analytics.eventsByType.purchase_completed || 0}</div>
          </div>
        </motion.div>

        {/* Event Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Event Breakdown</h3>
            <div className="space-y-3">
              {Object.entries(analytics.eventsByType).map(([event, count]) => (
                <div key={event} className="flex justify-between items-center">
                  <span className="text-sm text-gray-300 capitalize">
                    {event.replace('_', ' ')}
                  </span>
                  <span className="text-sm font-semibold">{count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {analytics.recentEvents.map((event, index) => (
                <div key={index} className="flex justify-between items-start text-sm">
                  <div>
                    <div className="font-medium capitalize">
                      {event.event.replace('_', ' ')}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {event.email} • {formatDate(event.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Refresh Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={fetchAnalytics}
            className="bg-white/10 border border-white/20 rounded px-6 py-2 hover:bg-white/20 transition-colors"
          >
            Refresh Data
          </button>
        </motion.div>
      </div>
    </div>
  );
}
