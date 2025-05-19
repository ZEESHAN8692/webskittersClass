import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { AddUser } from "../Pages/AddUser";
import UpdateUser from "../Pages/UpdateUser";
import ShowSingleUser from "../Pages/ShowSingleUser";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/update-user/:id" element={<UpdateUser />} />
      <Route path="/single-user/:id" element={<ShowSingleUser />} />
    </Routes>
  );
};

export default Routing;
