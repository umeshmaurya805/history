import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Home from "./Home";
import MyAccount from "./MyAccount";
import Calendar from "./Calendar";
import Analytics from "./Analytics";
import Leaderboard from "./Leaderboard";

const Dashboard = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/home`} component={Home} />
      <Route
        exact
        path={[`${path}/calendar/:slug`, `${path}/calendar`]}
        component={Calendar}
      />
      <Route exact path={`${path}/analytics`} component={Analytics} />
      <Route exact path={`${path}/leaderboard`} component={Leaderboard} />
      <Route exact path={`${path}/my-account`} component={MyAccount} />
      <Redirect to={`${path}/home`} />
    </Switch>
  );
};

export default Dashboard;
