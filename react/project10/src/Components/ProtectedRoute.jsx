import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const navigater = useNavigate();

  if (!token) {
    return navigater("/login-form");
  }
  return children;
};

export default ProtectedRoute;
