import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function RehiveClientDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rehive Client Demo</Text>
      <Text style={styles.subtitle}>Direct client API calls demonstration will be implemented here.</Text>
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
  },
});