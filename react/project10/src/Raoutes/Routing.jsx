import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../Page/Registration";


const Routing = () => {
  return (
    <Routes>
      <Route path="/myform" element={<Registration />} />
    </Routes>
  );
};

export default Routing;
