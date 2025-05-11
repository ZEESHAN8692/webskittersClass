import React, { useState } from "react";

const UseState = () => {
  const [number, setNumber] = useState(1);
  const [name, setName] = useState("Zeeshan");
  const changeNumber = () => {
    number <= 20 ? setNumber(number + 1) : "";
  };
  const changeNumber2 = () => {
    number <= 1 ? "" : setNumber(number - 1);
  };
  return (
    <>
      <h2>{number}</h2>
      <button onClick={changeNumber}>Change Number</button>
      <button onClick={changeNumber2}>Change Number2</button>
      <br />
      <br />
      <h1>{name}</h1>
      <button onClick={() => setName("Anis")}>Change Name </button>
    </>
  );
};

export default UseState;
