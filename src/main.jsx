import React, { StrictMode } from 'react'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
