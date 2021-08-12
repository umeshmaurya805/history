import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { hdApi } from "./api";
import supportReducer from "./slices/supportSlice";
// import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), hdApi.middleware];

const config =
  process.env.NODE_ENV === "production"
    ? {
        middleware,
        devTools: false,
      }
    : {
        middleware,
        devTools: true,
      };

const store = configureStore({
  reducer: {
    [hdApi.reducerPath]: hdApi.reducer,
    support: supportReducer,
  },
  middleware: config.middleware,
  devTools: config.devTools,
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
