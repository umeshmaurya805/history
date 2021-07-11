import React from "react";
import Grid from "@material-ui/core/Grid";
import Layout from "../../common/Layout";
import FeaturedEvent from "./FeaturedEvent";
import EventStats from "../../common/EventStats";
import EventResult from "./EventResult";
import WelcomeBanner from "./WelcomeBanner";
import UpcomingEvent from "./UpcomingEvent";
// import Magazine from "./Magazine";
import Ad from "./Ad";
import useStyles from "./style";
import Title from "../../common/Title";

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
      <Grid container className={classes.container} justifyContent="center">
        <Grid item className={classes.mainSection}>
          <EventStats data={data} />
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
