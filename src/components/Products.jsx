import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Products = () => {
  return (
    <div className="product-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <img src="./w1.jpg" alt="product1" className="product-image" />
          </Col>
          <Col md={4}>
            <img src="./w2.jpg" alt="product2" className="product-image" />
          </Col>
          <Col md={4}>
            <img src="./w3.jpg" alt="product3" className="product-image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
