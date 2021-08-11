import { hdApi } from ".";
import { MAIN_COORDINATOR } from "./constants";

export const coordinatorApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    getMainCoordinator: build.query({
      query: () => "coordinators/my-account",
      providesTags: [MAIN_COORDINATOR],
      transformResponse: ({ data }) => {
        return {
          school: {
            email: data.email,
            username: data.username,
            displayPassword: data.displayPassword,
          },
          coordinator: {
            email: data.secondaryEmail,
            firstName: data.firstName,
            lastName: data.lastName,
            designation: data.designation,
            phone: data.phone,
          },
        };
      },
    }),
    updateMainCoordinator: build.mutation({
      query: (body) => ({
        url: "coordinators/my-account",
        method: "PUT",
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [MAIN_COORDINATOR],
    }),
  }),
});

export const {
  useUpdateEmailMutation,
  useGetMainCoordinatorQuery,
  useUpdateMainCoordinatorMutation,
} = coordinatorApi;
