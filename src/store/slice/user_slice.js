import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export default userSlice.reducer;

export const userSliceActions = userSlice.actions;
