import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Eurogames({ darkMode }){
    const [juegos, setJuegos] = useState([])
    const [loading, setLoading] = useState(true)

useEffect(() => {
    const fetchAndFilterJuegos = async () => {
        try {
            const response = await fetch("https://examen-final-pp1-backend-a3950e7e.fastapicloud.dev/juegos/");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const listaJuegos = data.items || data;

            // Filtramos en JS comparando el ID 7
            const juegosFamiliares = listaJuegos.filter(
                (juego) => juego.categoria_id === 1 || juego.id_categoria === 1 || juego.categoria?.id === 1
            );

            setJuegos(juegosFamiliares);
        } catch (error) {
            console.error("Error al cargar juegos:", error);
            setJuegos([]);
        } finally {
            setLoading(false);
        }
    };

    fetchAndFilterJuegos();
}, []);

    if (loading) {
        return (
            <div className="flex-1 flex justify-center items-center py-32">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-emerald-600 dark:border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    <h1 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">Explorando las profundidades...</h1>
                </div>
            </div>
        )
    }

    return (
        <main className="flex-1 pb-16">
            <section className="max-w-7xl mx-auto px-6 pt-10">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-300/60 dark:border-zinc-800">
                    <div>
                        <h1 className="text-3xl font-black tracking-wide">Eurogames</h1>
                        <p className={`text-sm mt-1 ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                            Manuales, sistemas de juego y aventuras para tus partidas
                        </p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-md border ${
                        darkMode 
                            ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/40' 
                            : 'text-emerald-800 bg-emerald-100 border-emerald-300'
                    }`}>
                        {juegos.length} Productos
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {juegos.map((juego) => (
                        <div 
                            key={juego.id} 
                            className={`group flex flex-col border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                                darkMode 
                                    ? 'bg-zinc-900/90 border-zinc-800 hover:border-emerald-500/50 hover:shadow-emerald-950/40' 
                                    : 'bg-stone-100/90 border-stone-300/80 hover:border-emerald-500/60 hover:shadow-stone-400/50'
                            }`}
                        >
                            <div className="relative aspect-square overflow-hidden bg-stone-300/50 dark:bg-zinc-950">
                                <img 
                                    src={juego.thumbnail} 
                                    alt={juego.nombre} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-bold backdrop-blur-md ${
                                    juego.stock > 0 
                                        ? darkMode
                                            ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                                            : 'bg-emerald-100/90 text-emerald-800 border border-emerald-300'
                                        : darkMode
                                            ? 'bg-red-950/80 text-red-400 border border-red-500/30'
                                            : 'bg-red-100/90 text-red-800 border border-red-300'
                                }`}>
                                    {juego.stock > 0 ? `Stock: ${juego.stock}` : 'Agotado'}
                                </span>
                            </div>

                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                                        {juego.nombre}
                                    </h3>
                                    <p className={`text-xs mt-1 line-clamp-2 ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                                        {juego.descripcion}
                                    </p>
                                </div>

                                <div className={`mt-4 pt-4 border-t flex items-center justify-between ${
                                    darkMode ? 'border-zinc-800/80' : 'border-stone-300/70'
                                }`}>
                                    <div>
                                        <span className={`text-xs uppercase tracking-wider block ${darkMode ? 'text-zinc-500' : 'text-slate-500'}`}>
                                            Precio
                                        </span>
                                        <span className="text-xl font-black text-emerald-700 dark:text-emerald-400">
                                            ${juego.precio}
                                        </span>
                                    </div>

                                    <Link
                                        to={`/juegos/${juego.id}`}
                                        className={`px-4 py-2 rounded-xl text-xs font-bold border active:scale-95 transition-all duration-200 shadow-sm ${
                                            darkMode 
                                                ? 'bg-zinc-800 hover:bg-emerald-600 hover:text-slate-950 text-zinc-200 border-zinc-700 hover:border-emerald-500' 
                                                : 'bg-stone-200 hover:bg-emerald-600 hover:text-white text-slate-800 border-stone-300 hover:border-emerald-600'
                                        }`}
                                    >
                                        Ver producto
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}