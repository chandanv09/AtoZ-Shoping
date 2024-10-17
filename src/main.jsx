import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DataContextProvider } from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <DataContextProvider>
    <App />
    </DataContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
