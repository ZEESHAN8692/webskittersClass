import { use } from "react";
import "./App.css";
import { useCount } from "./zustand/store";

function App() {
  // const obj =useCount()
  // console.log("count value",obj)
  const { count, decrement, increment, reset } = useCount();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button>count is {count}</button>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
