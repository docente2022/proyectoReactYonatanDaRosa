import React from "react";
import RelojesMasculinos from "../../containers/productos";
import ProductosDestacados from "../../componentes/carrusel";
import RelojesFemeninosHome from "../../containers/Femeninoslista/relojesFemHome";



const Inicio= ()=>{
    return(
      <div>
        <ProductosDestacados/>
        <RelojesMasculinos/>
        <RelojesFemeninosHome/>
      </div>
    )
}


export default Inicio