import { createContext, useState } from 'react'

export const CarritoContext = createContext()

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (juego) => {
    const existe = carrito.find((item) => item.id === juego.id)
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === juego.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      )
    } else {
      setCarrito([...carrito, { ...juego, cantidad: 1 }])
    }
  }

  const quitarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id))
  }

  const vaciarCarrito = () => setCarrito([])

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        quitarDelCarrito,
        vaciarCarrito,
        total,
      }}
    >
      {children}
    </CarritoContext.Provider>
  )
}