import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import useStyles from "./style";
import LoadingButton from "../../common/LoadingButton";
import { useResetPasswordMutation } from "../../../app/services/hd/auth";
import protectedHandler from "../../../utils/protectedHandler";

const validationSchema = yup.object({
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string("Confirm your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Confirmation is required"),
});

const ResetPassword = () => {
  const classes = useStyles();
  const history = useHistory();
  const { resetToken } = useParams();

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData) => {
      await resetPassword({ ...formData, resetToken }).unwrap();
      history.push("/auth/login");
    }),
  });

  return (
    <div className={classes.root}>
      <Typography component="h3" variant="h3" className={classes.title}>
        Reset Password
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
        className={classes.subTitle}
      >
        Please update your password and try to login again.
      </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          required
          autoFocus
          variant="outlined"
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="new-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          required
          variant="outlined"
          margin="normal"
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          autoComplete="new-password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          isLoading={isLoading}
        >
          Reset My Password
        </LoadingButton>
        <div className={classes.forgotPasswordLink}>
          <Link to="/auth/forgot-password">{"Want to enter email again?"}</Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
