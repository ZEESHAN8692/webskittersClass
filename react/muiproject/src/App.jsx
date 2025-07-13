import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonComponents from "./Components/ButtonComponent";
import Header from "./Layout/Header";
import Home from "./Pages/Home";
import Table from "./Pages/Table";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<ButtonComponents />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
