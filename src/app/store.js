import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { hdApi } from "./api";
import supportReducer from "./slices/supportSlice";
import eventReducer from "./slices/eventSlice";
import eventAnalyticsReducer from "./slices/eventAnalyticsSlice";

const middleware = [...getDefaultMiddleware(), hdApi.middleware];;

const store = configureStore({
  reducer: {
    [hdApi.reducerPath]: hdApi.reducer,
    support: supportReducer,
    event: eventReducer,
    eventAnalytics: eventAnalyticsReducer,
  },
  middleware,
  devTools:  process.env.NODE_ENV !== "production",
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
