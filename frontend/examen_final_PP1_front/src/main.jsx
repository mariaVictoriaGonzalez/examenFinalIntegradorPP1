import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< Updated upstream
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
=======
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { FavoritosProvider } from './context/FavoritosContext'
import { CarritoProvider } from './context/CarritoContext'
import './index.css'
>>>>>>> Stashed changes

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< Updated upstream
        <App />
=======
      <CarritoProvider>
        <FavoritosProvider>
          <App />
        </FavoritosProvider>
      </CarritoProvider>
>>>>>>> Stashed changes
    </BrowserRouter>
  </StrictMode>,
)
