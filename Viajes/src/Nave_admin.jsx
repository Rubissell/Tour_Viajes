import { Outlet } from "react-router-dom";
import { Admin } from "./shared/admin";

export function Nave_admin(){
   return(
    <>
        <Admin/>
        <Outlet/>
    </>
   )
}