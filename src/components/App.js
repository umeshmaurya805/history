import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
// import Sidebar from "./dashboard/Sidebar";
import Auth from "./pages/Auth";
import PublicRoute from "./common/routes/PublicRoute";
// import PrivateRoute from "./common/routes/PrivateRoute";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <PublicRoute exact path="/login" restricted component={Auth} />
        {/* <PrivateRoute exact path="/" component={Dashboard}/> */}
        <Redirect from="/" to="/dashboard"/>
      </Switch>
    </Router>
  );
};

export default App;
