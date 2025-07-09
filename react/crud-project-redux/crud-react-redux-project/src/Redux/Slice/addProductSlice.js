import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/axiosInstance/axiosInstance";
import { create_product_end } from "../../Api/api_url";

export const createProducts = createAsyncThunk(
  "addProducts/createProducts",
  async (data) => {
    const response = await axiosInstance.post(create_product_end, data);
    console.log("Add Products Response", response);
    return response?.data;
  }
);

const initialState = {
  data: {},
  isLoading: false,
  error: null,
  success: false,
};

const addProductsSlice = createSlice({
  name: "addProducts",
  initialState: initialState,
  extraReducers: (build) => {
    build
      .addCase(createProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
        state.success = true;
      })
      .addCase(createProducts.rejected, (state, action) => {
        console.log("Action for Rejected", action);
        state.isLoading = false;
        state.data = [];
        state.error = action.error.message;
      });
  },
});

export default addProductsSlice.reducer;
