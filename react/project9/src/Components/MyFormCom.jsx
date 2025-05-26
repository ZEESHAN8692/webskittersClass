import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import base_url from "../../Api/base_url";
import { signup_end } from "../../Api/end_point";

const MyFormCom = () => {
  const apiUrl = base_url + signup_end;
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [image, setImage] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSub = (e) => {
    e.preventDefault();
    console.log("Collected Data", input, image);

    let data = new FormData();
    data.append("first_name", input.first_name);
    data.append("last_name", input.last_name);
    data.append("email", input.email);
    data.append("password", input.password);
    data.append("profile_pic", image);

    axios
      .post(apiUrl, data, {
        headers: {
          "Content-Type": "application/form-data",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("form Submit Successfully");
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Form onSubmit={handleSub}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            name="first_name"
            onChange={handleInput}
            required
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="last_name"
            onChange={handleInput}
            required
          />
          {/* <Form.Text className="last_name">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleInput}
            required
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pasword"
            name="password"
            onChange={handleInput}
            required
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
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
