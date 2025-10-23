import { useState } from "react"
import './css/login.css'
export function Login() {

  const [correo , setCorreo] = useState('');
  const [numero , setNumero] = useState('');
  const [password , setPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const toggleView = () => {
    setVisible(!visible);
  };



  const Campos = ()=>{
    if(correo && password){
      alert('enviado')
    }else{
      alert('llene todos los campos porfavor pinche puto de mierda')
    }  
  }
  return (
    <>  
      {visible ? (
        <div className="login">
          <div className="fondo">
            <div className="formulario">
              <h3 >Iniciar sesión</h3>
              <input className="relleno" type="text" value={correo} onChange={(e)=> setCorreo(e.target.value)}/>
              <input className="relleno" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
              <button onClick={Campos}>Enviar</button>
              <button onClick={toggleView} >Crear cuenta </button>
              <a href="">Olvide ontraseña</a>
            </div>
          </div>
        </div>

      )
      :
      (
        <div className="registro">
            <div className="fondo">
              <div className="formulario">
                <h3>Registrarse</h3>
                <input className="relleno" type="text" value={correo} onChange={(e)=> setCorreo(e.target.value)} />
                <input className="relleno" type="text" value={numero} onChange={(e)=> setNumero(e.target.value)} />
                <input className="relleno" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <button onClick={Campos}>Enviar</button>
                <button onClick={toggleView} >Iniciar sesión </button>
              </div>
            </div>
        </div>
      ) 
    }
    </>
  )
}