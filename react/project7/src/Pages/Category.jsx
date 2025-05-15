import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { cate } = useParams();
  return (
    <>
      <div>Category</div>
      <h1>{cate}</h1>
    </>
  );
};

export default Category;
