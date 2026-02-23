import { useState } from 'react'
import { useAuth } from 'rehive/react'
import { createConversionApi } from 'rehive/extensions/conversion'

export function ConversionDemo() {
  const { auth, authUser } = useAuth()
  const isAuthenticated = !!authUser
  const [conversionData, setConversionData] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleListPairs = async () => {
    if (!isAuthenticated) {
      setError('Please log in first')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const conversionApi = createConversionApi({ auth })
      const response = await conversionApi.userConversionPairsList({})
      setConversionData(JSON.stringify(response.data, null, 2))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to list conversion pairs')
      console.error('Conversion API error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="conversion-demo">
        <h3>Conversion Extension Demo</h3>
        <p>Please log in to test the conversion extension with automatic token sync.</p>
      </div>
    )
  }

  return (
    <div className="conversion-demo">
      <h3>Conversion Extension Demo</h3>
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
          <pre>{conversionData}</pre>
        </div>
      )}

      <div className="conversion-info">
        <h4>How it works in v4:</h4>
        <ul>
          <li><code>createConversionApi({'{ auth }'})</code> creates an authenticated API</li>
          <li>Each API calls <code>auth.getToken()</code> automatically per request</li>
          <li>Token refresh is handled transparently</li>
          <li>Full TypeScript autocomplete on every method</li>
        </ul>
      </div>
    </div>
  )
}
