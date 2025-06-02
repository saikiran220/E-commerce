// PaymentSuccess.jsx
import React from 'react'
import { useCart } from './CartContext'
import { useEffect } from 'react'

const PaymentSuccess = () => {
  const {  } = useCart()

  useEffect(() => {
    localStorage.removeItem('cartItems')
    window.location.reload(); // to refresh cart
  }, [])

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
    </div>
  )
}

export default PaymentSuccess
