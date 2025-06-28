import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/single-product/:slug" element={<SingleProduct />} />
    </Routes>
  );
};

export default Routing;
