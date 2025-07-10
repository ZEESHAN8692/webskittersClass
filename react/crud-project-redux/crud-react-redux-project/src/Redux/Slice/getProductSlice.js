import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/axiosInstance/axiosInstance";
import { products_end, single_product_end } from "../../Api/api_url";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axiosInstance.get(products_end);
    // console.log("Products Response", response);
    return response?.data;
  }
);
export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (slug) => {
    const resposne = await axiosInstance.get(single_product_end+"/"+slug);
    console.log("Single Product ", resposne);
    return resposne?.data;
  }
);

const initialState = {
  data: [],
  singleProduct: null,
  isLoading: false,
  error: null,
};

const getProductsSlice = createSlice({
  name: "products",
  initialState: initialState,
  extraReducers: (build) => {
    build
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log("Action for Rejected", action);
        state.isLoading = false;
        state.data = [];
        state.error = action.error.message;
      })
      .addCase(getSingleProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.error = action.error.message;
        state.singleProduct = null;
        state.isLoading = false;
      });
  },
});

export default getProductsSlice.reducer;
