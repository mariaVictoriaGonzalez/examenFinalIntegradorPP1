import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'

export default function Carrito() {
  const { carrito, quitarDelCarrito, vaciarCarrito, total } = useContext(CarritoContext)

  return (
    <main className="flex-1 max-w-6xl w-full mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Mi <span className="text-emerald-500">Carrito</span>
        </h1>
      </div>

      {!carrito || carrito.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 text-center max-w-sm mx-auto">
          <p className="text-3xl mb-2">🛒</p>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Tu carrito está vacío
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">
            Añadí juegos desde el catálogo para realizar tu pedido.
          </p>
          <Link
            to="/"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2 rounded-lg text-sm transition-colors"
          >
            Ir al Catálogo
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden divide-y divide-slate-200 dark:divide-slate-700">
            {carrito.map((juego) => (
              <div key={juego.id} className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={juego.imagen || 'https://via.placeholder.com/100'}
                    alt={juego.nombre}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {juego.nombre}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">
                      Cantidad: {juego.cantidad}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-emerald-500 font-bold text-base">
                    ${juego.precio * juego.cantidad}
                  </span>
                  <button
                    onClick={() => quitarDelCarrito(juego.id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-slate-600 dark:text-slate-400 text-xs">Total a pagar:</span>
              <p className="text-2xl font-bold text-emerald-500">${total}</p>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={vaciarCarrito}
                className="flex-1 sm:flex-none border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Vaciar
              </button>
              <button className="flex-1 sm:flex-none bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-xs font-bold px-5 py-2 rounded-lg transition-colors">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}