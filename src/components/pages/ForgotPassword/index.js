import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import useStyles from "./style";
import { useForgotPasswordMutation } from "../../../app/services/hd/auth";
import protectedHandler from "../../../utils/protectedHandler";
import LoadingButton from "../../common/LoadingButton";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const classes = useStyles();
  const history = useHistory();
  const [forgotPassword, {isLoading}] = useForgotPasswordMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData) => {
      const data = await forgotPassword(formData).unwrap();
      history.push(`/auth/validate-otp/${data}`);
    }),
  });

  return (
    <div className={classes.root}>
      <Typography component="h3" variant="h3" className={classes.title}>
        Forgot Password
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
        className={classes.subTitle}
      >
        Please enter the email address that you used to login, and we will send
        you an OTP to reset your password.
      </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          required
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          margin="normal"
          autoComplete="email"
          autoFocus
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          isLoading={isLoading}
        >
          Reset My Password
        </LoadingButton>
        <div className={classes.loginLink}>
          <Link to="/auth/login">Return to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
