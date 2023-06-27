import React,{ useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../../src/index.css'

import { Rating } from "@mui/material";
import relojesData from './relojes.json';

const RelojesMasculinos = () => {
    const [relojes, setRelojes] = useState([]);
  
    useEffect(() => {
      setRelojes(relojesData.relojes);
    }, []);
  
    return (
      <div className="relojes-container">
        <h2 className="text-center pb">Relojes Masculinos</h2>
        <div className="relojes-grid">
        {relojes.map((reloj) => ( 
            <div key={reloj.id}>
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
          </div>
        
        ))}
        </div>
      </div>
    );
  };
  
  export default RelojesMasculinos;