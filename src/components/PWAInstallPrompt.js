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
    if (window.matchMedia('(display-mode: standalone)').matches || 
        window.navigator.standalone === true) {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      return;
    }

    // Enhanced engagement tracking for PWA criteria
    const startTime = Date.now();
    let interactionCount = 0;
    const minInteractions = 3; // Minimum interactions for PWA criteria
    const minEngagementTime = 30000; // 30 seconds minimum engagement

    const trackEngagement = () => {
      interactionCount++;
      const engagementTime = Date.now() - startTime;
      localStorage.setItem('pwa-engagement-time', engagementTime.toString());
      localStorage.setItem('pwa-interaction-count', interactionCount.toString());
      
      // Show install prompt after sufficient engagement
      if (interactionCount >= minInteractions && engagementTime >= minEngagementTime) {
        setShowInstallPrompt(true);
      }
    };

    // Track user interactions
    const events = ['click', 'scroll', 'keydown', 'touchstart', 'mousemove'];
    events.forEach(event => {
      document.addEventListener(event, trackEngagement, { once: false, passive: true });
    });

    // Show prompt after 5 seconds regardless
    const timer = setTimeout(() => {
      setShowInstallPrompt(true);
    }, 5000);

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
      clearTimeout(timer);
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
        setShowInstallPrompt(false);
      } else {
        console.log('User dismissed the install prompt');
      }
      
      // Clear the deferredPrompt
      setDeferredPrompt(null);
    } else {
      // Enhanced fallback for mobile installation
      console.log('No deferredPrompt available, showing installation guide...');
      
      // Check if the app is already installed
      if (window.matchMedia('(display-mode: standalone)').matches || 
          window.navigator.standalone === true) {
        alert('✅ This app is already installed!');
        return;
      }
      
      // Detect device and browser
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      const isChrome = /Chrome/i.test(navigator.userAgent);
      
      let instructions = '';
      
      if (isMobile) {
        if (isAndroid && isChrome) {
          instructions = `
📱 INSTALL ON ANDROID:

✅ This is a TRUE PWA - it will work like a real app!

Method 1: Look for install icon
• Look for the install icon (⭣ or ⊕) in your address bar
• Tap it to install the app

Method 2: Browser menu
• Tap the 3-dot menu (⋮) in Chrome
• Look for "Install app" or "Add to Home screen"
• Tap it to install

Method 3: Manual add
• Tap the 3-dot menu (⋮) → "Add to Home screen"
• Tap "Add" to confirm

Once installed, you'll get a REAL app icon on your home screen that opens without the browser!
          `;
        } else if (isIOS) {
          instructions = `
📱 INSTALL ON iOS:

✅ This is a TRUE PWA - it will work like a real app!

Method 1: Safari Share menu
• Tap the Share button (□↗) at the bottom
• Scroll down and tap "Add to Home Screen"
• Tap "Add" in the top right

Method 2: Chrome (if using)
• Tap the 3-dot menu (⋮)
• Look for "Add to Home screen"
• Tap it to install

Once installed, you'll get a REAL app icon on your home screen that opens without the browser!
          `;
        } else {
          instructions = `
📱 INSTALL ON MOBILE:

✅ This is a TRUE PWA - it will work like a real app!

• Look for an install icon in your browser's address bar
• Or use your browser's menu to find "Add to Home screen" or "Install app"
• Once installed, you'll get a REAL app icon on your home screen!

This creates a true standalone app experience!
          `;
        }
      } else {
        instructions = `
💻 INSTALL ON DESKTOP:

✅ This is a TRUE PWA - it will work like a real app!

Chrome/Edge:
• Look for the install icon (⭣ or ⊕) in the address bar
• Or click the 3-dot menu (⋮) → "Install TotalEnergies Portal"
• This creates a standalone desktop app with no browser UI!

Firefox:
• Click the 3-dot menu (⋮) → "Install"
• Or look for install icon in address bar

Once installed, it appears in your Start Menu/Applications like any other app!
        `;
      }
      
      // Show instructions in a more user-friendly way
      // eslint-disable-next-line no-restricted-globals
      const userConfirmed = confirm(instructions + '\n\nClick OK to continue, or Cancel to dismiss this message.');
      
      if (userConfirmed) {
        // Try to trigger the browser's native install behavior
        try {
          // Force a page refresh to trigger PWA detection
          if (isMobile) {
            // On mobile, we can't programmatically trigger install
            // But we can guide the user
            console.log('Mobile PWA installation requires user action');
          } else {
            // On desktop, try to trigger install
            window.location.reload();
          }
        } catch (error) {
          console.log('Install fallback failed:', error);
        }
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