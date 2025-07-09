import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import Header from "./Layout/Header";
import AddProduct from "./Pages/AddProduct";
import UpdateProduct from "./Pages/UpdateProduct";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product" element={<UpdateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
