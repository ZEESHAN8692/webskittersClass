import React from "react";

const Child = (props) => {
  return (
    <>
      <div>
        <h1 className="text-4xl text-center font-bold text-blue-700">
          String Data
        </h1>
        <h2 className="text-center text-2xl">Data :- {props.data} </h2>
        <p className="text-center">------------------------------</p>
      </div>
    </>
  );
};

export default Child;
