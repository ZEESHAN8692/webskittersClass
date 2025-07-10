import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/axiosInstance/axiosInstance";
import {
  base_url,
  find_single_product_by_id_end,
  update_product_end,
} from "../../Api/api_url";

export const getSingleProductUp = createAsyncThunk(
  "products/getSingleProduct",
  async (id) => {
    const resposne = await axiosInstance.get(
      find_single_product_by_id_end + "/" + id
    );
    console.log("Single Product ", resposne);
    return resposne?.data;
  }
);

export const editProducts = createAsyncThunk(
  "updateProducts/editProducts",
  async ({ id, data }) => {
    const response = await axiosInstance.patch(
      update_product_end + "/" + id,
      data
    );
    console.log("Add Products Response", response);
    return response?.data;
  }
);

const initialState = {
  singleProductData: {},
  updateResponse: null,
  isLoading: false,
  error: null,
  success: false,
};

const UpdateProductsSlice = createSlice({
  name: "updateProducts",
  initialState: initialState,
  extraReducers: (build) => {
    build
      .addCase(getSingleProductUp.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getSingleProductUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleProductData = action.payload;
        state.error = null;
        state.success = true;
      })
      .addCase(getSingleProductUp.rejected, (state, action) => {
        console.log("Action for Rejected", action);
        state.isLoading = false;
        state.singleProductData = {};
        state.error = action.error.message;
        state.success = false;
      })
      .addCase(editProducts.pending, (state) => {
        state.isLoading = true;
        state.success = false;
      })
      .addCase(editProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateResponse = action.payload;
        state.success = true;
        state.error = null;
      })
      .addCase(editProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.success = false;
      });
  },
});

export default UpdateProductsSlice.reducer;
