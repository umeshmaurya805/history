import { hdApi } from ".";
import { SCHOOL_PROFILE } from "./constants";

export const schoolApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => "schools/my-account?filter=profile",
      providesTags: [SCHOOL_PROFILE],
      transformResponse: ({ data }) => {
        const { block, street, area, city } = data.address;

        return {
          ...data,
          address: `${block}, ${street}, ${area}, ${city}`,
        };
      },
    }),
    updateProfile: build.mutation({
      query: (body) => ({
        url: "schools/my-account",
        method: "PUT",
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [SCHOOL_PROFILE],
    }),
    uploadLogo: build.mutation({
      query: (body) => ({
        url: "schools/logo",
        method: "PUT",
        body,
      }),
      invalidatesTags: [SCHOOL_PROFILE],
    }),
    getSchoolStats: build.query({
      query: () => "schools/my-account?fields=points,stats",
      transformResponse: ({ data: { points, stats } }) => {
        return {
          points: points.current,
          ...stats,
        };
      },
    }),
    getSchoolWinners: build.query({
      query: () => "schools/my-account?filter=winners",
      transformResponse: ({ data }) =>
        data.winners.map((winner) => {
          return {
            name: `${winner.firstName} ${winner.lastName}`,
            avatar: winner.avatar,
            event: winner.eventTitle,
            studentClass: winner.studentClass,
            section: winner.section,
            participant: winner.totalParticipants,
            position: winner.position,
          };
        }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUploadLogoMutation,
  useGetSchoolStatsQuery,
  useGetSchoolWinnersQuery,
} = schoolApi;
