import React,{ useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../../src/index.css'
import { Rating } from "@mui/material";
import relojesData from './data.json';
import { Link } from "react-router-dom";
import Agregar from "../../componentes/boton";



const Smartwatch = () => {
    const [relojes, setRelojes] = useState([]);
  
    useEffect(() => {
      setRelojes(relojesData.relojes);
    }, []);
  
    return (
      <div className="relojes-container">
        <h2 className="text-center pb-4 pt-5 text-bg-info">SMARTWACHS</h2>
        <div className="relojes-grid">
        {relojes.map((reloj) => ( 
            <Link key={reloj.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  height={300}src={reloj.imagen} alt={reloj.nombre}/>
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
          </Link>
        
        ))}
        </div>
      </div>
    );
  };
  
  export default Smartwatch;





