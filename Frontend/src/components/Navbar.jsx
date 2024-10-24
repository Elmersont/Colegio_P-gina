import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Navbar.css';

function NavbarColegio() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAdmisionDropdown, setShowAdmisionDropdown] = useState(false);
  const [showNuestroColegioDropdown, setShowNuestroColegioDropdown] = useState(false);
  const [showDocumentosDropdown, setShowDocumentosDropdown] = useState(false);
  const [showCursosDropdown, setShowCursosDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (setDropdown) => {
    if (!isMobile) {
      setDropdown(true);
    }
  };

  const handleMouseLeave = (setDropdown) => {
    if (!isMobile) {
      setDropdown(false);
    }
  };

  const handleDropdownClick = (dropdownState, setDropdown) => {
    if (isMobile) {
      setDropdown(!dropdownState);
    }
  };

  return (
    <Navbar expand="xl" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center ms-5">
          <img
            src="/assets/images/Logo CLG.jpeg"
            alt="Escudo Colegio Lucila Godoy"
            width="90"
            height="130"
            className="d-inline-block align-top"
          />
          <span className="ms-3">Colegio Lucila Godoy</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-5 d-flex justify-content-between"
            style={{ width: '90%' }}
            navbarScroll
          >
            <Nav.Link href="#action1">INICIO</Nav.Link>

            <NavDropdown
              title="ADMISIÓN"
              id="navbarScrollingDropdown"
              show={showAdmisionDropdown}
              onMouseEnter={() => handleMouseEnter(setShowAdmisionDropdown)}
              onMouseLeave={() => handleMouseLeave(setShowAdmisionDropdown)}
              onClick={() => handleDropdownClick(showAdmisionDropdown, setShowAdmisionDropdown)}
            >
              <NavDropdown.Item href="#action3">Admisión</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Otra acción</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Algo más aquí</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="NUESTRO COLEGIO"
              id="navbarScrollingDropdownLink"
              show={showNuestroColegioDropdown}
              onMouseEnter={() => handleMouseEnter(setShowNuestroColegioDropdown)}
              onMouseLeave={() => handleMouseLeave(setShowNuestroColegioDropdown)}
              onClick={() => handleDropdownClick(showNuestroColegioDropdown, setShowNuestroColegioDropdown)}
            >
              <NavDropdown.Item href="#action3">Acción</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Otra acción</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Algo más aquí</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="CURSOS"
              id="navbarScrollingDropdownCursos"
              show={showCursosDropdown}
              onMouseEnter={() => handleMouseEnter(setShowCursosDropdown)}
              onMouseLeave={() => handleMouseLeave(setShowCursosDropdown)}
              onClick={() => handleDropdownClick(showCursosDropdown, setShowCursosDropdown)}
            >
              <NavDropdown.Item href="#action3">Acción</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Otra acción</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Algo más aquí</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action1">NOTICIAS</Nav.Link>

            <NavDropdown
              title="DOCUMENTOS"
              id="navbarScrollingDropdownDocumentos"
              show={showDocumentosDropdown}
              onMouseEnter={() => handleMouseEnter(setShowDocumentosDropdown)}
              onMouseLeave={() => handleMouseLeave(setShowDocumentosDropdown)}
              onClick={() => handleDropdownClick(showDocumentosDropdown, setShowDocumentosDropdown)}
            >
              <NavDropdown.Item href="#action3">Acción</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Otra acción</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Algo más aquí</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarColegio;