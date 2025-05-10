import React from "react";
import Child from "../Components/child";

const Home = () => {
  let obj = {
    name: "Zeeshan Khan",
    age: 23,
    gender: "Male",
  };
  let word = "Hello Zeeshan Khan";

  return (
    <>
      <h1 className="text-center">Home Page</h1>
      <Child data={obj} word={word} />
    </>
  );
};

export default Home;
