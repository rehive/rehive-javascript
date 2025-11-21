import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../../rehive-react-wrapper';

export function DebugPanel() {
  const { authUser, authToken } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Debug Panel</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Authentication Status</Text>
        <Text style={styles.text}>
          Status: {authUser ? 'Authenticated' : 'Not Authenticated'}
        </Text>
        {authToken && (
          <Text style={styles.text}>
            Token: {authToken.substring(0, 20)}...
          </Text>
        )}
      </View>

      {authUser && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>User Data</Text>
          <ScrollView style={styles.jsonContainer} nestedScrollEnabled>
            <Text style={styles.jsonText}>
              {JSON.stringify(authUser, null, 2)}
            </Text>
          </ScrollView>
        </View>
      )}
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Storage Adapter</Text>
        <Text style={styles.text}>SecureStoreAdapter</Text>
        <Text style={styles.subText}>
          Data is securely encrypted and persisted between app restarts
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  subText: {
    fontSize: 11,
    color: '#95a5a6',
    fontStyle: 'italic',
  },
  jsonContainer: {
    backgroundColor: '#2c3e50',
    borderRadius: 4,
    padding: 8,
    maxHeight: 200,
  },
  jsonText: {
    fontSize: 10,
    color: '#ecf0f1',
    fontFamily: 'monospace',
  },
});