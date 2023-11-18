import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'

import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import { createTheme } from '@mui/material/styles'
const theme = createTheme({
  palette: {
    primary: {
      main: '#190482',
    },
    secondary: {
      main: '#8E8FFA',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
</ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
