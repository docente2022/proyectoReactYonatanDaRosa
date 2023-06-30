import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Rating } from "@mui/material";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import relojesData from './femenino.json';

const RelojesFemeninosHome = () => {
  const [relojes, setRelojes] = useState([]);
  const [productosVisibles, setProductosVisibles] = useState(6);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  useEffect(() => {
    setRelojes(relojesData.relojes);
  }, []);

  return (
    <div className="relojes-container">
      <h2 className="text-center text-bg-info  pb-5 pt-5">Relojes Femeninos Destacados</h2>
      <div className="relojes-grid">
        {relojes.map((reloj, index) => {
          if (!mostrarTodos && index >= productosVisibles) {
            return null;
          }

          return (
            <Nav.Link key={reloj.id}>
              <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={reloj.imagen} alt={reloj.nombre} />
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
          );
        })}
      </div>
      <Stack  gap={1}className="pt-2 gap={2} col-md-5 mx-auto">

      {!mostrarTodos && relojes.length > productosVisibles && (
        <Link to="/productosfemeninos" className="ver-todos-link "> 
         <button className="btn btn-outline-info " >Ver todos los productos </button> 
        </Link>
      )}
      </Stack>
    </div>
  );
};

export default RelojesFemeninosHome;
