import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselData from "../API Like Data/carouselData.js";

const Slider = () => {
  return (
    <>
      <div>
        <Carousel data-bs-theme="dark">
          {carouselData.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100 img-fluid"
                src={item.imageUrl}
                alt={item.altText}
                height={"300px"}
              />
              <Carousel.Caption>
                <h5 className="text-white">{item.heading}</h5>
                <p className="text-white">{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
