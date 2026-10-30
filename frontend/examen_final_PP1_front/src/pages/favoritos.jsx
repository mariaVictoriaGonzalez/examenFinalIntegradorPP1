import { useContext } from 'react'
import { FavoritosContext } from '../context/FavoritosContext'

export default function Favoritos() {
    const { favoritos, toggleFavorito } = useContext(FavoritosContext)

    return (
        <main className="flex-1 p-8 text-center">
            <h1 className="text-3xl font-bold text-blue-500 mb-6">Favoritos</h1>

            {favoritos.length === 0 ? (
                <p className="text-gray-400">No tienes productos agregados a favoritos.</p>
            ) : (
                <div className="flex flex-wrap justify-center gap-4">
                    {favoritos.map((prod) => (
                        <div key={prod.id} className="border border-blue-500 p-4 rounded bg-slate-800 text-white w-48">
                            <h3 className="font-bold">{prod.nombre}</h3>
                            <button 
                                onClick={() => toggleFavorito(prod)}
                                className="mt-2 text-xs text-red-400 underline cursor-pointer"
                            >
                                Quitar
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
}