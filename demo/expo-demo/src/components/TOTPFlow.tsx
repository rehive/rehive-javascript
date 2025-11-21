import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../../rehive-react-wrapper';
import QRCode from 'react-native-qrcode-svg';

export function TOTPFlow() {
  const { authUser, rehive, deleteChallenge } = useAuth();
  const [authenticators, setAuthenticators] = useState<any[]>([]);
  const [newAuthenticator, setNewAuthenticator] = useState<any>(null);
  const [totpCode, setTotpCode] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerifyingDevice, setIsVerifyingDevice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadAuthenticators = async () => {
    if (!authUser) return;

    setIsLoading(true);
    try {
      const response = await rehive.user.authMfaAuthenticatorsList();
      setAuthenticators(response.data?.results || []);
    } catch (error) {
      console.error('Failed to load authenticators:', error);
      Alert.alert('Error', 'Failed to load authenticators');
    } finally {
      setIsLoading(false);
    }
  };

  const createTOTPAuthenticator = async () => {
    if (!authUser) return;

    setIsCreating(true);
    try {
      const response = await rehive.user.authMfaAuthenticatorsCreate({
        type: 'totp',
        details: {}
      } as any);
      setNewAuthenticator(response.data);
      await loadAuthenticators();
    } catch (error) {
      console.error('Failed to create TOTP authenticator:', error);
      Alert.alert('Error', 'Failed to create TOTP authenticator');
    } finally {
      setIsCreating(false);
    }
  };

  const verifyTOTP = async () => {
    if (!authUser || !totpCode || totpCode.length !== 6) return;

    setIsVerifying(true);
    try {
      if (!authUser.challenges || authUser.challenges.length === 0) {
        Alert.alert('Error', 'No challenges found');
        return;
      }

      const challengeId = authUser.challenges[0].id;

      if (!challengeId) {
        Alert.alert('Error', 'Challenge ID is missing');
        return;
      }

      await rehive.user.authMfaVerify({
        token: totpCode,
        challenge: challengeId
      });

      console.log('MFA verification successful, clearing challenge...');
      await deleteChallenge(challengeId);
      setTotpCode('');
      Alert.alert('Success', 'TOTP verification successful!');
    } catch (error) {
      console.error('TOTP verification failed:', error);
      Alert.alert('Error', 'TOTP verification failed');
    } finally {
      setIsVerifying(false);
    }
  };

  const verifyNewDevice = async () => {
    if (!newAuthenticator || !verificationCode || verificationCode.length !== 6) return;

    setIsVerifyingDevice(true);
    try {
      await rehive.user.authMfaVerify({
        token: verificationCode,
        authenticator: newAuthenticator.id
      });

      await loadAuthenticators();
      setNewAuthenticator(null);
      setVerificationCode('');
      Alert.alert('Success', 'Device verified successfully!');
    } catch (error) {
      console.error('Device verification failed:', error);
      Alert.alert('Error', 'Device verification failed');
    } finally {
      setIsVerifyingDevice(false);
    }
  };

  const deleteAuthenticator = async (authenticatorId: string) => {
    Alert.alert(
      'Delete Authenticator',
      'Are you sure you want to delete this authenticator?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await rehive.user.authMfaAuthenticatorsDestroy(authenticatorId);
              await loadAuthenticators();
              Alert.alert('Success', 'Authenticator deleted successfully');
            } catch (error) {
              console.error('Failed to delete authenticator:', error);
              Alert.alert('Error', 'Failed to delete authenticator');
            }
          }
        }
      ]
    );
  };

  useEffect(() => {
    if (authUser) {
      loadAuthenticators();
    }
  }, [authUser]);

  if (!authUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🔐 TOTP Management</Text>
        <Text style={styles.subtitle}>Please authenticate first to manage TOTP devices.</Text>
      </View>
    );
  }

  // Show verification form if user has MFA challenges
  if (authUser.challenges && authUser.challenges.length > 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🔐 TOTP Verification Required</Text>
        <Text style={styles.subtitle}>Enter your 6-digit TOTP code to complete authentication.</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>TOTP Code</Text>
          <TextInput
            style={styles.input}
            value={totpCode}
            onChangeText={(text) => setTotpCode(text.replace(/\D/g, '').slice(0, 6))}
            placeholder="123456"
            maxLength={6}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          style={[styles.button, (isVerifying || totpCode.length !== 6) && styles.buttonDisabled]}
          onPress={verifyTOTP}
          disabled={isVerifying || totpCode.length !== 6}
        >
          <Text style={styles.buttonText}>
            {isVerifying ? 'Verifying...' : 'Verify TOTP'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🔐 TOTP Management</Text>

      <TouchableOpacity
        style={[styles.button, isCreating && styles.buttonDisabled]}
        onPress={createTOTPAuthenticator}
        disabled={isCreating}
      >
        <Text style={styles.buttonText}>
          {isCreating ? 'Creating...' : 'Add TOTP Device'}
        </Text>
      </TouchableOpacity>

      {newAuthenticator && (
        <View style={styles.newAuthenticatorContainer}>
          <Text style={styles.sectionTitle}>📱 New TOTP Device Created</Text>

          <Text style={styles.instructionText}>Scan this QR code with your authenticator app:</Text>

          {newAuthenticator.details?.otpauth_url && (
            <View style={styles.qrContainer}>
              <QRCode
                value={newAuthenticator.details.otpauth_url}
                size={200}
                backgroundColor="#ffffff"
                color="#000000"
              />
            </View>
          )}

          <View style={styles.manualSetup}>
            <Text style={styles.manualTitle}>Or enter manually:</Text>
            <Text style={styles.manualText}><Text style={styles.bold}>Key:</Text> {newAuthenticator.details?.key}</Text>
            <Text style={styles.manualText}><Text style={styles.bold}>Algorithm:</Text> {newAuthenticator.details?.algorithm}</Text>
            <Text style={styles.manualText}><Text style={styles.bold}>Issuer:</Text> {newAuthenticator.details?.issuer}</Text>
          </View>

          {!newAuthenticator.verified && (
            <View style={styles.verificationSection}>
              <Text style={styles.verificationTitle}>🔐 Verify Your Device</Text>
              <Text style={styles.verificationText}>Enter a 6-digit code from your authenticator app to complete setup:</Text>

              <View style={styles.formGroup}>
                <Text style={styles.label}>Verification Code</Text>
                <TextInput
                  style={styles.input}
                  value={verificationCode}
                  onChangeText={(text) => setVerificationCode(text.replace(/\D/g, '').slice(0, 6))}
                  placeholder="123456"
                  maxLength={6}
                  keyboardType="numeric"
                />
              </View>

              <TouchableOpacity
                style={[styles.button, (isVerifyingDevice || verificationCode.length !== 6) && styles.buttonDisabled]}
                onPress={verifyNewDevice}
                disabled={isVerifyingDevice || verificationCode.length !== 6}
              >
                <Text style={styles.buttonText}>
                  {isVerifyingDevice ? 'Verifying...' : 'Verify Device'}
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            style={[styles.button, styles.closeButton]}
            onPress={() => {
              setNewAuthenticator(null);
              setVerificationCode('');
            }}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.authenticatorsList}>
        <Text style={styles.sectionTitle}>📋 Your TOTP Devices</Text>
        {isLoading ? (
          <Text style={styles.subtitle}>Loading authenticators...</Text>
        ) : authenticators.length === 0 ? (
          <Text style={styles.subtitle}>No TOTP devices configured.</Text>
        ) : (
          <View>
            {authenticators.map((auth) => (
              <View key={auth.id} style={styles.authenticatorItem}>
                <View style={styles.authInfo}>
                  <Text style={styles.authText}><Text style={styles.bold}>Type:</Text> {auth.type.toUpperCase()}</Text>
                  <Text style={styles.authText}><Text style={styles.bold}>Verified:</Text> {auth.verified ? '✅' : '❌'}</Text>
                  <Text style={styles.authText}><Text style={styles.bold}>Created:</Text> {new Date(auth.created).toLocaleDateString()}</Text>
                </View>
                <TouchableOpacity
                  style={[styles.button, styles.deleteButton]}
                  onPress={() => deleteAuthenticator(auth.id)}
                >
                  <Text style={[styles.buttonText, styles.deleteButtonText]}>Delete</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
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
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 12,
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
  closeButton: {
    backgroundColor: '#95a5a6',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  deleteButtonText: {
    fontSize: 14,
  },
  newAuthenticatorContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  instructionText: {
    fontSize: 14,
    color: '#34495e',
    marginBottom: 12,
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  manualSetup: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  manualTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  manualText: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  bold: {
    fontWeight: '600',
  },
  verificationSection: {
    marginBottom: 16,
  },
  verificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  verificationText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 12,
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
    fontSize: 16,
    backgroundColor: '#fff',
  },
  authenticatorsList: {
    marginTop: 16,
  },
  authenticatorItem: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  authInfo: {
    marginBottom: 8,
  },
  authText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 4,
  },
});