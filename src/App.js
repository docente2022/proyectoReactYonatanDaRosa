import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './componentes/navbar';
import PiePagina from './componentes/footer';
import { CartProvider } from './context';
import ItemListContainer from './containers/productos/itemlistcontainer';
import ItemDetailContainer from "./containers/contenedorDetalleProducto/ItemDetailContainer"
import Inicio from './pages/inicio';
import Carrito from './pages/carritoDeCompra';
import Contacto from './pages/contacto';
import Checkout from './componentes/checkout/index';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
        <PiePagina/>
      </BrowserRouter>
    </CartProvider>
);
};


export default App;
