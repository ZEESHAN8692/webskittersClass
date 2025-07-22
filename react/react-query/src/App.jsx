import React from "react";
import RQUser from "./Components/RQUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SingleUser from "./Components/SingleUser";
import DependentQuery from "./Components/DependentQuery";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RQUser />} />
          <Route path="/user/:id" element={<SingleUser />} />
          <Route path="/dependent" element={<DependentQuery id="1" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
