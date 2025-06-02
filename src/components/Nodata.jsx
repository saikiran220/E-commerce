import React from 'react'
import { Col } from 'react-bootstrap';

const Nodata = () => {
    const noData='assets/nodata.gif'
  return (
    <>
      <Col className='no-data text-center'>
        <img src={noData} />
        <p> No Items are in Cart...</p>
      </Col>
    </>
  )
}

export default Nodata
