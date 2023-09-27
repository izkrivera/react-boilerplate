import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'
import './styles.css'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
