import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import base_url from "../Api/Base_Url";
import { category_end, product_end } from "../Api/End_Point";
import axios from "axios";
import { Link } from "react-router-dom";
const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const { cate } = useParams();
  const apiUrl = base_url + product_end + "/" + category_end + "?type=" + cate;

  const getCategoryData = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setCategoryData(res.data.products);
      })
      .then((err) => console.log(err));
  };

  useEffect(() => {
    getCategoryData();
  });
  return (
    <>
      <h1 className="text-center ">
        All Products of <b>{cate}</b>
      </h1>

      <br />
      <br />

      <div className="container-fliud mt-3">
        <div className="row justify-content-center gap-2 ">
          {categoryData?.map((product) => {
            const { id, title, description, image, price } = product;
            return (
              <div className="card" style={{ width: "18rem" }} key={id}>
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title.slice(0, 30)}...</h5>
                  <h5 className="card-title">Price : ${price}</h5>

                  <p className="card-text">{description.slice(0, 80)} ...</p>
                  <Link to={`/product/${id}`} className="btn btn-primary">
                    Buy Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
