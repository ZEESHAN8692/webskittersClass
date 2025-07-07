import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../Redux/Slice/CountSlice/CountSlice";

const Count = () => {
  useSelector((state) => console.log(state));
  const { count, msg } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Toolkit Counter</h1>
      <div>
        <h2>{count}</h2>
        <div className="counter">
          <button className="btn" onClick={() => dispatch(decrement())}>
            -
          </button>
          <button className="btn" onClick={() => dispatch(reset())}>
            Reset
          </button>
          <button className="btn" onClick={() => dispatch(increment())}>
            +
          </button>
          <p>{msg}</p>
        </div>
      </div>
    </>
  );
};

export default Count;
