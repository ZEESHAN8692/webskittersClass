import React, { useEffect } from "react";
import LoginformCom from "../Components/LoginformCom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   if (token) {
  //     navigate("/dashboard");
  //   }
  // }, []);
  return (
    <div>
      <br />
      <br />
      <LoginformCom />
    </div>
  );
};

export default LoginForm;
