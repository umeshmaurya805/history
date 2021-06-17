import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { hdApi } from "./services/hd";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger, hdApi.middleware];

const store = configureStore({
  reducer: {
    [hdApi.reducerPath]: hdApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
