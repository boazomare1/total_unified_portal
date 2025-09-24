# TotalEnergies Client Portal

A production-ready React Progressive Web App (PWA) for centralized business application management. This portal provides a unified interface for accessing and managing all your business applications in one place.

## 🚀 Features

### Core Functionality
- **Progressive Web App (PWA)** - Installable on desktop and mobile devices
- **Public Landing Page** - Showcases all 20+ TotalEnergies services to public users
- **Responsive Design** - Works seamlessly across all device sizes
- **Authentication System** - Secure login with OTP verification and context-based state management
- **Centralized Dashboard** - Overview of all applications and system status with metrics
- **Application Management** - Launch and manage business applications
- **Real-time Analytics** - Performance metrics and usage statistics
- **Client/Partner Showcase** - Display of key partners (M-Pesa, KRA, Microsoft, Oracle)

### Technical Features
- **React 18** with modern hooks and context API
- **React Router DOM** for client-side navigation with protected routes
- **Shadcn/ui** - Modern, accessible UI component library
- **TailwindCSS** for responsive styling and theming
- **Lucide React** for consistent iconography
- **Service Worker** for offline functionality
- **PWA Manifest** for app installation
- **ESLint** for code quality and accessibility
- **Modular Architecture** with clean component structure
- **Chart.js Integration** for data visualization

## 🎨 Design & Branding

### TotalEnergies Brand Colors
- **Primary Red**: `#ef4444` - TotalEnergies signature red
- **Info Blue**: `#3b82f6` - Professional blue for data and analytics
- **Success Green**: `#22c55e` - Success states and positive metrics
- **Warning Orange**: `#f97316` - TotalEnergies orange for alerts
- **Secondary Gray**: `#64748b` - Professional dark gray
- **Accent Colors**: Full spectrum of TotalEnergies brand colors

### UI Components
- **Shadcn/ui Components** - Modern, accessible button, card, and form components
- **Custom Logo Integration** - TotalEnergies logo throughout the application
- **Color-coded Application Cards** - Visual distinction for different app types
- **Responsive Navigation** - Mobile-friendly sidebar and navbar
- **Professional Dashboard** - Clean, modern interface with statistics widgets
- **Interactive Elements** - Hover effects and smooth transitions
- **Count Cards** - Dynamic statistics with TotalEnergies brand colors
- **Lock Icons with Tooltips** - Intuitive access control for public users
- **Client Logo Grid** - Professional partner showcase with hover effects

## 📁 Project Structure

```
src/
├── api/
│   └── frappe.js              # Frappe API integration wrappers
├── components/
│   ├── AppCard.js             # Application card component
│   ├── Layout.js              # Main layout wrapper
│   ├── Navbar.js              # Top navigation bar
│   ├── Sidebar.js             # Side navigation menu
│   ├── OTPInput.js            # Modern OTP input with individual boxes
│   ├── Toast.js               # Toast notification component
│   ├── Snackbar.js            # Snackbar notification component
│   └── ui/                    # Shadcn/ui components
│       ├── button.jsx         # Button component
│       └── card.jsx           # Card component
├── context/
│   └── AuthContext.js         # Authentication context provider
├── lib/
│   └── utils.js               # Utility functions for Shadcn/ui
├── pages/
│   ├── Apps.js                # Applications listing page
│   ├── Dashboard.js           # Main dashboard page with metrics
│   ├── Features.js            # Features showcase page
│   ├── Login.js               # Authentication page with OTP
│   ├── PublicLanding.js       # Public landing page with all services
│   ├── Profile.js             # User profile page
│   ├── Settings.js            # Application settings
│   ├── Analytics.js           # Analytics and reporting
│   └── DownloadApp.js         # PWA download instructions
├── App.js                     # Main application component with routing
├── index.js                   # Application entry point
└── serviceWorkerRegistration.js # PWA service worker setup
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/boazomare1/total_unified_portal.git
   cd total_unified_portal
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 🔧 Configuration

### PWA Configuration
The app is configured as a Progressive Web App with:
- **Manifest**: `public/manifest.json` - App metadata and icons
- **Service Worker**: Automatic caching and offline functionality
- **Icons**: Multiple sizes for different platforms (192x192, 512x512)
- **Theme Colors**: TotalEnergies brand colors

### TailwindCSS Configuration
Custom theme configuration in `tailwind.config.js`:
- TotalEnergies brand color palette
- Custom spacing and typography
- Responsive breakpoints
- Component-specific styling

### Authentication
- **Context-based**: Uses React Context API for state management
- **OTP Verification**: Modern OTP input with individual digit boxes
- **Local Storage**: Persistent login sessions
- **Protected Routes**: Automatic redirection based on auth status
- **Public/Private Routes**: Separate routing for authenticated and public users
- **Smart Logout**: Redirects to public landing page after logout

## 📱 PWA Installation

### Desktop Installation
1. Open the app in Chrome/Edge
2. Look for the install button (⬇️) in the address bar
3. Click "Install" to add to desktop
4. The app will open in a standalone window

### Mobile Installation
1. Open the app in Chrome on mobile
2. Look for "Add to Home Screen" prompt
3. Tap "Add" to install
4. The app will appear as a native app icon

### PWA Features
- **Offline Support**: Works without internet connection
- **App-like Experience**: Standalone window, no browser UI
- **Push Notifications**: Ready for implementation
- **Background Sync**: Automatic data synchronization

## 🎯 Usage

### Public Access (Unauthenticated Users)
- **Landing Page**: View all 20+ TotalEnergies services at `/`
- **Service Discovery**: Browse categories (Fuel & Lubricants, Energy Solutions, etc.)
- **Partner Showcase**: View key partners and trust statistics
- **Access Control**: Lock icons indicate login required for app access

### Authentication
- **Demo Credentials**: Use any email and password to login
- **OTP Verification**: Enter 6-digit OTP code in individual boxes
- **Example**: `admin@example.com` / `password123`
- **Session Management**: Automatic login persistence

### Authenticated User Experience
- **Dashboard**: Overview with metrics, charts, and analytics
- **Apps**: Full access to launch and manage applications
- **Features**: Detailed portal capabilities
- **Settings**: Application and user preferences
- **Profile**: User account management
- **Analytics**: Performance metrics and reporting

### Navigation
- **Public Landing**: Accessible to everyone at `/`
- **Protected Routes**: Dashboard, Apps, Settings, Profile, Analytics
- **Smart Routing**: Automatic redirection based on authentication status
- **Sidebar**: Quick navigation between sections for authenticated users

### Application Management
- **Launch Apps**: Click "Launch" on any application card
- **View Details**: Hover over cards for descriptions
- **Filter & Search**: Find applications by category or name
- **Status Monitoring**: Real-time application status

## 🔌 API Integration

### Frappe Integration
The app includes placeholder API wrappers for Frappe integration:
- **Authentication**: User login and session management
- **Data Fetching**: Application data and user information
- **Real-time Updates**: WebSocket connections for live data

### Backend Requirements
- **REST API**: Standard HTTP endpoints
- **Authentication**: JWT or session-based auth
- **CORS**: Proper cross-origin configuration
- **HTTPS**: Required for PWA functionality

## 🚀 Deployment

### Production Deployment
1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Deploy to hosting service**:
   - Vercel, Netlify, or similar
   - Ensure HTTPS is enabled
   - Configure proper headers for PWA

3. **Environment Variables**:
   - Set production API endpoints
   - Configure authentication settings
   - Update manifest URLs

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

### PWA Testing
- **Lighthouse Audit**: Run PWA audit in Chrome DevTools
- **Installation Test**: Verify app installation on different devices
- **Offline Test**: Test functionality without internet connection
- **Performance Test**: Check loading times and responsiveness

### Browser Compatibility
- **Chrome**: Full PWA support
- **Edge**: Full PWA support
- **Firefox**: Basic PWA support
- **Safari**: Limited PWA support

## 📊 Performance

### Optimization Features
- **Code Splitting**: Automatic code splitting with React Router
- **Lazy Loading**: Components loaded on demand
- **Service Worker Caching**: Automatic resource caching
- **Image Optimization**: Optimized logo and icon files
- **Bundle Analysis**: Built-in bundle size analysis

### Performance Metrics
- **First Contentful Paint**: < 2 seconds
- **Largest Contentful Paint**: < 3 seconds
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 4 seconds

## 🔒 Security

### Security Features
- **HTTPS Only**: Required for PWA functionality
- **Content Security Policy**: Configured for security
- **XSS Protection**: Built-in React protections
- **CSRF Protection**: Ready for backend implementation

### Best Practices
- **Environment Variables**: Sensitive data in environment files
- **Input Validation**: Client and server-side validation
- **Authentication**: Secure token-based authentication
- **API Security**: Proper API endpoint protection

## 🤝 Contributing

### Development Guidelines
1. **Code Style**: Follow ESLint configuration
2. **Component Structure**: Use functional components with hooks
3. **Styling**: Use TailwindCSS utility classes
4. **Testing**: Write tests for new features
5. **Documentation**: Update README for significant changes

### Git Workflow
1. **Feature Branches**: Create feature branches for new work
2. **Commit Messages**: Use descriptive commit messages
3. **Pull Requests**: Submit PRs for code review
4. **Code Review**: Review all changes before merging

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

### Common Issues
- **Installation Problems**: Use `--legacy-peer-deps` flag
- **PWA Not Installing**: Ensure HTTPS in production
- **Styling Issues**: Check TailwindCSS configuration
- **Authentication**: Verify context provider setup

### Getting Help
- **Documentation**: Check this README and code comments
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions
- **Email**: Contact the development team

## 🎉 Acknowledgments

- **TotalEnergies**: For brand guidelines and logo
- **React Team**: For the excellent framework
- **TailwindCSS**: For the utility-first CSS framework
- **Create React App**: For the PWA template and tooling

---

**Built with ❤️ for TotalEnergies Client Portal**

## 🆕 Recent Updates

### Version 2.0 Features (January 2025)
- ✅ **Shadcn/ui Integration** - Modern, accessible UI components
- ✅ **Public Landing Page** - Comprehensive service showcase for public users
- ✅ **OTP Authentication** - Modern 6-digit OTP input with individual boxes
- ✅ **Enhanced Routing** - Proper public/private route separation
- ✅ **Client Showcase** - Partner logos (M-Pesa, KRA, Microsoft, Oracle)
- ✅ **TotalEnergies Branding** - Complete brand color integration
- ✅ **Improved UX** - Lock icons with tooltips, count cards, animations
- ✅ **Smart Logout** - Redirects to public landing instead of login

### Technical Improvements
- ✅ **Component Architecture** - Modular Shadcn/ui components
- ✅ **Performance** - Optimized routing and state management
- ✅ **Accessibility** - WCAG compliant components
- ✅ **Mobile Optimization** - Enhanced responsive design

*Last updated: January 2025*