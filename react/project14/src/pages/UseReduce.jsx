import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialState;
  }
};
const UseReduce = () => {
  const [num, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <h1>{num}</h1>
        <button onClick={() => dispatch("Increment")}>+1</button>
        <button onClick={() => dispatch("Decrement")}>-1</button>
        <button onClick={() => dispatch("Reset")}>Reset</button>
      </div>
    </>
  );
};

export default UseReduce;
