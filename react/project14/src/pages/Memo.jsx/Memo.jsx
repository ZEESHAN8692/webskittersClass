import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);

  const sum = () => {
    console.log("Counting Sum ");
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += i;
    }
    return result;
  };
  // const sumValue = sum();
  const sumValue = useMemo(() => sum(), []);

  return (
    <>
      <div className="container">
        <h2>sum :- {sumValue}</h2>

        <h1>{count}</h1>
        <br />
        <button onClick={() => setCount(count + 1)}>Increase Count </button>
      </div>
    </>
  );
};

export default Memo;
