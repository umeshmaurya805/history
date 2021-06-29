import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getSchoolAuth } from "../../utils/schoolAuth";

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
  const { accessToken } = getSchoolAuth();

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        accessToken && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
