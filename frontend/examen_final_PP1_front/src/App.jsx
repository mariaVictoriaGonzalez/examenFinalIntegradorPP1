import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-900 text-zinc-100">
      <Navbar />
      <Home />
      <Footer />
    </div>
    </>
  )
}

export default App
