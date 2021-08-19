import { hdApi } from ".";
import { EVENT_DETAILS } from "./constants";

export const eventApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getEventDetails: build.query({
      query: (id) =>
        `events/${id}?fields=title,summary,registrationDeadline,bannerLarge,description,studentMessage,infoList,registeredSchools,eventFor,isTeamEvent,hasLimit,personDesignation,persons,media`,
      transformResponse: ({ data }) => data,
      providesTags: [EVENT_DETAILS],
    }),
    getEvents: build.query({
      query: () =>
        "events?sort=asc&fields=date,registrationDeadline,title,cardSummary,registeredSchools,availableClasses,eventType,eventFor",
      transformResponse: ({ data }) => data,
      providesTags: [EVENT_DETAILS],
    }),
    getCompetitiveEvents: build.query({
      query: () =>
        "events?status=conducted&eventType=competitive&fields=date,title,registeredSchools,availableClasses,eventType,eventFor,totalSchoolsParticipated,totalParticipation",
      transformResponse: ({ data }) =>
        data.map((event) => ({
          ...event,
          classes: `${event.availableClasses.from} - ${event.availableClasses.to}`,
          schoolParticipation: event.totalSchoolsParticipated,
          participation: event.totalParticipation,
          status: event.isRegistered ? "Participated" : "Not Participated",
        })),
      providesTags: [EVENT_DETAILS],
    }),
    getNonCompetitiveEvents: build.query({
      query: () =>
        "events?status=conducted&eventType=nonCompetitive&fields=date,title,registeredSchools,availableClasses,eventType,eventFor,totalSchoolsParticipated,totalParticipation",
      transformResponse: ({ data }) =>
        data.map((event) => ({
          ...event,
          classes: `${event.availableClasses.from} - ${event.availableClasses.to}`,
          schoolParticipation: event.totalSchoolsParticipated,
          participation: event.totalParticipation,
          status: event.isRegistered ? "Participated" : "Not Participated",
        })),
      providesTags: [EVENT_DETAILS],
    }),
    getFeaturedEvents: build.query({
      query: () => "events/featured",
      transformResponse: ({ data }) => data,
    }),
    getEventResults: build.query({
      query: () => "events/results",
      transformResponse: ({ data }) => {
        const generateThemes = (resultData) => {
          const themeHash = new Map();

          resultData.forEach(({ theme, ...result }) => {
            if (themeHash.has(theme)) {
              themeHash.get(theme).push(result);
            } else {
              themeHash.set(theme, [result]);
            }
          });

          return Array.from(themeHash, ([theme, results]) => ({
            theme,
            results,
          }));
        };

        const generateTeams = (resultData) => {
          const teamHash = new Map();

          resultData.forEach(({ team, ...result }) => {
            if (teamHash.has(team)) {
              teamHash.get(team).push(result);
            } else {
              teamHash.set(team, [result]);
            }
          });

          return Array.from(teamHash, ([team, members]) => ({
            team,
            schoolName: members[0].schoolName,
            address: members[0].address,
            position: members[0].position,
            members,
          }));
        };

        return data.map((event) => {
          if (event.hasThemes) {
            const themes = generateThemes(event.results);
            if (event.isTeamEvent) {
              const updatedThemes = themes.map((theme) => {
                return {
                  theme: theme.theme,
                  results: generateTeams(theme.results),
                };
              });

              return {
                title: event.title,
                hasThemes: event.hasThemes,
                isTeamEvent: event.isTeamEvent,
                themes: updatedThemes,
              };
            } else {
              return {
                title: event.title,
                hasThemes: event.hasThemes,
                isTeamEvent: event.isTeamEvent,
                themes,
              };
            }
          } else {
            if (event.isTeamEvent) {
              const results = generateTeams(event.results);
              return { ...event, results };
            } else {
              const results = event.results;
              return { ...event, results };
            }
          }
        });
      },
    }),
  }),
});

export const {
  useGetEventDetailsQuery,
  useGetEventsQuery,
  useGetCompetitiveEventsQuery,
  useGetNonCompetitiveEventsQuery,
  useGetFeaturedEventsQuery,
  useGetEventResultsQuery,
} = eventApi;
