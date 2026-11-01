import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { FavoritosProvider } from './context/FavoritosContext'
import { CarritoProvider } from './context/CarritoContext'
import './index.css'
import { FavoritosProvider } from './context/FavoritosContext' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CarritoProvider>
        <FavoritosProvider>
          <App />
        </FavoritosProvider>
      </CarritoProvider>
     </BrowserRouter>

  </StrictMode>,
)