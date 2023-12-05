import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="gradient-container">
      <Container>
        <Row>
          <Col>
            <h2>Column 1</h2>
            <p>Content for Column 1 goes here.</p>
          </Col>
          <Col>
            <h2>Column 2</h2>
            <p>Content for Column 2 goes here.</p>
          </Col>
          <Col>
            <h2>Column 3</h2>
            <p>Content for Column 3 goes here.</p>
          </Col>
          <Col>
            <h2>Column 4</h2>
            <p>Content for Columnhhhhhhhhhhhhhhhhhhhhh 4 goes here.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
