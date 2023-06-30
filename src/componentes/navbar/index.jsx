import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../iconCarrito';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import BarraDeBusqueda from '../barraBusqueda';
import { Link } from 'react-router-dom';



const Menu=()=> {
  
  const cart=3;
  const handleSearch = (searchTerm) => {
    // Lógica para procesar la búsqueda
    console.log('Búsqueda realizada:', searchTerm);
  };

  
  return (
    <Navbar collapseOnSelect expand="lg" className="menu bg-body-tertiary">
      <Container>
       <Link to={"/"}><Navbar.Brand className='p-1 pe-5'>
          <img
              alt=""
              src="./logo192.png"
              width="100"
              height="100"
              className=" d-inline-block rounded-circle"
             
            />
        </Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/"className="a " >INICIO</Link>
            <NavDropdown title="CATEGORIA" id="collasible-nav-dropdown" className='flex'>
              <Link to={"/productosmasculinos"} className='text-center a '> <li>RELOJES MASCULINOS</li></Link>
              <Link to={"/productosfemeninos"} className='text-center a'>
               <li>RELOJES FEMENINOS</li>
              </Link>
              <Link to={"/smartwatchs"} className="text-center a"> <li>SMARTWATCHS</li> </Link >
              <NavDropdown.Divider />
              <Link to={"/ofertas"} className='text-center a'>
                OFERTAS
              </Link>
            </NavDropdown>
            <Link to={"/contacto"} className="pe-5 a"> CONTACTO</Link>
            <BarraDeBusqueda className="justify-content-center"  onSearch={handleSearch} />
          </Nav>

          <Link href="http://" className='pe-4'><CartWidget cartQuantity={cart} />  </Link>
          <Link href="http://" className='pe-5'> <AccountCircleIcon/>    </Link>
         
          
        

          </Navbar.Collapse>
          

        </Container>
      </Navbar>);
          };

export default Menu;