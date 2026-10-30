import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
<<<<<<< Updated upstream
=======
import Products from './pages/products'
import JuegosDeMesa from './pages/juegosDeMesa'
import JuegosDeRol from './pages/juegosDeRol'
import Accesorios from './pages/accesorios'
import Favoritos from './pages/favoritos'
import { Routes, Route } from 'react-router-dom'
>>>>>>> Stashed changes

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
<<<<<<< Updated upstream
    <>
    <div className="min-h-screen flex flex-col bg-gray-900 text-zinc-100">
      <Navbar />
      <Home />
=======
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-zinc-100' : 'bg-white text-slate-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/juegosDeMesa' element={<JuegosDeMesa />} />
        <Route path='/juegosDeRol' element={<JuegosDeRol />} />
        <Route path='/accesorios' element={<Accesorios />} />
        <Route path='/favoritos' element={<Favoritos />} />
      </Routes>

>>>>>>> Stashed changes
      <Footer />
    </div>
  )
}

export default App