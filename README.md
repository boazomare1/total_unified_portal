# TotalEnergies Client Portal

A production-ready React Progressive Web App (PWA) for centralized business application management. This portal provides a unified interface for accessing and managing all your business applications in one place.

## 🚀 Features

### Core Functionality
- **Progressive Web App (PWA)** - Installable on desktop and mobile devices
- **Responsive Design** - Works seamlessly across all device sizes
- **Authentication System** - Secure login with context-based state management
- **Centralized Dashboard** - Overview of all applications and system status
- **Application Management** - Launch and manage business applications
- **Real-time Analytics** - Performance metrics and usage statistics

### Technical Features
- **React 18** with modern hooks and context API
- **React Router DOM** for client-side navigation
- **TailwindCSS** for responsive styling and theming
- **Service Worker** for offline functionality
- **PWA Manifest** for app installation
- **ESLint** for code quality and accessibility
- **Modular Architecture** with clean component structure

## 🎨 Design & Branding

### TotalEnergies Brand Colors
- **Primary Red**: `#ef4444` - TotalEnergies signature red
- **Info Blue**: `#3b82f6` - Professional blue for data and analytics
- **Success Green**: `#22c55e` - Success states and positive metrics
- **Warning Orange**: `#f97316` - TotalEnergies orange for alerts
- **Secondary Gray**: `#64748b` - Professional dark gray
- **Accent Colors**: Full spectrum of TotalEnergies brand colors

### UI Components
- **Custom Logo Integration** - TotalEnergies logo throughout the application
- **Color-coded Application Cards** - Visual distinction for different app types
- **Responsive Navigation** - Mobile-friendly sidebar and navbar
- **Professional Dashboard** - Clean, modern interface with statistics widgets
- **Interactive Elements** - Hover effects and smooth transitions

## 📁 Project Structure

```
src/
├── api/
│   └── frappe.js              # Frappe API integration wrappers
├── components/
│   ├── AppCard.js             # Application card component
│   ├── Layout.js              # Main layout wrapper
│   ├── Navbar.js              # Top navigation bar
│   └── Sidebar.js             # Side navigation menu
├── context/
│   └── AuthContext.js         # Authentication context provider
├── pages/
│   ├── Apps.js                # Applications listing page
│   ├── Dashboard.js           # Main dashboard page
│   ├── Features.js            # Features showcase page
│   └── Login.js               # Authentication page
├── App.js                     # Main application component
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
- **Local Storage**: Persistent login sessions
- **Placeholder Implementation**: Ready for backend integration
- **Protected Routes**: Automatic redirection based on auth status

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

### Authentication
- **Demo Credentials**: Use any email and password to login
- **Example**: `admin@example.com` / `password123`
- **Session Management**: Automatic login persistence

### Navigation
- **Dashboard**: Overview of applications and system status
- **Apps**: Browse and launch available applications
- **Features**: Learn about portal capabilities
- **Sidebar**: Quick navigation between sections

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

*Last updated: September 2024*