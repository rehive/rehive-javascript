import { useAuth } from 'rehive/react'

export function DebugPanel() {
  const { authUser, authLoading, authError } = useAuth()
  
  const getTimeRemaining = (expires: number) => {
    // Timestamp is already in milliseconds
    const remaining = expires - Date.now()
    if (remaining <= 0) return 'Expired'
    
    const minutes = Math.floor(remaining / (1000 * 60))
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    
    if (days > 0) return `${days}d ${hours % 24}h`
    if (hours > 0) return `${hours}h ${minutes % 60}m`
    return `${minutes}m`
  }

  return (
    <div className="debug-panel">
      <h3>🔧 SDK Debug Info</h3>
      
      <div className="debug-section">
        <h4>Authentication State</h4>
        <div className="debug-item">
          <span className="debug-label">Status:</span>
          <span className={`debug-status ${authUser ? 'authenticated' : 'unauthenticated'}`}>
            {authLoading ? 'Loading...' : authUser ? 'Authenticated' : 'Unauthenticated'}
          </span>
        </div>
        
        {authUser && (
          <>
            <div className="debug-item">
              <span className="debug-label">User ID:</span>
              <code>{authUser.user?.id || 'N/A'}</code>
            </div>
            <div className="debug-item">
              <span className="debug-label">Token (first 5 chars):</span>
              <code className="token-preview">{authUser.token?.substring(0, 5) || 'N/A'}...</code>
            </div>
            <div className="debug-item">
              <span className="debug-label">Token Created:</span>
              <code>{new Date(((authUser as any).created || authUser.expires - 24 * 60 * 60 * 1000)).toLocaleString()}</code>
            </div>
            <div className="debug-item">
              <span className="debug-label">Token Expires:</span>
              <code>{new Date(authUser.expires).toLocaleString()}</code>
            </div>
            <div className="debug-item">
              <span className="debug-label">Challenges:</span>
              <code>{authUser.challenges ? authUser.challenges.length : 0}</code>
            </div>
            {authUser.challenges && authUser.challenges.length > 0 && (
              <div className="debug-item">
                <span className="debug-label">Challenge ID:</span>
                <code className="token-preview">{authUser.challenges[0].id}</code>
              </div>
            )}
          </>
        )}
        
        {authError && (
          <div className="debug-item">
            <span className="debug-label">Last Error:</span>
            <div className="error-details">
              <div><strong>Message:</strong> {authError.message}</div>
              {'status' in authError && <div><strong>Status:</strong> {String(authError.status)}</div>}
              {'code' in authError && <div><strong>Code:</strong> {String(authError.code)}</div>}
            </div>
          </div>
        )}
      </div>

      <div className="debug-section">
        <h4>SDK Configuration</h4>
        <div className="debug-item">
          <span className="debug-label">Base URL:</span>
          <code>https://api.rehive.com</code>
        </div>
        <div className="debug-item">
          <span className="debug-label">Storage:</span>
          <code>WebStorageAdapter</code>
        </div>
        <div className="debug-item">
          <span className="debug-label">Cross-tab Sync:</span>
          <code>disabled</code>
        </div>
        <div className="debug-item">
          <span className="debug-label">Auto Refresh:</span>
          <code>enabled (30s buffer)</code>
        </div>
      </div>
    </div>
  )
}