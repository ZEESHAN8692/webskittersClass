import { BrowserRouter, Route, Routes } from "react-router-dom";
import Count from "./Components/count";
import Post from "./Components/post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Count />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
