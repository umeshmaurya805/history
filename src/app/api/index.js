// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";
import { MAIN_COORDINATOR, SCHOOL_PROFILE } from "./constants";

// initialize an empty api service that we'll inject endpoints into later as needed
// hdApi - Empty History Diaries Api
export const hdApi = createApi({
  // refetchOnReconnect: true,
  reducerPath: "hdApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: [SCHOOL_PROFILE, MAIN_COORDINATOR],
  endpoints: () => ({}),
});
