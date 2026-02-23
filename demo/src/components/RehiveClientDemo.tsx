import { useState } from 'react'
import { useAuth } from 'rehive/react'
import { createAuth, createUserApi, createAdminApi, type Auth } from 'rehive'
import {
  createConversionApi,
  type PaginatedUserConversionPairListResponse,
} from 'rehive/extensions/conversion'
import type {
  ExtendedUserInfoResponse,
  PaginatedAccountListResponse,
} from 'rehive/user'
import type { PaginatedAdminUserInfoListResponse } from 'rehive/admin'

interface DemoResults {
  userProfile?: ExtendedUserInfoResponse;
  accounts?: PaginatedAccountListResponse;
  conversion?: PaginatedUserConversionPairListResponse;
  serverUserProfile?: ExtendedUserInfoResponse;
  serverAdminUsers?: PaginatedAdminUserInfoListResponse;
}

export function RehiveClientDemo() {
  const { auth, authUser } = useAuth()
  const [serverAuth, setServerAuth] = useState<Auth | null>(null)
  const [serverToken, setServerToken] = useState('')
  const [demoResults, setDemoResults] = useState<DemoResults>({})

  const testClientSideAPIs = async () => {
    if (!authUser) {
      alert('Please login first to test client-side APIs')
      return
    }

    try {
      const user = createUserApi({ auth })
      const userProfile = await user.userRetrieve()
      const accounts = await user.accountsList()

      const conversion = createConversionApi({ auth })
      const conversionPairs = await conversion.userConversionPairsList({})

      setDemoResults(prev => ({
        ...prev,
        userProfile,
        accounts,
        conversion: conversionPairs,
      }))
    } catch (error) {
      console.error('Client-side API test failed:', error)
      alert(`API test failed: ${error instanceof Error ? error.message : error}`)
    }
  }

  const initializeServerClient = () => {
    if (!serverToken.trim()) {
      alert('Please enter a server token')
      return
    }

    try {
      const serverAuthInstance = createAuth({
        baseUrl: 'https://api.rehive.com',
        token: serverToken.trim(),
      })

      setServerAuth(serverAuthInstance)
      alert('Server client initialized successfully!')
    } catch (error) {
      console.error('Server client initialization failed:', error)
      alert(`Initialization failed: ${error instanceof Error ? error.message : error}`)
    }
  }

  const testServerSideAPIs = async () => {
    if (!serverAuth) {
      alert('Please initialize server client first')
      return
    }

    try {
      const admin = createAdminApi({ auth: serverAuth })
      const user = createUserApi({ auth: serverAuth })
      const serverAdminUsers = await admin.usersList()
      const serverUserProfile = await user.userRetrieve()

      setDemoResults(prev => ({
        ...prev,
        serverUserProfile,
        serverAdminUsers,
      }))
    } catch (error) {
      console.error('Server-side API test failed:', error)
      alert(`Server API test failed: ${error instanceof Error ? error.message : error}`)
    }
  }

  return (
    <div className="rehive-client-demo">
      <h2>Modular API Demo</h2>
      <p>Test both client-side (authenticated) and server-side (permanent token) usage patterns.</p>

      <div className="demo-section">
        <h3>Client-side APIs (Authenticated User)</h3>
        <p>Test direct API access after authentication:</p>

        <div className="api-examples">
          <code>const user = createUserApi({'{ auth }'})</code><br/>
          <code>await user.userRetrieve()</code><br/>
          <code>await user.accountsList()</code><br/>
          <code>const conversion = createConversionApi({'{ auth }'})</code><br/>
          <code>await conversion.userConversionPairsList({})</code>
        </div>

        <button
          onClick={testClientSideAPIs}
          disabled={!authUser}
          className="test-btn"
        >
          {authUser ? 'Test Client-side APIs' : 'Login Required'}
        </button>

        {demoResults.userProfile && (
          <div className="results">
            <h4>Client-side Results:</h4>
            <div className="result-item">
              <strong>User Profile:</strong>
              <pre>{JSON.stringify(demoResults.userProfile.data, null, 2)}</pre>
            </div>
            {demoResults.accounts && (
              <div className="result-item">
                <strong>User Accounts:</strong>
                <pre>{JSON.stringify(demoResults.accounts.data?.results?.slice(0, 2), null, 2)}</pre>
              </div>
            )}
            {demoResults.conversion && (
              <div className="result-item">
                <strong>Conversion Pairs:</strong>
                <pre>{JSON.stringify(demoResults.conversion.data?.results?.slice(0, 2), null, 2)}</pre>
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

          {serverAuth && (
            <div className="server-status">
              Server client ready - no authentication flows needed!
            </div>
          )}
        </div>

        <div className="api-examples">
          <code>{`const auth = createAuth({ token: 'admin-token' })`}</code><br/>
          <code>{`const admin = createAdminApi({ auth })`}</code><br/>
          <code>await admin.usersList()</code>
        </div>

        <button
          onClick={testServerSideAPIs}
          disabled={!serverAuth}
          className="test-btn"
        >
          {serverAuth ? 'Test Server-side APIs' : 'Initialize Server Client First'}
        </button>

        {demoResults.serverUserProfile && (
          <div className="results">
            <h4>Server-side Results:</h4>
            <div className="result-item">
              <strong>Admin Users List:</strong>
              <pre>{JSON.stringify(demoResults.serverAdminUsers?.data?.results?.slice(0, 2), null, 2)}</pre>
            </div>
            <div className="result-item">
              <strong>User Profile (with admin token):</strong>
              <pre>{JSON.stringify(demoResults.serverUserProfile.data, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>

      <div className="demo-section">
        <h3>v4 Modular Usage</h3>

        <div className="comparison">
          <div className="pattern">
            <h4>Modular (tree-shakeable)</h4>
            <pre>{`import { createAuth } from 'rehive/auth'
import { createUserApi, type ExtendedUserInfoResponse } from 'rehive/user'
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
        </div>
      </div>
    </div>
  )
}
