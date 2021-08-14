import { hdApi } from ".";

export const historyDiariesApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getStats: build.query({
      query: () => "history-diaries?filter=stats",
      transformResponse: ({ data: { stats } }) => ({
        schools: stats.schoolsPartnered,
        competitiveEvents: stats.totalCompetitiveEvents,
        nonCompetitiveEvents: stats.totalNonCompetitiveEvents,
        students: stats.studentParticipation,
        studentCompetitiveEvents: stats.studentCompetitiveEvent,
        studentNonCompetitiveEvents: stats.studentNonCompetitiveEvent,
      }),
    }),
  }),
});

export const { useGetStatsQuery } = historyDiariesApi;
