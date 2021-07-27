import { hdApi } from ".";

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
    }),
    refreshToken: build.mutation({
      query: () => ({
        url: "auth/refresh-token",
        method: "POST",
      }),
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
  useLogoutMutation,
  useForgotPasswordMutation,
  useValidateOtpMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useRevokeRefreshTokensMutation,
} = authApi;
