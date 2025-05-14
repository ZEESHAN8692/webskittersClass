import React, { useEffect, useState } from "react";
import { productApiUrl } from "../Api/End_point";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const getProductData = () => {
    axios
      .get(productApiUrl)
      .then((res) => {
        setData(res.data.products);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <>
      <div className="container-fliud mt-3">
        <div className="row justify-content-center gap-2 ">
          {data.map((product) => {
            const { id, title, description, images } = product;
            return (
              <div className="card" style={{ width: "18rem" }} key={id}>
                <img
                  src={images[0]}
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description.slice(0, 80)} ...</p>
                  <Link
                    to={`/single-product/${id}`}
                    className="btn btn-primary"
                  >
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

export default Products;
