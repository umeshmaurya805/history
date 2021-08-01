import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import LoadingButton from "../../button/LoadingButton";
import { useLoginMutation } from "../../../app/api/auth";
import { saveSchoolAuth } from "../../../utils/schoolAuth";
import protectedHandler from "../../../utils/protectedHandler";
import useStyles from "./style";

const validationSchema = yup.object({
  username: yup
    .string("Enter your username")
    .required("Username is required"),
  password: yup
    .string("Enter your password")
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [login, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData) => {
      const data = await login(formData).unwrap();

      saveSchoolAuth(data);

      history.push("/dashboard");
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
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          margin="normal"
          autoComplete="username"
          autoFocus
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
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
          style={{ userSelect: "none" }}
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
        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          isLoading={isLoading}
        >
          Log In
        </LoadingButton>
        <div className={classes.forgotPasswordLink}>
          <Link to="/auth/forgot-password">
            {"Did you forget your password?"}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
