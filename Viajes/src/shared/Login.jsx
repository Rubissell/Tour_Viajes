import { useState } from "react"

export function Login() {
  const [correo, setCorreo] = useState('');
  const [numero, setNumero] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);
  

  const toggleView = () => {
    setVisible(!visible);
  };

  const Campos = () => {
    if(correo && password) {
      alert('Formulario enviado correctamente');
    } else {
      alert('Por favor, complete todos los campos requeridos');
    }  
  }

  return (  
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      {visible ? (
        // Login - Versión más compacta
        <div className="w-full max-w-sm">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6">
            {/* Logo y Título */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <img 
                  src="img/image.png" 
                  alt="BViajes Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Bienvenido
              </h3>
              <p className="text-gray-600 text-sm mt-1">Ingresa a tu cuenta</p>
            </div>

            {/* Formulario */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <input 
                  className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  type="email" 
                  placeholder="tu@email.com"
                  value={correo} 
                  onChange={(e)=> setCorreo(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Contraseña
                </label>
                <input 
                  className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  type="password" 
                  placeholder="••••••••"
                  value={password} 
                  onChange={(e)=> setPassword(e.target.value)} 
                />
              </div>

              <button 
                onClick={Campos}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 text-sm rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Iniciar Sesión
              </button>

              <div className="text-center">
                <a href="#" className="text-cyan-600 hover:text-cyan-700 text-xs font-medium transition-colors duration-300">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-center text-gray-600 text-xs">
                  ¿No tienes una cuenta?{' '}
                  <button 
                    onClick={toggleView}
                    className="text-cyan-600 hover:text-cyan-700 font-semibold transition-colors duration-300"
                  >
                    Crear cuenta
                  </button>
                </p>
              </div>
            </div>

            {/* Login Social */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-white text-gray-500">O continúa con</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3">
                <button className="w-full bg-white border border-gray-200 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-1 text-xs">
                  <i className="fab fa-google text-red-500 text-sm"></i>
                  <span className="font-medium">Google</span>
                </button>
                <button className="w-full bg-white border border-gray-200 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-1 text-xs">
                  <i className="fab fa-facebook text-blue-600 text-sm"></i>
                  <span className="font-medium">Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Registro - Versión más compacta
        <div className="w-full max-w-sm">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6">
            {/* Logo y Título */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <img 
                  src="img/image.png" 
                  alt="BViajes Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-700 bg-clip-text text-transparent">
                Únete a Nosotros
              </h3>
              <p className="text-gray-600 text-sm mt-1">Crea tu cuenta</p>
            </div>

            {/* Formulario */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Correo Electrónico
                </label>
                <input 
                  className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  type="email" 
                  placeholder="tu@email.com"
                  value={correo} 
                  onChange={(e)=> setCorreo(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Número de Teléfono
                </label>
                <input 
                  className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  type="tel" 
                  placeholder="+1 (555) 123-4567"
                  value={numero} 
                  onChange={(e)=> setNumero(e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Contraseña
                </label>
                <input 
                  className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  type="password" 
                  placeholder="••••••••"
                  value={password} 
                  onChange={(e)=> setPassword(e.target.value)} 
                />
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-3 h-3 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                />
                <label className="ml-2 text-xs text-gray-600">
                  Acepto los{' '}
                  <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                    Términos
                  </a>
                </label>
              </div>

              <button 
                onClick={Campos}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2.5 text-sm rounded-lg font-bold hover:from-purple-600 hover:to-pink-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Crear Cuenta
              </button>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-center text-gray-600 text-xs">
                  ¿Ya tienes una cuenta?{' '}
                  <button 
                    onClick={toggleView}
                    className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300"
                  >
                    Iniciar sesión
                  </button>
                </p>
              </div>
            </div>

            {/* Beneficios */}
            <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3">
              <h4 className="font-semibold text-purple-800 mb-1 text-xs">Beneficios al registrarte:</h4>
              <ul className="text-xs text-purple-600 space-y-0.5">
                <li className="flex items-center gap-1">
                  <i className="fas fa-check text-green-500 text-xs"></i>
                  Viajes favoritos
                </li>
                <li className="flex items-center gap-1">
                  <i className="fas fa-check text-green-500 text-xs"></i>
                  Ofertas exclusivas
                </li>
                <li className="flex items-center gap-1">
                  <i className="fas fa-check text-green-500 text-xs"></i>
                  Historial personalizado
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}