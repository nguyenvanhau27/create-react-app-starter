import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import userSlice from "./auth";
const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
export default store;
