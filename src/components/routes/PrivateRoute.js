import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getSchoolAuth } from "../../utils/schoolAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { accessToken } = getSchoolAuth();

  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route
      {...rest}
      render={(props) =>
        accessToken ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default PrivateRoute;
