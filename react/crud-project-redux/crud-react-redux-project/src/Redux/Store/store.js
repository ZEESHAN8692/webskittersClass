import { configureStore } from "@reduxjs/toolkit";
import getProductsSlice from "../Slice/getProductSlice";
import addProductsSlice from "../Slice/addProductSlice";

export const store = configureStore({
  reducer: {
    posts: getProductsSlice,
    addProducts: addProductsSlice,
  },
});
