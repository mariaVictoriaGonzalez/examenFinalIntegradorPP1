import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< Updated upstream

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
=======
import { BrowserRouter } from 'react-router-dom'
import { FavoritosProvider } from './context/FavoritosContext' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritosProvider>
        <App />
      </FavoritosProvider>
    </BrowserRouter>
>>>>>>> Stashed changes
  </StrictMode>,
)