import { hdApi } from ".";

export const authApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "schools/login",
        method: "POST",
        body,
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: "schools/logout",
        method: "POST",
      }),
    }),
    forgotPassword: build.mutation({
      query: (body) => ({
        url: "schools/forgot-password",
        method: "POST",
        body,
      }),
    }),
    validateOtp: build.mutation({
      query: (body) => ({
        url: "schools/validate-otp",
        method: "POST",
        body,
      }),
    }),
    resetPassword: build.mutation({
      query: (body) => ({
        url: "schools/reset-password",
        method: "PUT",
        body,
      }),
    }),
    refreshToken: build.mutation({
      query: () => ({
        url: "schools/refresh-token",
        method: "POST",
      }),
    }),
    revokeRefreshTokens: build.mutation({
      query: () => ({
        url: "schools/revoke-refresh-tokens",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useValidateOtpMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useRevokeRefreshTokensMutation,
} = authApi;
