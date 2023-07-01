import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TransectionProvider } from './Context/TansectionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <TransectionProvider>
   <App />
   </TransectionProvider>
  </React.StrictMode>
  
)
