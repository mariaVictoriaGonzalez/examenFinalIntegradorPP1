import { useState} from "react";

export default function Formulario({darkMode}) {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [enviado, setEnviado] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setEnviado(false)

        if (nombre.trim() === "" || email.trim() === "") {
            setError("Ingrese su nombre")
            return
        }
        if (!email.includes("@")) {
            setError("El email debe contener un @")
            return
        }
        
        setError("")
        setEnviado(true)
        console.log("Datos del formulario:", { nombre, email })
        setNombre("")
        setEmail("")
    }

    const inputStyle = `p-2.5 rounded-xl border outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${
        darkMode
            ? 'bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500'
            : 'bg-white border-stone-300 text-slate-900 placeholder-slate-400'
    }`

    return (
        <form onSubmit={handleSubmit}
            className={`flex flex-col gap-4 w-full max-w-md p-6 rounded-2xl border shadow-md ${
                darkMode
                    ? 'bg-zinc-900/90 border-zinc-800'
                    : 'bg-stone-100/90 border-stone-300/80'
            }`}
        >
            <div>
                <h2 className="text-2xl font-black tracking-wide">¡Únete a la aventura!</h2>
                <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                    Dejanos tu nombre y correo para enterarte de las novedades.
                </p>
            </div>

            <label className="flex flex-col gap-1 text-sm font-semibold">
                Nombre
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className={inputStyle}
                    placeholder="Tu nombre"
                />
            </label>

            <label className="flex flex-col gap-1 text-sm font-semibold">
                Correo electrónico
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputStyle}
                    placeholder="tuemail@ejemplo.com"
                />
            </label>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {enviado && <p className="text-emerald-500 text-sm">¡Gracias! Recibimos tus datos.</p>}

            <button
                type="submit"
                className="px-8 py-3 rounded-xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 hover:opacity-90 text-white shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
            >
                Enviar
            </button>
        </form>
    )
}