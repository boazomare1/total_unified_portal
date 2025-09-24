import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Profile page component
 * Displays user profile information and settings
 */
const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    department: user?.role === 'admin' ? 'IT Administration' : 'Operations',
    location: 'Paris, France',
    joinDate: 'January 2024',
    lastLogin: user?.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Today',
    avatar: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // In a real app, this would save to the backend
    console.log('Saving profile:', profileData);
    setIsEditing(false);
    // Show success message
  };

  const handleCancel = () => {
    setProfileData({
      name: user?.name || '',
      email: user?.email || '',
      phone: '+1 (555) 123-4567',
      department: user?.role === 'admin' ? 'IT Administration' : 'Operations',
      location: 'Paris, France',
      joinDate: 'January 2024',
      lastLogin: user?.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Today',
      avatar: null
    });
    setIsEditing(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {profileData.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                </div>
                <div className="ml-6">
                  <h1 className="text-3xl font-bold text-gray-900">{profileData.name}</h1>
                  <p className="text-lg text-gray-600">{profileData.email}</p>
                  <div className="flex items-center mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user?.role === 'admin' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {user?.role === 'admin' ? 'Administrator' : 'User'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex space-x-3">
                    <button
                      onClick={handleCancel}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save Changes
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
              </div>
              <div className="px-6 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={profileData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    {isEditing ? (
                      <select
                        name="department"
                        value={profileData.department}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="IT Administration">IT Administration</option>
                        <option value="Operations">Operations</option>
                        <option value="Finance">Finance</option>
                        <option value="HR">Human Resources</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    ) : (
                      <p className="text-gray-900">{profileData.department}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="location"
                        value={profileData.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.location}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Join Date
                    </label>
                    <p className="text-gray-900">{profileData.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white shadow rounded-lg mt-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
              </div>
              <div className="px-6 py-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Password</h3>
                      <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                      Change Password
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-500">Add an extra layer of security</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                      Enable 2FA
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Login Sessions</h3>
                      <p className="text-sm text-gray-500">Manage your active sessions</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                      View Sessions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Account Stats */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Account Stats</h2>
              </div>
              <div className="px-6 py-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Last Login</span>
                    <span className="text-sm font-medium text-gray-900">{profileData.lastLogin}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Account Status</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Total Logins</span>
                    <span className="text-sm font-medium text-gray-900">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Apps Accessed</span>
                    <span className="text-sm font-medium text-gray-900">12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
              </div>
              <div className="px-6 py-6">
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    Download My Data
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    Export Activity Log
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    Privacy Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                    Notification Preferences
                  </button>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white shadow rounded-lg border border-red-200">
              <div className="px-6 py-4 border-b border-red-200">
                <h2 className="text-lg font-medium text-red-900">Danger Zone</h2>
              </div>
              <div className="px-6 py-6">
                <div className="space-y-3">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50 rounded-md"
                  >
                    Sign Out
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50 rounded-md">
                    Deactivate Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;