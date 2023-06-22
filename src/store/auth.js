import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    graduation: "",
    school: "",
    certificateCode: "",
    identifier: "",
    fullName: "",
    birthDay: "",
  },
  reducers: {
    updateSchool: (state, action) => {
      state.graduation = action.payload;
      state.school = action.payload;
      state.certificateCode = action.payload;
      state.identifier = action.payload;
      state.fullName = action.payload;
      state.birthDay = action.payload;
    },
  },
});
export const { updateSchool } = userSlice.actions;
export default userSlice.reducer;
