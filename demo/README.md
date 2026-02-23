# Rehive SDK Demo

A minimal React application demonstrating the Rehive SDK v4 authentication features.

## Features Demonstrated

- **User Authentication**: Login and logout functionality
- **Session Management**: Automatic session handling and persistence
- **User Details**: Display authenticated user information
- **Error Handling**: Display authentication errors
- **React Integration**: Using AuthProvider and useAuth hook
- **Storage Options**: Configurable storage adapters

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
- **Storage**: `memory` (data is not persisted between browser sessions)
- **Cross-tab sync**: Disabled for simplicity

## Usage

### React Integration (AuthProvider + useAuth)

```typescript
import { AuthProvider, useAuth } from 'rehive/react'

function App() {
  return (
    <AuthProvider
      config={{
        baseUrl: 'https://api.rehive.com',
        storage: 'memory',
        enableCrossTabSync: false,
      }}
    >
      <LoginForm />
    </AuthProvider>
  )
}

function LoginForm() {
  const { authUser, authLoading, authError, login, logout } = useAuth()

  const handleLogin = async (credentials) => {
    await login({
      user: credentials.email,
      password: credentials.password,
      company: credentials.company,
    })
  }

  // ... rest of component
}
```

### Modular API (without React)

```typescript
import { createAuth } from 'rehive/auth'
import { createUserApi } from 'rehive/user'

const auth = createAuth({ baseUrl: 'https://api.rehive.com', storage: 'memory' })
const user = createUserApi({ auth })

await auth.login({ user: 'email@example.com', password: 'pass', company: 'myco' })
const profile = await user.userRetrieve()
```

### Available Storage Options

```typescript
// In-memory (not persisted)
storage: 'memory'

// localStorage (browser, persisted)
storage: 'local'

// React Native AsyncStorage
import { AsyncStorageAdapter } from 'rehive'
import AsyncStorage from '@react-native-async-storage/async-storage'
storage: new AsyncStorageAdapter(AsyncStorage)
```

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
