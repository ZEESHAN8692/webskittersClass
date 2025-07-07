import { configureStore } from "@reduxjs/toolkit";
import RegistrationSlice from "../Slice/RegistraionSlice";

const store = configureStore({
  reducer: {
    registration: RegistrationSlice,
  },
});

export default store;
