import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import About from "../Pages/About/About";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;
