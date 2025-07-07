import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Slice/CountSlice/CountSlice";
import postReducer from "../Slice/postSlice/postSlice";

const store = configureStore({
  reducer: {
    counter: countReducer,
    posts: postReducer,
  },
});

export default store;
