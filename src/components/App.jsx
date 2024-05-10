import React from "react";
import "../../main.scss";
import FooterX from "./containers/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./sections/Inicio";
import SobreMi from "./sections/SobreMi";
import Error from "./sections/Error";
import Header from "./containers/Header";
import Contacto from "./sections/Contacto";
import Servicios from "./sections/Servicios";
const App = () => {
  return (
    <div className="div-App">
      <BrowserRouter>
      <Header/>
        <Routes>
         <Route path="/" element={<Inicio/>}/>
         <Route path="/services" element={<Servicios/>}/>
         <Route path="/contact" element={<Contacto/>}/>
       
         <Route path="/sobreMi" element={<SobreMi/>}/>
         <Route path="/*" element={<Error/>}/>
        </Routes>
        <FooterX/>
      </BrowserRouter>
    </div>
  );
};

export default App;

// nav-link active aria-current= ' page'