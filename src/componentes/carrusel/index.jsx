import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProductosDestacados= () => {
  // Array de productos destacados
  const featuredProducts = [
    { id: 1, name: 'Reloj elegante', image: 'https://www.gizlogic.com/wp-content/uploads/2017/03/Gizlogic-TAG-Heuer-Connected-Modular-45-1-e1489496495871.png', descripcion:"Lo mas Fachero del mercado" },
    { id: 2, name: 'Reloj deportivo', image: 'https://hips.hearstapps.com/hmg-prod/images/best-smartwatches-64392fca75547.png?crop=1.00xw:1.00xh;0,0&resize=1200:*', descripcion:"Lo mas Fachero del mercado"},
    { id: 3, name: 'Reloj clásico', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRlMfw_4GTRJBXeqtbIw2RrhGiN83dDAZ4A&usqp=CAU', descripcion:"Lo mas Fachero del mercado"},
  ];

  return (
  
    <Carousel className='destacados'>
      <div className='display-1 text-bg-danger text-center'>WOOOWW</div>
      <div className='display-3 text-bg-info text-center'> RELOJES ON FIRE.</div>
      {featuredProducts.map(product => (
        
        <div key={product.id}>
      
        <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={product.image}
          alt={product.name}
          height={400}
          />
        <Carousel.Caption>
          <h3>{product.name}</h3>
          <p>{product.descripcion}</p>
        </Carousel.Caption>
      </Carousel.Item>
      </div>
      ))}
      <hr /> <hr /><hr /><hr /><hr />
    </Carousel>
    
  );
};

export default ProductosDestacados;
