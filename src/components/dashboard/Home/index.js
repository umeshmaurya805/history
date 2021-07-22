import React from "react";
import Grid from "@material-ui/core/Grid";
import Layout from "../../common/Layout";
import FeaturedEvent from "./FeaturedEvent";
import EventStats from "../../common/EventStats";
import EventResult from "./EventResult";
import WelcomeBanner from "./WelcomeBanner";
import UpcomingEvent from "./UpcomingEvent";
import Magazine from "./Magazine";
import Podcast from "./Podcast";
import Ad from "./Ad";
import useStyles from "./style";

const Home = () => {
  const classes = useStyles();
  const data = [
    {
      name: "Schools Partnered",
      value: 56,
    },
    {
      name: "Events Conducted",
      value: 56,
    },
    { name: "Total Participation", value: 4567 },
  ];

  return (
    <Layout>
      <WelcomeBanner />
      <EventStats data={data} />
      <EventResult />
      <Grid container className={classes.container} spacing={2}>
        <Grid item lg={4}>
          <Magazine />
        </Grid>
        <Grid item lg={4}>
          <Podcast />
        </Grid>
        <Grid item lg={4}>
          <Ad />
        </Grid>
      </Grid>
      <FeaturedEvent />
      <UpcomingEvent />
    </Layout>
  );
};

export default Home;
