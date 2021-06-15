import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useStyles from "./style";

const ForgotPassword = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

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
        Please enter the email address that you used to login, and we will send
        you a link to reset your password via Email.
      </Typography>
      <form
        className={classes.form}
        onChange={handleChange}
        onSubmit={handleFormSubmit}
      >
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
          value={email}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Reset my Password
        </Button>
        <div className={classes.loginLink}>
          <Link to="/login">Return to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
