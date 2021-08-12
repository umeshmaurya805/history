import { hdApi } from ".";

export const adApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getAds: build.query({
      query: () => "ads",
      transformResponse: ({ data }) => data,
    }),
  }),
});

export const { useGetAdsQuery } = adApi;
