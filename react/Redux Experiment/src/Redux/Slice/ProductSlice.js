import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import base_url from "../../api/baseurl";
import endpoints from "../../api/endpoints";
import axios from "axios";

const initialState = {
  item: [],
  deleteP: null,
  addProduct: null,
  isLoading: true,
  error: null,
};

//----------Action List-------
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const url = base_url + endpoints.products;
    try {
      const res = await axios.get(url);
      //   console.log(res.data);
      return res?.data;
    } catch (err) {
      console.log("Error fetching all products:", err);
    }
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data) => {
    const url = base_url + endpoints.products;
    try {
      const res = await axios.post(url, data);
      //   console.log(res.data);
      return res?.data;
    } catch (err) {
      console.log("Error fetching all products:", err);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const url = base_url + endpoints.products + `/${id}`;
    try {
      const res = await axios.delete(url);
      //   console.log(res.data);
      return res?.data;
    } catch (err) {
      console.log("Error deleting product:", err);
    }
  }
);

//-----------Reducers------------
export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    //-----------------GET All Products--------------------------s
    builder.addCase(getAllProducts.pending, (action, state) => {
      state.isLoading = true;
      //   console.log(state);
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      //   console.log(action);
      state.item = action.payload;
      state.error = null;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.item = [];
      //   console.log(action);

      state.error = action.error.message || "An unknown error has occurred";
    });
    //-----------------Create Product--------------------------s
    builder.addCase(createProduct.pending, (action, state) => {
      state.isLoading = true;
      //   console.log(state);
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      //   console.log(action);
      // state.item.push(action.payload); // Append new product
      state.addProduct = action.payload;
      state.error = null;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.isLoading = false;
      // state.item = [];
      state.addProduct = null;
      //   console.log(action);

      state.error = action.error.message || "An unknown error has occurred";
    });
    //-----------------Delete Product--------------------------s
    builder.addCase(deleteProduct.pending, (action, state) => {
      state.isLoading = true;
      //   console.log(state);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      //   console.log(action);
      state.deleteP = state.payload;
      // state.item.push(action.payload); // Append new product
      state.error = null;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.deleteP = null;
      //   console.log(action);

      state.error = action.error.message || "An unknown error has occurred";
    });
  },
});

export default productsSlice.reducer;
