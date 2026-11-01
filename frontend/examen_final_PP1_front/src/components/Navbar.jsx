import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { FavoritosContext } from "../context/FavoritosContext"

export default function Navbar({ darkMode, setDarkMode }) {
    const { favoritos } = useContext(FavoritosContext)
    
    const linkStyle = ({ isActive }) =>
        `transition-all duration-200 px-3 py-1.5 rounded-lg font-medium text-sm flex items-center gap-1 ${
            isActive
                ? darkMode
                    ? "text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 shadow-sm shadow-emerald-500/20 font-semibold"
                    : "text-emerald-700 bg-emerald-100/80 border border-emerald-400/40 font-semibold"
                : darkMode
                    ? "text-zinc-400 hover:text-emerald-300 hover:bg-zinc-800/60"
                    : "text-slate-700 hover:text-emerald-700 hover:bg-stone-200/80"
        }`

    return (
        <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
            darkMode 
                ? 'bg-slate-950/90 border-emerald-900/40 text-zinc-100 shadow-lg shadow-black/40' 
                : 'bg-stone-100/90 border-stone-300/70 text-slate-900 shadow-sm'
        }`}>
            <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="text-2xl transition-transform group-hover:scale-110">🛡️</span>
                    <h1 className="text-2xl font-black tracking-wider bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                        LA MAZMORRA
                    </h1>
                </Link>

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-2">
                    <li><NavLink to="/" className={linkStyle}>Inicio</NavLink></li>
                    <li><NavLink to="/juegosDeMesa" className={linkStyle}>Juegos de mesa</NavLink></li>
                    <li><NavLink to="/juegosDeRol" className={linkStyle}>Juegos de rol</NavLink></li>
                    <li><NavLink to="/accesorios" className={linkStyle}>Accesorios</NavLink></li>
                </ul>

                {/* Acciones */}
                <div className="flex items-center gap-3">
                    <button 
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 rounded-xl transition-all duration-200 active:scale-90 ${
                            darkMode 
                                ? 'bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-zinc-800' 
                                : 'bg-stone-200 hover:bg-stone-300/80 text-slate-700 border border-stone-300'
                        }`}
                        title="Cambiar tema"
                    >
                        {darkMode ? '☀️' : '🌙'}
                    </button>

                    <NavLink 
                        to="/favoritos" 
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-200 active:scale-95 ${
                                isActive 
                                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 dark:bg-emerald-500 dark:text-slate-950" 
                                    : darkMode
                                        ? "bg-emerald-950/80 text-emerald-300 border border-emerald-700/50 hover:bg-emerald-900/80"
                                        : "bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200/80"
                            }`
                        }
                    >
                        <span>❤️</span>
                        <span>({favoritos?.length || 0})</span>
                    </NavLink>

                    <button className="bg-linear-to-r from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-500 hover:opacity-90 active:scale-95 text-white dark:text-slate-950 px-4 py-2 rounded-xl font-bold text-sm shadow-md transition-all duration-200">
                        🛒 Carrito
                    </button>
                </div>
            </div>
        </nav>
    )
}