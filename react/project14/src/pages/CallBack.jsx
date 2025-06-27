import React, { useCallback, useState } from "react";
import ChildCall from "../components/ChildCall";

const CallBack = () => {
  const [adition, setAdition] = useState(0);
  const [count, setCount] = useState(0);
  // let counting = () => {};
  let counting = useCallback(() => {
    // Some Opration
  }, [count]);
  return (
    <>
      <div className="container">
        <h1>{adition}</h1>
        <button onClick={() => setAdition(adition + 1)}>Adition</button>
        <ChildCall counting={counting} count={count} />
        <button onClick={() => setCount(count + 5)}>Count</button>
      </div>
    </>
  );
};

export default CallBack;
