import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import About from "../Pages/About/About";
import UseState from "../Pages/useState.jsx/useState";
import MyForm from "../Pages/MyForm/MyForm.JSX";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/state" element={<UseState />} />
      <Route path="/form" element={<MyForm />} />
      <Route path="/about/:data/:data1" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;
