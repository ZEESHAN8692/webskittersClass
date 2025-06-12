import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import Myform from "./Page/Myform";
import CreateUser from "./Page/crud/CreateUser";
import UpdateUser from "./Page/crud/UpdateUser";
import ReadUser from "./Page/crud/ReadUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myform" element={<Myform />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
          <Route path="/read-user" element={<ReadUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
