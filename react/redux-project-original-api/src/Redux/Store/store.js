import { configureStore } from "@reduxjs/toolkit";
import RegistrationSlice from "../Slice/RegistraionSlice";
import LoginSlice from "../Slice/LoginSlice";
import ProfileSlice from "../Slice/ProfileSlice";

const store = configureStore({
  reducer: {
    registration: RegistrationSlice,
    login: LoginSlice,
    profile: ProfileSlice,
  },
});

export default store;
