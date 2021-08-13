import { hdApi } from ".";

export const schoolEventApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getUpcomingEvents: build.query({
      query: () => "school-event/upcoming",
      transformResponse: ({ data }) => {
        return data.map((event) => ({
          ...event,
          forClass: `${event.availableClasses.from} - ${event.availableClasses.to}`,
          participants: event.participants?.map((participant) => {
            return {
              name:`${participant.firstName} ${participant.lastName}`,
              avatar:participant.avatar,
              studentClass:participant.studentClass,
              section:participant.section,
              submissionDate:participant.submittedAt,
              team: participant.team,
              theme: participant.theme,
              status:
                participant.status === "participated"
                  ? "Submitted"
                  : "Not Submitted",
            };
          }),
        }));
      },
    }),
  }),
});

export const { useGetUpcomingEventsQuery } = schoolEventApi;
