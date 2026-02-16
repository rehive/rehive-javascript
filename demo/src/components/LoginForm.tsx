import { useState } from 'react'
import { useAuth } from 'rehive/react'

export function LoginForm() {
  const { authUser, authLoading, authError, login, registerCompany, logout } = useAuth()
  const [credentials, setCredentials] = useState({
    user: '',
    password: '',
    company: ''
  })
  const [companyRegistration, setCompanyRegistration] = useState({
    email: '',
    password: '',
    companyId: '',
    companyName: '',
    firstName: '',
    lastName: ''
  })
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [isRegisteringCompany, setIsRegisteringCompany] = useState(false)

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

  const handleRegisterCompany = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsRegisteringCompany(true)
    try {
      await registerCompany({
        email: companyRegistration.email,
        password: companyRegistration.password,
        first_name: companyRegistration.firstName || undefined,
        last_name: companyRegistration.lastName || undefined,
        company: {
          id: companyRegistration.companyId,
          ...(companyRegistration.companyName ? { name: companyRegistration.companyName } : {})
        }
      })

      setCompanyRegistration({
        email: '',
        password: '',
        companyId: '',
        companyName: '',
        firstName: '',
        lastName: ''
      })
    } catch (error) {
      console.error('Company registration failed:', error)
    } finally {
      setIsRegisteringCompany(false)
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
          <p className="status-info">You can add another session or create a new company account below.</p>
          <button onClick={handleLogout} className="logout-btn-inline">
            Logout Current Session
          </button>
        </div>
      ) : (
        <p>Test login and company registration authentication flows with your Rehive credentials.</p>
      )}

      <form onSubmit={handleLogin} className="login-form">
        <h3>Login</h3>
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

      <form onSubmit={handleRegisterCompany} className="login-form">
        <h3>Register Company Account</h3>
        <div className="form-group">
          <label htmlFor="register-email">Owner Email</label>
          <input
            id="register-email"
            type="email"
            value={companyRegistration.email}
            onChange={(e) => setCompanyRegistration(prev => ({ ...prev, email: e.target.value }))}
            required
            placeholder="owner@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="register-password">Owner Password</label>
          <input
            id="register-password"
            type="password"
            value={companyRegistration.password}
            onChange={(e) => setCompanyRegistration(prev => ({ ...prev, password: e.target.value }))}
            required
            placeholder="••••••••"
          />
        </div>

        <div className="form-group">
          <label htmlFor="register-company-id">Company ID</label>
          <input
            id="register-company-id"
            type="text"
            value={companyRegistration.companyId}
            onChange={(e) => setCompanyRegistration(prev => ({ ...prev, companyId: e.target.value }))}
            required
            placeholder="new-company-id"
          />
        </div>

        <div className="form-group">
          <label htmlFor="register-company-name">Company Name (optional)</label>
          <input
            id="register-company-name"
            type="text"
            value={companyRegistration.companyName}
            onChange={(e) => setCompanyRegistration(prev => ({ ...prev, companyName: e.target.value }))}
            placeholder="New Company"
          />
        </div>

        <div className="form-group">
          <label htmlFor="register-first-name">First Name (optional)</label>
          <input
            id="register-first-name"
            type="text"
            value={companyRegistration.firstName}
            onChange={(e) => setCompanyRegistration(prev => ({ ...prev, firstName: e.target.value }))}
            placeholder="Jane"
          />
        </div>

        <div className="form-group">
          <label htmlFor="register-last-name">Last Name (optional)</label>
          <input
            id="register-last-name"
            type="text"
            value={companyRegistration.lastName}
            onChange={(e) => setCompanyRegistration(prev => ({ ...prev, lastName: e.target.value }))}
            placeholder="Doe"
          />
        </div>

        <button type="submit" disabled={isRegisteringCompany} className="login-btn">
          {isRegisteringCompany ? 'Registering Company...' : 'Register Company'}
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
