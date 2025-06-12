import axios from "axios";
import {  useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const form = useForm();
  const { id } = useParams();
  console.log("id",id);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  useEffect(() => {
    axios.get(`http://localhost:3000/user/${id}`)
    .then((res) => {
        // console.log(res.data,"fetched user")
        reset({...res.data})
    //   setData(res.data);
    }).catch(err=>{
        console.log("rror to fetch user for update",err);        
    });    
  }, []);

  //   console.log("Error Message", errors);
  const submitHandler = (data) => {
    console.log("from Data", data);
    axios
      .put(`http://localhost:3000/user/${id}`, data)
      .then(() => {
        alert("Data Update Succes");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <br />
      <div className="container">
        <Form
          className="border p-3 rounded shadow"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="text-center">Update Form</h1>
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
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is Require",
                },
              })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateUser;
