import { hdApi } from ".";

export const leaderboardApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getSchoolLeaderboard: build.query({
      query: () => "school-leaderboard",
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

export const { useGetSchoolLeaderboardQuery } = leaderboardApi;
