import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SlBell, SlBasket, SlUser } from "react-icons/sl";
import { useCart } from '../Pages/CartContext';
import { useAuth } from '../Pages/AuthContext';

const HeaderNav = () => {
  const logoimg = 'logo1.png'
  const { cartItems } = useCart();
  const { logout,isLoggedIn } = useAuth()
 
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    setCartItemCount(cartItems.length)
    console.log("cartItemCount on header", cartItemCount);
  }, [cartItems])

  

  const handlelogout = () => {
    
    logout()
  }
 



  return (
    <div>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href='/'> <img src={logoimg} height={"40px"} /> React-Ecommerce </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">  Home </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/shop" className="nav-link">  Shop </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">  Contact </NavLink>
                </li>
               
              </ul>
            </Nav>
            <Nav className="ml-auto ">
              <ul className="nav navbar-nav navbar-right rightNavigation ">

                { !isLoggedIn && <li className="nav-item">
                  <NavLink to="/login" className="nav-link"> Login </NavLink>
                </li> }
                {/* { isLoggedIn && <li className="nav-item">
                  <NavLink onClick={() => handlelogout()} className="nav-link"> LogOut </NavLink>
                </li> } */}

                <li className="nav-item">
                  <NavLink to="#" className="nav-link"> <SlBell /></NavLink>
                </li>
                <li className="nav-item cartCount">
                  <NavLink to="/cart" className="nav-link"> <SlBasket /></NavLink>
                  <span>{cartItemCount}</span>

                </li>
                <li className="nav-item">
                  <NavLink to="#" className="nav-link">
                    <Dropdown className='profile'>
                      <Dropdown.Toggle id="dropdown-basic">
                        <SlUser />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {isLoggedIn && 
                        <Dropdown.Item  onClick={() => handlelogout()}>logout</Dropdown.Item>
                        }
                        
                      </Dropdown.Menu>
                    </Dropdown></NavLink>
                </li>

              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
export default HeaderNav
