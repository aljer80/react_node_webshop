import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './assets/css/index.css'

/**
 * Use ReactDOM.createRoot for concurrent mode rendering.
 * @param {HTMLElement} rootElement - The root element to render the app into.
 */
ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);