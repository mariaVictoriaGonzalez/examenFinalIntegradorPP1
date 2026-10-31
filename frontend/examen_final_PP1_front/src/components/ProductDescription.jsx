import { useOutletContext } from "react-router-dom"


export default function ProductsDescription(){
const juego = useOutletContext()

    return (
        <div>
            <p className="font-bold pb-2 border-b text-xl">
                Descripción del juego:
            </p>
            <p>
                {juego.descripcion}
            </p>

            <p className="mt-6 text-zinc-500">
                <label className="underline">Minimo de jugadores:</label> {juego.jugadores_min}
                <label className="underline">Maximo de jugadores:</label> {juego.jugadores_max}

            </p>
        </div>
    )}