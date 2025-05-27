import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import base_url from "../../Api/base_url";
import { login_end } from "../../Api/end_point";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginformCom = () => {
  const navigater = useNavigate();
  const apiUrl = base_url + login_end;
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSub = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, input)
      .then((res) => {
        let { token, data } = res.data;
        
        if (res.status === 200) {
          alert("Login Successfully");
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("name", data.first_name);
          navigater("/dashboard");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));

    console.log("Form Data ", input);
  };
  return (
    <>
      <div className="container">
        <Form onSubmit={handleSub}>
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

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LoginformCom;
