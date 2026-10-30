import { createContext, useState } from 'react'

export const FavoritosContext = createContext()

export function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([])

    // Función para agregar o quitar de favoritos
    const toggleFavorito = (producto) => {
        const existe = favoritos.some(item => item.id === producto.id)
        if (existe) {
            setFavoritos(favoritos.filter(item => item.id !== producto.id))
        } else {
            setFavoritos([...favoritos, producto])
        }
    }

    return (
        <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}