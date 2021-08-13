import { hdApi } from ".";

export const eventApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getFeaturedEvents: build.query({
      query: () => "events/featured",
      // providesTags: [SCHOOL_PROFILE],
      transformResponse: ({ data }) => data,
    }),
    getEventResults: build.query({
      query: () => "events/results",
      // providesTags: [SCHOOL_PROFILE],
      transformResponse: ({ data }) => {
        return data;
      },
    }),
  }),
});

export const {
  useGetFeaturedEventsQuery,
  useGetEventResultsQuery,
} = eventApi;
