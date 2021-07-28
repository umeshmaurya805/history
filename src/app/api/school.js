import { hdApi } from ".";

export const schoolApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => "schools/my-account",
      providesTags: ["SchoolProfile"],
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
      invalidatesTags: ["SchoolProfile"],
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = schoolApi;
