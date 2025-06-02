// Checkout.jsx
import React from 'react'
import { useCart } from './CartContext'
import { useNavigate } from 'react-router-dom'
import { Button, Table, Container, Row, Col } from 'react-bootstrap'

const Checkout = () => {
  const { cartItems, grandtotal } = useCart()
  const navigate = useNavigate()

  const handlePayment = () => {
    // Simulate payment gateway redirect
    alert("Redirecting to payment gateway...");
    navigate('/payment-success');
  }

  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
        <Col>
          <h2>Checkout</h2>
          <Table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>{grandtotal}</strong></td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={handlePayment}>Pay Now</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout
