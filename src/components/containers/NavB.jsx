import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavB() {
  return (
    <>
    
 
    <Navbar expand="lg" className="bg-transparent" style={{ marginLeft: '55%' }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ display: 'none' }}>Navbar</Navbar.Brand> {/* Esto oculta la palabra "Navbar" */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', fontSize: '16px', }} // Establecer el tamaño de fuente a 16px
              
            >
              <Nav.Link href="#sobreMi" style={{ cursor: 'pointer', backgroundColor: '#CFB7C1', borderRadius: '5px', marginRight: '10px', padding: '5px' ,fontSize: "1.1em",width: "130px", textAlign: 'center' }}><b>Sobre Mí</b></Nav.Link>
              <Nav.Link href="#services" style={{ cursor: 'pointer', backgroundColor: '#CFB7C1', borderRadius: '5px', marginRight: '10px', padding: '5px',fontSize: "1.1em", width: "130px", textAlign: 'center' }}><b>Servicios</b></Nav.Link>
              <Nav.Link href="#contact" style={{ cursor: 'pointer', backgroundColor: '#CFB7C1', borderRadius: '5px', marginRight: '10px', padding: '5px' ,fontSize: "1.1em", width: "130px", textAlign: 'center' }}><b>Contacto</b></Nav.Link>
              <Nav.Link href="#more" style={{ cursor: 'pointer', backgroundColor: '#CFB7C1', borderRadius: '5px', marginRight: '10px', padding: '5px',fontSize: "1.1em", width: "130px" , textAlign: 'center' }}><b>E-Book</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>





    </>
  );
}

export default NavB;


/*<section id="about">ABOUT</section>
<section id="projects">PROJECTS</section>
<section id="blog">BLOG</section>
<section id="contact">CONTACT ME</section>
*/