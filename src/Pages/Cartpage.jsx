import React, { useEffect, useState } from 'react'
import HeaderNav from '../components/HeaderNav';
import BreadCrumb from '../components/BreadCrumb';
import { useCart } from './CartContext';
import { Container, Row, Col, Table ,Button} from 'react-bootstrap';
import Nodata from '../components/Nodata'
import { useNavigate } from 'react-router-dom';


const Cartpage = () => {
  const cartBanner = 'assets/shop_banner8.png';
  
  const { grandtotal,cartItems,removeItemFromCart } = useCart();

  const [cartData, setCartdata] = useState([])

  useEffect(() => {
    setCartdata(cartItems)
  }, [cartItems])

  const removeHandler=(id)=>{
    removeItemFromCart(id)  ;
  }
  const navigate = useNavigate();


  return (
    <div>
      <HeaderNav />
      <BreadCrumb pageTitle={'Cart'} bannerImg={cartBanner} />
      <Container>
        <Row>
          <Col>
            {cartData.length > 0 ? (
              <Table style={{marginTop:'300px'}}>
                <thead>
                  <tr>
                    <th>Sno</th>
                    <th>Product Img</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th>Address</th>
                    <th>Buy</th>
                  </tr>
                </thead>
                <tbody>
                 
                    {cartData.map((items,index)=>{
                       const {id, image, title, price, category} = items;
                      return(
                        <>
                        <tr key={id}>
                        <td>{index+1}</td>
                          <td><img src={image} style={{height:'40px'}}/></td>
                          <td>{title}</td>
                          <td>{category}</td>
                          <td>{price}</td>
                          <td><Button onClick={()=>removeHandler(id)}>Remove</Button></td>  
                           <td>   <Button onClick={() => navigate('/add-address')}>Proceed to Address</Button></td>  
                         <td>   <Button onClick={() => navigate('/checkout')}>Proceed to Checkout</Button></td>  
                         </tr>     
                        </>
                      )
                    })}
                    <tr >
                      <td colSpan={5} className='text-right' >total:</td>
                      <td>{grandtotal}</td>
                    </tr>
                </tbody>
              </Table>
            ) : (<Nodata />)}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cartpage
