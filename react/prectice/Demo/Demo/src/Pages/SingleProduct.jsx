import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance from "../API/Axiosinstance";
import { single_product_end } from "../API/Endpoints";
import base_url from "../API/Baseurl";


const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axiosInstance.get(single_product_end + id).then((res) => {
      console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);
  const folderPath = "uploads/product/";
  const img = base_url + folderPath + data.image;
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Product Images */}
          <div className="col-md-6 mb-4">
            <img
              src={img}
              alt="Product"
              className="img-fluid rounded mb-3 product-image"
              id="mainImage"
            />
          </div>
          {/* Product Details */}
          <div className="col-md-6">
            <h2 className="mb-3">{data.title}</h2>
            <p className="text-muted mb-4">
              <b></b>
            </p>
            {/* <div className="mb-3">
              <span className="h4 me-2">{data.price}</span>
              <span className="text-muted">
                <s>645654</s>
              </span>
            </div> */}

            <p className="mb-4">{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
