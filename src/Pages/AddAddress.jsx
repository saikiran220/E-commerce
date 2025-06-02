import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import HeaderNav from '../components/HeaderNav';
import BreadCrumb from '../components/BreadCrumb';
import { useNavigate } from 'react-router-dom';

const AddAddress = () => {
  const banner = 'assets/shop_banner_character1.png';

  const [showModal, setShowModal] = useState(false);
  const [addressData, setAddressData] = useState({
    fullName: '',
    mobile: '',
    addressLine: '',
    city: '',
    state: '',
    zip: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store in localStorage (or send to backend if needed)
    localStorage.setItem('userAddress', JSON.stringify(addressData));

    // Show success modal
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate('/checkout'); // Navigate to checkout after success
  };

  return (
    <>
      <HeaderNav />
      <BreadCrumb pageTitle={'Add Address'} bannerImg={banner} />
      <Container style={{ marginTop: '400px', marginBottom: '50px' }}>
        <Row className="justify-content-center">
          <Col md={8}>
            <h3 style={{textAlign:"center",  color:"#c43af2"}}>Add Delivery Address</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  required
                  onChange={handleChange}
                  value={addressData.fullName}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  required
                  onChange={handleChange}
                  value={addressData.mobile}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address Line</Form.Label>
                <Form.Control
                  type="text"
                  name="addressLine"
                  required
                  onChange={handleChange}
                  value={addressData.addressLine}
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      required
                      onChange={handleChange}
                      value={addressData.city}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      required
                      onChange={handleChange}
                      value={addressData.state}
                    />
                  </Form.Group>
                </Col>
                <Col md={2}>
                  <Form.Group className="mb-3">
                    <Form.Label>ZIP</Form.Label>
                    <Form.Control
                      type="text"
                      name="zip"
                      required
                      onChange={handleChange}
                      value={addressData.zip}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center">
                <Button type="submit" variant="primary">Save Address</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Success Modal */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Address Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your delivery address has been saved successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleModalClose}>
            Proceed to Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddAddress;
