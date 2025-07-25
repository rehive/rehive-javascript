import { useState, useEffect } from 'react'
import { useAuth } from '@rehive/sdk/react'
import QRCode from 'qrcode'

export function TOTPFlow() {
  const { authUser, rehive, deleteChallenge } = useAuth()
  const [authenticators, setAuthenticators] = useState<any[]>([])
  const [newAuthenticator, setNewAuthenticator] = useState<any>(null)
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('')
  const [totpCode, setTotpCode] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [isCreating, setIsCreating] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [isVerifyingDevice, setIsVerifyingDevice] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const loadAuthenticators = async () => {
    if (!authUser) return
    
    setIsLoading(true)
    try {
      const response = await rehive.user.authMfaAuthenticatorsList()
      // With our updated templates, data is now directly in response.data
      setAuthenticators(response.data?.results || [])
    } catch (error) {
      console.error('Failed to load authenticators:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const generateQRCode = async (otpauthUrl: string) => {
    try {
      const dataUrl = await QRCode.toDataURL(otpauthUrl, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      })
      setQrCodeDataUrl(dataUrl)
    } catch (error) {
      console.error('Failed to generate QR code:', error)
    }
  }

  const createTOTPAuthenticator = async () => {
    if (!authUser) return
    
    setIsCreating(true)
    try {
      const response = await rehive.user.authMfaAuthenticatorsCreate({
        type: 'totp',
        details: {}
      } as any)
      // With our updated templates, data is now directly in response.data
      setNewAuthenticator(response.data)
      
      // Generate QR code if otpauth_url is available
      if (response.data?.details?.otpauth_url) {
        await generateQRCode(response.data.details.otpauth_url)
      }
      
      await loadAuthenticators()
    } catch (error) {
      console.error('Failed to create TOTP authenticator:', error)
    } finally {
      setIsCreating(false)
    }
  }

  const verifyTOTP = async () => {
    if (!authUser || !totpCode || totpCode.length !== 6) return
    
    setIsVerifying(true)
    try {
      if (!authUser.challenges || authUser.challenges.length === 0) {
        console.error('No challenges found in auth user')
        return
      }
      
      const challengeId = authUser.challenges[0].id
      
      if (!challengeId) {
        console.error('Challenge ID is missing')
        return
      }
      
      await rehive.user.authMfaVerify({
        token: totpCode,
        challenge: challengeId
      })
      
      // Clear the challenge after successful verification
      console.log('MFA verification successful, clearing challenge...')
      await deleteChallenge(challengeId)
      setTotpCode('')
    } catch (error) {
      console.error('TOTP verification failed:', error)
      if (error && typeof error === 'object' && 'data' in error) {
        console.error('Error details:', error.data)
      }
    } finally {
      setIsVerifying(false)
    }
  }

  const verifyNewDevice = async () => {
    if (!newAuthenticator || !verificationCode || verificationCode.length !== 6) return
    
    setIsVerifyingDevice(true)
    try {
      await rehive.user.authMfaVerify({
        token: verificationCode,
        authenticator: newAuthenticator.id
      })
      
      // Refresh authenticators list to show verified status
      await loadAuthenticators()
      setNewAuthenticator(null)
      setVerificationCode('')
      setQrCodeDataUrl('')
    } catch (error) {
      console.error('Device verification failed:', error)
    } finally {
      setIsVerifyingDevice(false)
    }
  }

  const deleteAuthenticator = async (authenticatorId: string) => {
    try {
      await rehive.user.authMfaAuthenticatorsDestroy(authenticatorId)
      await loadAuthenticators()
    } catch (error) {
      console.error('Failed to delete authenticator:', error)
    }
  }

  useEffect(() => {
    if (authUser) {
      loadAuthenticators()
    }
  }, [authUser])

  if (!authUser) {
    return (
      <div className="totp-section">
        <h3>🔐 TOTP Management</h3>
        <p>Please authenticate first to manage TOTP devices.</p>
      </div>
    )
  }

  // Show verification form if user has MFA challenges
  if (authUser.challenges && authUser.challenges.length > 0) {
    return (
      <div className="totp-section">
        <h3>🔐 TOTP Verification Required</h3>
        <p>Enter your 6-digit TOTP code to complete authentication.</p>
        
        <div className="totp-verify-form">
          <div className="form-group">
            <label htmlFor="totp-code">TOTP Code</label>
            <input
              id="totp-code"
              type="text"
              value={totpCode}
              onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="123456"
              maxLength={6}
            />
          </div>
          
          <button 
            onClick={verifyTOTP}
            disabled={isVerifying || totpCode.length !== 6}
            className="verify-btn"
          >
            {isVerifying ? 'Verifying...' : 'Verify TOTP'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="totp-section">
      <h3>🔐 TOTP Management</h3>
      
      <div className="totp-actions">
        <button 
          onClick={createTOTPAuthenticator}
          disabled={isCreating}
          className="create-totp-btn"
        >
          {isCreating ? 'Creating...' : 'Add TOTP Device'}
        </button>
      </div>

      {newAuthenticator && (
        <div className="new-authenticator">
          <h4>📱 New TOTP Device Created</h4>
          <div className="qr-section">
            <p><strong>Scan this QR code with your authenticator app:</strong></p>
            <div className="qr-container">
              {qrCodeDataUrl ? (
                <img 
                  src={qrCodeDataUrl} 
                  alt="TOTP QR Code" 
                  className="qr-code"
                />
              ) : (
                <div className="qr-placeholder">
                  <p>Generating QR code...</p>
                </div>
              )}
            </div>
            <div className="manual-setup">
              <p><strong>Or enter manually:</strong></p>
              <div><strong>Key:</strong> <code>{newAuthenticator.details?.key}</code></div>
              <div><strong>Algorithm:</strong> {newAuthenticator.details?.algorithm}</div>
              <div><strong>Issuer:</strong> {newAuthenticator.details?.issuer}</div>
            </div>
          </div>
          
          {!newAuthenticator.verified && (
            <div className="device-verification">
              <h5>🔐 Verify Your Device</h5>
              <p>Enter a 6-digit code from your authenticator app to complete setup:</p>
              <div className="verification-form">
                <div className="form-group">
                  <label htmlFor="verification-code">Verification Code</label>
                  <input
                    id="verification-code"
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="123456"
                    maxLength={6}
                  />
                </div>
                <button 
                  onClick={verifyNewDevice}
                  disabled={isVerifyingDevice || verificationCode.length !== 6}
                  className="verify-device-btn"
                >
                  {isVerifyingDevice ? 'Verifying...' : 'Verify Device'}
                </button>
              </div>
            </div>
          )}
          
          <button onClick={() => {
            setNewAuthenticator(null)
            setQrCodeDataUrl('')
          }} className="close-btn">
            Close
          </button>
        </div>
      )}

      <div className="authenticators-list">
        <h4>📋 Your TOTP Devices</h4>
        {isLoading ? (
          <p>Loading authenticators...</p>
        ) : authenticators.length === 0 ? (
          <p>No TOTP devices configured.</p>
        ) : (
          <div className="authenticators">
            {authenticators.map((auth) => (
              <div key={auth.id} className="authenticator-item">
                <div className="auth-info">
                  <div><strong>Type:</strong> {auth.type.toUpperCase()}</div>
                  <div><strong>Verified:</strong> {auth.verified ? '✅' : '❌'}</div>
                  <div><strong>Created:</strong> {new Date(auth.created).toLocaleDateString()}</div>
                </div>
                <button 
                  onClick={() => deleteAuthenticator(auth.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}