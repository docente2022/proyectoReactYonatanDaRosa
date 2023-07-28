import React from "react";
import ItemListContainer from "../../containers/productos/itemlistcontainer"
import ProductosDestacados from "../../componentes/carrusel";



const Inicio= ()=>{
    return(
      <div>
        <div className="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
           GEODA
           </text>
          </svg>
        </div>
        <div className="glitch-wrapper container p-2 main-title">
   <div className="glitch" data-text="ENCONTRÁ  AQUÍ TU RELOJ FAVORITO">ENCONTRÁ  AQUÍ TU RELOJ FAVORITO</div>
</div>

    
        <ProductosDestacados/>
        <ItemListContainer/>
      </div>
    )
}


export default Inicio