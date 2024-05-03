
export function Header() {
    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <h1 className="text-lg">Bienvenido a IO·Epik - Marca</h1>
            <nav>
                <a href="#services" className="p-2 hover:bg-blue-700">Servicios</a>
                <a href="#contact" className="p-2 hover:bg-blue-700">Contacto</a>
            </nav>
        </header>
    );
}
