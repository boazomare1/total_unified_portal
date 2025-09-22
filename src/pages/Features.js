import React from 'react';

/**
 * Features page component
 * Marketing page showcasing the platform's capabilities and benefits
 */
const Features = () => {
  const features = [
    {
      title: 'Centralized Management',
      description: 'Manage all your business applications from a single, unified dashboard. No more switching between different systems.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'primary',
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with Frappe/ERPNext and other business systems through our robust API infrastructure.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      color: 'success',
    },
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights into your business performance with comprehensive analytics and reporting tools.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'warning',
    },
    {
      title: 'Mobile Responsive',
      description: 'Access your applications anywhere, anytime with our fully responsive design that works on all devices.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'error',
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with role-based access control, data encryption, and compliance with industry standards.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 14.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'primary',
    },
    {
      title: '24/7 Support',
      description: 'Get help when you need it with our dedicated support team available around the clock.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      color: 'success',
    },
  ];

  const benefits = [
    {
      title: 'Increased Productivity',
      description: 'Reduce time spent switching between applications by up to 40%',
      metric: '40%',
    },
    {
      title: 'Cost Savings',
      description: 'Consolidate multiple subscriptions into one unified platform',
      metric: '60%',
    },
    {
      title: 'Better Insights',
      description: 'Make data-driven decisions with comprehensive analytics',
      metric: '85%',
    },
    {
      title: 'User Satisfaction',
      description: 'Improve user experience with intuitive design',
      metric: '95%',
    },
  ];

  return (
    <div className="p-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Unified Client Portal
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Streamline your business operations with our comprehensive platform that brings all your applications together in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            Get Started
          </button>
          <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 bg-${feature.color}-100 text-${feature.color}-600 rounded-lg flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Proven Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {benefit.metric}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of businesses already using our platform to streamline their operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2 text-gray-600">
              <li><button className="hover:text-primary-600 text-left">Features</button></li>
              <li><button className="hover:text-primary-600 text-left">Pricing</button></li>
              <li><button className="hover:text-primary-600 text-left">Integrations</button></li>
              <li><button className="hover:text-primary-600 text-left">API</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><button className="hover:text-primary-600 text-left">About</button></li>
              <li><button className="hover:text-primary-600 text-left">Blog</button></li>
              <li><button className="hover:text-primary-600 text-left">Careers</button></li>
              <li><button className="hover:text-primary-600 text-left">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li><button className="hover:text-primary-600 text-left">Help Center</button></li>
              <li><button className="hover:text-primary-600 text-left">Documentation</button></li>
              <li><button className="hover:text-primary-600 text-left">Status</button></li>
              <li><button className="hover:text-primary-600 text-left">Community</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li><button className="hover:text-primary-600 text-left">Privacy</button></li>
              <li><button className="hover:text-primary-600 text-left">Terms</button></li>
              <li><button className="hover:text-primary-600 text-left">Security</button></li>
              <li><button className="hover:text-primary-600 text-left">Compliance</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p>&copy; 2024 Unified Portal. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;