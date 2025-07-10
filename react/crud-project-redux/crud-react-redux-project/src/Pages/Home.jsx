import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Slice/getProductSlice";
import { useNavigate } from "react-router-dom";
import { deleteProducts } from "../Redux/Slice/deleteProductSlice";

export const Home = () => {
  const navigate = useNavigate();
  const { error, data, isLoading } = useSelector((state) => state.posts);
  const { success } = useSelector((state) => state.delete);

  // console.log("Api Data", data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, success]);

  const handleDelete = (id) => {
    dispatch(deleteProducts(id));
  };

  const handleUpdate = (slug) => {
    navigate(`/update-product/${slug}`);
  };
  const handleSingleProduct = (slug) => {
    navigate(`/single-product/${slug}`);
  };

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <p>Error:- {error}</p>}

      <div className="container py-5">
        <div className="row justify-content-center">
          {data?.data?.length &&
            data.data.map((product) => (
              <div className="col-md-4" key={product._id}>
                <div className="card product-card shadow-sm">
                  <img
                    src={`http://${product.images[0]}`}
                    className="card-img-top product-img"
                    alt="Product Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Brand: {product.brand}
                    </h6>
                    <p className="card-text text-truncate">
                      {product.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-primary">
                        ₹ {product.price}{" "}
                      </span>
                      <button
                        className="btn btn-sm btn-outline-success"
                        onClick={() => handleSingleProduct(product.slug)}
                      >
                        Buy Now
                      </button>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleUpdate(product._id)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
