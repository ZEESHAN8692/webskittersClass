import React, { useEffect } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/Slice/getProductSlice";

function SingleProduct() {
  const { slug } = useParams();
  const { singleProduct, isLoading, error } = useSelector(
    (state) => state.posts
  );
  console.log("Product Data ", singleProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(slug));
  }, [dispatch]);

  if (isLoading) return <h2 className="text-center">Loading...</h2>;
  if (error) return <p className="text-danger text-center">{error}</p>;
  if (!singleProduct) return <p>No product found.</p>;

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Product Images */}
          <div className="col-md-6 mb-4">
            <img
              src={`http://${singleProduct.data.images[0]}`}
              alt="Product"
              className="img-fluid rounded mb-3 product-image"
              id="mainImage"
            />
            <div className="d-flex justify-content-between">
              {singleProduct.data.images?.map((img) => (
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
            <h2 className="mb-3">{singleProduct.data.title}</h2>
            <p className="text-muted mb-4">
              Brand : {singleProduct.data.brand}
            </p>
            <div className="mb-3">
              <span className="h4 me-2">₹ {singleProduct.data.price}</span>
              <span className="text-muted">
                <s>₹ {Number(singleProduct.data.price) + 100}</s>
              </span>
            </div>

            <p className="mb-4">{singleProduct.data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
