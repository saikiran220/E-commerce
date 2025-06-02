import React from 'react'
import { Container,Col, Row, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <div>
      <Container fluid  style={{textAlign:"center", fontFamily:"sans-serif"}}>
         <Row style={{backgroundColor:'#262a31',color:'#ffff', fontSize:'small'}}>
            <Col md={4} style={{display:'flex',marginTop:"30px"}}>
             <ul style={{listStyle:'none'}}>
                <li><h5>BY PHONE</h5></li>
                <li><p>Monday to Friday, 9am to 4pm PST</p></li>
                <li><h6>North America Toll-Free:</h6></li>
                <li><p>1-877-930-7483</p></li>
                <br />
                <li><p>International:</p></li>
                <li><h6>1-604-637-0780</h6></li>
             </ul>
            </Col>
            <Col md={4}style={{marginTop:"30px"}}>
               <ul style={{listStyle:'none'}}>
                <li><h6>START A NEW CASE</h6></li>
                <li><p>Just send us your questions or concerns by starting a new case and we will give you the help you need.</p></li>
                <li>
                    <Button>Start Here</Button>
                </li>
               </ul>
            </Col>
            <Col md={4 }style={{marginTop:"30px"}}>
              <ul style={{listStyle:'none'}}>
                <li><h6>LIVE CHAT</h6></li>
                <li><p>Chat with a member of our in-house team.</p></li>
                <li><Button>Start Chat</Button></li>
              </ul>
            </Col>

         </Row>
      </Container>
    </div>
  )
}

export default Contact
