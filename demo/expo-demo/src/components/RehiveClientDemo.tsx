import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../../rehive-react-wrapper';

export function RehiveClientDemo() {
  const { rehive, authUser } = useAuth();
  const [serverToken, setServerToken] = useState('');
  const [demoResults, setDemoResults] = useState<{
    userApi?: any;
    adminApi?: any;
    conversion?: any;
    serverUserApi?: any;
    serverAdminApi?: any;
  }>({});
  const [testingClientSide, setTestingClientSide] = useState(false);
  const [testingServerSide, setTestingServerSide] = useState(false);

  const testClientSideAPIs = async () => {
    if (!authUser) {
      Alert.alert('Error', 'Please login first to test client-side APIs');
      return;
    }

    setTestingClientSide(true);
    try {
      // Test direct API access
      const userProfile = await rehive.user.userRetrieve();
      const accountsList = await rehive.user.userAccountsList({});

      // Test extension API
      const conversion = rehive.extensions.conversion();
      const conversionPairs = await conversion.user.userConversionPairsList({});

      setDemoResults(prev => ({
        ...prev,
        userApi: userProfile,
        adminApi: accountsList, // Using user accounts as example
        conversion: conversionPairs
      }));
    } catch (error: any) {
      console.error('Client-side API test failed:', error);
      Alert.alert('Error', `API test failed: ${error.message}`);
    } finally {
      setTestingClientSide(false);
    }
  };

  const testServerSideAPIs = async () => {
    if (!serverToken.trim()) {
      Alert.alert('Error', 'Please enter a server token first');
      return;
    }

    setTestingServerSide(true);
    try {
      // For React Native, we'll simulate server-side by creating a new client instance
      // In a real server environment, you'd import and use RehiveClient directly
      const { RehiveClient } = require('rehive');
      const serverClient = new RehiveClient({
        baseUrl: 'https://api.rehive.com',
        token: serverToken.trim()
      });

      // Test server-side APIs (admin operations)
      const adminUsers = await serverClient.admin.adminUsersList({});
      const userProfile = await serverClient.user.userRetrieve();

      setDemoResults(prev => ({
        ...prev,
        serverUserApi: userProfile,
        serverAdminApi: adminUsers
      }));

      Alert.alert('Success', 'Server-side APIs tested successfully!');
    } catch (error: any) {
      console.error('Server-side API test failed:', error);
      Alert.alert('Error', `Server API test failed: ${error.message}`);
    } finally {
      setTestingServerSide(false);
    }
  };

  const clearResults = () => {
    setDemoResults({});
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🚀 RehiveClient API Demo</Text>
      <Text style={styles.subtitle}>
        Test both client-side (authenticated) and server-side (permanent token) usage patterns.
      </Text>

      {/* Client-side Testing */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Client-side APIs (Authenticated User)</Text>
        <Text style={styles.description}>Test direct API access after authentication:</Text>

        <View style={styles.codeExampleContainer}>
          <Text style={styles.codeExample}>await rehive.user.userRetrieve()</Text>
          <Text style={styles.codeExample}>await rehive.user.userAccountsList({})</Text>
          <Text style={styles.codeExample}>await rehive.extensions.conversion().user.userConversionPairsList({})</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, (!authUser || testingClientSide) && styles.buttonDisabled]}
          onPress={testClientSideAPIs}
          disabled={!authUser || testingClientSide}
        >
          <Text style={styles.buttonText}>
            {testingClientSide ? 'Testing...' : authUser ? 'Test Client-side APIs' : 'Login Required'}
          </Text>
        </TouchableOpacity>

        {demoResults.userApi && (
          <View style={styles.resultSection}>
            <Text style={styles.resultTitle}>✅ Client-side Results:</Text>

            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>User Profile:</Text>
              <ScrollView style={styles.jsonContainer} nestedScrollEnabled>
                <Text style={styles.jsonText}>
                  {JSON.stringify(demoResults.userApi?.data, null, 2)}
                </Text>
              </ScrollView>
            </View>

            {demoResults.adminApi && (
              <View style={styles.resultItem}>
                <Text style={styles.resultLabel}>User Accounts:</Text>
                <ScrollView style={styles.jsonContainer} nestedScrollEnabled>
                  <Text style={styles.jsonText}>
                    {JSON.stringify(demoResults.adminApi?.data?.results?.slice(0, 2), null, 2)}
                  </Text>
                </ScrollView>
              </View>
            )}

            {demoResults.conversion && (
              <View style={styles.resultItem}>
                <Text style={styles.resultLabel}>Conversion Pairs:</Text>
                <ScrollView style={styles.jsonContainer} nestedScrollEnabled>
                  <Text style={styles.jsonText}>
                    {JSON.stringify(demoResults.conversion?.data?.results?.slice(0, 2), null, 2)}
                  </Text>
                </ScrollView>
              </View>
            )}
          </View>
        )}
      </View>

      {/* Server-side Testing */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Server-side APIs (Permanent Token)</Text>
        <Text style={styles.description}>Test server-side usage with permanent admin token:</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Admin Token:</Text>
          <TextInput
            style={styles.input}
            value={serverToken}
            onChangeText={setServerToken}
            placeholder="Enter your admin/permanent token"
            secureTextEntry
            multiline={false}
          />
        </View>

        <View style={styles.codeExampleContainer}>
          <Text style={styles.codeExample}>const serverRehive = new RehiveClient({`{ token: 'admin-token' }`})</Text>
          <Text style={styles.codeExample}>await serverRehive.admin.adminUsersList({})</Text>
          <Text style={styles.codeExample}>await serverRehive.user.userRetrieve() // impersonation</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, (!serverToken.trim() || testingServerSide) && styles.buttonDisabled]}
          onPress={testServerSideAPIs}
          disabled={!serverToken.trim() || testingServerSide}
        >
          <Text style={styles.buttonText}>
            {testingServerSide ? 'Testing...' : 'Test Server-side APIs'}
          </Text>
        </TouchableOpacity>

        {demoResults.serverUserApi && (
          <View style={styles.resultSection}>
            <Text style={styles.resultTitle}>✅ Server-side Results:</Text>

            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>Admin Users List:</Text>
              <ScrollView style={styles.jsonContainer} nestedScrollEnabled>
                <Text style={styles.jsonText}>
                  {JSON.stringify(demoResults.serverAdminApi?.data?.results?.slice(0, 2), null, 2)}
                </Text>
              </ScrollView>
            </View>

            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>User Profile (with admin token):</Text>
              <ScrollView style={styles.jsonContainer} nestedScrollEnabled>
                <Text style={styles.jsonText}>
                  {JSON.stringify(demoResults.serverUserApi?.data, null, 2)}
                </Text>
              </ScrollView>
            </View>
          </View>
        )}
      </View>

      {/* Usage Patterns */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📋 Usage Patterns Comparison</Text>

        <View style={styles.patternSection}>
          <Text style={styles.patternTitle}>Client-side (Mobile Apps)</Text>
          <View style={styles.codeBlock}>
            <Text style={styles.codeBlockText}>
{`// Initialize without token
const rehive = new RehiveClient({
  baseUrl: 'https://api.rehive.com'
})

// Login flow
await rehive.auth.login({
  user: 'email@example.com',
  password: 'password',
  company: 'company-name'
})

// Direct API access
await rehive.user.userRetrieve()
await rehive.admin.adminUsersCreate(data)

// Extensions
const conversion = rehive.extensions.conversion()
await conversion.user.userConversionPairsList({})`}
            </Text>
          </View>
        </View>

        <View style={styles.patternSection}>
          <Text style={styles.patternTitle}>Server-side (Backend Services)</Text>
          <View style={styles.codeBlock}>
            <Text style={styles.codeBlockText}>
{`// Initialize with permanent token
const rehive = new RehiveClient({
  baseUrl: 'https://api.rehive.com',
  token: 'your-admin-token'
})

// Immediate API access - no auth flows needed
await rehive.admin.adminUsersCreate(data)
await rehive.user.userRetrieve() // impersonation

// Extensions work the same way
const conversion = rehive.extensions.conversion()
await conversion.admin.adminConversionRatesList({})`}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={clearResults}>
        <Text style={styles.buttonText}>Clear Results</Text>
      </TouchableOpacity>
    </ScrollView>
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
    lineHeight: 20,
    marginBottom: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 12,
  },
  codeExampleContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
  },
  codeExample: {
    fontSize: 12,
    fontFamily: 'Courier',
    color: '#2c3e50',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  clearButton: {
    backgroundColor: '#95a5a6',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  resultSection: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
    marginTop: 12,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#27ae60',
    marginBottom: 12,
  },
  resultItem: {
    marginBottom: 16,
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  jsonContainer: {
    backgroundColor: '#2c3e50',
    borderRadius: 6,
    padding: 12,
    maxHeight: 150,
  },
  jsonText: {
    fontSize: 12,
    color: '#ecf0f1',
    fontFamily: 'Courier',
    lineHeight: 16,
  },
  patternSection: {
    marginBottom: 20,
  },
  patternTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  codeBlock: {
    backgroundColor: '#2c3e50',
    borderRadius: 6,
    padding: 12,
  },
  codeBlockText: {
    fontSize: 12,
    color: '#ecf0f1',
    fontFamily: 'Courier',
    lineHeight: 16,
  },
});