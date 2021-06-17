import { hdApi } from ".";

export const authApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => "schools/me",
      providesTags: () => ["School"],
    }),
  }),
});

export const { useGetProfileQuery } = authApi;
