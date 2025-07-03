import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, msg: "" };

const countSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.msg = "Incremented Done";
    },
    decrement: (state) => {
      state.count -= 1;
      state.msg = "Decremented Done";
    },
    reset: (state) => {
      state.count = 0;
      state.msg = "Reset Done";
    },
  },
});

export default countSlice.reducer;
export const { increment, decrement, reset } = countSlice.actions;
