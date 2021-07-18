import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSupportIndex: 0,
  supportTitle: "",
  supportMessage: "",
};

const supportSlice = createSlice({
  name: "support",
  initialState,
  reducers: {
    resetSupport: (state) => state = initialState,
    setSupportIndex: (state, { payload }) => {
      state.selectedSupportIndex = payload;
    },
    setSupportTitle: (state, { payload }) => {
      state.supportTitle = payload;
    },
    setSupportMessage: (state, { payload }) => {
      state.supportMessage = payload;
    },
  },
});

export const {
  resetSupport,
  setSupportIndex,
  setSupportTitle,
  setSupportMessage,
} = supportSlice.actions;
export default supportSlice.reducer;
