import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import Header from "./Layout/Header";
import AddProduct from "./Pages/AddProduct";
import UpdateProduct from "./Pages/UpdateProduct";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct />} />
        <Route path="/single-product/:slug" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
