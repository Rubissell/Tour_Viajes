
import { AnimatedTestimonialsDemo } from "../../components/AnimatedTestimonialsDemo";
export function ViajesMedida () {
    return (
        <>
      <div className="w-full bg-gradient-to-br from-gray-50 to-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Persuasivo Mejorado */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
        <i className="fas fa-crown text-yellow-300"></i>
        <span>Experiencias 100% Personalizadas</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
        Diseña tu <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">aventura perfecta</span>
      </h2>
      <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
        Viajes privados creados desde cero por expertos que transforman tus sueños en experiencias inolvidables
      </p>
    </div>

    {/* Grid de Testimonios Más Espaciado */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
      <div className="transform hover:scale-[1.02] transition-transform duration-300">
        <AnimatedTestimonialsDemo />
      </div>
      <div className="transform hover:scale-[1.02] transition-transform duration-300">
        <AnimatedTestimonialsDemo />
      </div>
      <div className="transform hover:scale-[1.02] transition-transform duration-300">
        <AnimatedTestimonialsDemo />
      </div>
      <div className="transform hover:scale-[1.02] transition-transform duration-300">
        <AnimatedTestimonialsDemo />
      </div>
    </div>

    {/* Sección Persuasiva Adicional */}
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 text-white text-center mb-16 shadow-2xl">
      <h3 className="text-3xl md:text-4xl font-bold mb-6">
        ¿Por qué elegir un viaje a medida?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-user-check text-2xl text-yellow-300"></i>
          </div>
          <h4 className="text-xl font-bold mb-3">Totalmente Personalizado</h4>
          <p className="text-cyan-100">Cada detalle adaptado a tus gustos, presupuesto y estilo de viaje</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-shield-alt text-2xl text-yellow-300"></i>
          </div>
          <h4 className="text-xl font-bold mb-3">Asesoría Expertas</h4>
          <p className="text-cyan-100">Guías locales y expertos que conocen los secretos mejor guardados</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-clock text-2xl text-yellow-300"></i>
          </div>
          <h4 className="text-xl font-bold mb-3">Flexibilidad Total</h4>
          <p className="text-cyan-100">Cambia itinerarios sobre la marcha sin complicaciones</p>
        </div>
      </div>
    </div>

    {/* Proceso Persuasivo */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h3 className="text-4xl font-black text-gray-900 mb-6">
          Tu viaje soñado en <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">3 pasos simples</span>
        </h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Cuéntanos tus sueños</h4>
              <p className="text-gray-600">Comparte tus ideas, preferencias y lo que te hace feliz viajando</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Diseñamos tu aventura</h4>
              <p className="text-gray-600">Nuestros expertos crean un itinerario perfecto solo para ti</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Viaja sin preocupaciones</h4>
              <p className="text-gray-600">Disfruta con soporte 24/7 y atención personalizada</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 text-white text-center shadow-2xl">
        <h4 className="text-2xl font-bold mb-4">¿No sabes por dónde empezar?</h4>
        <p className="text-cyan-100 mb-6">Nuestros expertos te guiarán para crear el viaje perfecto</p>
        <button className="bg-white text-cyan-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg w-full">
          Consulta Gratuita
        </button>
      </div>
    </div>

    {/* CTA Final Mejorado */}
    <div className="text-center bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white shadow-2xl">
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Más de <span className="text-yellow-300">5,000 viajeros</span> han vivido su aventura perfecta
      </h3>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Únete a nuestra comunidad de viajeros satisfechos y descubre por qué somos los líderes en viajes personalizados
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:from-cyan-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
          <i className="fas fa-rocket"></i>
          Comenzar Mi Viaje
        </button>
        <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
          <i className="fas fa-play-circle"></i>
          Ver Experiencias
        </button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}