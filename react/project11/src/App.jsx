import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SingleProduct from "./Components/SingleProduct";
import CategoryBiseProduct from "./Pages/CategoryBiseProduct";
import React from "react";

function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
            <Route
              path="/category/:categoryName"
              element={<CategoryBiseProduct />}
            />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
