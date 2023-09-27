import React from 'react'
import propTypes from 'prop-types'

export default function ErrorFallback({ error }) {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

ErrorFallback.propTypes = {
  error: propTypes.error.isRequired,
}
