import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavoritosContext } from '../context/FavoritosContext'

export default function Favoritos() {
  const { favoritos, quitarFavorito } = useContext(FavoritosContext)

  return (
  <main className="flex-1 max-w-6xl w-full mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Mis <span className="text-emerald-500">Favoritos</span>
        </h1>     
      </div>

      {!favoritos || favoritos.length === 0 ? (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-8 text-center max-w-sm mx-auto">
          <p className="text-3xl mb-2">❤️</p>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            No tenés favoritos guardados
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">
            Explorá los productos para agregar tus preferidos.
          </p>
          <Link
            to="/"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-5 py-2 rounded-lg text-sm transition-colors"
          >
            Ir al Catálogo
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoritos.map((juego) => (
            <div
              key={juego.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <img
                  src={juego.imagen || 'https://via.placeholder.com/300'}
                  alt={juego.nombre}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {juego.nombre}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 line-clamp-2">
                    {juego.descripcion}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 flex items-center justify-between">
                <span className="text-emerald-500 font-bold text-lg">
                  ${juego.precio}
                </span>
                <button
                  onClick={() => quitarFavorito(juego.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                >
                  Quitar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}