import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/HeaderTop.css';

function HeaderTop() {
  return (
    <div className="Header-top">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4" className="d-flex align-items-center justify-content-center">
            <a className='enlace' href="https://www.google.com/maps/place/San+Nicolás+681,+8930049+San+Miguel,+Región+Metropolitana/@-33.501599,-70.6447445,17z/data=!3m1!4b1!4m6!3m5!1s0x9662dab90382d4d5:0xa224325777439b92!8m2!3d-33.501599!4d-70.6421696!16s%2Fg%2F11gr7t9s0g?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-geo-alt"></i> San Nicolás 681, San Miguel
            </a>
          </Col>
          <Col xs lg="4" className="d-flex align-items-center justify-content-center">
            <a className='enlace' href="https://wa.me/56927096973" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp"></i> +56927096973
            </a>
          </Col>
          <Col xs lg="4" className="d-flex align-items-center justify-content-center">
            <a className='enlace' href="https://www.instagram.com/colegiolucilagodoy/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i> colegiolucilagodoy
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderTop;