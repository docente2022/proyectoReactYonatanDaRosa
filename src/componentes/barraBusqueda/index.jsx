import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const BarraDeBusqueda = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     placeholder="Buscar..."
    //     value={searchTerm}
    //     onChange={handleInputChange}
    //   />
    //   <button type="submit">Buscar</button>
    // </form>
    <Form className="d-flex" onSubmit={handleSubmit} >
            <Form.Control
              type="search"
              placeholder="Busca Tu Reloj"
              value={searchTerm}
              className="me-2"
              onChange={handleInputChange}
              aria-label="Search"
            />
            <Button type="submit"  variant="outline-success">Buscar</Button>
          </Form>
  );
};

export default BarraDeBusqueda;
