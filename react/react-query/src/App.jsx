import React from "react";
import RQUser from "./Components/RQUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SingleUser from "./Components/SingleUser";
import DependentQuery from "./Components/DependentQuery";
import Pagination from "./Components/Pagination";
import InfiniteQuery from "./Components/infiniteQuery";
import AddData from "./Components/addData";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RQUser />} />
          <Route path="/user/:id" element={<SingleUser />} />
          <Route path="/dependent" element={<DependentQuery id="1" />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/infinite" element={<InfiniteQuery />} />
          <Route path="/add-data" element={<AddData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
