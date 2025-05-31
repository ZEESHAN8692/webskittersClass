import React, { useEffect } from "react";
import MyFormCom from "../Components/MyFormCom";
import { useNavigate } from "react-router-dom";

const MyForm = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   if (token) {
  //     navigate("/dashboard");
  //   }
  // }, []);
  return (
    <>
      <div className="container">
        <br />
        <br />
        <MyFormCom />
      </div>
    </>
  );
};

export default MyForm;
