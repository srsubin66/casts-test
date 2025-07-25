# Core & Style Translation Services - Replit Configuration

## Overview

This is a bilingual (Arabic/English) translation services website for Core & Style Translation Services. The application is built as a full-stack web application with a React frontend, Express backend, and uses Drizzle ORM with PostgreSQL for data persistence. The site features complete RTL/LTR language support and showcases professional translation services targeting Arabic ↔ English language pairs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state, local React state for UI
- **Internationalization**: Custom i18n implementation supporting Arabic (RTL) and English (LTR)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development**: Vite for development server and hot module replacement
- **Build System**: ESBuild for server bundling, Vite for client bundling
- **API Design**: RESTful API with JSON responses

### Database Architecture
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Database**: PostgreSQL (configured via DATABASE_URL)
- **Schema**: Type-safe schema definitions with Zod validation
- **Migration**: Drizzle-kit for schema migrations

## Key Components

### Frontend Components
- **Layout System**: Header, Footer, and main layout with language switching
- **Page Components**: Home, Services, Industries, How It Works, Why Human Translation, Contact
- **UI Library**: Complete shadcn/ui component library (buttons, forms, cards, dialogs, etc.)
- **Language Switcher**: Toggle between English and Arabic with full RTL support

### Backend Components
- **Route Handlers**: Contact form submission and retrieval endpoints
- **Storage Layer**: In-memory storage implementation (MemStorage) for development
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error handling middleware

### Shared Components
- **Schema Definitions**: Contact submission schema shared between client and server
- **Type Safety**: Full TypeScript coverage with shared types

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated with Zod schema
3. POST request sent to `/api/contact` endpoint
4. Server validates data and stores in memory/database
5. Success/error response sent back to client
6. Client displays toast notification

### Language Switching
1. User clicks language toggle in header/footer
2. Language state updated in root App component
3. HTML attributes (lang, dir) updated for RTL/LTR support
4. All text content re-rendered using translation system
5. CSS layout automatically adjusts for text direction

### Page Navigation
1. User clicks navigation links
2. Wouter handles client-side routing
3. Appropriate page component rendered with current language
4. Layout preserved, only main content changes

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Components**: Radix UI primitives, Lucide React icons, React Icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Forms**: React Hook Form with Hookform Resolvers
- **Utilities**: date-fns, embla-carousel-react

### Backend Dependencies
- **Server**: Express.js, HTTP server creation
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod for schema validation
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, Vite for development

### Development Tools
- **Build Tools**: Vite, ESBuild, PostCSS, Autoprefixer
- **TypeScript**: Full TypeScript configuration with path mapping
- **Linting/Formatting**: TypeScript compiler for type checking

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle pushes schema changes to PostgreSQL

### Environment Configuration
- **Development**: Uses tsx for server, Vite dev server for client
- **Production**: Serves built static files, runs compiled server code
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection

### File Structure
```
├── client/          # React frontend application
├── server/          # Express backend application  
├── shared/          # Shared schemas and types
├── dist/           # Built application files
└── migrations/     # Database migration files
```

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database instance
- Static file serving capability
- Environment variable support for DATABASE_URL

The application is designed to be deployed on platforms like Replit, Heroku, or similar Node.js hosting services with PostgreSQL add-ons.