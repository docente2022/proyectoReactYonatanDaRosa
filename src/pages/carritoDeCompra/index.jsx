import React, { useContext } from 'react'
import { CartContext } from '../../context'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito,eliminarProducto } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className=" containerCarrito pb-4 border-success border">
        <h1 className="main-title m-2 ">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                   <div className=" d-grid">
                        <h3>{prod.titulo}</h3>
                        <p className='m-4'>Precio unit: ${prod.precio}</p> 
                        <p className='m-2'>Cant: {prod.cantidad}</p>
                     <DeleteIcon onClick={() => eliminarProducto(prod.id)} />
                    </div>
                 
                    <p className='p-4'>Precio total: ${prod.precio * prod.cantidad}</p>
                    
                    
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2> Total Carrito: ${precioTotal()}</h2>
                <button className='btn btn-outline-success m-2' onClick={handleVaciar}>Vaciar</button>
               <Link to={"/checkout"}><button className="btn-finalizar-compra btn btn-outline-success m-2">Finalizar Compra</button></Link>
                <Link to={"/"}> <button className='btn btn-outline-success'>Seguir Comprando</button></Link>
            </> :
            <> 
            <h2>El carrito está vacío :(</h2>
            <Link to={"/"}> <button className='btn  btn-outline-success m-3 '>Volver a Inicio</button></Link>
            <Link to={"/Masculinos"}> <button className='btn  btn-outline-success m-3'>Relojes Masculinos</button></Link>
            <Link to={"/Femeninos"}> <button className='btn  btn-outline-success m-3'> Relojes Femeninos</button></Link> 
            <Link to={"/"}> <button className='btn  btn-outline-success m-3'>Relojes Smartwatch</button></Link>
            

                 
            </>
               
        
           
        }
        
    </div>
  )
}

export default Carrito