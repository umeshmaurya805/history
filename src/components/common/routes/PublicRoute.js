import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getSchoolAuth } from "../../../utils/schoolAuth";

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
  const { isAuthenticated } = getSchoolAuth();

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to="/dashboard/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;