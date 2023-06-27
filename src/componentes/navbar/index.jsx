import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../iconCarrito';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import BarraDeBusqueda from '../barraBusqueda';



const Menu=()=> {
  
  const cart=3;
  const handleSearch = (searchTerm) => {
    // Lógica para procesar la búsqueda
    console.log('Búsqueda realizada:', searchTerm);
  };

  
  return (
    <Navbar collapseOnSelect expand="lg" className="menu bg-body-tertiary">
      <Container>
        <Navbar.Brand className='p-1 pe-5' href="#home">
          <img
              alt=""
              src="./logo192.png"
              width="100"
              height="100"
              className=" d-inline-block rounded-circle"
             
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
            <Nav.Link href="#pricing" className="pe-5"> CONTACTO</Nav.Link>
            <BarraDeBusqueda className="justify-content-center"  onSearch={handleSearch} />
          </Nav>

          <Nav.Link href="http://" className='pe-4'><CartWidget cartQuantity={cart} />  </Nav.Link>
          <Nav.Link href="http://" className='pe-5'> <AccountCircleIcon/>    </Nav.Link>
         
          <Nav.Item className='redes'>
            <h6>Comparte en:</h6>
            <Nav.Link href="http://" className='pt-2'> <InstagramIcon/>Instagram   </Nav.Link>
            <Nav.Link href="http://" className='pt-2'> <FacebookRoundedIcon/>Facebook   </Nav.Link>
            <Nav.Link href="http://" className='pt-2'> <TwitterIcon/>  Twitter </Nav.Link>

          </Nav.Item>
        

          </Navbar.Collapse>
          

        </Container>
      </Navbar>);
          };

export default Menu;