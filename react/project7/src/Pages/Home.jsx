import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import base_url from "../Api/Base_Url";
import { category_end, product_end } from "../Api/End_Point";
import axios from "axios";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [allProduct, setAallProduct] = useState([]);

  const apiUrl = base_url + product_end + "/" + category_end;
  const apiUrlAll = base_url + product_end;
  const getData = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setCategory(res.data.categories);
        // console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const getAllData = () => {
    axios
      .get(apiUrlAll)
      .then((res) => {
        setAallProduct(res.data.products);
      })
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    getData();
  }, [setCategory]);

  useEffect(() => {
    getAllData();
  }, [setAallProduct]);

  return (
    <>
      <ul className="nav nav-pills">
        {category?.map((cat, index) => (
          <li className="nav-item" key={index}>
            <Link className="nav-link tabsCate" to={`category/${cat}`}>
              {cat}
            </Link>
          </li>
        ))}
      </ul>
      <br />

      <h1 className="text-center">All Products </h1>
      <br />

      <div className="container-fliud mt-3">
        <div className="row justify-content-center gap-2 ">
          {allProduct?.map((product) => {
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

export default Home;
