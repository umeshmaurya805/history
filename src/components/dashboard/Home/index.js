import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Layout from "../../common/Layout";
import FeaturedEvent from "../../common/FeaturedEvent";
import EventStats from "../../common/EventStats";
import EventResult from "../../common/EventResult";
import WelcomeBanner from "../../common/WelcomeBanner";
import Magazine from "../../common/Magazine";
import Ad from "../../common/Ad";
import useStyles from "./style";

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>
      <WelcomeBanner />
      <Grid container className={classes.container} justify="center">
        <Grid item className={classes.mainSection}>
          <EventStats />
          <EventResult />
        </Grid>
        <Grid item className={classes.sideSection}>
          <Magazine />
        </Grid>
      </Grid>
      <Typography className={classes.title}>Featured Event</Typography>
      <Grid container className={classes.container} alignItems="center" justify="center">
        <Grid item className={classes.mainSection}>
          <FeaturedEvent />
        </Grid>
        <Grid item className={classes.sideSection}>
          <Ad />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
