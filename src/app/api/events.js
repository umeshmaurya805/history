import { hdApi } from ".";

export const eventApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getFeaturedEvents: build.query({
      query: () => "events/featured",
      transformResponse: ({ data }) => data,
    }),
    getEventResults: build.query({
      query: () => "events/results",
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
