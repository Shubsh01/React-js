import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Practice from './index.jsx'

createRoot(document.getElementById('root')).render(
  <>
     <Practice />
     <h3>Test h3</h3>
     <p>Test para</p>
     <button>Test button</button>
  </>
)
