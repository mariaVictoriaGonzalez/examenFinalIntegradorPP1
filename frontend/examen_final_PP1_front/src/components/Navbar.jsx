import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
<<<<<<< Updated upstream

export default function Navbar() {
    const linkStyle = ({isActive}) => isActive? "text-blue-400 font-black" : "cursor-pointer text-blue-500 hover:text-blue-400 transition-colors"

    return(
        <nav className="flex justify-between items-center bg-slate-800 p-4 shadow-2xl">
=======
import { FavoritosContext } from "../context/FavoritosContext"
import { CarritoContext } from "../context/CarritoContext"

export default function Navbar({ darkMode, setDarkMode }) {
    const { favoritos } = useContext(FavoritosContext)
    const { carrito } = useContext(CarritoContext)
    const linkStyle = ({isActive}) => isActive ? "text-blue-400 font-black" : "cursor-pointer text-blue-500 hover:text-blue-400 transition-colors"

    return (
        <nav className={`flex justify-between items-center p-4 shadow-2xl transition-colors ${darkMode ? 'bg-slate-800' : 'bg-gray-100 border-b border-gray-200'}`}>
>>>>>>> Stashed changes
            <h1 className="text-xl font-bold cursor-pointer text-blue-400">La Mazmorra</h1>
            <ul className="flex gap-6 text-sm">
                <NavLink to={"/"} className={linkStyle}>Inicio</NavLink>
                <NavLink to={"/juegosDeMesa"} className={linkStyle}>Juegos de mesa</NavLink>
                <NavLink to={"/juegosDeRol"} className={linkStyle}>Juegos de rol</NavLink>
                <NavLink to={"/accesorios"} className={linkStyle}>Accesorios</NavLink>
            </ul>

<<<<<<< Updated upstream
            <div className="bg-blue-400 px-4 py-2 rounded cursor-pointer">Carrito</div>
=======
            <div className="flex items-center gap-3">
                <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-lg"
                >
                    {darkMode ? '☀️' : '🌙'}
                </button>

                <Link 
                    to="/favoritos" 
                    className="bg-blue-400 px-4 py-2 rounded cursor-pointer font-medium text-slate-900 text-sm hover:bg-blue-500 transition-colors"
                >
                 ❤️ ({favoritos.length})
                </Link>

                <Link 
                    to="/carrito" 
                    className="bg-blue-400 px-4 py-2 rounded cursor-pointer font-medium text-slate-900 text-sm hover:bg-blue-500 transition-colors"
                >
                    Carrito ({carrito.length})
                </Link>
            </div>
>>>>>>> Stashed changes
        </nav>
    )
}