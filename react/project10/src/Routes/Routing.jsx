import React from "react";
import { Route, Routes } from "react-router-dom";
import MyForm from "../Pages/MyForm";
import PageNotFound from "../Pages/PageNotFound";
import Home from "../Pages/Home";
import LoginForm from "../Pages/LoginForm";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import ProductCreate from "../Pages/ProductCreate";
import ProductList from "../Pages/ProductList";
import UpdateProduct from "../Pages/UpdateProduct";
import SingleProduct from "../Pages/SingleProduct";
import ProtectedRoute from "../Components/ProtectedRoute";

export const Routing = () => {
  return (
    <Routes>
      <Route path="myform" element={<MyForm />} />

      <Route path="/login-form" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product-create" element={<ProductCreate />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/update-product/:id" element={<UpdateProduct />} />
      <Route path="/single-product/:id" element={<SingleProduct />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
