import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
const Carousels = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  const carousalBanner = [
    {
      imgurl: 'lbanner4.webp',
    },
    {
      imgurl: 'lbanner4.webp',
     
    },
    {
      imgurl: 'lbanner4.webp',
     
    }
  ];
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: '300px'}}>
        {carousalBanner.length > 0 && carousalBanner.map((slider,index) => {
          return (
            <Carousel.Item key={index}>
              <img src={slider.imgurl} text="First slide" className='img-fluid' />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Carousels
