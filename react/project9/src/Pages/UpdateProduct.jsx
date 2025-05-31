import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import base_url from "../../Api/base_url";
import { product_single_end, product_update_end } from "../../Api/end_point";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UpdateProduct = () => {
  const { id } = useParams();
  const updateApiUrl = base_url + product_update_end;
  const getSingleDataApi = base_url + product_single_end + id;
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
    axios
      .get(getSingleDataApi, {
        headers: {
          "x-access-token": sessionStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
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
    axios
      .post(updateApiUrl, updateData, {
        headers: {
          "x-access-token": sessionStorage.getItem("token"),
          "Content-Type": "application/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Update Product Successfull");
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>

            <Form.Control
              type="text"
              placeholder="Product title"
              name="title"
              onChange={handleInput}
              required
              value={data.title}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="description"
              name="description"
              onChange={handleInput}
              required
              value={data.description}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
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

export default UpdateProduct;
