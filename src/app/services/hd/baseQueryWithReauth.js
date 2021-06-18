import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  getSchoolAuth,
  removeSchoolAuth,
  saveSchoolAuth,
} from "../../../utils/schoolAuth";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_SERVER_URL}`,
  prepareHeaders: (headers) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const { accessToken } = getSchoolAuth();

    if (accessToken) {
      headers.set("authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery(
      { url: "schools/refresh-token", method: "POST" },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // store the new token
      saveSchoolAuth(refreshResult.data);

      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      const { url } = args;

      if (
        url !== "schools/login" &&
        url !== "schools/forgot-password" &&
        url !== "schools/reset-password" &&
        url !== "schools/validate-otp"
      ) {
        window.location.reload();
      }

      removeSchoolAuth();
    }
  }

  return result;
};
