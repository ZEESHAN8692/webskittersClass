import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Signup from "./Page/Signup";
import Header from "./Layout/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
