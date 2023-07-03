import React from "react";
import RelojesMasculinos from "../../containers/productos";
import ProductosDestacados from "../../componentes/carrusel";
import RelojesFemeninosHome from "../../containers/Femeninoslista/relojesFemHome";
import SmartWatchs from "../smartwatchs";



const Inicio= ()=>{
    return(
      <div>
        <ProductosDestacados/>
        <RelojesMasculinos/>
        <RelojesFemeninosHome/>
        <SmartWatchs/>
      </div>
    )
}


export default Inicio