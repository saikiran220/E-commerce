import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BreadCrumb = ({bannerImg,pageTitle}) => {
    return (
        <>
            <div className='inner-banner-section position-relative'>
                <div className='background-img'>
                    <img src={bannerImg} className='slideshow-bg__img' />
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className='slideshow_content'>
                                <div className='banner-text'>
                                    <h3>{pageTitle}</h3>
                                    <ul>
                                        <li><Link to='/'>Home</Link></li>
                                        <li>Pages</li>
                                        <li>{pageTitle}</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BreadCrumb
