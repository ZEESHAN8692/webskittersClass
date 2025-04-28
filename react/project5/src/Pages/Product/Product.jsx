import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>All Products </h1>
      <Link to="details">View Deatils</Link>
    </div>
  );
};

export default Product;
