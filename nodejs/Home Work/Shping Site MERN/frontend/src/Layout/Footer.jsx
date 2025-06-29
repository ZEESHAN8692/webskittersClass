import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="headerDiv">
        <Link to="/">
          <h1 className="text-white decoration-none">Footer</h1>
        </Link>
      </div>
    </>
  );
};

export default Footer;
