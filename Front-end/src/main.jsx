import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import {GlobalStyle} from "./Styles/global_styles.js"
import {ThemeProvider} from "styled-components"
import {Theme} from "./Styles/theme.js"
import {Heading} from "./Components/Heading"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme ={Theme}>

    <GlobalStyle/>
    <Heading>
      <h1>Ola</h1>
      </Heading>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
