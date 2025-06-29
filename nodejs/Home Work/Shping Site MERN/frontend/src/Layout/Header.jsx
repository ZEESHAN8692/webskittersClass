import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="headerDiv">
      <Link to="/">
        <h1 className="text-white decoration-none">Header</h1>
      </Link>
    </div>
  );
};
