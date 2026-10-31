import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import JuegosDeMesa from './pages/juegosDeMesa'
import JuegosDeRol from './pages/juegosDeRol'
import Accesorios from './pages/accesorios'
import ProductDetail from './pages/ProductsDetail'
import ProductsEditorial from './components/ProductEditorial'
import ProductsDescription from './components/ProductDescription'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
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
      </Routes>

      <Footer />

    </div>
    </>
  )
}

export default App
