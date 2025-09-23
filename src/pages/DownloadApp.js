import React from 'react';

const DownloadApp = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Download TotalEnergies Portal
          </h1>
          <p className="text-xl text-gray-600">
            Get the mobile app for the best experience
          </p>
        </div>

        {/* Download Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Android */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.6818 12 7.6818s-3.5902.5621-5.1367 1.6649L4.841 5.8437a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1195-9.4396"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Android App</h3>
              <p className="text-gray-600 mb-6">
                Download the Android APK for a native app experience
              </p>
              
              {/* Download Button */}
              <button 
                onClick={() => {
                  // For now, show instructions since we can't build APK locally
                  alert(`Android App Download Instructions:

1. The app is built with Capacitor and ready for Android
2. To get the APK, you need Android Studio installed
3. Run: npx cap open android
4. Build the APK in Android Studio
5. Or use: npx cap run android (if you have a device connected)

The app will work as a true native Android app once built!`);
                }}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Download APK
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                Requires Android 5.0+ (API level 22+)
              </p>
            </div>
          </div>

          {/* iOS */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">iOS App</h3>
              <p className="text-gray-600 mb-6">
                Build for iOS using Xcode (Mac required)
              </p>
              
              <button 
                onClick={() => {
                  alert(`iOS App Build Instructions:

1. Install Xcode on Mac
2. Run: npx cap add ios
3. Run: npx cap open ios
4. Build and run in Xcode
5. Or submit to App Store

The app will work as a true native iOS app!`);
                }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Build for iOS
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                Requires iOS 12.0+ and Xcode
              </p>
            </div>
          </div>
        </div>

        {/* Alternative: PWA */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Alternative: Progressive Web App (PWA)
            </h3>
            <p className="text-blue-800 mb-6">
              For now, you can use the web app as a PWA. While it won't be a true native app, 
              it provides a good mobile experience.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Android Chrome:</h4>
                <p className="text-sm text-gray-600">
                  Tap the 3-dot menu → "Add to Home screen" or look for install icon in address bar
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">iOS Safari:</h4>
                <p className="text-sm text-gray-600">
                  Tap Share button → "Add to Home Screen"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Details</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>Framework:</strong> React + Capacitor<br/>
              <strong>Platform:</strong> Cross-platform (Android/iOS)<br/>
              <strong>Build Tool:</strong> Capacitor CLI
            </div>
            <div>
              <strong>Status:</strong> Ready for native build<br/>
              <strong>Requirements:</strong> Android Studio / Xcode<br/>
              <strong>Size:</strong> ~15MB (estimated)
            </div>
          </div>
        </div>

        {/* Back to App */}
        <div className="text-center mt-8">
          <a 
            href="/dashboard" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            ← Back to App
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;