import React, { useRef } from "react";

const UseRef = () => {
  const inputElent = useRef(null);
  const handleSub = (e) => {
    e.preventDefault();
    console.log("Current Input Feild", inputElent.current);
    console.log("Current Inpyt Value", inputElent.current.value);

    inputElent.current.style.backgroundColor = "blue";
    inputElent.current.style.color = "white";
    
  };
  return (
    <>
      <div>
        <form onSubmit={handleSub}>
          <input type="text" ref={inputElent} />
          <button type="submit">Click</button>
        </form>
      </div>
    </>
  );
};

export default UseRef;
