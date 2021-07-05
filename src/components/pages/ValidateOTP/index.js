import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import LoadingButton from "../../button/LoadingButton";
import { useValidateOtpMutation } from "../../../app/services/hd/auth";
import protectedHandler from "../../../utils/protectedHandler";
import useStyles from "./style";

const validationSchema = yup.object({
  otp: yup
    .string("Enter the OTP")
    .min(6, "OTP should contain 6 digits")
    .max(6, "OTP should contain 6 digits")
    .required("OTP is required"),
});

const ValidateOTP = () => {
  const classes = useStyles();
  const history = useHistory();
  const { resetToken } = useParams();

  const [validateOtp, { isLoading }] = useValidateOtpMutation();

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData) => {
      await validateOtp({ ...formData, resetToken }).unwrap();
      history.push(`/auth/reset-password/${resetToken}`);
    }),
  });

  return (
    <div className={classes.root}>
      <Typography component="h3" variant="h3" className={classes.title}>
        Validate OTP
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
        className={classes.subTitle}
      >
        Please enter the OTP send to your email address. OTP is valid for 5
        minutes.
      </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          required
          id="otp"
          name="otp"
          label="OTP"
          variant="outlined"
          margin="normal"
          autoFocus
          value={formik.values.otp}
          onChange={formik.handleChange}
          error={formik.touched.otp && Boolean(formik.errors.otp)}
          helperText={formik.touched.otp && formik.errors.otp}
        />

        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          isLoading={isLoading}
        >
          Validate OTP
        </LoadingButton>
        <div className={classes.forgotPasswordLink}>
          <Link to="/auth/forgot-password">{"Want to enter email again?"}</Link>
        </div>
      </form>
    </div>
  );
};

export default ValidateOTP;
