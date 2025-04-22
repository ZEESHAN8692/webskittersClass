import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardData from "../API Like Data/cardData.js";

const Carddesign = () => {
  return (
    <>
      {cardData.map((item) => (
        <Card
          style={{
            width: "18rem",
            backgroundColor: "#161c31",
            border: "1px solid white",
            color: "white",
          }}
          key={item.id}
        >
          <Card.Img
            variant="top"
            src={item.imageUrl}
            style={{
              maxHeight: "300px",
              width: "250px auto",
              objectFit: "contain",
              display: "block",
              borderRadius: "10px",
              marginTop: "5px",
            }}
          />
          <Card.Body style={{ backgroundColor: "transparent" }}>
            <Card.Title className="text-center">{item.title}</Card.Title>
            <Card.Text className="text-center">{item.description}</Card.Text>
            <div className="d-flex justify-content-around ">
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#7367F0",
                  border: "1px solid #7367F0",
                }}
              >
                Buy Now
              </Button>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#7367F0",
                  border: "1px solid #7367F0",
                }}
              >
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Carddesign;
