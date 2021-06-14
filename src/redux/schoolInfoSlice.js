import { createSlice } from "@reduxjs/toolkit";

const schoolInfoFromStorage = localStorage.getItem(
  `${process.env.REACT_APP_PREFIX}-schoolInfo`
)
  ? JSON.parse(
      localStorage.getItem(`${process.env.REACT_APP_PREFIX}-schoolInfo`)
    )
  : null;

const initialState = schoolInfoFromStorage;

const schoolInfoSlice = createSlice({
  name: "schoolInfo",
  initialState,
  reducers: {
    addSchool: (_, action) => {
      localStorage.setItem(
        `${process.env.REACT_APP_PREFIX}-schoolInfo`,
        JSON.stringify(action.payload)
      );

      return action.payload;
    },
    removeSchool: () => {
      localStorage.removeItem(`${process.env.REACT_APP_PREFIX}-schoolInfo`);
      return null;
    },
  },
});

export const { addSchool, removeSchool } = schoolInfoSlice.actions;
export default schoolInfoSlice.reducer;
