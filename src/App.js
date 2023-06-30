
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './pages/inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RelojesHombre from './pages/Relojes-Masculinos/Index';
import Menu from './componentes/navbar';
import PiePagina from './componentes/footer';
import Contacto from './pages/contacto';
import Relojesmujeres from './pages/relojes-femeninos';
import SmartWatchs from './pages/smartwatchs';
import Ofertas from './pages/ofertas';


function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Inicio/>} />
      {/* <Route path="/item/:id" element={< />}/> */}
      <Route path="/productosmasculinos" element={<RelojesHombre/>} />
      <Route path="/productosfemeninos" element={<Relojesmujeres/>} />
      <Route path="/contacto" element={<Contacto/>} />
      <Route path="/smartwatchs" element={<SmartWatchs/>} />
      <Route path="/ofertas" element={<Ofertas/>} />

    </Routes>
    <PiePagina/>
    {/* Aquí iría el resto de tu aplicación */}
  </BrowserRouter>
);
};


export default App;
