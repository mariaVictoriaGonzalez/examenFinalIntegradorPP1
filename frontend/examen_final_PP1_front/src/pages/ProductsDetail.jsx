import { useState, useEffect, useContext } from "react"
import { Outlet, useParams } from "react-router-dom"
import { Link, NavLink } from "react-router-dom"

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
        thumbnail: "https://example.com/carcassonne.jpg",
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
        thumbnail: "https://example.com/dixit.jpg",
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
        thumbnail: "https://example.com/virus.jpg",
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
        thumbnail: "https://example.com/codenames.jpg",
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
        thumbnail: "https://example.com/ticket_to_ride.jpg",
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

export default function ProductDetail() {

    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    
/*    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
                setProduct(data)
                setLoading(false)
            });
    }, [id])
*/

    useEffect(() => {
        const fetchJuegoMock = new Promise((resolve) => {
            setTimeout(() => {
                // Convertimos id a número para comparar con MOCK_JUEGOS
                const juegoEncontrado = MOCK_JUEGOS.find(juego => juego.id === Number(id))
                resolve(juegoEncontrado)
            }, 500)
        })

        fetchJuegoMock.then((data) => {
            setProduct(data)
            setLoading(false)
        })
    }, [id])

    if (loading) return <h1 className="text-6xl font-bold">Cargando...</h1>
    if (!product) return <h1 className="text-4xl font-bold text-red-500">Juego no encontrado</h1>

    return (
        <div className="max-w-3xl mx-auto pt-6 px-4 w-full">
            <Link to="/" className="text-sm text-indigo-400 hover:underline">← Volver a Inicio</Link>

            <div className="flex gap-6 mt-4 bg-zinc-800 p-6 rounded-lg items-center">
                <img 
                    src={product.thumbnail || 'https://via.placeholder.com/150'} 
                    alt={product.nombre} 
                    className="w-48 h-48 object-cover rounded bg-zinc-900" 
                />
                <div>
                    <h1 className="text-3xl font-bold">{product.nombre}</h1>
                    <p className="text-2xl font-semibold text-green-400 mt-2">${product.precio}</p>
                    <p className="text-zinc-400 text-sm mt-1">Categoría ID: {product.categoria_id}</p>
                    <p className="text-zinc-400 text-sm">Jugadores: {product.jugadores_min} - {product.jugadores_max}</p>
                    <p className="text-zinc-400 text-sm">Edad mínima: +{product.edad_minima} años</p>
                </div>
            </div>

            <div
                className="flex gap-4 border-b border-zinc-700 mt-8 mb-4"
            >
                <NavLink
                    to={""}
                    end
                    className={({ isActive }) => 
                        `pb-2 font-medium border-b-2 transition-colors 
                    ${isActive ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`
                    }
                >
                    Descripcion
                </NavLink>

                <NavLink
                    to={"editorial"}
                    className={({ isActive }) => 
                        `pb-2 font-medium border-b-2 transition-colors 
                    ${isActive ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`
                    }
                >
                    Editorial
                </NavLink>

            </div>

            <Outlet context={product}/>

        </div>
    )
}