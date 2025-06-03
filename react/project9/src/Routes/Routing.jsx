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

      <Route path="/login" element={<LoginForm />} />
      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product-create" element={<ProductCreate />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/update-product/:id" element={<UpdateProduct />} />
      <Route path="/single-product/:id" element={<SingleProduct />} /> */}
      <Route path="*" element={<PageNotFound />} />

      {/* Protected Route */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product-create"
        element={
          <ProtectedRoute>
            <ProductCreate />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product-list"
        element={
          <ProtectedRoute>
            <ProductList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/update-product/:id"
        element={
          <ProtectedRoute>
            <UpdateProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/single-product/:id"
        element={
          <ProtectedRoute>
            <SingleProduct />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
