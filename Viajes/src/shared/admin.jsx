import { Link} from "react-router-dom";
export function Admin() {
    
    var nombre ='EL MEJOR VIAJE DE TU VIDA'
    return (
        <>
            <section>
                <div>
                    <img src="img/image.png" alt="" />
                    <h1>GENERALIZAR MIS TIPOS DE VIAJES</h1>
                </div>
            </section>
            <nav>
                <Link to= "subirimg">SUBIR IMAGENES</Link>
            </nav>
        </>
      
    );
}