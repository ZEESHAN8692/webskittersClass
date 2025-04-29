import React from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const data = useParams();
  console.log(data);
  return (
    <div>
      <h1>All Products </h1>
      <Link to="details">View Deatils</Link>
    </div>
  );
};

export default Product;
