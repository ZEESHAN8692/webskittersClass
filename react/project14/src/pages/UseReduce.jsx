import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  count: 0,
  apiData: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };
    case "getApiData":
      return { ...state, apiData: action.payload };
    // default:
    //   return state;
  }
};

const UseReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.apiData);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: "getApiData", payload: res.data });
      })
      .then((error) => console.log(error));
  }, []);
  return (
    <>
      <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "Increment" })}>+1</button>
        <button onClick={() => dispatch({ type: "Decrement" })}>-1</button>
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      </div>
      <br />

      <br />
      <div className="container mt-5">
        <h2 className="text-center">User Details</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {state.apiData.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UseReduce;
