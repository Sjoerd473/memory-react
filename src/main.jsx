import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Test from './test.jsx'
import App from './App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
 {/* <Test /> */}
 <App />
  </StrictMode>,
)
