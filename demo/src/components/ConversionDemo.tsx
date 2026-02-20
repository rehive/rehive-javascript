import { useState } from 'react'
import { useAuth } from 'rehive/react'

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
      const conversionApi = rehive.extensions.conversion()
      const response: any = await conversionApi.userConversionPairsList({})
      setConversionData(response.data)
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
        <h4>How it works in v4:</h4>
        <ul>
          <li>✅ <code>rehive.extensions.conversion()</code> creates an authenticated API</li>
          <li>✅ Each API calls <code>auth.getToken()</code> automatically per request</li>
          <li>✅ Token refresh is handled transparently</li>
          <li>✅ Full TypeScript autocomplete on every method</li>
        </ul>
      </div>
    </div>
  )
}
