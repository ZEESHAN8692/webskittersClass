import React, { useContext } from "react";
import { userDetailsContext } from "./UseContextComp";

const D = () => {
    const contexData  = useContext(userDetailsContext)
  return (
    <>
      <div>D Component</div>
      <h4>User Name : - {contexData.userDetails.name}</h4>
      <h4>User age : - {contexData.userDetails.age}</h4>
    </>
  );
};

export default D;
