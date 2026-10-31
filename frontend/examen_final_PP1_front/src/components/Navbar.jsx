import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    const linkStyle = ({isActive}) => isActive? "text-blue-400 font-black" : "cursor-pointer text-blue-500 hover:text-blue-400 transition-colors"

    return(
        <nav className="flex justify-between items-center bg-slate-800 p-4 shadow-2xl">
            <h1 className="text-xl font-bold cursor-pointer text-blue-400">La Mazmorra</h1>
            <ul className="flex gap-6 text-sm">
                <NavLink to={"/"} className={linkStyle}>Inicio</NavLink>
                <NavLink to={"/juegosDeMesa"} className={linkStyle}>Juegos de mesa</NavLink>
                <NavLink to={"/juegosDeRol"} className={linkStyle}>Juegos de rol</NavLink>
                <NavLink to={"/accesorios"} className={linkStyle}>Accesorios</NavLink>
            </ul>

            <div className="bg-blue-400 px-4 py-2 rounded cursor-pointer">Carrito</div>
        </nav>
    )
}