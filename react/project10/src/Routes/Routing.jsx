import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MyForm from "../Pages/MyForm";
import PageNotFound from "../Pages/PageNotFound";
import Home from "../Pages/Home";
import LoginForm from "../Pages/LoginForm";
import Dashboard from "../Pages/Dashboard";
import Loding from "../Components/Loding";
import ProtectedRoutes from "./ProtectedRoute";
import Error from "../Pages/Error";
import LoginSignupProtectedRoutes from "./loginSignupProtectedRoutes";
// import Profile from "../Pages/Profile";
// import ProductCreate from "../Pages/ProductCreate";
// import ProductList from "../Pages/ProductList";
// import UpdateProduct from "../Pages/UpdateProduct";
// import SingleProduct from "../Pages/SingleProduct";

const Profile = lazy(() => import("../Pages/Profile"));
const ProductCreate = lazy(() => import("../Pages/ProductCreate"));
const ProductList = lazy(() => import("../Pages/ProductList"));
const UpdateProduct = lazy(() => import("../Pages/UpdateProduct"));
const SingleProduct = lazy(() => import("../Pages/SingleProduct"));

export const Routing = () => {
  return (
    <Suspense fallback={<Loding />}>
      <Routes>
        <Route element={<LoginSignupProtectedRoutes />}>
          <Route path="myform" element={<MyForm />} />
          <Route path="/login-form" element={<LoginForm />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product-create" element={<ProductCreate />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
          <Route path="/single-product/:id" element={<SingleProduct />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Suspense>
  );
};
