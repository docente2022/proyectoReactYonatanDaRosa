import React,{ useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../../src/index.css'
import { Rating } from "@mui/material";
import Nav from 'react-bootstrap/Nav';
import relojesData from './relojes.json';

const RelojesMasculinos = () => {
    const [relojes, setRelojes] = useState([]);
  
    useEffect(() => {
      setRelojes(relojesData.relojes);
    }, []);
  
    return (
      <div className="relojes-container pt-5">
        <h2 className="text-center pt-4 pb-4 text-bg-info">Relojes Masculinos destacados</h2>
        <div className="relojes-grid">
        {relojes.map((reloj) => ( 
            <Nav.Link key={reloj.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={reloj.imagen} alt={reloj.nombre}/>
                <Card.Body>
                <Card.Title>{reloj.nombre}</Card.Title>
                <Card.Text>
                    {reloj.descripcion}
                </Card.Text>
                <Card.Text>
                Precio: ${reloj.precio}
                </Card.Text>
            <Button variant="primary">comprar</Button>
            <Rating />
      </Card.Body>
    </Card>
          </Nav.Link>
        
        ))}
        </div>
      </div>
    );
  };
  
  export default RelojesMasculinos;