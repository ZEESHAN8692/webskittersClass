import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Slice/getProductSlice";

export const Home = () => {
  const { error, data, isLoading } = useSelector((state) => state.posts);
  console.log("Api Data", data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <p>Error:- {error}</p>}
      <h1>Home</h1>
    </>
  );
};
