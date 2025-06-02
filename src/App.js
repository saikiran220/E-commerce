
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import { AuthProvider } from './Pages/AuthContext';
import Loginpage from './Pages/Loginpage';
import { CartPovider } from './Pages/CartContext';
import Cartpage from './Pages/Cartpage';
import PrivateRoutes from './Pages/PrivateRoutes';
import Checkout from './Pages/Checkout';
import PaymentSuccess from './Pages/PaymentSuccess';
import AddAddress from './Pages/AddAddress';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <CartPovider>
            {/* <Routes>
              <Route path='/login' element={<Loginpage/> } />
              <Route path='/*' element={
                <PrivateRoutes> */}
            <Routes>
              <Route index element={<Home />} />
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Loginpage />} />
              <Route path='/cart' element={<Cartpage />} />
              <Route path="/checkout" element={
                <PrivateRoutes>
                  <Checkout />
                </PrivateRoutes>
              } />
              <Route path="/payment-success" element={
                <PrivateRoutes>
                  <PaymentSuccess />
                </PrivateRoutes>
              } />
              <Route path="/add-address" element={<PrivateRoutes><AddAddress /></PrivateRoutes>} />
              {/* <Route path='/login' element={<Loginpage />} /> */}
            </Routes>
            {/* </PrivateRoutes>
              } />
            </Routes>  */}
          </CartPovider>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
