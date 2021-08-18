import { hdApi } from ".";
import { EVENT_DETAILS, EVENT_INVITATION, EVENT_TEAMS } from "./constants";

export const schoolEventApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    registerSchool: build.mutation({
      query: (body) => ({
        url: "school-event",
        method: "POST",
        body,
      }),
      invalidatesTags: [EVENT_DETAILS],
    }),
    viewInvitedStudents: build.query({
      query: (schoolEventId) =>
        `school-event/${schoolEventId}/invitation-status`,
      transformResponse: ({ data }) =>
        data.map((student) => {
          return {
            ...student,
            status: student.status === "invited" ? "Invited" : "Registered",
          };
        }),
      providesTags: [EVENT_INVITATION],
    }),
    getAvailableStudents: build.query({
      query: (schoolEventId) => `school-event/${schoolEventId}/students`,
      transformResponse: ({ data }) => data,
      providesTags: [EVENT_INVITATION],
    }),
    inviteStudents: build.mutation({
      query: ({ schoolEventId, studentId }) => ({
        url: `school-event/${schoolEventId}/invites/${studentId}`,
        method: "POST",
      }),
      invalidatesTags: [EVENT_INVITATION],
    }),
    getTeams: build.query({
      query: (schoolEventId) => `school-event/${schoolEventId}/teams`,
      transformResponse: ({ data }) => data,
      providesTags: [EVENT_TEAMS],
    }),
    addTeam: build.mutation({
      query: ({ schoolEventId, ...body }) => ({
        url: `school-event/${schoolEventId}/teams`,
        method: "POST",
        body,
      }),
      invalidatesTags: [EVENT_TEAMS],
    }),
    getUpcomingEvents: build.query({
      query: () => "school-event/upcoming",
      providesTags: [EVENT_DETAILS],
      transformResponse: ({ data }) => {
        return data.map((event) => ({
          ...event,
          forClass: `${event.availableClasses.from} - ${event.availableClasses.to}`,
          participants: event.participants?.map((participant) => {
            return {
              name: `${participant.firstName} ${participant.lastName}`,
              avatar: participant.avatar,
              studentClass: participant.studentClass,
              section: participant.section,
              submissionDate: participant.submittedAt,
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

export const {
  useRegisterSchoolMutation,
  useViewInvitedStudentsQuery,
  useGetAvailableStudentsQuery,
  useInviteStudentsMutation,
  useGetUpcomingEventsQuery,
  useGetTeamsQuery,
  useAddTeamMutation,
} = schoolEventApi;
