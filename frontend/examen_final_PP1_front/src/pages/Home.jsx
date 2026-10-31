import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
        thumbnail: "https://acdn-us.mitiendanube.com/stores/907/020/products/catan02-bfbfc6412744ef319317823089500675-1024-1024.webp",
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
        thumbnail: "https://acdn-us.mitiendanube.com/stores/907/020/products/catan02-bfbfc6412744ef319317823089500675-1024-1024.webp",
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
        thumbnail: "https://acdn-us.mitiendanube.com/stores/907/020/products/catan02-bfbfc6412744ef319317823089500675-1024-1024.webp",
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
        thumbnail: "https://acdn-us.mitiendanube.com/stores/907/020/products/catan02-bfbfc6412744ef319317823089500675-1024-1024.webp",
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
        thumbnail: "https://acdn-us.mitiendanube.com/stores/907/020/products/catan02-bfbfc6412744ef319317823089500675-1024-1024.webp",
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
        thumbnail: "https://acdn-us.mitiendanube.com/stores/907/020/products/catan02-bfbfc6412744ef319317823089500675-1024-1024.webp",
        descripcion: "Una versión gatuna de la ruleta rusa con un gran componente estratégico de cartas.",
        jugadores_min: 2,
        jugadores_max: 5,
        activo: false,
        editorial_id: 5,
        categoria_id: 3,
    }
]


export default function Home() {
const [juegos, setJuegos] = useState([])
    const [loading, setLoading] = useState(true)

/*    useEffect(()=> {
        fetch('https://dummyjson.com/products/category/beauty')
        .then(res=>res.json())
        .then((data)=> {
            console.log(data.products)
            setProducts(data.products)
            setLoading(false)
        })
    },[])
*/

useEffect(() => {
        // Simulación de respuesta de API con 500ms de retraso
        const fetchJuegosMock = new Promise((resolve) => {
            setTimeout(() => {
                resolve(MOCK_JUEGOS)
            }, 500)
        })

        fetchJuegosMock.then((data) => {
            setJuegos(data)
            setLoading(false)
        })
    }, [])

    if (loading) return <h1 className="text-6xl font-bold">Cargando...</h1>



    return(
        <main className="flex-1 flex flex-col justify-center items-center">
            <h1 className="text-4xl text-blue-500 font-extrabold mb-4">La mejor selecion de juegos de mesa del país!</h1>
            <p className="text-blue-500 font-semibold mb-6">Conoce nuestro catalogo</p>

            <section className="max-w-3xl flex justify-center mx-auto pt-6">
            <div className="grid grid-cols-3 gap-6">
                {juegos.map((juego) => (
                    <div key={juego.id} className="p-4 bg-zinc-800 rounded">
                        <img src={juego.thumbnail} alt="" />
                        <div className="flex gap-4">
                        <h1>{juego.nombre}</h1>
                        <p className="mb-2">
                            ${juego.precio}
                        </p>
                        </div>

                        <h1 className="mb-6">Stock: {juego.stock}</h1>

                        <Link
                            to={`/juegos/${juego.id}`}
                            className="mt-4 px-3 py-2 flex justify-center rounded bg-blue-600 hover:bg-blue-500"
                        >
                            Ver producto
                        </Link>
                    </div>
                ))}
            </div>
        </section>
 
        
        </main>
    )
}