import React, { useState } from "react";

const UseState = () => {
  const [word, setWord] = useState("Hello");
  const [num, setNum] = useState(1);
  const [obj, setObj] = useState({
    name: "zeesshan",
    last_name: "khan",
    age: 23,
  });

  const changeValue = () => {
    word === "Hello" ? setWord("Zeeshan Khan ") : setWord("Hello");
  };
  const changeNum = () => setNum(num + 1);
  const changeLastName = () => {
    obj.last_name === "Khan"
      ? setObj({ ...obj, last_name: "KHAN" })
      : setObj({ ...obj, last_name: "Khan" });
  };
  return (
    <div>
      <h1>{word}</h1>
      <button onClick={changeValue}>Change Value </button>
      <br />

      <h1>{num}</h1>
      <button onClick={changeNum}>Change Value </button>
      <br />
      <br />

      <p>
        <b>Name</b> :{obj.name}
      </p>
      <p>
        <b>Last Name</b> :{obj.last_name}
      </p>
      <p>
        <b>Age</b> :{obj.age}
      </p>
      <br />
      <button onClick={changeLastName}>Change Last Name</button>
    </div>
  );
};

export default UseState;
