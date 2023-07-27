import { useContext, useState } from "react";
import { CartContext } from "../../context/index";
import Contador from "../../componentes/selectorCantidad/index";
import { Link } from "react-router-dom";
const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <div className="container detalle">
        <div className="producto-detalle">
          <img className="zoom" src={item.imagen} alt={item.titulo} />
            
            <div className="contenido">
                <h3 className="titulo">{item.titulo}</h3>
                
                <p className="precio  fw-bolder "> ${item.precio}</p>
                <p className=" pt-5 pb-0">Selecciona la cantidad:</p>
                <Contador
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
                <Link><p>Ver promociones vigentes</p></Link>
                <Link>  <p>Calculador de Envío</p></Link>
                <Link><p>Ver Politicas de cambio</p></Link>
               
             
               
               <div>
                <h3>Descripción</h3>
                <p className="descripcion"> {item.descripción}</p>
               </div>

            </div>
        </div>
        
        
              
    </div>
  )
}

export default ItemDetail
