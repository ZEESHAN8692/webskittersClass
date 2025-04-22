import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const carouselData = [
    {
      id: 1,
      imageUrl:
        "https://img.freepik.com/free-photo/professionalism-ecommerce-business-concept-seriouslooking-determined-smart-gorgeous-redhead-woma_1258-143231.jpg?uid=R132759379&ga=GA1.1.607066617.1722413689&semt=ais_hybrid&w=740",
      altText: "first Slider",
      heading: "Hello Suman",
      description: "Hello World",
    },
    {
      id: 2,
      imageUrl:
        "https://img.freepik.com/free-photo/concerned-tensed-attractive-redhead-female-student-cant-write-down-everything-from-blackboard-after_1258-126207.jpg?uid=R132759379&ga=GA1.1.607066617.1722413689&semt=ais_hybrid&w=740",
      altText: "second slider",
      heading: "Hello Sneha ",
      description: "Hello World",
    },
    {
      id: 3,
      imageUrl:
        "https://img.freepik.com/free-photo/impressed-startled-excited-cute-redhead-female-receive-big-gift-shaping-large-object-product_1258-130326.jpg?uid=R132759379&ga=GA1.1.607066617.1722413689&semt=ais_hybrid&w=740",
      altText: "Second Slider",
      heading: "Hello Zeeshan",
      description: "Hello World",
    },
  ];
  return (
    <>
      <div>
        <Carousel data-bs-theme="dark">
          {carouselData.map((item) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.imageUrl}
                alt={item.altText}
              />
              <Carousel.Caption>
                <h5>{item.heading}</h5>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
