import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import * as yup from "yup";
import { useFormik } from "formik";
import LockIcon from "@material-ui/icons/Lock";
import SaveIcon from "@material-ui/icons/Save";
import protectedHandler from "../../../../utils/protectedHandler";
import LoadingIconButton from "../../../button/LoadingIconButton";
import {
  useInitializeEmailVerificationMutation,
  useEmailVerificationMutation,
} from "../../../../app/api/auth";
import {
  useGetMainCoordinatorQuery,
  useUpdateMainCoordinatorMutation,
} from "../../../../app/api/coordinator";
import { notify } from "../../../../utils";

const validationSchema = yup.object({
  email: yup
    .string("Enter coordinator email")
    .email("Enter a valid email")
    .required("Email is required"),
  otp: yup.string("Enter the OTP sent to your new email address"),
});

const EmailUpdate = () => {
  const [enableOTPField, setEnabledOTPField] = useState(false);
  const [enableGenerateOTPButton, setEnableGenerateOTPButton] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  const { email } = useGetMainCoordinatorQuery(undefined, {
    selectFromResult: ({ data }) => ({
      email: data?.coordinator?.email,
    }),
  });

  const [initializeEmailVerification, { isLoading: isOTPGenerating }] =
    useInitializeEmailVerificationMutation();

  const [emailVerification, { isLoading: isEmailVerifying }] =
    useEmailVerificationMutation();

  const [updateMainCoordinator, { isLoading: isEmailUpdating }] =
    useUpdateMainCoordinatorMutation();

  const formik = useFormik({
    initialValues: {
      email,
      otp: "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: protectedHandler(async (formData, actions) => {
      switch (activeButton) {
        case 0:
          await initializeEmailVerification(formData).unwrap();
          setEnabledOTPField(true);
          notify.success("EmailUpdation", "OTP sent to your email address");
          break;
        case 1:
          await emailVerification(formData).unwrap();

          actions.resetForm();
          setEnabledOTPField(false);

          await updateMainCoordinator({
            secondaryEmail: formData.email,
          }).unwrap();
          notify.success("EmailUpdation", "Email Updated");
          break;
        default:
      }
    }),
  });

  return (
    <form
      style={{
        border: "0.1rem solid #E5E5E5",
        borderRadius: "1rem",
        padding: "0.5rem 2rem",
        marginBottom: "1rem",
      }}
    >
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={7}>
          <TextField
            autoFocus
            fullWidth
            required
            variant="outlined"
            margin="normal"
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={(e) => {
              setEnableGenerateOTPButton(email !== e.target.value);
              formik.handleChange(e);
            }}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid container justifyContent="center" item xs={12} sm={5}>
          <LoadingIconButton
            disabled={!enableGenerateOTPButton}
            variant="contained"
            color="primary"
            icon={<LockIcon />}
            onClick={(e) => {
              setActiveButton(0);
              formik.handleSubmit(e);
            }}
            isLoading={isOTPGenerating}
          >
            Generate OTP
          </LoadingIconButton>
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            disabled={!enableOTPField}
            fullWidth
            required
            variant="outlined"
            margin="normal"
            id="otp"
            name="otp"
            label="OTP"
            value={formik.values.otp}
            onChange={formik.handleChange}
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}
          />
        </Grid>
        <Grid container item xs={12} sm={5} justifyContent="center">
          <LoadingIconButton
            type="submit"
            icon={<SaveIcon />}
            color="primary"
            variant="contained"
            isLoading={isEmailVerifying || isEmailUpdating}
            onClick={(e) => {
              setActiveButton(1);
              formik.handleSubmit(e);
            }}
            disabled={!enableOTPField}
          >
            Update Email
          </LoadingIconButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default EmailUpdate;
