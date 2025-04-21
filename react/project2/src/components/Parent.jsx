import React from "react";
import Child from "./Child";

const Parent = () => {
  let word = "Hello Webskitters";
  return (
    <>
      <h1>Parent Components</h1>
      <Child data={word} />
    </>
  );
};

export default Parent;
