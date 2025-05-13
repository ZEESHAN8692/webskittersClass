import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import PageNotFound from "../Pages/pageNotFound";
import Comp1 from "../Pages/Comp1";
import Comp2 from "../Pages/Comp2";
import User from "../Pages/User";
import Details from "../Pages/Details";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/comp1" element={<Comp1 />} />
      <Route path="/comp2" element={<Comp2 />} />
      <Route path="/user" element={<User />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Routing;
