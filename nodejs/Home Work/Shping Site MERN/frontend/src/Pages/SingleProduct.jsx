import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../Api/axionInstance/axiosInstance";
import { single_product_end } from "../Api/end_point";

const SingleProduct = () => {
  const { slug } = useParams();
  const [data, setData] = useState({});
  //   console.log(slug);
  useEffect(() => {
    axiosInstance.get(single_product_end + "/" + slug).then((res) => {
      console.log(res.data.data[0]);
      setData(res.data.data[0]);
    });
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Product Images */}
          <div className="col-md-6 mb-4">
            <img
                src={`http://${data?.images[0]}`}
              alt="Product"
              className="img-fluid rounded mb-3 product-image"
              id="mainImage"
            />
            <div className="d-flex justify-content-between">
              {data.images?.map((img) => (
                <img
                  src={`http://${img}`}
                  alt="Thumbnail 1"
                  className="thumbnail rounded active"
                  onclick="changeImage(event, this.src)"
                />
              ))}
            </div>
          </div>
          {/* Product Details */}
          <div className="col-md-6">
            <h2 className="mb-3">{data.title}</h2>
            <p className="text-muted mb-4">Brand: {data.brand}</p>
            <div className="mb-3">
              <span className="h4 me-2">₹{data.price}</span>
              <span className="text-muted">
                <s>₹{data.price + 100}</s>
              </span>
            </div>
            <div className="mb-3">
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-half text-warning" />
              {/* <span className="ms-2">4.5 (120 reviews)</span> */}
            </div>
            <p className="mb-4">{data.description}</p>
            <div className="mb-4">
              <h5>Color:</h5>
              <div
                className="btn-group"
                role="group"
                aria-label="Color selection"
              >
                {data.colors?.map((color, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="color"
                      id={color.toLowerCase()}
                      autoComplete="off"
                    //   defaultChecked
                    />
                    <label
                      className="btn text-white "
                      htmlFor="black"
                      style={{ backgroundColor: `${color}` }}
                    >
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
