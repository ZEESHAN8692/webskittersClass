import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import base_url from "../Api/base_url";
import { product_single_end } from "../Api/end_point";
import axiosInstance from "../Api/axiosInstance";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const getSingleDataApi = product_single_end + id;
  const folderPath = "uploads/product/";
  const productImage = base_url + folderPath + data.image;
  const getSingleProduct = () => {
    axiosInstance
      .get(getSingleDataApi)
      .then((res) => {
        if (res.status === 200) {
          const { title, description, image } = res.data.data;
          setData({ title: title, description: description, image: image });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card text-black">
                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3" />
                <img
                  src={productImage}
                  className="card-img-top"
                  alt="Apple Computer"
                />
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="text-muted mb-4">{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
