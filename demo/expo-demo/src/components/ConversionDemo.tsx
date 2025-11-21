import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../../rehive-react-wrapper';

export function ConversionDemo() {
  const { rehive, authUser } = useAuth();
  const isAuthenticated = !!authUser;
  const [conversionData, setConversionData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleListPairs = async () => {
    if (!rehive || !isAuthenticated) {
      Alert.alert('Error', 'Please log in first');
      return;
    }

    setLoading(true);

    try {
      // Create a conversion API instance
      const conversionApi = rehive.extensions.conversion();
      const response = await conversionApi.user.userConversionPairsList({});
      setConversionData(response.data);
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to list conversion pairs';
      Alert.alert('Error', errorMessage);
      console.error('Conversion API error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🔄 Conversion Extension Demo</Text>
        <Text style={styles.subtitle}>
          Please log in to test the conversion extension with automatic token sync.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔄 Conversion Extension Demo</Text>
      <Text style={styles.subtitle}>
        Test the conversion extension API with automatic token synchronization.
      </Text>

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleListPairs}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Loading...' : 'List Conversion Pairs'}
        </Text>
      </TouchableOpacity>

      {conversionData && (
        <ScrollView style={styles.resultsContainer} nestedScrollEnabled>
          <Text style={styles.sectionTitle}>API Response:</Text>
          <View style={styles.jsonContainer}>
            <Text style={styles.jsonText}>
              {JSON.stringify(conversionData, null, 2)}
            </Text>
          </View>
        </ScrollView>
      )}

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Token Sync Demo:</Text>
        <Text style={styles.infoText}>
          This component demonstrates how extension APIs automatically stay synchronized with authentication tokens. When your token refreshes (expires after ~1 hour), all registered extension APIs will automatically receive the new token.
        </Text>

        <View style={styles.featureList}>
          <Text style={styles.featureItem}>✅ <Text style={styles.code}>rehive.extensions.conversion()</Text> creates authenticated instances</Text>
          <Text style={styles.featureItem}>✅ Tokens are automatically synchronized across all APIs</Text>
          <Text style={styles.featureItem}>✅ Token refresh propagates to platform + extension APIs</Text>
          <Text style={styles.featureItem}>✅ No manual token management required</Text>
        </View>
      </View>
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
    lineHeight: 20,
    marginBottom: 16,
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
  resultsContainer: {
    maxHeight: 200,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  jsonContainer: {
    backgroundColor: '#2c3e50',
    borderRadius: 6,
    padding: 12,
  },
  jsonText: {
    fontSize: 12,
    color: '#ecf0f1',
    fontFamily: 'Courier', // Using Courier for monospace on React Native
    lineHeight: 16,
  },
  infoSection: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
    marginBottom: 12,
  },
  featureList: {
    marginTop: 8,
  },
  featureItem: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
    marginBottom: 6,
  },
  code: {
    fontFamily: 'Courier', // Using Courier for monospace on React Native
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 3,
  },
});