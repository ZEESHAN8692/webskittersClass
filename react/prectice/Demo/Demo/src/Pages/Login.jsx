import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosInstance from "../API/Axiosinstance";
import { login_end } from "../API/Endpoints";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const inputHAndle = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSub=(e)=>{
    e.preventDefault()
    // console.log(input)
    axiosInstance.post(login_end,input).then((res)=>{
      console.log(res.data.token)
  
      if(res.status===200){
        alert("login Successfull")
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("name",res.data.data.first_name)

        navigate("/profile")
      }
    }).catch((err)=>console.log(err))
  }
  return (
    <>
      <br />
      <div className="container">
        <Form onSubmit={handleSub}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={inputHAndle}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={inputHAndle}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
