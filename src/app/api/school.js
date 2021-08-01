import { hdApi } from ".";
import { MAIN_COORDINATOR, SCHOOL_PROFILE } from "./constants";

export const schoolApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => "schools/my-account?filter=profile",
      providesTags: [SCHOOL_PROFILE],
      transformResponse: ({ data }) => {
        const { block, street, area, city } = data.address;

        return {
          ...data,
          address: `${block}, ${street}, ${area}, ${city}`,
        };
      },
    }),
    updateProfile: build.mutation({
      query: (body) => ({
        url: "schools/my-account",
        method: "PUT",
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [SCHOOL_PROFILE],
    }),
    getMainCoordinator: build.query({
      query: () => "coordinators/my-account",
      providesTags: [MAIN_COORDINATOR],
      transformResponse: ({ data }) => {
        return {
          ...data,
        };
      },
    }),
    updateMainCoordinator: build.mutation({
      query: (body) => ({
        url: "coordinators/my-account",
        method: "PUT",
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [MAIN_COORDINATOR],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = schoolApi;
