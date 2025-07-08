import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Signup from "./Page/Signup";
import Header from "./Layout/Header";
import Login from "./Page/Login";
import Profile from "./Page/Profile";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
