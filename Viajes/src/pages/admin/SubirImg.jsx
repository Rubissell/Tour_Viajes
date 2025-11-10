import { useState } from "react";

export function SubirImg() {

    
    const [img , setImg]= useState('');
    var [numero , setnumero]= useState(0);


    const btn= ()=> {
       setnumero(numero+1)
       if(numero<100){
        alert ('se paso de la lanza')
       }
    }

    const btn_menos= ()=>{
        setnumero(numero-1)
    }

    const guardar= ()=>{
        setImg(img)
    }
    return (
        <div className="bg-amber-300 border-inherit border-b-2 border-neutral-950 w-90 text-center">
            <h2>SUBIR IMAGENES DE LOS VIAJES</h2>
            <input  type="file" value={img} onChange={(e)=> setImg(e.target.value)}/> 
            <h1>HOLA M</h1>
            <button onClick={guardar} >guardar</button>     

            <img src={img} alt="" />


            <p>{numero}</p>

            <button onClick={btn}>+1</button>
            <button onClick={btn_menos}>-1</button>

        </div>
    );
}