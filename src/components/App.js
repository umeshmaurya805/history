import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./pages/Auth";
import Dashboard from "./dashboard";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import "./App.css";

const App = () => {
  /*** DEVELOPER SIGNATURE ***/
  console.log("Developed by Divyansh Singh Thakur");
  console.log("Professional Mobile & Web Developer");
  console.log("🔥🔥 https://github.com/DivyanshThakur 🔥🔥");

  return (
    <Router>
      <CssBaseline />
      <ToastContainer />
      <Switch>
        <PublicRoute path="/auth" restricted component={Auth} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  );
};

export default App;
