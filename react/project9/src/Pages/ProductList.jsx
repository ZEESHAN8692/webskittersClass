// import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axiosinstace from "../axiosInstance/axiosinstance";
import { product_delete_end, product_list_end } from "../Api/end_point";
import base_url from "../Api/base_url";

const ProductList = () => {
  const navigater = useNavigate();

  // const apiUrl = base_url + product_list_end;
  const apiUrl = product_list_end;
  const deleteApi = product_delete_end;
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosinstace
      .post(
        apiUrl,
        {
          page: 1,
          perpage: 5,
        },
        {
          headers: {
            "x-access-token": sessionStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleDelete(id) {
    axiosinstace
      .post(
        deleteApi,
        { id },
        {
          headers: {
            "x-access-token": sessionStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Product Delete Success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handleSingleProduct = (id) => {
    navigater(`/single-product/${id}`);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="container-fliud mt-3">
          <div className="row justify-content-center gap-2 ">
            {data?.map((product) => {
              const { _id, title, description, image } = product;
              const folderPath = "uploads/product/";

              const productImage = base_url + folderPath + image;

              return (
                <div className="card" style={{ width: "18rem" }} key={_id}>
                  <img
                    src={productImage}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body ">
                    <h5 className="card-title">{title.slice(0, 30)}...</h5>
                    <p className="card-text">{description.slice(0, 100)} ...</p>
                    <div className="d-flex gap-2">
                      <Link
                        to={`/update-product/${_id}`}
                        className="btn btn-primary "
                      >
                        Update
                      </Link>
                      <Button
                        className="btn btn-primary"
                        onClick={() => handleDelete(_id)}
                      >
                        Delete
                      </Button>

                      <Button
                        className="btn btn-primary"
                        onClick={() => handleSingleProduct(_id)}
                      >
                        Show
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
