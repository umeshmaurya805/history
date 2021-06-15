import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import useStyles from "./style";

const Login = () => {
  const classes = useStyles();
  const [school, setSchool] = useState({email: '', password: ''});

  const handleChange = (e) => {
    setSchool({ ...school, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(school);
  };

  return (
    <div className={classes.root}>
      <Typography component="h3" variant="h3" className={classes.title}>
        Login
      </Typography>
      <Typography component="p" variant="subtitle1" className={classes.subTitle}>
        Login with the data provided during your registration.
      </Typography>
      <form className={classes.form} onChange={handleChange} onSubmit={handleFormSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={school.email}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={school.password}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Log in
        </Button>
        <div className={classes.forgotPasswordLink}>
          <Link to="/forgot-password">{"Did you forget your password?"}</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
