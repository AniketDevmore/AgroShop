import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUserProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { addUserProfile } = counterSlice.actions;

export default counterSlice.reducer;
