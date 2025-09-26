import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../rehive-react-wrapper';

export function UserDetails() {
  const { authUser } = useAuth();

  if (!authUser) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>
      <View style={styles.detailRow}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{authUser.email}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.value}>{authUser.first_name || 'N/A'}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.value}>{authUser.last_name || 'N/A'}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{authUser.status}</Text>
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
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34495e',
    width: 100,
  },
  value: {
    fontSize: 14,
    color: '#7f8c8d',
    flex: 1,
  },
});