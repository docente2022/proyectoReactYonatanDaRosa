import React,{ useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import '../../../src/index.css'
import { Rating } from "@mui/material";
import Nav from 'react-bootstrap/Nav';
import relojesData from './femenino.json';
import Agregar from "../../componentes/boton";



const TodosRelojesFemeninos = () => {
    const [relojes, setRelojes] = useState([]);
  
    useEffect(() => {
      setRelojes(relojesData.relojes);
    }, []);
  
    return (
      <div className="relojes-container">
        <h2 className="text-center pb">Relojes Femeninos</h2>
        <div className="relojes-grid">
        {relojes.map((reloj) => ( 
            <Nav.Link key={reloj.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={300} src={reloj.imagen} alt={reloj.nombre}/>
                <Card.Body>
                <Card.Title>{reloj.nombre}</Card.Title>
                <Card.Text>
                    {reloj.descripcion}
                </Card.Text>
                <Card.Text>
                Precio: ${reloj.precio}
                </Card.Text>
            <Agregar/>
            <Rating />
      </Card.Body>
    </Card>
          </Nav.Link>
        
        ))}
        </div>
      </div>
    );
  };
  
  export default TodosRelojesFemeninos;





