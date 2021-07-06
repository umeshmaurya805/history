import React from "react";
import Grid from "@material-ui/core/Grid";
import Layout from "../../common/Layout";
import FeaturedEvent from "../../common/FeaturedEvent";
import EventStats from "../../common/EventStats";
import EventResult from "../../common/EventResult";
import WelcomeBanner from "../../common/WelcomeBanner";
import UpcomingEvent from "../../common/UpcomingEvent";
// import Magazine from "../../common/Magazine";
import Ad from "../../common/Ad";
import useStyles from "./style";
import Title from "../../common/Title";

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
        <Grid item className={classes.ad}>
          <Ad />
        </Grid>
      </Grid>
      <Title tooltipText="List of the featured events that are open now">
        Featured Event
      </Title>
      <FeaturedEvent />
      <UpcomingEvent />
    </Layout>
  );
};

export default Home;
