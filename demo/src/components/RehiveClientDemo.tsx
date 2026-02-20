import { useState } from 'react'
import { useAuth } from 'rehive/react'

export function RehiveClientDemo() {
  const { rehive, authUser } = useAuth()
  const [serverRehive, setServerRehive] = useState<any>(null)
  const [serverToken, setServerToken] = useState('')
  const [demoResults, setDemoResults] = useState<{
    userApi?: any;
    accounts?: any;
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
      const userProfile: any = await rehive.user.userRetrieve()
      const accountsList: any = await rehive.user.accountsList()

      const conversion = rehive.extensions.conversion()
      const conversionPairs: any = await conversion.userConversionPairsList({})

      setDemoResults(prev => ({
        ...prev,
        userApi: userProfile,
        accounts: accountsList,
        conversion: conversionPairs,
      }))
    } catch (error: any) {
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
      const { RehiveClient } = require('rehive')
      const serverClient = new RehiveClient({
        baseUrl: 'https://api.rehive.com',
        token: serverToken.trim(),
      })

      setServerRehive(serverClient)
      alert('Server client initialized successfully!')
    } catch (error: any) {
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
      const adminUsers: any = await serverRehive.admin.usersList()
      const userProfile: any = await serverRehive.user.userRetrieve()

      setDemoResults(prev => ({
        ...prev,
        serverUserApi: userProfile,
        serverAdminApi: adminUsers,
      }))
    } catch (error: any) {
      console.error('Server-side API test failed:', error)
      alert(`Server API test failed: ${error.message}`)
    }
  }

  return (
    <div className="rehive-client-demo">
      <h2>🚀 RehiveClient API Demo</h2>
      <p>Test both client-side (authenticated) and server-side (permanent token) usage patterns.</p>

      <div className="demo-section">
        <h3>Client-side APIs (Authenticated User)</h3>
        <p>Test direct API access after authentication:</p>
        
        <div className="api-examples">
          <code>await rehive.user.userRetrieve()</code><br/>
          <code>await rehive.user.accountsList()</code><br/>
          <code>await rehive.extensions.conversion().userConversionPairsList({})</code>
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
            {demoResults.accounts && (
              <div className="result-item">
                <strong>User Accounts:</strong>
                <pre>{JSON.stringify(demoResults.accounts?.data?.results?.slice(0, 2), null, 2)}</pre>
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
          <code>{`const rehive = new RehiveClient({ token: 'admin-token' })`}</code><br/>
          <code>await rehive.admin.usersList()</code><br/>
          <code>await rehive.user.userRetrieve()</code>
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

      <div className="demo-section">
        <h3>📋 v4 Usage Patterns</h3>
        
        <div className="comparison">
          <div className="pattern">
            <h4>Modular (tree-shakeable)</h4>
            <pre>{`import { createAuth } from 'rehive/auth'
import { createUserApi } from 'rehive/user'
import { createConversionApi } from 'rehive/extensions/conversion'

const auth = createAuth({
  baseUrl: 'https://api.rehive.com',
  storage: 'local',
})

const user = createUserApi({ auth })
const conversion = createConversionApi({ auth })

await auth.login({ user: 'email@example.com', ... })
await user.userRetrieve()
await conversion.userConversionPairsList({})`}</pre>
          </div>

          <div className="pattern">
            <h4>Convenience wrapper</h4>
            <pre>{`import { RehiveClient } from 'rehive'

const rehive = new RehiveClient({
  baseUrl: 'https://api.rehive.com',
  storage: 'local',
})

await rehive.auth.login({ user: 'email@...', ... })
await rehive.user.userRetrieve()

const conversion = rehive.extensions.conversion()
await conversion.userConversionPairsList({})`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
