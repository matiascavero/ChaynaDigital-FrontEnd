import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavB() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand">Chayna Digital</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current='page' to='/'>
              <b>Inicio</b>
            </Link>
            <Link className="nav-link" to='/Servicios'>
              <b>Servicios</b>
            </Link>
            <Link className="nav-link" to='/SobreChayna'>
              <b>Sobre Chayna</b>
            </Link>
            <Link className="nav-link" to='/Contacto'>
              <b>Contacto</b>
            </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavB;
