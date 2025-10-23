import './css/home.css'
import { BsPersonHeart } from 'react-icons/bs';
import { FaRegClipboard } from 'react-icons/fa';
import { GiThreeKeys } from 'react-icons/gi';
export function Home() {   
    return (  
        <>
            <div className="gallery">
                <span className="">
                    <img src="https://i.pinimg.com/736x/9d/6b/af/9d6baf6d9fbc4aa810f9f78b8f42616a.jpg" alt="" />
                    <img src="https://i.pinimg.com/736x/ca/49/1d/ca491d45d50bbf2b1d05a5c7432ad817.jpg" alt="" />
                    <img src="https://i.pinimg.com/1200x/9d/ae/a4/9daea4b59a23502f0837aa52dacb8eac.jpg" alt="" />
                    <img src="https://i.pinimg.com/736x/2f/27/08/2f27088cf1149c60b423bb3836c5534c.jpg" alt="" />
                    <img src="https://i.pinimg.com/736x/e7/74/1a/e7741a8dbea746bcc9a6862217148258.jpg" alt="" />
                </span>

                <span className="Frase">
                    <h1>Viaja, explora y descubre nuevos destinos</h1>
                    <p>El mundo es un libro y aquellos que no viajan solo leen una página.</p>

                    <span className="btn">
                        <button>Seleccionar Pais</button>
                        <button>Empezar a Planificar</button>
                    </span>
                </span>
                
            </div>
            <div className='secciones'>
                <div className='info-text'>
                    <span className='titulo'>
                        <FaRegClipboard className='iconos'/>
                        <p>Paso 1.</p>
                        <p><strong>Cuéntanos sobre tu viaje soñado</strong>
                            Rellena un breve formulari
                        </p>
                         
                    </span>
                    <span className='titulo'>
                        <BsPersonHeart className='iconos'/>
                        <p>Paso 2.</p>
                       <p>
                         <strong>Obtén propuestas de múltiples expertos</strong>
                         Colabora, perfecciona y elige la mejor opción
                        </p>
                    </span>

                    <span className='titulo'>
                        <GiThreeKeys className='iconos'/>
                        <p>Paso 3.</p>
                       <p>
                         <strong>Reserva de forma segura tu mejor opción</strong>
                         Y viaja con servicio de conserjería 24/7
                        </p>
                    </span>

                </div>
            </div>
        </>
    )
}

