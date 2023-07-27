import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import '../../../src/index.css'
import Button from "react-bootstrap/esm/Button";



const Item = ( {producto} ) => {
    return (
      <>
           
            <Card className="card" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={producto.imagen} height={300} alt={producto.titulo}/>
                <Card.Body>
                <Card.Title>{producto.titulo}</Card.Title>
                <Card.Text>
                Precio: ${producto.precio}
                </Card.Text>
                <Card.Text>
                Categoría:{ producto.categoría}
                </Card.Text>
                <Link to={`/item/${producto.id}`}><Button variant="primary">ver más</Button> </Link>
       
      </Card.Body>
    </Card>

</>
    )
  }
  
  export default Item