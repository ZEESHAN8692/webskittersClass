import React, { useContext } from "react";
import D from "./D";

import { userDetailsContext } from "./UseContextComp";

const C = () => {
  const contextData = useContext(userDetailsContext);
  return (
    <>
      <div> C Components</div>
      <div>
        <h3>User Name : - {contextData.userDetails.name}</h3>
        <h3>User age : - {contextData.userDetails.age}</h3>
      </div>

      <D />
      
    </>
  );
};

export default C;
