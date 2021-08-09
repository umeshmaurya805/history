import { hdApi } from ".";
import { MAIN_COORDINATOR, SCHOOL_PROFILE } from "./constants";

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
    generateOTP: build.mutation({
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
        url: "schools/my-account",
        method: "PUT",
        body,
      }),
      transformResponse: (response) => response.data,
      invalidatesTags: [SCHOOL_PROFILE],
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
  useGenerateOTPMutation,
  useUpdateEmailMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useValidateOtpMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useRevokeRefreshTokensMutation,
} = authApi;
