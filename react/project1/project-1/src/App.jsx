import Footer from "./components/footer";
import Header from "./components/header";
import HobbyCard from "./components/HobbyCard";
import Images from "./components/Images";
import Slider from "./components/Slider";
import "./components/style.css";
function App() {
  return (
    <>
      <div class="container mt-5 bg-white main">
        <Header />
        <Slider />
        <HobbyCard />
        <Images />
        <Footer />
      </div>
    </>
  );
}

export default App;
