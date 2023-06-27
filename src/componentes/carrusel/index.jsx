import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProductosDestacados= () => {
  // Array de productos destacados
  const featuredProducts = [
    { id: 1, name: 'Reloj elegante', image: 'https://www.gizlogic.com/wp-content/uploads/2017/03/Gizlogic-TAG-Heuer-Connected-Modular-45-1-e1489496495871.png', descripcion:"Lo mas Fachero del mercado" },
    { id: 2, name: 'Reloj deportivo', image: 'https://s3.abcstatics.com/media/summum/2021/07/02/0_portada1-kgsC--620x349@abc.jpg', descripcion:"Lo mas Fachero del mercado"},
    { id: 3, name: 'Reloj clásico', image: 'https://www.clarin.com/img/2018/08/14/rJfZbAg87_1256x620__1.jpg', descripcion:"Lo mas Fachero del mercado"},
  ];

  return (
    <Carousel className='destacados'>
      {featuredProducts.map(product => (
        
        // <div key={product.id}>
        <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={product.image}
          alt={product.name}
          />
        <Carousel.Caption>
          <h3>{product.name}</h3>
          <p>{product.descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      ))}
    </Carousel>
  );
};

export default ProductosDestacados;
