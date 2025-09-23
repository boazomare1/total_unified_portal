import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

/**
 * Analytics page component
 * Comprehensive data visualization for business intelligence
 */
const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedApp, setSelectedApp] = useState('all');

  // Sample data - in real app, this would come from API
  const appUsageData = {
    labels: ['LPG Distribution', 'eFuel Portal', 'Track & Trace', 'Booster Cards', 'EasyGas', 'myLub Portal'],
    datasets: [
      {
        label: 'Daily Active Users',
        data: [342, 298, 234, 187, 156, 134],
        backgroundColor: [
          '#ef4444', // Red
          '#f97316', // Orange
          '#fbbf24', // Yellow
          '#22c55e', // Green
          '#3b82f6', // Blue
          '#8b5cf6', // Purple
        ],
        borderColor: [
          '#dc2626',
          '#ea580c',
          '#f59e0b',
          '#16a34a',
          '#2563eb',
          '#7c3aed',
        ],
        borderWidth: 2,
      },
    ],
  };

  const revenueData = {
    labels: ['Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dec 2024'],
    datasets: [
      {
        label: 'Revenue (KSh Millions)',
        data: [1.8, 2.1, 2.4, 2.7, 3.0, 3.2, 3.5, 3.8, 4.1, 4.4, 4.7, 5.0],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Orders (Thousands)',
        data: [8.5, 9.2, 10.1, 11.3, 12.5, 13.8, 15.2, 16.7, 18.3, 20.1, 22.0, 24.0],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const userGrowthData = {
    labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'],
    datasets: [
      {
        label: 'New Users',
        data: [450, 520, 680, 750, 890, 1247],
        backgroundColor: '#22c55e',
        borderColor: '#16a34a',
        borderWidth: 2,
      },
    ],
  };

  const appPerformanceData = {
    labels: ['LPG Distribution', 'eFuel Portal', 'Track & Trace', 'Booster Cards', 'EasyGas'],
    datasets: [
      {
        label: 'Response Time (ms)',
        data: [120, 180, 95, 220, 150],
        backgroundColor: [
          '#ef4444',
          '#f97316',
          '#22c55e',
          '#3b82f6',
          '#fbbf24',
        ],
      },
    ],
  };

  const categoryDistributionData = {
    labels: ['Fuel & Lubricants', 'Logistics & Tracking', 'Gas & Distribution', 'Retail & Customer', 'Infrastructure'],
    datasets: [
      {
        data: [35, 25, 20, 12, 8],
        backgroundColor: [
          '#ef4444',
          '#f97316',
          '#22c55e',
          '#3b82f6',
          '#8b5cf6',
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        font: {
          size: 16,
          weight: 'bold',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  const kpis = [
    { name: 'Total Revenue', value: 'KSh 45.2M', change: '+18.5%', trend: 'up' },
    { name: 'Active Users', value: '1,247', change: '+12.3%', trend: 'up' },
    { name: 'Orders Today', value: '342', change: '+8.2%', trend: 'up' },
    { name: 'System Uptime', value: '99.9%', change: '+0.1%', trend: 'up' },
  ];

  const topPerformers = [
    { app: 'LPG Distribution', metric: 'Users', value: '342', growth: '+23%' },
    { app: 'eFuel Portal', metric: 'Revenue', value: 'KSh 8.2M', growth: '+15%' },
    { app: 'Track & Trace', metric: 'Sessions', value: '1,890', growth: '+31%' },
    { app: 'Booster Cards', metric: 'Transactions', value: '567', growth: '+12%' },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Insights</h1>
        <p className="mt-2 text-gray-600">
          Comprehensive data visualization and business intelligence dashboard.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700">Period:</label>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">2024</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700">Application:</label>
          <select
            value={selectedApp}
            onChange={(e) => setSelectedApp(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Applications</option>
            <option value="lpg">LPG Distribution</option>
            <option value="efuel">eFuel Portal</option>
            <option value="track">Track & Trace</option>
            <option value="cards">Booster Cards</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi) => (
          <div key={kpi.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{kpi.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
              </div>
              <div className="flex items-center">
                <span className={`text-sm font-medium ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.change}
                </span>
                <svg className={`w-4 h-4 ml-1 ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue & Orders Trend */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue & Orders Trend</h3>
          <div className="h-80">
            <Line data={revenueData} options={chartOptions} />
          </div>
        </div>

        {/* App Usage Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Usage Distribution</h3>
          <div className="h-80">
            <Doughnut data={appUsageData} options={pieOptions} />
          </div>
        </div>
      </div>

      {/* Secondary Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* User Growth */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth Over Time</h3>
          <div className="h-80">
            <Bar data={userGrowthData} options={chartOptions} />
          </div>
        </div>

        {/* App Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Performance</h3>
          <div className="h-80">
            <Bar data={appPerformanceData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Category Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Distribution</h3>
          <div className="h-64">
            <Pie data={categoryDistributionData} options={pieOptions} />
          </div>
        </div>

        {/* Top Performers */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Applications</h3>
          <div className="space-y-4">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-600">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{performer.app}</p>
                    <p className="text-sm text-gray-500">{performer.metric}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{performer.value}</p>
                  <p className="text-sm text-green-600 font-medium">{performer.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;