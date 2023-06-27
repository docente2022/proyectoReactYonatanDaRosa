import React from "react";
import Menu from "../../componentes/navbar" 
import RelojesMasculinos from "../../containers/productos";
import ProductosDestacados from "../../componentes/carrusel";
import PiePagina from "../../componentes/footer";






const Inicio= ()=>{
    return(
      <div>
        <Menu/>
        <ProductosDestacados/>
        <RelojesMasculinos/>
        <PiePagina/>
      </div>
    )
}


export default Inicio