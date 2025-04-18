import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-white bg-red-400 text-6xl rounded-2xl p-2">
        Zeeshan Khan
      </h1>
      <br />
      <div className="flex gap-2.5">
        <Card username="Zeeshan khan" ButtonName="Click" />
        <Card username="Rajeev" ButtonName="Click" />
      </div>
    </>
  );
}

export default App;
