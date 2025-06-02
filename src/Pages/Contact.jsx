import React from 'react';
import HeaderNav from '../components/HeaderNav';
import BreadCrumb from '../components/BreadCrumb';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const banner = 'assets/shop_banner_character1.png';

  return (
    <div>
      <HeaderNav />
      <BreadCrumb pageTitle={'Contact'} bannerImg={banner} />
      
      <Container style={{ marginTop: '400px', marginBottom: '50px' }}>
        <Row>
          <Col md={6}>
            <h3>📞 Contact Information</h3>
            <p><strong>Customer Support:</strong> support@shopwise.com</p>
            <p><strong>Phone:</strong> +1 (800) 123-4567</p>
            <p><strong>Business Hours:</strong> Mon – Sat: 9:00 AM – 6:00 PM</p>
            <p><strong>Address:</strong> 123 Market Street, Shopping City, USA</p>
          </Col>

          <Col md={6}>
            <h3>📬 Send Us a Message</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message..." />
              </Form.Group>

              <Button variant="primary" type="submit" disabled>
                Send Message
              </Button>
              <p className="text-muted mt-2" style={{ fontSize: '14px' }}>
                (Note: This form is for layout only – no backend connected.)
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

