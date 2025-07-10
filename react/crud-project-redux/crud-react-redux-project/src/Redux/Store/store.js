import { configureStore } from "@reduxjs/toolkit";
import getProductsSlice from "../Slice/getProductSlice";
import addProductsSlice from "../Slice/addProductSlice";
import deleteProductsSlice from "../Slice/deleteProductSlice";
import UpdateProductsSlice from "../Slice/UpdateProductSlice";

export const store = configureStore({
  reducer: {
    posts: getProductsSlice,
    addProducts: addProductsSlice,
    delete: deleteProductsSlice,
    update: UpdateProductsSlice,
  },
});
