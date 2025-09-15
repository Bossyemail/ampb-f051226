"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  MousePointer, 
  Search, 
  Download,
  Smartphone,
  Globe,
  BarChart3,
  PieChart
} from 'lucide-react';

interface AdvancedMetrics {
  revenue: {
    ltv: number;
    cac: number;
    churnRate: number;
    revenuePerUser: number;
    upgradeEvents: number;
    downgradeEvents: number;
    paymentFailures: number;
    recoveryRate: number;
  };
  content: {
    topClauses: Array<{ clause: string; copies: number; revenue: number }>;
    searchQueries: Array<{ query: string; count: number; noResults: number }>;
    templateDownloads: Array<{ template: string; downloads: number; conversions: number }>;
    pageEngagement: Record<string, number>;
    videoCompletion: Array<{ video: string; starts: number; completions: number; rate: number }>;
    bookNotifications: Array<{ book: string; signups: number; purchases: number; conversionRate: number }>;
  };
  marketing: {
    trafficSources: Record<string, { sessions: number; conversions: number; revenue: number }>;
    utmCampaigns: Array<{ campaign: string; source: string; medium: string; sessions: number; conversions: number; revenue: number }>;
    referralPerformance: Array<{ referrer: string; visits: number; conversions: number; revenue: number }>;
    socialEngagement: Record<string, { clicks: number; conversions: number; revenue: number }>;
  };
  device: {
    mobileVsDesktop: { mobile: number; desktop: number; tablet: number };
    browserUsage: Record<string, number>;
    devicePerformance: Record<string, { loadTime: number; bounceRate: number; conversionRate: number }>;
  };
  crossApp: {
    multiProductUsers: Array<{ userId: string; apps: string[]; totalSpent: number }>;
    crossAppFlows: Array<{ userId: string; flow: string[]; timestamp: Date }>;
  };
}

interface AdvancedAnalyticsDashboardProps {
  appName: string;
}

export default function AdvancedAnalyticsDashboard({ appName }: AdvancedAnalyticsDashboardProps) {
  const [metrics, setMetrics] = useState<AdvancedMetrics | null>(null);
  const [activeTab, setActiveTab] = useState<'revenue' | 'content' | 'marketing' | 'device' | 'crossApp'>('revenue');

  useEffect(() => {
    // Mock advanced metrics data
    const mockMetrics: AdvancedMetrics = {
      revenue: {
        ltv: 1247,
        cac: 89,
        churnRate: 3.2,
        revenuePerUser: 156,
        upgradeEvents: 23,
        downgradeEvents: 8,
        paymentFailures: 12,
        recoveryRate: 75
      },
      content: {
        topClauses: [
          { clause: "Inspection Contingency", copies: 234, revenue: 4680 },
          { clause: "Financing Contingency", copies: 189, revenue: 3780 },
          { clause: "Appraisal Contingency", copies: 156, revenue: 3120 },
          { clause: "Repair Request", copies: 134, revenue: 2680 },
          { clause: "Closing Date Extension", copies: 98, revenue: 1960 }
        ],
        searchQueries: [
          { query: "inspection", count: 156, noResults: 12 },
          { query: "financing", count: 134, noResults: 8 },
          { query: "appraisal", count: 98, noResults: 15 },
          { query: "repair", count: 87, noResults: 6 },
          { query: "closing", count: 76, noResults: 4 }
        ],
        templateDownloads: [
          { template: "Follow-up Email Template", downloads: 89, conversions: 23 },
          { template: "Inspection Response Template", downloads: 76, conversions: 18 },
          { template: "Contract Amendment Template", downloads: 65, conversions: 15 },
          { template: "Closing Checklist Template", downloads: 54, conversions: 12 }
        ],
        pageEngagement: {
          "hero": 245,
          "services": 189,
          "testimonials": 156,
          "contact": 134,
          "footer": 98
        },
        videoCompletion: [
          { video: "How to Use ClauseVault", starts: 234, completions: 189, rate: 80.8 },
          { video: "Contract Best Practices", starts: 156, completions: 134, rate: 85.9 },
          { video: "Real Estate Tips", starts: 98, completions: 76, rate: 77.6 }
        ],
        bookNotifications: [
          { book: "Smart Agent's Guide", signups: 89, purchases: 23, conversionRate: 25.8 },
          { book: "Chief Email Officer", signups: 76, purchases: 18, conversionRate: 23.7 }
        ]
      },
      marketing: {
        trafficSources: {
          "organic": { sessions: 892, conversions: 45, revenue: 6750 },
          "direct": { sessions: 567, conversions: 34, revenue: 5100 },
          "social": { sessions: 234, conversions: 18, revenue: 2700 },
          "paid": { sessions: 156, conversions: 23, revenue: 3450 },
          "referral": { sessions: 98, conversions: 12, revenue: 1800 }
        },
        utmCampaigns: [
          { campaign: "summer_sale", source: "google", medium: "cpc", sessions: 89, conversions: 12, revenue: 1800 },
          { campaign: "real_estate_tips", source: "facebook", medium: "social", sessions: 76, conversions: 9, revenue: 1350 },
          { campaign: "contract_guide", source: "linkedin", medium: "social", sessions: 54, conversions: 7, revenue: 1050 }
        ],
        referralPerformance: [
          { referrer: "realestateagent.com", visits: 67, conversions: 8, revenue: 1200 },
          { referrer: "contractlawblog.com", visits: 45, conversions: 6, revenue: 900 },
          { referrer: "miamirealestate.com", visits: 34, conversions: 4, revenue: 600 }
        ],
        socialEngagement: {
          "facebook": { clicks: 234, conversions: 18, revenue: 2700 },
          "instagram": { clicks: 189, conversions: 15, revenue: 2250 },
          "linkedin": { clicks: 156, conversions: 12, revenue: 1800 },
          "twitter": { clicks: 98, conversions: 7, revenue: 1050 }
        }
      },
      device: {
        mobileVsDesktop: { mobile: 45, desktop: 52, tablet: 3 },
        browserUsage: {
          "Chrome": 67,
          "Safari": 18,
          "Firefox": 8,
          "Edge": 5,
          "Other": 2
        },
        devicePerformance: {
          "mobile": { loadTime: 2.3, bounceRate: 45, conversionRate: 2.8 },
          "desktop": { loadTime: 1.8, bounceRate: 32, conversionRate: 4.2 },
          "tablet": { loadTime: 2.1, bounceRate: 38, conversionRate: 3.1 }
        }
      },
      crossApp: {
        multiProductUsers: [
          { userId: "user_001", apps: ["clausevault", "bossyemail"], totalSpent: 297 },
          { userId: "user_002", apps: ["clausevault", "main-site"], totalSpent: 198 },
          { userId: "user_003", apps: ["bossyemail", "main-site"], totalSpent: 156 },
          { userId: "user_004", apps: ["clausevault", "bossyemail", "main-site"], totalSpent: 495 }
        ],
        crossAppFlows: [
          { userId: "user_001", flow: ["main-site", "clausevault", "bossyemail"], timestamp: new Date() },
          { userId: "user_002", flow: ["clausevault", "main-site"], timestamp: new Date() }
        ]
      }
    };

    setMetrics(mockMetrics);
  }, [appName]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (!metrics) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="animate-pulse">
          <div className="h-4 bg-white/20 rounded w-1/4 mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-white/20 rounded"></div>
            <div className="h-3 bg-white/20 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'revenue', label: 'Revenue Intelligence', icon: DollarSign },
    { id: 'content', label: 'Content Performance', icon: BarChart3 },
    { id: 'marketing', label: 'Marketing Attribution', icon: TrendingUp },
    { id: 'device', label: 'Device Analytics', icon: Smartphone },
    { id: 'crossApp', label: 'Cross-App Users', icon: Users }
  ];

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-white/5 backdrop-blur-sm rounded-lg p-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 font-mono text-sm whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-white/20 text-white font-medium border border-white/30'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Revenue Intelligence */}
      {activeTab === 'revenue' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="text-white/60 text-sm font-mono">LTV</span>
            </div>
            <div className="text-3xl font-bold text-white font-mono">{formatCurrency(metrics.revenue.ltv)}</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-white/60 text-sm font-mono">CAC</span>
            </div>
            <div className="text-3xl font-bold text-white font-mono">{formatCurrency(metrics.revenue.cac)}</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-red-400" />
              <span className="text-white/60 text-sm font-mono">Churn Rate</span>
            </div>
            <div className="text-3xl font-bold text-white font-mono">{metrics.revenue.churnRate}%</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="text-white/60 text-sm font-mono">Rev/User</span>
            </div>
            <div className="text-3xl font-bold text-white font-mono">{formatCurrency(metrics.revenue.revenuePerUser)}</div>
          </div>

          {/* Revenue Details */}
          <div className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4 font-mono">Revenue Events</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/80">Upgrade Events</span>
                <span className="text-green-400 font-medium">{metrics.revenue.upgradeEvents}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Downgrade Events</span>
                <span className="text-red-400 font-medium">{metrics.revenue.downgradeEvents}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Payment Failures</span>
                <span className="text-orange-400 font-medium">{metrics.revenue.paymentFailures}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Recovery Rate</span>
                <span className="text-green-400 font-medium">{metrics.revenue.recoveryRate}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Content Performance */}
      {activeTab === 'content' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Top Clauses */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4 font-mono">Top Copied Clauses</h3>
            <div className="space-y-3">
              {metrics.content.topClauses.map((clause, index) => (
                <div key={clause.clause} className="flex justify-between items-center">
                  <span className="text-white/80 text-sm">{clause.clause}</span>
                  <div className="text-right">
                    <div className="text-white font-medium">{clause.copies} copies</div>
                    <div className="text-green-400 text-xs">{formatCurrency(clause.revenue)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Queries */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 font-mono">Top Search Queries</h3>
              <div className="space-y-3">
                {metrics.content.searchQueries.map((query, index) => (
                  <div key={query.query} className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">"{query.query}"</span>
                    <div className="text-right">
                      <div className="text-white font-medium">{query.count} searches</div>
                      <div className="text-red-400 text-xs">{query.noResults} no results</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 font-mono">Template Downloads</h3>
              <div className="space-y-3">
                {metrics.content.templateDownloads.map((template, index) => (
                  <div key={template.template} className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">{template.template}</span>
                    <div className="text-right">
                      <div className="text-white font-medium">{template.downloads} downloads</div>
                      <div className="text-green-400 text-xs">{template.conversions} conversions</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Marketing Attribution */}
      {activeTab === 'marketing' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Traffic Sources */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4 font-mono">Traffic Sources</h3>
            <div className="space-y-3">
              {Object.entries(metrics.marketing.trafficSources).map(([source, data]) => (
                <div key={source} className="flex justify-between items-center">
                  <span className="text-white/80 text-sm capitalize">{source}</span>
                  <div className="text-right">
                    <div className="text-white font-medium">{data.sessions} sessions</div>
                    <div className="text-green-400 text-xs">{data.conversions} conversions ({formatCurrency(data.revenue)})</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UTM Campaigns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 font-mono">UTM Campaigns</h3>
              <div className="space-y-3">
                {metrics.marketing.utmCampaigns.map((campaign, index) => (
                  <div key={campaign.campaign} className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">{campaign.campaign}</span>
                    <div className="text-right">
                      <div className="text-white font-medium">{campaign.sessions} sessions</div>
                      <div className="text-green-400 text-xs">{formatCurrency(campaign.revenue)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 font-mono">Social Engagement</h3>
              <div className="space-y-3">
                {Object.entries(metrics.marketing.socialEngagement).map(([platform, data]) => (
                  <div key={platform} className="flex justify-between items-center">
                    <span className="text-white/80 text-sm capitalize">{platform}</span>
                    <div className="text-right">
                      <div className="text-white font-medium">{data.clicks} clicks</div>
                      <div className="text-green-400 text-xs">{formatCurrency(data.revenue)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Device Analytics */}
      {activeTab === 'device' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Device Types */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4 font-mono">Device Distribution</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">{metrics.device.mobileVsDesktop.mobile}%</div>
                <div className="text-white/60 text-sm">Mobile</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">{metrics.device.mobileVsDesktop.desktop}%</div>
                <div className="text-white/60 text-sm">Desktop</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">{metrics.device.mobileVsDesktop.tablet}%</div>
                <div className="text-white/60 text-sm">Tablet</div>
              </div>
            </div>
          </div>

          {/* Browser Usage */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 font-mono">Browser Usage</h3>
              <div className="space-y-3">
                {Object.entries(metrics.device.browserUsage).map(([browser, percentage]) => (
                  <div key={browser} className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">{browser}</span>
                    <span className="text-white font-medium">{percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 font-mono">Device Performance</h3>
              <div className="space-y-3">
                {Object.entries(metrics.device.devicePerformance).map(([device, perf]) => (
                  <div key={device} className="flex justify-between items-center">
                    <span className="text-white/80 text-sm capitalize">{device}</span>
                    <div className="text-right">
                      <div className="text-white font-medium">{perf.loadTime}s load</div>
                      <div className="text-blue-400 text-xs">{perf.conversionRate}% conversion</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Cross-App Users */}
      {activeTab === 'crossApp' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4 font-mono">Multi-Product Users</h3>
            <div className="space-y-3">
              {metrics.crossApp.multiProductUsers.map((user, index) => (
                <div key={user.userId} className="flex justify-between items-center">
                  <div>
                    <span className="text-white/80 text-sm font-mono">{user.userId}</span>
                    <div className="text-white/60 text-xs">
                      {user.apps.map(app => app.charAt(0).toUpperCase() + app.slice(1)).join(' + ')}
                    </div>
                  </div>
                  <span className="text-green-400 font-medium">{formatCurrency(user.totalSpent)}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
