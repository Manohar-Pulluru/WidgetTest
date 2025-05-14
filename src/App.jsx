import React from 'react'
import './widget.css' // Import widget-specific styles

function App({ name = 'Guest' }) {
  return (
    <div className="widget-container">
      <h1>Hello, {name}!</h1>
      <p>This is an embeddable widget built with React and Vite.</p>
    </div>
  )
}

export default App