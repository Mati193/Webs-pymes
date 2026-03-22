import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  // Esta línea es la que falta
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)