import React, { useEffect } from "react";
import { Button, Paper, Skeleton, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
} from "../Redux/Slice/ProductSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { deleteP, isLoading, item, error, addProduct } = useSelector(
    (store) => store.products
  );
  console.log("Add Product Response", addProduct);
  console.log("delte Product Response", deleteP);
  //---------Get All Products--------
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  //----------Form Handle--------
  const form = useForm();
  const { register, handleSubmit, reset } = form;
  const submitHandler = (data) => {
    console.log(data);
    const input = {
      name: data.name,
      brand: data.brand,
    };
    dispatch(createProduct(input));
    // reset();
  };
  //--------------
  return (
    <div className=" grid grid-flow-col justify-center items-start text-center gap-30">
      <div>
        <Typography variant="h4" color="gray">
          Create Product
        </Typography>
        <div>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col gap-5 my-2"
          >
            <TextField label="name" {...register("name")} />
            <TextField label="brand" {...register("brand")} />

            <Button
              type="submit"
              variant="contained"
              size="small"
              className="w-fit"
            >
              Create
            </Button>
          </form>
        </div>
      </div>
      <div>
        <Typography className="!mb-5" variant="h4" color="brown">
          All Products
        </Typography>
        {error && <Typography variant="h5">{error}</Typography>}
        {isLoading ? (
          <>
            <Typography variant="h5">Loading...</Typography>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          <div>
            {item?.map((i, index) => (
              <Paper className="flex gap-5 px-4 py-2 items-center" key={index}>
                <Typography>{i.name}</Typography>
                <Typography>{i.brand}</Typography>
                <Button variant="contained" color="warning" size="small">
                  Edit
                </Button>
                <Button
                  onClick={() => dispatch(deleteProduct(i.id))}
                  variant="contained"
                  color="error"
                  size="small"
                >
                  Delete
                </Button>
              </Paper>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
