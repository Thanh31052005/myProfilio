import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h1>Xin chào đây là lần đầu</h1>
    </div>
    <App></App>
  </StrictMode>,
)
