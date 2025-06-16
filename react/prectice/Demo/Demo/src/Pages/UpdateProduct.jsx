import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosInstance from "../API/Axiosinstance";
import { product_update_end, single_product_end } from "../API/Endpoints";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;
  useEffect(() => {
    axiosInstance.get(single_product_end + id).then((res) => {
      // console.log(res.data.data);
      reset({ ...res.data.data });
    });
  }, []);
  const submitHandle = (data) => {
    console.log("Form Data ", data);
    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

    axiosInstance.post(product_update_end, formData).then((res) => {
      console.log(res.data);
      alert("Product Update Suceess");
      navigate("/products");
    });
  };
  return (
    <>
      <div className="container">
        <Form onSubmit={handleSubmit(submitHandle)}>
          <h1 className="text-center">Update Products</h1>
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

          <Button variant="primary" type="submit">
            Save Product
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateProduct;
