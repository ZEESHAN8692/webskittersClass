import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/axiosInstance/axiosInstance";
import { delete_product_end } from "../../Api/api_url";

export const deleteProducts = createAsyncThunk(
  "delProducts/deleteProducts",
  async (id) => {
    const response = await axiosInstance.delete(delete_product_end+"/"+id);
    console.log("delete Products Response", response);
    return response?.data;
  }
);

const initialState = {
  deleteResponse: {},
  isLoading: false,
  error: null,
  success: false,
};

const deleteProductsSlice = createSlice({
  name: "delProducts",
  initialState: initialState,
  extraReducers: (build) => {
    build
      .addCase(deleteProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteResponse = action.payload;
        state.error = null;
        state.success = true;
      })
      .addCase(deleteProducts.rejected, (state, action) => {
        console.log("Action for Rejected", action);
        state.isLoading = false;
        state.deleteResponse = {};
        state.error = action.error.message;
      });
  },
});

export default deleteProductsSlice.reducer;
