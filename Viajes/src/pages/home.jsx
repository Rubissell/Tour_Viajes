import './css/home.css'
export function Home() {   
    return (  
        <>
            <div className="gallery">
                <span className="">
                    <img src="https://i.pinimg.com/1200x/18/be/1f/18be1f7af1db345172b4096613fef6a2.jpg" alt="" />
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
        </>
    )
}