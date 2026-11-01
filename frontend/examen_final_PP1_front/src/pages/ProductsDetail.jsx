import { useState, useEffect, useContext } from "react"
import { Outlet, useParams, Link, NavLink } from "react-router-dom"
import { FavoritosContext } from "../context/FavoritosContext"
import { CarritoContext } from "../context/CarritoContext"

// Array de datos falsos de ejemplo para la simulación
const MOCK_JUEGOS = [
    {
        id: 1,
        nombre: "Catan",
        stock: 15,
        precio: 45.99,
        edad_minima: 10,
        thumbnail: "https://acdn-us.mitiendanube.com/stores/907/020/products/catan02-bfbfc6412744ef319317823089500675-1024-1024.webp",
        descripcion: "Un juego de estrategia donde los jugadores intentan ser la fuerza dominante en la isla de Catan construyendo asentamientos, ciudades y caminos.",
        jugadores_min: 3,
        jugadores_max: 4,
        activo: true,
        editorial_id: 1,
        categoria_id: 1,
    },
    {
        id: 2,
        nombre: "Carcassonne",
        stock: 20,
        precio: 35.50,
        edad_minima: 7,
        thumbnail: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?auto=format&fit=crop&w=800&q=80",
        descripcion: "Juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne.",
        jugadores_min: 2,
        jugadores_max: 5,
        activo: true,
        editorial_id: 2,
        categoria_id: 1,
    },
    {
        id: 3,
        nombre: "Dixit",
        stock: 8,
        precio: 32.00,
        edad_minima: 8,
        thumbnail: "https://images.unsplash.com/photo-1563941433-b6a094653ed2?auto=format&fit=crop&w=800&q=80",
        descripcion: "Un juego ilustrado de deducción creativa donde la imaginación te abre las puertas a historias sorprendentes.",
        jugadores_min: 3,
        jugadores_max: 6,
        activo: true,
        editorial_id: 3,
        categoria_id: 2,
    },
    {
        id: 4,
        nombre: "Virus!",
        stock: 30,
        precio: 15.00,
        edad_minima: 8,
        thumbnail: "https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&w=800&q=80",
        descripcion: "Juego de cartas rápido y divertido donde debes erradicar los virus e infectar los órganos de tus rivales.",
        jugadores_min: 2,
        jugadores_max: 6,
        activo: true,
        editorial_id: 4,
        categoria_id: 3,
    },
    {
        id: 5,
        nombre: "Codenames (Código Secreto)",
        stock: 12,
        precio: 25.00,
        edad_minima: 14,
        thumbnail: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?auto=format&fit=crop&w=800&q=80",
        descripcion: "Dos jefes de espías conocen la identidad secreta de cada agente. Sus compinches sabrán de ellos solo por sus códigos secretos.",
        jugadores_min: 2,
        jugadores_max: 8,
        activo: true,
        editorial_id: 1,
        categoria_id: 2,
    },
    {
        id: 6,
        nombre: "Ticket to Ride (Aventureros al Tren)",
        stock: 5,
        precio: 49.99,
        edad_minima: 8,
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        descripcion: "Una aventura en tren a lo largo y ancho de América del Norte donde los jugadores conectan ciudades mediante rutas ferroviarias.",
        jugadores_min: 2,
        jugadores_max: 5,
        activo: true,
        editorial_id: 2,
        categoria_id: 1,
    },
    {
        id: 7,
        nombre: "Exploding Kittens",
        stock: 0,
        precio: 22.50,
        edad_minima: 7,
        thumbnail: null,
        descripcion: "Una versión gatuna de la ruleta rusa con un gran componente estratégico de cartas.",
        jugadores_min: 2,
        jugadores_max: 5,
        activo: false,
        editorial_id: 5,
        categoria_id: 3,
    }
]

export default function ProductDetail({ darkMode }) {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { agregarAlCarrito } = useContext(CarritoContext)

    // Contexto de Favoritos (si tu contexto expone toggleFavorito o similares, puedes invocarlo)
    const { favoritos, setFavoritos } = useContext(FavoritosContext) || {}

    /* useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
                setProduct(data)
                setLoading(false)
            });
    }, [id]) */

    useEffect(() => {
        const fetchJuegoMock = new Promise((resolve) => {
            setTimeout(() => {
                const juegoEncontrado = MOCK_JUEGOS.find(juego => juego.id === Number(id))
                resolve(juegoEncontrado)
            }, 500)
        })

        fetchJuegoMock.then((data) => {
            setProduct(data)
            setLoading(false)
        })
    }, [id])

    // Verificar si el producto ya está en favoritos
    const esFavorito = favoritos?.some(item => item.id === product?.id)

    const handleToggleFavorito = () => {
        if (!setFavoritos) return
        if (esFavorito) {
            setFavoritos(favoritos.filter(item => item.id !== product.id))
        } else {
            setFavoritos([...favoritos, product])
        }
    }

    const handleAgregarCarrito = () => {
        if (product && product.stock > 0) {
            agregarAlCarrito(product, 1)
        }   
    }

    if (loading) {
        return (
            <div className="flex-1 flex justify-center items-center py-32">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-emerald-600 dark:border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    <h1 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 tracking-wide">
                        Explorando las profundidades...
                    </h1>
                </div>
            </div>
        )
    }

    if (!product) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center py-20 px-4">
                <h1 className="text-3xl font-black text-red-500 mb-4">Juego no encontrado</h1>
                <Link to="/" className="text-emerald-600 dark:text-emerald-400 hover:underline text-sm font-semibold">
                    ← Volver a Inicio
                </Link>
            </div>
        )
    }

    return (
        <main className="flex-1 pb-16">
            <div className="max-w-4xl mx-auto pt-8 px-6 w-full">
                <Link 
                    to="/" 
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors mb-6 ${
                        darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-700 hover:text-emerald-800'
                    }`}
                >
                    ← Volver a Inicio
                </Link>

                {/* TARJETA PRINCIPAL DEL PRODUCTO */}
                <div className={`p-6 md:p-8 rounded-2xl border flex flex-col md:flex-row gap-8 items-center transition-all ${
                    darkMode 
                        ? 'bg-zinc-900/90 border-zinc-800 shadow-xl shadow-black/40 text-zinc-100' 
                        : 'bg-stone-100/90 border-stone-300/80 shadow-md text-slate-900'
                }`}>
                    <div className="relative w-full md:w-64 h-64 shrink-0 rounded-xl overflow-hidden bg-stone-300/50 dark:bg-zinc-950 border border-stone-300 dark:border-zinc-800">
                        <img 
                            src={product.thumbnail || 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=800&q=80'} 
                            alt={product.nombre} 
                            className="w-full h-full object-cover" 
                        />
                        <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-bold backdrop-blur-md ${
                            product.stock > 0 
                                ? darkMode
                                    ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                                    : 'bg-emerald-100/90 text-emerald-800 border border-emerald-300'
                                : darkMode
                                    ? 'bg-red-950/80 text-red-400 border border-red-500/30'
                                    : 'bg-red-100/90 text-red-800 border border-red-300'
                        }`}>
                            {product.stock > 0 ? `Stock: ${product.stock}` : 'Agotado'}
                        </span>
                    </div>

                    <div className="flex-1 flex flex-col justify-between w-full">
                        <div>
                            <h1 className="text-3xl font-black tracking-tight">{product.nombre}</h1>
                            <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-2">
                                ${product.precio}
                            </p>

                            <div className={`mt-4 space-y-1.5 text-sm font-medium ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                                <p> Categoría ID: <span className="font-semibold text-zinc-200 dark:text-zinc-300">{product.categoria_id}</span></p>
                                <p> Jugadores: <span className="font-semibold text-zinc-200 dark:text-zinc-300">{product.jugadores_min} - {product.jugadores_max}</span></p>
                                <p> Edad mínima: <span className="font-semibold text-zinc-200 dark:text-zinc-300">+{product.edad_minima} años</span></p>
                            </div>
                        </div>

                        {/* BOTONES DE ACCIÓN: FAVORITOS Y CARRITO */}
                        <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-stone-300/70 dark:border-zinc-800">
                            <button
                                onClick={handleToggleFavorito}
                                title={esFavorito ? "Quitar de Favoritos" : "Agregar a Favoritos"}
                                className={`p-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border transition-all duration-200 active:scale-95 ${
                                    esFavorito
                                        ? 'bg-red-500/10 text-red-500 border-red-500/30 hover:bg-red-500/20'
                                        : darkMode
                                            ? 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700 hover:text-white'
                                            : 'bg-stone-200 text-slate-700 border-stone-300 hover:bg-stone-300'
                                }`}
                            >
                                <span className="text-base">{esFavorito ? '❤️' : '🤍'}</span>
                                <span className="hidden sm:inline">{esFavorito ? 'En Favoritos' : 'Favoritos'}</span>
                            </button>

                            <button
                                onClick={handleAgregarCarrito}
                                disabled={product.stock === 0}
                                className={`flex-1 px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2 ${
                                    product.stock > 0
                                        ? 'bg-linear-to-r from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-500 hover:opacity-90 active:scale-95 text-white dark:text-slate-950'
                                        : 'bg-zinc-700 text-zinc-400 cursor-not-allowed opacity-60'
                                }`}
                            >
                                <span>🛒</span>
                                <span>{product.stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* PESTAÑAS (DESCRIPCIÓN Y EDITORIAL) */}
                <div className="flex gap-4 border-b border-stone-300 dark:border-zinc-800 mt-10 mb-6">
                    <NavLink
                        to={""}
                        end
                        className={({ isActive }) => 
                            `pb-3 px-1 font-bold text-sm border-b-2 transition-all ${
                                isActive 
                                    ? 'border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400' 
                                    : 'border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200'
                            }`
                        }
                    >
                        Descripción
                    </NavLink>

                    <NavLink
                        to={"editorial"}
                        className={({ isActive }) => 
                            `pb-3 px-1 font-bold text-sm border-b-2 transition-all ${
                                isActive 
                                    ? 'border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400' 
                                    : 'border-transparent text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200'
                            }`
                        }
                    >
                        Editorial
                    </NavLink>
                </div>

                <Outlet context={product} />
            </div>
        </main>
    )
}