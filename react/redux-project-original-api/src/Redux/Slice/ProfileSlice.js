import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Api/axiosInstace/axiosInstance";
import { profile_end } from "../../Api/apiUrl";

export const UserProfile = createAsyncThunk("profile/UserProfile", async () => {
  const response = await axiosInstance.get(profile_end);
  console.log("Profile Response ", response);
  return response.data;
});

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const ProfileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(UserProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(UserProfile.fulfilled, (state, action) => {
      console.log("Action for fulfilled", action);
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(UserProfile.rejected, (state, action) => {
      console.log("Action for rejected", action);
      state.loading = false;
      state.data = {};
      state.error = action.error.message;
      state.success = false;
    });
  },
});

export default ProfileSlice.reducer;
