import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import UpdateProduct from "../Pages/UpdateProduct";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<Products />} />
      <Route path="/single-product/:id" element={<SingleProduct />} />
      <Route path="/update-product/:id" element={<UpdateProduct />} />
    </Routes>
  );
};

export default Routing;
