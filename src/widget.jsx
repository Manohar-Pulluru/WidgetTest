import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

window.MyWidget = {
  mount: (props = {}, containerId = 'my-widget') => {
    const container = document.getElementById(containerId)
    if (!container) {
      console.error(`No element found with id "${containerId}"`)
      return
    }
    const shadow = container.attachShadow({ mode: 'open' })
    const shadowRoot = document.createElement('div')
    shadow.appendChild(shadowRoot)
    const root = ReactDOM.createRoot(shadowRoot)
    root.render(<App {...props} />)
  },
  unmount: (containerId = 'my-widget') => {
    const container = document.getElementById(containerId)
    if (container && container.shadowRoot) {
      ReactDOM.createRoot(container.shadowRoot).unmount()
    }
  }
}