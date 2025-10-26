import './css/home.css'
import { BsPersonHeart } from 'react-icons/bs';
import { FaRegClipboard } from 'react-icons/fa';
import { GiThreeKeys } from 'react-icons/gi';
export function Home() {   
    return (  
        <>
               <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[70vh] min-h-[600px]">
            
                    <div className="lg:col-span-8 grid grid-cols-2 grid-rows-2 gap-4 h-full">
                        <div className="row-span-2 relative group overflow-hidden rounded-2xl shadow-2xl">
                            <img src="https://i.pinimg.com/736x/9d/6b/af/9d6baf6d9fbc4aa810f9f78b8f42616a.jpg" 
                                alt="Destino de viaje" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                            <img src="https://i.pinimg.com/736x/ca/49/1d/ca491d45d50bbf2b1d05a5c7432ad817.jpg" 
                                alt="Destino de viaje" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                                <img src="https://i.pinimg.com/1200x/9d/ae/a4/9daea4b59a23502f0837aa52dacb8eac.jpg" 
                                    alt="Destino de viaje" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                                <img src="https://i.pinimg.com/736x/2f/27/08/2f27088cf1149c60b423bb3836c5534c.jpg" 
                                    alt="Destino de viaje" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-center bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
                        <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
                            Viaja, explora y descubre nuevos destinos
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            El mundo es un libro y aquellos que no viajan solo leen una página.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                <i className="fas fa-globe-americas"></i>
                                Seleccionar País
                            </button>
                            <button className="flex-1 px-6 py-4 bg-white text-cyan-600 font-bold rounded-xl border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                <i className="fas fa-calendar-alt"></i>
                                Empezar a Planificar
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">Tu viaje soñado en 3 simples pasos</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Diseñamos experiencias únicas adaptadas a tus sueños de viaje</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <FaRegClipboard />
                        </div>
                        <div className="mb-4">
                            <span className="text-sm font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">Paso 1</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Cuéntanos sobre tu viaje soñado</h3>
                        <p className="text-gray-600 leading-relaxed">Rellena un breve formulario con tus preferencias y sueños de viaje</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <BsPersonHeart />
                        </div>
                        <div className="mb-4">
                            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Paso 2</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Obtén propuestas de múltiples expertos</h3>
                        <p className="text-gray-600 leading-relaxed">Colabora, perfecciona y elige la mejor opción entre nuestras propuestas</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <GiThreeKeys />
                        </div>
                        <div className="mb-4">
                            <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Paso 3</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Reserva de forma segura tu mejor opción</h3>
                        <p className="text-gray-600 leading-relaxed">Y viaja con servicio de conserjería 24/7 durante toda tu experiencia</p>
                    </div>
                </div>
            </section>

            <footer className="bg-gradient-to-br from-gray-900 to-black text-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">✈️</span>
                                </div>
                                <span className="text-2xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                    BViajes
                                </span>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Creando experiencias de viaje inolvidables desde 2010. Tu aventura perfecta comienza aquí.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors duration-300">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <i className="fas fa-map-marker-alt text-cyan-500"></i>
                                Destinos Populares
                            </h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> Bali, Indonesia</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> Santorini, Grecia</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> Kyoto, Japón</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> Machu Picchu, Perú</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> París, Francia</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <i className="fas fa-concierge-bell text-blue-500"></i>
                                Nuestros Servicios
                            </h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> Viajes a Medida</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> Luna de Miel</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> Aventura y Trekking</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> Viajes en Grupo</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"><i className="fas fa-chevron-right text-xs"></i> Cruceros de Lujo</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <i className="fas fa-headset text-purple-500"></i>
                                Contacto
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <i className="fas fa-phone text-cyan-500"></i>
                                    +1 (555) 123-4567
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <i className="fas fa-envelope text-cyan-500"></i>
                                    info@bviajes.com
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <i className="fas fa-map-marker-alt text-cyan-500"></i>
                                    Av. Viajes 123, Mundo
                                </li>
                            </ul>
                            <div className="mt-6">
                                <h4 className="font-semibold mb-3">Suscríbete a nuestras ofertas</h4>
                                <div className="flex">
                                    <input type="email" placeholder="Tu email" className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-cyan-500" />
                                    <button className="px-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-r-lg hover:opacity-90 transition-opacity duration-300">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-gray-400 text-sm mb-4 md:mb-0">
                                © 2024 BViajes. Todos los derechos reservados.
                            </div>
                            <div className="flex flex-wrap gap-6 text-sm">
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Política de Privacidad</a>
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Términos de Servicio</a>
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Cookies</a>
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Aviso Legal</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    ) 
}

