import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthToken = sessionStorage.getItem("token");
  return isAuthToken ? <Outlet /> : <Navigate to="/login-form" />;
};

export default ProtectedRoutes;
