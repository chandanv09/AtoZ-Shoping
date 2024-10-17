import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide from "../../assets/images/banner.jpg";
function Banner() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={Slide} alt="Image One" />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={Slide} alt="Image Two" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
