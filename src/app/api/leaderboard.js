import { hdApi } from ".";
import { SCHOOL_LEADERBOARD } from "./constants";

export const schoolApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getSchoolLeaderboard: build.query({
      query: () => "school-leaderboard",
      providesTags: [SCHOOL_LEADERBOARD],
      transformResponse: ({ data }) => {
        const academicYears = data.map(({ academicYear }) => academicYear);

        const schoolPositions = data.map(
          ({ schoolPosition }) => schoolPosition
        );

        const schools = data.map(({ schools }) => schools);

        return {
          academicYears,
          schoolPositions,
          schools,
        };
      },
    }),
  }),
});

export const { useGetSchoolLeaderboardQuery } = schoolApi;
