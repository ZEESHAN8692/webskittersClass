import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Slice/CountSlice/CountSlice";

const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});

export default store;
