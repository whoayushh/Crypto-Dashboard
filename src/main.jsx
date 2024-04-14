import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fontsource/ubuntu";
import { ChakraProvider } from '@chakra-ui/react' 
import { theme } from './theme/index.js';
import "@fontsource/ubuntu/400.css";

import "@fontsource/ubuntu/700.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
    <App />

    </ChakraProvider>
    
  </React.StrictMode>,
)
