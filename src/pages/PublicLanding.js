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
  Shield
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Gateway to 
            <span className="text-primary"> Digital Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Access and manage all your TotalEnergies business applications from one unified platform. 
            Streamline operations, track deliveries, and optimize your business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stats.totalServices}</div>
              <div className="text-gray-600">Digital Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stats.activeServices}</div>
              <div className="text-gray-600">Active Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stats.categories}</div>
              <div className="text-gray-600">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stats.users}</div>
              <div className="text-gray-600">Active Users</div>
            </div>
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
            {filteredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-green-600 font-medium">{service.status}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Link to="/login">
                      <Button className="w-full" variant="outline">
                        Sign in to Access
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/logo.png" alt="TotalEnergies" className="w-8 h-8" />
                <span className="text-xl font-bold">TotalEnergies</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in digital transformation and energy solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Fuel & Lubricants</li>
                <li>Logistics & Tracking</li>
                <li>Gas & Distribution</li>
                <li>Retail Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Contact Support</li>
                <li>System Status</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TotalEnergies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLanding;