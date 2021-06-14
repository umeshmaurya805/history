import React from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
// import Typography from "@material-ui/core/Typography";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
// import ForgotPassword from "../ForgotPassword";
import useStyles from "./styles";
import { Container } from "@material-ui/core";
import NewFeatureCard from "../../common/NewFeatureCard";
import HDLogo from "../../../assets/images/hd-logo.png";
import tmpImage from "../../../assets/images/tmp.svg";

const Auth = () => {
  const classes = useStyles();

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
      <Grid item xs={false} md={6} lg={7}>
        <Hidden only={["xs", "sm"]}>
          <Container disableGutters className={classes.board}>
            <img
              src={HDLogo}
              alt="History Diaries Logo"
              className={classes.logo}
            />
            <Container disableGutters className={classes.featureList}>
              {newFeaturesData.map((data, index) => {
                const style = index === 0 ? null : { marginTop: "40px" };

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
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Auth;
