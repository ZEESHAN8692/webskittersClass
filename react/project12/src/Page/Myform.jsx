import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const Myform = () => {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  //   const { errors } = fromState;
  console.log("Error Message", errors);
  const submitHandler = (data) => {
    console.log("from Data", data);
  };
  return (
    <>
      <br />
      <div className="container">
        <Form
          className="border p-3 rounded shadow"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="text-center">Register Form</h1>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Require",
                },
              })}
            />
            <Form.Text className="text-muted">{errors.name?.message}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" placeholder="Image" name="image" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Myform;
