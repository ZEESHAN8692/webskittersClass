import React, { useState } from "react";
import A from "./A";

export const userDetailsContext = React.createContext(null);
const UseContextFun = () => {
  const [userDetails, setDetails] = useState({
    name: "zeeshan",
    age: 23,
    toggle: false,
  });
  const changeDetails = () => {
    if (setDetails.toggle === false) {
      setDetails({
        ...userDetails,
        name: "Zeeshan Khan",
        age: 25,
        toggle: true,
      });
    } else {
      setDetails({ ...userDetails, name: "zeeshan", age: 23, toggle: false });
    }
  };

  return (
    <>
      <div>UseContext Parent </div>
      <userDetailsContext.Provider value={{ userDetails, changeDetails }}>
        <A />
      </userDetailsContext.Provider>
    </>
  );
};

export default UseContextFun;
