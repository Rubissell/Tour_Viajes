import { Outlet } from "react-router-dom";
import { Header } from "./pages/client/header";
export function Nave() {
    return(
    <>
      <Header />
      <Outlet /> 
    </>
    )
}