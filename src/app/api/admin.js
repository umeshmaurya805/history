import { hdApi } from ".";

export const adminApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    featureList: build.query()
  }),
});

export const {
  useFeatureListQuery
} = adminApi;
