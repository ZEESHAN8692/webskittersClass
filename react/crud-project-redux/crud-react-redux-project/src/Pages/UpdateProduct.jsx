import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProducts,
  getSingleProductUp,
} from "../Redux/Slice/UpdateProductSlice";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { singleProductData, updateResponse, isLoading, error, success } =
    useSelector((state) => state.update);
  const dispatch = useDispatch();
  console.log("Single Product Data", singleProductData.data);
  console.log("Update Response", updateResponse);

  const [images, setImages] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleImage = (e) => {
    console.log(e);
    setImages(Array.from(e.target.files));
  };
  // get Single Product
  useEffect(() => {
    dispatch(getSingleProductUp(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (singleProductData) {
      reset({
        title: singleProductData.data?.title,
        price: singleProductData.data?.price,
        brand: singleProductData.data?.brand,
        description: singleProductData.data?.description,
      });
    }
  }, [singleProductData, reset]);

  const onSubmit = async (formData) => {
    const dataSend = new FormData();
    dataSend.append("title", formData.title);
    dataSend.append("price", formData.price);
    dataSend.append("brand", formData.brand);
    dataSend.append("description", formData.description);

    images.forEach((image) => {
      dataSend.append("images", image);
    });
    dispatch(editProducts({ id, data: dataSend }));
    // console.log(images);
    navigate("/");
  };

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <p>Error:- {error}</p>}
      <Container className="mt-5" style={{ maxWidth: "600px" }}>
        <h3>Update Product</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
          </Form.Group>

          {/* Price */}
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter price"
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && (
              <p className="text-danger">{errors.price.message}</p>
            )}
          </Form.Group>

          {/* Brand */}
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter brand"
              {...register("brand", { required: "Brand is required" })}
            />
            {errors.brand && (
              <p className="text-danger">{errors.brand.message}</p>
            )}
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </Form.Group>

          {/* Images (optional, comma-separated string for now) */}
          <Form.Group className="mb-3">
            <Form.Label>Images </Form.Label>
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={handleImage}
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default UpdateProduct;
