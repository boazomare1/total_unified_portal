import React, { useState, useEffect } from 'react';

/**
 * PWA Install Prompt Component
 * Shows a banner to encourage users to install the app
 * Similar to SportPesa's download banner
 */
const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(true); // Show by default
  const [isInstalled, setIsInstalled] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user previously dismissed the prompt
    const dismissedTime = localStorage.getItem('pwa-install-dismissed');
    if (dismissedTime && Date.now() - parseInt(dismissedTime) < 24 * 60 * 60 * 1000) {
      setDismissed(true);
      setShowInstallPrompt(false);
      return;
    }

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      return;
    }

    // Force engagement tracking for PWA criteria
    const startTime = Date.now();
    const trackEngagement = () => {
      const engagementTime = Date.now() - startTime;
      localStorage.setItem('pwa-engagement-time', engagementTime.toString());
    };

    // Track user interactions
    const events = ['click', 'scroll', 'keydown', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, trackEngagement, { once: false });
    });

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if already installed
    if (window.navigator.standalone === true) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      // Cleanup engagement tracking
      events.forEach(event => {
        document.removeEventListener(event, trackEngagement);
      });
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      
      // Clear the deferredPrompt
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    } else {
      // Fallback: Try to trigger manual installation
      console.log('No deferredPrompt available, trying manual installation...');
      
      // Check if the app is already installable
      if (window.matchMedia('(display-mode: standalone)').matches) {
        alert('This app is already installed!');
        return;
      }
      
      // Try to trigger the browser's native install prompt
      // This might work in some browsers even without beforeinstallprompt
      try {
        // Create a temporary link to trigger install
        const link = document.createElement('a');
        link.href = window.location.href;
        link.rel = 'manifest';
        document.head.appendChild(link);
        document.head.removeChild(link);
        
        // Show detailed installation instructions
        const instructions = `
📱 INSTALL TOTALENERGIES PORTAL

IMPORTANT: Use "Add to Home screen" for proper PWA installation!

Mobile (Chrome):
• Tap 3-dot menu (⋮) → "Add to Home screen"
• This creates a REAL app, not a shortcut

Desktop (Chrome/Edge):
• Click 3-dot menu (⋮) → "Install TotalEnergies Portal"
• Or look for ⊕ install icon in address bar

After installation, you'll get a standalone app with no browser UI!
        `;
        alert(instructions);
      } catch (error) {
        console.log('Install fallback failed:', error);
        alert('To install this app:\n\n1. Look for the install icon in your browser\'s address bar (⭣ or ⊕)\n2. Or use your browser\'s menu to "Install app"\n3. Or add to home screen on mobile\n\nThis app is PWA-ready and can be installed!');
      }
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    // Store dismissal in localStorage to avoid showing again for a while
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  // Don't show if already installed, dismissed recently, or dismissed
  if (isInstalled || !showInstallPrompt || dismissed) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left side - Logo and text */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleDismiss}
            className="text-white opacity-75 hover:opacity-100 transition-opacity"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            src="/logo.png" 
            alt="TotalEnergies Logo" 
            className="w-8 h-8 object-contain"
          />
          
          <div className="flex flex-col">
            <span className="font-semibold text-white">TotalEnergies Portal</span>
            <span className="text-sm text-blue-100">Easier, faster, and saves on your data bundle</span>
          </div>
        </div>

        {/* Right side - Install button */}
        <button
          onClick={handleInstallClick}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-blue-50 shadow-md"
        >
          INSTALL
        </button>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;