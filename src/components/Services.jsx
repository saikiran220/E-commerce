import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { GiReturnArrow } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";

const Services = () => {
  
    const factsContent=[
        {
            icon:<TbTruckDelivery />,
            factContent1:'Free Shipping for',
            factContent2:'$ 78'
        },
        {
            icon:<GiReturnArrow />,
            factContent1:'10 days easy ',
            factContent2:'Return'
        },
        {
            icon:<RiCustomerServiceFill />,
            factContent1:'24/7 Customer',
            factContent2:'Support'
        }
    ]

  return (
    <div className="facts-block">
      <Container>
        <Row className="fadeInUp wow">
            {factsContent.length>0 && factsContent.map((item)=>{
                return(
                   <Col md={4}>
                    <h5>{item.icon}</h5>
                    <h6>{item.factContent1}</h6>
                    <p>{item.factContent2}</p>
                    </Col>
                )
            })}
        </Row>
        <Row>
         
        </Row>
      </Container>
    </div>
  )
}

export default Services
