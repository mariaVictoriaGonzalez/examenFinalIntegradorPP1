import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Products from './pages/products'
import JuegosDeMesa from './pages/juegosDeMesa'
import JuegosDeRol from './pages/juegosDeRol'
import Accesorios from './pages/accesorios'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-900 text-zinc-100">
      <Navbar />
      
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/products' element= {<Products />} />
        <Route path='/juegosDeMesa' element= {<JuegosDeMesa />} />
        <Route path='/juegosDeRol' element= {<JuegosDeRol />} />
        <Route path='/accesorios' element= {<Accesorios />} />
      </Routes>

      <Footer />

    </div>
    </>
  )
}

export default App
