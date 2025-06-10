import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const LoginSignupProtectedRoutes = () => {
  const authToken = sessionStorage.getItem("token");
  return authToken ? <Navigate to="/profile" /> : <Outlet />;
};

export default LoginSignupProtectedRoutes;
