import React from "react";

const Child = ({ data: { name, age, gender }, word }) => {
  // const { name, age, gender } = props.data;
  return (
    <>
      <h1>Child Components</h1>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{gender}</li>
      </ul>
      <h1>{word}</h1>
    </>
  );
};

export default Child;
