import { Link } from "react-router-dom";
import { BsPersonAdd } from 'react-icons/bs';
export function Header() {
  return (
    <>
      <div className="superior bg-white/80 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-white/20">
  <nav className="header max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      
      {/* Logo con efecto moderno */}
      <div className="logo flex-shrink-0">
        <Link to="/" className="nav-link group">
            <img 
          src="img/image.png" 
          alt="Logo BViajes" 
          className="w-[100px] h-[100px] object-contain transition-transform duration-500 group-hover:scale-105" 
            />

        </Link>
      </div>

      {/* Navegación principal */}
      <div className="botones hidden lg:flex items-center space-x-1">
        
        {[
          { to: "/lugar", label: "¿Cómo funciona?",  },
          { to: "/viaje", label: "Viajes a medida",  },
          { to: "#", label: "Destinos",dropdown: true },
          { to: "#", label: "Expertos", },
          { to: "/libreria", label: "Librería"}
        ].map((item, index) => (
          <div key={item.label} className="relative group">
            <Link 
              to={item.to}
              className="flex items-center space-x-2 px-6 py-3 rounded-2xl text-gray-700 hover:text-gray-900 font-semibold transition-all duration-500 group-hover:bg-white/60 group-hover:shadow-lg group-hover:shadow-black/5"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
              {item.dropdown && (
                <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
            
            {/* Efecto de subrayado animado */}
            <div className="absolute bottom-2 left-6 right-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            {/* Dropdown moderno para destinos */}
            {item.dropdown && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 border border-white/20">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: "Europa", emoji: "🏛️", color: "from-blue-400 to-cyan-400" },
                      { name: "Asia", emoji: "🎎", color: "from-red-400 to-orange-400" },
                      { name: "América", emoji: "🗽", color: "from-green-400 to-emerald-400" },
                      { name: "África", emoji: "🦁", color: "from-yellow-400 to-orange-400" },
                      { name: "Oceanía", emoji: "🏝️", color: "from-cyan-400 to-blue-400" },
                      { name: "Polar", emoji: "🧊", color: "from-gray-400 to-blue-300" }
                    ].map((destino) => (
                      <Link 
                        key={destino.name}
                        className="flex items-center space-x-2 p-3 rounded-xl hover:bg-white/60 transition-all duration-300 group/dest"
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${destino.color} rounded-lg flex items-center justify-center text-white text-sm`}>
                          {destino.emoji}
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover/dest:text-gray-900">
                          {destino.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Botón de login ultra moderno */}
        <Link 
          to='/login'
          className="relative group ml-4"
        >
          <div className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-500 hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Mi Cuenta</span>
          </div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
        </Link>
      </div>

      {/* Menú móvil moderno */}
      <div className="lg:hidden">
        <button className="p-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
          <div className="flex flex-col space-y-1.5">
            <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
            <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
            <div className="w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  </nav>
</div>
    </>
  );
}
