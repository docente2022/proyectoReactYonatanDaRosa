import React, { useState } from "react";

const Contador = ({ cantidadInicial, onCantidadChange }) => {
  const [cantidad, setCantidad] = useState(cantidadInicial);

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      onCantidadChange(cantidad - 1);
    }
  };

  const incrementar = () => {
    setCantidad(cantidad + 1);
    onCantidadChange(cantidad + 1);
  };

  return (
    <div className="contador">
      <button onClick={decrementar}>-</button>
      <span>{cantidad}</span>
      <button onClick={incrementar}>+</button>
    </div>
  );
};

export default Contador;
