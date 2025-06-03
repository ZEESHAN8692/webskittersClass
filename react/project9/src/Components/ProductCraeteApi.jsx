import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { product_create_end } from "../Api/end_point";
import axiosinstace from "../axiosInstance/axiosinstance";

const ProductCraeteApi = () => {
  const apiUrl = product_create_end;
  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  const [image, setImage] = useState({});
  const handleInput = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    setInput({ ...input, [name]: value });
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
    // console.log(e.target.files[0]);
  };
  const handleSub = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", input.title);
    data.append("description", input.description);
    data.append("image", image);
    axiosinstace
      .post(apiUrl, data, {
        headers: {
          "x-access-token": sessionStorage.getItem("token"),
          "Content-Type": "application/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Product Create Successfull");
          navigator("/product-list");
        } else {
          console.log(res);
        }
      });
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">Product Create</h1>
        <Form onSubmit={handleSub}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>

            <Form.Control
              type="text"
              placeholder="Product title"
              name="title"
              onChange={handleInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="description"
              name="description"
              onChange={handleInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter image"
              name="image"
              onChange={handleImage}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ProductCraeteApi;
