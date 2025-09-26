import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { AuthProvider } from './rehive-react-wrapper';
import { MemoryStorageAdapter } from 'rehive';
import { LoginForm } from './src/components/LoginForm';
import { TOTPFlow } from './src/components/TOTPFlow';
import { UserDetails } from './src/components/UserDetails';
import { ConversionDemo } from './src/components/ConversionDemo';
import { RehiveClientDemo } from './src/components/RehiveClientDemo';
import { DebugPanel } from './src/components/DebugPanel';

export default function App() {
  return (
    <AuthProvider 
      config={{
        baseUrl: 'https://api.rehive.com',
        storage: new MemoryStorageAdapter()
      }}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        
        <View style={styles.header}>
          <Text style={styles.title}>Rehive SDK Demo</Text>
          <Text style={styles.subtitle}>Interactive authentication testing and debugging tool</Text>
        </View>
        
        <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
          <View style={styles.mainContent}>
            <LoginForm />
            <TOTPFlow />
            <UserDetails />
            <ConversionDemo />
            <RehiveClientDemo />
          </View>
          
          <View style={styles.sidebar}>
            <DebugPanel />
          </View>
        </ScrollView>
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2c3e50',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#bdc3c7',
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  mainContent: {
    marginBottom: 20,
  },
  sidebar: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
