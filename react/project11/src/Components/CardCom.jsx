import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const CardCom = ({ product }) => {
  // console.log(product);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Title>Price : ${product.price}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link to={`/singleProduct/${product.id}`}>
            <Button variant="primary">Show Product</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCom;
