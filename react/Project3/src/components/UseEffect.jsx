// import React, { useEffect, useState } from "react";

const UseEffect = () => {
  //   const [count, setCount] = useState(0);

  //   const [total, setTotal] = useState(1);
  //   const countPlus = () => {
  //     setCount(count + 1);
  //   };
  //   const totalSum = () => {
  //     setTotal(total + 1);
  //   };
  //   useEffect(() => {
  //     alert("Call Every render");
  //   });

  //   useEffect(() => {
  //     alert("call only one render");
  //   }, []);

  //   useEffect(() => {
  //     alert("Call count value update ");
  //   }, [count, total]);

  //   useEffect(() => {
  //     const intervel = setInterval(() => {
  //       console.log(`Change cout value ${count}`);
  //       setCount((prev) => prev + 1);
  //     }, 1000);
  //     return () => {
  //       console.log(`Stope setinterval`);
  //       clearInterval(intervel);
  //     };
  //   }, [count]);

  return (
    <>
      {/* <p>Secons :- {count}</p> */}
      {/* <p>{count}</p>
      <button className="border" onClick={countPlus}>
        Click Me count +!
      </button>
      <br />
      <br />
      <p>Tatal = {total}</p>
      <button className="border" onClick={totalSum}>
        Click Me Taotal +!
      </button> */}
    </>
  );
};

export default UseEffect;
