import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from '../utils';

const PublicRoute = ({ component: Component, restricted = false, ...rest }) => {
  const isLogin = false;
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
