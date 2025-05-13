import React from "react";
import { useNavigate } from "react-router-dom";

const Comp1 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("Button Clicked");
    navigate("/comp2");
  };
  return (
    <div>
      <h1>Component 1</h1>
      <button onClick={handleClick}>Click !</button>
    </div>
  );
};

export default Comp1;
