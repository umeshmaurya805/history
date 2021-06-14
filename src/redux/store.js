import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import schoolInfoReducer from "./schoolInfoSlice";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    schoolInfo: schoolInfoReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
