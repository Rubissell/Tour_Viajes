import { Link } from "react-router-dom";
import { BsPersonAdd } from 'react-icons/bs';
import './css/header.css'
export function Header() {
  return (
    <>
      <div className="superior">
        <nav className="header">

          <div className="logo">
            <Link to="/" className="nav-link">
                <img src="img/Logo.png" alt="Logo" />
            </Link>
          </div>

          <div className="botones">
          
            <Link className="nav-link" to="/lugar">¿como funciona?</Link>
            <Link className="nav-link">Viajes a medida</Link>
            <Link className="nav-link">Destinos</Link>
            <Link className="nav-link">Expertos en viajes</Link>
            <Link className="nav-link">Libreria</Link>
            <Link className="nav-link" to='/login'><BsPersonAdd height='50px' /></Link>
          </div>
        </nav>
      </div>
    </>
  );
}
