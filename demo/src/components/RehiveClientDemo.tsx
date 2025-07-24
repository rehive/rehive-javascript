import { useState } from 'react'
import { useAuth } from '@rehive/sdk/react'

export function RehiveClientDemo() {
  const { rehive, authUser } = useAuth()
  const [serverRehive, setServerRehive] = useState<any>(null)
  const [serverToken, setServerToken] = useState('')
  const [demoResults, setDemoResults] = useState<{
    userApi?: any;
    adminApi?: any;
    conversion?: any;
    serverUserApi?: any;
    serverAdminApi?: any;
  }>({})

  const testClientSideAPIs = async () => {
    if (!authUser) {
      alert('Please login first to test client-side APIs')
      return
    }

    try {
      // Test direct API access
      const userProfile = await rehive.user.userRetrieve()
      const accountsList = await rehive.user.userAccountsList({})
      
      // Test extension API
      const conversion = rehive.extensions.conversion()
      const conversionPairs = await conversion.user.userConversionPairsList({})

      setDemoResults(prev => ({
        ...prev,
        userApi: userProfile,
        adminApi: accountsList, // Using user accounts as example
        conversion: conversionPairs
      }))
    } catch (error) {
      console.error('Client-side API test failed:', error)
      alert(`API test failed: ${error.message}`)
    }
  }

  const initializeServerClient = () => {
    if (!serverToken.trim()) {
      alert('Please enter a server token')
      return
    }

    try {
      // Create server-side client with permanent token
      const { RehiveClient } = require('@rehive/sdk')
      const serverClient = new RehiveClient({
        baseUrl: 'https://api.rehive.com',
        token: serverToken.trim()
      })

      setServerRehive(serverClient)
      alert('Server client initialized successfully!')
    } catch (error) {
      console.error('Server client initialization failed:', error)
      alert(`Initialization failed: ${error.message}`)
    }
  }

  const testServerSideAPIs = async () => {
    if (!serverRehive) {
      alert('Please initialize server client first')
      return
    }

    try {
      // Test server-side APIs (admin operations)
      const adminUsers = await serverRehive.admin.adminUsersList({})
      const userProfile = await serverRehive.user.userRetrieve()

      setDemoResults(prev => ({
        ...prev,
        serverUserApi: userProfile,
        serverAdminApi: adminUsers
      }))
    } catch (error) {
      console.error('Server-side API test failed:', error)
      alert(`Server API test failed: ${error.message}`)
    }
  }

  return (
    <div className="rehive-client-demo">
      <h2>🚀 RehiveClient API Demo</h2>
      <p>Test both client-side (authenticated) and server-side (permanent token) usage patterns.</p>

      {/* Client-side Testing */}
      <div className="demo-section">
        <h3>Client-side APIs (Authenticated User)</h3>
        <p>Test direct API access after authentication:</p>
        
        <div className="api-examples">
          <code>await rehive.user.userRetrieve()</code><br/>
          <code>await rehive.user.userAccountsList({})</code><br/>
          <code>await rehive.extensions.conversion().user.userConversionPairsList({})</code>
        </div>

        <button 
          onClick={testClientSideAPIs}
          disabled={!authUser}
          className="test-btn"
        >
          {authUser ? 'Test Client-side APIs' : 'Login Required'}
        </button>

        {demoResults.userApi && (
          <div className="results">
            <h4>✅ Client-side Results:</h4>
            <div className="result-item">
              <strong>User Profile:</strong>
              <pre>{JSON.stringify(demoResults.userApi?.data, null, 2)}</pre>
            </div>
            {demoResults.adminApi && (
              <div className="result-item">
                <strong>User Accounts:</strong>
                <pre>{JSON.stringify(demoResults.adminApi?.data?.results?.slice(0, 2), null, 2)}</pre>
              </div>
            )}
            {demoResults.conversion && (
              <div className="result-item">
                <strong>Conversion Pairs:</strong>
                <pre>{JSON.stringify(demoResults.conversion?.data?.results?.slice(0, 2), null, 2)}</pre>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Server-side Testing */}
      <div className="demo-section">
        <h3>Server-side APIs (Permanent Token)</h3>
        <p>Test server-side usage with permanent admin token:</p>

        <div className="server-setup">
          <div className="form-group">
            <label htmlFor="serverToken">Admin Token:</label>
            <input
              id="serverToken"
              type="password"
              value={serverToken}
              onChange={(e) => setServerToken(e.target.value)}
              placeholder="Enter your admin/permanent token"
              className="token-input"
            />
          </div>

          <button onClick={initializeServerClient} className="init-btn">
            Initialize Server Client
          </button>

          {serverRehive && (
            <div className="server-status">
              ✅ Server client ready - no authentication flows needed!
            </div>
          )}
        </div>

        <div className="api-examples">
          <code>const serverRehive = new RehiveClient({`{ token: 'admin-token' }`})</code><br/>
          <code>await serverRehive.admin.adminUsersList({})</code><br/>
          <code>await serverRehive.user.userRetrieve() // impersonation</code>
        </div>

        <button 
          onClick={testServerSideAPIs}
          disabled={!serverRehive}
          className="test-btn"
        >
          {serverRehive ? 'Test Server-side APIs' : 'Initialize Server Client First'}
        </button>

        {demoResults.serverUserApi && (
          <div className="results">
            <h4>✅ Server-side Results:</h4>
            <div className="result-item">
              <strong>Admin Users List:</strong>
              <pre>{JSON.stringify(demoResults.serverAdminApi?.data?.results?.slice(0, 2), null, 2)}</pre>
            </div>
            <div className="result-item">
              <strong>User Profile (with admin token):</strong>
              <pre>{JSON.stringify(demoResults.serverUserApi?.data, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>

      {/* Usage Comparison */}
      <div className="demo-section">
        <h3>📋 Usage Patterns Comparison</h3>
        
        <div className="comparison">
          <div className="pattern">
            <h4>Client-side (Web/Mobile Apps)</h4>
            <pre>{`// Initialize without token
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
await conversion.user.userConversionPairsList({})`}</pre>
          </div>

          <div className="pattern">
            <h4>Server-side (Backend Services)</h4>
            <pre>{`// Initialize with permanent token
const rehive = new RehiveClient({
  baseUrl: 'https://api.rehive.com',
  token: 'your-admin-token'
})

// Immediate API access - no auth flows needed
await rehive.admin.adminUsersCreate(data)
await rehive.user.userRetrieve() // impersonation

// Extensions work the same way
const conversion = rehive.extensions.conversion()
await conversion.admin.adminConversionRatesList({})`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}