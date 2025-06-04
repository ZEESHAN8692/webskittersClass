import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signup_end } from "../Api/end_point";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Api/axiosInstance";

const MyFormCom = () => {
  // const apiUrl = base_url + signup_end;
  const navigater = useNavigate();
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    error: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });
  const [image, setImage] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    let err = { ...input.error };
    switch (name) {
      case "first_name":
        err.first_name = value.match(/^.{4,}$/)
          ? ""
          : "First name must be at least 4 characters.";
        break;

      case "last_name":
        err.last_name = value.match(/^.{4,}$/)
          ? ""
          : "Last name must be at least 4 characters.";
        break;

      case "email":
        err.email = value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
          ? ""
          : "Invalid email format.";
        break;

      case "password":
        err.password = value.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/
        )
          ? ""
          : "Password must be at least 6 characters, include uppercase, lowercase, number, and special character.";
        break;

      default:
        break;
    }

    setInput({ ...input, [name]: value, error: err });
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSub = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password, error } = input;
    if (!first_name || !last_name || !email || !password || !image) {
      return alert("Please Fill All Field");
    } else if (
      error.first_name ||
      error.last_name ||
      error.email ||
      error.password
    ) {
      return alert("Validation Error");
    } else {
      console.log("Collected Data", input, image);

      let data = new FormData();
      data.append("first_name", input.first_name);
      data.append("last_name", input.last_name);
      data.append("email", input.email);
      data.append("password", input.password);
      data.append("profile_pic", image);

      axiosInstance
        .post(signup_end, data)
        .then((res) => {
          if (res.status === 200) {
            alert("form Submit Successfully");
            // console.log(res);
            navigater("/login-form");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Form onSubmit={handleSub}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="first_name"
            onChange={handleInput}
            required
          />

          <Form.Text className="text-danger">
            {input.error.first_name}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="last_name"
            onChange={handleInput}
            required
          />
          <Form.Text className="text-danger">{input.error.last_name}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
            required
          />
          <Form.Text className="text-danger">{input.error.email}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Password"
            name="password"
            onChange={handleInput}
            required
          />
          <Form.Text className="text-danger">{input.error.password}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Profile Pic</Form.Label>
          <Form.Control
            type="file"
            placeholder="profile_pic"
            name="profile_pic"
            onChange={handleImage}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default MyFormCom;
