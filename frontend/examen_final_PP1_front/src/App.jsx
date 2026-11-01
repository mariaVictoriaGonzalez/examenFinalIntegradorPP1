import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import JuegosDeMesa from './pages/juegosDeMesa'
import JuegosDeRol from './pages/juegosDeRol'
import Accesorios from './pages/accesorios'
import Favoritos from './pages/favoritos'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from "./pages/ProductsDetail"
import ProductsDescription from "./components/ProductDescription"
import ProductsEditorial from "./components/ProductEditorial"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-zinc-100' : 'bg-stone-200/70 text-slate-800'
    }`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode} />} />
        <Route path='/juegosDeMesa' element={<JuegosDeMesa darkMode={darkMode}  />} />
        <Route path='/juegosDeRol' element={<JuegosDeRol darkMode={darkMode}  />} />
        <Route path='/accesorios' element={<Accesorios darkMode={darkMode}  />} />
        <Route path='/favoritos' element={<Favoritos darkMode={darkMode}  />} />
        <Route path='/juegos/:id' element={<ProductDetail darkMode={darkMode}/>}>
          <Route index element={<ProductsDescription darkMode={darkMode}/>} />

              <Route path='editorial' element={<ProductsEditorial darkMode={darkMode}/>} />
              
        </Route>
      </Routes>

      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App