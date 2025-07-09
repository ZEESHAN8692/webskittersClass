import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/axiosInstance/axiosInstance";
import { products_end } from "../../Api/api_url";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axiosInstance.get(products_end);
    console.log("Products Response", response);
    return response?.data;
  }
);

const initialState = {
  data: [],
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
      });
  },
});

export default getProductsSlice.reducer;
