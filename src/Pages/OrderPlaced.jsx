import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HeaderNav from '../components/HeaderNav';
import BreadCrumb from '../components/BreadCrumb';
import { useNavigate } from 'react-router-dom';

const OrderPlaced = () => {
  const banner = 'assets/shop_banner_character1.png';
  const navigate = useNavigate();
  

  useEffect(() => {
    // Clear cart after order
    localStorage.removeItem('cartItems');
  }, []);

  return (
    <div>
      <HeaderNav />
      <BreadCrumb pageTitle={'Order Placed'} bannerImg={banner} />

      <Container className="text-center" style={{ marginTop: '350px', marginBottom: '100px' }}>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1>✅ Your Order Has Been Placed Successfully!</h1>
            <p className="mt-4">Thank you for shopping with us.</p>
            <p>You’ll receive a confirmation email shortly.</p>

            <Button variant="primary" className="mt-4" onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderPlaced;
