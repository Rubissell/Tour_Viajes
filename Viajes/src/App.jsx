import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home"
import { Header } from "./pages/header";
import { Lugar } from "./pages/Lugar";
function App() {

  return (
    <BrowserRouter> 
      <Header/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lugar" element={<Lugar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
