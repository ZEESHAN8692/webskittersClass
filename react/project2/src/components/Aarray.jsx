import React from "react";

const Aarray = (props) => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-blue-700">
        Aarry Data Data
      </h1>
      <ul>
        {props.arrData.map((item, index) => {
          return (
            <li className="text-center text-2xl" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
      <p className="text-center">------------------------------</p>
    </div>
  );
};

export default Aarray;
