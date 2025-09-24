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
            {/* Public landing page - only for non-authenticated users */}
            <Route 
              path="/" 
              element={
                <PublicRoute>
                  <PublicLanding />
                </PublicRoute>
              } 
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

            {/* Dashboard route */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
            </Route>

            {/* Protected routes with layout */}
            <Route 
              path="/apps" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Apps />} />
            </Route>

            <Route 
              path="/features" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Features />} />
            </Route>

            <Route 
              path="/analytics" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Analytics />} />
            </Route>

            <Route 
              path="/settings" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Settings />} />
            </Route>

            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Profile />} />
            </Route>

            <Route 
              path="/download" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DownloadApp />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
