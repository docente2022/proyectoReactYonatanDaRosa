import React from "react";

const Contador= ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>
      
      <div className="item-count  ps-5 ">  
            <button className="btn btn-info"  onClick={handleSumar}>+</button>
            <p className="p-2 m-2" >{cantidad}</p>
            <button className="btn btn-info" onClick={handleRestar}>-</button>
        </div>
        <button className="agregar-al-carrito btn btn-outline-success m-5" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
   
  );
};

export default Contador;
