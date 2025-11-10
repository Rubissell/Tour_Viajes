import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { Header } from "./pages/header";

import { Nave } from "./Nave";
import { Nave_admin } from "./Nave_admin";
import { SubirImg } from "./pages/admin/SubirImg";
import { Home } from "./pages/client/home";
import { ViajesMedida } from "./pages/client/viajesMedida";
import { Libreria } from "./pages/client/Librerias";
import { Lugar } from "./pages/client/Lugar";
import { Login } from "./shared/Login";
function App() {

  return (

    <BrowserRouter> 
      <Routes>
        <Route element={<Nave />}>  
          <Route path="/" element={<Home />} />
          <Route path="/lugar" element={<Lugar />} />
          <Route path="/viaje" element={<ViajesMedida />} />
          <Route path="/libreria" element={< Libreria />} />
          <Route path="/como" element={< Lugar />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<Nave_admin />}>
          <Route path="subirimg" element={ <SubirImg />} />
        </Route>

      </Routes>
    </BrowserRouter>
   
  )
}

export default App
