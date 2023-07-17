import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import {GlobalStyle} from "./Styles/global_styles.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
