import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./Layout/Header";
import UseReduce from "./pages/UseReduce";
import UseRef from "./pages/UseRef";

import A from "./pages/A";
import B from "./pages/B";
import C from "./pages/C";
import UseContextFun from "./pages/UseContextComp";
import Memo from "./pages/Memo.jsx/Memo";
import CallBack from "./pages/CallBack";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useReduce" element={<UseReduce />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/usecontext" element={<UseContextFun />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/usecallback" element={<CallBack />} />
  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
