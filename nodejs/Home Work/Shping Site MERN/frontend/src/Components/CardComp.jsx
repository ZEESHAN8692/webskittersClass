import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const CardComp = ({ data, deleteProduct }) => {
  const navigate = useNavigate();
  const singleProduct = (slug) => {
    navigate(`/single-product/${slug}`);
  };

  const handleUpdate = (id) => {
    navigate(`/update-product/${id}`);
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={`http://${data.images[0]}`} />
        <Card.Body>
          <Card.Title>
            <b> {data.title.slice(0, 24)}...</b>
          </Card.Title>
          <Card.Title>
            <b> Price: ₹{data.price}</b>
          </Card.Title>
          <Card.Text>
            Size: {data.size[0]}... | Brand : {data.brand}
          </Card.Text>
          <Card.Text>{data.description.slice(0, 35)}...</Card.Text>

          <div className="d-flex  gap-2 ">
            <Button variant="success" onClick={() => singleProduct(data.slug)}>
              Show
            </Button>
            <Button variant="primary" onClick={() => handleUpdate(data._id)}>
              Update
            </Button>
            <Button variant="danger" onClick={() => deleteProduct(data._id)}>
              Delele
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComp;
