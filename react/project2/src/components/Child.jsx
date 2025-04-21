import React from "react";

const Child = (props) => {
  console.log(props.data);
  return (
    <div>
      <h1>Child Components and Data = {props.data} </h1>
    </div>
  );
};

export default Child;
