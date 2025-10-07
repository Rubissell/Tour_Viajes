import { Outlet } from "react-router-dom";
import { Header } from "./pages/header";
export function Nave() {
    return(
    <>
      <Header />
      <Outlet /> 
    </>
    )
}