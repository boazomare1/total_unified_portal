import React from 'react';

/**
 * AppCard component for displaying application cards
 * Used in the Apps page to show available applications
 */
const AppCard = ({ 
  title, 
  description, 
  icon, 
  status = 'active', 
  category, 
  onLaunch, 
  onSettings,
  className = '' 
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-success-100 text-success-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'maintenance':
        return 'bg-warning-100 text-warning-800';
      case 'error':
        return 'bg-error-100 text-error-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'inactive':
        return 'Inactive';
      case 'maintenance':
        return 'Maintenance';
      case 'error':
        return 'Error';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
            {icon || (
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {category && (
              <p className="text-sm text-gray-500">{category}</p>
            )}
          </div>
        </div>
        
        {/* Status badge */}
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 line-clamp-3">
        {description}
      </p>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {onLaunch && (
            <button
              onClick={onLaunch}
              disabled={status !== 'active'}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                status === 'active'
                  ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-sm'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              Launch
            </button>
          )}
          
          {onSettings && (
            <button
              onClick={onSettings}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Settings
            </button>
          )}
        </div>

        {/* Additional info */}
        <div className="text-xs text-gray-400">
          {status === 'active' && 'Ready to use'}
          {status === 'inactive' && 'Not available'}
          {status === 'maintenance' && 'Under maintenance'}
          {status === 'error' && 'Needs attention'}
        </div>
      </div>
    </div>
  );
};

export default AppCard;