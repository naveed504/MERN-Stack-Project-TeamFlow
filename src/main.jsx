import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './global_style_index.css'
import App from './App.jsx'

import { AbilityContext } from './casl/AbilityContext.js'
import {ability} from './casl/ability.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <AbilityContext.Provider value={ability}>
    <App />
    </AbilityContext.Provider>
     </BrowserRouter>
  </StrictMode>,
)
