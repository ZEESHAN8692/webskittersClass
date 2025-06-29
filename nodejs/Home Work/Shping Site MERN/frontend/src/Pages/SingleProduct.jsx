import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../Api/axionInstance/axiosInstance";
import { single_product_end } from "../Api/end_point";
import { Header } from "../Layout/Header";
import Footer from "../Layout/Footer";

const SingleProduct = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(single_product_end + "/" + slug)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data[0]);
        setMainImage(res.data.data[0]?.images?.[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No product found.</div>; // Handle case when data is empty
  }

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img
              src={`http://${mainImage}`}
              alt="Product"
              className="img-fluid rounded mb-3 product-image"
              id="mainImage"
            />

            <div className="d-flex justify-content-between">
              {data.images?.map((img, index) => (
                <img
                  src={`http://${img}`}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail rounded active"
                  key={index}
                  onClick={() => handleThumbnailClick(img)}
                />
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">{data.title}</h2>
            <p className="text-muted mb-4">Brand: {data.brand}</p>
            <div className="mb-3">
              <span className="h4 me-2">₹{data.price}</span>
              <span className="text-muted">
                <s>₹{parseInt(data.price) + 100}</s>
              </span>
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
                    />
                    <label
                      className="btn text-white"
                      htmlFor={color.toLowerCase()}
                      style={{ backgroundColor: `${color}` }}
                    >
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h5>Size</h5>
             <ul>
              {data.size?.map((size, index) => (
                <li key={index}>{size}</li>
              ))}

             </ul>
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
      <Footer />
    </>
  );
};

export default SingleProduct;
