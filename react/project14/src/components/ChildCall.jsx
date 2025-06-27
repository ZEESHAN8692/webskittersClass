import React, { memo } from "react";

const ChildCall = ({ counting, count }) => {
  console.log("Child Component Re-render");
  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default memo(ChildCall);
// export default ChildCall;
