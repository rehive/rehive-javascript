# Rehive SDK Demo

A minimal React application demonstrating the Rehive SDK authentication features.

## Features Demonstrated

- ✅ **User Authentication**: Login and logout functionality
- ✅ **Session Management**: Automatic session handling and persistence
- ✅ **User Details**: Display authenticated user information
- ✅ **Error Handling**: Display authentication errors
- ✅ **React Integration**: Using AuthProvider and useAuth hook
- ✅ **Storage Options**: Configurable storage adapters

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Navigate to `http://localhost:5173`
   - Enter your Rehive credentials to test the authentication flow

## Configuration

The demo is configured to use:
- **API Base URL**: `https://api.rehive.com` (update in `App.tsx` for your environment)
- **Storage**: `MemoryStorageAdapter` (data is not persisted between browser sessions)
- **Cross-tab sync**: Disabled for simplicity

## Usage

### Basic Authentication Flow

```typescript
import { AuthProvider, useAuth } from '@rehive/sdk/react'
import { MemoryStorageAdapter } from '@rehive/sdk'

// Wrap your app with AuthProvider
function App() {
  return (
    <AuthProvider 
      config={{
        baseUrl: 'https://api.rehive.com',
        storage: new MemoryStorageAdapter(),
        enableCrossTabSync: false
      }}
    >
      <LoginForm />
    </AuthProvider>
  )
}

// Use the auth hook in components
function LoginForm() {
  const { authUser, authLoading, authError, login, logout } = useAuth()
  
  const handleLogin = async (credentials) => {
    await login({
      user: credentials.email,
      password: credentials.password,
      company: credentials.company
    })
  }
  
  // ... rest of component
}
```

### Available Storage Options

```typescript
import { 
  MemoryStorageAdapter,    // In-memory (not persisted)
  WebStorageAdapter,       // localStorage (browser only)
  AsyncStorageAdapter      // For React Native
} from '@rehive/sdk'

// Use localStorage for persistence
storage: new WebStorageAdapter()

// Use AsyncStorage for React Native
storage: new AsyncStorageAdapter(AsyncStorage)
```

## SDK Features

This demo showcases the following SDK capabilities:

- **Framework Agnostic**: Core SDK works without React
- **React Integration**: Optional React provider and hooks
- **Multiple Storage Options**: Memory, localStorage, AsyncStorage
- **Session Persistence**: Automatic session restoration
- **Error Management**: Comprehensive error handling
- **TypeScript Support**: Full type safety

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
demo/
├── src/
│   ├── App.tsx          # Main app component with SDK integration
│   ├── App.css          # Styling
│   ├── main.tsx         # React app entry point
│   └── vite-env.d.ts    # Vite type definitions
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Learn More

- [Rehive SDK Documentation](../README.md)
- [Rehive Platform API](https://docs.rehive.com)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
