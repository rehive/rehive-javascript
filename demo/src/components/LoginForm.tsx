import { useState } from 'react'
import { useAuth } from 'rehive/react'

export function LoginForm() {
  const { authUser, authLoading, authError, login, logout } = useAuth()
  const [credentials, setCredentials] = useState({
    user: '',
    password: '',
    company: ''
  })
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggingIn(true)
    try {
      await login(credentials)
      // Clear form after successful login
      setCredentials({ user: '', password: '', company: '' })
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  if (authLoading) {
    return (
      <div className="loading-state">
        <div className="loading-spinner"></div>
        <p>Initializing SDK...</p>
      </div>
    )
  }

  return (
    <div className="login-section">
      <h2>Rehive SDK Authentication</h2>

      {authUser ? (
        <div className="auth-status">
          <p className="status-success">✓ Currently authenticated as {authUser.user.email || authUser.user.id}</p>
          <p className="status-info">You can add another session by logging in with different credentials below.</p>
          <button onClick={handleLogout} className="logout-btn-inline">
            Logout Current Session
          </button>
        </div>
      ) : (
        <p>Test the SDK authentication flow with your Rehive credentials.</p>
      )}

      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="user">Email or Username</label>
          <input
            id="user"
            type="text"
            value={credentials.user}
            onChange={(e) => setCredentials(prev => ({ ...prev, user: e.target.value }))}
            required
            placeholder="user@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
            required
            placeholder="••••••••"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company ID</label>
          <input
            id="company"
            type="text"
            value={credentials.company}
            onChange={(e) => setCredentials(prev => ({ ...prev, company: e.target.value }))}
            required
            placeholder="your-company-id"
          />
        </div>

        <button type="submit" disabled={isLoggingIn} className="login-btn">
          {isLoggingIn ? 'Authenticating...' : authUser ? 'Add Another Session' : 'Authenticate'}
        </button>
      </form>

      {authError && (
        <div className="error-message">
          <h4>Authentication Failed</h4>
          <p><strong>Error:</strong> {authError.message}</p>
          {'status' in authError && <p><strong>HTTP Status:</strong> {String(authError.status)}</p>}
          {'code' in authError && <p><strong>Error Code:</strong> {String(authError.code)}</p>}
        </div>
      )}

    </div>
  )
}