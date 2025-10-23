import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home"
//import { Header } from "./pages/header";
import { Lugar } from "./pages/Lugar";
import { Login } from "./pages/Login";
import { Nave } from "./Nave";
import { ViajesMedida } from "./pages/viajesMedida";
function App() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<Nave />}>  
          <Route path="/" element={<Home />} />
          <Route path="/lugar" element={<Lugar />} />
          <Route path="/viaje" element={<ViajesMedida />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
