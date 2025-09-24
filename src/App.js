import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import PublicLanding from './pages/PublicLanding';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Apps from './pages/Apps';
import Features from './pages/Features';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import DownloadApp from './pages/DownloadApp';
import PWAInstallPrompt from './components/PWAInstallPrompt';

/**
 * Protected Route component
 * Redirects to login if user is not authenticated
 */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

/**
 * Public Route component
 * Redirects to dashboard if user is already authenticated
 */
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return isAuthenticated() ? <Navigate to="/dashboard" replace /> : children;
};

/**
 * Main App component with routing
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* PWA Install Prompt - shows like SportPesa banner */}
          <PWAInstallPrompt />
          
          <Routes>
            {/* Public landing page */}
            <Route 
              path="/" 
              element={<PublicLanding />} 
            />

            {/* Login route - no layout */}
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />

            {/* All other routes with layout */}
            <Route 
              path="/*" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="apps" element={<Apps />} />
              <Route path="features" element={<Features />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="settings" element={<Settings />} />
              <Route path="profile" element={<Profile />} />
              <Route path="download" element={<DownloadApp />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
