"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

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
  const [isLoading, setIsLoading] = useState(true);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [selectedView, setSelectedView] = useState<'overview' | 'users' | 'analytics' | 'security'>('overview');
  
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
    // For development - load data immediately
    // TODO: Add proper authentication check for production
    console.log('Loading dashboard data...');
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // For now, use mock data - you can integrate real API calls later
      loadMockData();
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      setIsLoading(false);
    }
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading Admin Dashboard...</div>
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
              <h1 className="text-3xl font-bold text-white font-mono lowercase">clausevault</h1>
              <span className="text-white/60 text-sm">Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-sm">
                Welcome, Admin (Development Mode)
              </span>
              <button
                onClick={loadDashboardData}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
              <button
                onClick={() => router.push('/clausevault')}
                className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Back to App
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex space-x-1 bg-white/10 backdrop-blur-sm rounded-lg p-1">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'users', label: 'Users', icon: '👥' },
            { id: 'analytics', label: 'Analytics', icon: '📈' },
            { id: 'security', label: 'Security', icon: '🛡️' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedView(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-all ${
                selectedView === tab.id
                  ? 'bg-white text-black font-medium'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {selectedView === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Total Users</p>
                    <p className="text-3xl font-bold text-white">{kpis.totalUsers}</p>
                  </div>
                  <div className="text-4xl">👥</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Monthly Revenue</p>
                    <p className="text-3xl font-bold text-white">{formatCurrency(kpis.mrr)}</p>
                  </div>
                  <div className="text-4xl">💰</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Active Users</p>
                    <p className="text-3xl font-bold text-white">{kpis.activeUsers}</p>
                  </div>
                  <div className="text-4xl">✅</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/60 text-sm">Total Copies</p>
                    <p className="text-3xl font-bold text-white">{kpis.totalCopies}</p>
                  </div>
                  <div className="text-4xl">📋</div>
                </div>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Revenue Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Monthly Plans</span>
                    <span className="text-white font-medium">{kpis.monthlyUsers} × $99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Yearly Plans</span>
                    <span className="text-white font-medium">{kpis.yearlyUsers} × $891</span>
                  </div>
                  <div className="border-t border-white/20 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Total MRR</span>
                      <span className="text-white font-bold text-xl">{formatCurrency(kpis.mrr)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Total ARR</span>
                      <span className="text-white font-bold text-xl">{formatCurrency(kpis.arr)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Usage Analytics</h3>
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
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Active Users</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-white/60 font-medium py-3 px-4">Name</th>
                      <th className="text-white/60 font-medium py-3 px-4">Email</th>
                      <th className="text-white/60 font-medium py-3 px-4">Plan</th>
                      <th className="text-white/60 font-medium py-3 px-4">Sign Up</th>
                      <th className="text-white/60 font-medium py-3 px-4">Last Active</th>
                      <th className="text-white/60 font-medium py-3 px-4">Copies</th>
                      <th className="text-white/60 font-medium py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b border-white/10">
                        <td className="text-white py-3 px-4">
                          {user.firstName} {user.lastName}
                        </td>
                        <td className="text-white/80 py-3 px-4">{user.email}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.plan === 'yearly' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {user.plan === 'yearly' ? 'Yearly' : 'Monthly'}
                          </span>
                        </td>
                        <td className="text-white/80 py-3 px-4">{formatDate(user.signUpDate)}</td>
                        <td className="text-white/80 py-3 px-4">{formatDate(user.lastActive)}</td>
                        <td className="text-white py-3 px-4">{user.totalCopies}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
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
            {/* Growth Projections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Growth Projections</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Current MRR</span>
                    <span className="text-white font-medium">{formatCurrency(kpis.mrr)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Projected MRR (3 months)</span>
                    <span className="text-white font-medium">{formatCurrency(kpis.mrr * 1.3)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Projected MRR (6 months)</span>
                    <span className="text-white font-medium">{formatCurrency(kpis.mrr * 1.6)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Projected ARR</span>
                    <span className="text-white font-medium">{formatCurrency(kpis.arr * 1.4)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">User Growth</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Monthly Growth Rate</span>
                    <span className="text-green-400 font-medium">+15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Churn Rate</span>
                    <span className="text-red-400 font-medium">-3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">LTV (Lifetime Value)</span>
                    <span className="text-white font-medium">{formatCurrency(1200)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">CAC (Customer Acquisition)</span>
                    <span className="text-white font-medium">{formatCurrency(150)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Analytics */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Usage Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{kpis.avgCopiesPerUser}</div>
                  <div className="text-white/60 text-sm">Avg Copies per User</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{Math.round(kpis.totalCopies / 30)}</div>
                  <div className="text-white/60 text-sm">Copies per Day</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{Math.round((kpis.yearlyUsers / kpis.totalUsers) * 100)}%</div>
                  <div className="text-white/60 text-sm">Yearly Plan %</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {selectedView === 'security' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Security Alerts</h3>
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
