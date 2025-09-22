import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

/**
 * Layout component that wraps all pages with common UI elements
 * Provides responsive layout with navbar and sidebar
 */
const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />
      
      <div className="flex">
        {/* Sidebar - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block lg:w-64 lg:fixed lg:top-16 lg:left-0 lg:h-screen lg:bg-white lg:border-r lg:border-gray-200">
          <Sidebar />
        </div>
        
        {/* Main content area */}
        <main className="flex-1 lg:ml-64">
          <div className="pt-16">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;