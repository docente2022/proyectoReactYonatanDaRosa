
import Carousel from 'react-bootstrap/Carousel';

const ProductosDestacados= () => {
  // Array de productos destacados
  const images= [
    { id: 1, name: 'Relojes elegante', image: 'https://i.blogs.es/c25705/relojes-inteligentes/450_1000.jpg', descripcion:"Los mas Fachero del mercado" },
    { id: 2, name: 'Relojes deportivo', image: 'https://i.blogs.es/6be029/huawei-relojes/840_560.jpg', descripcion:"Los mas Fachero del mercado"},
    { id: 3, name: 'Relojes clásico', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRmTXA1cTJSlpGH3h7JKDlZtUUYgvDHHLhxbgQYY9g5TB57mhPFMMY4lZltTMMY0kH-I&usqp=CAU', descripcion:"Los mas Fachero del mercado"},
  ];

  return (
    <Carousel className='container pb-3 pt-3'>
      {images.map(image => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block w-100"
            src={image.image}
            alt={image.name}
            height={600}
          />
          <Carousel.Caption>
            <h3>{image.name}</h3>
            <p>{image.descripcion}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
   
    
};

export default ProductosDestacados;
