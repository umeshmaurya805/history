import { hdApi } from ".";

export const schoolApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => "schools/my-account",
      providesTags: () => ["School"],
    }),
  }),
});

export const { useGetProfileQuery } = schoolApi;
