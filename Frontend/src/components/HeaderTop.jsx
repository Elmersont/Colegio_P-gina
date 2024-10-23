import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeaderTop() {
  return (
    <div className="Header-top">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <i className="bi bi-geo-alt"></i> San Nicolás 681, San Miguel
          </Col>
          <Col md="auto">
            <i className="bi bi-whatsapp"></i> +56927096973
          </Col>
          <Col xs lg="2">
            <i className="bi bi-instagram"></i> colegiolucilagodoy
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderTop;