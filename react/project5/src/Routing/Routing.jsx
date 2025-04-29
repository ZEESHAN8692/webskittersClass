import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import PageNotFound from "../Pages/PageNotFound";
import Header from "../Layout/Header";
import Product from "../Pages/Product/Product";
import ProductDetails from "../Pages/Product/Details/ProductDetails";
import Galery from "../Pages/Galery/Galery";
import Photoes from "../Pages/Galery/Photoes/Photoes";
const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:data1/:data2" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:data" element={<Product />} />
        <Route path="/product/details" element={<ProductDetails />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/galery/photes/" element={<Photoes />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
