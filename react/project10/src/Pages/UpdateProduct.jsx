import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { product_single_end, product_update_end } from "../Api/end_point";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosInstance from "../Api/axiosInstance";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const updateApiUrl = product_update_end;
  const getSingleDataApi = product_single_end + id;
  const [data, setData] = useState({});
  const [image, setImage] = useState({});
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setData({ ...data, [name]: value });
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const getSingleProduct = () => {
    axiosInstance
      .get(getSingleDataApi)
      .then((res) => {
        if (res.status === 200) {
          const { title, description } = res.data.data;

          setData({ title: title, description: description });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  const handleSub = (e) => {
    e.preventDefault();

    const updateData = new FormData();
    updateData.append("id", id);
    updateData.append("title", data.title);
    updateData.append("description", data.description);
    updateData.append("image", image);

    axiosInstance.post(updateApiUrl, updateData).then((res) => {
      if (res.status === 200) {
        alert("Update Product Successful");
        navigate("/product-list");
      } else {
        console.log(res);
      }
    });
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Update Product</h1>
        <Form onSubmit={handleSub}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product title"
              name="title"
              onChange={handleInput}
              required
              value={data.title || ""}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="description"
              name="description"
              onChange={handleInput}
              required
              value={data.description || ""}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter image"
              name="image"
              onChange={handleImage}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Product
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateProduct;
