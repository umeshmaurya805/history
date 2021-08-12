import { hdApi } from ".";

export const schoolApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    createTicket: build.mutation({
      query: (body) => ({
        url: "tickets",
        method: "POST",
        body,
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useCreateTicketMutation } = schoolApi;
