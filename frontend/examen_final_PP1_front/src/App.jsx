import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
<<<<<<< Updated upstream
import JuegosDeMesa from './pages/juegosDeMesa'
import JuegosDeRol from './pages/juegosDeRol'
import Accesorios from './pages/accesorios'
import ProductDetail from './pages/ProductsDetail'
import ProductsEditorial from './components/ProductEditorial'
import ProductsDescription from './components/ProductDescription'
import { Routes, Route } from 'react-router-dom'

=======
import Favoritos from './pages/favoritos'
import Carrito from './pages/carrito'
import { Routes, Route } from 'react-router-dom'
>>>>>>> Stashed changes

function App() {

  return (
<<<<<<< Updated upstream
    <>
    <div className="min-h-screen flex flex-col bg-gray-900 text-zinc-100">
      <Navbar />
      
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/juegosDeMesa' element= {<JuegosDeMesa />} />
        <Route path='/juegosDeRol' element= {<JuegosDeRol />} />
        <Route path='/accesorios' element= {<Accesorios />} />
        <Route path='/juegos/:id' element={<ProductDetail />}>

              <Route index element={<ProductsDescription />} />

              <Route path='editorial' element={<ProductsEditorial />} />

            </Route>
=======
    <div className={`min-h-screen flex flex-col transition-colors ${darkMode ? 'dark bg-gray-900 text-zinc-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/carrito' element={<Carrito />} />
>>>>>>> Stashed changes
      </Routes>

      <Footer />

    </div>
    </>
  )
}

export default App
