import React from 'react';
import { useAuth } from '../context/AuthContext';

/**
 * User Dashboard - Simplified view for regular users
 * Focused on app access and personal usage
 */
const UserDashboard = () => {
  const { user } = useAuth();

  const userStats = [
    {
      name: 'My Active Sessions',
      value: '3',
      change: '+1',
      changeType: 'positive',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'My Orders Today',
      value: '2',
      change: '+1',
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
      name: 'My Cards',
      value: '4',
      change: '0',
      changeType: 'neutral',
      bgColor: 'bg-info-50',
      iconColor: 'text-info-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      name: 'My Balance',
      value: 'KSh 15,000',
      change: '-2,500',
      changeType: 'negative',
      bgColor: 'bg-warning-50',
      iconColor: 'text-warning-600',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
    },
  ];

  const myRecentActivity = [
    {
      id: 1,
      action: 'Placed fuel order - Order #12345',
      time: '2 hours ago',
      type: 'success',
      status: 'Processing',
    },
    {
      id: 2,
      action: 'LPG delivery completed',
      time: '1 day ago',
      type: 'success',
      status: 'Delivered',
    },
    {
      id: 3,
      action: 'Booster card topped up',
      time: '2 days ago',
      type: 'info',
      status: 'Completed',
    },
    {
      id: 4,
      action: 'Payment made - KSh 8,500',
      time: '3 days ago',
      type: 'success',
      status: 'Paid',
    },
  ];

  const myQuickActions = [
    {
      name: 'Order Fuel',
      description: 'Place a new fuel order',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'primary',
      action: 'fuel-order',
    },
    {
      name: 'Order LPG',
      description: 'Order LPG cylinders',
      url: 'https://totalapp.techsavanna.co.ke/',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'success',
    },
    {
      name: 'Check Balance',
      description: 'View card balances',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'info',
    },
    {
      name: 'Track Delivery',
      description: 'Track your orders',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      color: 'warning',
    },
  ];

  const myFavorites = [
    { name: 'LPG Distribution', usage: '89%', lastUsed: '2 hours ago' },
    { name: 'eFuel Portal', usage: '76%', lastUsed: '1 day ago' },
    { name: 'Booster Cards', usage: '54%', lastUsed: '3 days ago' },
  ];

  const handleQuickAction = (action) => {
    if (action.url) {
      window.open(action.url, '_blank', 'noopener,noreferrer');
    } else {
      console.log(`User action: ${action.action || action.name}`);
      // In real app, this would trigger specific user actions
    }
  };

  return (
    <div className="p-6">
      {/* Welcome header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name?.split(' ')[0] || 'User'}!
        </h1>
        <p className="mt-2 text-gray-600">
          Here's your personal dashboard and quick access to your applications.
        </p>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {userStats.map((stat) => (
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* My Quick Actions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">My Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {myQuickActions.map((action) => (
                <button
                  key={action.name}
                  onClick={() => handleQuickAction(action)}
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

        {/* My Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">My Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                {myRecentActivity.map((activity, activityIdx) => (
                  <li key={activity.id}>
                    <div className="relative pb-8">
                      {activityIdx !== myRecentActivity.length - 1 ? (
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
                            <p className="text-xs text-gray-400 mt-1">{activity.status}</p>
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

        {/* My Favorite Apps */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">My Favorite Apps</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {myFavorites.map((app, index) => (
                <div key={app.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-medium text-primary-600">★</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{app.name}</p>
                      <p className="text-xs text-gray-500">Last used: {app.lastUsed}</p>
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
      </div>
    </div>
  );
};

export default UserDashboard;