import React from "react";
import Card from "react-bootstrap/Card";
import cardImage from "../API Like Data/cardImage";

const ImagesCard = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img
          src={cardImage.imageUrl}
          alt="Card image"
          className="img-fluid"
        />
        <Card.ImgOverlay>
          <Card.Title>{cardImage.title}</Card.Title>
          <Card.Text>{cardImage.description}</Card.Text>
          <Card.Text>Last updated {cardImage.time} mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default ImagesCard;
