import React from "react";
import Menu from "../../componentes/navbar" 
import RelojesMasculinos from "../../containers/productos";
import PiePagina from "../../../componentes/footer";





const RelojesHombre= ()=>{
    return(
      <div>
        <Menu/>
        <RelojesMasculinos/>
        <PiePagina/>
      </div>
    )
}


export default RelojesHombre