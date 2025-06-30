import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
      <div className="main-content">
      <App />
      </div>
      <div className="Footer">
        <h2 className="Footer-text">© {new Date().getFullYear()} Sanjay</h2>
        
      </div>
  </StrictMode>,
)
