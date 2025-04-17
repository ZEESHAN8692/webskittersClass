import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    counter >= 20 ? "" : setCounter(counter + 1);
  };
  const removeValue = () => {
    counter < 1 ? "" : setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counting Game </h1>
      <div className="card">
        <h1>{counter}</h1>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Add Value</button>
      </div>
    </>
  );
}

export default App;
