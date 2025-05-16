import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Category from "../Pages/Category";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="category/:cate" element={<Category />} />
    </Routes>
  );
};

export default Routing;
