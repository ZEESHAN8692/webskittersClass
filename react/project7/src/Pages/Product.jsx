import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import base_url from "../Api/Base_Url";
import { product_end } from "../Api/End_Point";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const apiUrlsingle = base_url + product_end + "/" + id;
  const singleData = () => {
    axios
      .get(apiUrlsingle)
      .then((res) => {
        setData(res.data.product);
      })
      .then((err) => console.log(err));
  };

  useEffect(() => {
    singleData();
  });
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Product Images */}
          <div className="col-md-6 mb-4">
            <img
              src={data.image}
              alt="Product"
              className="img-fluid rounded mb-3 product-image"
              id="mainImage"
            />
          </div>
          {/* Product Details */}
          <div className="col-md-6">
            <h2 className="mb-3">{data.title}</h2>
            <p className="text-muted mb-4">Category: {data.category}</p>
            <div className="mb-3">
              <span className="h4 me-2">${data.price}</span>
              <span className="text-muted">
                <s>${data.price + 100}</s>
              </span>
            </div>
            <div className="mb-3">
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-half text-warning" />
              {/* <span className="ms-2">{data.rating} (120 reviews)</span> */}
            </div>
            <p className="mb-4">{data.description}</p>

            <div className="mb-4">
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                defaultValue={1}
                min={1}
                style={{ width: 80 }}
              />
            </div>
            <button className="btn btn-primary btn-lg mb-3 me-2">
              <i className="bi bi-cart-plus" /> Add to Cart
            </button>
            <button className="btn btn-outline-secondary btn-lg mb-3">
              <i className="bi bi-heart" /> Add to Wishlist
            </button>
            <div className="mt-4">
              <h5>Key Features:</h5>
              <ul>
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
