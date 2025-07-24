import { useState } from 'react'
import { useAuth } from '@rehive/sdk/react'

export function ConversionDemo() {
  const { rehive, authUser } = useAuth()
  const isAuthenticated = !!authUser
  const [conversionData, setConversionData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)


  const handleListPairs = async () => {
    if (!rehive || !isAuthenticated) {
      setError('Please log in first')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Create a conversion API instance - no imports needed!
      const conversionApi = rehive.extensions.conversion()

      const response = await conversionApi.user.userConversionPairsList({})
      // The actual conversion data is in response.data.data
      setConversionData(response.data.data)
    } catch (err: any) {
      setError(err.message || 'Failed to list conversion pairs')
      console.error('Conversion API error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="conversion-demo">
        <h3>🔄 Conversion Extension Demo</h3>
        <p>Please log in to test the conversion extension with automatic token sync.</p>
      </div>
    )
  }

  return (
    <div className="conversion-demo">
      <h3>🔄 Conversion Extension Demo</h3>
      <p>Test the conversion extension API with automatic token synchronization.</p>
      
      <div className="conversion-actions">
        <button 
          onClick={handleListPairs}
          disabled={loading}
          className="demo-button"
        >
          {loading ? 'Loading...' : 'List Conversion Pairs'}
        </button>
      </div>

      {error && (
        <div className="error-message">
          <strong>Error:</strong> {error}
        </div>
      )}

      {conversionData && (
        <div className="conversion-results">
          <h4>API Response:</h4>
          <pre>{JSON.stringify(conversionData, null, 2)}</pre>
        </div>
      )}

      <div className="conversion-info">
        <h4>Token Sync Demo:</h4>
        <p>
          This component demonstrates how extension APIs automatically stay synchronized 
          with authentication tokens. When your token refreshes (expires after ~1 hour), 
          all registered extension APIs will automatically receive the new token.
        </p>
        <ul>
          <li>✅ <code>rehive.extensions.conversion()</code> creates authenticated instances</li>
          <li>✅ Tokens are automatically synchronized across all APIs</li>
          <li>✅ Token refresh propagates to platform + extension APIs</li>
          <li>✅ No manual token management required</li>
        </ul>
      </div>
    </div>
  )
}