import React from "react";
import "../../main.scss";
import NavB from "./containers/NavB";
import FooterX from "./containers/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./sections/Inicio";
import Contacto from './sections/Contacto';
import Servicios from "./sections/Servicios";
import SobreChayna from "./sections/SobreChayna";
import Error from "./sections/Error";
const App = () => {
  return (
    <div className="div-App">
      <BrowserRouter>
      <NavB/>
        <Routes>
         <Route path="/" element={<Inicio/>}/>
         <Route path="/Contacto" element={<Contacto/>}/>
         <Route path="/Servicios" element={<Servicios/>}/>
         <Route path="/SobreChayna" element={<SobreChayna/>}/>
         <Route path="/*" element={<Error/>}/>
        </Routes>
        <FooterX/>
      </BrowserRouter>
    </div>
  );
};

export default App;

// nav-link active aria-current= ' page'