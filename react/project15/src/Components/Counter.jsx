import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../Redux/Action/counterAction';

const Counter = () => {
     const res = useSelector((state) => state);
  console.log(res);
  const { count, message } = res;

  const dispatch = useDispatch();
  return (
  <>
      <h1>Redux Counter</h1>
      <div className="container">
        <div className=" flex gap-2">
          <h2>Counter: {count}</h2>
          <button className="btn " onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button className="btn " onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button className="btn " onClick={() => dispatch(reset())}>
            Reset
          </button>
          <br />
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  )
}

export default Counter