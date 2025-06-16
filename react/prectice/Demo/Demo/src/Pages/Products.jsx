import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import axiosInstance from "../API/Axiosinstance";
import {
  delete_product_end,
  product_create_end,
  product_list_end,
} from "../API/Endpoints";
import base_url from "../API/Baseurl";
import { useNavigate } from "react-router";

const Products = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const submitHandle = (data) => {
    console.log("Form Data ", data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    axiosInstance.post(product_create_end, formData).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("Product Created");
        setShow(false);
        setRefresh((prev) => !prev);
      }
    });
  };

  useEffect(() => {
    axiosInstance
      .post(product_list_end, { page: 1, perpage: 9 })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    axiosInstance
      .post(delete_product_end, { id })
      .then((res) => {
        console.log("Delete res", res.data);
        alert("Product Delete Success");
        setRefresh((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (id) => {
    navigate(`/update-product/${id}`);
  };
  const handleShowProduct = (id) => {
    navigate(`/single-product/${id}`);
  };
  return (
    <>
      <br />
      <Button variant="primary" onClick={handleShow}>
        Add Products
      </Button>
      <br />
      <div className="container">
        <div className="row gap-5">
          {data?.map((products) => {
            const { title, description, image } = products;
            const folderPath = "uploads/product/";
            const img = base_url + folderPath + image;
            return (
              <Card style={{ width: "18rem" }} key={products._id}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <div className="d-flex gap-2">
                    <Button
                      variant="primary"
                      onClick={() => handleShowProduct(products._id)}
                    >
                      Show Product
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleDelete(products._id)}
                    >
                      Delete Product
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => handleUpdate(products._id)}
                    >
                      Update Product
                    </Button>
                    {/* <i className="fa-solid fa-pen" onClick={() => handleUpdate(products._id)}></i> */}
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Product Create Model  */}
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit(submitHandle)}>
          <Modal.Header closeButton>
            <Modal.Title>Create Products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="idTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Title is Required",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.title?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="idDes">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                {...register("description", {
                  required: {
                    value: true,
                    message: "description is Required",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.description?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="idImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Image"
                {...register("image", {
                  required: {
                    value: true,
                    message: "image is Required",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.image?.message}
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Product
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Products;
