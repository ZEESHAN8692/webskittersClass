import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosInstance from "../API/Axiosinstance";
import { signup_end } from "../API/Endpoints";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate =useNavigate()
  const [input , setInput]=useState({
    first_name:"",
    last_name:"",
    email:"",
    password:""
  })
  const [image, setImage]=useState({})
  const inputHandle=(e)=>{
      console.log(e.target.value)
      const {name , value}=e.target
      setInput({...input , [name]:value })
  }
  const iMageHandle=(e)=>{
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  const handleSub=(e)=>{
    e.preventDefault()
    console.log("InputData", input ,image)
    const data = new FormData()
    data.append("first_name",input.first_name)
    data.append("last_name",input.last_name)
    data.append("email",input.email)
    data.append("password",input.password)
    data.append("profile_pic",image)

    axiosInstance.post(signup_end,data).then((res)=>{
      if(res.status===200){
        alert("Data submit succesfull")
        navigate("/login")

      }
    }).catch((err)=>console.log(err))

  }
  return (
    <>
      <br />
      <div className="container">
        <Form onSubmit={handleSub}>
           <Form.Group className="mb-3" controlId="formBasicFName">
            <Form.Label>First Name </Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" name="first_name"  onChange={inputHandle}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFlName">
            <Form.Label>Last Name </Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" name="last_name" onChange={inputHandle} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={inputHandle}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={inputHandle} />
          </Form.Group>
           <Form.Group className="mb-3" controlId="forImgBasicPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" placeholder="Password" name="profile_pic" onChange={iMageHandle} />
          </Form.Group>
         
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
