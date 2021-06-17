import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import useStyles from "./style";
import { useLoginMutation } from "../../../app/services/hd/auth";
import { saveSchoolAuth } from "../../../utils/schoolAuth";
import protectedHandler from "../../../utils/protectedHandler";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const ResetPassword = () => {
  const classes = useStyles();
  const history = useHistory();
  const [login] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData) => {
      const data = await login(formData).unwrap();

      saveSchoolAuth(data);

      history.push("/dashboard/home");
    }),
  });

  return (
    <div className={classes.root}>
      <Typography component="h3" variant="h3" className={classes.title}>
        Login
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
        className={classes.subTitle}
      >
        Login with the data provided during your registration.
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

        <TextField
          fullWidth
          required
          variant="outlined"
          margin="normal"
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <FormControlLabel
          control={
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              value="remember"
              color="primary"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
            />
          }
          label="Remember me"
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Log in
        </Button>
        <div className={classes.forgotPasswordLink}>
          <Link to="/auth/forgot-password">
            {"Did you forget your password?"}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
