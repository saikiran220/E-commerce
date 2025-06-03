import React, { useEffect } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('cartItems');
    
    // Optional: delay redirect for 2 seconds
    const timer = setTimeout(() => {
      navigate('/order-placed');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>🎉 Payment Successful!</h1>
      <p>Redirecting to your order confirmation...</p>
    </div>
  );
};

export default PaymentSuccess;
