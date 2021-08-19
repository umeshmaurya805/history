import { hdApi } from ".";
import { DASHBOARD_CONFIG } from "./constants";

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
    getAcademicYear: build.query({
      query: () => "school-leaderboard/academic-year",
      providesTags: [DASHBOARD_CONFIG],
      transformResponse: ({ data }) => {
        const academicYears = data.map(({ startDate }) => {
          const date = new Date(startDate);

          return `Academic Year: ${date.getFullYear()}-${(
            date.getFullYear() + 1
          )
            .toString()
            .substr(-2)}`;
        });

        const ranges = data.map(({ startDate, endDate }) => ({
          startDate,
          endDate,
        }));

        return {
          academicYears,
          ranges,
        };
      },
    }),
  }),
});

export const { useGetSchoolLeaderboardQuery, useGetAcademicYearQuery } =
  leaderboardApi;
