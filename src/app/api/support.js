import { hdApi } from ".";

export const supportApi = hdApi.injectEndpoints({
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

export const { useCreateTicketMutation } = supportApi;
