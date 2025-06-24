import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./Layout/Header";
import UseReduce from "./pages/UseReduce";
import UseRef from "./pages/UseRef";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useReduce" element={<UseReduce />} />
          <Route path="/useRef" element={<UseRef />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
