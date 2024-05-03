function Services() {
    return (
        <section id="services" className="text-white p-5">
            <h2 className="text-2xl font-bold mb-3">Nuestros Servicios</h2>

            <div className="mb-6">
                <p className="text-lg md:text-xl font-semibold mb-4">
                    En IO-Epik, ejercemos la abogacía de manera flexible, proporcionando equipos especializados y tecnología avanzada para optimizar los procesos legales.
                </p>
            </div>

            <div className="service bg-white text-gray-800 p-6 rounded-lg shadow-md mb-5">
                <h3 className="font-bold text-xl mb-2">Registro de Marcas</h3>
                <p>Protege tu marca y asegura tu posición en el mercado con nuestro servicio completo de registro.</p>
                <ul className="list-disc pl-5">
                    <li>Verificación de disponibilidad.</li>
                    <li>Asesoría legal completa.</li>
                    <li>Protección contra imitaciones.</li>
                </ul>
                <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out">
                    Iniciar Registro de Marca
                </button>
            </div>

            <div className="service bg-white text-gray-800 p-6 rounded-lg shadow-md mb-5">
                <h3 className="font-bold text-xl mb-2">Constitución de Sociedades</h3>
                <p>Ayudamos a formar tu empresa en Honduras, garantizando cumplimiento con todas las normativas legales.</p>
            </div>

            <div className="service bg-white text-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">Proceso de Registro de Marca</h3>
                <p>Registra tu marca de forma segura y eficiente con nuestro apoyo experto a cada paso.</p>
                <ol className="list-decimal pl-5">
                    <li>Chequeo de Viabilidad: Verificamos la disponibilidad y legalidad de tu marca.</li>
                    <li>Ficha de Cliente: Recopilamos toda la información necesaria a través de un formulario seguro.</li>
                    <li>Instrucciones y finalización: Te guiamos en cada paso hasta asegurar el registro de tu marca.</li>
                </ol>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out">
                    Iniciar Registro de Marca
                </button>
            </div>
        </section>
    );
}

export default Services;
