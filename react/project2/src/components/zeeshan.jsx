import React from "react";
const Zeeshan = () => {
  return React.createElement(
    "div",
    { className: "outer" },
    React.createElement(
      "div",
      { id: "inner" },
      React.createElement("h2", null, "Hello World"),
      React.createElement("p", null, "Hello Zeeshan Khan ")
    )
  );
  //   return (
  //     <div>
  //       <h2>Hello Zeeshan</h2>
  //     </div>
  //   );
};
export default Zeeshan;
