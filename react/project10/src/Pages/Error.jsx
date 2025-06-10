import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="errorDiv">
        <h3>Please Login First</h3>
        <Link to="/login-form">Login </Link>
      </div>
    </>
  );
};

export default Error;
