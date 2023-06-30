import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const DestacadosFemeninos= () => {
  // Array de productos destacados
  const featuredProducts = [
    { id: 1, name: 'Reloj elegante', image: 'https://thumbs.dreamstime.com/z/klang-selangor-malaysia-september-women-seiko-wrist-watch-display-holdings-corporation-commonly-known-as-was-founded-which-130931344.jpg', descripcion:"Lo mas Fachero del mercado" },
    { id: 2, name: 'Reloj deportivo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFNe7pZuV157X4lXOvTWDE5iWpkj2QQUKIySH6IiEcc_jOgDYLAx1FPjWyTMjLe8YoEKM&usqp=CAU', descripcion:"Lo mas Fachero del mercado"},
    { id: 3, name: 'Reloj clásico', image: 'https://www.clarin.com/img/2018/08/14/rJfZbAg87_1256x620__1.jpg', descripcion:"Lo mas Fachero del mercado"},
  ];

  return (
  
    <Carousel className='destacados '>
      
      {featuredProducts.map(product => (
        
        // <div key={product.id}>
      
        <Carousel.Item interval={1000}>
          <p className='display-1 text-bg-danger text-center'>WOOOWW</p>
          <p className='display-3 text-bg-info text-'> RELOJES FEMENINOS ON FIRE.</p>

        <img
          className="d-block w-100"
          src={product.image}
          alt={product.name}
          sizes='640'
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

export default DestacadosFemeninos;
