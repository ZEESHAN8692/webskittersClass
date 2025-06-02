import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import base_url from "../Api/base_url";
import { registration_end } from "../Api/end_point";
import axios from "axios";
const Registration = () => {
  const apiurl = base_url + registration_end;

  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(apiurl).then((res) => {
      setData(res.data);
    });
  }, []);
  const handleInput = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSub = (e) => {
    e.preventDefault();

    if (input.email === data.email) {
      return alert("email alredy used");
    } else if (input.username === data.username) {
      return alert("username alredy used");
    } else {
      axios
        .post(apiurl, input)
        .then(() => {
          alert("Restration success");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
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
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={handleInput}
            required
          />
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
        </Form.Group>

        <Button variant="primary" type="submit">
          Registration
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
