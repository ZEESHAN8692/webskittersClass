import React from "react";
import { Route, Routes } from "react-router-dom";
import MyForm from "../Pages/MyForm";
import PageNotFound from "../Pages/PageNotFound";
import Home from "../Pages/Home";

export const Routing = () => {
  return (
    <Routes>
      <Route path="myform" element={<MyForm />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
