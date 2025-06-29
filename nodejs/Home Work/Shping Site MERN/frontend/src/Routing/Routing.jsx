import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct";
import CreateProduct from "../Pages/CreateProduct";
import UpdateProduct from "../Pages/UpdateProduct";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/single-product/:slug" element={<SingleProduct />} />
      <Route path="/create-product" element={<CreateProduct />} />
      <Route path="/update-product/:id" element={<UpdateProduct />} />
    </Routes>
  );
};

export default Routing;
