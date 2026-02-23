import { useState } from 'react'
import { useAuth } from 'rehive/react'
import { createUserApi } from 'rehive/user'
import type { ExtendedUserInfoResponse } from 'rehive/user'

export function UserDetails() {
  const { authUser, auth } = useAuth()
  const [userDetails, setUserDetails] = useState<ExtendedUserInfoResponse['data'] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUserDetails = async () => {
    if (!authUser) return

    setIsLoading(true)
    setError(null)

    try {
      const user = createUserApi({ auth })
      const response = await user.userRetrieve()
      setUserDetails(response.data)
    } catch (err) {
      console.error('Failed to fetch user details:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch user details')
    } finally {
      setIsLoading(false)
    }
  }

  if (!authUser) {
    return (
      <div className="totp-section">
        <h3>User Details</h3>
        <p>Please authenticate first to query user details.</p>
      </div>
    )
  }

  return (
    <div className="totp-section">
      <h3>User Details</h3>
      <p>Query detailed user information from the Rehive platform.</p>

      <div className="totp-actions">
        <button
          onClick={fetchUserDetails}
          disabled={isLoading}
          className="create-totp-btn"
        >
          {isLoading ? 'Loading...' : 'Fetch User Details'}
        </button>
      </div>

      {error && (
        <div className="error-message">
          <p><strong>Error:</strong> {error}</p>
        </div>
      )}

      {userDetails && (
        <div className="authenticators-list">
          <h4>User Information</h4>
          <div className="authenticators">
            <div className="authenticator-item">
              <div className="auth-info">
                <div><strong>ID:</strong> {userDetails.id}</div>
                <div><strong>Email:</strong> {userDetails.email}</div>
                <div><strong>Username:</strong> {userDetails.username || 'Not set'}</div>
                <div><strong>First Name:</strong> {userDetails.first_name || 'Not set'}</div>
                <div><strong>Last Name:</strong> {userDetails.last_name || 'Not set'}</div>
                <div><strong>Mobile:</strong> {userDetails.mobile || 'Not set'}</div>
                <div><strong>Status:</strong> <span className={`status-${userDetails.status?.toLowerCase()}`}>{userDetails.status || 'Unknown'}</span></div>
                <div><strong>Verified:</strong> {userDetails.verified ? 'Yes' : 'No'}</div>
                <div><strong>Created:</strong> {new Date(userDetails.created).toLocaleString()}</div>
                <div><strong>Updated:</strong> {new Date(userDetails.updated).toLocaleString()}</div>
                {userDetails.timezone && <div><strong>Timezone:</strong> {userDetails.timezone}</div>}
                {userDetails.language && <div><strong>Language:</strong> {userDetails.language}</div>}
                {userDetails.nationality && <div><strong>Nationality:</strong> {userDetails.nationality}</div>}
                {userDetails.birth_date && <div><strong>Birth Date:</strong> {new Date(userDetails.birth_date).toLocaleDateString()}</div>}
              </div>
            </div>

            {userDetails.groups && userDetails.groups.length > 0 && (
              <div className="authenticator-item">
                <div className="auth-info">
                  <div><strong>Groups:</strong></div>
                  {userDetails.groups.map((group) => (
                    <div key={group.name}>- {group.name} {group.label && `(${group.label})`}</div>
                  ))}
                </div>
              </div>
            )}

            {userDetails.permission_groups && userDetails.permission_groups.length > 0 && (
              <div className="authenticator-item">
                <div className="auth-info">
                  <div><strong>Permission Groups:</strong></div>
                  {userDetails.permission_groups.map((group) => (
                    <div key={group.name}>- {group.name} {group.label && `(${group.label})`}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
