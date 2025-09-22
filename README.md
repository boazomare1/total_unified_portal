# Unified Client Portal

A production-ready React Progressive Web App scaffold for a centralized client portal that integrates with Frappe/ERPNext systems.

## Features

- 🚀 **Progressive Web App (PWA)** - Installable with offline capabilities
- 🎨 **Modern UI** - Built with TailwindCSS and responsive design
- 🔐 **Authentication** - Context-based auth with placeholder login/logout
- 🧭 **Routing** - React Router DOM with protected routes
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- 🎯 **Modular Architecture** - Clean, organized code structure
- 🔌 **API Integration** - Ready for Frappe/ERPNext integration

## Tech Stack

- **React 19** - Frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **PWA** - Service worker and manifest configuration
- **Context API** - State management for authentication

## Project Structure

```
src/
├── api/                    # API wrappers for Frappe endpoints
│   └── frappe.js          # Frappe API client
├── components/            # Reusable UI components
│   ├── Layout.js          # Main layout wrapper
│   ├── Navbar.js          # Responsive navigation
│   ├── Sidebar.js         # Side navigation
│   └── AppCard.js         # Application card component
├── context/               # React Context providers
│   └── AuthContext.js     # Authentication context
├── pages/                 # Page components
│   ├── Login.js           # Login page
│   ├── Dashboard.js       # Main dashboard
│   ├── Apps.js            # Applications page
│   └── Features.js        # Marketing/features page
└── App.js                 # Main app with routing
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd unified_total
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Usage

### Authentication

The app includes a placeholder authentication system. Use any email and password to login:

- **Email**: admin@example.com
- **Password**: password123

### Navigation

- **Login** (`/login`) - Authentication page
- **Dashboard** (`/dashboard`) - Main overview page
- **Apps** (`/apps`) - Application management
- **Features** (`/features`) - Marketing/features page

### Brand Colors

The app uses a custom TailwindCSS theme with the following brand colors:

- **Primary Blue**: `#3b82f6` (blue-500)
- **Secondary Gray**: `#6b7280` (gray-500)
- **Success Green**: `#22c55e` (green-500)
- **Warning Amber**: `#f59e0b` (amber-500)
- **Error Red**: `#ef4444` (red-500)

## API Integration

The app includes a Frappe API wrapper (`src/api/frappe.js`) with methods for:

- Authentication
- Document operations (CRUD)
- List and search operations
- File uploads
- Custom method calls

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_FRAPPE_URL=http://localhost:8000
REACT_APP_FRAPPE_API_KEY=your_api_key
REACT_APP_FRAPPE_API_SECRET=your_api_secret
```

## PWA Features

- **Installable** - Add to home screen on mobile devices
- **Offline Support** - Service worker for caching
- **Responsive** - Works on all screen sizes
- **Fast Loading** - Optimized for performance

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

### Code Style

- Use functional components with hooks
- Follow React best practices
- Use TailwindCSS for styling
- Include JSDoc comments for components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.# total_unified_portal
