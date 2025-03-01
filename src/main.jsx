import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppA from './AppA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AppA />
  </StrictMode>,
)
