export default function Navbar() {
    return(
        <nav className="flex justify-between items-center bg-slate-800 p-4 shadow-2xl">
            <h1 className="text-xl font-bold cursor-pointer text-blue-400">La Mazmorra</h1>
            <ul className="flex gap-6 text-sm">
                <li className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Inicio</li>
                <li className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Juegos</li>
                <li className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Contacto</li>
                <li className="cursor-pointer text-blue-500 hover:text-blue-400 transition-colors">Favoritos</li>
            </ul>

            <div className="bg-blue-400 px-4 py-2 rounded cursor-pointer">Carrito</div>
        </nav>
    )
}