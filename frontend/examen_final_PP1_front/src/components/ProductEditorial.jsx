import { useOutletContext } from "react-router-dom"

export default function ProductEditorial() {
    // Recibimos la información del juego desde el Outlet del padre
    const juego = useOutletContext()


    // 3. Renderizado de los datos de la editorial
    return (
        <div className="p-4 bg-zinc-800/80 rounded-xl border border-zinc-700/50 my-4">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                        Editorial
                    </h3>
                    <p className="font-bold text-emerald-400 text-lg">
                        {juego.editorial.nombre}
                    </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-900/60 px-3 py-1.5 rounded-lg border border-zinc-700/40">
                    <span>🌐 País de origen:</span>
                    <span className="font-semibold text-white">
                        {juego.editorial.pais_origen}
                    </span>
                </div>
            </div>
        </div>
    )
}