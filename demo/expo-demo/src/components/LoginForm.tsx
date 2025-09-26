import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useAuth } from '../../rehive-react-wrapper';

export function LoginForm() {
  const { authUser, authLoading, authError, login, logout } = useAuth();
  const [credentials, setCredentials] = useState({
    user: '',
    password: '',
    company: ''
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await login(credentials);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (authLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={styles.loadingText}>Initializing SDK...</Text>
      </View>
    );
  };

  if (authUser) {
    return (
      <View style={styles.container}>
        <View style={styles.successContainer}>
          <Text style={styles.successTitle}>✓ Authentication Successful</Text>
          <Text style={styles.successMessage}>
            You are now authenticated with the Rehive platform. Check the debug panel for detailed session information.
          </Text>
          
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rehive SDK Authentication</Text>
      <Text style={styles.subtitle}>Test the SDK authentication flow with your Rehive credentials.</Text>
      
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email or Username</Text>
          <TextInput
            style={styles.input}
            value={credentials.user}
            onChangeText={(text) => setCredentials(prev => ({ ...prev, user: text }))}
            placeholder="user@example.com"
            placeholderTextColor="#95a5a6"
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={credentials.password}
            onChangeText={(text) => setCredentials(prev => ({ ...prev, password: text }))}
            placeholder="••••••••"
            placeholderTextColor="#95a5a6"
            secureTextEntry
          />
        </View>
        
        <View style={styles.formGroup}>
          <Text style={styles.label}>Company ID</Text>
          <TextInput
            style={styles.input}
            value={credentials.company}
            onChangeText={(text) => setCredentials(prev => ({ ...prev, company: text }))}
            placeholder="your-company-id"
            placeholderTextColor="#95a5a6"
            autoCapitalize="none"
          />
        </View>
        
        <TouchableOpacity 
          onPress={handleLogin} 
          disabled={isLoggingIn || !credentials.user || !credentials.password || !credentials.company}
          style={[
            styles.loginButton, 
            (isLoggingIn || !credentials.user || !credentials.password || !credentials.company) && styles.loginButtonDisabled
          ]}
        >
          {isLoggingIn ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.loginButtonText}>Authenticate</Text>
          )}
        </TouchableOpacity>
      </View>
      
      {authError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Authentication Failed</Text>
          <Text style={styles.errorText}><Text style={styles.errorLabel}>Error:</Text> {authError.message}</Text>
          {'status' in authError && (
            <Text style={styles.errorText}><Text style={styles.errorLabel}>HTTP Status:</Text> {String(authError.status)}</Text>
          )}
          {'code' in authError && (
            <Text style={styles.errorText}><Text style={styles.errorLabel}>Error Code:</Text> {String(authError.code)}</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 20,
    lineHeight: 20,
  },
  form: {
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
  },
  loginButton: {
    backgroundColor: '#3498db',
    borderRadius: 6,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 40,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#7f8c8d',
  },
  successContainer: {
    alignItems: 'center',
  },
  successTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 12,
  },
  successMessage: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  errorContainer: {
    backgroundColor: '#fdedec',
    borderWidth: 1,
    borderColor: '#f1c0c0',
    borderRadius: 6,
    padding: 16,
    marginTop: 16,
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 8,
  },
  errorText: {
    fontSize: 14,
    color: '#c0392b',
    marginBottom: 4,
  },
  errorLabel: {
    fontWeight: 'bold',
  },
});