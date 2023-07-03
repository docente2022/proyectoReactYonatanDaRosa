import React from "react";
import Button from "react-bootstrap/esm/Button";


function Agregar() {
    function handleClick() {
      alert('Producto Agregado al carrito');
    }
  
    return (
          <Button variant="primary" onClick={handleClick}>comprar</Button>
    );
  }
  export default Agregar