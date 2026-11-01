import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { Link } from "react-router-dom"

export default function Carrito({ darkMode }) {
    const { carrito, actualizarCantidad, eliminarDelCarrito, vaciarCarrito, totalPrecio } = useContext(CarritoContext)

    if (carrito.length === 0) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
                <h1 className="text-2xl font-bold mb-2">Tu carrito está vacío 🛒</h1>
                <Link to="/" className="text-emerald-500 hover:underline text-sm font-semibold">
                    Explorar productos
                </Link>
            </div>
        )
    }

    return (
        <main className="flex-1 max-w-4xl mx-auto px-6 pt-10 pb-16 w-full">
            <div className="flex justify-between items-center mb-6 border-b pb-4 border-stone-300 dark:border-zinc-800">
                <h1 className="text-3xl font-black">Carrito de Compras</h1>
                <button 
                    onClick={vaciarCarrito}
                    className="text-xs font-bold text-red-500 hover:underline"
                >
                    Vaciar Carrito
                </button>
            </div>

            <div className="space-y-4">
                {carrito.map((item) => (
                    <div 
                        key={item.id}
                        className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
                            darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-stone-100 border-stone-300'
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <img src={item.thumbnail} alt={item.nombre} className="w-16 h-16 object-cover rounded-lg bg-zinc-950" />
                            <div>
                                <h3 className="font-bold">{item.nombre}</h3>
                                <span className="text-emerald-500 font-extrabold">${item.precio}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button 
                                onClick={() => actualizarCantidad(item.id, -1)}
                                className="px-2.5 py-1 bg-stone-300 dark:bg-zinc-800 rounded font-bold"
                            >
                                -
                            </button>
                            <span className="font-bold">{item.cantidad}</span>
                            <button 
                                onClick={() => actualizarCantidad(item.id, 1)}
                                className="px-2.5 py-1 bg-stone-300 dark:bg-zinc-800 rounded font-bold"
                            >
                                +
                            </button>
                            <button 
                                onClick={() => eliminarDelCarrito(item.id)}
                                className="ml-4 text-red-500 hover:text-red-700 text-sm font-bold"
                            >
                                🗑️
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-stone-300 dark:border-zinc-800 flex justify-between items-center">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-2xl font-black text-emerald-500">${totalPrecio.toFixed(2)}</span>
            </div>
        </main>
    )
}