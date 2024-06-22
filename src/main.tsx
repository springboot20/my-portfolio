import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TypeWriterProvider } from './context/TypeWriterContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TypeWriterProvider>
        <ToastContainer />
        <App />
      </TypeWriterProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
