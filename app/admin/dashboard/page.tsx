"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
// import AdvancedAnalyticsDashboard from "@/components/AdvancedAnalyticsDashboard";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  plan: 'monthly' | 'yearly';
  signUpDate: string;
  lastActive: string;
  totalCopies: number;
  status: 'active' | 'inactive' | 'suspended';
}

interface KPI {
  totalUsers: number;
  activeUsers: number;
  monthlyUsers: number;
  yearlyUsers: number;
  mrr: number;
  arr: number;
  avgCopiesPerUser: number;
  totalCopies: number;
}

interface AppData {
  name: string;
  url: string;
  totalSessions: number;
  totalEvents: number;
  conversionRate: number;
  averageSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  topEvents: Array<{ event: string; count: number }>;
  funnelData: {
    steps: Array<{ name: string; count: number; conversionRate: number }>;
    totalSessions: number;
    overallConversionRate: number;
  };
  performanceMetrics: {
    lcp: number;
    fid: number;
    cls: number;
    fcp: number;
    ttfb: number;
  };
  heatmapData: {
    totalInteractions: number;
    topClickAreas: Array<{ element: string; clicks: number }>;
  };
  businessMetrics: {
    totalUsers?: number;
    mrr?: number;
    arr?: number;
    totalCopies?: number;
    avgCopiesPerUser?: number;
  };
}

interface AnalyticsData {
  apps: Record<string, AppData>;
  overall: AppData;
}

interface AbuseAlert {
  id: string;
  userId: string;
  clauseTitle: string;
  copyCount: number;
  timestamp: string;
  abuseType: string;
  status: 'pending' | 'investigated' | 'resolved';
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [kpis, setKpis] = useState<KPI>({
    totalUsers: 0,
    activeUsers: 0,
    monthlyUsers: 0,
    yearlyUsers: 0,
    mrr: 0,
    arr: 0,
    avgCopiesPerUser: 0,
    totalCopies: 0
  });
  const [abuseAlerts, setAbuseAlerts] = useState<AbuseAlert[]>([]);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [selectedView, setSelectedView] = useState<'overview' | 'users' | 'analytics' | 'security'>('overview');
  const [selectedApp, setSelectedApp] = useState<string>('overall');
  const [selectedUserApp, setSelectedUserApp] = useState<string>('overall');
  const [apps, setApps] = useState<AppData[]>([]);
  const [webhookStats, setWebhookStats] = useState<any>(null);
  
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  // Background cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % 106);
    }, 6 * 60 * 60 * 1000); // 6 hours

    return () => clearInterval(interval);
  }, []);

  // Check admin access
  useEffect(() => {
    // Check if user is authenticated and authorized
    if (isSignedIn && user) {
      // Allow access to admin emails
      const adminEmails = ['hello@aylenmontenegro.com', 'aylenfrommiami@gmail.com'];
      if (adminEmails.includes(user.emailAddresses?.[0]?.emailAddress || '')) {
        console.log('Authorized admin access granted');
        loadDashboardData();
      } else {
        console.log('Unauthorized access attempt:', user.emailAddresses?.[0]?.emailAddress);
        router.push('/');
      }
    } else {
      // Not signed in, redirect to sign in
      router.push('/sign-in');
    }
  }, [isSignedIn, user, router]);

  const loadDashboardData = async () => {
    try {
      // For now, use mock data - you can integrate real API calls later
      loadMockData();
      await loadAnalyticsData();
      await loadWebhookStats();
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      setIsLoading(false);
    }
  };

  const loadAnalyticsData = async () => {
    try {
      // Fetch real analytics data from our enhanced API
      const response = await fetch('/api/analytics');
      const data = await response.json();
      
      // Mock enhanced analytics data for all apps
      const mockAnalyticsData: AnalyticsData = {
        overall: {
          name: 'All Apps Combined',
          url: 'aylenmontenegro.com',
          totalSessions: 2847,
          totalEvents: 18934,
          conversionRate: 3.8,
          averageSessionDuration: 285,
          topPages: [
            { page: '/', views: 892 },
            { page: '/elevate', views: 234 },
            { page: '/read', views: 187 },
            { page: '/deploy', views: 156 },
            { page: '/spill', views: 134 },
            { page: '/upgrade', views: 98 }
          ],
          topEvents: [
            { event: 'page_view', count: 7421 },
            { event: 'button_click', count: 3876 },
            { event: 'email_capture', count: 534 },
            { event: 'form_submit', count: 356 },
            { event: 'scroll_depth', count: 2245 },
            { event: 'exit_intent', count: 189 }
          ],
          funnelData: {
            steps: [
              { name: 'Visit', count: 2847, conversionRate: 100 },
              { name: 'Hero View', count: 2420, conversionRate: 85.0 },
              { name: 'Services View', count: 1812, conversionRate: 74.9 },
              { name: 'Testimonials View', count: 1224, conversionRate: 67.5 },
              { name: 'Contact Attempt', count: 498, conversionRate: 40.7 },
              { name: 'Email Capture', count: 289, conversionRate: 58.0 },
              { name: 'Conversion', count: 108, conversionRate: 37.4 }
            ],
            totalSessions: 2847,
            overallConversionRate: 3.8
          },
          performanceMetrics: {
            lcp: 1.2,
            fid: 45,
            cls: 0.08,
            fcp: 0.9,
            ttfb: 180
          },
          heatmapData: {
            totalInteractions: 6847,
            topClickAreas: [
              { element: 'Get Started Button', clicks: 634 },
              { element: 'Email Input', clicks: 487 },
              { element: 'Navigation Menu', clicks: 356 },
              { element: 'Contact Form', clicks: 334 },
              { element: 'Book Cards', clicks: 298 }
            ]
          },
          businessMetrics: {
            totalUsers: 15,
            mrr: 1485,
            arr: 8910,
            totalCopies: 196,
            avgCopiesPerUser: 13
          }
        },
        apps: {
          'main-site': {
            name: 'Main Site',
            url: 'aylenmontenegro.com',
            totalSessions: 1247,
            totalEvents: 8934,
            conversionRate: 3.2,
            averageSessionDuration: 245,
            topPages: [
              { page: '/', views: 892 },
              { page: '/elevate', views: 234 },
              { page: '/read', views: 187 },
              { page: '/deploy', views: 156 },
              { page: '/spill', views: 134 },
              { page: '/upgrade', views: 98 }
            ],
            topEvents: [
              { event: 'page_view', count: 3421 },
              { event: 'button_click', count: 1876 },
              { event: 'email_capture', count: 234 },
              { event: 'form_submit', count: 156 },
              { event: 'scroll_depth', count: 1245 },
              { event: 'exit_intent', count: 89 }
            ],
            funnelData: {
              steps: [
                { name: 'Visit', count: 1247, conversionRate: 100 },
                { name: 'Hero View', count: 1060, conversionRate: 85.1 },
                { name: 'Services View', count: 812, conversionRate: 76.6 },
                { name: 'Testimonials View', count: 524, conversionRate: 64.5 },
                { name: 'Contact Attempt', count: 198, conversionRate: 37.8 },
                { name: 'Email Capture', count: 89, conversionRate: 44.9 },
                { name: 'Conversion', count: 40, conversionRate: 44.9 }
              ],
              totalSessions: 1247,
              overallConversionRate: 3.2
            },
            performanceMetrics: {
              lcp: 1.2,
              fid: 45,
              cls: 0.08,
              fcp: 0.9,
              ttfb: 180
            },
            heatmapData: {
              totalInteractions: 2847,
              topClickAreas: [
                { element: 'Get Started Button', clicks: 234 },
                { element: 'Email Input', clicks: 187 },
                { element: 'Navigation Menu', clicks: 156 },
                { element: 'Contact Form', clicks: 134 },
                { element: 'Book Cards', clicks: 98 }
              ]
            },
            businessMetrics: {
              totalUsers: 0,
              mrr: 0,
              arr: 0,
               totalCopies: 0,
               avgCopiesPerUser: 0
            }
          },
          'clausevault': {
            name: 'ClauseVault',
            url: 'clausevault.com',
            totalSessions: 892,
            totalEvents: 6234,
            conversionRate: 4.8,
            averageSessionDuration: 345,
            topPages: [
              { page: '/app', views: 456 },
              { page: '/pay', views: 234 },
              { page: '/', views: 202 }
            ],
            topEvents: [
              { event: 'clause_copied', count: 1234 },
              { event: 'page_view', count: 2676 },
              { event: 'button_click', count: 1456 },
              { event: 'form_submit', count: 234 },
              { event: 'search_query', count: 567 },
              { event: 'scroll_depth', count: 890 }
            ],
            funnelData: {
              steps: [
                { name: 'Visit', count: 892, conversionRate: 100 },
                { name: 'App View', count: 756, conversionRate: 84.8 },
                { name: 'Search Usage', count: 456, conversionRate: 60.3 },
                { name: 'Clause Copy', count: 234, conversionRate: 51.3 },
                { name: 'Payment Page', count: 123, conversionRate: 52.6 },
                { name: 'Purchase', count: 68, conversionRate: 55.3 }
              ],
              totalSessions: 892,
              overallConversionRate: 4.8
            },
            performanceMetrics: {
              lcp: 0.8,
              fid: 32,
              cls: 0.05,
              fcp: 0.7,
              ttfb: 120
            },
            heatmapData: {
              totalInteractions: 2347,
              topClickAreas: [
                { element: 'Copy Button', clicks: 456 },
                { element: 'Search Input', clicks: 234 },
                { element: 'Category Filter', clicks: 187 },
                { element: 'Payment Button', clicks: 123 },
                { element: 'Navigation', clicks: 98 }
              ]
            },
            businessMetrics: {
              totalUsers: 12,
              mrr: 1188,
              arr: 7128,
              totalCopies: 156,
              avgCopiesPerUser: 13
            }
          },
          'bossyemail': {
            name: 'BossyEmail',
            url: 'bossyemail.com',
            totalSessions: 708,
            totalEvents: 3766,
            conversionRate: 4.2,
            averageSessionDuration: 265,
            topPages: [
              { page: '/', views: 345 },
              { page: '/templates', views: 234 },
              { page: '/pricing', views: 129 }
            ],
            topEvents: [
              { event: 'template_view', count: 876 },
              { event: 'page_view', count: 1324 },
              { event: 'button_click', count: 567 },
              { event: 'email_capture', count: 234 },
              { event: 'form_submit', count: 123 },
              { event: 'download', count: 89 }
            ],
            funnelData: {
              steps: [
                { name: 'Visit', count: 708, conversionRate: 100 },
                { name: 'Template View', count: 567, conversionRate: 80.1 },
                { name: 'Email Capture', count: 234, conversionRate: 41.3 },
                { name: 'Download', count: 89, conversionRate: 38.0 }
              ],
              totalSessions: 708,
              overallConversionRate: 4.2
            },
            performanceMetrics: {
              lcp: 1.0,
              fid: 38,
              cls: 0.06,
              fcp: 0.8,
              ttfb: 150
            },
            heatmapData: {
              totalInteractions: 1653,
              topClickAreas: [
                { element: 'Download Button', clicks: 234 },
                { element: 'Email Input', clicks: 187 },
                { element: 'Template Preview', clicks: 156 },
                { element: 'Category Filter', clicks: 123 },
                { element: 'Navigation', clicks: 89 }
              ]
            },
            businessMetrics: {
              totalUsers: 3,
              mrr: 297,
              arr: 1782,
              totalCopies: 40,
              avgCopiesPerUser: 13
            }
          }
        }
      };
      
      setAnalyticsData(mockAnalyticsData);
    } catch (error) {
      console.error('Error loading analytics data:', error);
    }
  };

  const loadWebhookStats = async () => {
    try {
      const response = await fetch('/api/webhooks/status');
      const data = await response.json();
      setWebhookStats(data);
    } catch (error) {
      console.error('Error loading webhook stats:', error);
      // Mock webhook stats for development
      setWebhookStats({
        stats: {
          totalEvents: 156,
          successfulEvents: 142,
          failedEvents: 8,
          retryEvents: 6,
          averageProcessingTime: 245,
          lastEventAt: new Date(),
          eventsByType: {
            'checkout.session.completed': 45,
            'invoice.payment_succeeded': 38,
            'invoice.payment_failed': 3,
            'customer.subscription.created': 12,
            'customer.subscription.updated': 8,
            'customer.subscription.deleted': 2
          }
        },
        failedWebhooks: [],
        summary: {
          totalEvents: 156,
          successRate: '91.0%',
          failureRate: '5.1%'
        }
      });
    }
  };

  // Calculate combined totals across all apps
  const getCombinedTotals = () => {
    const totalUsers = apps.reduce((sum, app) => sum + app.totalUsers, 0);
    const totalMRR = apps.reduce((sum, app) => sum + app.mrr, 0);
    const totalARR = apps.reduce((sum, app) => sum + app.arr, 0);
    const avgChurnRate = apps.length > 0 ? apps.reduce((sum, app) => sum + app.churnRate, 0) / apps.length : 0;
    
    return {
      totalUsers,
      totalMRR,
      totalARR,
      avgChurnRate
    };
  };

  // Export functionality
  const exportData = (type: 'overview' | 'users' | 'analytics' | 'all') => {
    const dataToExport: any = {};
    
    if (type === 'overview' || type === 'all') {
      dataToExport.overview = {
        combinedTotals: getCombinedTotals(),
        apps: apps,
        revenueBreakdown: apps.map(app => ({
          app: app.name,
          mrr: app.mrr,
          arr: app.arr,
          users: app.totalUsers,
          churnRate: app.churnRate
        }))
      };
    }
    
    if (type === 'users' || type === 'all') {
      dataToExport.users = {
        allUsers: users,
        apps: apps
      };
    }
    
    if (type === 'analytics' || type === 'all') {
      dataToExport.analytics = analyticsData;
    }
    
    // Create and download JSON file
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `dashboard-export-${type}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const loadMockData = () => {
    const mockUsers: User[] = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@realestate.com',
        plan: 'monthly',
        signUpDate: '2024-01-15',
        lastActive: '2024-12-15',
        totalCopies: 45,
        status: 'active'
      },
      {
        id: '2',
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.j@attorney.com',
        plan: 'yearly',
        signUpDate: '2024-03-20',
        lastActive: '2024-12-15',
        totalCopies: 128,
        status: 'active'
      },
      {
        id: '3',
        firstName: 'Mike',
        lastName: 'Davis',
        email: 'mike.d@agent.com',
        plan: 'monthly',
        signUpDate: '2024-06-10',
        lastActive: '2024-12-10',
        totalCopies: 23,
        status: 'active'
      }
    ];

    const mockAbuseAlerts: AbuseAlert[] = [
      {
        id: '1',
        userId: 'user-123',
        clauseTitle: 'Deposit Clause',
        copyCount: 45,
        timestamp: '2024-12-15T10:30:00Z',
        abuseType: 'rapid_copying',
        status: 'pending'
      }
    ];

    setUsers(mockUsers);
    setAbuseAlerts(mockAbuseAlerts);
    
    // Mock apps data
    const mockApps: AppData[] = [
      {
        id: 'clausevault',
        name: 'ClauseVault',
        url: 'clausevault.aylenmontenegro.com',
        totalUsers: 12,
        mrr: 1188, // 12 users * $99
        arr: 7128, // 12 users * $594 (yearly)
        churnRate: 2.8
      },
      {
        id: 'bossyemail',
        name: 'BossyEmail',
        url: 'bossyemail.aylenmontenegro.com',
        totalUsers: 3,
        mrr: 297, // 3 users * $99
        arr: 1782, // 3 users * $594 (yearly)
        churnRate: 4.0
      },
      {
        id: 'main-site',
        name: 'Main Site',
        url: 'aylenmontenegro.com',
        totalUsers: 0,
        mrr: 0,
        arr: 0,
        churnRate: 0 // No subscription products, just marketing site
      }
    ];
    
    setApps(mockApps);
    console.log('Mock apps data set:', mockApps);
    
    // Calculate KPIs
    const monthlyUsers = mockUsers.filter(u => u.plan === 'monthly').length;
    const yearlyUsers = mockUsers.filter(u => u.plan === 'yearly').length;
    const mrr = monthlyUsers * 99; // $99 monthly
    const arr = yearlyUsers * 891; // $891 yearly
    const totalCopies = mockUsers.reduce((sum, u) => sum + u.totalCopies, 0);
    const avgCopiesPerUser = totalCopies / mockUsers.length;

    setKpis({
      totalUsers: mockUsers.length,
      activeUsers: mockUsers.filter(u => u.status === 'active').length,
      monthlyUsers,
      yearlyUsers,
      mrr,
      arr,
      avgCopiesPerUser: Math.round(avgCopiesPerUser),
      totalCopies
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading Admin Dashboard...</div>
      </div>
    );
  }

  // Show unauthorized access message
  const adminEmails = ['hello@aylenmontenegro.com', 'aylenfrommiami@gmail.com'];
  if (isSignedIn && user && !adminEmails.includes(user.emailAddresses?.[0]?.emailAddress || '')) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-2xl font-bold mb-4">Access Denied</div>
          <div className="text-white/60 text-lg mb-6">You don't have permission to access this dashboard.</div>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // Show sign-in prompt for unauthenticated users
  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-2xl font-bold mb-4">Authentication Required</div>
          <div className="text-white/60 text-lg mb-6">Please sign in to access the admin dashboard.</div>
          <button
            onClick={() => router.push('/sign-in')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(/images/clausevault/clausevault-bg-${currentBgIndex + 1}${currentBgIndex < 35 ? '.jpg' : '.jpeg'})`,
          }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-xl text-white tracking-wide">AYLEN MONTENEGRO</h1>
              <span className="text-white/60 text-sm font-mono">Analytics Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-sm font-mono">
                Welcome, Admin (Development Mode)
              </span>
              <button
                onClick={loadDashboardData}
                className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-mono text-sm hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                Refresh
              </button>
              <button
                onClick={() => router.push('/clausevault')}
                className="bg-white text-black px-4 py-2 rounded-lg font-mono text-sm hover:bg-gray-200 transition-all duration-200"
              >
                Back to App
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacing */}
      <div className="h-8"></div>

      {/* Navigation Tabs */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex space-x-1 bg-white/10 backdrop-blur-sm rounded-lg p-1">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'users', label: 'Users' },
            { id: 'analytics', label: 'Analytics' },
            { id: 'security', label: 'Security' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id as any)}
              className={`flex-1 px-4 py-2 rounded-md transition-all duration-200 font-mono text-sm ${
                selectedView === tab.id
                  ? 'bg-white text-black font-medium'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* App Navigation Tabs */}
      {selectedView === 'analytics' && analyticsData && (
        <div className="relative z-10 max-w-7xl mx-auto px-6 mt-4">
          <div className="flex space-x-1 bg-white/5 backdrop-blur-sm rounded-lg p-1">
            {[
              { id: 'overall', label: 'All Apps', data: analyticsData.overall },
              ...Object.entries(analyticsData.apps).map(([key, app]) => ({
                id: key,
                label: app.name,
                data: app
              }))
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedApp(tab.id)}
                className={`px-4 py-2 rounded-md transition-all duration-200 font-mono text-sm ${
                  selectedApp === tab.id
                    ? 'bg-white/20 text-white font-medium border border-white/30'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Spacing */}
      <div className="h-6"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {selectedView === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Export Button */}
            <div className="flex justify-end">
              <button
                onClick={() => exportData('overview')}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors font-mono text-sm border border-white/30"
              >
                Export Overview Data
              </button>
            </div>

            {/* Combined KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div>
                  <p className="text-white/60 text-sm font-mono mb-2">Total Users</p>
                  <p className="text-4xl font-bold text-white font-mono">{getCombinedTotals().totalUsers}</p>
                  <p className="text-white/40 text-xs mt-1">Across all apps</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div>
                  <p className="text-white/60 text-sm font-mono mb-2">Total MRR</p>
                  <p className="text-4xl font-bold text-white font-mono">{formatCurrency(getCombinedTotals().totalMRR)}</p>
                  <p className="text-white/40 text-xs mt-1">Monthly recurring</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div>
                  <p className="text-white/60 text-sm font-mono mb-2">Total ARR</p>
                  <p className="text-4xl font-bold text-white font-mono">{formatCurrency(getCombinedTotals().totalARR)}</p>
                  <p className="text-white/40 text-xs mt-1">Annual recurring</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div>
                  <p className="text-white/60 text-sm font-mono mb-2">Avg Churn Rate</p>
                  <p className="text-4xl font-bold text-white font-mono">{getCombinedTotals().avgChurnRate.toFixed(1)}%</p>
                  <p className="text-white/40 text-xs mt-1">Monthly average</p>
                </div>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 font-mono">Revenue by App</h3>
                <div className="space-y-4">
                  {apps.length > 0 ? (
                    apps.map((app, index) => (
                      <div key={app.name} className="border-b border-white/10 pb-3 last:border-b-0">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{app.name}</span>
                          <span className="text-white/60 text-sm">{app.totalUsers} users</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/80 text-sm">MRR</span>
                          <span className="text-green-400 font-medium">{formatCurrency(app.mrr)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/80 text-sm">ARR</span>
                          <span className="text-green-400 font-medium">{formatCurrency(app.arr)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white/80 text-sm">Churn Rate</span>
                          <span className="text-red-400 font-medium">{app.churnRate}%</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-white/60 text-center py-4">Loading app data...</div>
                  )}
                  {apps.length > 0 && (
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">Total MRR</span>
                        <span className="text-green-400 font-bold text-xl">{formatCurrency(getCombinedTotals().totalMRR)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">Total ARR</span>
                        <span className="text-green-400 font-bold text-xl">{formatCurrency(getCombinedTotals().totalARR)}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 font-mono">Usage Analytics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Avg Copies per User</span>
                    <span className="text-white font-medium">{kpis.avgCopiesPerUser}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Monthly Users</span>
                    <span className="text-white font-medium">{kpis.monthlyUsers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Yearly Users</span>
                    <span className="text-white font-medium">{kpis.yearlyUsers}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {selectedView === 'users' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Export Button */}
            <div className="flex justify-end">
              <button
                onClick={() => exportData('users')}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors font-mono text-sm border border-white/30"
              >
                Export Users Data
              </button>
            </div>

            {/* App Selection Tabs */}
            <div className="flex space-x-1 bg-white/5 backdrop-blur-sm rounded-lg p-1">
              {[
                { id: 'overall', label: 'All Users' },
                { id: 'clausevault', label: 'ClauseVault' },
                { id: 'bossyemail', label: 'BossyEmail' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedUserApp(tab.id)}
                  className={`px-4 py-2 rounded-md transition-all duration-200 font-mono text-sm ${
                    selectedUserApp === tab.id
                      ? 'bg-white/20 text-white font-medium border border-white/30'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 font-mono">
                {selectedUserApp === 'overall' ? 'All Active Users' : 
                 selectedUserApp === 'clausevault' ? 'ClauseVault Users' : 'BossyEmail Users'}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-white/60 font-medium py-3 px-4 font-mono text-sm">Name</th>
                      <th className="text-white/60 font-medium py-3 px-4 font-mono text-sm">Email</th>
                      <th className="text-white/60 font-medium py-3 px-4 font-mono text-sm">Plan</th>
                      <th className="text-white/60 font-medium py-3 px-4 font-mono text-sm">Sign Up</th>
                      <th className="text-white/60 font-medium py-3 px-4 font-mono text-sm">Last Active</th>
                      <th className="text-white/60 font-medium py-3 px-4 font-mono text-sm">Copies</th>
                      <th className="text-white/60 font-medium py-3 px-4 font-mono text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b border-white/10">
                        <td className="text-white py-3 px-4 font-mono text-sm">
                          {user.firstName} {user.lastName}
                        </td>
                        <td className="text-white/80 py-3 px-4 font-mono text-sm">{user.email}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-mono font-medium ${
                            user.plan === 'yearly' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {user.plan === 'yearly' ? 'Yearly' : 'Monthly'}
                          </span>
                        </td>
                        <td className="text-white/80 py-3 px-4 font-mono text-sm">{formatDate(user.signUpDate)}</td>
                        <td className="text-white/80 py-3 px-4 font-mono text-sm">{formatDate(user.lastActive)}</td>
                        <td className="text-white py-3 px-4 font-mono text-sm">{user.totalCopies}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-mono font-medium ${
                            user.status === 'active' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-red-500/20 text-red-400'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {selectedView === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Export Button */}
            <div className="flex justify-end">
              <button
                onClick={() => exportData('analytics')}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors font-mono text-sm border border-white/30"
              >
                Export Analytics Data
              </button>
            </div>

            {/* Analytics Overview */}
            {analyticsData && (() => {
              const currentApp = selectedApp === 'overall' ? analyticsData.overall : analyticsData.apps[selectedApp];
              if (!currentApp) return null;

              return (
                <>
                  {/* App Header */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold text-white">{currentApp.name}</h2>
                        <p className="text-white/60 text-sm font-mono">{currentApp.url}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white font-mono">{currentApp.conversionRate}%</div>
                        <div className="text-white/60 text-sm">Conversion Rate</div>
                      </div>
                    </div>
                  </div>

                  {/* Core Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="text-white/60 text-sm font-mono">Total Sessions</span>
                      </div>
                      <div className="text-3xl font-bold text-white font-mono">{currentApp.totalSessions.toLocaleString()}</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-white/60 text-sm font-mono">Total Events</span>
                      </div>
                      <div className="text-3xl font-bold text-white font-mono">{currentApp.totalEvents.toLocaleString()}</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        <span className="text-white/60 text-sm font-mono">Conversion Rate</span>
                      </div>
                      <div className="text-3xl font-bold text-white font-mono">{currentApp.conversionRate}%</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <span className="text-white/60 text-sm font-mono">Avg Session</span>
                      </div>
                      <div className="text-3xl font-bold text-white font-mono">{Math.round(currentApp.averageSessionDuration / 60)}m</div>
                    </div>
                  </div>

                  {/* Business Metrics (if available) */}
                  {currentApp.businessMetrics && Object.keys(currentApp.businessMetrics).length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {currentApp.businessMetrics.totalUsers && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                            <span className="text-white/60 text-sm font-mono">Total Users</span>
                          </div>
                          <div className="text-3xl font-bold text-white font-mono">{currentApp.businessMetrics.totalUsers}</div>
                        </div>
                      )}
                      {selectedApp === 'main-site' && currentApp.businessMetrics.bookSales && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                            <span className="text-white/60 text-sm font-mono">Book Sales</span>
                          </div>
                          <div className="text-3xl font-bold text-white font-mono">{currentApp.businessMetrics.bookSales}</div>
                        </div>
                      )}
                      {selectedApp === 'main-site' && currentApp.businessMetrics.emailCaptures && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                            <span className="text-white/60 text-sm font-mono">Email Captures</span>
                          </div>
                          <div className="text-3xl font-bold text-white font-mono">{currentApp.businessMetrics.emailCaptures}</div>
                        </div>
                      )}
                      {selectedApp === 'main-site' && currentApp.businessMetrics.leadsGenerated && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                            <span className="text-white/60 text-sm font-mono">Leads Generated</span>
                          </div>
                          <div className="text-3xl font-bold text-white font-mono">{currentApp.businessMetrics.leadsGenerated}</div>
                        </div>
                      )}
                      {currentApp.businessMetrics.mrr && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                            <span className="text-white/60 text-sm font-mono">MRR</span>
                          </div>
                          <div className="text-3xl font-bold text-white font-mono">{formatCurrency(currentApp.businessMetrics.mrr)}</div>
                        </div>
                      )}
                      {currentApp.businessMetrics.arr && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                            <span className="text-white/60 text-sm font-mono">ARR</span>
                          </div>
                          <div className="text-3xl font-bold text-white font-mono">{formatCurrency(currentApp.businessMetrics.arr)}</div>
                        </div>
                      )}
                      {currentApp.businessMetrics.totalCopies && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                            <span className="text-white/60 text-sm font-mono">Total Copies</span>
                          </div>
                          <div className="text-3xl font-bold text-white font-mono">{currentApp.businessMetrics.totalCopies}</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Conversion Funnel */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-6 font-mono">Conversion Funnel Analysis</h3>
                    <div className="space-y-4">
                      {currentApp.funnelData.steps.map((step, index) => {
                        const isLastStep = index === currentApp.funnelData.steps.length - 1;
                        const previousStep = index > 0 ? currentApp.funnelData.steps[index - 1] : null;
                        const stepConversionRate = previousStep 
                          ? (step.count / previousStep.count) * 100 
                          : 100;

                        return (
                          <div key={step.name} className="relative">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white font-medium">{step.name}</span>
                              <span className="text-white/60 text-sm">{step.count.toLocaleString()} ({stepConversionRate.toFixed(1)}%)</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                              <div 
                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                                style={{ width: `${stepConversionRate}%` }}
                              ></div>
                            </div>
                            {!isLastStep && (
                              <div className="text-right text-xs text-red-400 mt-1">
                                ↓ {((step.count / currentApp.funnelData.steps[index + 1].count) * 100).toFixed(1)}% drop-off
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Top Pages & Events */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4 font-mono">Top Pages</h3>
                      <div className="space-y-3">
                        {currentApp.topPages.map((page, index) => (
                          <div key={page.page} className="flex justify-between items-center">
                            <span className="text-white/80 text-sm font-mono">{page.page}</span>
                            <span className="text-white font-medium">{page.views.toLocaleString()} views</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4 font-mono">Top Events</h3>
                      <div className="space-y-3">
                        {currentApp.topEvents.map((event, index) => (
                          <div key={event.event} className="flex justify-between items-center">
                            <span className="text-white/80 text-sm font-mono">{event.event.replace('_', ' ')}</span>
                            <span className="text-white font-medium">{event.count.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-4 font-mono">Core Web Vitals</h3>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">{currentApp.performanceMetrics.lcp}s</div>
                        <div className="text-white/60 text-xs">LCP</div>
                        <div className="text-green-400 text-xs">Good</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">{currentApp.performanceMetrics.fid}ms</div>
                        <div className="text-white/60 text-xs">FID</div>
                        <div className="text-green-400 text-xs">Good</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">{currentApp.performanceMetrics.cls}</div>
                        <div className="text-white/60 text-xs">CLS</div>
                        <div className="text-green-400 text-xs">Good</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">{currentApp.performanceMetrics.fcp}s</div>
                        <div className="text-white/60 text-xs">FCP</div>
                        <div className="text-green-400 text-xs">Good</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400 mb-1">{currentApp.performanceMetrics.ttfb}ms</div>
                        <div className="text-white/60 text-xs">TTFB</div>
                        <div className="text-yellow-400 text-xs">Needs Improvement</div>
                      </div>
                    </div>
                  </div>

                  {/* Heatmap Insights */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-4 font-mono">User Behavior Insights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-purple-400 mb-2">{currentApp.heatmapData.totalInteractions.toLocaleString()}</div>
                        <div className="text-white/60 text-sm">Total Interactions Tracked</div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-3">Top Click Areas</h4>
                        <div className="space-y-2">
                          {currentApp.heatmapData.topClickAreas.map((area, index) => (
                            <div key={area.element} className="flex justify-between items-center">
                              <span className="text-white/80 text-sm">{area.element}</span>
                              <span className="text-white font-medium">{area.clicks} clicks</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Analytics Dashboard */}
                  {/* <AdvancedAnalyticsDashboard appName={currentApp.name} /> */}
                </>
              );
            })()}

          </motion.div>
        )}

        {selectedView === 'security' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Webhook Monitoring */}
            {webhookStats && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 font-mono">Webhook Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white font-mono">{webhookStats.stats.totalEvents}</div>
                    <div className="text-white/60 text-sm">Total Events</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400 font-mono">{webhookStats.stats.successfulEvents}</div>
                    <div className="text-white/60 text-sm">Successful</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-400 font-mono">{webhookStats.stats.failedEvents}</div>
                    <div className="text-white/60 text-sm">Failed</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400 font-mono">{webhookStats.summary.successRate}</div>
                    <div className="text-white/60 text-sm">Success Rate</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-white font-medium">Event Types (Last 24h)</h4>
                  {Object.entries(webhookStats.stats.eventsByType).map(([eventType, count]) => (
                    <div key={eventType} className="flex justify-between items-center">
                      <span className="text-white/80 text-sm font-mono">{eventType}</span>
                      <span className="text-white font-medium">{count as number}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4 font-mono">Security Alerts</h3>
              {abuseAlerts.length === 0 ? (
                <p className="text-white/60">No security alerts at this time.</p>
              ) : (
                <div className="space-y-4">
                  {abuseAlerts.map((alert) => (
                    <div key={alert.id} className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">🚨 {alert.abuseType.replace('_', ' ').toUpperCase()}</p>
                          <p className="text-white/80 text-sm">Clause: {alert.clauseTitle}</p>
                          <p className="text-white/60 text-xs">User ID: {alert.userId}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-medium">{alert.copyCount} copies</p>
                          <p className="text-white/60 text-xs">{formatDate(alert.timestamp)}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            alert.status === 'pending' 
                              ? 'bg-yellow-500/20 text-yellow-400' 
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {alert.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
