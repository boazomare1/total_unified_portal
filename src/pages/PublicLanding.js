import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { 
  Zap, 
  Truck, 
  Fuel, 
  Building2, 
  ShoppingCart, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Shield,
  Lock
} from 'lucide-react';

/**
 * Public Landing Page Component
 * Showcases TotalEnergies services without requiring authentication
 */
const PublicLanding = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // Fuel & Lubricants
    {
      id: 1,
      title: 'eStar Portal',
      description: 'Fuels/reseller/customer portal with SAP integration, online payments, and user management capabilities.',
      category: 'Fuel & Lubricants',
      status: 'Available',
      icon: <Zap className="w-6 h-6" />,
      features: ['SAP Integration', 'Online Payments', 'User Management']
    },
    {
      id: 2,
      title: 'eFuel',
      description: 'Order & delivery placement system, expanding to bitumen/aviation with safety sheets and plant pickups.',
      category: 'Fuel & Lubricants',
      status: 'Available',
      icon: <Fuel className="w-6 h-6" />,
      features: ['Order Management', 'Delivery Tracking', 'Safety Sheets']
    },
    {
      id: 3,
      title: 'JamboFuels (JDFS)',
      description: 'Fuel delivery system with loss management and truck scheduling capabilities.',
      category: 'Fuel & Lubricants',
      status: 'Available',
      icon: <Truck className="w-6 h-6" />,
      features: ['Loss Management', 'Truck Scheduling', 'Real-time Tracking']
    },
    // Logistics & Tracking
    {
      id: 4,
      title: 'Track & Trace',
      description: 'Shipment scheduling and fleet management system with SAP integration.',
      category: 'Logistics & Tracking',
      status: 'Available',
      icon: <Globe className="w-6 h-6" />,
      features: ['Fleet Management', 'SAP Integration', 'Real-time Updates']
    },
    {
      id: 5,
      title: 'Follow My Order (FMO)',
      description: 'Real-time delivery tracking with SMS and WhatsApp notifications.',
      category: 'Logistics & Tracking',
      status: 'Available',
      icon: <Truck className="w-6 h-6" />,
      features: ['Real-time Tracking', 'SMS Notifications', 'WhatsApp Alerts']
    },
    // Gas & Distribution
    {
      id: 6,
      title: 'EasyGas',
      description: 'LPG cylinder ordering app with M-Pesa integration exploration.',
      category: 'Gas & Distribution',
      status: 'Available',
      icon: <Fuel className="w-6 h-6" />,
      features: ['LPG Ordering', 'M-Pesa Integration', 'Mobile App']
    },
    {
      id: 7,
      title: 'DigitalDMS',
      description: 'LPG distribution management system for streamlined operations.',
      category: 'Gas & Distribution',
      status: 'Available',
      icon: <Building2 className="w-6 h-6" />,
      features: ['Distribution Management', 'Streamlined Operations', 'Analytics']
    },
    // Retail & Customer Engagement
    {
      id: 8,
      title: 'Booster Card App',
      description: 'Prepaid fuel card ordering and approval system.',
      category: 'Retail & Customer Engagement',
      status: 'Available',
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ['Prepaid Cards', 'Order Management', 'Approval System']
    },
    {
      id: 9,
      title: 'Scratch & Win Promo',
      description: 'Promotions and incentives platform for customer engagement.',
      category: 'Retail & Customer Engagement',
      status: 'Available',
      icon: <Star className="w-6 h-6" />,
      features: ['Promotions', 'Customer Engagement', 'Rewards System']
    },
    // Infrastructure / Backoffice
    {
      id: 10,
      title: 'PetroWeb',
      description: 'Cloud stock management system with material balance capabilities.',
      category: 'Infrastructure / Backoffice',
      status: 'Available',
      icon: <BarChart3 className="w-6 h-6" />,
      features: ['Cloud Management', 'Stock Tracking', 'Material Balance']
    },
    {
      id: 11,
      title: 'DocOnline',
      description: 'Customer document extranet for secure document sharing.',
      category: 'Infrastructure / Backoffice',
      status: 'Available',
      icon: <BarChart3 className="w-6 h-6" />,
      features: ['Document Sharing', 'Secure Access', 'Customer Portal']
    },
    {
      id: 12,
      title: 'Safe to Load',
      description: 'Truck validation safety tool for secure loading operations.',
      category: 'Infrastructure / Backoffice',
      status: 'Available',
      icon: <Shield className="w-6 h-6" />,
      features: ['Truck Validation', 'Safety Checks', 'Loading Operations']
    },
    {
      id: 13,
      title: 'Fusion Server',
      description: 'Automation server with POS and dispenser integration capabilities.',
      category: 'Infrastructure / Backoffice',
      status: 'Available',
      icon: <Building2 className="w-6 h-6" />,
      features: ['POS Integration', 'Dispenser Management', 'Automation']
    },
    {
      id: 14,
      title: 'DOMS Forecourt Automation',
      description: 'POS and forecourt equipment management system.',
      category: 'Infrastructure / Backoffice',
      status: 'Available',
      icon: <Building2 className="w-6 h-6" />,
      features: ['Forecourt Management', 'Equipment Control', 'POS Systems']
    },
    {
      id: 15,
      title: 'Oasis',
      description: 'Shop digitalization platform with KRA integration.',
      category: 'Infrastructure / Backoffice',
      status: 'Available',
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ['Shop Digitalization', 'KRA Integration', 'Retail Management']
    },
    {
      id: 16,
      title: 'Tems+',
      description: 'Card invoices digitalization system with KRA compliance.',
      category: 'Infrastructure / Backoffice',
      status: 'Available',
      icon: <BarChart3 className="w-6 h-6" />,
      features: ['Invoice Digitalization', 'KRA Compliance', 'Card Management']
    },
    {
      id: 17,
      title: 'eTIMS',
      description: 'Electronic tax invoice management system for KRA compliance.',
      category: 'Infrastructure / Backoffice',
      status: 'Available',
      icon: <BarChart3 className="w-6 h-6" />,
      features: ['Tax Management', 'KRA Compliance', 'Electronic Invoicing']
    }
  ];

  const categories = ['all', 'Fuel & Lubricants', 'Logistics & Tracking', 'Gas & Distribution', 'Retail & Customer Engagement', 'Infrastructure / Backoffice'];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const stats = {
    totalServices: services.length,
    activeServices: services.filter(s => s.status === 'Available').length,
    categories: categories.length - 1,
    users: '10,000+'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="TotalEnergies" className="w-10 h-10" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">TotalEnergies</h1>
                <p className="text-sm text-gray-600">Client Portal</p>
              </div>
            </div>
            <Link to="/login">
              <Button className="bg-primary hover:bg-primary/90">
                Sign In
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-primary-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Gateway to 
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"> Digital Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Access and manage all your TotalEnergies business applications from one unified platform. 
              Streamline operations, track deliveries, and optimize your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/login">
                <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Services Card */}
            <Card className="bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stats.totalServices}</div>
                <div className="text-white/90 font-medium">Digital Services</div>
              </CardContent>
            </Card>

            {/* Active Services Card */}
            <Card className="bg-gradient-to-br from-success-500 to-success-600 hover:from-success-600 hover:to-success-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stats.activeServices}</div>
                <div className="text-white/90 font-medium">Active Services</div>
              </CardContent>
            </Card>

            {/* Categories Card */}
            <Card className="bg-gradient-to-br from-info-500 to-info-600 hover:from-info-600 hover:to-info-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stats.categories}</div>
                <div className="text-white/90 font-medium">Service Categories</div>
              </CardContent>
            </Card>

            {/* Users Card */}
            <Card className="bg-gradient-to-br from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stats.users}</div>
                <div className="text-white/90 font-medium">Active Users</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Digital Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive suite of business applications designed to streamline 
              your operations and enhance productivity.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category === 'all' ? 'All Services' : category}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl text-primary-600 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-2">
                        <CheckCircle className="w-4 h-4 text-success-500" />
                        <span className="text-sm text-success-600 font-semibold">{service.status}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs rounded-full font-medium hover:from-primary-100 hover:to-primary-200 hover:text-primary-700 transition-all duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex justify-center">
                      <Link to="/login" className="group/lock">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-primary-100 hover:to-primary-200 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-pointer">
                            <Lock className="w-5 h-5 text-gray-600 group-hover/lock:text-primary-600 transition-colors duration-300" />
                          </div>
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover/lock:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                            Sign in to Access
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose TotalEnergies Portal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of business application management with our cutting-edge platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with multi-factor authentication and encrypted data transmission.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unified Access</h3>
              <p className="text-gray-600">
                Access all your business applications from one centralized, user-friendly dashboard.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">
                Monitor performance, track usage, and gain insights with comprehensive analytics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using TotalEnergies digital solutions.
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-50">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Clients/Partners Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of businesses already using TotalEnergies digital solutions
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
            {/* M-Pesa Logo */}
            <div className="flex justify-center items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="/M-PESA_LOGO-01.svg.png" 
                alt="M-Pesa" 
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* KRA Logo */}
            <div className="flex justify-center items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="/KRA_Logo.png" 
                alt="Kenya Revenue Authority" 
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Microsoft Logo */}
            <div className="flex justify-center items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" 
                alt="Microsoft" 
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Oracle Logo */}
            <div className="flex justify-center items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png" 
                alt="Oracle" 
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Active Clients</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-success-600 mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-info-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/logo.png" alt="TotalEnergies" className="w-8 h-8" />
              <span className="text-lg font-bold">TotalEnergies</span>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2025 TotalEnergies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLanding;