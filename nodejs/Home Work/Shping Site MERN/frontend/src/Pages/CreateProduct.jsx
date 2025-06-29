import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Header } from "../Layout/Header";
import Footer from "../Layout/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosInstance from "../Api/axionInstance/axiosInstance";
import { create_product_end } from "../Api/end_point";

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("price", data.price);
      formData.append("description", data.description);
      formData.append("brand", data.brand);

      colors.forEach((color, index) => {
        formData.append(`colors[${index}]`, color);
      });

      sizes.forEach((size, index) => {
        formData.append(`sizes[${index}]`, size);
      });

      if (data.images && data.images.length > 0) {
        Array.from(data.images).forEach((file) => {
          formData.append("images", file);
        });
      }

      const response = await axiosInstance.post(create_product_end, formData);

      console.log("Success:", response.data);
      alert("Product created successfully!");

      reset();
      setColors([]);
      setSizes([]);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create product.");
    }
  };

  const handleColorsInput = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault();
      setColors([...colors, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  const handleSizesInput = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault();
      setSizes([...sizes, e.target.value.trim()]);
      e.target.value = "";
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <div className="container">
        <Form className="creatForm" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center">Product Create</h1>

          <Form.Group className="mb-3">
            <Form.Label>Product Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Title"
              {...register("title")}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product Price"
              {...register("price")}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Colors</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Color (Press Enter)"
              onKeyDown={handleColorsInput}
            />
            <div className="mt-2">
              {colors.map((color, index) => (
                <span key={index} className="badge bg-primary me-1">
                  {color}
                </span>
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Description"
              {...register("description")}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Size</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Size (Press Enter)"
              onKeyDown={handleSizesInput}
            />
            <div className="mt-2">
              {sizes.map((size, index) => (
                <span key={index} className="badge bg-success me-1">
                  {size}
                </span>
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Product Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Brand"
              {...register("brand")}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Products Images</Form.Label>
            <Form.Control type="file" multiple {...register("images")} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default CreateProduct;
