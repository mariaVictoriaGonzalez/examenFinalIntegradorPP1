import { createContext, useState, useEffect } from "react"

export const CarritoContext = createContext()

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState(() => {
        const saved = localStorage.getItem("carrito_mazmorra")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("carrito_mazmorra", JSON.stringify(carrito))
    }, [carrito])

    const agregarAlCarrito = (producto, cantidad = 1) => {
        setCarrito((prev) => {
            const existe = prev.find((item) => item.id === producto.id)
            if (existe) {
                return prev.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                )
            }
            return [...prev, { ...producto, cantidad }]
        })
    }

    const actualizarCantidad = (id, cambio) => {
        setCarrito((prev) =>
            prev
                .map((item) => {
                    if (item.id === id) {
                        const nuevaCantidad = item.cantidad + cambio
                        return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : null
                    }
                    return item
                })
                .filter(Boolean)
        )
    }

    const eliminarDelCarrito = (id) => {
        setCarrito((prev) => prev.filter((item) => item.id !== id))
    }

    const vaciarCarrito = () => setCarrito([])

    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const totalPrecio = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                actualizarCantidad,
                eliminarDelCarrito,
                vaciarCarrito,
                totalItems,
                totalPrecio,
            }}
        >
            {children}
        </CarritoContext.Provider>
    )
}
