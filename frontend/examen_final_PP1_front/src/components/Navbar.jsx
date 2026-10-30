<<<<<<< Updated upstream
export default function Navbar() {
=======
import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { FavoritosContext } from "../context/FavoritosContext"

export default function Navbar({ darkMode, setDarkMode }) {
    const { favoritos } = useContext(FavoritosContext)
    const linkStyle = ({isActive}) => isActive ? "text-blue-400 font-black" : "cursor-pointer text-blue-500 hover:text-blue-400 transition-colors"

>>>>>>> Stashed changes
    return(
        <nav className={`flex justify-between items-center p-4 shadow-2xl transition-colors ${darkMode ? 'bg-slate-800' : 'bg-gray-100 border-b border-gray-200'}`}>
            <h1 className="text-xl font-bold cursor-pointer text-blue-400">La Mazmorra</h1>
            <ul className="flex gap-6 text-sm">
                <li className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Inicio</li>
                <li className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Juegos</li>
                <li className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Contacto</li>
                <li className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Favoritos</li>
            </ul>

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

                <div className="bg-blue-400 px-4 py-2 rounded cursor-pointer font-medium text-slate-900 text-sm">
                    Carrito
                </div>
            </div>
        </nav>
    )
}