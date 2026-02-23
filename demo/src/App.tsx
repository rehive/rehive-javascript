import { AuthProvider } from 'rehive/react'
import { LoginForm } from './components/LoginForm'
import { SessionSwitcher } from './components/SessionSwitcher'
import { TOTPFlow } from './components/TOTPFlow'
import { UserDetails } from './components/UserDetails'
import { ConversionDemo } from './components/ConversionDemo'
import { RehiveClientDemo } from './components/RehiveClientDemo'
import { DebugPanel } from './components/DebugPanel'
import './App.css'

function App() {
  return (
    <AuthProvider 
      config={{
        baseUrl: 'https://api.rehive.com',
        storage: 'local',
      }}
    >
      <div className="app">
        <header className="app-header">
          <h1>Rehive SDK Demo</h1>
          <p>Interactive authentication testing and debugging tool</p>
        </header>
        
        <div className="app-content">
          <main className="main-content">
            <LoginForm />
            <SessionSwitcher />
            <TOTPFlow />
            <UserDetails />
            <ConversionDemo />
            <RehiveClientDemo />
          </main>

          <aside className="sidebar">
            <DebugPanel />
          </aside>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App
