import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Check localStorage for existing session
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Role-based user data
  const getUserDataByRole = (email, role) => {
    const baseUser = {
      id: role === 'admin' ? '1' : '2',
      email: email,
      name: role === 'admin' ? 'John Doe (Admin)' : 'Jane Smith (User)',
      role: role,
      avatar: null,
      lastLogin: new Date().toISOString(),
      permissions: getPermissionsByRole(role),
    };
    
    return baseUser;
  };

  // Define permissions by role
  const getPermissionsByRole = (role) => {
    const permissions = {
      admin: {
        canViewAnalytics: true,
        canManageUsers: true,
        canAccessSettings: true,
        canViewSystemStats: true,
        canManageApplications: true,
        canAccessAllApps: true,
        canViewReports: true,
        canManageSystem: true,
      },
      user: {
        canViewAnalytics: false,
        canManageUsers: false,
        canAccessSettings: false,
        canViewSystemStats: false,
        canManageApplications: false,
        canAccessAllApps: true,
        canViewReports: false,
        canManageSystem: false,
      },
    };
    
    return permissions[role] || permissions.user;
  };

  // Placeholder login function with role selection
  const login = async (email, password) => {
    try {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Placeholder validation - in production, this would call your API
      if (email && password) {
        // Check for valid credentials
        const validCredentials = {
          'admin@totalenergies.com': { password: 'admin123', role: 'admin' },
          'user@totalenergies.com': { password: 'user123', role: 'user' },
        };
        
        const credential = validCredentials[email.toLowerCase()];
        
        if (!credential) {
          return { 
            success: false, 
            error: '❌ Authentication Failed: Email not found. Please check your email address.' 
          };
        }
        
        if (credential.password !== password) {
          return { 
            success: false, 
            error: '❌ Authentication Failed: Incorrect password. Please check your password.' 
          };
        }
        
        const userData = getUserDataByRole(email, credential.role);
        
        // Don't set user yet - need OTP verification first
        return { 
          success: true, 
          user: userData, 
          requiresOTP: true,
          message: 'Please enter the OTP sent to your registered mobile number'
        };
      } else {
        return { 
          success: false, 
          error: 'Please enter both email and password' 
        };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // OTP verification function
  const verifyOTP = async (otp, userData) => {
    try {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo OTP validation - in production, this would verify with your backend
      const validOTP = '123456'; // Demo OTP
      
      if (otp === validOTP) {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return { success: true, user: userData };
      } else {
        return { 
          success: false, 
          error: '❌ OTP Verification Failed: Incorrect code. Please enter the correct 6-digit OTP.' 
        };
      }
    } catch (error) {
      console.error('OTP verification error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Placeholder logout function
  const logout = async () => {
    try {
      setLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser(null);
      localStorage.removeItem('user');
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  // Get user role
  const getUserRole = () => {
    return user?.role || null;
  };

  // Check if user has specific permission
  const hasPermission = (permission) => {
    return user?.permissions?.[permission] || false;
  };

  // Check if user is admin
  const isAdmin = () => {
    return user?.role === 'admin';
  };

  // Check if user is regular user
  const isRegularUser = () => {
    return user?.role === 'user';
  };

  const value = {
    user,
    loading,
    login,
    verifyOTP,
    logout,
    isAuthenticated,
    getUserRole,
    hasPermission,
    isAdmin,
    isRegularUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;