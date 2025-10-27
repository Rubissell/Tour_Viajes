//import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export function Lugar () {
    
    const Nombre = 'EMIR AKE CAB'

    return (
        
        <>
           
             <section class="max-w-7xl mx-auto px-6 py-20">
                <div class="text-center mb-16">
                <h2 class="text-4xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ¿Cómo funciona viajar con BViajes?
                </h2>
                <p class="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                    Diseñamos experiencias únicas de viaje en 3 simples pasos. Tú eliges, nosotros nos encargamos del resto.
                </p>
                </div>

              
                <div class="grid md:grid-cols-3 gap-10">

                <div class="relative group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <img src="https://i.pinimg.com/1200x/6a/f9/0e/6af90eea656d653c788e7d3f92a77247.jpg" 
                        alt="Elige tu destino" 
                        class="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div class="p-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">1. Elige tu destino soñado 🌍</h3>
                    <p class="text-gray-600">
                        Explora cientos de destinos inspiradores y selecciona el que más te emocione. Desde las playas de Bali hasta los Alpes suizos.
                    </p>
                    </div>
                </div>

              
                <div class="relative group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <img src="https://i.pinimg.com/1200x/4c/38/c0/4c38c03540dd20745844ab77566030ba.jpg" 
                        alt="Personaliza tu experiencia" 
                        class="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div class="p-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">2. Personaliza tu experiencia ✈️</h3>
                    <p class="text-gray-600">
                        Diseña tu itinerario con la ayuda de nuestros expertos viajeros. Alojamiento, actividades y transporte, todo a tu medida.
                    </p>
                    </div>
                </div>

               
                <div class="relative group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <img src="https://i.pinimg.com/1200x/f3/9d/6f/f39d6f85b413b11e01d783ba0f55b80d.jpg" 
                        alt="Disfruta del viaje" 
                        class="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div class="p-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">3. ¡Vive tu aventura! 💫</h3>
                    <p class="text-gray-600">
                        Relájate y disfruta. Nosotros nos encargamos de los detalles para que tú solo pienses en crear recuerdos inolvidables.
                    </p>
                    </div>
                </div>

                </div>

                
                <div class="text-center mt-16">
                <a href="/viaje" 
                    class="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-500">
                    Empieza a planear tu viaje ahora
                </a>
                <p class="mt-3 text-gray-500 text-sm">Te acompañamos en cada paso del camino ✨</p>
                </div>
            </section>
        </>
    )
}
