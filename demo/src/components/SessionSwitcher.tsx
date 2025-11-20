import { useState } from 'react'
import { useAuth } from 'rehive/react'
import type { AuthSession } from 'rehive'

export function SessionSwitcher() {
  const { authUser, getSessions, switchToSession, clearAllSessions, logoutAll } = useAuth()
  const [isSwitching, setIsSwitching] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sessions = getSessions()

  // Group sessions by company
  const sessionsByCompany = sessions.reduce((acc, session) => {
    const companyId = session.company || 'unknown'
    if (!acc[companyId]) {
      acc[companyId] = []
    }
    acc[companyId].push(session)
    return acc
  }, {} as Record<string, AuthSession[]>)

  const handleSwitch = async (userId: string, company?: string) => {
    setIsSwitching(true)
    setError(null)
    try {
      await switchToSession(userId, company)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to switch session')
    } finally {
      setIsSwitching(false)
    }
  }

  const handleClearAll = async () => {
    if (!confirm('Clear all sessions locally? This will not invalidate tokens on the server.')) {
      return
    }
    setIsSwitching(true)
    setError(null)
    try {
      await clearAllSessions()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to clear sessions')
    } finally {
      setIsSwitching(false)
    }
  }

  const handleLogoutAll = async () => {
    if (!confirm('Logout all sessions? This will invalidate all tokens on the server.')) {
      return
    }
    setIsSwitching(true)
    setError(null)
    try {
      await logoutAll()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to logout all sessions')
    } finally {
      setIsSwitching(false)
    }
  }

  if (sessions.length === 0) {
    return null
  }

  if (sessions.length === 1) {
    return null
  }

  return (
    <div className="session-switcher">
      <h3>Available Sessions</h3>
      <p className="session-info">
        You have {sessions.length} active session{sessions.length > 1 ? 's' : ''} across {Object.keys(sessionsByCompany).length} compan{Object.keys(sessionsByCompany).length > 1 ? 'ies' : 'y'}
      </p>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      <div className="sessions-list">
        {Object.entries(sessionsByCompany).map(([companyId, companySessions]) => (
          <div key={companyId} className="company-group">
            <h4 className="company-name">{companyId}</h4>
            <div className="company-sessions">
              {companySessions.map((session) => {
                const isActive = authUser?.user.id === session.user.id && authUser?.company === session.company
                const userName = session.user.email || session.user.username || session.user.id

                return (
                  <button
                    key={`${session.user.id}-${session.company}`}
                    className={`session-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleSwitch(session.user.id, session.company)}
                    disabled={isActive || isSwitching}
                  >
                    <div className="session-user">
                      {isActive && <span className="active-indicator">✓</span>}
                      <span className="user-name">{userName}</span>
                    </div>
                    <div className="session-meta">
                      <span className="user-id">ID: {session.user.id.substring(0, 8)}...</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="session-actions">
        <button
          onClick={handleClearAll}
          disabled={isSwitching}
          className="clear-all-btn"
        >
          Clear All Sessions (Local)
        </button>
        <button
          onClick={handleLogoutAll}
          disabled={isSwitching}
          className="logout-all-btn"
        >
          Logout All Sessions (Server)
        </button>
      </div>

      {isSwitching && (
        <div className="switching-overlay">
          <div className="loading-spinner"></div>
          <p>Switching session...</p>
        </div>
      )}
    </div>
  )
}
