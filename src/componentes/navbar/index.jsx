import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Menu=()=> {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='p-1 pe-5' href="#home">
          <img
              alt=""
              src="./logo192.png"
              width="100"
              height="100"
              className="d-inline-block"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">INICIO</Nav.Link>
            <NavDropdown title="RELOJES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">RELOJES MASCULINOS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              RELOJES FEMENINOS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">UNISEX</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                OFERTAS
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing"> CONTACTO</Nav.Link>
          </Nav>

          <Badge badgeContent={1} color="primary">
  
          <ShoppingCartIcon/>
          </Badge>
          

          </Navbar.Collapse>
          

        </Container>
      </Navbar>);
          };

export default Menu;