import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import New_bar from './assets/Componets/New-bar/New_bar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <New_bar />
  </StrictMode>,
)
