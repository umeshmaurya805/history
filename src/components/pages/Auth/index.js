import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Container } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import NewFeatureCard from "../../card/NewFeatureCard";
import HDLogo from "../../../assets/images/hd-logo.png";
import tmpImage from "../../../assets/svg/tmp.svg";
import ForgotPassword from "../ForgotPassword";
import ResetPassword from "../ResetPassword";
import ValidateOTP from "../ValidateOTP";
import Login from "../Login";
import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  const canShowLogoOnMobile = useMediaQuery((theme) =>
    theme.breakpoints.down("sm")
  );

  const newFeaturesData = [
    {
      title: "Instant Settlement",
      image: tmpImage,
      description:
        "With Settle Now button on your dashboard, transfer your customer payments into your account in 10 seconds!",
      link: "/",
    },
    {
      title: "Payment Buttons",
      description:
        "Start accepting payments on your website or blog in less than 5 minutes. No coding needed.",
      link: "/",
    },
    // {
    //   title: "Instant Settlement",
    //   image: tmpImage,
    //   description:
    //     "With Settle Now button on your dashboard, transfer your customer payments into your account in 10 seconds!",
    //   link: "/",
    // },
    // {
    //   title: "Payment Buttons",
    //   description:
    //     "Start accepting payments on your website or blog in less than 5 minutes. No coding needed.",
    //   link: "/",
    // },
  ];

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} md={6} lg={7} className={classes.scrollableBoard}>
        <Hidden only={["xs", "sm"]}>
          <Container disableGutters className={classes.board}>
            <img
              src={HDLogo}
              alt="History Diaries Logo"
              className={classes.logo}
            />
            <Container disableGutters className={classes.featureList}>
              {newFeaturesData.map((data, index) => {
                const style = { paddingBottom: "50px" };

                return (
                  <NewFeatureCard
                    key={index}
                    title={data.title}
                    image={data.image}
                    description={data.description}
                    link={data.link}
                    style={style}
                  />
                );
              })}
            </Container>
          </Container>
        </Hidden>
      </Grid>
      <Grid
        item
        className={classes.paper}
        xs={12}
        sm={12}
        md={6}
        lg={5}
        component={Paper}
        elevation={6}
        square
      >
        {canShowLogoOnMobile ? (
          <img
            src={HDLogo}
            alt="History Diaries Logo"
            className={classes.logo}
          />
        ) : null}
        <Switch>
          <Route exact path={`${path}/login`} component={Login} />
          <Route
            exact
            path={`${path}/forgot-password`}
            component={ForgotPassword}
          />
          <Route
            exact
            path={`${path}/validate-otp/:resetToken`}
            component={ValidateOTP}
          />
          <Route
            exact
            path={`${path}/reset-password/:resetToken`}
            component={ResetPassword}
          />
          <Redirect to={`${path}/login`} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Auth;
