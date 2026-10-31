import { useOutletContext } from "react-router-dom"

export default function ProductEditorial(){
    const juego = useOutletContext()

    return (
        <div>
            {juego.editorial.map((editorial, key) => (
                <div key={key} className="p-4 bg-zinc-800 my-4 rounded">
                    <div className="flex justify-between">

                        <p>
                            - {editorial.nombre}
                        </p>


                        <div className="flex items-center gap-2">
                            <p>{editorial.pais} </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        )}