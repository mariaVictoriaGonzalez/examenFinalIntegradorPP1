export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-emerald-900/40 text-zinc-400 py-8 px-6 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-emerald-400 text-lg">🛡️</span>
                    <span className="text-sm font-medium text-zinc-400">
                        © 2026 <strong className="text-emerald-400">La Mazmorra</strong>. Todos los derechos reservados.
                    </span>
                </div>
                <ul className="flex flex-wrap items-center gap-6 text-sm font-medium">
                    <li>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Acerca</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Términos de Servicio</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Contacto</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}