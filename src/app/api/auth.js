import { hdApi } from ".";
import { MAIN_COORDINATOR } from "./constants";

export const authApi = hdApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      transformResponse: (response) => response.data,
    }),
    requestEmailUpdate: build.mutation({
      query: (body) => ({
        url: "auth/request-email-update",
        method: "PUT",
        body,
      }),
      transformResponse: (response) => response.data,
    }),
    updateEmail: build.mutation({
      query: (body) => ({
        url: "auth/update-email",
        method: "PUT",
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [MAIN_COORDINATOR],
    }),
    updatePassword: build.mutation({
      query: (body) => ({
        url: "auth/update-password",
        method: "PUT",
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [MAIN_COORDINATOR],
    }),
    initializeEmailVerification: build.mutation({
      query: (body) => ({
        url: "auth/email-initialize-verification",
        method: "POST",
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [MAIN_COORDINATOR],
    }),
    emailVerification: build.mutation({
      query: (body) => ({
        url: "auth/email-verification",
        method: "POST",
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [MAIN_COORDINATOR],
    }),
    logout: build.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
    }),
    forgotPassword: build.mutation({
      query: (body) => ({
        url: "auth/forgot-password",
        method: "POST",
        body,
      }),
      transformResponse: (response) => response.data,
    }),
    validateOtp: build.mutation({
      query: (data) => {
        const { resetToken, ...body } = data;

        return {
          url: `auth/validate-otp/${resetToken}`,
          method: "POST",
          body,
        };
      },
    }),
    resetPassword: build.mutation({
      query: (data) => {
        const { resetToken, ...body } = data;

        return {
          url: `auth/reset-password/${resetToken}`,
          method: "PUT",
          body,
        };
      },
      transformResponse: (response) => response.data,
    }),
    refreshToken: build.mutation({
      query: () => ({
        url: "auth/refresh-token",
        method: "POST",
      }),
      transformResponse: (response) => response.data,
    }),
    revokeRefreshTokens: build.mutation({
      query: () => ({
        url: "auth/revoke-refresh-tokens",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRequestEmailUpdateMutation,
  useUpdateEmailMutation,
  useUpdatePasswordMutation,
  useInitializeEmailVerificationMutation,
  useEmailVerificationMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useValidateOtpMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useRevokeRefreshTokensMutation,
} = authApi;
