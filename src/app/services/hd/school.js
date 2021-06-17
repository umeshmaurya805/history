import { hdApi } from ".";

export const schoolApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => "schools/me",
      providesTags: () => ["School"],
    }),
  }),
});

export const { useGetProfileQuery } = schoolApi;
