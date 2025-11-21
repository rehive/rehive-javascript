import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../../rehive-react-wrapper';

export function UserDetails() {
  const { authUser, rehive } = useAuth();
  const [userDetails, setUserDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserDetails = async () => {
    if (!authUser) return;

    setIsLoading(true);

    try {
      const response = await rehive.user.userRetrieve();
      setUserDetails(response.data);
    } catch (error: any) {
      console.error('Failed to fetch user details:', error);
      Alert.alert('Error', error?.message || 'Failed to fetch user details');
    } finally {
      setIsLoading(false);
    }
  };

  if (!authUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>👤 User Details</Text>
        <Text style={styles.subtitle}>Please authenticate first to query user details.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 User Details</Text>
      <Text style={styles.subtitle}>Query detailed user information from the Rehive platform.</Text>

      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={fetchUserDetails}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Loading...' : 'Fetch User Details'}
        </Text>
      </TouchableOpacity>

      {userDetails && (
        <ScrollView style={styles.detailsContainer} nestedScrollEnabled>
          <Text style={styles.sectionTitle}>📋 User Information</Text>

          <View style={styles.detailCard}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>ID:</Text>
              <Text style={styles.detailValue}>{userDetails.id}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Email:</Text>
              <Text style={styles.detailValue}>{userDetails.email}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Username:</Text>
              <Text style={styles.detailValue}>{userDetails.username || 'Not set'}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>First Name:</Text>
              <Text style={styles.detailValue}>{userDetails.first_name || 'Not set'}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Last Name:</Text>
              <Text style={styles.detailValue}>{userDetails.last_name || 'Not set'}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Mobile:</Text>
              <Text style={styles.detailValue}>{userDetails.mobile || 'Not set'}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Status:</Text>
              <Text style={[styles.detailValue, styles.statusText]}>
                {userDetails.status || 'Unknown'}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Verified:</Text>
              <Text style={styles.detailValue}>
                {userDetails.verified ? '✅ Yes' : '❌ No'}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Created:</Text>
              <Text style={styles.detailValue}>
                {new Date(userDetails.created).toLocaleString()}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Updated:</Text>
              <Text style={styles.detailValue}>
                {new Date(userDetails.updated).toLocaleString()}
              </Text>
            </View>
            {userDetails.timezone && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Timezone:</Text>
                <Text style={styles.detailValue}>{userDetails.timezone}</Text>
              </View>
            )}
            {userDetails.language && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Language:</Text>
                <Text style={styles.detailValue}>{userDetails.language}</Text>
              </View>
            )}
            {userDetails.nationality && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Nationality:</Text>
                <Text style={styles.detailValue}>{userDetails.nationality}</Text>
              </View>
            )}
            {userDetails.birth_date && (
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Birth Date:</Text>
                <Text style={styles.detailValue}>
                  {new Date(userDetails.birth_date).toLocaleDateString()}
                </Text>
              </View>
            )}
          </View>

          {userDetails.groups && userDetails.groups.length > 0 && (
            <View style={styles.detailCard}>
              <Text style={styles.cardTitle}>👥 Groups</Text>
              {userDetails.groups.map((group: any, index: number) => (
                <Text key={index} style={styles.listItem}>
                  • {group.name} {group.label && `(${group.label})`}
                </Text>
              ))}
            </View>
          )}

          {userDetails.permission_groups && userDetails.permission_groups.length > 0 && (
            <View style={styles.detailCard}>
              <Text style={styles.cardTitle}>🔐 Permission Groups</Text>
              {userDetails.permission_groups.map((group: any, index: number) => (
                <Text key={index} style={styles.listItem}>
                  • {group.name} {group.label && `(${group.label})`}
                </Text>
              ))}
            </View>
          )}
        </ScrollView>
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
    lineHeight: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
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
  detailsContainer: {
    maxHeight: 400,
  },
  detailCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#34495e',
    width: 100,
    flexShrink: 0,
  },
  detailValue: {
    fontSize: 14,
    color: '#7f8c8d',
    flex: 1,
    flexWrap: 'wrap',
  },
  statusText: {
    textTransform: 'capitalize',
  },
  listItem: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 4,
    lineHeight: 20,
  },
});