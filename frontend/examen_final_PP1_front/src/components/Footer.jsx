export default function Footer() {
return (

<footer className="bg-slate-950 border-t-1 border-blue-700 text-blue-400 p-2">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-body sm:text-center">@2026 La Mazmorra todos los derechos reservados</span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
        <li>
            <a href="#" className="text-sm p-4">Acerca</a>
        </li>
        <li>
            <a href="#" className="text-sm p-4">Terminos de Servicio</a>
        </li>
        <li>
            <a href="#" className="text-sm p-4">Contacto</a>
        </li>
    </ul>
    </div>
</footer>
    );
}