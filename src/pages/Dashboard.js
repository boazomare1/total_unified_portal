import React from 'react';
import { useAuth } from '../context/AuthContext';
import UserDashboard from './UserDashboard';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

/**
 * Dashboard page component
 * Main landing page after login with overview widgets and quick actions
 */
const Dashboard = () => {
  const { user, isAdmin } = useAuth();

  // If user is not admin, show user dashboard
  if (!isAdmin()) {
    return <UserDashboard />;
  }

  // Admin dashboard (existing code)

  const stats = [
    {
      name: 'Total Applications',
      value: '20',
      change: '+3',
      changeType: 'positive',
      bgColor: 'bg-info-50',
      iconColor: 'text-info-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      name: 'Active Users',
      value: '1,247',
      change: '+89',
      changeType: 'positive',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
    },
    {
      name: 'Today\'s Orders',
      value: '342',
      change: '+23',
      changeType: 'positive',
      bgColor: 'bg-success-50',
      iconColor: 'text-success-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      name: 'Revenue (KSh)',
      value: '2.4M',
      change: '+12%',
      changeType: 'positive',
      bgColor: 'bg-warning-50',
      iconColor: 'text-warning-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
    },
    {
      name: 'System Health',
      value: '99.9%',
      change: '+0.1%',
      changeType: 'positive',
      bgColor: 'bg-success-50',
      iconColor: 'text-success-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Pending Tasks',
      value: '7',
      change: '-2',
      changeType: 'positive',
      bgColor: 'bg-error-50',
      iconColor: 'text-error-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: 'Logged in successfully',
      time: '2 minutes ago',
      type: 'success',
    },
    {
      id: 2,
      action: 'New fuel order placed - Order #12345',
      time: '15 minutes ago',
      type: 'info',
    },
    {
      id: 3,
      action: 'LPG delivery completed - Order #12340',
      time: '1 hour ago',
      type: 'success',
    },
    {
      id: 4,
      action: 'Payment received - KSh 15,000',
      time: '2 hours ago',
      type: 'success',
    },
    {
      id: 5,
      action: 'System maintenance scheduled for tonight',
      time: '3 hours ago',
      type: 'warning',
    },
    {
      id: 6,
      action: 'Downloaded monthly sales report',
      time: '1 day ago',
      type: 'info',
    },
  ];

  const notifications = [
    {
      id: 1,
      title: 'New Order Alert',
      message: 'High priority fuel order from Nairobi depot',
      type: 'urgent',
      time: '5 min ago',
    },
    {
      id: 2,
      title: 'Payment Received',
      message: 'KSh 25,000 payment processed successfully',
      type: 'success',
      time: '1 hour ago',
    },
    {
      id: 3,
      title: 'Maintenance Reminder',
      message: 'System maintenance scheduled for 2:00 AM',
      type: 'warning',
      time: '3 hours ago',
    },
    {
      id: 4,
      title: 'Delivery Update',
      message: 'LPG delivery truck ETA: 30 minutes',
      type: 'info',
      time: '4 hours ago',
    },
  ];

  const topApps = [
    { name: 'LPG Distribution', usage: '89%', users: 342 },
    { name: 'eFuel Portal', usage: '76%', users: 298 },
    { name: 'Track & Trace', usage: '65%', users: 234 },
    { name: 'Booster Cards', usage: '54%', users: 187 },
    { name: 'EasyGas', usage: '43%', users: 156 },
  ];

  // Chart data for Top Applications
  const topAppsChartData = {
    labels: topApps.map(app => app.name),
    datasets: [
      {
        label: 'Daily Active Users',
        data: topApps.map(app => app.users),
        backgroundColor: [
          '#ef4444', // Red
          '#f97316', // Orange
          '#22c55e', // Green
          '#3b82f6', // Blue
          '#fbbf24', // Yellow
        ],
        borderColor: [
          '#dc2626',
          '#ea580c',
          '#16a34a',
          '#2563eb',
          '#f59e0b',
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.parsed.y} users`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          precision: 0,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 0,
        },
      },
    },
  };

  // Top Applications Doughnut Chart
  const topAppsDoughnutData = {
    labels: topApps.map(app => app.name),
    datasets: [
      {
        data: topApps.map(app => app.users),
        backgroundColor: [
          '#ef4444', // Red - LPG Distribution
          '#f97316', // Orange - eFuel Portal
          '#22c55e', // Green - Track & Trace
          '#3b82f6', // Blue - Booster Cards
          '#fbbf24', // Yellow - EasyGas
        ],
        borderColor: [
          '#dc2626',
          '#ea580c',
          '#16a34a',
          '#2563eb',
          '#f59e0b',
        ],
        borderWidth: 2,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed} users`;
          }
        }
      },
    },
    cutout: '60%',
  };

  const quickActions = [
    {
      name: 'LPG Distribution',
      description: 'Access LPG ordering & management',
      url: 'https://totalapp.techsavanna.co.ke/',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'primary',
    },
    {
      name: 'Fuel Orders',
      description: 'Place & track fuel orders',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'warning',
    },
    {
      name: 'Track Deliveries',
      description: 'Real-time delivery tracking',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      color: 'info',
    },
    {
      name: 'View Reports',
      description: 'Business analytics & insights',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'success',
    },
    {
      name: 'Manage Cards',
      description: 'Booster & Bon Voyage cards',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: 'info',
    },
    {
      name: 'Customer Support',
      description: 'Get help & assistance',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'primary',
    },
  ];

  return (
    <div className="p-6">
      {/* Welcome header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name || 'User'}!
        </h1>
        <p className="mt-2 text-gray-600">
          Here's what's happening with your applications today.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className={`${stat.bgColor} overflow-hidden shadow rounded-lg border border-gray-200`}>
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center ${stat.iconColor}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-600 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-success-600' :
                        stat.changeType === 'negative' ? 'text-error-600' :
                        'text-gray-500'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickActions.map((action) => (
                <button
                  key={action.name}
                  onClick={() => action.url ? window.open(action.url, '_blank', 'noopener,noreferrer') : null}
                  className={`p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-${action.color}-300 hover:bg-${action.color}-50 transition-colors text-left w-full`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-${action.color}-100 text-${action.color}-600 flex items-center justify-center mb-3`}>
                    {action.icon}
                  </div>
                  <h4 className="text-sm font-medium text-gray-900">{action.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{action.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                {recentActivities.map((activity, activityIdx) => (
                  <li key={activity.id}>
                    <div className="relative pb-8">
                      {activityIdx !== recentActivities.length - 1 ? (
                        <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" />
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                            activity.type === 'success' ? 'bg-success-100 text-success-600' :
                            activity.type === 'error' ? 'bg-error-100 text-error-600' :
                            'bg-primary-100 text-primary-600'
                          }`}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">{activity.action}</p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Dashboard Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* Notifications */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                    notification.type === 'urgent' ? 'bg-red-500' :
                    notification.type === 'success' ? 'bg-green-500' :
                    notification.type === 'warning' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                    <p className="text-sm text-gray-500">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Applications */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Top Applications</h3>
          </div>
          <div className="p-6">
            {/* Interactive Bar Chart */}
            <div className="mb-6">
              <div className="h-64">
                <Bar data={topAppsChartData} options={chartOptions} />
              </div>
            </div>
            
            {/* Detailed List */}
            <div className="space-y-3">
              {topApps.map((app, index) => (
                <div key={app.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-medium text-primary-600">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{app.name}</p>
                      <p className="text-xs text-gray-500">{app.users} active users</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{app.usage}</p>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full" 
                        style={{ width: app.usage }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Applications Usage */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">App Usage Distribution</h3>
          </div>
          <div className="p-6">
            <div className="h-64 mb-4">
              <Doughnut data={topAppsDoughnutData} options={doughnutOptions} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Active Users</span>
                <span className="text-primary-600 font-medium">1,217</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Top Performer</span>
                <span className="text-gray-900">LPG Distribution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;