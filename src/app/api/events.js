import { hdApi } from ".";

export const eventApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getFeaturedEvents: build.query({
      query: () => "events/featured",
      transformResponse: ({ data }) => data,
    }),
    getEventResults: build.query({
      query: () => "events/results",
      transformResponse: () => {
        const data = [
          {
            title: "Event 1",
            isTeamEvent: false,
            hasThemes: false,
            results: [
              {
                student: "studentId",
                firstName: "Divyansh",
                lastName: "Thakur",
                studentClass: 6,
                section: "A",
                position: "first",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studentIad",
                firstName: "Bcd",
                lastName: "Thakur",
                studentClass: 8,
                position: "third",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studendtId",
                firstName: "Abc",
                lastName: "Thakur",
                studentClass: 7,
                section: "B",
                position: "second",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
            ],
          },
          {
            title: "Event 2",
            isTeamEvent: false,
            hasThemes: true,
            results: [
              {
                student: "studdentId",
                firstName: "Divyansh",
                lastName: "Thakur",
                theme: "Theme 1",
                studentClass: 6,
                section: "A",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                position: "first",
              },
              {
                student: "studerntId",
                firstName: "Bcd",
                lastName: "Thakur",
                theme: "Theme 1",
                studentClass: 8,
                position: "third",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studrentId",
                firstName: "Abc",
                lastName: "Thakur",
                theme: "Theme 1",
                studentClass: 7,
                section: "B",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                position: "second",
              },
              {
                student: "strudentId",
                firstName: "Xyz",
                lastName: "Thakur",
                theme: "Theme 2",
                studentClass: 6,
                section: "A",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                position: "third",
              },
              {
                student: "studenrtId",
                firstName: "Lmn",
                lastName: "Thakur",
                theme: "Theme 2",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                studentClass: 8,
                position: "third",
              },
              {
                student: "studenrtId",
                firstName: "Rst",
                lastName: "Thakur",
                theme: "Theme 2",
                studentClass: 7,
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                section: "B",
                position: "first",
              },
            ],
          },
          {
            title: "Event 3",
            hasThemes: true,
            isTeamEvent: true,
            results: [
              {
                student: "sturdentId",
                firstName: "Divyansh",
                lastName: "Thakur",
                theme: "Theme 1",
                team: "Team A",
                studentClass: 6,
                section: "A",
                position: "first",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studrfentId",
                firstName: "Bcd",
                lastName: "Thakur",
                theme: "Theme 1",
                team: "Team A",
                studentClass: 8,
                position: "first",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studffentId",
                firstName: "Abc",
                lastName: "Thakur",
                theme: "Theme 1",
                team: "Team C",
                studentClass: 7,
                section: "B",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                position: "third",
              },
              {
                student: "sturdentId",
                firstName: "Divyansh",
                lastName: "Thakur",
                theme: "Theme 1",
                team: "Team C",
                studentClass: 6,
                section: "A",
                position: "third",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studrfentId",
                firstName: "Bcd",
                lastName: "Thakur",
                theme: "Theme 1",
                team: "Team C",
                studentClass: 8,
                position: "third",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studffentId",
                firstName: "Abc",
                lastName: "Thakur",
                theme: "Theme 1",
                team: "Team C",
                studentClass: 7,
                section: "B",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                position: "third",
              },
              {
                student: "studennftId",
                firstName: "Xyz",
                lastName: "Thakur",
                theme: "Theme 2",
                team: "Team C",
                studentClass: 6,
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                section: "A",
                position: "third",
              },
              {
                student: "studencbId",
                firstName: "Lmn",
                lastName: "Thakur",
                theme: "Theme 2",
                team: "Team C",
                studentClass: 8,
                position: "third",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studedfdntId",
                firstName: "Rst",
                lastName: "Thakur",
                theme: "Theme 2",
                team: "Team C",
                studentClass: 7,
                section: "B",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                position: "third",
              },
              {
                student: "studfdentId",
                firstName: "Divyansh",
                lastName: "Thakur",
                theme: "Theme 1",
                team: "Team B",
                studentClass: 6,
                section: "A",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                position: "second",
              },
              {
                student: "studedfdntId",
                firstName: "Bcd",
                lastName: "Thakur",
                theme: "Theme 1",
                team: "Team A",
                studentClass: 8,
                position: "second",
              },
              {
                student: "studdffdentId",
                firstName: "Abc",
                lastName: "Thakur",
                theme: "Theme 1",
                team: "Team B",
                studentClass: 7,
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                section: "B",
                position: "second",
              },
              {
                student: "studendftId",
                firstName: "Xyz",
                lastName: "Thakur",
                theme: "Theme 2",
                team: "Team Z",
                studentClass: 6,
                section: "A",
                position: "first",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "staaudentId",
                firstName: "Lmn",
                lastName: "Thakur",
                theme: "Theme 2",
                team: "Team Z",
                studentClass: 8,
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                position: "first",
              },
              {
                student: "studedfgntId",
                firstName: "Rst",
                lastName: "Thakur",
                theme: "Theme 2",
                team: "Team Z",
                studentClass: 7,
                section: "B",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                position: "first",
              },
            ],
          },
          {
            title: "Event 4",
            hasThemes: false,
            isTeamEvent: true,
            results: [
              {
                student: "studdfgfentId",
                firstName: "Divyansh",
                lastName: "Thakur",
                team: "Team A",
                studentClass: 6,
                section: "A",
                position: "first",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studefgfgntId",
                firstName: "Bcd",
                lastName: "Thakur",
                team: "Team A",
                studentClass: 8,
                position: "first",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studfgfgentId",
                firstName: "Abc",
                lastName: "Thakur",
                team: "Team A",
                studentClass: 7,
                section: "B",
                position: "first",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studegfgntId",
                firstName: "Xyz",
                lastName: "Thakur",
                team: "Team C",
                studentClass: 6,
                section: "A",
                position: "third",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "studefggntId",
                firstName: "Lmn",
                lastName: "Thakur",
                team: "Team C",
                studentClass: 8,
                position: "third",
              },
              {
                student: "studeggntId",
                firstName: "Rst",
                lastName: "Thakur",
                team: "Team C",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
                studentClass: 7,
                section: "B",
                position: "third",
              },
              {
                student: "studefgfgntId",
                firstName: "Divyansh",
                lastName: "Thakur",
                team: "Team B",
                studentClass: 6,
                section: "A",
                position: "second",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
              {
                student: "stufgfgdentId",
                firstName: "Bcd",
                lastName: "Thakur",
                team: "Team B",
                studentClass: 8,
                position: "second",
              },
              {
                student: "studdfgentId",
                firstName: "Abc",
                lastName: "Thakur",
                team: "Team B",
                studentClass: 7,
                section: "B",
                position: "second",
                schoolName: "Bhartia Public School",
                address: "Sadar, Jabalpur",
              },
            ],
          },
        ];

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

export const { useGetFeaturedEventsQuery, useGetEventResultsQuery } = eventApi;
