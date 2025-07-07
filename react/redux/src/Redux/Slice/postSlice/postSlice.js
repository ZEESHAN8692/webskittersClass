import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import post_api from "../../../Api/api";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(post_api);
  console.log("Api Response Data", response.data);
  return response?.data;
});

const initial_value = {
  isLoading: true,
  postsValue: [],
  error: null,
};
export const postSlice = createSlice({
  name: "posts",
  initialState: initial_value,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log("Action for fulfilled", action);
      state.isLoading = false;
      state.postsValue = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      console.log("Action for rejected", action);
      state.isLoading = false;
      state.postsValue = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
