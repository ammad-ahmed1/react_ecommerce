import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const CrossFadeSlider = () => {
  return (
    <div>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/homepage/one.png'
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/homepage/two.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/homepage/three.png"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CrossFadeSlider