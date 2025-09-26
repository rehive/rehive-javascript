# Rehive SDK Expo Demo

A React Native mobile app demonstrating the Rehive SDK's authentication and core functionality. This demo showcases how to integrate the Rehive SDK into a mobile application using Expo.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Expo CLI** - Install globally: `npm install -g @expo/cli`
- **Mobile device** with Expo Go app installed:
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd rehive-javascript-sdk/demo/expo-demo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Run on your device**:
   - Scan the QR code with your phone's camera (iOS) or the Expo Go app (Android)
   - The app will load on your device

## 📱 Alternative Running Methods

### iOS Simulator (macOS only)
```bash
npm run ios
```

### Android Emulator
```bash
npm run android
```

### Web Browser
```bash
npm run web
```

## 🏗️ Project Structure

```
expo-demo/
├── App.tsx                 # Main app component with AuthProvider
├── src/
│   └── components/
│       ├── LoginForm.tsx   # Authentication form
│       ├── UserDetails.tsx # Display user information
│       ├── DebugPanel.tsx  # Development debugging tools
│       ├── TOTPFlow.tsx    # Two-factor authentication (placeholder)
│       ├── ConversionDemo.tsx # Currency conversion (placeholder)
│       └── RehiveClientDemo.tsx # Direct API calls (placeholder)
├── package.json
└── README.md
```

## 🔧 SDK Configuration

The app is configured to use the Rehive SDK with the following setup:

```typescript
import { AuthProvider } from 'rehive/react';
import { MemoryStorageAdapter } from 'rehive';

<AuthProvider 
  config={{
    baseUrl: 'https://api.rehive.com',
    storage: new MemoryStorageAdapter()  // Data not persisted between app restarts
  }}
>
```

### Storage Options

The demo uses `MemoryStorageAdapter` for simplicity. In production, consider:

- **AsyncStorageAdapter**: Persists data between app sessions
- **MemoryStorageAdapter**: Data cleared on app restart (current demo setup)

## 🧪 Testing the SDK

### 1. Authentication Flow

1. **Start the app** and navigate to the login form
2. **Enter your credentials**:
   - Email or Username
   - Password  
   - Company ID (your Rehive company identifier)
3. **Tap "Authenticate"** to test the login flow
4. **Check the Debug Panel** to see authentication status and user data

### 2. Exploring Features

- **User Details**: View authenticated user information
- **Debug Panel**: Inspect SDK state, tokens, and configuration
- **Error Handling**: Try invalid credentials to see error messages

## 🎯 Learning Objectives

This demo teaches you how to:

1. **Set up the Rehive SDK** in a React Native/Expo app
2. **Implement authentication** with proper error handling
3. **Use React hooks** (`useAuth`) to access SDK functionality
4. **Handle loading states** and user feedback
5. **Display user data** from the Rehive platform
6. **Debug SDK integration** with development tools

## 🔍 Key Components Explained

### AuthProvider
Wraps your app to provide authentication context throughout the component tree.

```typescript
import { AuthProvider } from 'rehive/react';

<AuthProvider config={{ baseUrl: 'https://api.rehive.com' }}>
  <YourApp />
</AuthProvider>
```

### useAuth Hook
Access authentication state and methods in any component:

```typescript
import { useAuth } from 'rehive/react';

function MyComponent() {
  const { authUser, authLoading, login, logout } = useAuth();
  
  // Use authentication state and methods
}
```

### Storage Adapters
Handle token persistence across app sessions:

```typescript
import { MemoryStorageAdapter, AsyncStorageAdapter } from 'rehive';

// For development (not persistent)
const memoryStorage = new MemoryStorageAdapter();

// For production (persistent)
const asyncStorage = new AsyncStorageAdapter(AsyncStorage);
```

## 🎨 Customization

### Styling
The app uses React Native StyleSheet for styling. Modify the styles in each component file to match your brand:

```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    // Add your custom styles
  },
});
```

### Adding Features
Extend the placeholder components to add more SDK functionality:

1. **TOTPFlow.tsx**: Implement two-factor authentication
2. **ConversionDemo.tsx**: Add currency conversion features
3. **RehiveClientDemo.tsx**: Demonstrate direct API calls

## 🔗 API Endpoints

The SDK connects to these Rehive API endpoints:

- **Authentication**: `POST /auth/login/`
- **User Data**: `GET /user/`
- **Company Info**: `GET /company/`

See the [Rehive API Documentation](https://docs.rehive.com/) for complete endpoint reference.

## ✅ Current Status

**Full SDK Integration Active**: The Rehive SDK is now properly integrated using the published npm package instead of local symlinks, resolving previous React version conflicts.

### What's Working:
- ✅ App structure and navigation
- ✅ Component layout and styling
- ✅ Form interactions and UI feedback
- ✅ Real Rehive SDK authentication
- ✅ useAuth React hook
- ✅ AuthProvider context
- ✅ API calls to Rehive platform
- ✅ User session management
- ✅ Debug panel with real data

## 🚨 Troubleshooting

### Previous Issues (Now Resolved)

**React Version Conflict Issue - RESOLVED** ✅
- **Problem**: "Invalid hook call" errors when using symlinked SDK
- **Solution**: Use published npm package (`rehive@^3.1.0`) instead of local symlinks
- **Result**: Full SDK integration now working with React 19

### Common Issues

**1. "Network request failed"**
- Ensure you have internet connection
- Check if the Rehive API is accessible
- Verify your company ID is correct

**2. "Invalid credentials"**
- Double-check your username/email and password
- Ensure your account exists in the specified company
- Try logging in through the Rehive dashboard to verify credentials

**3. "Module not found: rehive"**
- Run `npm install` to ensure dependencies are installed
- Check that you're in the correct directory
- The SDK should install from npm registry without issues

**4. Expo Go app won't connect**
- Ensure your phone and computer are on the same WiFi network
- Try refreshing the Expo development server
- Check firewall settings that might block local network connections

### Getting Help

- **Rehive Documentation**: [docs.rehive.com](https://docs.rehive.com/)
- **SDK Repository**: Check the main SDK documentation
- **Expo Documentation**: [docs.expo.dev](https://docs.expo.dev/)

## 🎓 Next Steps

After exploring this demo:

1. **Build your own app** using the patterns shown here
2. **Explore advanced SDK features** like webhooks and extensions
3. **Implement production-ready storage** with AsyncStorageAdapter
4. **Add error tracking** and analytics to your app
5. **Customize the UI** to match your brand guidelines

## 📝 Notes

- This demo uses development/sandbox credentials
- Production apps should implement proper security measures
- Consider implementing biometric authentication for enhanced security
- Test thoroughly on both iOS and Android devices before production deployment

---

Happy coding! 🎉

For questions about the Rehive SDK, visit our [documentation](https://docs.rehive.com/) or contact our support team.